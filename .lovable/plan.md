## Plan de implementación — Nueva web B&CR Growth

### Fase 1: Fundamentos
- Actualizar design system (colores dark mode, tipografía, tokens CSS)
- Actualizar tailwind.config.ts con nueva paleta
- Instalar framer-motion y @fontsource/geist para tipografía

### Fase 2: Estructura y navegación
- Nuevo Navigation con dark mode toggle, nueva estructura de links
- Nuevo Footer con info actualizada
- Actualizar SEO en index.html

### Fase 3: Secciones principales (Hero → CTA)
- Hero con visualización de nodos animada
- Propuesta de valor (problema/solución)
- Servicios principales (3 cards)
- The Agency — equipo marketing IA
- Catálogo de agentes por sector (13 sectores, 79 agentes)
- Top 10 agentes por ROI (tabla)
- Comparativa IA vs agencias tradicionales
- Pricing (5 planes)
- Proceso de onboarding (4 pasos)
- Integraciones tecnológicas
- Testimonios (placeholders)
- CTA/Contacto con formulario
- Stats banner

### Fase 4: Base de datos
- Crear tabla `contacts` en Supabase para leads del formulario

### Fase 5: Pulido
- Animaciones scroll-reveal
- Dark/light mode toggle
- Responsive mobile-first
- Accesibilidad

**Nota:** Dado el volumen, se implementará progresivamente. Las secciones más críticas (Hero, Servicios, Catálogo de Agentes, Pricing, Contacto) tendrán prioridad.