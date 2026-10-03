# Portafolio de Camila Andrea Rivera  
## Sistema de diseño y estructura del proyecto

Documento base para construir un portafolio web profesional, visual y rápido de publicar.  
El objetivo es mostrar experiencia, proyectos y contacto de forma clara para reclutadores, clientes y empresas.

---

## 1. Objetivo del portafolio

El portafolio debe permitir que una persona entienda en menos de 30 segundos:

- Quién es Camila.
- Qué tipo de desarrollo realiza.
- Dónde ha trabajado.
- Qué proyectos ha construido.
- Qué tecnologías domina.
- Cómo contactarla.

La prioridad es publicar una versión sólida y completa con:

1. Hero + Navbar.
2. Experiencia.
3. Proyectos.
4. Educación, certificados y CV.
5. Contacto.
6. Footer.

---

## 2. Dirección visual

Estilo general: **academia de élite, editorial, preppy y aesthetic**, con detalles kawaii discretos.

- Fondo blanco cálido.
- Borgoña como color principal.
- Tipografía serif elegante para títulos.
- Tipografía sans moderna para texto e interfaz.
- Cards limpias, bordes suaves y sombras ligeras.
- Microinteracciones delicadas.
- Detalles visuales: nubes, estrellas, lazos, corazones y un gatito inspirado en Oliver.

El sitio debe sentirse profesional, femenino, cuidado y memorable, sin parecer infantil ni sobrecargado.

---

## 3. Paleta de colores

| Rol | Color | Hex | Uso |
|---|---|---|---|
| Borgoña principal | Borgoña | `#6E1E2B` | Botones primarios, títulos destacados, acentos, enlaces activos |
| Borgoña profundo | Borgoña oscuro | `#4E1420` | Hover, footer, texto destacado |
| Blanco cálido | Blanco | `#FDFBF8` | Fondo principal |
| Crema | Crema | `#F4EEE6` | Cards, secciones alternas, chips, fondos suaves |
| Gris tinta | Casi negro | `#1F1B1B` | Texto principal |
| Gris medio | Gris cálido | `#6B6560` | Texto secundario, labels, descripciones |
| Verde disponible | Verde | `#3BA55D` | Badge “Open to work / Disponible” |
| Dorado sutil | Dorado | `#C9A66B` | Líneas decorativas, iconos, detalles premium |
| Blanco puro | Blanco | `#FFFFFF` | Cards sobre fondo crema o blanco cálido |

### Reglas de uso

- El fondo principal debe ser blanco cálido.
- El borgoña se usa como acento, no como fondo dominante.
- El footer puede usar borgoña profundo con texto crema.
- Los textos siempre deben mantener buen contraste.
- Evitar negro puro `#000000`; usar gris tinta.

---

## 4. Tipografía

### Títulos

- Fuente: `Playfair Display` o `Fraunces`.
- Estilo: serif editorial, elegante y con personalidad.
- Uso: nombre, títulos de sección, títulos de proyectos y frases destacadas.

### Texto e interfaz

- Fuente: `Inter` o `Plus Jakarta Sans`.
- Uso: párrafos, botones, labels, navegación, formularios y descripciones.

### Código y tecnologías

- Fuente: `JetBrains Mono`.
- Uso: chips de tecnologías, etiquetas técnicas y pequeños detalles de desarrolladora.

### Escala tipográfica

| Elemento | Desktop | Mobile |
|---|---:|---:|
| H1 | 56–72 px | 36–44 px |
| H2 | 36–44 px | 28–32 px |
| H3 | 22–26 px | 20–22 px |
| Body | 16–18 px | 15–16 px |
| Small / labels | 13–14 px | 12–13 px |

---

## 5. Espaciado, bordes y sombras

### Espaciado

Usar una escala basada en múltiplos de 4:

- `4px`
- `8px`
- `12px`
- `16px`
- `24px`
- `32px`
- `48px`
- `64px`
- `96px`

### Radios

| Elemento | Radio |
|---|---:|
| Botones tipo píldora | `999px` |
| Cards | `20–24px` |
| Imágenes | `16–24px` |
| Inputs | `12–16px` |
| Modal | `24px` |

### Sombras

Sombras suaves y cálidas, nunca duras.

```css
/* Sombra base */
box-shadow: 0 8px 24px rgba(110, 30, 43, 0.08);

/* Sombra hover */
box-shadow: 0 14px 34px rgba(110, 30, 43, 0.14);

/* Sombra modal */
box-shadow: 0 24px 64px rgba(31, 27, 27, 0.18);
```

