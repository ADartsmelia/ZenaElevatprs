import type { ReactNode } from "react"

export default function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode
  onDark?: boolean
}) {
  return (
    <p
      className={`font-mono text-[11px] font-medium tracking-[0.18em] uppercase ${
        onDark ? "text-[#d1a15e]" : "text-accent-text"
      }`}
    >
      {children}
    </p>
  )
}
