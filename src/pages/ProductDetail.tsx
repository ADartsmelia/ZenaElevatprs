import { useParams } from "react-router-dom"
import { QRCodeSVG } from "qrcode.react"
import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Media from "../components/ui/Media"
import ModelCard from "../components/ui/ModelCard"
import CategoryCard from "../components/ui/CategoryCard"
import { CheckIcon } from "../components/ui/Icons"
import NotFound from "./NotFound"
import { LocLink, useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"
import { site } from "../config/site"
import { categories, getCategory } from "../data/products"

const copy = {
  en: {
    crumb: "Products",
    highlights: "Key features",
    applications: "Typical applications",
    facts: "At a glance",
    models: "Specified models",
    catalogue: "See the full technical details in SJEC's official catalogue.",
    scan: "Scan to open",
    more: "Other solutions",
    ctaTitle: "Interested in this solution?",
    ctaText: "Tell us about your building and we will recommend the right configuration.",
  },
  ka: {
    crumb: "პროდუქცია",
    highlights: "მთავარი მახასიათებლები",
    applications: "გამოყენების სფერო",
    facts: "მოკლედ",
    models: "კონკრეტული მოდელები",
    catalogue: "სრული ტექნიკური დეტალები იხილეთ SJEC-ის ოფიციალურ კატალოგში.",
    scan: "დაასკანირეთ გასახსნელად",
    more: "სხვა გადაწყვეტილებები",
    ctaTitle: "გაინტერესებთ ეს გადაწყვეტილება?",
    ctaText: "მოგვიყევით თქვენი შენობის შესახებ და შეგირჩევთ სწორ კონფიგურაციას.",
  },
} satisfies L<Record<string, unknown>>

export default function ProductDetail() {
  const { slug } = useParams()
  const lang = useLang()
  const c = useCommon()
  const t = copy[lang]
  const cat = slug ? getCategory(slug) : undefined

  usePageMeta({
    title: cat ? cat.name[lang] : "404",
    description: cat ? cat.short[lang] : "",
    noindex: !cat,
  })

  if (!cat) return <NotFound />

  const others = categories.filter((x) => x.group === cat.group && x.slug !== cat.slug).slice(0, 3)

  return (
    <>
      <section className="bg-alt py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              <LocLink to="/products" className="hover:text-ink hover:underline">
                {t.crumb}
              </LocLink>{" "}
              / {cat.name[lang]}
            </p>
            <h1 className="mt-5 text-[38px] leading-[1.08] text-ink sm:text-[52px]">{cat.name[lang]}</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-muted">{cat.summary[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">{c.cta.requestQuote}</Button>
              <Button href={site.sjecCatalogueUrl} external variant="secondary">
                {c.cta.openCatalogue} ↗
              </Button>
            </div>
          </div>
          <Media src={cat.image} label={cat.media[lang]} className="aspect-[4/3] w-full" />
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[28px] text-ink">{t.highlights}</h2>
            <ul className="mt-6 space-y-4">
              {cat.highlights[lang].map((h) => (
                <li key={h} className="flex gap-3 text-[15.5px] leading-[1.7] text-ink/85">
                  <CheckIcon className="mt-1 shrink-0 text-accent-text" width={17} height={17} />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-[28px] text-ink">{t.applications}</h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {cat.applications[lang].map((a) => (
                <li key={a} className="border border-line bg-card px-4 py-2 text-[13.5px] text-ink/85">
                  {a}
                </li>
              ))}
            </ul>

            {cat.source && (
              <p className="mt-10 max-w-xl border-l-2 border-gold pl-4 text-[13px] leading-relaxed text-muted">
                {cat.source[lang]}
              </p>
            )}
          </div>

          <aside className="space-y-6">
            {cat.facts && (
              <div className="border border-line bg-card p-6">
                <p className="font-mono text-[10.5px] tracking-[0.16em] text-accent-text uppercase">{t.facts}</p>
                <dl className="mt-4 divide-y divide-line">
                  {cat.facts.map((f) => (
                    <div key={f.label.en} className="py-3.5 first:pt-0 last:pb-0">
                      <dt className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">{f.label[lang]}</dt>
                      <dd className="mt-1 text-[15px] font-medium text-ink">{f.value[lang]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="flex items-center gap-5 border border-line bg-card p-6">
              <div className="shrink-0 bg-white p-2.5 ring-1 ring-black/10">
                <QRCodeSVG value={site.sjecCatalogueUrl} size={84} level="M" bgColor="#ffffff" fgColor="#1c1713" />
              </div>
              <div>
                <p className="text-[13.5px] leading-relaxed text-muted">{t.catalogue}</p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-accent-text uppercase">{t.scan}</p>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {cat.models && (
        <section className="bg-alt py-16 lg:py-20">
          <Container>
            <h2 className="text-[28px] text-ink">{t.models}</h2>
            <div className="mt-8 border border-line bg-line">
              {cat.models.map((m) => (
                <ModelCard key={m.name} model={m} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className={`${cat.models ? "bg-surface" : "bg-alt"} py-16 lg:py-20`}>
        <Container>
          <Eyebrow>{t.more}</Eyebrow>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <CategoryCard key={o.slug} cat={o} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-night py-16 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-[30px] leading-tight text-white sm:text-[36px]">{t.ctaTitle}</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-white/65">{t.ctaText}</p>
          </div>
          <Button to="/contact">{c.cta.requestQuote}</Button>
        </Container>
      </section>
    </>
  )
}
