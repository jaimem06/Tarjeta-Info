# Tarjetas de Seguridad Química SGA/GHS

Web estática en HTML, CSS y JavaScript. No necesita servidor de aplicación, npm ni compilación.

## Estructura

- `public/index.html`: estructura de la página y formulario.
- `public/assets/css/styles.css`: estilos y adaptación a móviles.
- `public/assets/js/tailwind-config.js`: configuración visual de Tailwind.
- `public/assets/js/app.js`: formulario, pictogramas, extracción con IA y descarga PDF.
- `render.yaml`: configuración de despliegue como sitio estático.

## Uso local

Abre `public/index.html` en un navegador, o sirve la carpeta `public` con un servidor HTTP local. Las bibliotecas, fuentes y extracción con IA requieren conexión a Internet.

## Desplegar en Render

1. Sube esta carpeta completa a un repositorio Git.
2. En Render, selecciona **New > Blueprint**, conecta el repositorio y utiliza `render.yaml`.
3. Como alternativa, selecciona **New > Static Site**, conecta el repositorio, deja **Build Command** vacío y establece **Publish Directory** en `public`.

No configures un comando de inicio ni un servicio backend. Render publicará únicamente el contenido de `public`.

Documentación: https://render.com/docs/static-sites y https://render.com/docs/blueprint-spec.

## Extracción con IA

La implementación existente llama a Gemini desde el navegador y contiene una clave API en `app.js`. Todo archivo de `public` es visible para los visitantes: esta estructura no oculta esa clave. Para un sitio público, utiliza un servicio backend que gestione la credencial; las variables de entorno de un sitio estático no la convierten en un secreto. La edición manual y la descarga PDF no necesitan Gemini.
