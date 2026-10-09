import { logoParts } from "../logoPaths"
import { LocLink } from "../../i18n"

type Part = keyof typeof logoParts

function Part({ part, className, title }: { part: Part; className?: string; title?: string }) {
  const { w, h, d } = logoParts[part]
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g transform={`translate(0,${h}) scale(0.1,-0.1)`}>
        <path d={d} />
      </g>
    </svg>
  )
}

export const LogoMark = ({ className }: { className?: string }) => <Part part="mark" className={className} />
export const LogoWordmark = ({ className }: { className?: string }) => <Part part="word" className={className} />
export const LogoTagline = ({ className }: { className?: string }) => <Part part="elev" className={className} />

/** Official ZENA mark + wordmark, horizontal lockup. Colour follows `currentColor`. */
export function LogoHorizontal({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-[34px] w-auto" />
      <LogoWordmark className="h-[13px] w-auto" />
    </span>
  )
}

/** Official vertical lockup (mark, wordmark, "— ELEVATORS —"). */
export function LogoVertical({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <LogoMark className="h-[58px] w-auto" />
      <LogoWordmark className="mt-3 h-[22px] w-auto" />
      <LogoTagline className="mt-3 h-[6px] w-auto" />
    </span>
  )
}

/** Header/footer logo that links home in the current language. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <LocLink to="/" aria-label="ZENA Elevators — home" className={`inline-flex shrink-0 text-ink ${className}`}>
      <LogoHorizontal />
    </LocLink>
  )
}
