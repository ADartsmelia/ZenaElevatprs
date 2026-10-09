#!/usr/bin/env node
/**
 * Renders the elevator intro (src/components/intro/IntroScene.tsx) into MP4 videos.
 *
 *   1. start the dev server:  npm run dev
 *   2. in another terminal:   npm run render-intro
 *
 * It opens /intro-render.html in headless Chrome, scrubs the CSS timeline one frame at a
 * time (so the result is perfectly deterministic, independent of machine speed), and encodes
 * the frames with ffmpeg into public/intro/zena-intro-{landscape,portrait}.mp4.
 *
 * Needs: Google Chrome (set CHROME_PATH if it is not in the default location) and ffmpeg.
 */
import { execFileSync } from "node:child_process"
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import puppeteer from "puppeteer-core"

const BASE = process.env.INTRO_BASE ?? "http://localhost:5173"
const FPS = 30
/** Keep in sync with INTRO_SECONDS in IntroScene.tsx */
const SECONDS = 4.9
const OUT_DIR = resolve("public/intro")
const FFMPEG = process.env.FFMPEG ?? "ffmpeg"
const CHROME =
  process.env.CHROME_PATH ??
  [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  ].find((p) => existsSync(p))

const VARIANTS = [
  { name: "landscape", width: 1920, height: 1080 },
  { name: "portrait", width: 810, height: 1440 },
]

if (!CHROME) {
  console.error("Chrome not found. Set CHROME_PATH to your Chrome executable.")
  process.exit(1)
}

const only = process.argv[2]
const variants = only ? VARIANTS.filter((v) => v.name === only) : VARIANTS
mkdirSync(OUT_DIR, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--hide-scrollbars", "--force-color-profile=srgb", "--font-render-hinting=none"],
})

try {
  for (const v of variants) {
    const frames = Math.round(FPS * SECONDS) + 1
    const dir = join(tmpdir(), `zena-intro-${v.name}`)
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })

    const page = await browser.newPage()
    await page.setViewport({ width: v.width, height: v.height, deviceScaleFactor: 1 })
    await page.goto(`${BASE}/intro-render.html`, { waitUntil: "networkidle0" })
    await page.waitForFunction(() => typeof window.__setIntroTime === "function")
    await page.evaluate(() => document.fonts.ready)

    console.log(`\n${v.name}: capturing ${frames} frames at ${v.width}x${v.height}…`)
    for (let i = 0; i < frames; i++) {
      const t = i / FPS
      await page.evaluate(
        (time) =>
          new Promise((done) => {
            window.__setIntroTime(time)
            requestAnimationFrame(() => requestAnimationFrame(done))
          }),
        t,
      )
      await page.screenshot({ path: join(dir, `${String(i).padStart(4, "0")}.jpg`), type: "jpeg", quality: 96 })
      if (i % 30 === 0) process.stdout.write(`  ${t.toFixed(1)}s\n`)
    }
    await page.close()

    const out = join(OUT_DIR, `zena-intro-${v.name}.mp4`)
    console.log(`  encoding → ${out}`)
    execFileSync(
      FFMPEG,
      [
        "-y",
        "-loglevel", "error",
        "-framerate", String(FPS),
        "-i", join(dir, "%04d.jpg"),
        "-c:v", "libx264",
        "-preset", "slow",
        "-crf", "21",
        "-x264-params", "aq-mode=3:deblock=-1,-1",
        "-profile:v", "high",
        "-vf", "scale=out_color_matrix=bt709:out_range=tv,format=yuv420p",
        "-colorspace", "bt709",
        "-color_primaries", "bt709",
        "-color_trc", "bt709",
        "-color_range", "tv",
        "-movflags", "+faststart",
        "-an",
        out,
      ],
      { stdio: "inherit" },
    )
    const mb = (statSync(out).size / 1024 / 1024).toFixed(2)
    console.log(`  done: ${mb} MB (${readdirSync(dir).length} frames)`)
    rmSync(dir, { recursive: true, force: true })
  }
} finally {
  await browser.close()
}
