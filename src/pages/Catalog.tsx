import Container from "../components/Container"
import Eyebrow from "../components/Eyebrow"
import Button, { ArrowLink } from "../components/Button"
import ImagePlaceholder from "../components/ImagePlaceholder"
import { products } from "../data/products"

export default function Catalog() {
  return (
    <>
      <section className="bg-white py-16 dark:bg-dark">
        <Container>
          <Eyebrow>SJEC PRODUCT CATALOG</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Escalators & moving walks for every building type.
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted dark:text-white/60">
            Four SJEC product lines cover commercial, heavy-duty public transport, passenger
            conveyance and cart/trolley transport — all installed and serviced locally by ZENA.
          </p>
        </Container>
      </section>

      {products.map((p, i) => (
        <section key={p.slug} className={i % 2 === 0 ? "bg-cream dark:bg-white/5" : "bg-white dark:bg-dark"}>
          <Container
            className={`grid items-center gap-10 py-16 lg:grid-cols-2 ${
              i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
            }`}
          >
            <ImagePlaceholder label={p.imageAlt} className="aspect-[4/3] w-full" />
            <div>
              <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
                {p.category}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-ink dark:text-white">{p.name}</h2>
              <p className="mt-3 max-w-md text-[17px] leading-relaxed text-muted dark:text-white/60">
                {p.description}
              </p>
              <div className="mt-6 grid grid-cols-2 border border-tan dark:border-white/10">
                {p.specs.map((s, si) => (
                  <div
                    key={s.label}
                    className={`p-4 ${si % 2 === 0 ? "border-r" : ""} ${
                      si < 2 ? "border-b" : ""
                    } border-tan dark:border-white/10`}
                  >
                    <p className="font-mono text-[10px] tracking-wide text-muted uppercase dark:text-white/40">
                      {s.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-ink dark:text-white">{s.value}</p>
                  </div>
                ))}
              </div>
              <ArrowLink to="/contact" className="mt-6">
                View full specification →
              </ArrowLink>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-dark py-16">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Not sure which model fits your building?
            </h2>
            <p className="mt-3 max-w-md text-[17px] leading-relaxed text-white/60">
              Send us the rise, traffic profile and location — we'll recommend the right SJEC
              model and return a transparent proposal.
            </p>
          </div>
          <Button to="/contact">Get a free quote</Button>
        </Container>
      </section>
    </>
  )
}
