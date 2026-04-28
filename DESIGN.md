# Design System: AIS Play

## 1. Visual Theme & Atmosphere

AIS Play is Thailand's premium streaming platform — a dark, cinema-grade interface where content thumbnails, hero banners, and live TV channels become the primary visual focus. The design philosophy is "dark theater" — surfaces built from deep charcoal (`#272c2f`) and near-black (`#131313`, `#151516`) backgrounds that push content forward while the UI itself recedes. This is entertainment immersion: the interface disappears so movies, series, and live sports can dominate.

The brand presence is carried by AIS Lime Green (`#bcd043`) — a yellow-green accent inherited from the parent AIS telecoms brand. It functions as the singular signal of interactivity: hover states, active navigation, subscribe buttons, pagination dots, checkboxes, and channel highlights all glow in this hue. A secondary Subscribe Pink (`#fc004a`) appears exclusively on premium content badges and subscription labels, creating urgency against the dark canvas.

Typography is optimized for desktop/TV viewing. The app body uses Roboto — Google's clean, system-level sans-serif — for all UI content and text. Display headings use Kanit, a geometric sans-serif, providing sharp visual hierarchy for large screens. For Thai-language content, Kanit scales fluidly across sizes.

The geometry is functional streaming: content cards use an 8px border radius creating soft rectangles, subscribe buttons are full pills (`border-radius: 32px`), and play buttons are perfect circles. A pervasive bottom gradient overlay (`linear-gradient(180deg, transparent, rgba(0,0,0,0.5))`) sits on top of content thumbnails, creating a vignette that allows white title text to remain readable against any artwork. The navbar uses a semi-transparent dark overlay (`rgba(9,9,9,0.8)`) with a box-shadow that makes it float above scrolling content.

**Key Characteristics:**
- Deep charcoal body (`#272c2f`) with near-black sections (`#131313`–`#151516`) — cinema darkness
- AIS Lime Green (`#bcd043`) as the sole interactive accent — never decorative, always functional
- Subscribe Pink (`#fc004a`) exclusively for premium badges and subscription CTAs
- Roboto body font + Kanit for display headings
- 8px border-radius content cards with bottom gradient overlays for text readability
- Full pill subscribe buttons (32px radius) and circular play controls (50%)
- Semi-transparent navbar overlay (`rgba(9,9,9,0.8)`) floating above content
- Content thumbnails are the sole source of color — the chrome is monochrome

## 2. Color Palette & Roles

### Primary Brand
- **AIS Lime Green** (`#bcd043`): Primary interactive accent — hover states, active nav, subscribe buttons, pagination, checkbox fills, channel highlights
- **AIS Deep Green** (`#8bb31d`): Login/auth buttons, spinner elements, secondary green
- **AIS Link Green** (`#b2d233`): Sidebar close focus state, link-specific green variant
- **Subscribe Pink** (`#fc004a`): Premium subscribe labels, content badges, urgency accent

### Backgrounds
- **Dark Charcoal** (`#272c2f`): Body background, primary surface, account pages
- **Deep Dark** (`#131313`): Social sections, deepest non-black surfaces
- **Auth Dark** (`#151516`): Login/auth dialog panels, accept overlays
- **Terms Dark** (`#1c1718`): Terms pages, legal/PDPA content areas
- **Share Block Dark** (`#393a42`): Share buttons, action overlays
- **Navbar Overlay** (`rgba(9,9,9,0.8)`): Primary navigation bar with shadow
- **Sidebar Overlay** (`rgba(8,8,8,0.9)`): Side navigation panel background
- **Banner Gradient** (`linear-gradient(180deg, transparent, #000)`): Hero banner overlay to black
- **Card Gradient** (`linear-gradient(180deg, transparent, rgba(0,0,0,0.5))`): Content card bottom vignette

