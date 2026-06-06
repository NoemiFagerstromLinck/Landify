# Guía de Diseño — Landify

## Filosofía

Editorial minimalista. Tipografía como protagonista, espacios generosos, paleta sobria con un solo acento vibrante. Inspirado en el diseño editorial de revistas y en la estética de estudios de diseño chilenos.

## Paleta

| Token | Color | Hex | Uso |
|---|---|---|---|
| `ink` | Negro | `#0A0A0A` | Fondo principal |
| `charcoal` | Carbón | `#141414` | Fondos de sección/cards |
| `charcoal-light` | Carbón claro | `#2A2A2A` | Bordes |
| `paper` | Blanco roto | `#F5F5F0` | Texto principal |
| `paper-muted` | Gris | `#8A8A8A` | Texto secundario |
| `crimson` | Rojo chileno | `#D4382C` | Acento principal |
| `crimson-light` | Rojo claro | `#E85D4A` | Hover/secondary |

## Tipografía

- **Display (headings)**: Playfair Display — serif, pesos 400–700, cursiva para énfasis
- **Body**: Inter — sans-serif, pesos 300–600, tracking para uppercase

### Jerarquía

```
h1: text-6xl/7xl/8xl font-display font-bold
h2: text-3xl/5xl font-display font-bold
h3: text-xl/2xl font-display font-bold/semibold
body: text-sm/14px font-body
meta: text-xs tracking-[0.2em] font-body uppercase
```

## Espaciado

- Padding lateral: `px-8 md:px-12 lg:px-16`
- Secciones: `py-32 md:py-44`
- Entre bloques de contenido: `16` (4rem) o `20` (5rem)

## Componentes clave

### HeaderNav
- Fijo, `mix-blend-difference` para adaptarse al fondo
- Navegación con tracking `widest`, uppercase
- Dropdown de servicios con fondo `#141414` y borde sutil

### HeroSection
- Full viewport height
- Headline masivo con Playfair Display
- CTA: botón crimson sólido, hover a blanco

### ServicesSection
- Grid de 3 columnas con separador `gap-px bg-white/5`
- Numeración editorial (01, 02, 03)
- Hover cambia a crimson

### StatsSection
- Grid 4 columnas con números grandes en crimson
- Misma técnica `gap-px bg-white/5`

### BlogSection
- Grid 3 columnas estilo editorial cards
- Tags en crimson, hover cambia color

### FAQ
- Acordeón minimalista
- Ícono "+" que rota 45° al abrirse
- Separadores `divide-y divide-white/5`

### Footer
- Grid 4 columnas
- Enlaces con hover a crimson
- Texto secundario en `paper-muted`

### WhatsAppButton
- Fijo, esquina inferior derecha
- Crimson sólido, hover a blanco

## Animaciones

- Transiciones de hover en links y cards: `duration-300`
- FAQ toggle: `rotate-45` en el ícono
- Header nav: `mix-blend-difference` sin transiciones agresivas
- Scroll reveal: no implementado aún (se puede añadir con Intersection Observer)

## Responsive

- Mobile first con Tailwind breakpoints (`md:`, `lg:`)
- Navegación colapsa a menú hamburguesa en mobile
- Grids pasan a 1 columna en mobile
- Tipografía se escala: `text-6xl → md:text-8xl → lg:text-9xl`

## Cómo usar este design system

Todos los colores y fuentes están definidos en `tailwind.config.js` y `src/assets/main.css`. Usa las clases de Tailwind directamente:

```html
<h1 class="text-6xl font-display font-bold text-paper">
  Título <span class="italic text-crimson">destacado</span>
</h1>
<p class="text-sm text-paper-muted font-body">
  Texto secundario
</p>
```
