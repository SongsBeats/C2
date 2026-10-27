# Corevolvix professional design system

## Direction

Clear editorial hierarchy, generous but controlled spacing, quiet surfaces and cobalt accents. Company messaging is preserved from the original site. Use icons to distinguish capabilities and steps; avoid decorative numerical labels, invented metrics, client logos or testimonials.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `--blue` | `#0280C6` | Primary actions, highlighted words, icons (bright blue, 'e' and 'evolvix') |
| `--blue-dark` | `#0168a3` | Primary hover state |
| `--ink` | `#0F1E4A` | Body text and dark section backgrounds (deep navy, replaces black) |
| `--heading-color` | `#1F41AB` | Navy headlines on light surfaces (deep blue, 'c' and 'cor') |
| `--heading-accent` | `#0280C6` | Key heading phrases, service and card titles (bright blue) |
| `--muted` | `#737886` | Body copy and supporting text (slate) |
| `--line` | `#dce3eb` | Dividers and borders |
| `--surface` | `#f4f7fc` | Alternate sections and panels |
| `--blue-pale` | `#e8f4fa` | Icon backgrounds |

## Typography and spacing

- Inter variable font throughout, loaded with `next/font/google` and self-hosted in the build. Browser font requests stay on the website's own domain; Arial and sans-serif are fallbacks.
- Headings pair deep navy with bright blue emphasis. Card, service and process titles use bright blue. Dark sections use white headlines with light-blue accents (`#6db3e3`); deep blue CTA panels keep white headlines for contrast.
- Use `.heading-accent` on a meaningful phrase without changing the heading text. Avoid whole-heading gradients or arbitrary accent colours.
- Desktop homepage headline: up to 72px; page headings: up to 62px; section headings: 32–46px.
- Main content maximum width: 1240px. Mobile content gutters: 20px.
- Desktop header height: 86px; tablet/mobile: 76px.
- Section spacing: 100px desktop, 64px mobile. Avoid fixed heights on content blocks.
- Cards use 8px corners, a fine border and 24–30px padding.

## Components

Shared header, page hero, CTA, footer and icon tiles establish consistency on all five pages. Service details use two-column copy and capability lists; industries use a responsive card grid. Homepage expertise cards and process cards adapt to one or two columns as needed.

Keep the supplied brand images intact. The transformation visual connects process, technology, intelligence and architecture around the real company icon.

## Interaction and accessibility

- Anime.js coordinates 680ms entrances with custom easing: 14px movement and 65ms stagger for hero copy; 20px and 85ms stagger for visible sibling cards. Each target reveals once per page visit, without splitting words or delaying form fields.
- The transformation diagram pulses twice and completes one 4.8-second orbit, then settles. It only starts when the visual enters the viewport.
- Cards and icons have bright blue hover/focus feedback. Service capability panels receive a soft blue sweep; the mobile menu has a short entrance and closes immediately.
- Content stays available without JavaScript. Animation styles and temporary GPU hints are cleared after completion and route changes. Keyboard focus finishes active entrances immediately.
- `prefers-reduced-motion` disables animation and animated scrolling, including when the preference changes during a visit.
- Navigation supports visible keyboard focus, current-page state, an accessible mobile toggle, Escape-to-close and a skip link.
- Form fields have visible labels, suitable autocomplete values and native validation.

## Content maintenance

The copied content is an independent snapshot, not an automatic synchronisation with the parent website. Update this version explicitly when approved wording changes. Keep service slugs stable so deep links continue to work.
