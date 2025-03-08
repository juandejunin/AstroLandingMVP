# AstroLandingMVP

MVP de una landing page optimizada construida con [Astro](https://astro.build/). Diseñada para capturar leads mediante un enlace a un Google Form, este proyecto es simple, personalizable y enfocado en rendimiento.

## Características
- **Minimalista:** Una página con encabezado, sección de detalles y pie de página.
- **Personalizable:** Todo el contenido (títulos, descripciones, enlaces) se configura vía `.env`.
- **Responsiva:** Diseñada con Tailwind CSS para adaptarse a todos los dispositivos.

- **Rápida y Optimizada:** Construida con Astro, logra un puntaje del 100% en los cuatro parámetros de Lighthouse (Performance, Accessibility, Best Practices y SEO).

## Instalación
Clona el repositorio:

 ```
   git clone https://github.com/juandejunin/AstroLandingMVP.git   
```

Instala las dependencias:
```
npm install
```

Crea un archivo .env basado en .env.example y personaliza las variables.
Corre el proyecto localmente:

```
npm run dev
```

## Personalización
Edita el archivo .env para ajustar:

1. Títulos y descripciones (HERO_TITLE, DETALL_DESCRIPTION, etc.).
2. Enlace al Google Form (GOOGLE_FORM_URL).
3. Colores (PRIMARY_COLOR) y más.

### Estructura
src/pages/index.astro: Página principal.

src/components/: Componentes reutilizables (MastHead, Detall, Footer).

src/icons/: Iconos SVG para el footer.

### Licencia
© 2025 Juan Amieva. Todos los derechos reservados.
