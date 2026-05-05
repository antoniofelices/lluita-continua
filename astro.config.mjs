// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import mdx from "@astrojs/mdx"

const lang = process.env.LOCALE ?? "ca"

export default defineConfig({
  site:
    lang === "ca" ? "https://lluitacontinua.cat" : "https://luchacontinua.es",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ["**/*.pdf"],
    define: {
      "import.meta.env.LOCALE": JSON.stringify(lang),
    },
  },
})
