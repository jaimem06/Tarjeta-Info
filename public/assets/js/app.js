// Initialize PDF.js worker URL
    if (window.pdfjsLib) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
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

    const GHS_DRIVE_IDS = {
      GHS01: '1-1_EdvYX5SNsBqtaJwddi5NQP7pUN85F',
      GHS02: '13dxMluvO6JfNBoeXlEh9nvzkwTba9BZv',
      GHS03: '17sy2eJnOjnUy15luTfMs7C0NogZ8RNCV',
      GHS04: '1ChFLUHN0B1DoxVog3RFIrj-hmREXC2xC',
      GHS05: '1FxTZhdWsIkqVj3NpHd-Kj6op301ocdg_',
      GHS06: '1ZHQp2eU8Mjl1b0ZS7e9rVu9o60CwrVf1',
      GHS07: '1agAsfVslgZfH5Iy2Ryf8yYyX5LQ4AiQf',
      GHS08: '1fnM8vOXG_gUx2YM1orfuhwZpYOfq0Va4',
      GHS09: '1l0yZCLfOYrSqN-TRNtFcPrxzgbPfA8tn'
    };

    function getGhsImageSrc(code) {
      const driveId = GHS_DRIVE_IDS[code];
      if (driveId) {
        return `https://lh3.googleusercontent.com/d/${driveId}`;
      }
      return generateGhsSvgDataUri(code);
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

    async function extractPagesAndImagesFromPDF(file) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';
      let pageImages = [];

      const totalPages = pdf.numPages;
      const maxTextPages = Math.min(totalPages, 15);
      const maxImagePages = Math.min(totalPages, 4);

      for (let i = 1; i <= maxTextPages; i++) {
        showAIStatus(true, "Leyendo PDF...", `Procesando texto e imágenes de pág. ${i} de ${totalPages}...`);
        await new Promise(r => setTimeout(r, 20));

        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        let pageText = '';
        let lastY = null;

        for (const item of textContent.items) {
          if (!item.str) continue;
          const currentY = item.transform ? item.transform[5] : null;
          if (lastY !== null && currentY !== null && Math.abs(currentY - lastY) > 3.5) {
            pageText += '\n';
          } else if (pageText.length > 0 && !pageText.endsWith('\n') && !pageText.endsWith(' ')) {
            pageText += ' ';
          }
          pageText += item.str;
          lastY = currentY;
        }

        fullText += `=== SECCIÓN / PÁGINA ${i} ===\n` + pageText + '\n\n';

        if (i <= maxImagePages) {
          try {
            const viewport = page.getViewport({ scale: 1.2 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport: viewport }).promise;
            const base64Jpg = canvas.toDataURL('image/jpeg', 0.82).split(',')[1];
            if (base64Jpg) {
              pageImages.push({
                inlineData: {
                  mimeType: 'image/jpeg',
                  data: base64Jpg
                }
              });
            }
          } catch (e) {
            console.warn("No se pudo renderizar la página visual", i, e);
          }
        }
      }
      return { text: fullText, images: pageImages };
    }

    async function processFDSWithAI() {
      if (!uploadedFileData || (!uploadedFileData.text && uploadedFileData.images.length === 0)) {
        showAIStatus(true, "Archivo no válido", "Por favor seleccione un archivo FDS válido.");
        setTimeout(() => showAIStatus(false), 2000);
        return;
      }

      showAIStatus(true, "Analizando datos con IA...", "Identificando pictogramas SGA, clasificación H/P y datos del producto...");
      await new Promise(r => setTimeout(r, 50));

      const systemPrompt = `Eres un especialista internacional de primer nivel en Higiene Industrial, Seguridad Química y Fichas de Datos de Seguridad (FDS / SDS / MSDS) bajo el Sistema Globalmente Armonizado (SGA/GHS) (ISO 11014).

Tu misión es analizar minuciosamente el documento adjunto (tanto el texto estructurado como las imágenes visuales de las páginas de la FDS) para extraer exhaustivamente toda la información requerida en las tarjetas de seguridad química.

REGLAS DE EXTRACCIÓN DETALLADAS POR CAMPO:

1. "agenteQuimico":
   - Nombre comercial o denominación química oficial de la sustancia o mezcla (Sección 1 / Encabezado).
   - Elección principal en mayúsculas (ej. "ACETONA INDUSTRIAL", "ÁCIDO CLORHÍDRICO 37%").

2. "codigoUN":
   - Número de 4 dígitos UN en la Sección 14 o Sección 1/3 con sus componentes (ej. "UN 1090 | Acetona >99.5%").

3. "palabraAdvertencia":
   - Asigna ESTRICTAMENTE uno de estos tres valores: "PELIGRO", "ATENCIÓN", "SIN PALABRA DE ADVERTENCIA".

4. "indicacionesPeligro":
   - Frases H completas con sus códigos (ej. "H225: Líquido y vapores muy inflamables.\nH319: Provoca irritación ocular grave.").

5. "consejosPrudencia":
   - Frases P completas con sus códigos (ej. "P210: Mantener alejado del calor...\nP280: Llevar guantes de protección.").

6. "fabricante":
   - Solo el nombre del fabricante.
   - Extrae por separado "telefonoFabricante", "direccionFabricante" y "telefonoEmergencia" de la sección 1.
   - No confundas los teléfonos. Si un dato no consta, devuelve una cadena vacía; no lo inventes.

7. "cantidadProducto":
   - Formato o volumen del envase (ej. "Tambor 208 L", "Bidón 20 L", "Envase del proceso").

8. "pictogramas":
   - Array con los códigos de pictogramas SGA identificados: ["GHS01", "GHS02", "GHS03", "GHS04", "GHS05", "GHS06", "GHS07", "GHS08", "GHS09"].

Devuelve ÚNICAMENTE un objeto JSON válido.`;

      const truncatedText = uploadedFileData.text ? uploadedFileData.text.substring(0, 25000) : '';
      const userPromptText = `DOCUMENTO FDS EXTRAÍDO:\n\n${truncatedText}\n\nPor favor analiza minuciosamente tanto el texto anterior como las imágenes adjuntas para extraer todos los campos requeridos en el JSON.`;

      const messageParts = [{ text: userPromptText }];

      if (uploadedFileData.images && uploadedFileData.images.length > 0) {
        uploadedFileData.images.forEach(img => {
          messageParts.push(img);
        });
      }

      const apiKey = "AQ.Ab8RN6Icta-AnfBaugz4ySfu4AfznhcO5rpgbGJQqGdzY7wGtQ";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: messageParts }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              "agenteQuimico": { "type": "STRING" },
              "palabraAdvertencia": { "type": "STRING" },
              "codigoUN": { "type": "STRING" },
              "indicacionesPeligro": { "type": "STRING" },
              "consejosPrudencia": { "type": "STRING" },
              "telefonoFabricante": { "type": "STRING" },
              "direccionFabricante": { "type": "STRING" },
              "telefonoEmergencia": { "type": "STRING" },
              "fabricante": { "type": "STRING" },
              "cantidadProducto": { "type": "STRING" },
              "pictogramas": {
                "type": "ARRAY",
                "items": { "type": "STRING" }
              }
            },
            required: ["agenteQuimico", "palabraAdvertencia", "codigoUN", "indicacionesPeligro", "consejosPrudencia", "fabricante", "telefonoFabricante", "direccionFabricante", "telefonoEmergencia", "pictogramas"]
          }
        }
      };

      try {
        const response = await fetchWithRetry(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        const jsonText = result?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (jsonText) {
          const parsed = JSON.parse(jsonText);
          const validGHS = ["GHS01", "GHS02", "GHS03", "GHS04", "GHS05", "GHS06", "GHS07", "GHS08", "GHS09"];
          const filteredPictos = (parsed.pictogramas || []).filter(p => validGHS.includes(p.toUpperCase())).map(p => p.toUpperCase());

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
        showAIStatus(true, "Error en Extracción", "No se pudo extraer la información. Verifique el archivo FDS.");
        setTimeout(() => showAIStatus(false), 3000);
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

    function renderCardPreview() {
      requestAnimationFrame(fitCardContent);
      document.getElementById('card-agente').textContent = currentData.agenteQuimico;
      document.getElementById('card-un').textContent = currentData.codigoUN;
      document.getElementById('card-palabra').textContent = currentData.palabraAdvertencia;
      document.getElementById('card-indicaciones').textContent = currentData.indicacionesPeligro;
      document.getElementById('card-consejos').textContent = currentData.consejosPrudencia;
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
    }

    // Fit all content without truncating safety statements or contact details.
    function fitCardContent() {
      const card = document.getElementById('chemical-card-preview');
      const content = document.getElementById('card-content');
      if (!card.clientHeight) return;
      const style = getComputedStyle(card);
      const available = card.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      content.style.transform = 'none';
      content.style.minHeight = `${available}px`;
      const height = Math.max(content.scrollHeight, content.offsetHeight);
      content.style.transform = `scale(${Math.min(1, available / height)})`;
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

    async function fetchWithRetry(url, options, retries = 2, backoff = 1000) {
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res;
      } catch (err) {
        if (retries > 0) {
          await new Promise(r => setTimeout(r, backoff));
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
