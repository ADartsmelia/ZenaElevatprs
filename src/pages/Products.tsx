import { QRCodeSVG } from "qrcode.react"
import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import SectionHead from "../components/ui/SectionHead"
import Button from "../components/ui/Button"
import ModelCard from "../components/ui/ModelCard"
import CategoryCard from "../components/ui/CategoryCard"
import { useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"
import { site } from "../config/site"
import { allModels, elevatorCategories, escalatorCategories } from "../data/products"

const copy = {
  en: {
    metaTitle: "Products — Elevators, Escalators & Moving Walks",
    metaDesc:
      "Passenger, panoramic, hospital, freight, home and car elevators, dumbwaiters, escalators, moving walks and trolley conveyors — SJEC technology supplied and supported by ZENA in Georgia.",
    eyebrow: "PRODUCTS",
    title: "Vertical Transportation Solutions for Every Building Type",
    text: "Explore elevator, escalator and moving-walk solutions for residential, commercial, healthcare, industrial and public buildings.",
    elevators: "Elevators",
    escalators: "Escalators & Moving Walks",
    modelsEyebrow: "SJEC ESCALATOR & CONVEYOR MODELS",
    modelsTitle: "Specified models",
    modelsText: "Technical data for the SJEC escalator and conveyor lines we supply.",
    catalogue: {
      eyebrow: "OFFICIAL SJEC CATALOGUE",
      title: "Official SJEC Catalogue",
      text: "Download SJEC's official catalogue as a PDF. Scan the code to get it on your phone.",
    },
    cta: {
      title: "Not Sure Which Solution Fits Your Building?",
      text: "Tell us about your building and we will recommend suitable solutions.",
    },
  },
  ka: {
    metaTitle: "პროდუქტები - ლიფტები, ესკალატორები და მოძრავი ბილიკები",
    metaDesc:
      "სამგზავრო, პანორამული, სამედიცინო, სატვირთო, საოჯახო და ავტომობილის ლიფტები, ესკალატორები, მოძრავი ბილიკები და ეტლების კონვეიერები - SJEC-ის ტექნოლოგია, რომელსაც ZENA საქართველოში აწვდის და ემსახურება.",
    eyebrow: "პროდუქტები",
    title: "ვერტიკალური ტრანსპორტის გადაწყვეტილებები ნებისმიერი ტიპის შენობისთვის",
    text: "გაეცანით ლიფტების, ესკალატორებისა და მოძრავი ბილიკების გადაწყვეტილებებს საცხოვრებელი, კომერციული, სამედიცინო, სამრეწველო და საზოგადოებრივი შენობებისთვის.",
    elevators: "ლიფტები",
    escalators: "ესკალატორები და მოძრავი ბილიკები",
    modelsEyebrow: "SJEC-ის ესკალატორებისა და კონვეიერების მოდელები",
    modelsTitle: "კონკრეტული მოდელები",
    modelsText: "ტექნიკური მონაცემები SJEC-ის ესკალატორებისა და კონვეიერების ხაზებისთვის, რომლებსაც ვაწვდით.",
    catalogue: {
      eyebrow: "SJEC-ის ოფიციალური კატალოგი",
      title: "SJEC-ის ოფიციალური კატალოგი",
      text: "ჩამოტვირთეთ SJEC-ის ოფიციალური კატალოგი PDF ფორმატში. დაასკანირეთ კოდი, რომ ტელეფონზეც მიიღოთ.",
    },
    cta: {
      title: "არ იცით, რომელი გადაწყვეტილება შეესაბამება თქვენს შენობას?",
      text: "მოგვიყევით თქვენი შენობის შესახებ და შეგირჩევთ შესაფერის გადაწყვეტილებებს.",
    },
  },
} satisfies L<Record<string, unknown>>

export default function Products() {
  const lang = useLang()
  const c = useCommon()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc })
  // Absolute address so the QR code works from any phone, on whatever domain the site is served from.
  const catalogueUrl = new URL(site.catalogue.path, window.location.origin).href

  return (
    <>
      <section className="bg-alt py-16 lg:py-20">
        <Container>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[38px] leading-[1.08] text-ink sm:text-[54px]">{t.title}</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-muted">{t.text}</p>
          <p className="mt-6 text-[12.5px] text-muted/80">{c.brand.poweredBy}</p>
        </Container>
      </section>

      <section id="elevators" className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHead title={t.elevators} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {elevatorCategories.map((cat) => (
              <CategoryCard key={cat.slug} cat={cat} />
            ))}
          </div>
        </Container>
      </section>

      <section id="escalators" className="bg-alt py-16 lg:py-20">
        <Container>
          <SectionHead title={t.escalators} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {escalatorCategories.map((cat) => (
              <CategoryCard key={cat.slug} cat={cat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHead eyebrow={t.modelsEyebrow} title={t.modelsTitle} description={t.modelsText} />
          <div className="mt-10 space-y-px border border-line bg-line">
            {allModels.map((m, i) => (
              <ModelCard key={m.name} model={m} flip={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-alt py-16 lg:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Eyebrow>{t.catalogue.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.catalogue.title}</h2>
            <p className="mt-4 max-w-xl text-[16.5px] leading-[1.8] text-muted">{t.catalogue.text}</p>
            <div className="mt-7">
              <Button href={site.catalogue.path} download={site.catalogue.fileName}>
                {c.cta.downloadOfficial} ↓
              </Button>
              <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-muted">{site.catalogue.sizeLabel}</p>
            </div>
          </div>
          <figure className="flex flex-col items-center gap-3">
            <div className="bg-white p-3.5 shadow-sm ring-1 ring-black/10">
              <QRCodeSVG
                value={catalogueUrl}
                size={132}
                level="M"
                bgColor="#ffffff"
                fgColor="#1c1713"
                title="SJEC catalogue (PDF)"
              />
            </div>
            <figcaption className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
              {c.cta.scanToDownload}
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-night py-16 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-[30px] leading-tight text-white sm:text-[36px]">{t.cta.title}</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-white/65">{t.cta.text}</p>
          </div>
          <Button to="/contact">{c.cta.requestQuote}</Button>
        </Container>
      </section>
    </>
  )
}
