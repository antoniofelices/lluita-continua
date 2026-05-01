// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

const lang = process.env.BUILD_LANG || "ca"

// https://astro.build/config
export default defineConfig({
  site:
    lang === "ca" ? "https://lluitacontinua.cat" : "https://luchacontinua.es",
  outDir: `./dist-${lang}`,
  i18n: {
    defaultLocale: lang,
    locales: [lang],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
