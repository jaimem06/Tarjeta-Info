# Tarjetas de Seguridad Química SGA/GHS

Aplicación web con frontend estático y un backend Node.js pequeño. El navegador procesa el PDF, selecciona texto e imágenes relevantes y envía ese contenido a `/api/extract`. El backend guarda la clave y consulta OpenRouter.

## Modelos y coste

- Principal: `google/gemini-2.5-flash-lite`.
- Respaldo automático: `openai/gpt-4.1-mini`.
- El respaldo se usa cuando el principal falla o está limitado y puede costar más.
- Un resultado idéntico se guarda en memoria durante 24 horas para evitar cobrar dos veces por el mismo contenido mientras la instancia siga activa.

El caché y los límites están en memoria: se reinician cuando Render reinicia o despliega el servicio. No constituyen un límite monetario garantizado.

## Desarrollo local

Requisitos: Node.js 20 o superior y una clave de OpenRouter con saldo.

```powershell
npm ci --ignore-scripts
$env:OPENROUTER_API_KEY="tu_clave_nueva"
npm run build
npm start
```

Abre `http://localhost:10000`. Nunca escribas la clave dentro de `public`.

## Despliegue recomendado en Render

1. Revoca las claves que anteriormente estuvieron en `public/assets/js/app.js` y crea una clave nueva en OpenRouter.
2. Sube el proyecto a un repositorio Git privado.
3. En Render, elige **New > Blueprint** y conecta ese repositorio. Render leerá `render.yaml` y creará el Web Service `tarjetas-seguridad-quimica-app`.
4. Cuando Render solicite `OPENROUTER_API_KEY`, pega la clave nueva. Marca el valor como secreto.
5. Espera a que finalice el despliegue y abre `https://TU-SERVICIO.onrender.com/api/health`. Debe responder `{"ok":true,"configured":true}`.
6. Abre la página principal, carga una FDS de prueba y confirma la extracción.

Si configuras el servicio manualmente:

- Runtime: `Node`
- Build Command: `npm ci --ignore-scripts && npm run build`
- Start Command: `npm start`
- Health Check Path: `/api/health`
- Variable secreta: `OPENROUTER_API_KEY`

Render no convierte un Static Site existente en Web Service. Si ya tienes el sitio estático, conserva temporalmente ambos, comprueba la nueva URL y después usa `tarjetas-seguridad-quimica-app` como URL principal. La interfaz debe abrirse desde el Web Service para que `/api/extract` sea del mismo dominio.

## Variables opcionales

| Variable | Valor predeterminado | Uso |
|---|---:|---|
| `PRIMARY_AI_MODEL` | `google/gemini-2.5-flash-lite` | Modelo económico principal |
| `FALLBACK_AI_MODEL` | `openai/gpt-4.1-mini` | Respaldo de mayor coste |
| `AI_REQUESTS_PER_HOUR` | `30` | Solicitudes permitidas por IP y hora |
| `AI_MAX_CONCURRENT` | `3` | Extracciones simultáneas por instancia |
| `AI_CACHE_TTL_SECONDS` | `86400` | Duración del caché en memoria |
| `AI_BODY_LIMIT` | `12mb` | Tamaño máximo del JSON enviado |
| `PUBLIC_SITE_URL` | vacío | URL pública enviada como referencia a OpenRouter |

Para una prueba privada puedes bajar `AI_REQUESTS_PER_HOUR` a `5`. Para compartirla, ajusta el valor según el saldo y el número de usuarios.

## Seguridad y presupuesto

El backend valida el tamaño y tipo del contenido, limita solicitudes por IP, restringe concurrencia y no entrega la clave al navegador. Aun así, un límite por IP se puede eludir y Render puede reiniciar el contador. Antes de compartir públicamente:

- configura límites de gasto y alertas en OpenRouter;
- empieza con saldo bajo y recarga automática desactivada;
- revisa el consumo después de 20 a 30 PDFs reales;
- añade autenticación si el enlace será público o tendrá muchos usuarios.

El plan gratuito de Render puede suspender la instancia por inactividad; la primera solicitud posterior puede tardar mientras arranca. Para respuesta inmediata constante se necesita una instancia de pago.

## Verificación

```powershell
npm test
```

Las pruebas cubren selección compacta del PDF, tratamiento del error 429, validación del backend, modelos, caché y ausencia de claves en la página servida.
