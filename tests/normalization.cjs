'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('public/assets/js/app.js', 'utf8');
const start = source.indexOf('    function normalizeTextValue');
const end = source.indexOf('    function renderPictogramSelectorMatrix', start);
const context = vm.createContext({ Error, JSON, String, Array });
vm.runInContext(source.slice(start, end), context);

assert.equal(context.normalizeTextValue(null), '');
assert.equal(context.normalizeTextValue(12345), '12345');
assert.equal(context.normalizeTextValue(['H314', 'H318']), 'H314\nH318');
assert.deepEqual(
  JSON.parse(JSON.stringify(context.normalizeModelResult('```json\n{"agenteQuimico":"ÁCIDO"}\n```'))),
  { agenteQuimico: 'ÁCIDO' }
);
assert.deepEqual(
  JSON.parse(JSON.stringify(context.normalizeModelResult('Respuesta: {"cantidadProducto":null}'))),
  { cantidadProducto: null }
);
console.log('Normalización: campos ausentes, nulos, arrays y JSON delimitado OK.');
