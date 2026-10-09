import type { ReactNode } from "react"
import Eyebrow from "./Eyebrow"

/** Eyebrow + title + optional description, used by most sections. */
export default function SectionHead({
  eyebrow,
  title,
  description,
  onDark = false,
  as: Tag = "h2",
  aside,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  onDark?: boolean
  as?: "h1" | "h2"
  /** Optional right-aligned element (e.g. a link) */
  aside?: ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
      <div className="max-w-2xl">
        {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
        <Tag
          className={`mt-3 text-[32px] leading-[1.12] sm:text-[40px] ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </Tag>
        {description && (
          <p
            className={`mt-4 max-w-xl text-[16.5px] leading-[1.75] ${
              onDark ? "text-white/65" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {aside}
    </div>
  )
}
