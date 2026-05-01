export const languages = {
  es: "Español",
  ca: "Català",
}

export type LangType = keyof typeof languages

export const defaultLang: LangType = "es"

export const showDefaultLang = false

export const hreflangMap: Record<LangType, string> = {
  es: "es-ES",
  ca: "ca-ES",
}

export const ogLocales: Record<LangType, string> = {
  es: "es_ES",
  ca: "ca_ES",
}

export const routes: Record<LangType, Record<string, string>> = {
  es: {
    ask: "pidela",
    privacypolicy: "politica-de-privacidad",
  },
  ca: {
    ask: "demana-la",
    privacypolicy: "politica-de-privacitat",
  },
}
