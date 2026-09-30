'use strict';

const assert = require('node:assert/strict');

process.env.OPENROUTER_API_KEY = 'test-secret-key';
process.env.AI_REQUESTS_PER_HOUR = '10';
process.env.AI_CACHE_TTL_SECONDS = '60';

let upstreamCalls = 0;
let upstreamPayload;
global.fetch = async (_url, options) => {
  upstreamCalls += 1;
  upstreamPayload = JSON.parse(options.body);
  return new Response(JSON.stringify({ choices: [{ message: { content: '{"ok":true}' }, finish_reason: 'stop' }] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

const app = require('../server');

(async () => {
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const health = await localFetch(`${base}/api/health`);
    assert.deepEqual(await health.json(), { ok: true, configured: true });

    const invalid = await localFetch(`${base}/api/extract`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}'
    });
    assert.equal(invalid.status, 400);

    const request = { content: [{ type: 'text', text: 'Documento de prueba' }] };
    const first = await localFetch(`${base}/api/extract`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(request)
    });
    assert.equal(first.status, 200);
    assert.equal(first.headers.get('x-ai-cache'), 'MISS');
    assert.deepEqual(upstreamPayload.models, ['google/gemini-2.5-flash-lite', 'openai/gpt-4.1-mini']);
    assert.equal(upstreamPayload.messages[0].role, 'system');
    assert.equal(upstreamPayload.messages[1].role, 'user');
    assert.equal(upstreamPayload.response_format.type, 'json_schema');
    assert(upstreamPayload.response_format.json_schema.schema.required.includes('cantidadProducto'));

    const second = await localFetch(`${base}/api/extract`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(request)
    });
    assert.equal(second.headers.get('x-ai-cache'), 'HIT');
    assert.equal(upstreamCalls, 1);

    const frontend = await localFetch(base);
    assert.equal(frontend.status, 200);
    assert(!(await frontend.text()).includes('sk-or-'));
    console.log('Backend: proxy, modelos, validación, caché y archivos estáticos OK.');
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});

function localFetch(url, options) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const request = require('node:http').request({
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname,
      method: options?.method || 'GET',
      headers: options?.headers || {}
    }, response => {
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({
          status: response.statusCode,
          headers: { get: name => response.headers[name.toLowerCase()] || null },
          text: async () => buffer.toString('utf8'),
          json: async () => JSON.parse(buffer.toString('utf8'))
        });
      });
    });
    request.on('error', reject);
    if (options?.body) request.write(options.body);
    request.end();
  });
}
