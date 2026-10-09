# ZENA Elevators website

React + TypeScript + Vite + Tailwind CSS v4 + React Router. Bilingual (English / Georgian).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Where to change things

| What | Where |
| --- | --- |
| Phone, email, hours, social links, SJEC catalogue URL, "130+" countries | `src/config/site.ts` |
| Menu, button labels, footer, form messages (EN + KA) | `src/i18n/common.ts` |
| Page copy (EN + KA) | the `copy` object at the top of each file in `src/pages/` |
| Product categories, specs, features | `src/data/products.ts` |
| Z-Care page (from the company presentation) | `src/pages/ZCare.tsx`, teaser in `src/pages/Home.tsx` |
| Blog articles (EN + KA) | `src/data/blog.ts` |
| Colours, fonts, dark mode | `src/index.css` |
| Logo (vector, traced from the official PNG) | `src/components/logoPaths.ts`, `src/components/brand/Logo.tsx` |
| Elevator-door intro | `src/components/intro/` |

### Replacing placeholder images
Every image slot is a `<Media>` component. Put the photo in `public/images/` and set the
`image` field on the product category / blog post (e.g. `image: "/images/passenger.jpg"`).
The striped placeholder disappears automatically.

### Languages
English lives at `/…`, Georgian at `/ka/…`. Both are real URLs (good for SEO); the EN/GE
switch keeps you on the same page. A first-time visitor whose browser language is Georgian
is sent to `/ka` once.

## Contact form → info@zenaelevators.ge

The site is static, so the form needs a small service to deliver the email.

1. Create a free form at [formspree.io](https://formspree.io) using `info@zenaelevators.ge`.
2. Copy its endpoint (`https://formspree.io/f/xxxxxxx`).
3. Set it as the build variable `VITE_FORM_ENDPOINT` (locally in `.env.local`, on DigitalOcean
   under the component's *Environment Variables*, scope **Build time**).

Until it is set, the form falls back to opening the visitor's mail app with the message
pre-filled, so no enquiry is ever silently lost. Spam protection: hidden honeypot field plus a
minimum fill time. Validation, success and error messages are built in.

## Elevator intro animation

The intro is a **pre-rendered video** (`public/intro/zena-intro-landscape.mp4` and `…-portrait.mp4`,
about 1 MB each), so it plays perfectly smoothly on any device. It plays once per browser
session on the home page only, can be skipped (button, click or `Esc`), is skipped for visitors
who prefer reduced motion or have data-saver on, and is abandoned (never blocks the site) if the
video isn't ready within 4 seconds. The closing fade into the site only animates opacity.

The video is rendered from a deterministic CSS scene (`src/components/intro/IntroScene.tsx` +
`intro.css`). To change the animation, edit the scene and re-render:

```bash
npm run dev            # terminal 1
npm run render-intro   # terminal 2 — captures every frame in headless Chrome and encodes with ffmpeg
```

Needs Google Chrome (`CHROME_PATH` if installed elsewhere) and `ffmpeg`. Rendering both videos takes
about 12 minutes. Open `http://localhost:5173/intro-render.html` to inspect the scene live;
`window.__setIntroTime(3.2)` in the console scrubs it to 3.2 s.

## Deploying (DigitalOcean App Platform, static site)

Build command `npm run build`, output directory `dist`. **Set "Catchall document" to
`index.html`** (see `.do/app.yaml`), otherwise refreshing `/products` or `/ka/blog` returns 404.
`public/404.html` is a built-in fallback that sends unknown paths into the app, so deep links and
refreshes also work without that setting. Then point `zenaelevators.ge` at the app under
*Settings → Domains*.

## Before launch checklist

- [ ] Real social profile links (`site.social`)
- [ ] Direct link to the official SJEC catalogue (`site.sjecCatalogueUrl`)
- [ ] Confirm the SJEC country count (`site.sjecCountries`)
- [ ] Native-speaker review of the Georgian copy and the privacy policy (legal review)
- [ ] Real photography
- [ ] `VITE_FORM_ENDPOINT` set
- [ ] Analytics / Search Console, if wanted (a cookie notice is needed only if analytics cookies are used)
