# Mi portafolio

Página personal hecha con [Vite](https://vite.dev) y [Motion](https://motion.dev) (`animate` + `scroll`).

## Usar en tu computadora

```bash
npm install
npm run dev     # abre http://localhost:5173
npm run build   # genera la carpeta dist/ lista para publicar
```

## Qué editar

Todo el contenido está en `index.html`; los estilos en `src/style.css` y las animaciones en `src/main.js`.

## Publicar

El archivo `.github/workflows/deploy.yml` publica la página en GitHub Pages cada vez que subes cambios a `main`.
Activa Pages una vez en el repo: **Settings → Pages → Source: GitHub Actions**.

## Agentes de Claude Code

La carpeta `.claude/agents/` tiene 5 agentes que Claude Code carga en cualquier sesión abierta con este repo:

- `planificador`: plan paso a paso antes de construir algo (usa Opus).
- `revisor-codigo`: revisa el código antes de publicarlo.
- `revisor-python`: revisa scripts de Python y explica cada corrección.
- `estratega-marketing`: textos de venta (landing page, redes, correos y anuncios).
- `especialista-seo`: auditoría de SEO de una página.

Para usarlos, pídelos por su nombre: "Usa especialista-seo para auditar el portafolio".
Origen y licencia: `.claude/LICENSE-agentes.txt`.
