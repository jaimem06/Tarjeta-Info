const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('public/assets/js/app.js','utf8');
const helper = source.slice(source.indexOf('    async function fetchWithRetry'), source.indexOf('    window.onload'));
(async () => {
  let calls = 0;
  const context = vm.createContext({aiRetryAt:0, fetch: async () => {
    calls++; return {ok:false, status:429, headers:{get: name => name === 'Retry-After' ? '120' : null},
      json: async () => ({error:{message:'Limited', metadata:{provider_name:'Example'}}})};
  }, setTimeout: () => {throw new Error('429 must not retry')}, TypeError});
  vm.runInContext(helper,context);
  await assert.rejects(context.fetchWithRetry('https://example.test',{}), /Example/);
  assert.equal(calls,1);
  assert(context.aiRetryAt >= Date.now() + 119000);
  console.log('429: una petición, sin reintentos, Retry-After respetado.');
})().catch(error => {console.error(error);process.exit(1)});