### Text
- **White** (`#ffffff`): Primary text, body copy, headings, all default text
- **White 50%** (`hsla(0,0%,100%,0.5)`): Related component labels, muted items
- **Silver** (`#c8c7c7`): Sub-navigation text in corporate header
- **Mid Gray** (`#7d7d7d`): Related item metadata, additional info
- **Muted Gray** (`#a0a0a0`): Disabled arrow buttons, unavailable controls
- **Time Gray** (`#696969`): EPG time labels, schedule metadata
- **Charcoal Text** (`#272c2f`): Dark text on light backgrounds (buttons, auth forms)
- **Error Link** (`#a6a6a6`): Muted page links on error pages

### Semantic & Utility
- **Active Blue** (`#163fb9`): Currently playing indicator, active media highlight
- **Pro Blue** (`rgba(31,85,255,0.5)`): Pro/premium content button backgrounds
- **Pro Hover Yellow** (`#ffda00`): Pro button hover state, premium CTA hover
- **Standard Blue** (`#007bff`): Default Bootstrap primary, form focus states
- **Duration Gray** (`hsla(0,0%,47.1%,0.8)`): Video duration badge background
- **Media Label Green** (`#bcd043`): Active/next labels on media related blocks

### Surface & Border
- **Channel Border** (`#4f5357`): Channel list item borders
- **Separator** (`hsla(0,0%,100%,0.1)`): Subtle media block bottom dividers
- **Promo Card Border** (`hsla(0,0%,100%,0.3)`): Promo card default border
- **Promo Card Hover** (`hsla(0,0%,100%,0.8)`): Promo card border on hover

### Shadows
- **Navbar Float** (`0 0 22px rgba(0,0,0,0.5)`): Main navigation bar shadow
- **Dialog Shadow** (`0 0 21px 0 rgba(0,0,0,0.5)`): Modal dialogs, cookie consent
- **Text Shadow** (`0 1px 1px rgba(0,0,0,0.7)`): Promo card text on hover

## 3. Typography Rules

### Font Families
- **Body / UI**: `Roboto, sans-serif` — system-level sans-serif for all app UI, content, and text
- **Display Headings**: `Kanit, sans-serif` — geometric sans-serif for display and large-scale typography
- **Icon Font**: `Font Awesome 5 Pro` (weights 300, 400, 900) — full icon system

### Hierarchy

Desktop/TV focused. All sizes optimized for large-screen viewing.

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Page Title | Kanit | 52px | 600–700 | — | Error pages, large display |
| Section Title | Roboto | 32px | 500 | 1.2 | Row headings above carousels |
| VOD Program | Roboto | 36px | 500 | 1.2 | Uppercase, max-height clipped |
| VOD Title | Roboto | 30px | 500 | 1.2 | Below program name |
| Card Title | Roboto | 22px | 500 | 1.3 | Content cards, max 2 lines |
| Promo Card Title | Roboto | 26px | 400 | 1.3 | Promo card heading |
| Body | Roboto | 20px | 400 | 1.5 | Standard body text |
| Related Title | Roboto | 22px | 300 | 1.3 | Related content labels |
| Nav Link | Roboto | 20px | 500 | — | Sidebar navigation items |
| Caption / Meta | Roboto | 18px | 300–400 | 1.4 | Media metadata, descriptions |
| Heading (.h1) | Roboto | 3rem | 500 | 1.2 | H1 headings |
| Heading (.h2) | Roboto | 2.5rem | 500 | 1.2 | H2 headings |
| Heading (.h3) | Roboto | 2rem | 500 | 1.2 | H3 headings |
| Duration Badge | Roboto | 16px | 400 | 1 | Video duration label |
| EPG Label | Roboto | 15px | 300 | 1 | EPG block titles |
| Small Meta | Roboto | 16px | 400 | 1 | Time labels, sub-metadata |

### Principles
- **Light default weight**: Body text uses `font-weight: 400`, with `300` for subtle metadata. This creates a modern, readable experience against dark backgrounds.
- **500–600 for emphasis**: Headings and titles use weight 500–600 (medium-bold), creating clear visual hierarchy on large screens.
- **Kanit for display**: Geometric sans-serif Kanit replaces serif/condensed typefaces, providing sharp, modern hierarchy for display sizes.
- **Desktop scale**: All sizing optimized for 1024px+ screens and TV viewing distances. No responsive scaling needed.
- **Overflow management**: Most titles use `overflow: hidden` with `max-height` constraints, ensuring layout stability with variable-length content.