---

## 6. Componentes base

### Botón primario

- Fondo: borgoña `#6E1E2B`.
- Texto: blanco.
- Hover: borgoña profundo `#4E1420`.
- Radio: `999px` o `14px`.
- Uso: “Ver proyectos”, “Descargar CV”, “Enviar mensaje”.

### Botón secundario

- Fondo: transparente.
- Borde: `1px solid #6E1E2B`.
- Texto: borgoña.
- Hover: fondo crema.
- Uso: “Contactarme”, “Ver repositorio”, “Ver demo”.

### Card

- Fondo: blanco.
- Borde: `1px solid #EFE7DC`.
- Radio: `20–24px`.
- Sombra suave.
- Hover: elevación leve y borde borgoña suave.

### Chip tecnológico

- Fondo: crema.
- Borde: fino gris cálido.
- Texto: gris tinta.
- Fuente: `JetBrains Mono`.
- Hover: fondo borgoña suave o elevación leve.

Ejemplos:

```text
React · TypeScript · Tailwind CSS · Fastify · Prisma · PostgreSQL · Flutter
```

### Badge “Open to work”

- Forma: nube o píldora redondeada.
- Fondo: blanco.
- Borde: borgoña suave.
- Punto verde animado.
- Texto: “Open to work” o “Disponible para trabajar”.

### Divider

- Línea fina borgoña con opacidad baja.
- Alternativa: línea punteada crema para un toque más aesthetic.

---

## 7. Animaciones

Las animaciones deben ser rápidas y elegantes.

| Elemento | Animación | Duración |
|---|---|---:|
| Entrada de secciones | Fade + `translateY(16px)` | 400–600ms |
| Cards | Fade escalonado | 300–500ms |
| Hover en cards | Elevación y borde borgoña | 200ms |
| Foto del hero | Crossfade entre foto normal y foto peace | 300–400ms |
| Navbar | Aparece al hacer scroll | 300ms |
| Modal de proyecto | Fade + scale desde `0.98` | 250–350ms |
| Badge disponible | Punto verde pulsante | Infinito, sutil |

### Reglas

- No usar animaciones mayores a 800ms.
- Respetar `prefers-reduced-motion`.
- Mantener el contenido legible durante las transiciones.
- La intro solo debe aparecer la primera vez, usando `localStorage`.

---

## 8. Modo claro y oscuro

El modo claro es el principal.

### Modo claro

- Fondo: `#FDFBF8`.
- Texto: `#1F1B1B`.
- Cards: `#FFFFFF`.
- Acentos: borgoña.

### Modo oscuro

- Fondo: `#171214`.
- Superficie: `#211A1C`.
- Texto: `#F4EEE6`.
- Borgoña adaptado: `#B45565` o `#C15E6F`.
- Bordes: `rgba(244, 238, 230, 0.12)`.

El switch debe estar en el navbar y guardar la preferencia en `localStorage`.

---

## 9. Internacionalización

El portafolio debe tener soporte para español e inglés.

- Idioma por defecto: español.
- Selector: `ES / EN` en el navbar.
- Preferencia guardada en `localStorage`.
- En la primera visita, detectar el idioma del navegador.
- Traducir todo el contenido visible: hero, experiencia, proyectos, modal, educación, contacto y footer.
- No traducir nombres propios, nombres de empresas ni tecnologías.

### Estructura sugerida

```text
/src
  /i18n
    es.json
    en.json
```

---

## 10. Estructura del proyecto

### Stack recomendado

- **Astro** como framework principal.
- **React** para componentes interactivos.
- **Tailwind CSS** para estilos.
- **Framer Motion** o CSS animations para animaciones.
- **MDX o JSON** para gestionar proyectos.
- **Vercel** o **Netlify** para despliegue.

### Estructura de carpetas

```text
portfolio/
├── public/
│   ├── cv/
│   │   └── CV_Camila_Andrea_Rivera.pdf
│   ├── images/
│   │   ├── hero/
│   │   ├── avatar/
│   │   └── projects/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Hero.vue
│   │   ├── Experience.vue
│   │   ├── Projects.vue
│   │   ├── ProjectCard.vue
│   │   ├── ProjectModal.vue
│   │   ├── Education.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── layouts/
│   │   └── BaseLayout.vue
│   ├── data/
│   │   ├── experience.json
│   │   ├── projects.json
│   │   ├── education.json
│   │   └── certificates.json
│   ├── i18n/
│   │   ├── es.json
│   │   └── en.json
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       └── index.vue
├── package.json
└── README.md
```

