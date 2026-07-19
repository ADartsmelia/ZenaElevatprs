export default function ImagePlaceholder({
  label,
  className = "",
  dark = false,
}: {
  label: string
  className?: string
  dark?: boolean
}) {
  return (
    <div
      className={`relative flex items-end overflow-hidden ${
        dark ? "bg-dark-card" : "bg-tan dark:bg-white/10"
      } ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${
          dark ? "rgba(255,255,255,0.06)" : "rgba(43,39,35,0.06)"
        } 0px, ${dark ? "rgba(255,255,255,0.06)" : "rgba(43,39,35,0.06)"} 2px, transparent 2px, transparent 14px)`,
      }}
    >
      <span className="font-mono text-[11px] tracking-wide text-muted/70 p-3 dark:text-white/40">
        [ {label} ]
      </span>
    </div>
  )
}
