import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"
import { projectionEntries } from "@lib/projections/loader"

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

const projections = defineCollection({
  loader: () => projectionEntries,
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
