import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react"
import { LogoMark, LogoWordmark } from "../brand/Logo"
import "./intro.css"

/**
 * The elevator-door scene. It is NOT shipped to visitors: it is the source that
 * `scripts/render-intro.mjs` captures frame by frame into the intro videos
 * (public/intro/*.mp4). Open /intro-render.html on the dev server to inspect it;
 * `window.__setIntroTime(seconds)` scrubs the timeline.
 */

/** Seconds of the timeline that are rendered into the video. */
export const INTRO_SECONDS = 4.9

/**
 * Brushed stainless-steel grain: fractal noise stretched along the vertical axis,
 * rendered as an SVG background and blended over the metal gradients.
 */
const STEEL_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='260' height='520'>" +
  "<filter id='b' x='0' y='0' width='100%' height='100%'>" +
  "<feTurbulence type='fractalNoise' baseFrequency='0.9 0.005' numOctaves='3' seed='7' stitchTiles='stitch'/>" +
  "<feColorMatrix type='matrix' values='0.5 0.5 0.5 0 0  0.5 0.5 0.5 0 0  0.5 0.5 0.5 0 0  0 0 0 0 1'/>" +
  "</filter><rect width='100%' height='100%' filter='url(#b)'/></svg>"
const STEEL_URL = `url("data:image/svg+xml,${encodeURIComponent(STEEL_SVG)}")`

type SceneWindow = Window & { __setIntroTime?: (seconds: number) => void }

/** The cabin interior: a small CSS 3D room (back wall, side walls, ceiling, floor). */
function Cabin() {
  return (
    <div className="zi-cabin">
      <div className="zi-room">
        <div className="zi-face zi-ceiling">
          <i className="zi-downlight" style={{ left: "28%" }} />
          <i className="zi-downlight" style={{ left: "72%" }} />
        </div>
        <div className="zi-face zi-wall-l" />
        <div className="zi-face zi-wall-r" />
        <div className="zi-face zi-back">
          <i className="zi-handrail" />
        </div>
        <div className="zi-face zi-cabin-floor">
          <i className="zi-floor-inlay" />
        </div>
      </div>
      <div className="zi-cabin-glow" />
    </div>
  )
}

export default function IntroScene() {
  const rootRef = useRef<HTMLDivElement>(null)
  const openingRef = useRef<HTMLDivElement>(null)
  const [camera, setCamera] = useState<CSSProperties>({})

  // How far the camera must push so the doorway fills the viewport.
  useLayoutEffect(() => {
    const el = openingRef.current
    if (!el) return
    const ow = el.offsetWidth
    const oh = el.offsetHeight
    const vw = window.innerWidth
    const vh = window.innerHeight
    const cx = vw * 0.5
    const cy = vh * 0.55
    const scale = 1.06 * Math.max((2 * Math.max(cx, vw - cx)) / ow, (2 * Math.max(cy, vh - cy)) / oh)
    setCamera({
      transformOrigin: `${cx}px ${cy}px`,
      ["--zi-scale" as string]: scale.toFixed(3),
    })
  }, [])

  useEffect(() => {
    const w = window as SceneWindow
    w.__setIntroTime = (seconds: number) => rootRef.current?.style.setProperty("--zi-t", `${seconds}s`)
    return () => {
      delete w.__setIntroTime
    }
  }, [])

  return (
    <div ref={rootRef} className="zi-root is-frozen" style={{ ["--zi-steel" as string]: STEEL_URL } as CSSProperties}>
      <div className="zi-camera" style={camera}>
        <div className="zi-stage">
          <div className="zi-wall" />
          <div className="zi-floor" />

          <div className="zi-sign" aria-hidden="true">
            <LogoMark className="zi-sign-mark" />
            <LogoWordmark className="zi-sign-word" />
          </div>

          <div className="zi-transom">
            <div className="zi-display" aria-hidden="true">
              <span className="zi-arrow">▼</span>
              <span className="zi-digits">
                <b className="zi-digit zi-d3">3</b>
                <b className="zi-digit zi-d2">2</b>
                <b className="zi-digit zi-d1">1</b>
              </span>
            </div>
          </div>

          <div className="zi-frame" />

          <div className="zi-opening" ref={openingRef}>
            <Cabin />
            <div className="zi-doors">
              <div className="zi-door zi-door-l" />
              <div className="zi-door zi-door-r" />
            </div>
          </div>

          <div className="zi-spill" />

          <div className="zi-callpanel" aria-hidden="true">
            <i className="zi-callbtn" />
            <i className="zi-callbtn zi-callbtn-down">
              <i className="zi-led" />
            </i>
          </div>
        </div>
      </div>

      <div className="zi-flash" />
      <div className="zi-black" />
    </div>
  )
}
