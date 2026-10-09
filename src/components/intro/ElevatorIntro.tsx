import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { useCommon } from "../../i18n/useCommon"
import "./intro.css"

/**
 * Plays the pre-rendered elevator intro (public/intro/*.mp4) once per browser session,
 * on the home page only. A video decodes on dedicated hardware and the closing fade only
 * animates opacity, so playback stays smooth even on modest devices.
 *
 * Re-render the videos with `npm run render-intro` after changing IntroScene / intro.css.
 */

const SESSION_KEY = "zena-intro-seen"
/**
 * Safety nets so the intro can never leave a black screen: if playback hasn't actually started,
 * stalls, or simply runs too long, the overlay is dropped and the site is shown.
 */
const START_TIMEOUT_MS = 3000
const STALL_TIMEOUT_MS = 2500
const HARD_CAP_MS = 9000

const isHome = (pathname: string) => pathname === "/" || pathname === "/ka" || pathname === "/ka/"

function shouldPlay(pathname: string): boolean {
  if (typeof window === "undefined" || !isHome(pathname)) return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (connection?.saveData) return false
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return false
  } catch {
    /* storage blocked: just play it */
  }
  return true
}

const pickSource = () =>
  window.matchMedia("(orientation: portrait)").matches
    ? "/intro/zena-intro-portrait.mp4"
    : "/intro/zena-intro-landscape.mp4"

export default function ElevatorIntro() {
  const { pathname } = useLocation()
  const c = useCommon()
  const [playing, setPlaying] = useState(() => shouldPlay(pathname))
  const [leaving, setLeaving] = useState(false)
  const [started, setStarted] = useState(false)
  const [fade, setFade] = useState(0.9)
  const [src] = useState(() => (typeof window === "undefined" ? "" : pickSource()))
  const videoRef = useRef<HTMLVideoElement>(null)
  const leavingRef = useRef(false)

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1")
    } catch {
      /* ignore */
    }
    document.documentElement.classList.remove("intro-pending")
    setPlaying(false)
  }, [])

  /** Fade the overlay out (opacity only), then remove it. */
  const leave = useCallback(
    (seconds: number) => {
      if (leavingRef.current) return
      leavingRef.current = true
      setFade(seconds)
      setLeaving(true)
      window.setTimeout(finish, seconds * 1000 + 80)
    },
    [finish],
  )

  // Lock scrolling while the intro covers the page. `scrollbar-gutter: stable` (index.css)
  // keeps the layout from shifting when the lock is released.
  useLayoutEffect(() => {
    if (!playing) {
      document.documentElement.classList.remove("intro-pending")
      return
    }
    document.documentElement.style.overflow = "hidden"
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [playing])

  // Start playback robustly. Two real-world traps this avoids:
  //  * waiting for "canplaythrough" never works when mobile Chrome downgrades `preload` (mobile data),
  //  * calling play() immediately is rejected with AbortError ("video-only background media was
  //    paused to save power") until Chrome has noticed the video is on screen.
  // So we keep retrying play() until it sticks. Only a genuine autoplay block skips the intro.
  useEffect(() => {
    if (!playing) return
    const video = videoRef.current
    if (!video) return

    let stallTimer = 0
    let retryTimer = 0
    let playingNow = false
    let gaveUp = false

    const startTimer = window.setTimeout(() => {
      if (!playingNow) {
        gaveUp = true
        finish()
      }
    }, START_TIMEOUT_MS)
    const hardCap = window.setTimeout(() => leave(0.4), HARD_CAP_MS)

    const attempt = () => {
      if (playingNow || gaveUp) return
      video.play().catch((err: unknown) => {
        if ((err as { name?: string })?.name === "NotAllowedError") {
          gaveUp = true
          finish() // autoplay blocked (e.g. iOS low-power mode): just show the site
        } else {
          retryTimer = window.setTimeout(attempt, 120) // AbortError etc.: not on screen yet, try again
        }
      })
    }

    const onPlaying = () => {
      playingNow = true
      window.clearTimeout(startTimer)
      window.clearTimeout(retryTimer)
      window.clearTimeout(stallTimer)
      setStarted(true)
    }
    const onWaiting = () => {
      window.clearTimeout(stallTimer)
      stallTimer = window.setTimeout(() => leave(0.4), STALL_TIMEOUT_MS)
    }
    video.addEventListener("playing", onPlaying)
    video.addEventListener("waiting", onWaiting)
    video.addEventListener("loadeddata", attempt)
    video.addEventListener("canplay", attempt)

    video.muted = true
    video.setAttribute("muted", "") // iOS Safari wants the attribute itself, which React doesn't write
    attempt()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") leave(0.35)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.clearTimeout(startTimer)
      window.clearTimeout(retryTimer)
      window.clearTimeout(stallTimer)
      window.clearTimeout(hardCap)
      video.removeEventListener("playing", onPlaying)
      video.removeEventListener("waiting", onWaiting)
      video.removeEventListener("loadeddata", attempt)
      video.removeEventListener("canplay", attempt)
      window.removeEventListener("keydown", onKey)
    }
  }, [playing, finish, leave])

  if (!playing) return null

  return (
    <div
      className={`zv-root ${leaving ? "is-leaving" : ""}`}
      style={{ ["--zv-fade" as string]: `${fade}s` }}
      onClick={() => leave(0.35)}
      role="presentation"
    >
      <video
        ref={videoRef}
        className="zv-video"
        src={src}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        onEnded={() => leave(0.9)}
        onError={finish}
      />
      <button
        type="button"
        className={`zv-skip ${started && !leaving ? "is-visible" : ""}`}
        onClick={(e) => {
          e.stopPropagation()
          leave(0.35)
        }}
        tabIndex={started ? 0 : -1}
      >
        {c.skipIntro} <span aria-hidden="true">›</span>
      </button>
    </div>
  )
}
