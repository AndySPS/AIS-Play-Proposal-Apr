# Project Governance: AIS Play

## 1. Core Operating Directives
- **Visual Theme**: "Dark Theater" — Cinematic, immersive dark backgrounds.
- **Color Palette**:
  - `Dark Charcoal (#272c2f)`: Primary background.
  - `Near Black (#131313)`: Secondary/social background.
  - `AIS Lime Green (#bcd043)`: Primary interactive accent (Hovers, Buttons, Active states).
  - `Subscribe Pink (#fc004a)`: Scarcity/Premium content labels only.
  - `White (#ffffff)`: Primary text.
  - `White 50% (hsla(0,0%,100%,0.5))`: Muted text/metadata.
- **Typography**:
  - `Roboto`: Primary body and UI font (Default weight: 400).
  - `Kanit`: Display and heading font (Geometric sans-serif).
- **Layout**: Optimized for Desktop/TV (1260px container). 8px border radius on cards.

## 2. Shared Variables & Tokens
```css
:root {
  --color-bg: #272c2f;
  --color-accent: #bcd043;
  --color-premium: #fc004a;
  --color-text-main: #ffffff;
  --color-text-muted: hsla(0,0%,100%,0.5);
  
  --radius-card: 8px;
  --radius-pill: 32px;
  
  --motion-base: 0.5s;
}
```

## 3. UI Guidelines & Component Recipes
- **Content Cards**: 
  - 8px image radius.
  - Bottom 50% gradient overlay (`transparent` to `rgba(0,0,0,0.5)`).
  - Title: 22px Roboto, White.
  - Hover: Title turns `#bcd043` (AIS Lime Green).
- **Buttons**:
  - **Subscribe Pill**: `#bcd043` background, `#272c2f` text, 32px radius.
  - **Auth Button**: `#8bb31d` background, 10px radius, 55px height.
- **Hero Sections**:
  - Full-screen cinematic still background.
  - Dynamic content updates (fading transitions) when focus shifts.
  - Left-aligned text with radial gradient mask for readability.
- **Navigation**:
  - Semi-transparent Navbar (`rgba(9,9,9,0.8)`) with `box-shadow: 0 0 22px rgba(0,0,0,0.5)`.

## 4. Interaction Philosophy
- **Master Layer**: Content-first discovery. Provider logos as metadata badges.
- **Spatial Navigation**: D-pad ready (keyboard focusable states).
- **Smooth Fades**: 500ms background transitions to replicate high-end TV UI.

## 5. Development Principles
- **No Inline Styles**: Use Tailwind CSS utility classes.
- **Component Focused**: Functional components with clear prop interfaces.
- **Responsive Management**: Desktop-first precision (TV layout priority).
