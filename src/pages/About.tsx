import Container from "../components/Container"
import Eyebrow from "../components/Eyebrow"
import Button from "../components/Button"
import ImagePlaceholder from "../components/ImagePlaceholder"

const stats = [
  { value: "15+", label: "YEARS IN GEORGIA" },
  { value: "100+", label: "COUNTRIES · SJEC INSTALLED" },
  { value: "<2H", label: "EMERGENCY RESPONSE" },
  { value: "99.6%", label: "AVERAGE FLEET UPTIME", accent: true },
]

const commitments = [
  {
    n: "01",
    title: "Full transparency",
    desc: "Every service visit, part and cost is reported clearly — no surprise line items, no vague maintenance summaries.",
  },
  {
    n: "02",
    title: "Local, 24/7 service",
    desc: "Our technicians are based in Georgia, on call around the clock, with parts stocked locally rather than shipped from abroad.",
  },
  {
    n: "03",
    title: "International engineering",
    desc: "Genuine SJEC technology, certified to ISO 9001, 14001, 45001 and CE — the same standard used across 100+ countries.",
  },
]

export default function About() {
  return (
    <>
      <section className="bg-cream py-16 dark:bg-white/5">
        <Container>
          <Eyebrow>A SJEC PARTNER · GEORGIA</Eyebrow>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-normal text-ink sm:text-5xl dark:text-white">
            15 years keeping Georgia's buildings moving.
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted dark:text-white/60">
            ZENA Elevators is Georgia's authorized SJEC partner — an independent, local team
            responsible for the full lifecycle of vertical transport: specification,
            installation, maintenance and modernization.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 dark:bg-dark">
        <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className={`font-serif text-3xl font-bold ${
                  s.accent ? "text-accent" : "text-ink dark:text-white"
                }`}
              >
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-muted dark:text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16 dark:bg-dark">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="mt-3 font-serif text-2xl font-normal text-ink sm:text-3xl dark:text-white">
              Built as the partner we thought Georgia's buildings deserved.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted dark:text-white/60">
              ZENA was founded on a simple observation: developers and building owners in Georgia
              were forced to choose between international engineering quality and a local team
              that actually answers the phone. We decided not to choose.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted dark:text-white/60">
              As an authorized partner of SJEC — a global elevator and escalator manufacturer with
              installations in over 100 countries — we bring certified international technology to
              every project, backed entirely by our own local engineers and technicians.
            </p>
          </div>
          <ImagePlaceholder
            label="ZENA site engineers · commissioning walkthrough"
            className="aspect-[4/3] w-full"
          />
        </Container>
      </section>

      <section className="bg-cream py-20 dark:bg-white/5">
        <Container>
          <Eyebrow>HOW WE WORK</Eyebrow>
          <h2 className="mt-3 max-w-xl font-serif text-2xl font-normal text-ink sm:text-3xl dark:text-white">
            Three commitments behind every installation.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {commitments.map((c) => (
              <div key={c.n} className="bg-white p-6 dark:bg-dark">
                <span className="font-mono text-xs text-accent">{c.n}</span>
                <h3 className="mt-3 font-bold text-ink dark:text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-dark">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="border border-ink/15 p-8 dark:border-white/15">
            <p className="font-serif text-xl font-bold text-ink dark:text-white">SJEC</p>
            <p className="mt-1 font-mono text-[11px] tracking-wide text-muted dark:text-white/50">
              AUTHORIZED PARTNER · GEORGIA
            </p>
            <div className="mt-5 flex flex-wrap gap-3 font-mono text-[11px] tracking-wide text-muted dark:text-white/50">
              {["ISO 9001", "ISO 14001", "ISO 45001", "CE"].map((b) => (
                <span key={b} className="border border-ink/15 px-3 py-1.5 dark:border-white/20">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>THE PARTNERSHIP</Eyebrow>
            <h2 className="mt-3 font-serif text-2xl font-normal text-ink sm:text-3xl dark:text-white">
              Why SJEC.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted dark:text-white/60">
              SJEC is one of the world's leading elevator and escalator manufacturers, with
              projects spanning Olympic venues and World Expo sites. As their authorized Georgian
              partner, ZENA is entrusted with genuine parts, factory-trained engineers and direct
              manufacturer support — passed straight through to every building we serve.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-dark py-20">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Let's talk about your building.
            </h2>
            <p className="mt-3 max-w-md text-[17px] leading-relaxed text-white/60">
              Whether it's a new installation or a fleet that needs a more reliable partner, we're
              ready to scope it.
            </p>
          </div>
          <Button to="/contact">Get in touch</Button>
        </Container>
      </section>
    </>
  )
}
