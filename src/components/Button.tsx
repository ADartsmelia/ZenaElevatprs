import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  to?: string
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  type?: "button" | "submit"
  children: ReactNode
  className?: string
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-colors"
const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary:
    "border border-ink/15 text-ink hover:border-ink/40 dark:border-white/20 dark:text-white dark:hover:border-white/40",
}

export default function Button({
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  children,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export function ArrowLink({
  to,
  href,
  children,
  onDark = false,
  className = "",
}: {
  to?: string
  href?: string
  children: ReactNode
  onDark?: boolean
  className?: string
}) {
  const color = onDark ? "text-white" : "text-ink dark:text-white"
  const classes = `inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 ${color} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
