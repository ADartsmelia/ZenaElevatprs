import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Media from "../components/ui/Media"
import SjecBadge from "../components/ui/SjecBadge"
import { useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"
import { site } from "../config/site"

const copy = {
  en: {
    metaTitle: "About ZENA Elevators",
    metaDesc:
      "ZENA Elevators is a Georgian vertical transportation company combining international SJEC technology with professional local project coordination, installation and technical support.",
    eyebrow: "ABOUT ZENA",
    title: "A New Standard for Vertical Transportation in Georgia",
    text: "ZENA Elevators is a Georgian vertical transportation company providing elevator and escalator solutions for residential, commercial and public buildings. We combine international technology with professional local project coordination, installation and technical support.",
    storyEyebrow: "OUR STORY",
    storyTitle: "A more accountable approach to elevator projects.",
    story: [
      "ZENA was established to provide the Georgian market with a more accountable and technically focused approach to elevator projects. Our goal is to combine reliable international equipment with clear project coordination, transparent communication and responsive local support.",
      "Through cooperation with SJEC, we provide access to a broad portfolio of elevator, escalator and moving-walk solutions designed for different building types and traffic requirements.",
    ],
    storyMedia: "ZENA engineers · commissioning walkthrough",
    commitEyebrow: "HOW WE WORK",
    commitTitle: "Three commitments behind every project.",
    commitments: [
      { title: "Transparent Project Management", text: "Clear specifications, commercial terms and project responsibilities from the beginning." },
      { title: "Professional Local Coordination", text: "Local support throughout planning, installation, commissioning and after-sales service." },
      { title: "International Technology", text: "Elevator and escalator solutions developed according to recognized international manufacturing and safety standards." },
    ],
    sjecEyebrow: "THE PARTNERSHIP",
    sjecTitle: "Why SJEC.",
    sjecText: `SJEC is one of the world's leading elevator and escalator manufacturers, founded in 1992. Its systems operate in ${site.sjecCountries} countries — from metro systems and airports to pavilions at the Shanghai World Expo. As SJEC's authorized partner in Georgia, ZENA brings this technology to the local market, supported by its own local team.`,
    sjecNote: "Certifications refer to SJEC manufacturing and quality systems.",
    facts: [
      { value: "1992", label: "SJEC founded" },
      { value: site.sjecCountries, label: "countries with SJEC installations" },
      { value: "24/7", label: "ZENA service support" },
    ],
    cta: { title: "Let's talk about your building.", text: "Whether it's a new installation or a fleet that needs a more reliable partner, we're ready to scope it." },
  },
  ka: {
    metaTitle: "ZENA Elevators-ის შესახებ",
    metaDesc:
      "ZENA Elevators არის ქართული ვერტიკალური ტრანსპორტის კომპანია, რომელიც აერთიანებს SJEC-ის საერთაშორისო ტექნოლოგიას პროექტის პროფესიონალურ ადგილობრივ კოორდინაციას, მონტაჟსა და ტექნიკურ მხარდაჭერასთან.",
    eyebrow: "ZENA-ს შესახებ",
    title: "ახალი სტანდარტი ვერტიკალური ტრანსპორტისთვის საქართველოში",
    text: "ZENA Elevators არის ქართული ვერტიკალური ტრანსპორტის კომპანია, რომელიც გთავაზობთ ლიფტებისა და ესკალატორების გადაწყვეტილებებს საცხოვრებელი, კომერციული და საზოგადოებრივი შენობებისთვის. ჩვენ ვაერთიანებთ საერთაშორისო ტექნოლოგიას პროექტის პროფესიონალურ ადგილობრივ კოორდინაციასთან, მონტაჟსა და ტექნიკურ მხარდაჭერასთან.",
    storyEyebrow: "ჩვენი ისტორია",
    storyTitle: "უფრო პასუხისმგებლიანი მიდგომა ლიფტის პროექტებისადმი.",
    story: [
      "ZENA დაარსდა იმისთვის, რომ ქართულ ბაზარს ლიფტის პროექტებისადმი უფრო პასუხისმგებლიანი და ტექნიკურად ორიენტირებული მიდგომა შესთავაზოს. ჩვენი მიზანია საიმედო საერთაშორისო აღჭურვილობა გავაერთიანოთ პროექტის მკაფიო კოორდინაციასთან, გამჭვირვალე კომუნიკაციასა და ოპერატიულ ადგილობრივ მხარდაჭერასთან.",
      "SJEC-თან თანამშრომლობის წყალობით, ჩვენ გვაქვს წვდომა ლიფტების, ესკალატორებისა და მოძრავი ბილიკების ფართო პორტფოლიოზე, რომელიც სხვადასხვა ტიპის შენობისა და მგზავრთნაკადის მოთხოვნებისთვის არის შექმნილი.",
    ],
    storyMedia: "ZENA-ს ინჟინრები · ექსპლუატაციაში გაშვება",
    commitEyebrow: "როგორ ვმუშაობთ",
    commitTitle: "სამი ვალდებულება ყოველი პროექტის უკან.",
    commitments: [
      { title: "გამჭვირვალე პროექტის მართვა", text: "მკაფიო სპეციფიკაციები, კომერციული პირობები და პროექტის პასუხისმგებლობები თავიდანვე." },
      { title: "პროფესიონალური ადგილობრივი კოორდინაცია", text: "ადგილობრივი მხარდაჭერა დაგეგმვის, მონტაჟის, ექსპლუატაციაში გაშვებისა და გაყიდვის შემდგომი სერვისის განმავლობაში." },
      { title: "საერთაშორისო ტექნოლოგია", text: "ლიფტებისა და ესკალატორების გადაწყვეტილებები, შექმნილი აღიარებული საერთაშორისო საწარმოო და უსაფრთხოების სტანდარტების შესაბამისად." },
    ],
    sjecEyebrow: "პარტნიორობა",
    sjecTitle: "რატომ SJEC.",
    sjecText: `SJEC არის ლიფტებისა და ესკალატორების ერთ-ერთი წამყვანი მსოფლიო მწარმოებელი, დაარსებული 1992 წელს. მისი სისტემები ${site.sjecCountries} ქვეყანაში მუშაობს — მეტროსა და აეროპორტებიდან შანხაის World Expo-ს პავილიონებამდე. როგორც SJEC-ის ავტორიზებული პარტნიორი საქართველოში, ZENA ამ ტექნოლოგიას ადგილობრივ ბაზარზე ამკვიდრებს საკუთარი ადგილობრივი გუნდის მხარდაჭერით.`,
    sjecNote: "სერტიფიკატები SJEC-ის წარმოებისა და ხარისხის მართვის სისტემებს ეხება.",
    facts: [
      { value: "1992", label: "SJEC-ის დაარსება" },
      { value: site.sjecCountries, label: "ქვეყანა SJEC-ის სისტემებით" },
      { value: "24/7", label: "ZENA-ს სერვისის მხარდაჭერა" },
    ],
    cta: { title: "განვიხილოთ თქვენი შენობა.", text: "ახალი მონტაჟი იქნება ეს თუ უფრო საიმედო პარტნიორის მაძიებელი არსებული პარკი — მზად ვართ, შევაფასოთ." },
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
          <Media label={t.storyMedia} className="aspect-[4/3] w-full" />
        </Container>
      </section>

      <section className="bg-alt py-16 lg:py-24">
        <Container>
          <Eyebrow>{t.commitEyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-xl text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.commitTitle}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.commitments.map((m, i) => (
              <div key={m.title} className="border border-line bg-card p-7">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">0{i + 1}</span>
                <h3 className="mt-4 text-[24px] leading-tight text-ink">{m.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="border border-line bg-alt p-8 sm:p-10">
            <SjecBadge />
            <p className="mt-5 font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
              {c.brand.manufacturingPartner}
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {t.facts.map((f) => (
                <div key={f.label}>
                  <dd className="font-serif text-[34px] leading-none text-ink">{f.value}</dd>
                  <dt className="mt-2 text-[12px] leading-snug text-muted">{f.label}</dt>
                </div>
              ))}
            </dl>
            <ul className="mt-8 flex flex-wrap gap-2.5 font-mono text-[11px] tracking-[0.1em] text-muted">
              {["ISO 9001", "ISO 14001", "ISO 45001", "CE"].map((b) => (
                <li key={b} className="border border-line bg-card px-3 py-2">
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[12px] text-muted/80">{t.sjecNote}</p>
          </div>
          <div>
            <Eyebrow>{t.sjecEyebrow}</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.sjecTitle}</h2>
            <p className="mt-5 text-[16.5px] leading-[1.85] text-muted">{t.sjecText}</p>
          </div>
        </Container>
      </section>

      <section className="bg-night py-16 text-white lg:py-20">
        <Container className="flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-[30px] leading-tight text-white sm:text-[38px]">{t.cta.title}</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-white/65">{t.cta.text}</p>
          </div>
          <Button to="/contact">{c.cta.requestQuote}</Button>
        </Container>
      </section>
    </>
  )
}
