export const languages = {
  ca: "Català",
  es: "Español",
}

export type LangType = keyof typeof languages

export const defaultLang: LangType = "ca"

export const showDefaultLang = false

export const hreflangMap: Record<LangType, string> = {
  ca: "ca-ES",
  es: "es-ES",
}

export const ogLocales: Record<LangType, string> = {
  ca: "ca_ES",
  es: "es_ES",
}

export const siteUrls: Record<LangType, string> = {
  ca: "https://lluitacontinua.cat",
  es: "https://luchacontinua.es",
}

export const routes: Record<LangType, Record<string, string>> = {
  ca: {
    projections: "projeccions",
    materials: "materials",
    press: "premsa",
    directing: "direccio",
  },
  es: {
    projections: "proyecciones",
    materials: "materiales",
    press: "prensa",
    directing: "direccion",
  },
}
