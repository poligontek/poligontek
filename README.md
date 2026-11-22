# PoligonTek · Web

Landing con presentación, servicios, trabajos, proceso y contacto, construida con AstroWind, Astro y Tailwind CSS. Español en `/`, inglés en `/en/` y portugués en `/pt/`. HTML estático con JavaScript mínimo para menú y privacidad.

Vista de prueba: https://soft-vacherin-56d640.netlify.app/

El dominio `poligontek.com` todavía no se modificó. La vista de prueba lleva `X-Robots-Tag: noindex, nofollow` para evitar indexarla antes del lanzamiento. Canonical y hreflang apuntan al dominio final.

## Desarrollo

Requisitos: Node 22.22.3 o posterior y pnpm. Dependencias fijadas en `pnpm-lock.yaml`.

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

En Codex también se pueden ejecutar directamente `node node_modules/astro/bin/astro.mjs dev`, `build`, `check` y `preview`.

## Edición

- `src/data/content.ts`: textos completos de los tres idiomas.
- `src/data/site.ts`: URL, GitHub y correo comercial. El correo queda vacío hasta confirmarlo; por ahora el contacto enlaza al GitHub público de PoligonTek.
- `src/layouts/Landing.astro`: estructura compartida, metadatos y datos estructurados.
- `src/assets/styles/poligontek.css`: diseño de la agencia.
- `src/config.yaml`: configuración de AstroWind.
- `public/images`: capturas localizadas de RealFat32 y tarjeta social.
- `tools/prepare-assets.mjs`: genera WebP desde las capturas del proyecto hermano RealFat32 y la tarjeta social con gráficos propios.
- `public/sitemap.xml` y `public/robots.txt`: rastreo para la publicación definitiva.
- `netlify.toml`: compilación y headers para el sitio definitivo.

RealFat32 se presenta como producto propio Alpha, con enlaces a su web y código fuente. No se añadieron clientes, testimonios ni cifras inventadas.

## Base AstroWind

Adaptación de https://github.com/arthelokyo/astrowind, commit `14e1a691f80548dcc36370847b1a02c0d0b12821`. Se conservaron su integración de configuración, estilos base, tipos y componentes Button/Headline. Las páginas de ejemplo se reemplazaron por la landing y se omitieron blog, transiciones y dependencias innecesarias. Licencia y atribución originales en `LICENSE-ASTROWIND.md`.

## Verificación

`node tools/verify.mjs [url-base]` comprueba idiomas, metadatos, cinco secciones, enlaces, menú móvil, navbar fijo, desbordes, recursos, privacidad y HTML sin JavaScript. Las capturas se guardan en `.site-artifacts/`.

Lighthouse local: español móvil e inglés escritorio alcanzaron 100 en rendimiento, accesibilidad, buenas prácticas y SEO. Informes en `.site-artifacts/lighthouse-mobile.report.html` y `lighthouse-desktop-en.report.html`. Son mediciones del build local, no garantías de todas las conexiones ni de posiciones en Google.

Pendientes de contenido: correo/WhatsApp comercial y nuevos trabajos autorizados. Analytics y Search Console no se activaron para esta nueva landing; se conectarán al dominio definitivo cuando corresponda, usando sus propias propiedades.

Actualización: WhatsApp ya está publicado, se añadió U-BOTW Save Manager y se verificaron Analytics y Search Console. La casilla contacto@poligontek.com está pendiente de contraseña y verificación de entrega. Consulta SEO-REPORT.md para las pruebas de producción y las seis auditorías Lighthouse.

## Sitio definitivo

Publicado en https://poligontek.com/ con HTTPS y renovación automática. Producción usa el proyecto Netlify poligontek y el repositorio https://github.com/poligontek/poligontek, raíz del repositorio. Esta es la única fuente de trabajo y publicación; consulta DEPLOYMENT.md para DNS e historial. La URL soft-vacherin corresponde únicamente a la vista de prueba anterior. Las 134 comprobaciones también pasaron sobre el dominio definitivo.

## Unified working copy · 2026-11-22

Canonical local repository: `D:\Trabajos\PoligonTek\Web`.
Use this folder in GitHub Desktop (File → Add local repository). The Git history and existing local changes were preserved during consolidation.