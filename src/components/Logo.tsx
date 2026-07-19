import { Link } from "react-router-dom"

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
        <path d="M8 0L2 24H0L6 0H8Z" fill={inverted ? "#ffffff" : "#2b2723"} className={inverted ? "" : "dark:fill-white"} />
        <path d="M16 0L10 24H8L14 0H16Z" fill="#a8702e" />
      </svg>
      <span
        className={`font-sans font-extrabold tracking-[0.25em] text-lg ${
          inverted ? "text-white" : "text-ink dark:text-white"
        }`}
      >
        ZENA
      </span>
    </Link>
  )
}
