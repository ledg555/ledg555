# Software developer portfolio with starship theme

## Functional requirements

Five sections in 2.5D scenarios:

1. "Command bridge" (home page)
2. "Systems Bay" (projects page)
3. "Magellanic Hall" (job experience trajectory page)
4. "Armory" (skills page)
5. "Agora" (contact page)

### Background and Ceiling

- Space background will be a static image of a nebula, with a 3D star field on top of it.
- Inside the starship there'll always be a HUD-like header (the ship's ceiling) with:
  - quick actions speed dial: copy email, copy whatsapp, see resume, my linkedin, my github
  - quick screen-like buttons (navlinks) to each section
  - Toogle buttons for: communications (sounds and music), language (en-es), and "Exploration" (light) - "Red alert" (dark) modes

### Command Bridge

Image will feature links to each section:

- Left door will take us to Systems Bay
- Right door: to the Agora
- A mini stellar map next to a crew member's seat will take us to the Magellanic Hall
- A hatch on the floor, next to the captain's seat will take us to the Armory.

Also, captain's seat itself will be clickable and display a glassmorphic modal with their profile details as set in the translation files. In a corner of the bridge we'll display a navigation minimap of the current section whenever viewport's dimensions make us need it.

### Systems Bay

Background image will be a server room. But instead of racks of black boxes with led lights and no screens, its corridors will be filled with scifi terminals. Each terminal will represent a single system (project) and display its details in a glassmorphic screen when clicked, and there will be a console in a corner of the rool to filter out projects by sector, licensing, stack & platform.

### Magellanic Hall

Each job will be a clickable stellar system in a giant 3D stellar map, displaying another glassmorphic screen with info like start and end dates, company name, roles and main achievements.

### Armory

Each skill should be a clickable tool, powerup or weapon, displaying another glassmorphic screen with info like certificates, projects or jobs related to that skill.

### Agora

A high command briefing room. It will feature a central table with 8 seats and holographic crew members displayed in three of them. At the nearest end of the table there will be a terminal the user can click to display another glassmorphic screen to fill and send an email.

## Style requirements

### Color

Starship will resemble the inside of the Enterprise in Star Trek's Kelvin timeline. Unlike the old ones, this Enterprise is filled with brilliant, ceramic-like walls and lots of colorish buttons and led lights everywhere in control panels. In "Exploration" mode, those colorish elements are gonna always have shades of blues, reds, greens and yellows. In "Red Alert" mode, all walls will turn to deep shades of grays and all colorish buttons and led lights will turn to more faint shades of only reds, yellows and oranges. Some directives:

1. We'll need a css token palette for each group of shades (no need to define all 50 to 950 values, though: just as we need them).
2. Use **ONLY** 6-digit hex values for css tokens. Leverage Tailwind to apply alpha channel (e.g. "bg-screen/60") when really needed (like in glassmorphic elements or holographic effects).
3. You always must define whatever new color you need instead of hardcoding it. However, always be critical about if there's not an already existing shade that could do the job. If that's the case, give it a semantic name and a tiny comment about where it's used (with concise alpha channel usage explanations if needed) and other places where it could be used in the future, to stay aware of it.
4. If for any reason a color token needs rename for UI consistency and clarity, leave suggestion in chat and I'll perform rename task by myself.

### Animations & Icons

We'll leverage mostly Motion library for the 'simple' 2D animations, and maybe more complex 3D tricks for the hardest or more striking ones that will need so. Our preferred icon pack is Hero Icons, but we can use alternatives in cases where no appropriate Hero Icon exists and the alternative pairs well enough with Hero Icons style.

## Skills Directive

- glassmorphism: Invoke when building panels, sci-fi console modals, overlays, or floating components over ship scenes. Implements frosted glass with specular borders, anti-banding grain for dark backgrounds, liquid refraction, and GPU/accessibility optimizations.
- svg-animation: Invoke for interactive and programmatic vector manipulation using CSS or GSAP. Use for drawing cybernetic reticles over clickable objects (stroke draw-on), tracing navigation routes on the star map (motion path), and transitioning between icon states (morphing).
- 3dsvg-interactive-react: Invoke to transform 2D SVG paths into extruded 3D components in React/Three.js (<SVG3D>). Ideal for ship insignias, emblems with metallic/holographic finishes, and interactive volumetric icons without requiring external GLTF models.
- svg-animation-engineer: Invoke to generate pure vector micro-illustrations with looping physics-based animations using exclusively CSS keyframes. Use for continuous ambient elements (such as steam from mugs in the Agora or air-reactive vegetation) without overloading the JavaScript main thread.

## Other notes

- Textures: Although we have tile patterns in the public folder and I love some of them, we'll maybe end up changing all by a handful of PBR textures.
- Translations: i18next will be extremely important for spanish and english translations. I'll provide proposals for namespace keys whose data varies per language, and keep all constant data in @src/constants.
- Performance: Since the website is intended to display nicely also on mobile devices, be aware of any expensive computations that could casuse frame drops. The obvious ones (though there may be more) are geometric prop animations (use Motion most of the time, and scale(), tanslate() or its respective tailwind classes for extremely simple or extremely customized ones) as well as filter animations (use pseudo-element opacity for things like drop-shadow() if animation is absolutely necessary; otherwise, we can completely forget about it).
