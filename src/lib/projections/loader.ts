import projectionsCA from "@content/projections/ca.json"
import projectionsES from "@content/projections/es.json"

type RawProjection = {
  date: string
  place: string
  city: string
  description?: string
  link?: string
}

function toEntries(
  data: { projections: RawProjection[]; cancelled: RawProjection[] },
  lang: "ca" | "es",
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

export const projectionEntries = [
  ...toEntries(projectionsCA, "ca"),
  ...toEntries(projectionsES, "es"),
]
