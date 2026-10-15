import { useLocation, useNavigate } from "react-router-dom"
import { useLocalePath } from "../../i18n"

/**
 * Goes back one step in the visitor's history; if the page was opened directly
 * (no history inside the site) it goes to the list page `to` instead.
 */
export default function BackButton({ to, children }: { to: string; children: string }) {
  const navigate = useNavigate()
  const location = useLocation()
  const localize = useLocalePath()
  const cameFromSite = location.key !== "default"

  return (
    <button
      type="button"
      onClick={() => (cameFromSite ? navigate(-1) : navigate(localize(to)))}
      className="mb-7 inline-flex items-center gap-2 rounded-[3px] border border-ink/25 px-4 py-2 text-[13.5px] font-medium text-ink transition-colors hover:border-ink/60"
    >
      <span aria-hidden>←</span>
      {children}
    </button>
  )
}
