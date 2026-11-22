# Auditoría de PoligonTek · 21 de noviembre de 2026

Web publicada: https://poligontek.com/. Portfolio con RealFat32 y U-BOTW Save Manager en español, inglés y portugués. U-BOTW se describe como conversor de respaldos propios de partidas Wii U/Switch, no del juego. Información comprobada en https://ubotw.poligontek.com/.

## Lighthouse 13.6.0 sobre producción

| Idioma | Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
| --- | --- | ---: | ---: | ---: | ---: |
| Español | Móvil | 99 | 100 | 100 | 100 |
| Español | Escritorio | 100 | 100 | 100 | 100 |
| Inglés | Móvil | 100 | 100 | 100 | 100 |
| Inglés | Escritorio | 100 | 100 | 100 | 100 |
| Portugués | Móvil | 100 | 100 | 100 | 100 |
| Portugués | Escritorio | 100 | 100 | 100 | 100 |

Informes completos HTML y JSON: `.site-artifacts/audit-{es,en,pt}-{mobile,desktop}.report.{html,json}`. Resumen verificable en `.site-artifacts/seo-summary.json`. Son mediciones técnicas, no garantías de posicionamiento ni plazos de indexación.

## Funcionalidad y medición

Pasaron 170 comprobaciones de producción: tres idiomas, tres anchos de pantalla, cinco secciones, dos proyectos, capturas, enlaces, navegación fija, menú móvil, privacidad, canonical, hreflang, ausencia de errores y contenido sin JavaScript.

También pasó la prueba de Analytics en producción: ninguna petición a Google antes de aceptar o después de rechazar; al aceptar, Google recibe la petición de medición con respuesta satisfactoria; el clic en U-BOTW envía `project_click`; revocar el consentimiento elimina las cookies propias y deja de cargar la etiqueta. No se utilizan señales publicitarias ni personalización de anuncios. No se incluyen parámetros de consulta en page_location ni en el referrer configurado.

Se reutilizó la cuenta existente de Google Analytics para evitar duplicados: cuenta `346554024`, propiedad `478990527`, flujo `10289085537`, ID `G-41LSJ1CX69`. La integración se mantiene separada de las propiedades de RealFat32 y U-BOTW.

El panel de Google Analytics confirmó un usuario activo en tiempo real (Argentina) después de la visita de prueba normal. El filtro de tráfico interno existente está en estado Testing, sin exclusión activa; no se alteraron sus preferencias.

## Search Console

Propiedad `https://poligontek.com/`, verificada mediante etiqueta HTML en la cuenta fabiangonzalezdev@gmail.com. Sitemap procesado correctamente y tres páginas descubiertas. La prueba en vivo confirmó «URL is available to Google» y «Page can be indexed». Se solicitó la indexación de la página principal y Google confirmó «Indexing requested».

El registro de rastreo anterior, de las 11:53 del mismo día, mostraba un 403 previo a la publicación; la prueba actual permite el acceso. Google aún debe completar su procesamiento para que aparezcan datos de búsqueda e indexación definitiva.

## Contacto

WhatsApp confirmado y publicado: https://wa.me/5491138491425. Se preparó la dirección `contacto@poligontek.com` con el plan gratuito disponible en Hostinger. La casilla requiere que el usuario establezca y envíe su contraseña desde el asistente de Hostinger; no se publica mailto hasta que exista una casilla operativa.
