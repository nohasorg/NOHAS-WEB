@AGENTS.md

# NOHAS Project Summary for Claude

## What this project is
This repository is a marketing and information website for NOHAS (National Oral Health Awareness Society), a non-profit organization focused on oral health awareness and community health education across Pakistan. The site presents the organization as credible, mission-driven, and community-first while encouraging public engagement, partnerships, volunteering, and memberships.

## Business purpose
The website exists to:
- explain the NOHAS mission and impact
- promote oral health education and prevention
- showcase programs, outreach activities, and events
- highlight leadership, volunteers, and partners
- attract memberships, sponsorships, volunteers, and collaborations
- provide contact and journal/publication channels

## Core user experience
The app is designed as a polished informational site with strong storytelling and premium editorial branding. It blends healthcare credibility with warm, community-oriented visuals. The visual language is green/nature-inspired, calm, and professional rather than clinical or sterile.

## Main stack
- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- React Router
- GSAP + ScrollTrigger
- static content data in TypeScript files

## Application structure
- src/main.tsx: app entrypoint; wraps the app in BrowserRouter and registers GSAP
- src/App.tsx: route definitions and persistent layout shell
- src/pages/: page views for the full site
- src/components/home/: homepage section components and all landing-page blocks
- src/components/layout/: Navbar, Footer, PageShell
- src/components/ui/: reusable UI primitives like stat counters, filters, icons, content blocks
- src/data/: static content for activities, events, partners, journal, team
- src/hooks/: animation and interaction hooks
- src/lib/: helper modules
- public/assets and assets/: static brand and media assets

## Routing model
The app is a client-side routed SPA with pages such as:
- / : Home
- /about : About NOHAS
- /programs : Programs overview
- /activities and subpages for outreach, camps, workshops, seminars
- /team and subpages for executive team and volunteers
- /events and /events/conference
- /journal
- /membership
- /sponsors
- /contact

## Homepage content pattern
The landing page is built from several assembled sections, including:
- hero with mission statement and CTAs
- impact metrics
- about section
- awareness education content
- leadership
- journal/news highlights
- national race map / footprint section
- membership call-to-action
- partners showcase
- sessions/events section
- contact section

## Styling and branding
The design system is configured in src/index.css and uses:
- earthy green palette with warm ivory background
- serif headline typography with modern sans typography
- rounded cards, soft shadows, and large editorial spacing
- motion reveals and scroll-triggered transitions
- reusable utility classes for sections, cards, buttons, and badges

## Data model
This project is mostly static-content driven. Content is stored in TypeScript arrays and objects rather than a backend database. That means updates are usually done by editing data files or section components rather than through API-driven CRUD flows.

## Important implementation notes for future work
- The project uses the @ alias for src imports via Vite config.
- All styling should follow Tailwind utility classes and the existing theme tokens in src/index.css.
- The app is not a data-heavy application; most changes are content/layout/polish focused.
- Navbar and Footer are global, while page-specific sections are routed views.
- The codebase favors component composition and static storytelling instead of backend state management.

## Recommended starting points for a Claude task
1. Read src/App.tsx for route structure.
2. Read src/pages/HomePage.tsx to understand homepage composition.
3. Read src/index.css to understand the design system and theme.
4. Read src/data/* when updating copy, partners, team, events, or programs.
5. Use src/components/* when adding or modifying section-level UI.

## High-level takeaway
This repo is a polished non-profit organization website, not a traditional app with user accounts or dynamic data services. The main work is website content, strategic storytelling, responsive design, and brand presentation for NOHAS.
