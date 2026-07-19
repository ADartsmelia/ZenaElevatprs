import Container from "../components/Container"
import Eyebrow from "../components/Eyebrow"
import Button from "../components/Button"
import ImagePlaceholder from "../components/ImagePlaceholder"

const info = [
  { label: "Phone", value: "+995 32 2 44 55 66", sub: "24/7 emergency line" },
  { label: "Email", value: "hello@zena.ge", sub: "Replies within one business day" },
  { label: "Office", value: "12 Aghmashenebeli Ave, Tbilisi 0102, Georgia", sub: "" },
  {
    label: "Hours",
    value: "Office: Mon–Fri, 9:00–18:00",
    sub: "Emergency service: 24/7, every day",
  },
]

const steps = [
  "We review your building type and traffic profile",
  "A ZENA engineer schedules a site visit",
  "You receive a transparent, itemized proposal",
]

export default function Contact() {
  return (
    <>
      <section className="bg-cream py-16 dark:bg-white/5">
        <Container>
          <Eyebrow>START A PROJECT</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-normal text-ink sm:text-5xl dark:text-white">
            Let's plan your vertical transport.
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted dark:text-white/60">
            Tell us about the building. We'll respond within one business day with a transparent
            scope — no pressure, no hidden line items.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 dark:bg-dark">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((c) => (
            <div key={c.label} className="border border-tan p-6 dark:border-white/10">
              <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
                {c.label}
              </p>
              <p className="mt-2 font-bold text-ink dark:text-white">{c.value}</p>
              {c.sub && (
                <p className="mt-1 text-sm text-muted dark:text-white/50">{c.sub}</p>
              )}
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-20 dark:bg-white/5">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>REQUEST A QUOTE</Eyebrow>
            <h2 className="mt-3 font-serif text-2xl font-normal text-ink sm:text-3xl dark:text-white">
              Tell us about the building.
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted dark:text-white/60">
              The more detail you share — floors, traffic type, timeline — the more precise our
              first proposal will be.
            </p>
            <div className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <div key={s} className="flex gap-4">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <p className="text-sm text-muted dark:text-white/60">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            className="space-y-4 bg-white p-6 dark:bg-dark-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Company" placeholder="Company" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" placeholder="you@company.com" type="email" />
              <Field label="Phone" placeholder="+995" type="tel" />
            </div>
            <div>
              <label className="font-mono text-[11px] tracking-wide text-muted uppercase dark:text-white/50">
                Project type
              </label>
              <select className="mt-1.5 w-full border border-ink/15 bg-transparent px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none dark:border-white/15 dark:text-white">
                <option>New installation</option>
                <option>Maintenance & repair</option>
                <option>Modernization</option>
                <option>Escalators & moving walks</option>
              </select>
            </div>
            <div>
              <label className="font-mono text-[11px] tracking-wide text-muted uppercase dark:text-white/50">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Building type, number of floors, timeline..."
                className="mt-1.5 w-full border border-ink/15 bg-transparent px-3 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none dark:border-white/15 dark:text-white"
              />
            </div>
            <Button type="submit" className="w-full">
              Get my free quote →
            </Button>
          </form>
        </Container>
      </section>

      <ImagePlaceholder
        label="map · 12 Aghmashenebeli Ave, Tbilisi"
        dark
        className="h-48 w-full items-center justify-center"
      />
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
      <label className="font-mono text-[11px] tracking-wide text-muted uppercase dark:text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full border border-ink/15 bg-transparent px-3 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none dark:border-white/15 dark:text-white"
      />
    </div>
  )
}
