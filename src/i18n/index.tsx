import { createContext, useContext, useMemo, type ReactNode } from "react"
import { Link, useLocation, type LinkProps } from "react-router-dom"

export type Lang = "en" | "ka"
export type L<T> = Record<Lang, T>

export const LANGS: Lang[] = ["en", "ka"]
const STORAGE_KEY = "zena-lang"

const LangContext = createContext<Lang>("en")

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useLang(): Lang {
  return useContext(LangContext)
}

/** Pick the current-language value out of a `{ en, ka }` pair. */
export function useL<T>(value: L<T>): T {
  return value[useLang()]
}

/** Returns a function that prefixes internal paths with the active language. */
export function useLocalePath() {
  const lang = useLang()
  return useMemo(
    () => (path: string) => {
      if (lang === "en" || /^(https?:|mailto:|tel:|#)/.test(path)) return path
      return path === "/" ? "/ka" : `/ka${path}`
    },
    [lang],
  )
}

/** Link that keeps the visitor inside the current language. */
export function LocLink({ to, ...rest }: LinkProps & { to: string }) {
  const localize = useLocalePath()
  return <Link to={localize(to)} {...rest} />
}

/** The current path without the language prefix (e.g. "/ka/blog" -> "/blog"). */
export function stripLangPrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/ka(?=\/|$)/, "")
  return stripped === "" ? "/" : stripped
}

export function pathForLang(pathname: string, lang: Lang): string {
  const base = stripLangPrefix(pathname)
  if (lang === "en") return base
  return base === "/" ? "/ka" : `/ka${base}`
}

export function useAlternatePaths() {
  const { pathname } = useLocation()
  return { en: pathForLang(pathname, "en"), ka: pathForLang(pathname, "ka") }
}

export function rememberLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* storage unavailable (private mode) – harmless */
  }
}

export function storedLang(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === "en" || v === "ka" ? v : null
  } catch {
    return null
  }
}
