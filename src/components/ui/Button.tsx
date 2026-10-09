import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { useLocalePath } from "../../i18n"

type Variant = "primary" | "secondary" | "ghostDark"

interface ButtonProps {
  to?: string
  href?: string
  /** Open `href` in a new tab. */
  external?: boolean
  /** Download `href` as a file with this name instead of navigating to it. */
  download?: string
  onClick?: () => void
  variant?: Variant
  type?: "button" | "submit"
  disabled?: boolean
  children: ReactNode
  className?: string
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] px-5 py-3 text-[13.5px] font-medium tracking-[0.01em] transition-colors disabled:cursor-not-allowed disabled:opacity-60"

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-ink/25 text-ink hover:border-ink/60",
  ghostDark: "border border-white/30 text-white hover:border-white/70",
}

export default function Button({
  to,
  href,
  external,
  download,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
  children,
  className = "",
}: ButtonProps) {
  const localize = useLocalePath()
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={localize(to)} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(download ? { download } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

export function ArrowLink({
  to,
  href,
  external,
  children,
  onDark = false,
  className = "",
}: {
  to?: string
  href?: string
  external?: boolean
  children: ReactNode
  onDark?: boolean
  className?: string
}) {
  const localize = useLocalePath()
  const classes = `group inline-flex items-center gap-1.5 text-[13.5px] font-medium underline decoration-gold decoration-1 underline-offset-[6px] transition-colors hover:decoration-2 ${
    onDark ? "text-white" : "text-ink"
  } ${className}`
  const content = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={localize(to)} className={classes}>
        {content}
      </Link>
    )
  }
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  )
}