> Si se usa Astro, los archivos `.vue` pueden reemplazarse por `.astro` o componentes React `.tsx`, según la preferencia de implementación.

---

## 11. Wireframe: Hero + Navbar

```text
┌──────────────────────────────────────────────────────────────┐
│  [Avatar]  Inicio  Experiencia  Proyectos  CV  Contacto      │
│            ES/EN   🌙   [Descargar CV]                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   Hola, soy Camila 👋                                        │
│   Desarrolladora Frontend & Full Stack                       │
│                                                              │
│   Creo interfaces web y móviles cuidadas, funcionales        │
│   y con atención al detalle.                                  │
│                                                              │
│   📍 Trujillo, Perú        🟢 Open to work                   │
│                                                              │
│   [ Ver proyectos ]      [ Descargar CV ]                    │
│                                                              │
│                                  ┌────────────────────┐       │
│                                  │                    │       │
│                                  │   FOTO PRINCIPAL   │       │
│                                  │                    │       │
│                                  │   ☁️ Open to work  │       │
│                                  └────────────────────┘       │
│                                                              │
│   React · TypeScript · Flutter · Fastify · PostgreSQL        │
└──────────────────────────────────────────────────────────────┘
```

### Comportamiento

- Al hacer scroll, la foto grande del hero se reduce y se convierte en un avatar caricaturizado dentro del navbar.
- El navbar pasa de transparente a blanco translúcido con blur.
- Al hacer hover sobre la foto del hero, aparece la versión con ojos cerrados y haciendo peace.
- La nube “Open to work” tiene un punto verde animado.
- El botón de CV muestra la fecha de actualización.

### Texto base

**Español:**

> Hola, soy Camila.  
> Desarrolladora Frontend & Full Stack enfocada en crear productos web y móviles claros, bonitos y funcionales.

**Inglés:**

> Hi, I’m Camila.  
> Frontend & Full Stack Developer focused on building clear, beautiful and functional web and mobile products.

---

## 12. Wireframe: Experiencia

```text
┌──────────────────────────────────────────────────────────────┐
│                          Experiencia                          │
│              Donde he trabajado y qué he construido           │
│                                                              │
│   ┌────────────────────────────────────────────────────┐     │
│   │  Kole.pe                                           │     │
│   │  Diseño, desarrollo y soporte web y móvil          │     │
│   │  Abr. 2026 — Set. 2026                             │     │
│   │                                                    │     │
│   │  • Desarrollo y mantenimiento de interfaces web    │     │
│   │  • Soporte y mejoras de producto digital           │     │
│   │  • Colaboración en funcionalidades web y móviles   │     │
│   │                                                    │     │
│   │  [React] [TypeScript] [Tailwind] [Mobile]          │     │
│   └────────────────────────────────────────────────────┘     │
│                                                              │
│   ┌────────────────────────────────────────────────────┐     │
│   │  CorAll Development and Research S.A.C.            │     │
│   │  Desarrolladora Full Stack — Web & Mobile          │     │
│   │  3 años de experiencia                             │     │
│   │                                                    │     │
│   │  • Desarrollo frontend y backend                   │     │
│   │  • Integración de APIs y bases de datos            │     │
│   │  • Desarrollo móvil y mantenimiento de productos   │     │
│   │                                                    │     │
│   │  [React] [Fastify] [Prisma] [PostgreSQL] [Flutter] │     │
│   └────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

### Comportamiento

- Línea de tiempo vertical borgoña en desktop.
- Cards apiladas en mobile.
- Cada card incluye empresa, rol, periodo, responsabilidades y tecnologías.
- Animación de entrada escalonada.

---

## 13. Wireframe: Proyectos

```text
┌──────────────────────────────────────────────────────────────┐
│                           Proyectos                           │
│             Una selección de productos y soluciones           │
│                                                              │
│  ┌──────────────┐  ┌──────────────────────────────────────┐  │
│  │  FILTROS     │  │  ┌────────────┐  ┌────────────┐      │  │
│  │              │  │  │  IMAGEN    │  │  IMAGEN    │      │  │
│  │  Todos       │  │  ├────────────┤  ├────────────┤      │  │
│  │  Web         │  │  │ E-commerce │  │ Mobile     │      │  │
│  │  E-commerce  │  │  │ Título     │  │ Título     │      │  │
│  │  Mobile      │  │  │ Descripción│  │ Descripción│      │  │
│  │  Backend     │  │  │ React · TS │  │ Flutter    │      │  │
│  │  UI/UX       │  │  └────────────┘  └────────────┘      │  │
│  │              │  │                                      │  │
│  │  Cliente     │  │  ┌────────────┐  ┌────────────┐      │  │
│  │  Personal    │  │  │  IMAGEN    │  │  IMAGEN    │      │  │
│  │              │  │  ├────────────┤  ├────────────┤      │  │
│  │  [React]     │  │  │ Web app    │  │ Backend    │      │  │
│  │  [Flutter]   │  │  │ Título     │  │ Título     │      │  │
│  │  [Fastify]   │  │  │ Descripción│  │ Descripción│      │  │
│  │              │  │  └────────────┘  └────────────┘      │  │
│  └──────────────┘  └──────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Comportamiento

