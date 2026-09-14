# AGENTS.md

## Resumen

Portafolio para desarrollador full stack con interfaz futurista.

### Tecnologías

- Framework: React 19 + Vite
- Bibliotecas UI: Tailwind 4, Prime React 10, Hero Icons 2, motion 12
- Otras bibliotecas: react-18-next 15, React Hook Form

### Requisitos funcionales

Debe tener 5 vistas: "Puente de mando" (Inicio), "Archivo de Proyectos", "Misiones Pasadas" (Experiencia), "Armería" (Habilidades)

# Software developer portfolio with starship theme

## Functional requirements

It will feature 5 sections in 2.5D scenarios:

1. "Command bridge" (home page)
2. "Systems Bay" (projects page)
3. "Agora" (contact page)
4. "Magellanic Hall" (job experience trajectory page)
5. "Armory" (skills page).

### Background and HUD

- Space area will be a nebula background image, with a 3D star field on top of it.
- Inside the starship there'll always be a 'HUD' header with:
  - quick actions speed dial (send email, send whatsapp, see resume, my linkedin, my github)
  - quick buttons (links) to each spaceship section
  - language (EN-ES) toggle button, and "Normal" (light) and "Red alert" (dark) modes toggle button

### Command Bridge

It will feature links to each of the ship's secitons:

- Left door will take us to

#### About me

A button with my profile picture as the selected target of a 3D stellar map, located in the middle of the main page. It should display a modal with a brief paraghaph of my skills and experience.

#### Agora

Another button with another modal and contact info like my phone, email, github and the print version of my resume. The icon of this button should be adequate to immediately tell people the info it displays. The button could be located at the top of the app, in some sort of bar that can function as the ceiling of the starship rooms, although I leave other options for its location to your own criteria.

#### Projects, experience and skills

As said before, each of them should have their own page, and their corresponding links should be located in parts of the home page (the "command bridge") like computer screens or gates.

- **Experience**: Each job should be a clickable planet in another 3D stellar map, displaying a modal with info like start and end dates, company name and main achievements.
- **Projects**: Each project could be a clickable screen (or other object based on your criteria) displaying a modal with info like project name, goal and the tools and techs used in it.
- **Skills**: Each skill should be a clickable tool or weapon, displaying a modal with info like certificates, projects or jobs related to that skill.