## 4. Component Stylings

### Buttons

**Subscribe Pill**
- Background: `#bcd043`
- Text: `#272c2f`
- Padding: 6px 16px
- Radius: 32px (full pill)
- Use: Primary subscribe/CTA button

**Auth Login**
- Background: `#8bb31d`
- Text: `#343434`
- Width: 90% (max 370px)
- Height: 55px
- Radius: 10px
- Font-weight: 700
- Use: Login/sign-in buttons on auth dialogs

**Auth Confirm**
- Background: `#bcd043`
- Text: inherits
- Radius: inherits from auth container
- Font-weight: 700
- Use: Form confirmation buttons (remember me, submit)

**Pro Button**
- Background: `rgba(31,85,255,0.5)`
- Text: `#ffffff`
- Padding: 6px 12px (lg) / 8px 20px (sm)
- Hover: `background: #ffda00`, `color: #007bff`
- Use: Premium/pro content CTAs

**Share Button**
- Background: `#393a42`
- Text: `#ffffff`
- Active: `background: #ffffff`, `color: #272c2f`
- Use: Social sharing toggles

**Arrow Button**
- Background: transparent
- Icon stroke: `#ffffff`
- Hover stroke: `#bcd043`
- Disabled stroke: `#a0a0a0`
- Use: Carousel navigation arrows

### Cards & Containers

**Content Card**
- Background: inherits (transparent over dark)
- Image radius: 8px
- Overlay: `linear-gradient(180deg, transparent, rgba(0,0,0,0.5))` on bottom 50%
- Text: white, 15px, weight 500
- Duration badge: `hsla(0,0%,47.1%,0.8)` background, 12px, white
- Hover: text color changes to `#bcd043`
- Use: Movie/series content thumbnails

**Promo Card**
- Background: `#000000`
- Border: `1px solid hsla(0,0%,100%,0.3)`
- Text: white
- Hover: `border: 1px solid hsla(0,0%,100%,0.8)`, text-shadow added
- Transition: `all 0.5s ease-in-out`
- Use: Promoted content / scheduled shows

**Banner Card**
- Image radius: 8px
- Overlay: `linear-gradient(180deg, transparent, #000)` on bottom 50%, with 8px bottom radius
- Use: Hero banner slider images

**Auth Dialog**
- Background: `#151516`
- Radius: 15px
- Max-width: 450px
- Text: white
- Logo: AIS logo centered, 180×38px
- Positioning: fixed center (`transform: translate(-50%,-50%)`)
- Use: Login panels, PDPA acceptance

### Badges

**Subscribe Label**
- Background: `#fc004a`
- Text: `#ffffff`
- Padding: 2px 6px
- Radius: 4px
- Font-weight: 500
- Use: Premium/subscribe required indicators

**Active/Next Label**
- Background: `#bcd043`
- Text: `#000000`
- Font-weight: 600
- Font-size: 10px (active) / 9px (next)
- Use: EPG schedule currently playing / up next labels

### Inputs

**Search Input**
- Background: inherits from form
- Radius: 4px (top-left, bottom-left)
- Search button hover: `background: #bcd043`
- Use: Content search

**Form Control**
- Background: `#ffffff`
- Text: `#495057`
- Radius: 0.2rem
- Border: `1px solid #ced4da`
- Focus border: `rgba(31,85,225,0.8)`, glow: `rgba(31,85,225,0.6)`
- Use: Auth form inputs

### Navigation

**Main Navbar**
- Background: `rgba(9,9,9,0.8)` with `box-shadow: 0 0 22px rgba(0,0,0,0.5)`
- Width: 100vw
- Logo: 120×24px AIS Play logo
- Hamburger: 24×24px toggle
- Text: white, hover `hsla(0,0%,100%,0.5)`
- Use: Top fixed navigation bar

**Side Navigation**
- Background: `rgba(8,8,8,0.9)`
- Max-width: 320px
- Overlay: `rgba(0,0,0,0.5)` full-screen backdrop
- Link: 15px, white, padding 9px 17px
- Link hover: `color: #555`, `background: #bcd043`
- Animation: slide-in 0.5s
- Use: Mobile menu panel

