// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://luchacontinua.es",
  outDir: "./dist-es",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
})
