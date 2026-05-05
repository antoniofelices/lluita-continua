# Lluita Continua

## Description

Website for _I la Lluita Continua_, a 60-minute documentary about construction workers who fought for union rights, freedom, amnesty, and Catalan autonomy during Franco's dictatorship.

The site is bilingual and published as two separate static deployments:

- **Catalan:** [lluitacontinua.cat](https://lluitacontinua.cat)
- **Spanish:** [luchacontinua.es](https://luchacontinua.es)

It includes sections for screenings (projections), press, educational materials, and credits.

## Technologies

- [Astro 6](https://astro.build) — static site generator with content collections and view transitions
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling via `@theme` CSS block
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) — MDX content for pages
- [@lucide/astro](https://lucide.dev) — icon library

Node >= 22.12.0 required.

### Development

```bash
npm run dev          # Dev server (defaults to Catalan locale)
npm run dev:ca       # Dev server with LOCALE=ca
npm run dev:es       # Dev server with LOCALE=es
```

### Build

Each language is built separately via the `LOCALE` environment variable and outputs to its own `dist/` directory.

```bash
npm run build:ca     # Build Catalan site
npm run build:es     # Build Spanish site
npm run build        # Build both (ca then es)
npm run preview      # Preview last build
```

### Project structure

```
src/
├── assets/          # Static assets (images, video)
├── components/      # Reusable Astro components
├── content/         # Content collections data (MDX pages, projection JSON files)
├── i18n/            # Translation objects and URL maps (ca.ts, es.ts, index.ts)
├── layouts/         # Main layout wrapper
├── lib/             # Collection loaders (projections/loader.ts)
├── pages/           # Astro routes (index.astro, [slug].astro)
├── styles/          # Global CSS with Tailwind theme tokens
└── content.config.ts
```

Path aliases: `@assets`, `@components`, `@i18n`, `@layouts`, `@lib`, `@utils`, `@hooks`, `@styles`, `@content`, `@data`, `@projectTypes`

## Future Improvements

- The HTML in the content directory must be transformed into Markdown and reusable components.

## Contributing

### Code of Conduct

Sumar has adopted the Contributor Covenant Code of Conduct that we expect project participants to adhere to. [Please read the full text](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) so that you can understand what actions will and will not be tolerated.