**Pagination Dots**
- Size: 0.6em round dots
- Default: `#ffffff`
- Active/hover: `#bcd043`
- Disabled: `#272c2f`
- Spacing: 4px between
- Use: Carousel/banner pagination

### Channel List

**Channel Item**
- Text: white, 0.8em
- Active: `border-bottom: 2px solid #bcd043`
- Hover: `background-color: #bcd043`
- Poster: 48×48px max
- Use: Live TV channel listing

## 5. Layout Principles

### Spacing System
- Base unit: 8px (approximately)
- Common values: 8px, 16px, 24px, 40px, 64px
- Section spacing: `margin-top: 40px; margin-bottom: 40px`
- Content padding: 15px horizontal (container gutters)

### Grid & Container
- **Desktop/TV**: 1260px max-width, centered, with 15px horizontal padding
- Carousel items: 5px margin left/right between columns
- Content cards: inline-block within horizontal scrolling carousels
- VOD layout: 60/40 split — video left, metadata right (gradient overlay on data panel)

### Whitespace Philosophy
- **Dense content**: AIS Play maximizes content density for TV viewing — carousels stack vertically with 40px vertical spacing, cards pack with 5px gutters.
- **Gradient breathing**: Gradient overlays (transparent → dark) on content create visual breathing room within image-heavy layouts.
- **Layered depth**: Semi-transparent navbar and sidebar provide spatial separation through transparency and overlay, rather than margins or borders.

### Border Radius Scale
- Tiny (4px): Subscribe badges, search input corners, duration badges
- Standard (8px): Content card images, banner images, card thumb content, carousel card overlays
- Comfortable (10px): Auth login buttons
- Large (15px): Auth dialog panels
- Pill (32px): Subscribe CTA buttons
- Circle (50%): Play buttons, live indicator badges, pagination dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (Level 0) | `#272c2f` solid background | Body, deepest page layer |
| Recessed (Level -1) | `#131313` solid | Social sections, deep insets |
| Surface (Level 1) | `#151516` or `#1c1718` | Auth dialogs, terms pages |
| Overlay (Level 2) | `rgba(9,9,9,0.8)` + `box-shadow: 0 0 22px rgba(0,0,0,0.5)` | Main navbar, floating UI |
| Sidebar (Level 3) | `rgba(8,8,8,0.9)` over `rgba(0,0,0,0.5)` backdrop | Side navigation |
| Dialog (Level 4) | `box-shadow: 0 0 21px 0 rgba(0,0,0,0.5)`, fixed center | Modal dialogs, cookie consent |
| Content Gradient | `linear-gradient(180deg, transparent, rgba(0,0,0,0.5))` | Card overlays, banner fade |

**Shadow & Overlay Philosophy**: AIS Play relies primarily on **transparency layering** rather than traditional box-shadows for depth. The navbar's semi-transparent `rgba(9,9,9,0.8)` creates depth by revealing content scrolling beneath it. Content cards use gradient overlays rather than drop-shadows. When box-shadows are used (navbar, dialogs), they are heavy and diffused (`22px blur`, `21px blur`) to create a soft glow rather than a hard edge — appropriate for a dark theme where sharp shadows are invisible.

## 7. Do's and Don'ts

### Do
- Use deep charcoal backgrounds (`#272c2f`, `#131313`) — never pure black for large surfaces
- Apply AIS Lime Green (`#bcd043`) only for interactive states: hovers, actives, CTAs, pagination
- Use gradient overlays on content images (`transparent → rgba(0,0,0,0.5)`) for text readability
- Keep content cards at 8px radius — consistent, softened rectangles
- Use pill shape (32px) for subscribe/CTA buttons — they must pop against dark backgrounds
- Apply semi-transparent backgrounds for floating UI (`rgba(9,9,9,0.8)` for navbar)
- Let content thumbnails and hero images provide all color — the chrome stays monochrome
- Use weight 400–500 for most text — keep it elegant, not heavy
- Clip text with `overflow: hidden` and `max-height` — Thai text lengths vary dramatically

