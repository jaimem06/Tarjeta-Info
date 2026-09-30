// Initialize PDF.js worker URL
    if (window.pdfjsLib) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/vendor/pdfjs-dist/build/pdf.worker.min.js';
    }

    // Official Standard SGA / GHS Vector SVG Pictograms
    function generateGhsSvgDataUri(code) {
      let symbolInner = '';
      switch (code) {
        case 'GHS01': // Explosive
          symbolInner = `
            <path d="M50 32 A 11 11 0 1 0 50 54 A 11 11 0 1 0 50 32" fill="#000"/>
            <path d="M50 18 L50 10 M50 66 L50 74 M26 43 L18 43 M74 43 L82 43 M32 25 L24 17 M68 25 L76 17 M32 61 L24 69 M68 61 L76 69" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M40 22 C45 15 55 15 60 22 C67 18 75 23 75 30 C82 35 80 45 76 50 C80 57 74 65 67 65 C62 72 52 70 47 66 C40 70 32 64 32 57 C25 52 26 42 30 37 C26 30 33 22 40 22 Z" fill="none" stroke="#000" stroke-width="2.5"/>
          `;
          break;
        case 'GHS02': // Flammable
          symbolInner = `
            <path d="M50 18 C50 18 64 32 64 48 C64 62 58 72 48 74 C59 71 58 60 52 56 C46 52 46 42 41 38 C40 46 32 50 32 58 C32 68 40 74 50 74 C34 74 24 62 24 48 C24 35 38 24 50 18 Z" fill="#000"/>
            <path d="M50 44 C53 48 57 51 57 57 C57 63 53 67 48 67 C53 65 52 59 48 57 C45 55 45 50 43 48 C42 52 38 54 38 58 C38 63 42 67 48 67 C40 67 36 61 36 55 C36 49 43 46 50 44 Z" fill="#000"/>
          `;
          break;
        case 'GHS03': // Oxidizing
          symbolInner = `
            <ellipse cx="50" cy="58" rx="14" ry="14" fill="none" stroke="#000" stroke-width="5.5"/>
            <path d="M50 20 C50 20 60 30 60 40 C60 44 56 47 51 45 C56 43 55 36 50 33 C46 31 46 26 42 23 C42 29 37 31 37 37 C37 43 43 46 50 45 C41 45 35 39 35 33 C35 27 43 23 50 20 Z" fill="#000"/>
          `;
          break;
        case 'GHS04': // Gas Pressure
          symbolInner = `
            <rect x="42" y="24" width="16" height="46" rx="8" fill="#000"/>
            <rect x="45" y="18" width="10" height="6" fill="#000"/>
            <rect x="47" y="15" width="6" height="3" fill="#000"/>
            <line x1="34" y1="70" x2="66" y2="70" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
          `;
          break;
        case 'GHS05': // Corrosive
          symbolInner = `
            <line x1="18" y1="68" x2="82" y2="68" stroke="#000" stroke-width="4.5"/>
            <rect x="22" y="58" width="22" height="10" fill="#000"/>
            <path d="M54 68 L54 58 C54 55 57 54 60 54 C63 54 66 55 66 58 L66 68 Z" fill="#000"/>
            <path d="M50 68 L80 68 L80 62 C80 58 74 58 70 60 L62 55 C58 53 52 56 50 60 Z" fill="#000"/>
            <path d="M25 20 L38 38 L32 42 L19 24 Z" fill="#000"/>
            <path d="M75 20 L62 38 L68 42 L81 24 Z" fill="#000"/>
            <path d="M36 48 C36 51 33 53 33 53 C33 53 30 51 30 48 C30 46 33 44 33 44 C33 44 36 46 36 48 Z" fill="#000"/>
            <path d="M68 48 C68 51 65 53 65 53 C65 53 62 51 62 48 C62 46 65 44 65 44 C65 44 68 46 68 48 Z" fill="#000"/>
          `;
          break;
        case 'GHS06': // Toxic
          symbolInner = `
            <path d="M50 20 C37 20 28 29 28 41 C28 48 32 54 38 56 L38 62 L62 62 L62 56 C68 54 72 48 72 41 C72 29 63 20 50 20 Z" fill="#000"/>
            <ellipse cx="41" cy="38" rx="4.5" ry="5.5" fill="#fff"/>
            <ellipse cx="59" cy="38" rx="4.5" ry="5.5" fill="#fff"/>
            <path d="M50 45 L46 51 L54 51 Z" fill="#fff"/>
            <line x1="44" y1="56" x2="44" y2="62" stroke="#fff" stroke-width="2"/>
            <line x1="50" y1="56" x2="50" y2="62" stroke="#fff" stroke-width="2"/>
            <line x1="56" y1="56" x2="56" y2="62" stroke="#fff" stroke-width="2"/>
            <path d="M22 64 C20 62 20 59 23 58 C26 57 28 59 30 62 L70 76 C72 74 74 72 77 73 C80 74 80 77 78 79 C76 81 73 80 70 78 L30 64 C28 66 25 67 22 64 Z" fill="#000"/>
            <path d="M78 64 C80 62 80 59 77 58 C74 57 72 59 70 62 L30 76 C28 74 26 72 23 73 C20 74 20 77 22 79 C24 81 27 80 30 78 L70 64 C72 66 75 67 78 64 Z" fill="#000"/>
          `;
          break;
        case 'GHS07': // Harmful / Irritant
          symbolInner = `
            <path d="M44 20 L56 20 L53 58 L47 58 Z" fill="#000"/>
            <circle cx="50" cy="70" r="6" fill="#000"/>
          `;
          break;
        case 'GHS08': // Health Hazard
          symbolInner = `
            <circle cx="50" cy="27" r="7.5" fill="#000"/>
            <path d="M50 37 C41 37 31 43 28 52 C26 58 26 75 26 75 L74 75 C74 75 74 58 72 52 C69 43 59 37 50 37 Z" fill="#000"/>
            <path d="M50 48 L52 54 L58 52 L54 57 L59 61 L53 61 L50 67 L47 61 L41 61 L46 57 L42 52 L48 54 Z" fill="#fff"/>
          `;
          break;
        case 'GHS09': // Environment
          symbolInner = `
            <path d="M20 68 C35 63 45 73 60 66 C70 61 80 68 80 68 L80 72 L20 72 Z" fill="#000"/>
            <path d="M32 66 L32 32 M32 40 L24 30 M32 46 L40 38 M32 52 L22 46 M32 56 L38 52" stroke="#000" stroke-width="3" stroke-linecap="round"/>
            <path d="M52 56 C60 48 72 52 76 56 C72 60 60 64 52 56 Z" fill="#000"/>
            <polygon points="76,56 83,50 82,62" fill="#000"/>
            <circle cx="57" cy="54" r="1" fill="#fff"/>
          `;
          break;
      }

      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <polygon points="50,6 94,50 50,94 6,50" fill="#ffffff" stroke="#dc2626" stroke-width="7" stroke-linejoin="miter"/>
        ${symbolInner}
      </svg>`;

      return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
    }

    const GHS_OFFICIAL_ITEMS = {
      GHS01: { code: 'GHS01', name: 'Explosivo' },
      GHS02: { code: 'GHS02', name: 'Inflamable' },
      GHS03: { code: 'GHS03', name: 'Comburente' },
      GHS04: { code: 'GHS04', name: 'Gas Presión' },
      GHS05: { code: 'GHS05', name: 'Corrosivo' },
      GHS06: { code: 'GHS06', name: 'Toxicidad' },
      GHS07: { code: 'GHS07', name: 'Irritante' },
      GHS08: { code: 'GHS08', name: 'Salud' },
      GHS09: { code: 'GHS09', name: 'Medio Ambiente' }
    };

    function getGhsImageSrc(code) {
      return GHS_OFFICIAL_ITEMS[code] ? `./assets/images/ghs/${code}.png` : generateGhsSvgDataUri(code);
    }

    // Application State
    let currentData = {
      agenteQuimico: '',
      codigoUN: '',
      palabraAdvertencia: '',
      cantidadProducto: '',
      indicacionesPeligro: '',
      consejosPrudencia: '',
      fabricante: '',
      telefonoFabricante: '',
      direccionFabricante: '',
      telefonoEmergencia: '',
      pictogramas: []
    };

    let uploadedFileData = { text: '', images: [] };
    let zoomMode = 'fit'; // 'fit' or numeric scale factor
    let currentScaleFactor = 1;

    function fitCardToContainer() {
      const viewportContainer = document.getElementById('preview-viewport-container');
      const wrapper = document.getElementById('card-scale-wrapper');
      const card = document.getElementById('chemical-card-preview');
      const zoomText = document.getElementById('zoom-level-text');

      if (!viewportContainer || !wrapper || !card || !viewportContainer.clientWidth) return;

      const cardWidth = 840; // original card native width
      const cardHeight = 594; // original card native height

      const viewportStyle = getComputedStyle(viewportContainer);
      const availableWidth = viewportContainer.clientWidth - parseFloat(viewportStyle.paddingLeft) - parseFloat(viewportStyle.paddingRight);
      const availableHeight = Math.max(160, window.innerHeight - viewportContainer.getBoundingClientRect().top - 48);

      let calculatedScale = 1;

      if (zoomMode === 'fit') {
        const scaleX = availableWidth / cardWidth;
        const scaleY = availableHeight / cardHeight;
        calculatedScale = Math.min(scaleX, scaleY);
        // Fit even narrow phones without clipping the A4 sheet.
        calculatedScale = Math.max(0.1, Math.min(calculatedScale, 1.25));
      } else {
        calculatedScale = zoomMode;
      }

      currentScaleFactor = calculatedScale;

      card.style.transform = `scale(${calculatedScale})`;
      viewportContainer.style.overflow = zoomMode === 'fit' ? 'hidden' : 'auto';
      wrapper.style.width = `${cardWidth * calculatedScale}px`;
      wrapper.style.height = `${cardHeight * calculatedScale}px`;

      if (zoomText) {
        zoomText.textContent = `${Math.round(calculatedScale * 100)}%`;
      }
    }

    function setZoomMode(mode) {
      zoomMode = mode;

      const btnFit = document.getElementById('zoom-btn-fit');
      const btn1 = document.getElementById('zoom-btn-1');

      if (btnFit && btn1) {
        if (mode === 'fit') {
          btnFit.className = "px-2.5 py-1 text-[11px] font-bold rounded transition bg-white text-slate-800 shadow-sm";
          btn1.className = "px-2 py-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 rounded transition";
        } else if (mode === 1) {
          btnFit.className = "px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 rounded transition";
          btn1.className = "px-2 py-1 text-[11px] font-bold rounded transition bg-white text-slate-800 shadow-sm";
        } else {
          btnFit.className = "px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 rounded transition";
          btn1.className = "px-2 py-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 rounded transition";
        }
      }

      fitCardToContainer();
    }

    function adjustZoom(delta) {
      let current = zoomMode === 'fit' ? currentScaleFactor : zoomMode;
      let newZoom = Math.max(0.3, Math.min(2.0, current + delta));
      setZoomMode(parseFloat(newZoom.toFixed(2)));
    }

    function toggleFullscreenPreview() {
      const container = document.getElementById('preview-viewport-container');
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) container.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    }

    function switchMobileTab(tab) {
      const colForm = document.getElementById('col-form');
      const colPreview = document.getElementById('col-preview');
      const btnEdit = document.getElementById('tab-btn-edit');
      const btnPreview = document.getElementById('tab-btn-preview');

      if (tab === 'edit') {
        colForm.classList.remove('hidden');
        colPreview.classList.add('hidden', 'lg:block');

        btnEdit.className = "flex-1 py-2 px-3 rounded-lg text-xs font-bold transition text-center bg-slate-900 text-white shadow-sm flex items-center justify-center gap-2";
        btnPreview.className = "flex-1 py-2 px-3 rounded-lg text-xs font-bold transition text-center bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center gap-2";
      } else {
        colForm.classList.add('hidden');
        colPreview.classList.remove('hidden');

        btnPreview.className = "flex-1 py-2 px-3 rounded-lg text-xs font-bold transition text-center bg-slate-900 text-white shadow-sm flex items-center justify-center gap-2";
        btnEdit.className = "flex-1 py-2 px-3 rounded-lg text-xs font-bold transition text-center bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center gap-2";

        requestAnimationFrame(() => {
          fitCardContent();
          fitCardToContainer();
        });
      }
    }

    function showAIStatus(show, text = "", subtitle = "") {
      const el = document.getElementById('ai-status');
      const txt = document.getElementById('ai-status-text');

      const loader = document.getElementById('fullscreen-loader');
      const loaderTitle = document.getElementById('loader-title');
      const loaderSubtitle = document.getElementById('loader-subtitle');

      if (show) {
        if (el) {
          el.classList.remove('hidden');
          if (text) txt.textContent = text;
        }
        if (loader) {
          loader.classList.remove('hidden');
          if (text) loaderTitle.textContent = text;
          if (subtitle) loaderSubtitle.textContent = subtitle;
        }
      } else {
        if (el) el.classList.add('hidden');
        if (loader) loader.classList.add('hidden');
      }
    }

    async function handleFileSelect(event) {
      if (extractionRunning) return;
      const file = event.target.files ? event.target.files[0] : (event.dataTransfer ? event.dataTransfer.files[0] : null);
      if (!file) return;

      const fileInfo = document.getElementById('file-info');
      if (fileInfo) {
        fileInfo.textContent = `${file.name}`;
        fileInfo.classList.remove('hidden');
      }

      showAIStatus(true, "Cargando FDS...", "Iniciando lectura del documento...");
      await new Promise(r => setTimeout(r, 100));

      try {
        if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
          uploadedFileData = await extractPagesAndImagesFromPDF(file);
        } else if (/^image\/(png|jpeg)$/.test(file.type)) {
          const dataUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });
          uploadedFileData = { text: '', images: [{ page: 1, inlineData: { mimeType: file.type, data: dataUrl.split(',')[1] } }] };
        } else {
          const txt = await file.text();
          uploadedFileData = { text: txt, images: [] };
        }

        showAIStatus(true, "Analizando con IA...", "Extrayendo pictogramas, frases H/P y datos químicos...");
        await new Promise(r => setTimeout(r, 100));
        await processFDSWithAI();
      } catch (err) {
        console.error("Error al leer archivo:", err);
        showAIStatus(true, "Error al procesar", "Verifique que el archivo sea un PDF o TXT válido.");
        setTimeout(() => showAIStatus(false), 3000);
      }
    }

    function pagePriority(page) {
      const text = page.text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      let score = page.number <= 2 ? 20 : 0;
      if (/fabricante|manufacturer|supplier|proveedor|emergency|emergencia|1\.3|1\.4/.test(text)) score += 15;
      if (/pictogram|elementos de la etiqueta|label elements|2\.2/.test(text)) score += 15;
      if (/contenido neto|net content|presentacion|tamano del envase|pack size|packaging size|cantidad de producto/.test(text)) score += 12;
      if (text.trim().length < 80) score += 5;
      return score;
    }

    function compactPageText(page) {
      // Keep the first two pages intact: contact tables and product label usually live here.
      if (page.number <= 2) return page.text;
      const lines = page.text.split('\n');
      const keep = new Set();
      const relevant = /fabricante\s*:|manufacturer\s*:|proveedor\s*:|supplier\s*:|emergencia|emergency|pictogram|contenido neto|net content|presentaci[oó]n|pack size|cantidad de producto|UN\s*[/:-]|UN\s*\d{4}|tel[eé]fono\s*:/i;
      lines.forEach((line, index) => {
        if (relevant.test(line)) {
          for (let i = Math.max(0, index - 3); i <= Math.min(lines.length - 1, index + 6); i++) keep.add(i);
        }
      });
      return [...keep].sort((a, b) => a - b).map((index, i, list) =>
        (i && index > list[i - 1] + 1 ? '[…]\n' : '') + lines[index]).join('\n');
    }

    function buildDocumentContext(data, limit = 24000) {
      const pages = data.pages || [{ number: 1, text: data.text || '' }];
      const compactPages = pages.map(page => ({ ...page, text: compactPageText(page) }));
      const ranked = [...compactPages].sort((a, b) => pagePriority(b) - pagePriority(a) || a.number - b.number);
      const selected = [];
      let remaining = limit;
      for (const page of ranked) {
        const header = `=== PÁGINA ${page.number} ===\n`;
        if (remaining <= header.length) break;
        const text = page.text.slice(0, remaining - header.length);
        selected.push({ number: page.number, content: header + text, truncated: text.length < page.text.length });
        remaining -= header.length + text.length;
      }
      selected.sort((a, b) => a.number - b.number);
      const omitted = pages.filter(page => !selected.some(item => item.number === page.number)).map(page => page.number);
      return selected.map(page => page.content + (page.truncated ? '\n[TEXTO RECORTADO]' : '')).join('\n\n') +
        (omitted.length ? `\n[Páginas fuera del contexto de texto: ${omitted.join(', ')}]` : '');
    }

    async function extractPagesAndImagesFromPDF(file) {
      const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      const pages = [];
      const images = [];
      try {
        // Read every page before selecting the most relevant visual evidence.
        for (let number = 1; number <= pdf.numPages; number++) {
          showAIStatus(true, 'Leyendo PDF...', `Extrayendo texto de página ${number} de ${pdf.numPages}...`);
          const page = await pdf.getPage(number);
          const content = await page.getTextContent();
          let text = '', lastY = null;
          for (const item of content.items) {
            if (!item.str) continue;
            const y = item.transform?.[5];
            if (lastY !== null && y !== undefined && Math.abs(y - lastY) > 3.5) text += '\n';
            else if (text && !text.endsWith('\n')) text += ' ';
            text += item.str;
            if (item.hasEOL) text += '\n';
            lastY = y;
          }
          const anchors = content.items.filter(item => /pictogram/i.test(item.str || '')).map(item => item.transform[5]);
          pages.push({ number, text, anchors });
          page.cleanup();
        }
        // Text locates symbols; vision identifies them. Never infer a GHS code from a hazard phrase.
        const pictogramPages = pages.filter(page => page.anchors.length > 0)
          .sort((a, b) => a.number - b.number);
        const scans = pages.filter(page => page.text.trim().length < 80);
        const candidates = [...new Set([...pictogramPages, ...scans,
          ...(pictogramPages.length ? [] : pages.slice(0, 2))])];
        const selected = candidates.slice(0, 3).sort((a, b) => a.number - b.number);
        for (const item of selected) {
          showAIStatus(true, 'Leyendo PDF...', `Preparando imagen de página ${item.number}...`);
          const page = await pdf.getPage(item.number);
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: Math.min(2, 1800 / Math.max(base.width, base.height)) });
          const canvas = document.createElement('canvas');
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
          let imageCanvas = canvas;
          let region = 'página completa';
          if (item.anchors.length) {
            // Full-width band retains all symbols beside/under the label, regardless of column.
            const ys = item.anchors.map(y => viewport.convertToViewportPoint(0, y)[1]);
            const top = Math.max(0, Math.floor(Math.min(...ys) - 90 * viewport.scale));
            const bottom = Math.min(canvas.height, Math.ceil(Math.max(...ys) + 150 * viewport.scale));
            imageCanvas = document.createElement('canvas');
            imageCanvas.width = canvas.width;
            imageCanvas.height = Math.max(1, bottom - top);
            imageCanvas.getContext('2d').drawImage(canvas, 0, top, canvas.width, imageCanvas.height,
              0, 0, canvas.width, imageCanvas.height);
            region = 'recorte de la zona de pictogramas; no representa toda la página';
          }
          images.push({ page: item.number, region, inlineData: {
            mimeType: 'image/jpeg', data: imageCanvas.toDataURL('image/jpeg', 0.92).split(',')[1]
          }});
          if (imageCanvas !== canvas) imageCanvas.width = imageCanvas.height = 0;
          canvas.width = canvas.height = 0;
          page.cleanup();
        }
        const unpicturedScans = candidates.filter(page => !selected.includes(page));
        return { pages, text: pages.map(page => page.text).join('\n\n'), images,
          warning: unpicturedScans.length ? `Hay páginas candidatas sin analizar visualmente: ${unpicturedScans.map(page => page.number).join(', ')}. Revisa esas páginas antes de usar la tarjeta.` : '' };
      } finally {
        await pdf.destroy();
      }
    }

    let extractionRunning = false;
    let aiRetryAt = 0;

    async function processFDSWithAI() {
      if (extractionRunning) return;
      if (Date.now() < aiRetryAt) {
        showAIStatus(false);
        const box = document.getElementById('ai-error');
        box.textContent = `Espera ${Math.ceil((aiRetryAt - Date.now()) / 1000)} segundos antes de volver a solicitar la extracción. El archivo sigue cargado.`;
        box.hidden = false;
        return;
      }
      extractionRunning = true;
      const button = document.getElementById('btn-process-ai');
      button.disabled = true;
      try {
        await extractFDSData();
      } finally {
        extractionRunning = false;
        button.disabled = false;
      }
    }

    async function extractFDSData() {
      const errorBox = document.getElementById('ai-error');
      errorBox.hidden = true;
      errorBox.textContent = '';
      document.getElementById('ai-review').hidden = true;
      if (!uploadedFileData || (!uploadedFileData.text && uploadedFileData.images.length === 0)) {
        showAIStatus(true, "Archivo no válido", "Por favor seleccione un archivo FDS válido.");
        setTimeout(() => showAIStatus(false), 2000);
        return;
      }

      showAIStatus(true, "Analizando datos con IA...", "Identificando pictogramas SGA, clasificación H/P y datos del producto...");
      await new Promise(r => setTimeout(r, 50));

      const documentContext = buildDocumentContext(uploadedFileData);
      const userPromptText = `DOCUMENTO FDS CON PÁGINAS NUMERADAS:\n${documentContext}\n\nContrasta los datos con las imágenes adjuntas. Extrae todos los campos y sus evidencias. ${uploadedFileData.warning || ''}`;

      const messageParts = [{ type: 'text', text: userPromptText }];
      for (const img of uploadedFileData.images || []) {
        messageParts.push({ type: 'text', text: `Imagen de página ${img.page || 1} del documento (${img.region || 'página completa'})` });
        messageParts.push({ type: 'image_url', image_url: {
          url: `data:${img.inlineData.mimeType};base64,${img.inlineData.data}`
        }});
      }

      const apiUrl = '/api/extract';
      const payload = { content: messageParts };

      try {
        const response = await fetchWithRetry(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.error) throw new Error(result.error.message || 'OpenRouter no pudo completar la solicitud.');
        if (result.choices?.[0]?.finish_reason === 'length') throw new Error('La respuesta quedó incompleta. Vuelve a intentar la extracción.');
        const responseContent = result.choices?.[0]?.message?.content;
        const jsonText = Array.isArray(responseContent)
          ? responseContent.map(part => part?.text || '').join('')
          : responseContent;

        if (jsonText) {
          const parsed = normalizeModelResult(jsonText);
          if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('El modelo no devolvió una tarjeta válida.');
          const fields = ['agenteQuimico', 'palabraAdvertencia', 'codigoUN', 'indicacionesPeligro', 'consejosPrudencia', 'telefonoFabricante', 'direccionFabricante', 'telefonoEmergencia', 'fabricante', 'cantidadProducto'];
          for (const field of fields) parsed[field] = normalizeTextValue(parsed[field]);
          if (!parsed.evidencias || typeof parsed.evidencias !== 'object') parsed.evidencias = {};
          for (const key of ['fabricante', 'telefonoFabricante', 'direccionFabricante', 'telefonoEmergencia', 'cantidadProducto', 'pictogramas']) {
            const items = Array.isArray(parsed.evidencias[key]) ? parsed.evidencias[key] : [];
            parsed.evidencias[key] = items.map(item => ({
              pagina: Number(item?.pagina),
              cita: normalizeTextValue(item?.cita)
            })).filter(item => Number.isInteger(item.pagina) && item.pagina > 0 && item.cita);
          }
          if (!Array.isArray(parsed.revision)) parsed.revision = parsed.revision ? [String(parsed.revision)] : [];
          if (!Array.isArray(parsed.pictogramas)) {
            parsed.pictogramas = String(parsed.pictogramas || '').toUpperCase().match(/GHS0[1-9]/g) || [];
          }
          const validGHS = ["GHS01", "GHS02", "GHS03", "GHS04", "GHS05", "GHS06", "GHS07", "GHS08", "GHS09"];
          const filteredPictos = [...new Set((parsed.pictogramas || []).filter(p => typeof p === 'string' && validGHS.includes(p.toUpperCase())).map(p => p.toUpperCase()))];

          const review = Array.isArray(parsed.revision) ? parsed.revision.filter(item => typeof item === 'string') : [];
          if (uploadedFileData.warning) review.push(uploadedFileData.warning);
          const labels = { fabricante: 'Nombre del fabricante', telefonoFabricante: 'Teléfono del fabricante', direccionFabricante: 'Dirección', telefonoEmergencia: 'Teléfono de emergencia', cantidadProducto: 'Cantidad de producto', pictogramas: 'Pictogramas' };
          for (const [field, label] of Object.entries(labels)) {
            const evidence = parsed.evidencias?.[field];
            const supported = Array.isArray(evidence) && evidence.some(item =>
              Number.isInteger(item.pagina) && item.pagina > 0 &&
              item.pagina <= (uploadedFileData.pages?.length || 1) &&
              typeof item.cita === 'string' && item.cita.trim());
            if (field === 'pictogramas' && supported) {
              for (let i = filteredPictos.length - 1; i >= 0; i--) {
                const code = filteredPictos[i];
                if (!evidence.some(item => Number.isInteger(item.pagina) && item.pagina > 0 &&
                    item.pagina <= (uploadedFileData.pages?.length || 1) &&
                    typeof item.cita === 'string' && item.cita.toUpperCase().includes(code))) {
                  review.push(`${code}: sin evidencia individual; comprueba el pictograma en la sección 2.`);
                }
              }
            }
            if (!supported) {
              review.push(`${label}: el modelo no indicó una evidencia verificable; contrasta el dato con el documento.`);
            }
          }
          for (const field of ['fabricante', 'telefonoFabricante', 'direccionFabricante', 'telefonoEmergencia', 'cantidadProducto']) {
            if (/<[^>]+>|^x{2,}$|^[-_.\s]+$/i.test(parsed[field])) {
              parsed[field] = '';
              review.push(`${labels[field]}: el documento contiene un marcador de plantilla, no un dato real.`);
            }
          }
          const reviewBox = document.getElementById('ai-review');
          reviewBox.textContent = [...new Set(review)].join('\n');
          reviewBox.hidden = !reviewBox.textContent;

          currentData = {
            agenteQuimico: parsed.agenteQuimico || "",
            palabraAdvertencia: parsed.palabraAdvertencia || "",
            codigoUN: parsed.codigoUN || "",
            indicacionesPeligro: parsed.indicacionesPeligro || "",
            consejosPrudencia: parsed.consejosPrudencia || "",
            telefonoFabricante: parsed.telefonoFabricante || "",
            direccionFabricante: parsed.direccionFabricante || "",
            telefonoEmergencia: parsed.telefonoEmergencia || "",
            fabricante: parsed.fabricante || "",
            cantidadProducto: parsed.cantidadProducto || "",
            pictogramas: filteredPictos
          };

          updateUIFromData();
          showAIStatus(true, "¡Análisis Completado!", "Generando vista previa de la tarjeta...");
          setTimeout(() => showAIStatus(false), 1200);
        } else {
          throw new Error("Sin respuesta estructurada del modelo.");
        }
      } catch (err) {
        console.error("Error al procesar con IA:", err);
        showAIStatus(false);
        errorBox.textContent = err.message;
        errorBox.hidden = false;
      }
    }

    function normalizeTextValue(value) {
      if (typeof value === 'string') return value.trim();
      if (typeof value === 'number') return String(value);
      if (Array.isArray(value)) return value.map(normalizeTextValue).filter(Boolean).join('\n');
      return '';
    }

    function normalizeModelResult(value) {
      if (value && typeof value === 'object') return value;
      let text = String(value || '').trim();
      text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
      try {
        return JSON.parse(text);
      } catch (_error) {
        const start = text.indexOf('{');
        const end = text.lastIndexOf('}');
        if (start >= 0 && end > start) return JSON.parse(text.slice(start, end + 1));
        throw new Error('La IA respondió, pero no generó un JSON válido. Vuelve a intentar la extracción.');
      }
    }

    function renderPictogramSelectorMatrix() {
      const grid = document.getElementById('pictogram-selector-grid');
      if (!grid) return;

      grid.innerHTML = '';
      Object.keys(GHS_OFFICIAL_ITEMS).forEach(code => {
        const item = GHS_OFFICIAL_ITEMS[code];
        const isSelected = currentData.pictogramas.includes(code);
        const imageSrc = getGhsImageSrc(code);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = `pic-btn-${code}`;
        btn.onclick = () => togglePictogram(code);
        btn.className = `pic-selector border rounded-xl p-1.5 text-center flex flex-col items-center justify-center gap-1 transition-all ${
          isSelected 
            ? 'bg-red-50 border-red-500 ring-2 ring-red-400/40 shadow-sm scale-105' 
            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-100/60'
        }`;

        btn.innerHTML = `
          <img src="${imageSrc}" alt="${code}" crossorigin="anonymous" onerror="this.onerror=null; this.src=generateGhsSvgDataUri('${code}');" class="w-6 h-6 object-contain pointer-events-none" />
          <span class="text-[9.5px] ${isSelected ? 'text-red-700 font-bold' : 'text-slate-600'} font-medium leading-tight">${code}</span>
        `;
        grid.appendChild(btn);
      });
    }

    function formatStatementsForCard(value) {
      const lines = String(value || '')
        .replace(/\r/g, '')
        .split('\n')
        .map(line => line.trim());
      const statementStart = /^(?:[•*-]\s*)?(?:(?:EUH|[HP])\d{3}[A-Z]?)(?:\s*\+\s*(?:(?:EUH|[HP])\d{3}[A-Z]?))*/i;
      const statements = [];
      let current = '';

      for (const line of lines) {
        if (!line) {
          if (current) {
            statements.push(current);
            current = '';
          }
          continue;
        }

        if (statementStart.test(line)) {
          if (current) statements.push(current);
          current = line;
        } else {
          current = current ? `${current} ${line}` : line;
        }
      }

      if (current) statements.push(current);
      return statements.join('\n');
    }

    function renderCardPreview() {
      document.getElementById('card-agente').textContent = currentData.agenteQuimico;
      document.getElementById('card-un').textContent = currentData.codigoUN;
      document.getElementById('card-palabra').textContent = currentData.palabraAdvertencia;
      document.getElementById('card-indicaciones').textContent = formatStatementsForCard(currentData.indicacionesPeligro);
      document.getElementById('card-consejos').textContent = formatStatementsForCard(currentData.consejosPrudencia);
      document.getElementById('card-telefonoFabricante').textContent = currentData.telefonoFabricante || '';
      document.getElementById('card-direccionFabricante').textContent = currentData.direccionFabricante || '';
      document.getElementById('card-telefonoEmergencia').textContent = currentData.telefonoEmergencia || '';
      document.getElementById('card-fabricante').textContent = currentData.fabricante || '';
      document.getElementById('card-cantidad').textContent = currentData.cantidadProducto;

      const container = document.getElementById('card-pictograms-container');
      container.innerHTML = '';

      const count = currentData.pictogramas ? currentData.pictogramas.length : 0;
      let dynamicSize = '72px';
      if (count === 1) {
        dynamicSize = '145px';
      } else if (count === 2) {
        dynamicSize = '115px';
      } else if (count === 3 || count === 4) {
        dynamicSize = '92px';
      }

      if (currentData.pictogramas && currentData.pictogramas.length > 0) {
        currentData.pictogramas.forEach(code => {
          if (GHS_OFFICIAL_ITEMS[code]) {
            const picWrapper = document.createElement('div');
            picWrapper.className = 'ghs-official-pictogram flex items-center justify-center';
            picWrapper.style.width = dynamicSize;
            picWrapper.style.height = dynamicSize;

            const img = document.createElement('img');
            img.src = getGhsImageSrc(code);
            img.alt = `Pictograma SGA ${code}`;
            img.setAttribute('crossorigin', 'anonymous');
            img.onerror = function() {
              this.onerror = null;
              this.src = generateGhsSvgDataUri(code);
            };

            picWrapper.appendChild(img);
            container.appendChild(picWrapper);
          }
        });
      }

      // Fit once with the updated text and repeat on the next paint so rapid
      // typing, web-font rendering and PDF capture all use the same metrics.
      fitCardContent();
      requestAnimationFrame(fitCardContent);
    }

    function setGroupMetrics(entries, scale, baseLineHeight, minLineHeight) {
      const lineHeight = minLineHeight + (baseLineHeight - minLineHeight) * scale;
      for (const entry of entries) {
        entry.element.style.fontSize = `${Math.max(entry.minSize, entry.baseSize * scale)}px`;
        entry.element.style.lineHeight = String(lineHeight);
      }
    }

    function getInnerHeight(element) {
      const styles = getComputedStyle(element);
      return element.clientHeight
        - parseFloat(styles.paddingTop || 0)
        - parseFloat(styles.paddingBottom || 0);
    }

    // Measures only the real contents. Using container.scrollHeight here is not
    // reliable because flexbox's justify-content adds empty distributed space.
    function measureTallestColumn(container) {
      return Math.max(0, ...Array.from(container.children, child => child.scrollHeight));
    }

    function measureStatementStack(container) {
      return Array.from(container.children).reduce((height, child) => {
        const styles = getComputedStyle(child);
        return height
          + child.scrollHeight
          + parseFloat(styles.marginTop || 0)
          + parseFloat(styles.marginBottom || 0);
      }, 0);
    }

    function fitGroupToContent(container, entries, options) {
      if (!container || entries.some(entry => !entry.element)) return false;

      const availableHeight = getInnerHeight(container);
      const measure = options.measure || measureTallestColumn;
      const safetyMargin = options.safetyMargin || 0;
      const fits = () => measure(container) <= availableHeight - safetyMargin;

      // Keep the normal, readable size whenever the content already fits.
      setGroupMetrics(entries, 1, options.lineHeight, options.minLineHeight);
      const requiredAtBaseSize = measure(container);
      if (fits()) return true;

      // The first reduction follows a non-linear density curve. A binary search
      // then finds the largest readable size that actually fits in the browser.
      const densityRatio = Math.max(0.01, availableHeight / requiredAtBaseSize);
      let candidate = Math.max(
        options.minScale,
        Math.min(1, Math.pow(densityRatio, options.densityExponent || 0.78))
      );
      setGroupMetrics(entries, candidate, options.lineHeight, options.minLineHeight);

      let low;
      let high;
      let best;
      if (fits()) {
        low = candidate;
        high = 1;
        best = candidate;
      } else {
        low = options.minScale;
        high = candidate;
        setGroupMetrics(entries, low, options.lineHeight, options.minLineHeight);
        best = low;
        if (!fits()) return false;
      }

      for (let iteration = 0; iteration < 12; iteration += 1) {
        const middle = (low + high) / 2;
        setGroupMetrics(entries, middle, options.lineHeight, options.minLineHeight);
        if (fits()) {
          best = middle;
          low = middle;
        } else {
          high = middle;
        }
      }

      setGroupMetrics(entries, best, options.lineHeight, options.minLineHeight);
      return true;
    }

    // Preserve the A4 margins and section positions; only typography is compressed.
    function fitCardContent() {
      const content = document.getElementById('card-content');
      if (!content?.clientHeight) return;
      content.style.transform = 'none';

      const top = document.getElementById('card-top');
      const middle = document.getElementById('card-statements');
      const bottom = document.getElementById('card-bottom');
      const manufacturer = document.querySelector('.manufacturer-details');

      fitGroupToContent(top, [
        { element: document.getElementById('card-agente'), baseSize: 24, minSize: 12 },
        { element: document.getElementById('card-un'), baseSize: 12, minSize: 8 }
      ], { minScale: 0.5, lineHeight: 1.2, minLineHeight: 1.05 });

      const statementText = [
        document.getElementById('card-indicaciones'),
        document.getElementById('card-consejos')
      ];
      fitGroupToContent(middle, statementText.map(element =>
        ({ element, baseSize: 12, minSize: 8 })), {
        minScale: 2 / 3,
        lineHeight: 1.45,
        minLineHeight: 1.12,
        densityExponent: 0.78,
        measure: measureStatementStack
      });

      fitGroupToContent(bottom, [
        { element: manufacturer, baseSize: 11, minSize: 8 },
        { element: document.getElementById('card-cantidad'), baseSize: 12, minSize: 8 }
      ], {
        minScale: 2 / 3,
        lineHeight: 1.35,
        minLineHeight: 1.08,
        safetyMargin: 2
      });
    }
    window.addEventListener('resize', fitCardContent);
    document.fonts.ready.then(fitCardContent);

    function updateUIFromData() {
      document.getElementById('input-agente').value = currentData.agenteQuimico || '';
      document.getElementById('input-un').value = currentData.codigoUN || '';
      document.getElementById('input-palabra').value = currentData.palabraAdvertencia || '';
      document.getElementById('input-cantidad').value = currentData.cantidadProducto || '';
      document.getElementById('input-indicaciones').value = currentData.indicacionesPeligro || '';
      document.getElementById('input-consejos').value = currentData.consejosPrudencia || '';
      document.getElementById('input-telefonoFabricante').value = currentData.telefonoFabricante || '';
      document.getElementById('input-direccionFabricante').value = currentData.direccionFabricante || '';
      document.getElementById('input-telefonoEmergencia').value = currentData.telefonoEmergencia || '';
      document.getElementById('input-fabricante').value = currentData.fabricante || '';

      renderPictogramSelectorMatrix();
      renderCardPreview();
      fitCardToContainer();
    }

    function updateCardFromInputs() {
      currentData.agenteQuimico = document.getElementById('input-agente').value;
      currentData.codigoUN = document.getElementById('input-un').value;
      currentData.palabraAdvertencia = document.getElementById('input-palabra').value;
      currentData.cantidadProducto = document.getElementById('input-cantidad').value;
      currentData.indicacionesPeligro = document.getElementById('input-indicaciones').value;
      currentData.consejosPrudencia = document.getElementById('input-consejos').value;
      currentData.telefonoFabricante = document.getElementById('input-telefonoFabricante').value;
      currentData.direccionFabricante = document.getElementById('input-direccionFabricante').value;
      currentData.telefonoEmergencia = document.getElementById('input-telefonoEmergencia').value;
      currentData.fabricante = document.getElementById('input-fabricante').value;

      renderCardPreview();
    }

    function togglePictogram(code) {
      const index = currentData.pictogramas.indexOf(code);
      if (index > -1) {
        currentData.pictogramas.splice(index, 1);
      } else {
        currentData.pictogramas.push(code);
      }
      renderPictogramSelectorMatrix();
      renderCardPreview();
    }

    function resetForm() {
      document.getElementById('ai-review').hidden = true;
      document.getElementById('ai-error').hidden = true;
      currentData = {
        agenteQuimico: '',
        codigoUN: '',
        palabraAdvertencia: '',
        cantidadProducto: '',
        indicacionesPeligro: '',
        consejosPrudencia: '',
        telefonoFabricante: '',
        direccionFabricante: '',
        telefonoEmergencia: '',
        fabricante: '',
        pictogramas: []
      };
      updateUIFromData();
    }

    async function exportToPDF() {
      const card = document.getElementById('chemical-card-preview');
      const wrapper = document.getElementById('card-scale-wrapper');
      const btnHeader = document.getElementById('btn-export-pdf');

      btnHeader.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i><span>Generando PDF...</span>`;
      btnHeader.disabled = true;

      // Save transform scale state and temporarily reset for 100% resolution export
      const preview = document.getElementById('col-preview');
      const savedDisplay = preview.style.display;
      preview.style.display = 'block';
      const savedTransform = card.style.transform;
      const savedWidth = wrapper.style.width;
      const savedHeight = wrapper.style.height;

      card.style.transform = 'none';
      wrapper.style.width = '840px';
      wrapper.style.height = '594px';

      try {
        await document.fonts.ready;
        fitCardContent();
        const canvas = await html2canvas(card, {
          scale: 3, // High DPI capture
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF('landscape', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        const safeName = (currentData.agenteQuimico || 'Tarjeta_SGA')
          .trim()
          .replace(/[^a-zA-Z0-9_-]/g, '_')
          .toUpperCase();

        pdf.save(`Tarjeta_Seguridad_${safeName || 'SGA'}.pdf`);

      } catch (err) {
        console.error("Error exportando a PDF:", err);
        showAIStatus(true, "Error al exportar PDF: " + err.message);
        setTimeout(() => showAIStatus(false), 4000);
      } finally {
        // Restore responsive transform
        preview.style.display = savedDisplay;
        card.style.transform = savedTransform;
        wrapper.style.width = savedWidth;
        wrapper.style.height = savedHeight;

        btnHeader.innerHTML = `<i class="fa-solid fa-file-pdf text-sm"></i><span>Descargar PDF</span>`;
        btnHeader.disabled = false;
      }
    }

    async function fetchWithRetry(url, options, retries = 3, backoff = 5000) {
      try {
        const res = await fetch(url, options);
        if (res.ok) return res;
        const body = await res.json().catch(() => null);
        const reason = body?.error?.code;
        const detail = [body?.error?.message, reason].filter(Boolean).join(' — ');
        let message = `OpenRouter devolvió HTTP ${res.status}${detail ? ': ' + detail : '.'}`;
        if (res.status === 401) {
          message = `OpenRouter rechazó la credencial (401${reason ? ': ' + reason : ''}). Revisa o reemplaza la clave en OpenRouter. No es un error del archivo FDS.`;
        } else if (res.status === 403) {
          message = `OpenRouter denegó el acceso (403). Revisa los permisos y restricciones de la clave. ${detail}`;
        }
        if (res.status === 402) message = 'OpenRouter rechazó la solicitud gratuita (402). Revisa las restricciones o el saldo de la cuenta en OpenRouter. La aplicación usa un modelo gratuito y no cambia a modelos de pago.';
        if (res.status === 429) {
          const provider = body?.error?.metadata?.provider_name;
          message = provider
            ? `El proveedor ${provider} limita temporalmente este modelo gratuito (429). El archivo sigue cargado. Inténtalo más tarde.`
            : 'OpenRouter alcanzó un límite de solicitudes gratuitas (429). El archivo sigue cargado. Espera a que se restablezca el cupo.';
        }
        if (res.status === 503) {
          message = 'OpenRouter está temporalmente saturado (503). El archivo sigue cargado. Espera unos minutos y pulsa «Extraer con IA» para volver a intentarlo.';
        }
        const error = new Error(message);
        error.status = res.status;
        const retryAfter = res.headers.get('Retry-After');
        const retrySeconds = Number(retryAfter);
        const headerDelay = retryAfter === null ? 0 : (Number.isFinite(retrySeconds)
          ? retrySeconds * 1000 : Date.parse(retryAfter) - Date.now());
        error.retryDelay = Math.max(0, headerDelay || 0);
        if (res.status === 429) {
          const resetRaw = res.headers.get('X-RateLimit-Reset') || body?.error?.metadata?.headers?.['X-RateLimit-Reset'];
          const reset = Number(resetRaw);
          const resetAt = Number.isFinite(reset) && reset > 0 ? (reset < 1e12 ? reset * 1000 : reset) : 0;
          aiRetryAt = Math.max(Date.now() + Math.max(error.retryDelay, 60000), resetAt);
          error.message += ' No se harán reintentos automáticos.';
        }
        throw error;
      } catch (err) {
        const retryable = err.status >= 500 || (!err.status && err instanceof TypeError);
        if (retryable && retries > 0) {
          const delay = Math.max(backoff + Math.floor(Math.random() * 1000), err.retryDelay || 0);
          // Leave very long waits to a manual retry instead of blocking the interface.
          if (delay > 60000) throw err;
          showAIStatus(true, 'OpenRouter no está disponible temporalmente',
            `Reintentando en ${Math.ceil(delay / 1000)} segundos. Reintentos restantes: ${retries}.`);
          await new Promise(r => setTimeout(r, delay));
          showAIStatus(true, 'Analizando datos con IA...', 'Reintentando la solicitud a OpenRouter...');
          return fetchWithRetry(url, options, retries - 1, backoff * 2);
        }
        throw err;
      }
    }

    window.onload = function() {
      const dropZone = document.getElementById('drop-zone');
      if (dropZone) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
          dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
          }, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
          dropZone.addEventListener(eventName, () => dropZone.classList.add('border-red-500', 'bg-red-50/50'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
          dropZone.addEventListener(eventName, () => dropZone.classList.remove('border-red-500', 'bg-red-50/50'), false);
        });

        dropZone.addEventListener('drop', (e) => {
          const files = e.dataTransfer ? e.dataTransfer.files : null;
          if (files && files.length > 0) {
            handleFileSelect({ target: { files: files } });
          }
        }, false);
      }

      updateUIFromData();

      // Window Resize listener for recalculating card scale
      window.addEventListener('resize', fitCardToContainer);
      document.addEventListener('fullscreenchange', fitCardToContainer);
    };