- En desktop, filtros fijos a la izquierda.
- En mobile, filtros como chips horizontales con scroll.
- Grid responsivo de 2 o 3 columnas.
- Cada card abre un modal detallado.

### Filtros iniciales

- Todos
- Web
- E-commerce
- Mobile
- Backend / APIs
- UI/UX
- Cliente
- Personal

---

## 14. Wireframe: Modal de proyecto

```text
┌──────────────────────────────────────────────────────────────┐
│  [X]                                                          │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                IMAGEN PRINCIPAL DEL PROYECTO            │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  Nombre del proyecto                                          │
│  E-commerce · Web · 2026                                      │
│                                                              │
│  Empresa / cliente: Kole.pe                                   │
│  Mi rol: Frontend Developer                                   │
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│                                                              │
│  El problema                                                  │
│  ¿Qué necesidad o limitación tenía el negocio o usuario?      │
│                                                              │
│  La solución                                                  │
│  ¿Qué construí y cómo funciona el producto?                   │
│                                                              │
│  Mi rol                                                       │
│  Responsabilidades concretas, módulos y decisiones técnicas.  │
│                                                              │
│  Funcionalidades clave                                        │
│  • Catálogo y filtros                                         │
│  • Carrito y checkout                                         │
│  • Gestión de usuarios                                        │
│  • Panel administrativo                                       │
│                                                              │
│  Galería                                                      │
│  [img] [img] [img]                                            │
│                                                              │
│  Tecnologías                                                  │
│  ( React ) ( TypeScript ) ( Tailwind ) ( Prisma )             │
│                                                              │
│  [ Ver demo ]   [ Ver repositorio ]   [ Ver Figma ]           │
└──────────────────────────────────────────────────────────────┘
```

### Comportamiento

- Modal con scroll interno.
- Fondo bloqueado y oscurecido con blur.
- Ancho máximo: `900–1000px`.
- Chips de tecnologías con estilo neumorfista suave.
- Galería en carrusel o grid.
- Botones solo para links reales: demo, repositorio, Figma, video o tienda.

---

## 15. Wireframe: Educación, certificados y CV

```text
┌──────────────────────────────────────────────────────────────┐
│              Educación, certificados y CV                     │
│                                                              │
│  ┌──────────────────────────────┐  ┌──────────────────────┐  │
│  │  🎓 Educación                 │  │  📄 Descargar CV      │  │
│  │                              │  │                      │  │
│  │  Ingeniería de Computación   │  │  CV actualizado       │  │
│  │  y Sistemas                  │  │  oct. 2026            │  │
│  │  Universidad Privada         │  │                      │  │
│  │  Antenor Orrego              │  │  [ Descargar PDF ]    │  │
│  │  2019 — 2023                 │  │                      │  │
│  └──────────────────────────────┘  └──────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  🏅 Certificados                                      │    │
│  │                                                      │    │
│  │  • Estándares de Competencia Laboral en Desarrollo   │    │
│  │    de Software — CITEccal Trujillo, 2025             │    │
│  │  • Frontend Developer — Platzi, 2023                 │    │
│  │  • Creación de páginas web con Astro — Platzi, 2023  │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

### Comportamiento

- Botón grande y visible para descargar el CV.
- El PDF debe abrir en nueva pestaña y descargarse con nombre profesional.
- Certificados con año e institución.
- Si existe URL verificable, agregar icono de enlace.

---

## 16. Wireframe: Contacto

```text
┌──────────────────────────────────────────────────────────────┐
│                        ¿Trabajamos juntos?                    │
│         Estoy disponible para oportunidades y proyectos       │
│                                                              │
│   ┌──────────────────────────────┐  ┌──────────────────────┐  │
│   │  Formulario                  │  │  Contacto directo     │  │
│   │                              │  │                      │  │
│   │  Nombre                      │  │  ✉️ camila.arc91@...  │  │
│   │  [_______________]           │  │                      │  │
│   │                              │  │  📞 +51 950 592 990   │  │
│   │  Email                       │  │                      │  │
│   │  [_______________]           │  │  📍 Trujillo, Perú    │  │
│   │                              │  │                      │  │
│   │  Tipo de proyecto            │  │  🔗 GitHub            │  │
│   │  [ Web / Mobile / Otro ]     │  │  🔗 LinkedIn          │  │
│   │                              │  │                      │  │
│   │  Mensaje                     │  │                      │  │
│   │  [_______________]           │  │                      │  │
│   │                              │  │                      │  │
│   │  [ Enviar mensaje ]          │  │                      │  │
│   └──────────────────────────────┘  └──────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Comportamiento

