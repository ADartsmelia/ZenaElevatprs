import { useCommon } from "../../i18n/useCommon"

/** Text badge for the SJEC partnership; swap for the official SJEC logo asset when available. */
export default function SjecBadge({ onDark = false }: { onDark?: boolean }) {
  const c = useCommon()
  return (
    <div
      className={`inline-flex flex-col border px-4 py-2.5 ${
        onDark ? "border-white/25 text-white" : "border-ink/25 text-ink"
      }`}
    >
      <span className="font-serif text-[19px] font-semibold leading-none tracking-wide">SJEC</span>
      <span
        className={`mt-1.5 font-mono text-[9.5px] tracking-[0.14em] ${
          onDark ? "text-white/55" : "text-muted"
        }`}
      >
        {c.brand.authorizedUpper}
      </span>
    </div>
  )
}
