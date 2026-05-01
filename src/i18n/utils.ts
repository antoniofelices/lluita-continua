import { defaultLang, showDefaultLang, routes } from "./ui"
import type { LangType } from "./ui"
import { stringToTranslate } from "./strings-to-translate"
import type { TranslationKeyType } from "./strings-to-translate"

const isLang = (lang: string): lang is LangType => {
  return lang in stringToTranslate
}

const getKeyByValue = (
  obj: Record<string, string>,
  value: string,
): string | undefined => {
  return Object.keys(obj).find((key) => obj[key] === value)
}

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split("/")
  if (isLang(lang)) return lang
  return defaultLang
}

export const useTranslations = (lang: LangType) => {
  const translation = (key: TranslationKeyType) => {
    return stringToTranslate[lang][key] || stringToTranslate[defaultLang][key]
  }
  return translation
}

export const useTranslatedPath = (lang: LangType) => {
  const translatePath = (path: string, l: LangType = lang) => {
    const pathName = path.replaceAll("/", "")
    const langRoutes = routes[l] ?? {}
    const translatedPath =
      pathName in langRoutes ? "/" + langRoutes[pathName] : path

    return showDefaultLang || l !== defaultLang
      ? `/${l}${translatedPath}`
      : translatedPath
  }

  return translatePath
}

export const getRouteFromUrl = (url: URL): string | undefined => {
  const path = url.pathname.split("/").filter(Boolean).pop()

  if (path === undefined) return undefined

  const currentLang = getLangFromUrl(url)

  if (defaultLang === currentLang)
    return getKeyByValue(routes[defaultLang], path)

  return getKeyByValue(routes[currentLang], path)
}