- Formulario conectado a Formspree, Web3Forms o EmailJS.
- Estados visibles: “Enviando…”, “Mensaje enviado ✨”, “Hubo un error”.
- Email copiable con un click.
- CTA claro hacia oportunidades laborales, freelance o colaboraciones.

---

## 17. Wireframe: Footer

```text
┌──────────────────────────────────────────────────────────────┐
│  Camila Andrea Rivera                                         │
│  Frontend & Full Stack Developer                              │
│                                                              │
│  Inicio · Experiencia · Proyectos · CV · Contacto             │
│                                                              │
│  GitHub · LinkedIn · Email                                    │
│                                                              │
│  © 2026 Camila Andrea Rivera · Hecho con ☕, código y gatos   │
└──────────────────────────────────────────────────────────────┘
```

### Comportamiento

- Fondo borgoña profundo.
- Texto crema.
- Enlaces de navegación y redes.
- Detalle visual opcional: gatito ilustrado inspirado en Oliver.

---

## 18. Datos base del CV

Estos datos deben reflejarse en el portafolio:

- **Nombre:** Camila Andrea Rivera Calvo.
- **Perfil:** Desarrolladora Frontend con experiencia en aplicaciones web, soluciones digitales y prototipado UX/UI.
- **Ubicación:** Trujillo, La Libertad, Perú.
- **Email:** `camila.arc91@gmail.com`.
- **Teléfono:** `+51 950 592 990`.
- **GitHub:** `Daem91`.
- **Experiencia:**
  - Kole.pe — Diseño, desarrollo y soporte web y móvil, abril 2026 a septiembre 2026.
  - CorAll Development and Research S.A.C. — Desarrolladora Full Stack Web & Mobile, 3 años de experiencia.
- **Educación:**
  - Ingeniería de Computación y Sistemas, Universidad Privada Antenor Orrego, 2019–2023.
- **Certificados:**
  - Estándares de Competencia Laboral N.° 1, 3 y 4 en Desarrollo de Software — CITEccal Trujillo, diciembre 2025.
  - Curso de Frontend Developer — Platzi, enero 2023.
  - Curso de Creación de Páginas Web con Astro — Platzi, octubre 2023.
- **Tecnologías:**
  - Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Astro, Tailwind CSS, Ant Design, Vite, WordPress.
  - Backend: PostgreSQL, Firebase, APIs REST, Prisma, Docker, Fastify, Strapi.
  - Mobile: Kotlin, Flutter.
  - Diseño: prototipado UX/UI, Figma.
  - Herramientas: Git, GitHub, Claude Code.
- **Idiomas:** inglés intermedio alto.

---

## 19. Prioridades para el MVP

### Debe incluir en la primera versión

- Hero con foto, badge “Open to work” y navbar.
- Navbar con avatar caricaturizado al hacer scroll.
- Switch ES/EN.
- Modo claro y oscuro.
- Botón de descarga de CV actualizado.
- Experiencia laboral.
- 4 a 6 proyectos con modal detallado.
- Educación y certificados.
- Contacto funcional.
- Footer.

### Puede esperar para una segunda versión

- Blog.
- Testimonios.
- Servicios detallados.
- Playground de UI.
- Casos de estudio muy extensos.
- Animaciones avanzadas.
- Integración con CMS.

---

## 20. Definición de listo para publicar

El portafolio está listo para publicar cuando:

- Carga correctamente en mobile, tablet y desktop.
- Tiene versión en español e inglés.
- Tiene modo claro y oscuro.
- El CV se descarga correctamente.
- Todos los proyectos tienen imagen, descripción y tecnologías.
- No existen links rotos ni secciones vacías.
- El formulario de contacto envía mensajes.
- El sitio está desplegado en un dominio o subdominio profesional.
