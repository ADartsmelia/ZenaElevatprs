import { Link } from "react-router-dom"
import { rememberLang, useAlternatePaths, useLang, type Lang } from "../../i18n"
import { useCommon } from "../../i18n/useCommon"

export default function LangSwitch() {
  const lang = useLang()
  const paths = useAlternatePaths()
  const c = useCommon()

  const item = (l: Lang) => (
    <Link
      key={l}
      to={paths[l]}
      hrefLang={l}
      lang={l}
      onClick={() => rememberLang(l)}
      aria-current={lang === l ? "true" : undefined}
      className={`px-1.5 py-2 font-mono text-[14px] tracking-[0.1em] transition-colors ${
        lang === l ? "text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {c.lang[l]}
    </Link>
  )

  return (
    <div role="group" aria-label={c.lang.label} className="flex items-center">
      {item("en")}
      <span aria-hidden="true" className="text-line">
        /
      </span>
      {item("ka")}
    </div>
  )
}
