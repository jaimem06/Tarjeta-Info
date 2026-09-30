const fs = require('node:fs');
const path = require('node:path');
const root = 'public/assets/vendor';
function copy(source, target) { fs.mkdirSync(path.dirname(target), {recursive:true}); fs.copyFileSync(source,target); }
for (const [pkg, files] of Object.entries({
  'pdfjs-dist': ['build/pdf.min.js','build/pdf.worker.min.js','LICENSE'],
  'html2canvas': ['dist/html2canvas.min.js','LICENSE'],
  'jspdf': ['dist/jspdf.umd.min.js','LICENSE'],
  '@fortawesome/fontawesome-free': ['css/all.min.css','webfonts/fa-solid-900.woff2','webfonts/fa-solid-900.ttf','LICENSE.txt'],
  '@fontsource/inter': ['latin-400.css','latin-500.css','latin-600.css','latin-700.css','latin-800.css','latin-900.css','LICENSE']
})) {
  for(const file of files) copy(`node_modules/${pkg}/${file}`,`${root}/${pkg}/${file}`);
}
for(const file of fs.readdirSync('node_modules/@fontsource/inter/files')) {
  if (/^inter-latin-(400|500|600|700|800|900)-normal\.woff2?$/.test(file)) copy(`node_modules/@fontsource/inter/files/${file}`,`${root}/@fontsource/inter/files/${file}`);
}
