import { useTheme } from "../lib/theme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        isDark ? "bg-ink" : "bg-ink/20"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}