### Don't
- Don't use AIS green on backgrounds or large surfaces — it's an accent, not a fill
- Don't use Subscribe Pink (`#fc004a`) for anything except premium/subscription badges
- Don't use light backgrounds for content areas — the cinema darkness is the platform identity
- Don't apply sharp box-shadows — use heavy diffused shadows (20px+ blur) or transparency instead
- Don't use bold (700) for body text — Roboto at 300–400 creates the thin, modern reading experience
- Don't mix interactive colors — green is for interaction, pink is for subscription urgency only
- Don't use static navigation — the navbar must be semi-transparent with content scrolling beneath
- Don't ignore overflow management — always clip text containers with max-height for layout stability

## 8. Desktop/TV Layout

AIS Play is optimized exclusively for desktop and TV screens (≥ 1024px).

### Layout Specifications
- **Container**: 1260px max-width, centered, with 15px horizontal padding
- **Navigation**: Fixed top navbar with inline nav links always visible
- **Content carousels**: Horizontal scrollable rows with 5–6 card columns
- **VOD hero**: Full-width video + right-side metadata panel (60/40 split)
- **Live player controls**: 50px padding
- **Section spacing**: 40px margin top/bottom
- **Auth dialogs**: Fixed center overlay, 450px max-width
- **Channel items**: Channel poster 48×48px; grid reflows with content

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Dark Charcoal (`#272c2f`)
- Deep surface: Near Black (`#131313`)
- Auth surface: Auth Dark (`#151516`)
- Text: White (`#ffffff`)
- Muted text: White 50% (`hsla(0,0%,100%,0.5)`)
- Interactive accent: AIS Lime Green (`#bcd043`)
- Login button: AIS Deep Green (`#8bb31d`)
- Premium badge: Subscribe Pink (`#fc004a`)
- Navbar: `rgba(9,9,9,0.8)` + shadow

### Example Component Prompts
- "Create a content card: transparent background over `#272c2f`. Image with 8px radius. Bottom 50% gradient overlay from transparent to `rgba(0,0,0,0.5)`. Title below: 22px Roboto weight 500, white. Hover: title turns `#bcd043`. Duration badge: 16px, `hsla(0,0%,47.1%,0.8)` background."
- "Design a subscribe button: `#bcd043` background, `#272c2f` text, 32px radius (pill), 6px 16px padding. Hover: opacity 0.8."
- "Build the navbar: `rgba(9,9,9,0.8)` background, `box-shadow: 0 0 22px rgba(0,0,0,0.5)`, fixed top, 100vw width. Logo left 120×24px, hamburger 24×24px right."
- "Create a login dialog: `#151516` background, 15px radius, 450px max-width, centered fixed. AIS logo 180×38px centered top. Green login button `#8bb31d`, 10px radius, 55px height, desktop-only 90% width."
- "Design channel list item: white text, 0.8em. Active: `border-bottom: 2px solid #bcd043`. Hover: `background-color: #bcd043`. Channel logo 48×48px left."
- "Build a subscribe badge: `#fc004a` background, white text, 4px radius, 2px 6px padding, weight 500."

### Iteration Guide
1. Start with `#272c2f` body — cinema-grade charcoal, not pure black
2. AIS Lime Green (`#bcd043`) is interaction-only — hovers, actives, CTAs, pagination
3. Subscribe Pink (`#fc004a`) is scarcity-only — premium badges, subscription labels
4. Gradient overlays on all content images — `transparent → rgba(0,0,0,0.5)` bottom half
5. Semi-transparent floating UI — navbar at `rgba(9,9,9,0.8)` with heavy diffused shadow
6. Roboto at 300–500 weight for body; Kanit for display headings — elegant, never heavy
7. 8px radius everywhere cards appear — consistent, softened, never sharp or fully rounded
8. Content provides all color — the UI chrome is strictly white-on-dark with green accents
9. Motion timing: `--motion-fast: 0.3s`, `--motion-base: 0.5s`, `--motion-slow: 0.75s` — smooth, glacial transitions for TV viewing
