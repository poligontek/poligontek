# Publicación de PoligonTek

Primera versión: 21 de noviembre de 2026.

- Proyecto Netlify de prueba: `soft-vacherin-56d640`, equipo `poligonwebs`.
- URL: https://soft-vacherin-56d640.netlify.app/
- Fuente local: `D:\Trabajos\PoligonTek\Web`.
- Método: ZIP manual de los archivos estáticos compilados.
- El proyecto Netlify existente `poligontek` y el DNS de `poligontek.com` no se modificaron.

El build definitivo está en `dist/`. Para la vista de prueba se copió a `.site-artifacts/preview-dist/` y se añadió un `_headers` con `X-Robots-Tag: noindex, nofollow`. `netlify-deploy.zip` contiene esa variante de revisión. No reutilizar ese header al publicar el sitio definitivo en `poligontek.com`.

Para actualizar la vista de prueba: compilar, copiar el build a la carpeta de revisión, conservar su header noindex, volver a crear el ZIP y subirlo al mismo proyecto Netlify. El repositorio local no tiene remoto configurado.

## Producción · 21 de noviembre de 2026

Publicado en https://poligontek.com/, con inglés en `/en/` y portugués en `/pt/`. Pasaron 134 comprobaciones contra este dominio, con TLS validado y sin sustituir el DNS del navegador de pruebas. También se abrió correctamente en el navegador integrado.

Proyecto Netlify definitivo: `poligontek`, repositorio `https://github.com/poligontek/poligontek`, rama main. Commit publicado: `4c7d3a353398c1b74b0960a32356abd06510283f`. La nueva fuente está en `website/`; se conservó el código histórico anterior. El `netlify.toml` raíz establece base website, build npm run build y salida dist, con Node 24. La dependencia directa cookie 2.x evita que Astro resuelva una versión incompatible desde el node_modules histórico del repositorio.

La copia de integración Git se encuentra en `.tools/production-repo/`. La fuente de trabajo sigue estando en esta carpeta Web; para publicar cambios futuros deben sincronizarse a website/ de esa copia y enviarse a main. No subir node_modules ni el header noindex de la vista de prueba.

DNS Hostinger: A @ → 75.2.60.5 (TTL 300), CNAME www → poligontek.netlify.app (TTL 300). Se conservaron los demás registros, nameservers y el subdominio de RealFat32. El editor de Hostinger no conservó el reemplazo ALIAS, por lo que se utilizó el registro A documentado por Netlify.

HTTPS: certificado Let’s Encrypt válido para poligontek.com y www.poligontek.com, renovado e instalado el 21 de noviembre de 2026, con renovación automática y vencimiento el 19 de febrero de 2027. Se comprobó la cadena TLS sin omitir validaciones. HTTP redirige a HTTPS y www redirige al dominio raíz. Producción no lleva X-Robots-Tag noindex. Capturas: `.site-artifacts/production-ssl.jpg` y `poligontek-production.jpg`.

Pendientes de contenido: correo/WhatsApp comercial. Analytics y Search Console de esta landing aún no se configuraron; mantenerlos separados de RealFat32.

## Portfolio y medición · actualización del 21 de noviembre de 2026

Publicado U-BOTW Save Manager en los tres idiomas, con captura real, descripción verificada, enlace al producto y código. WhatsApp comercial confirmado: https://wa.me/5491138491425. Commit publicado `945d6a91bd43cbd97bb355d48ca6d76aec9eb222`.

Se reutilizó Analytics: cuenta 346554024, propiedad 478990527, flujo 10289085537, medición G-41LSJ1CX69. Consentimiento en los tres idiomas, seguimiento de visitas y project_click; se probó aceptación, rechazo y revocación en producción y el panel mostró una visita activa. Search Console verificó https://poligontek.com/, procesó sitemap.xml con tres páginas y confirmó mediante prueba en vivo que puede indexar la web. Solicitud de indexación aceptada por Google.

Lighthouse de producción en los tres idiomas, móvil y escritorio: rendimiento 99–100, accesibilidad 100, buenas prácticas 100 y SEO 100. Pasaron 170 comprobaciones de interfaz. Detalle e informes en SEO-REPORT.md y .site-artifacts/.

Correo contacto@poligontek.com preparado en el asistente de Hostinger usando el plan gratuito. Pendiente de que el usuario establezca su contraseña; comprobar creación, DNS de correo y recepción antes de publicar el mailto. Por ahora el contacto operativo en la web es WhatsApp.

## U-BOTW oculto temporalmente

Por solicitud del usuario, `site.showUbotw` está desactivado. La tarjeta se omite del HTML público en los tres idiomas; se conservan los datos y recursos para trasladar el proyecto a otro sitio. La web independiente de U-BOTW no se modificó. Commit: `96b1582`.

## Unificación de repositorios · 22 de noviembre de 2026

La fuente canónica es `D:\Trabajos\PoligonTek\Web`, vinculada directamente a https://github.com/poligontek/poligontek. Se unieron los historiales local y publicado conservando ambos como ancestros. Los archivos de la landing coinciden con la versión publicada; la aplicación antigua permanece en el historial Git.

Netlify compila ahora desde la raíz (`base = "."`), con Node 24, `npm run build` y salida `dist`. Para publicar: modificar esta carpeta, compilar, hacer commit y push a main. No sincronizar a `website/` ni a `.tools/production-repo`; esas instrucciones anteriores son históricas. Los bundles de respaldo están fuera del repositorio en `D:\Trabajos\PoligonTek\.migration-backups\2026-11-22`.