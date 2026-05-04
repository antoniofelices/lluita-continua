import { t as ca } from "./ca"
import { t as es } from "./es"

export const lang = import.meta.env.LOCALE ?? "ca"
export const otherLang = lang === "ca" ? "es" : "ca"
export const t = lang === "es" ? es : ca

export const siteUrls: Record<string, string> = {
  ca: "https://lluitacontinua.cat",
  es: "https://luchacontinua.es",
}

export const hreflangMap: Record<string, string> = {
  ca: "ca-ES",
  es: "es-ES",
}

export const ogLocales: Record<string, string> = {
  ca: "ca_ES",
  es: "es_ES",
}

export const slugToAltSlug: Record<string, string> = {
  premsa: "prensa",
  prensa: "premsa",
  projeccions: "proyecciones",
  proyecciones: "projeccions",
  materials: "materiales",
  materiales: "materials",
  direccio: "direccion",
  direccion: "direccio",
  home: "home",
}
