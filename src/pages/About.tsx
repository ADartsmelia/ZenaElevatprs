import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Media from "../components/ui/Media"
import { BoltIcon, CheckIcon, ModernizeIcon, TagIcon, WrenchIcon } from "../components/ui/Icons"

import { useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"

const offerIcons = [TagIcon, WrenchIcon, BoltIcon, ModernizeIcon]

const copy = {
  en: {
    metaTitle: "About ZENA Elevators",
    metaDesc:
      "ZENA Elevators is a Georgian vertical transportation company combining international SJEC technology with professional local project coordination, installation and technical support.",
    eyebrow: "ABOUT ZENA",
    title: "A New Standard in Elevators and Escalators",
    text: "ZENA Elevators is a Georgian vertical transportation company offering the right elevator and escalator solutions for residential, commercial and public buildings.",
    storyEyebrow: "OUR STORY",
    storyTitle: "A new approach in vertical transportation",
    story: [
      "ZENA was founded to establish new standards in vertical transportation in Georgia. We combine international technology with local engineering experience to ensure effective project management, transparent communication and reliable technical service.",
      "As an official SJEC partner, we offer customers a wide choice of elevators, escalators and moving walks, tailored to the needs of different types of buildings and projects.",
    ],
    storyMedia: "ZENA engineers · commissioning walkthrough",
    storyAlt: "Two engineers inspecting an open elevator during a commissioning walkthrough",
    offerEyebrow: "What We Offer",
    offerTitle: "One Company. Four Promises",
    offerText:
      "From the start of construction, choosing the right elevator, maintaining what exists, repairing any brand, or modernizing old systems — ZENA is your trusted partner in Georgia for every elevator need.",
    offer: [
      {
        title: "Sales",
        tag: "Authorized SJEC Partner",
        points: ["MRL, High-Speed, Villa, Freight", "Escalators & Moving Walks", "Traffic Analysis Included", "Transparent Pricing"],
      },
      {
        title: "Technical Service",
        tag: "Any Brand — Monthly Contracts",
        points: ["Otis, Kone, Schindler, Mitsubishi", "Every Brand", "Monthly Service Contracts", "24/7 Emergency Call-Out"],
      },
      {
        title: "Repair",
        tag: "Any Brand — Fast Response",
        points: ["Emergency Breakdown Repair", "Every Brand & Model", "Original & Compatible Parts", "Same-Day Call-Out"],
      },
      {
        title: "Modernization",
        tag: "Any Old Elevator — Any Brand",
        points: ["Control System Upgrade", "Cabin & Door Renewal", "EN81 Safety Standard", "Up to 40% Energy Savings"],
      },
    ],
    cta: { title: "Let's talk about your building.", text: "Whether it's a new installation or a fleet that needs a more reliable partner, we're ready to scope it." },
  },
  ka: {
    metaTitle: "ZENA Elevators-ის შესახებ",
    metaDesc:
      "ZENA Elevators არის ქართული ვერტიკალური ტრანსპორტის კომპანია, რომელიც აერთიანებს SJEC-ის საერთაშორისო ტექნოლოგიას პროექტის პროფესიონალურ ადგილობრივ კოორდინაციას, მონტაჟსა და ტექნიკურ მხარდაჭერასთან.",
    eyebrow: "ZENA-ს შესახებ",
    title: "ახალი სტანდარტი ლიფტებისა და ესკალატორების სფეროში",
    text: "ZENA Elevators არის ქართული ვერტიკალური ტრანსპორტირების კომპანია, რომელიც გთავაზობთ ლიფტებისა და ესკალატორების სწორ გადაწყვეტას - საცხოვრებელი, კომერციული და საზოგადოებრივი შენობებისთვის.",
    storyEyebrow: "ჩვენი ისტორია",
    storyTitle: "ახალი მიდგომა ვერტიკალური ტრანსპორტირების სფეროში",
    story: [
      "ZENA დაარსდა საქართველოში ვერტიკალური ტრანსპორტირების სფეროში ახალი სტანდარტების დასამკვიდრებლად. ჩვენ ვაერთიანებთ საერთაშორისო ტექნოლოგიებსა და ადგილობრივ საინჟინრო გამოცდილებას, რათა უზრუნველვყოთ პროექტების ეფექტიანი მართვა, გამჭვირვალე კომუნიკაცია და საიმედო ტექნიკური მომსახურება.",
      "SJEC-ის ოფიციალური პარტნიორის სტატუსით, მომხმარებლებს ვთავაზობთ ლიფტების, ესკალატორებისა და მოძრავი ბილიკების ფართო არჩევანს, რომელიც მორგებულია სხვადასხვა ტიპის შენობებისა და პროექტების საჭიროებებზე.",
    ],
    storyMedia: "ZENA-ს ინჟინრები · ექსპლუატაციაში გაშვება",
    storyAlt: "ორი ინჟინერი ათვალიერებს გახსნილ ლიფტს ექსპლუატაციაში გაშვების დროს",
    offerEyebrow: "რას გთავაზობთ",
    offerTitle: "ერთი კომპანია - ოთხი დაპირება",
    offerText:
      "მშენებლობის დაწყებისთანავე სწორად ლიფტების შერჩევა, არსებულის მოვლა, ნებისმიერი ბრენდის შეკეთება თუ ძველი სისტემების მოდერნიზაცია — ZENA არის საქართველოში სანდო პარტნიორი ლიფტებთან დაკავშირებულ ყველა საჭიროებაზე.",
    offer: [
      {
        title: "გაყიდვები",
        tag: "SJEC-ის ავტორიზებული პარტნიორი",
        points: ["MRL, მაღალსიჩქარიანი, ვილა, სატვირთო", "ესკალატორები და მოძრავი ბილიკები", "ტრაფიკის ანალიზი", "გამჭვირვალე ფასები"],
      },
      {
        title: "ტექნიკური მომსახურება",
        tag: "ნებისმიერი ბრენდი — ყოველთვიური კონტრაქტები",
        points: ["Otis, Kone, Schindler, Mitsubishi", "ყველა ბრენდი", "ყოველთვიური სერვის-კონტრაქტები", "24/7 გადაუდებელი გამოძახება"],
      },
      {
        title: "შეკეთება",
        tag: "ნებისმიერი ბრენდი — სწრაფი რეაგირება",
        points: ["გადაუდებელი ავარიული შეკეთება", "ყველა ბრენდი და მოდელი", "ორიგინალი და თავსებადი ნაწილები", "გამოძახება იმავე დღეს"],
      },
      {
        title: "მოდერნიზაცია",
        tag: "ნებისმიერი ძველი ლიფტი — ნებისმიერი ბრენდი",
        points: ["მართვის სისტემის განახლება", "კაბინისა და კარის განახლება", "უსაფრთხოების სტანდარტი EN81", "ენერგოდანახარჯების 40%-მდე შემცირება"],
      },
    ],
    cta: { title: "განვიხილოთ თქვენი პროექტი", text: "იქნება ეს ახალი მონტაჟი, მოდერნიზაცია თუ ტექნიკური მომსახურება — ჩვენი გუნდი მზად არის დაგეხმაროთ სწორი გადაწყვეტის პოვნაში." },
  },
} satisfies L<Record<string, unknown>>

export default function About() {
  const lang = useLang()
  const c = useCommon()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc })

  return (
    <>
      <section className="bg-alt py-16 lg:py-24">
        <Container>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[38px] leading-[1.08] text-ink sm:text-[56px]">{t.title}</h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.85] text-muted">{t.text}</p>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>{t.storyEyebrow}</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.storyTitle}</h2>
            <div className="mt-6 space-y-4 text-[16.5px] leading-[1.85] text-muted">
              {t.story.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <Media src="/images/about-story.webp" alt={t.storyAlt} label={t.storyMedia} className="aspect-[4/3] w-full" />
        </Container>
      </section>

      <section className="bg-night py-16 text-white lg:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
            <div>
              <Eyebrow onDark>{t.offerEyebrow}</Eyebrow>
              <h2 className="mt-3 max-w-xl text-[32px] leading-[1.12] text-white sm:text-[40px]">{t.offerTitle}</h2>
            </div>
            <p className="text-[16.5px] leading-[1.8] text-white/65">{t.offerText}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
            {t.offer.map((o, i) => {
              const Icon = offerIcons[i]
              return (
                <article
                  key={o.title}
                  className="group relative flex flex-col overflow-hidden border border-white/10 bg-night-2 p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/60 lg:row-span-3 lg:grid lg:grid-rows-subgrid"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold via-[#e2bd82] to-gold/30"
                  />
                  <header>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 text-[#d1a15e] transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-night">
                        <Icon width={22} height={22} />
                      </span>
                      <span className="h-px flex-1 bg-white/12" aria-hidden />
                      <span className="font-mono text-[12px] tracking-[0.18em] text-[#d1a15e]" aria-hidden>
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 text-[25px] leading-[1.2] text-white">{o.title}</h3>
                  </header>
                  <p className="mt-4 mb-1 border-l-2 border-gold pl-3 text-[13.5px] leading-[1.55] text-[#d1a15e]">
                    {o.tag}
                  </p>
                  <ul className="mt-6 space-y-3.5 border-t border-white/10 pt-6">
                    {o.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[14.5px] leading-[1.5] text-white/80">
                        <CheckIcon className="mt-0.5 shrink-0 text-[#d1a15e]" width={16} height={16} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container className="flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-[30px] leading-tight text-ink sm:text-[38px]">{t.cta.title}</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-muted">{t.cta.text}</p>
          </div>
          <Button to="/contact">{c.cta.requestQuote}</Button>
        </Container>
      </section>
    </>
  )
}
