const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('public/assets/js/app.js', 'utf8');
new vm.Script(source);
const context = vm.createContext({});
vm.runInContext(source.slice(source.indexOf('    function pagePriority'), source.indexOf('    async function extractPagesAndImagesFromPDF')), context);
const pages = [
  {number: 1, text: 'Fabricante: <Nombre de la empresa>\nPICTOGRAMA: sección II'},
  {number: 2, text: 'Consejos de prudencia del etiquetado'},
  {number: 3, text: 'Texto irrelevante\n'.repeat(100)},
  {number: 4, text: 'Contenido neto: 25 kg\nTeléfono para emergencias: 123'},
  {number: 5, text: 'No UN/ID: 1830\nCantidad Exenta: 1L / E2'}
];
const result = context.buildDocumentContext({pages});
assert(result.includes('Contenido neto: 25 kg'));
assert(result.includes('No UN/ID: 1830'));
assert(result.includes('<Nombre de la empresa>'));
assert(!result.includes('Texto irrelevante'));
assert(source.includes("const apiUrl = '/api/extract'"));
assert(!source.includes('sk-or-'));
assert(require('../server/system-prompt').includes('Los marcadores'));
console.log('Contexto compacto, marcadores, transporte y proxy del backend: OK');
