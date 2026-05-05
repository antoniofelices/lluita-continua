# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server (no locale set)
npm run dev:ca       # Dev server with LOCALE=ca
npm run dev:es       # Dev server with LOCALE=es
npm run build:ca     # Build Catalan site
npm run build:es     # Build Spanish site
npm run build        # Build both (ca then es)
npm run preview      # Preview last build
```

Node >= 22.12.0 required.

## Architecture

This is a dual-language **Astro 6** static site for the documentary *I la Lluita Continua*. The two language sites (Catalan and Spanish) are built as completely separate deployments — there is no runtime language switching.

### Multilingual build strategy

Language is selected at build time via the `LOCALE` environment variable (`ca` or `es`). All language-sensitive code reads from `import.meta.env.LOCALE`. Each build produces its own output directory. The two sites live at different domains: `lluitacontinua.cat` (ca) and `luchacontinua.es` (es), and cross-link via hreflangs.

### i18n (`src/i18n/`)

- `index.ts` — reads `LOCALE`, exports the correct translation object, URL map, hreflangs, og:locale, and a `slugToAltSlug` map for the `LanguagePicker` component.
- `ca.ts` / `es.ts` — flat translation objects (nav labels, footer text, UI strings).

Import translations via the `@i18n` path alias: `import { lang, urls } from '@i18n'`.

### Content collections (`src/content.config.ts`)

Two collections:
- **pages** — MDX files under `src/content/pages/{ca,es}/`. Frontmatter: `lang`, `slug`, `title`, `description`. Pages are filtered by `import.meta.env.LOCALE` in `getStaticPaths()`.
- **projections** — JSON files (`src/content/projections/ca.json` and `es.json`). A custom loader (`src/lib/projections/loader.ts`) transforms each file into collection entries. Schema includes `date`, `place`, `city`, `description?`, `link?`, and `cancelled` flag.

### Routing

- `src/pages/index.astro` — home page
- `src/pages/[slug].astro` — all other pages; `getStaticPaths()` filters by `LOCALE` and returns MDX content via `render()`

### Path aliases (tsconfig)

`@assets`, `@components`, `@i18n`, `@layouts`, `@lib`, `@utils`, `@hooks`, `@styles`, `@content`, `@data`, `@projectTypes`

### Styling

Tailwind CSS v4 with a CSS `@theme` block in `src/styles/global.css`. Custom tokens:
- Colors: `m-red-500` (#ee0606), `m-gray-500` (#6d6d6d)
- Fonts: Inter (headings), Cormorant Garamond (body)
- Container: 72rem max-width, 1rem horizontal padding

### Client-side JS

Minimal: only the mobile menu toggle in `Header.astro` (vanilla JS, `classList`). Astro's `ClientRouter` handles view transitions.
