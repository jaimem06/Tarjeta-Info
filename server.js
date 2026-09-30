'use strict';

const crypto = require('node:crypto');
const path = require('node:path');
const express = require('express');
const systemPrompt = require('./server/system-prompt');

const app = express();
const port = Number(process.env.PORT || 10000);
const primaryModel = process.env.PRIMARY_AI_MODEL || 'google/gemini-2.5-flash-lite';
const fallbackModel = process.env.FALLBACK_AI_MODEL || 'openai/gpt-4.1-mini';
const hourlyLimit = Math.max(1, Number(process.env.AI_REQUESTS_PER_HOUR || 30));
const maxConcurrent = Math.max(1, Number(process.env.AI_MAX_CONCURRENT || 3));
const cacheTtlMs = Math.max(60, Number(process.env.AI_CACHE_TTL_SECONDS || 86400)) * 1000;
const requestBuckets = new Map();
const responseCache = new Map();
let activeRequests = 0;

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(express.json({ limit: process.env.AI_BODY_LIMIT || '12mb' }));

function pruneMaps(now) {
  for (const [key, bucket] of requestBuckets) {
    if (bucket.resetAt <= now) requestBuckets.delete(key);
  }
  for (const [key, item] of responseCache) {
    if (item.expiresAt <= now) responseCache.delete(key);
  }
}

function validateContent(content) {
  if (!Array.isArray(content) || content.length < 1 || content.length > 7) {
    return 'El contenido del documento no tiene un formato válido.';
  }
  let textParts = 0;
  let imageParts = 0;
  let textLength = 0;
  for (const part of content) {
    if (!part || typeof part !== 'object') return 'Hay una parte inválida en el documento.';
    if (part.type === 'text') {
      if (typeof part.text !== 'string') return 'Hay texto inválido en el documento.';
      textParts += 1;
      textLength += part.text.length;
    } else if (part.type === 'image_url') {
      const url = part.image_url?.url;
      if (typeof url !== 'string' || !/^data:image\/(jpeg|png);base64,[A-Za-z0-9+/=]+$/.test(url)) {
        return 'Hay una imagen inválida en el documento.';
      }
      imageParts += 1;
    } else {
      return 'El documento contiene un tipo de contenido no permitido.';
    }
  }
  if (!textParts || textLength > 30000 || imageParts > 3) {
    return 'El documento excede los límites de texto o imágenes.';
  }
  return null;
}

function rateLimit(req, res, next) {
  const now = Date.now();
  pruneMaps(now);
  const key = req.ip || 'unknown';
  const bucket = requestBuckets.get(key) || { count: 0, resetAt: now + 60 * 60 * 1000 };
  if (bucket.count >= hourlyLimit) {
    const retryAfter = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
    res.set('Retry-After', String(retryAfter));
    return res.status(429).json({ error: { code: 429, message: 'Límite de extracciones alcanzado. Inténtalo más tarde.' } });
  }
  bucket.count += 1;
  requestBuckets.set(key, bucket);
  next();
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, configured: Boolean(process.env.OPENROUTER_API_KEY) });
});

app.post('/api/extract', rateLimit, async (req, res) => {
  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(503).json({ error: { code: 503, message: 'El servidor no tiene configurada la clave de IA.' } });
  }
  const validationError = validateContent(req.body?.content);
  if (validationError) return res.status(400).json({ error: { code: 400, message: validationError } });

  const cacheKey = crypto.createHash('sha256').update(JSON.stringify(req.body.content)).digest('hex');
  const cached = responseCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    res.set('X-AI-Cache', 'HIT');
    return res.json(cached.body);
  }
  if (activeRequests >= maxConcurrent) {
    res.set('Retry-After', '10');
    return res.status(503).json({ error: { code: 503, message: 'El servidor está procesando otras fichas. Inténtalo en unos segundos.' } });
  }

  activeRequests += 1;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 90000);
    let upstream;
    try {
      upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'X-OpenRouter-Title': 'Tarjetas de Seguridad Química',
          ...(process.env.PUBLIC_SITE_URL ? { 'HTTP-Referer': process.env.PUBLIC_SITE_URL } : {})
        },
        body: JSON.stringify({
          models: [primaryModel, fallbackModel].filter(Boolean),
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: req.body.content }
          ],
          response_format: { type: 'json_object' },
          temperature: 0,
          max_tokens: 5000
        })
      });
    } finally {
      clearTimeout(timeout);
    }

    const body = await upstream.json().catch(() => ({ error: { code: upstream.status, message: 'Respuesta inválida del proveedor de IA.' } }));
    for (const header of ['retry-after', 'x-ratelimit-limit', 'x-ratelimit-remaining', 'x-ratelimit-reset']) {
      const value = upstream.headers.get(header);
      if (value) res.set(header, value);
    }
    if (!upstream.ok) return res.status(upstream.status).json(body);

    responseCache.set(cacheKey, { body, expiresAt: Date.now() + cacheTtlMs });
    res.set('X-AI-Cache', 'MISS');
    return res.json(body);
  } catch (error) {
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: { code: 504, message: 'La extracción tardó demasiado. Inténtalo nuevamente.' } });
    }
    console.error('AI proxy error:', error.message);
    return res.status(502).json({ error: { code: 502, message: 'No se pudo contactar al proveedor de IA.' } });
  } finally {
    activeRequests -= 1;
  }
});

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

if (require.main === module) {
  app.listen(port, '0.0.0.0', () => console.log(`Servidor iniciado en el puerto ${port}`));
}

module.exports = app;
