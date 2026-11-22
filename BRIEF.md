# PoligonTek · Web principal

Propuesta para `https://poligontek.com`: agencia creadora de software, aplicaciones y sitios web. Landing rápida, responsive, clara y profesional, en español, inglés y portugués. Carpeta independiente de RealFat32, ubicado en `../RealFat32/App` y `../RealFat32/Web`.

## Recomendación

Usar Astro con salida estática y diseño propio apoyado en AstroWind. Mantener fondo claro, texto oscuro, un único color de marca y capturas reales de los trabajos. Sin vídeos de fondo, carruseles automáticos ni animaciones pesadas. Netlify como hosting; el dominio se conecta cuando la página esté lista.

AstroWind es la referencia recomendada por su base de landing y popularidad pública. Sus estrellas indican adopción, no constituyen una valoración de calidad ni garantizan rendimiento. Revisar la demo antes de escoger el diseño final. Todavía no se ha instalado ni comprado ninguna plantilla ni publicado la web principal.

## Plantillas investigadas · 21 de noviembre de 2026

| Plantilla | Popularidad comprobada | Uso propuesto | Fuente y demo |
| --- | --- | --- | --- |
| AstroWind | GitHub muestra aproximadamente 6.100 estrellas; licencia MIT indicada en el repositorio | Base recomendada para servicios, proyectos y contacto; personalizar componentes y marca | https://github.com/arthelokyo/astrowind · https://astrowind.vercel.app/ |
| Astroship | GitHub muestra aproximadamente 2.000 estrellas; licencia GPL-3.0 indicada en el repositorio | Alternativa con una estructura más pequeña de landing | https://github.com/surjithctly/astroship · https://astroship.web3templates.com/ |
| Studio · Tailwind Plus | Plantilla oficial de agencia del equipo de Tailwind; no se encontró una puntuación pública comparable | Referencia visual editorial para portfolio y estudios de caso; requiere acceso/licencia para usar su código | https://tailwindcss.com/blog/2023-08-07-meet-studio-our-new-agency-template |

Los recuentos son aproximados y cambian. No se han medido las demos con Lighthouse, por lo que no se afirma que alcancen una puntuación concreta.

## Estructura de la landing

1. Navbar fijo: marca, Servicios, Trabajos, Cómo trabajamos, Contacto y selector ES / EN / PT.
2. Presentación: «Creamos software que hace avanzar tu negocio». Subtítulo sobre desarrollo de software, aplicaciones y experiencias web. CTA «Hablemos de tu proyecto» y enlace «Ver trabajos».
3. Servicios: software a medida, aplicaciones y desarrollo web. Explicar resultados y entregables con lenguaje simple.
4. Trabajos: comenzar con RealFat32, captura real, descripción breve, tecnologías y enlaces al producto y GitHub. Agregar otros proyectos cuando haya material confirmado y autorización para mostrarlos.
5. Proceso: entender la necesidad, diseñar, desarrollar y acompañar. Evitar promesas de plazos o resultados sin evaluar el proyecto.
6. Contacto: CTA claro con un canal comercial confirmado. Footer con PoligonTek, Fabian Gonzalez Dev, GitHub y privacidad.

## Idiomas, SEO y rendimiento

Rutas propuestas: español en `/`, inglés en `/en/` y portugués en `/pt/`, con HTML traducido desde la compilación, selector visible, canonical propio y hreflang recíproco. Referencia oficial: https://docs.astro.build/en/guides/internationalization/

Metadatos por idioma, imagen social, sitemap y robots. Datos estructurados de organización y servicios basados en información real. Configurar Analytics y Search Console propios de la web principal, manteniendo separada la propiedad de RealFat32.

Objetivo a validar con Lighthouse sobre el sitio construido y publicado: al menos 90 en rendimiento, accesibilidad, buenas prácticas y SEO, tanto móvil como escritorio. Imágenes optimizadas con dimensiones explícitas, fuentes del sistema o locales, JavaScript mínimo y ningún widget innecesario.

## Material para la implementación

- Logo y color de marca, si existen; de lo contrario, usar inicialmente una marca tipográfica PoligonTek.
- Canal de contacto comercial y destino del CTA.
- Otros trabajos autorizados, con URL, captura y una explicación breve del problema resuelto.
- Confirmación de qué proyectos son productos propios y cuáles fueron trabajos para clientes.

No inventar clientes, testimonios, cifras de experiencia, premios ni capturas de proyectos inexistentes.
