import { defaultLang, showDefaultLang, routes } from "./ui"
import type { LangType } from "./ui"
import { stringToTranslate } from "./strings-to-translate"
import type { TranslationKeyType } from "./strings-to-translate"

const isLang = (lang: string): lang is LangType => lang in stringToTranslate

const getKeyByValue = (
  obj: Record<string, string>,
  value: string,
): string | undefined => Object.keys(obj).find((key) => obj[key] === value)

export const getLangFromUrl = (url: URL): LangType => {
  const [, lang] = url.pathname.split("/")
  if (isLang(lang)) return lang
  return defaultLang
}

export const useTranslations = (lang: LangType) => {
  const translation = (key: TranslationKeyType) =>
    stringToTranslate[lang][key] || stringToTranslate[defaultLang][key]
  return translation
}

export const useTranslatedPath = (lang: LangType, buildLocale?: string) => {
  const effectiveDefault = (buildLocale as LangType | undefined) ?? defaultLang

  const translatePath = (path: string, l: LangType = lang) => {
    const pathName = path.replaceAll("/", "")
    const langRoutes = routes[l] ?? {}
    const translatedPath =
      pathName in langRoutes ? "/" + langRoutes[pathName] : path
    return showDefaultLang || l !== effectiveDefault
      ? `/${l}${translatedPath}`
      : translatedPath
  }

  return translatePath
}

export const getRouteFromUrl = (
  url: URL,
  currentLocale?: string,
): string | undefined => {
  const lang =
    currentLocale && isLang(currentLocale)
      ? (currentLocale as LangType)
      : getLangFromUrl(url)
  const path = url.pathname.split("/").filter(Boolean).pop()
  if (!path || path === lang) return undefined
  return getKeyByValue(routes[lang] ?? {}, path)
}
