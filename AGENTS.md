# Software developer portfolio with starship theme

## Functional requirements

It will feature 5 sections in 2.5D scenarios:

1. "Command bridge" (home page)
2. "Systems Bay" (projects page)
3. "Agora" (contact page)
4. "Magellanic Hall" (job experience trajectory page)
5. "Armory" (skills page).

### Background and HUD

- Space background will be composed of a nebula static image, with a 3D star field on top of it.
- Inside the starship there'll always be a 'HUD' header with:
  - quick actions speed dial: send email, send whatsapp, see resume, my linkedin, my github, and communications (sounds and music)
  - quick buttons (links) to each spaceship section
  - language (en-es) toggle button, and "Exploration" (light) - "Red alert" (dark) modes toggle button

### Command Bridge

Image will feature links to each of the ship's secitons:

- Left door will take us to Systems Bay
- Right door: to the Agora
- A mini stellar map next to a crew member's seat will take us to the Magellanic Hall
- A hatch on the floor, next to the captain's seat will take us to the Armory.

Also, the captain's seat itself will be clickable and display a glassmorphic screen with their profile details as set in the translation files. In a corner of the bridge, but not less important, will be a vintage turntable that invites the user to trigger the music and sound effects.

### Agora

A high command briefing room. It will feature a central table with 8 seats and holographic crew members displayed in three of them. At the nearest end of the table there will be a terminal the user can click to display another glassmorphic screen to fill and send an email.

### Systems Bay

Background image will be a server room. But instead of racks of black boxes with led lights and no screens, its corridors will be filled with scifi terminals. Each terminal will represent a single system (project) and display its details in a glassmorphic screen when clicked, and there will be a console in a corner of the rool to filter out projects by sector, licensing, stack & platform.

### Magellanic Hall

Each job will be a clickable stellar system in a giant 3D stellar map, displaying another glassmorphic screen with info like start and end dates, company name, roles and main achievements.

### Armory

Each skill should be a clickable tool, powerup or weapon, displaying another glassmorphic screen with info like certificates, projects or jobs related to that skill.

## Style requirements

### Color

Starship will resemble the inside of the Enterprise in Star Trek's Kelvin timeline. Unlike the old ones, this Enterprise is filled with brilliant, ceramic-like walls and lots of colorish buttons and led lights everywhere in control panels. Those colorish elements are gonna always have shades of blues, reds, greens and yellows. That will be the 'Exploration' (light) mode. In Red Alert mode, all walls will turn to deep shades of grays and all colorish buttons and led lights will turn to more faint shades of only reds and oranges. We'll need to set various pallets, one for each group of shades.

### Animations & Icons

We'll leverage mostly motion library for the 'simple' 2D animations, and maybe more complex 3D tricks for the hardest or more striking ones that will need so. Our preferred icon pack is Hero Icons, but we can use an alternative in cases where no appropriate Hero Icon exists and the alternative pairs well enough with Hero Icons style.

## Other considerations

- We'll very likely end up getting rid of prime react, as trying to customize it is a hell.
- i18next will be extremely important spanish and english translations. I'll provide proposals of key structures for my personal data that are open to change if you come up with a better one. You'll provide proposals for the UI translations and their keys.
