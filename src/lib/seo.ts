import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { site } from "../config/site"
import { pathForLang, useLang } from "../i18n"

function upsert(selector: string, create: () => HTMLElement): HTMLElement {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta")
    m.setAttribute(attr, key)
    return m
  })
  el.setAttribute("content", content)
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  const el = upsert(selector, () => {
    const l = document.createElement("link")
    l.setAttribute("rel", rel)
    if (hreflang) l.setAttribute("hreflang", hreflang)
    return l
  })
  el.setAttribute("href", href)
}

interface PageMeta {
  title: string
  description: string
  /** Home passes its full title; every other page gets "| ZENA Elevators". */
  full?: boolean
  noindex?: boolean
}

/** Per-page <title>, description, canonical, hreflang and Open Graph tags. */
export function usePageMeta({ title, description, full, noindex }: PageMeta) {
  const lang = useLang()
  const { pathname } = useLocation()

  useEffect(() => {
    const finalTitle = full ? title : `${title} | ${site.name}`
    document.title = finalTitle
    document.documentElement.lang = lang

    const enPath = pathForLang(pathname, "en")
    const kaPath = pathForLang(pathname, "ka")
    const url = site.url + (lang === "ka" ? kaPath : enPath)

    setMeta("name", "description", description)
    setMeta("name", "robots", noindex ? "noindex,nofollow" : "index,follow")
    setMeta("property", "og:title", finalTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", url)
    setMeta("property", "og:locale", lang === "ka" ? "ka_GE" : "en_US")
    setLink("canonical", url)
    setLink("alternate", site.url + enPath, "en")
    setLink("alternate", site.url + kaPath, "ka")
    setLink("alternate", site.url + enPath, "x-default")
  }, [title, description, full, noindex, lang, pathname])
}
