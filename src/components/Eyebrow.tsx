import type { ReactNode } from "react"

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium tracking-[0.15em] text-accent uppercase">
      {children}
    </p>
  )
}
