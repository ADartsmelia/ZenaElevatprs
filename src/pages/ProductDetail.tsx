import { useParams } from "react-router-dom"
import { QRCodeSVG } from "qrcode.react"
import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import BackButton from "../components/ui/BackButton"
import Button from "../components/ui/Button"
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
    back: "Back to products",
    highlights: "Key features",
    applications: "Typical applications",
    facts: "At a glance",
    catalogueEyebrow: "SJEC CATALOGUE",
    openPage: "Open this part of the catalogue",
    fullCatalogue: "Download the full catalogue",
    scan: "Scan to open",
    more: "Other solutions",
    ctaTitle: "Interested in this solution?",
    ctaText: "Tell us about your building and we will recommend the right configuration.",
  },
  ka: {
    crumb: "პროდუქტები",
    back: "პროდუქტებზე დაბრუნება",
    highlights: "მთავარი მახასიათებლები",
    applications: "გამოყენების სფერო",
    facts: "მოკლედ",
    catalogueEyebrow: "SJEC-ის კატალოგი",
    openPage: "კატალოგის ამ ნაწილის გახსნა",
    fullCatalogue: "სრული კატალოგის ჩამოტვირთვა",
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

  if (!cat || cat.linked === false) return <NotFound />

  // Absolute address so the QR code works from any phone, on whatever domain the site is served from.
  const qrValue = cat.catalogue ? new URL(cat.catalogue.file, window.location.origin).href : ""


  const others = categories.filter((x) => x.group === cat.group && x.slug !== cat.slug).slice(0, 3)

  return (
    <>
      <section className="bg-alt py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <BackButton to="/products">{t.back}</BackButton>
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
            </div>
          </div>
          {cat.catalogue && (
            <aside className="border border-line border-t-2 border-t-gold bg-card p-7 sm:p-9">
              <p className="font-mono text-[10.5px] tracking-[0.16em] text-accent-text uppercase">{t.catalogueEyebrow}</p>
              <h2 className="mt-3 text-[26px] leading-tight text-ink">{cat.catalogue.title[lang]}</h2>
              <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-muted">{cat.catalogue.pages[lang]}</p>
              <div className="mt-7 flex items-center gap-6">
                <div className="shrink-0 bg-white p-2.5 ring-1 ring-black/10">
                  <QRCodeSVG value={qrValue} size={96} level="M" bgColor="#ffffff" fgColor="#1c1713" />
                </div>
                <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">{t.scan}</p>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href={cat.catalogue.file} external>
                  {t.openPage} ↗
                </Button>
                <a
                  href={site.catalogue.path}
                  download={site.catalogue.fileName}
                  className="text-[13px] font-medium text-ink underline decoration-gold underline-offset-[6px]"
                >
                  {t.fullCatalogue} ↓
                </a>
              </div>
            </aside>
          )}
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
          </aside>
        </Container>
      </section>

      <section className="bg-alt py-16 lg:py-20">
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
