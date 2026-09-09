# Corevolvix C2 — professional design

A standalone five-page website using the approved Corevolvix content, professional design, animations, logo, icon and favicon. The application lives at the repository root. The original C1 project remains separate and unchanged.

## Preview locally

From the repository root:

```sh
npm ci
npm run dev
```

Preview: http://localhost:3003

## Build and validate

```sh
npm run lint
npm run build
npm run test:seo
```

The production static website is generated in `out/`. On Vercel, use the repository root (leave Root Directory unset), the Next.js framework preset, `npm run build` as the build command, and `out` as the output directory.

## Search indexing

The canonical production origin is `https://corevolvix.com`, configured in `src/lib/site-config.js`. Every public page declares its own canonical URL with a trailing slash; local previews and additional domains use those same canonical URLs.

- `src/app/sitemap.js` generates `/sitemap.xml` with Home, Services, Industries, About and Contact. Add any future public page to `SITE_PATHS` in `src/lib/site-config.js` and give that page its own canonical metadata.
- `src/app/robots.js` generates `/robots.txt`, permits crawling and points to `https://corevolvix.com/sitemap.xml`.
- Both metadata routes are explicitly static so their files are included in `out/` for deployment. Sitemap entries omit modification dates because no reliable per-page content dates are maintained.
- After building, `npm run test:seo` checks route coverage, duplicate URLs, canonical URLs in exported HTML, crawler directives and accidental local/preview URLs.

Once the production domain serves this deployment, the sitemap can be submitted as `https://corevolvix.com/sitemap.xml` in the site's search-engine webmaster tools. This project does not automatically submit it or configure domain redirects.

## Content and branding

- `src/lib/site-data.js`: unchanged service, industry and approach content copied from the approved original.
- `src/app/`: Home, Services, Industries, About and Contact pages.
- `public/`: original logo, company icon and favicon, copied without modification.
- `src/app/globals.css`: the new design tokens, components and responsive rules.
- `DESIGN-SYSTEM.md`: visual guidelines for future additions.

The contact form opens an email draft addressed to `hello@corevolvix.com`. The visitor reviews and sends it in their email application; this static site does not send mail from a server.

The project uses JavaScript/JSX with its own dependencies, build output and ESLint configuration. It does not depend on files from C1 or a parent directory.
