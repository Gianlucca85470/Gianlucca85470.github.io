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
