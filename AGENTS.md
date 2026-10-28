# Agent Directives: Starship Developer Portfolio

## 1. System Identity & Creative Vision

Interactive developer portfolio inspired by the Starship Enterprise interior from Star Trek's Kelvin timeline.

- Aesthetic: Seamless high-gloss ceramic composite hull panels, polished titanium bezels, illuminated controls, volumetric holographic screens, and directional tactical overlays.
- Dual Operational States:
  - **Exploration Mode (Light)**: Ceramic white walls (`--primitive-ceramic-50`/`100`), vibrant aqua & azure screens, with mints, sulfur & siren indicators.
  - **Red Alert Mode (Dark)**: Deep graphite armor (`--primitive-ceramic-900`), siren reds, crimson glows, with topaz, tangerine & siren indicators, and high-visibility hazards (`--warning-lines-*`).

## 2. Technical Stack & Architecture

- **Core**: React 19, TypeScript (~5.6), Vite.
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` engine with `@theme` and `@utility`).
- **Motion & 3D**: `motion` (v12+), Three.js (`@react-three/fiber`, `@react-three/drei`).
- **State Management**: Zustand (ship alert status, audio subsystem, active modal, etc.).
- **Internationalization**: `react-i18next`, `i18next-resources-for-ts`, `i18next-http-backend`.
- **Icons**: `@heroicons/react` (primary), `react-icons` stroke compatible (Lucide, Material Design, etc.) for fallbacks and specific tech stack logos.

### Directory Organization

```text
src/
├── @types/ # i18n resources interfaces
├── app/ # Ship views (Bridge, Systems, Hall, Armory, Agora)
├── assets/ # Fonts, audio files, static textures, local SVGs
├── components/ # Global components used across all sections
│ ├── cabin/ # Structural diegetic elements (Doors, Ceilings, Consoles)
│ ├── layout/ # HUD Header, Nav minimap, Starfield, etc.
│ ├── feedback/ # Glassmorphic sci-fi modals & snacks
│ └── ui/ # Reusable primitives (Buttons, ScreenWrappers)
├── constants/ # Static immutable data (IDs, URLs, tech tags, metrics)
├── features/ # Section subfolders with own components, hooks, types, etc. folders.
├── hooks/ # Custom hooks (audio, ship state, viewport queries)
└── store/ # Zustand global stores (useShipStore, useAudioStore)
```

## 3. Design System & CSS Token Guidelines

Strictly obey the 3-layer architecture defined in index.css:

1.  Layer 1: Color Primitives (--primitive-\*): 6-digit hex values. Do not consume primitives directly in components.
2.  Layer 2: Semantic Tokens: Defined in :root and .dark (e.g., --bg-base, --accent-base, --screen-bg).
3.  Layer 3: Tailwind Theme Aliases & Utilities: Use @theme tokens (bg-base, text-fg, border-border-accent) and custom utilities (screen, screen-drop, screen-glare, screen-dots-left, octagon-sm, octagon-lg, rhombus, warning-lines).

### Component Styling Rules

- No Arbitrary Hex Codes: **NEVER** hardcode arbitrary color values (e.g., bg-[#00d5eb]) inside TSX files.
- Glassmorphic Consoles: Use custom utility screen alongside screen-glare and screen-drop. Override borders or indicators dynamically using data-status="safe" | "warning" | "danger" | "info".
- Transparency Rules: Use Tailwind v4 opacity modifiers (e.g., bg-(--accent-base)/40) or CSS RCS. Never append raw alpha digits to hex tokens.
- Hardware-Accelerated Shapes: Apply clip-path like in .octagon-\*, .rhombus or other irregular sci-fi shapes.

## 4. Starship Topology & Sections (Layer 2)

All sections are 2.5D interactive environments with Layer 0 (Nebula image), Layer 1 (3D R3F Starfield), Layer 2 (Section bg image), and Layer 3 (Fixed Ship HUD Ceiling and interactive elements).

### 1. Command Bridge (Home - /{en,es})

- Navigational Access Points:
  - Left Gate -> /systems-bay
  - Right Gate -> /agora
  - Floor Service Hatch -> /armory
  - Stellar Console -> /magellanic-hall
- Interactive Props:
  - Captain's Seat Console: Opens OfficerCard glassmorphic modal with profile summary.
  - Tactical Minimap: Dynamic overlay rendering current ship section coordinates on some aspect ratios.

### 2. Systems Bay (Projects - /{en,es}/projects)

- Visuals: Futuristic server room filled with interactive terminals.
- Interactions: Each terminal represents an active project. Clicking opens terminal screen with repo metrics, stack tags, live preview link, and architectural highlights.
- Filtering Unit: Standing console to filter projects by sector, licensing, stack, and platform.

### 3. Magellanic Hall (Experience - /{en,es}/experience)

- Visuals: Giant 3D astrometrics map powered by React Three Fiber.
- Interactions: Career stops are rendered as illuminated star systems. Clicking a star system projects an orbital telemetry panel showing role, company, duration, and achievements.

### 4. Armory (Skills - /{en,es}/skills)

- Visuals: Tactical armory rack with modular sci-fi modules, tools, and weapons.
- Interactions: Each weapon/device corresponds to a core skill. Clicking inspects certification status, proficiency level, and references to related projects in the Systems Bay.

### 5. Agora (Contact - /{en,es}/contact)

- Visuals: High command strategic briefing room. Central round table with holographic crew members in designated seats.
- Interactions: Tactical table terminal brings up a subspace comms screen with a working contact email form.

## 5. Screen Transitions & Navigation Protocol

- Do not use instant cuts between ship chambers.
- Route changes could use motion's AnimatePresence with directional shifts matching the ship's physical layout:
  - Lateral movements (Bridge <-> Systems Bay, Bridge <-> Agora) could slide horizontally (translateX).
  - Vertical drops (Bridge <-> Armory) could slide vertically (translateY).
  - Deep scans (Bridge <-> Magellanic Hall) could use optical zoom-in (scale + anamorphic glare wipe).
- Transitions should only animate transform, opacity, and filter: blur to maintain 60 FPS on low end devices.

## 6. Internationalization (i18n) Rules

- Zero Hardcoded Strings: All UI labels, titles, error states, and descriptive copy must use useTranslation().
- Separation of Concerns:
  - All static data (URLs, dates, technology IDs, numerical stats) must reside in @src/constants/<section>.constants.ts.
  - All localized strings must reside in public/locales/{en,es}/<section>.json.
- Entity Identification: Match constant entities with translated entities using deterministic string IDs (e.g., skill.id === "typescript" maps to t('armory:skills.typescript.description')).
- Strict Typing: Run npm run toc and npm run interface after modifying translation keys to guarantee full autocompletion and compile-time verification.

## 7. Performance & Optimization

- Mobile First: Target smooth 60 FPS on low-power devices.
- Three.js Isolation: R3F <Canvas> components must be memoized and isolated from frequent React DOM re-renders. Use frameloop="demand" for scenes that do not require constant delta frame updates.
- Animation Restrictions: Never animate layout-triggering properties (width, height, top, margin, padding). Animate exclusively transform and opacity.
- Drop Shadows: Heavy filter: drop-shadow should not be animated continuously. Use pre-rendered pseudo-elements with fading opacity or CSS variables calibrated on hover.
