/**
 * Image slot. Pass `src` once a real photo exists; until then a striped
 * placeholder with a caption is shown, so replacing an image is a one-line change.
 */
export default function Media({
  src,
  alt,
  label,
  className = "",
  dark = false,
  priority = false,
}: {
  src?: string
  alt?: string
  label: string
  className?: string
  dark?: boolean
  /** Above-the-fold image: load immediately instead of lazily. */
  priority?: boolean
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        decoding="async"
        className={`object-cover ${className}`}
      />
    )
  }

  const stripe = dark ? "rgba(255,255,255,0.05)" : "color-mix(in srgb, var(--ink) 6%, transparent)"
  return (
    <div
      role="img"
      aria-label={alt ?? label}
      className={`relative flex items-end overflow-hidden ${
        dark ? "bg-night-2" : "bg-[color-mix(in_srgb,var(--accent)_14%,var(--alt))]"
      } ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${stripe} 0px, ${stripe} 2px, transparent 2px, transparent 14px)`,
      }}
    >
      <span
        className={`p-3 font-mono text-[10.5px] tracking-wide ${
          dark ? "text-white/40" : "text-muted/80"
        }`}
      >
        [ {label} ]
      </span>
    </div>
  )
}
