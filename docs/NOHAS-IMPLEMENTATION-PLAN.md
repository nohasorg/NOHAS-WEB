# NOHAS Platform Implementation Plan

## Product Direction

Build a polished, responsive public-facing NOHAS portal that makes the society's mission legible within one scroll, then gives each SRS capability a clear place in the same experience. The visual language stays rooted in the supplied brand system: forest green, eucalyptus, ivory, warm sand, charcoal, and the Cormorant Garamond / Lato / Montserrat type pairing.

## SRS Coverage

| SRS requirement | Website surface | Implementation approach |
| --- | --- | --- |
| Live impact dashboard | Hero-adjacent impact strip | Use the supplied metrics: 45,200+ treated patients, 310+ camps, 24 provinces, 85+ locations. Animate counters on entry. |
| Introduction, scope, and vision | About / mission section | Explain the “for people, by people” philosophy and show the five core pillars. |
| Executive team structure | Leadership section | Present Executive Leadership and Operational Leads as scannable role groups. |
| Blog and event articles | Publication hub | Show journal categories and include a student submission email CTA. |
| Membership and benefits | Membership band | Explain Google Form registration, camp priority, certificates, education, and mentorship. |
| Sponsor and partner showcase | Partnership section | Display the 34+ partnership milestone and a restrained partner logo treatment. |
| Gallery of previous events | Filterable gallery | Provide year / province filters and an accessible media grid. |
| Online awareness sessions | Webinar schedule | Show specialist-led topics with register actions. |
| Operational pipeline | How we work section | Visualize all five stages from sourcing to impact reporting. |
| Volunteer registration | Get involved section | Provide role selection, city, and message fields with success feedback. |
| Official merchandise | Merchandise section | Feature T-shirts, mugs, and keychains, with the 100% net-profit mission note. |

## Experience Structure

1. Sticky navigation with compact mobile menu and section anchors.
2. Hero with clear mission statement, dual CTAs, and a visual oral-health treatment image.
3. Live impact metrics using the SRS numbers.
4. Mission introduction with core-pillar cards and a visual story panel.
5. Leadership structure and operational roles.
6. Publication hub and membership benefits.
7. Sponsor milestone and gallery filters.
8. Webinar sessions and operational pipeline.
9. Volunteer / membership call to action and merchandise support.
10. Contact, newsletter, social links, and footer.

## Interaction Requirements

- Smooth anchor navigation with visible keyboard focus states.
- Mobile navigation drawer with close action.
- Gallery filters for All, Punjab, Sindh, and 2026.
- Newsletter and volunteer forms with inline success feedback; no backend is assumed.
- Reduced-motion support for GSAP entrance effects.
- Responsive grids that collapse cleanly at tablet and mobile widths.

## Technical Order

1. Replace the partial page composition in `src/App.tsx` with reusable section components and SRS content.
2. Refresh `src/index.css` with the final font loading, design tokens, texture, focus styles, and responsive defaults.
3. Run the TypeScript/Vite production build.
4. Confirm the active preview server remains on port 8443 and provide the implementation summary.

## Deferred Production Integrations

- Real Google Form embed or API-backed membership registration.
- CMS-backed articles, events, webinar registration, and gallery assets.
- Analytics for campaign conversions and dashboard metrics.
- Real payment / merchandise checkout and sponsor management.
- Verified social URLs, office address, telephone number, and partner logos.