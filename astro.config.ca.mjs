// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://lluitacontinua.cat",
  outDir: "./dist-ca",
  i18n: {
    defaultLocale: "ca",
    locales: ["ca"],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
})
