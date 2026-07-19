import Container from "../components/Container"
import Eyebrow from "../components/Eyebrow"
import Button, { ArrowLink } from "../components/Button"
import ImagePlaceholder from "../components/ImagePlaceholder"
import { products } from "../data/products"
import { blogPosts } from "../data/blogPosts"

const services = [
  {
    n: "01",
    title: "New Installation",
    desc: "Passenger and freight elevators specified, supplied and commissioned on genuine SJEC technology.",
  },
  {
    n: "02",
    title: "Maintenance & 24/7 Repair",
    desc: "Preventive service plans with transparent reporting and a guaranteed under-two-hour emergency response.",
  },
  {
    n: "03",
    title: "Modernization",
    desc: "Upgrade aging equipment for safety, energy and ride quality — without a full building shutdown.",
  },
  {
    n: "04",
    title: "Escalators & Moving Walks",
    desc: "Heavy-duty escalators and travelators for malls, metros and airports — built for continuous public traffic.",
  },
]

const mistakes = [
  "Choosing on price instead of lifecycle cost",
  "Ignoring spare-parts availability & lead times",
  "No guaranteed local emergency response",
]

export default function Home() {
  const featuredPost = blogPosts.find((p) => p.slug === "seven-mistakes-georgian-developers")!

  return (
    <>
      {/* Hero */}
      <section className="bg-white dark:bg-dark">
        <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <Eyebrow>SJEC PARTNER · 15+ YEARS IN GEORGIA</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl dark:text-white">
              You're not buying an elevator.
              <br />
              You're choosing a{" "}
              <span className="text-accent">partner.</span>
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted dark:text-white/60">
              Installation, maintenance, modernization and escalators — engineered on
              international SJEC technology and backed by transparent reporting and local 24/7
              service. Not the cheapest. The most reliable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Get a free quote</Button>
              <Button to="/about" variant="secondary">
                Explore services →
              </Button>
            </div>
            <p className="mt-8 flex items-center gap-2 font-mono text-xs tracking-wide text-muted dark:text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              99.6% AVERAGE FLEET UPTIME &nbsp;·&nbsp; &lt;2H EMERGENCY RESPONSE
            </p>
          </div>

          <div className="relative">
            <ImagePlaceholder
              label="escalator · airport atrium · long-exposure motion"
              className="aspect-[4/5] w-full items-end justify-start p-4 sm:aspect-square"
            />
            <div className="absolute bottom-14 left-6 max-w-[260px] bg-dark-card px-6 py-5 text-white">
              <p className="font-serif text-3xl font-bold">
                100<span className="text-accent">+</span>
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-white/60">
                COUNTRIES · SJEC INSTALLED
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-y border-tan bg-cream dark:border-white/10 dark:bg-white/5">
        <Container className="flex flex-wrap items-center justify-between gap-8 py-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="border border-ink/15 px-4 py-2 dark:border-white/20">
              <p className="font-serif text-sm font-bold text-ink dark:text-white">SJEC</p>
              <p className="font-mono text-[10px] tracking-wide text-muted dark:text-white/50">
                AUTHORIZED PARTNER
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-mono text-[11px] tracking-wide text-muted dark:text-white/50">
              {["ISO 9001", "ISO 14001", "ISO 45001", "CE"].map((b) => (
                <span key={b} className="border border-ink/15 px-3 py-1.5 dark:border-white/20">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="font-serif text-2xl font-bold text-ink dark:text-white">100+</p>
              <p className="font-mono text-[11px] tracking-wide text-muted dark:text-white/50">
                COUNTRIES
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-ink dark:text-white">15+</p>
              <p className="font-mono text-[11px] tracking-wide text-muted dark:text-white/50">
                YEARS IN GEORGIA
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-20 dark:bg-dark">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Eyebrow>WHAT WE DO</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl dark:text-white">
                End-to-end vertical transport, one accountable partner.
              </h2>
            </div>
            <p className="text-[17px] leading-relaxed text-muted lg:pt-9 dark:text-white/60">
              From first specification to decades of service, ZENA owns the full lifecycle — so
              responsibility never falls between vendors.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.n}
                className="flex flex-col border border-tan bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between">
                  <svg width="14" height="18" viewBox="0 0 20 24" fill="none" aria-hidden="true">
                    <path d="M8 0L2 24H0L6 0H8Z" className="fill-ink dark:fill-white" />
                    <path d="M16 0L10 24H8L14 0H16Z" fill="#a8702e" />
                  </svg>
                  <span className="font-mono text-xs text-muted/60 dark:text-white/30">{s.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink dark:text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted dark:text-white/60">
                  {s.desc}
                </p>
                <ArrowLink to="/about" className="mt-5">
                  Learn more →
                </ArrowLink>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog teaser */}
      <section className="bg-dark py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>FROM THE BLOG · {featuredPost.category.toUpperCase()}</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{featuredPost.title}</h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/60">
              {featuredPost.excerpt}
            </p>
            <ArrowLink to={`/blog/${featuredPost.slug}`} onDark className="mt-6">
              Read the full article →
            </ArrowLink>
          </div>
          <div className="border border-white/15 p-6">
            {mistakes.map((m, i) => (
              <div
                key={m}
                className="flex gap-4 border-b border-white/10 py-4 first:pt-0 last:border-0"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <p className="text-sm text-white/80">{m}</p>
              </div>
            ))}
            <div className="flex gap-4 py-4">
              <span className="font-mono text-xs text-white/30">+</span>
              <p className="text-sm text-white/40">4 more inside the article</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Catalog teaser */}
      <section className="bg-cream py-20 dark:bg-white/5">
        <Container>
          <Eyebrow>SJEC PRODUCT RANGE</Eyebrow>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-2xl font-bold text-ink sm:text-3xl dark:text-white">
              Escalators & conveyors, engineered for every traffic profile.
            </h2>
            <ArrowLink to="/catalog">View full catalog →</ArrowLink>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.slug} className="bg-white dark:bg-dark">
                <ImagePlaceholder label={p.imageAlt} className="aspect-[4/3] w-full" />
                <div className="p-5">
                  <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-bold text-ink dark:text-white">{p.name}</h3>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-muted uppercase dark:text-white/40">
                    {p.tags}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial + case study */}
      <section className="bg-white py-20 dark:bg-dark">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-serif text-5xl text-accent">"</p>
            <p className="-mt-4 text-2xl font-medium leading-snug text-ink dark:text-white">
              ZENA modernized 14 units across two towers with zero unplanned downtime. When
              something needs attention, they're on site before we've finished the phone call.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-tan dark:bg-white/10" />
              <div>
                <p className="text-sm font-bold text-ink dark:text-white">Nino Kapanadze</p>
                <p className="font-mono text-[11px] tracking-wide text-muted dark:text-white/50">
                  FACILITIES DIRECTOR · MERIDIAN TOWERS
                </p>
              </div>
            </div>
          </div>

          <div className="border border-tan p-6 dark:border-white/10">
            <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
              Case study · Meridian Towers
            </p>
            <div className="mt-4 space-y-4">
              <div className="border-b border-tan pb-4 dark:border-white/10">
                <p className="font-serif text-3xl font-bold text-ink dark:text-white">0</p>
                <p className="text-sm text-muted dark:text-white/50">
                  unplanned downtime days in 24 months
                </p>
              </div>
              <div className="border-b border-tan pb-4 dark:border-white/10">
                <p className="font-serif text-3xl font-bold text-ink dark:text-white">14</p>
                <p className="text-sm text-muted dark:text-white/50">
                  units modernized, tenants in occupancy
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent">-31%</p>
                <p className="text-sm text-muted dark:text-white/50">energy use vs. legacy drives</p>
              </div>
            </div>
            <ArrowLink to="/about" className="mt-6">
              Read case study →
            </ArrowLink>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-dark py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>START A PROJECT</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Let's plan your vertical transport.
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/60">
              Tell us about the building. We'll respond within one business day with a
              transparent scope — no pressure, no hidden line items.
            </p>
            <div className="mt-8 space-y-4 font-mono text-sm">
              <p>
                <span className="text-accent">TEL</span>{" "}
                <span className="text-white/80">+995 32 2 44 55 66</span>
              </p>
              <p>
                <span className="text-accent">EML</span>{" "}
                <span className="text-white/80">hello@zena.ge</span>
              </p>
              <p>
                <span className="text-accent">LOC</span>{" "}
                <span className="text-white/80">12 Aghmashenebeli Ave, Tbilisi 0102, GE</span>
              </p>
            </div>
          </div>

          <form className="space-y-4 bg-dark-card p-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Company" placeholder="Company" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" placeholder="you@company.com" type="email" />
              <Field label="Phone" placeholder="+995" type="tel" />
            </div>
            <div>
              <label className="font-mono text-[11px] tracking-wide text-white/50 uppercase">
                Project type
              </label>
              <select className="mt-1.5 w-full border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white focus:border-accent focus:outline-none">
                <option className="bg-dark">New installation</option>
                <option className="bg-dark">Maintenance & repair</option>
                <option className="bg-dark">Modernization</option>
                <option className="bg-dark">Escalators & moving walks</option>
              </select>
            </div>
            <div>
              <label className="font-mono text-[11px] tracking-wide text-white/50 uppercase">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Building type, number of floors, timeline..."
                className="mt-1.5 w-full border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
              />
            </div>
            <Button type="submit" className="w-full">
              Get my free quote →
            </Button>
          </form>
        </Container>
      </section>
    </>
  )
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label className="font-mono text-[11px] tracking-wide text-white/50 uppercase">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
      />
    </div>
  )
}
