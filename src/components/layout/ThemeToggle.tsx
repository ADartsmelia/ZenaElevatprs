import { useTheme } from "../../lib/theme"
import { useCommon } from "../../i18n/useCommon"
import { MoonIcon, SunIcon } from "../ui/Icons"

/** Deliberately small, icon-only toggle (feedback: make the dark-mode control smaller). */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const c = useCommon()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? c.theme.toLight : c.theme.toDark}
      title={isDark ? c.theme.toLight : c.theme.toDark}
      className="flex h-11 w-11 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
    >
      {isDark ? <SunIcon width={24} height={24} /> : <MoonIcon width={24} height={24} />}
    </button>
  )
}
