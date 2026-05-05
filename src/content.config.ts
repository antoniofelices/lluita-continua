import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"
import projectionsCA from "./content/projections/ca.json"
import projectionsES from "./content/projections/es.json"

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/pages",
    generateId: ({ entry }) => entry.replace(/\.mdx$/, "").replace(/\//g, "-"),
  }),
  schema: z.object({
    lang: z.enum(["ca", "es"]),
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
  }),
})

type RawProjection = {
  date: string
  place: string
  city: string
  description?: string
  link?: string
}

function toEntries(
  data: { projections: RawProjection[]; cancelled: RawProjection[] },
  lang: "ca" | "es"
) {
  return [
    ...data.projections.map((p, i) => ({
      id: `${lang}-${String(i + 1).padStart(3, "0")}`,
      lang,
      cancelled: false,
      ...p,
    })),
    ...data.cancelled.map((p, i) => ({
      id: `${lang}-cancelled-${String(i + 1).padStart(3, "0")}`,
      lang,
      cancelled: true,
      ...p,
    })),
  ]
}

const projections = defineCollection({
  loader: () => [
    ...toEntries(projectionsCA, "ca"),
    ...toEntries(projectionsES, "es"),
  ],
  schema: z.object({
    lang: z.enum(["ca", "es"]),
    cancelled: z.boolean(),
    date: z.string(),
    place: z.string(),
    city: z.string(),
    description: z.string().optional(),
    link: z.string().optional(),
  }),
})

export const collections = { pages, projections }
