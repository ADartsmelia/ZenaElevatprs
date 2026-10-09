import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import { CheckIcon } from "../components/ui/Icons"
import { useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"

interface Service {
  title: string
  text: string
  points?: string[]
}

const copy = {
  en: {
    metaTitle: "Services — Consultation, Installation, Maintenance & Modernization",
    metaDesc:
      "Complete vertical transportation services in Georgia: consultation and planning, supply, installation, maintenance, repair, modernization, technical support and spare parts.",
    eyebrow: "SERVICES",
    title: "Complete Vertical Transportation Services",
    text: "From initial consultation and product selection to installation, maintenance and modernization, ZENA supports every stage of your project.",
    processEyebrow: "HOW WE PLAN YOUR PROJECT",
    processTitle: "The right elevator, selected right the first time.",
    processText: "Before any commitment, we review your drawings and building requirements to recommend the exact solution.",
    steps: [
      { title: "Shaft inspection", text: "We check the drawings to confirm shaft dimensions." },
      { title: "Load study", text: "We study building type, number of floors and peak load." },
      { title: "Traffic modeling", text: "We calculate peak demand to define speed and capacity." },
      { title: "Product match", text: "We select the exact SJEC model for your needs." },
      { title: "Written proposal", text: "You receive a transparent, itemized proposal." },
    ],
    services: [
      {
        title: "Consultation & Planning",
        text: "We help clients identify the most suitable vertical transportation solution based on the building type, project requirements and traffic analysis.",
        points: ["Building analysis", "Traffic requirements", "Capacity and speed selection", "Shaft and pit coordination", "Support for architects and developers"],
      },
      {
        title: "Supply",
        text: "Supply of elevators, escalators and moving walk solutions from internationally recognized manufacturers.",
        points: ["Equipment supply", "Project coordination"],
      },
      {
        title: "Installation",
        text: "Professional installation and commissioning of vertical transportation systems in accordance with project requirements and safety standards.",
        points: ["Installation", "Testing", "Commissioning", "Handover documentation"],
      },
      {
        title: "Maintenance",
        text: "Preventive maintenance programs designed to ensure reliability, safety and long-term performance.",
        points: ["Scheduled preventive maintenance", "Inspection", "Adjustment", "Performance monitoring", "Service reporting"],
      },
      {
        title: "Repair",
        text: "Fast and professional diagnostics and repair services to restore equipment performance.",
        points: ["Diagnostics", "Component replacement", "Troubleshooting", "24/7 emergency support"],
      },
      {
        title: "Modernization",
        text: "Upgrading existing elevator systems to improve safety, efficiency, comfort and compliance with current standards.",
        points: ["Control systems", "Drives", "Doors", "Cabins", "Safety equipment", "Energy-efficiency improvements"],
      },
      {
        title: "Technical Support",
        text: "Professional technical assistance throughout the entire lifecycle of the equipment.",
      },
      {
        title: "Spare Parts",
        text: "Supply of original spare parts and components for maintenance and repair.",
      },
    ] satisfies Service[],
    cta: {
      title: "Need Support for Your Project?",
      text: "Tell us about your project or existing equipment, and our team will help you identify the right solution.",
    },
  },
  ka: {
    metaTitle: "სერვისები — კონსულტაცია, მონტაჟი, მომსახურება და მოდერნიზაცია",
    metaDesc:
      "ვერტიკალური ტრანსპორტის სრული სერვისები საქართველოში: კონსულტაცია და დაგეგმვა, მიწოდება, მონტაჟი, ტექნიკური მომსახურება, შეკეთება, მოდერნიზაცია, ტექნიკური მხარდაჭერა და სათადარიგო ნაწილები.",
    eyebrow: "სერვისები",
    title: "ვერტიკალური ტრანსპორტის სრული სერვისები",
    text: "პირველადი კონსულტაციიდან და პროდუქტის შერჩევიდან მონტაჟის, მომსახურებისა და მოდერნიზაციის ჩათვლით — ZENA თქვენი პროექტის ყველა ეტაპზე გვერდით გიდგათ.",
    processEyebrow: "როგორ ვგეგმავთ თქვენს პროექტს",
    processTitle: "სწორი ლიფტი, პირველივე ჯერზე სწორად შერჩეული.",
    processText: "ნებისმიერ ვალდებულებამდე ვამოწმებთ თქვენს ნახაზებსა და შენობის მოთხოვნებს, რათა ზუსტი გადაწყვეტა გირჩიოთ.",
    steps: [
      { title: "შახტის შემოწმება", text: "ვამოწმებთ ნახაზებს შახტის ზომების დასადასტურებლად." },
      { title: "დატვირთვის შესწავლა", text: "ვსწავლობთ შენობის ტიპს, სართულების რაოდენობასა და პიკურ დატვირთვას." },
      { title: "მგზავრთნაკადის მოდელირება", text: "ვითვლით პიკურ მოთხოვნას სიჩქარისა და ტვირთამწეობის განსასაზღვრად." },
      { title: "პროდუქტის ზუსტი შერჩევა", text: "ვარჩევთ SJEC-ის ზუსტ მოდელს თქვენი საჭიროებისთვის." },
      { title: "წერილობითი შეთავაზება", text: "იღებთ გამჭვირვალე, დეტალურად გაწერილ კომერციულ წინადადებას." },
    ],
    services: [
      {
        title: "კონსულტაცია და დაგეგმვა",
        text: "ვეხმარებით კლიენტებს, შეარჩიონ ყველაზე შესაფერისი ვერტიკალური ტრანსპორტის გადაწყვეტა შენობის ტიპის, პროექტის მოთხოვნებისა და მგზავრთნაკადის ანალიზის საფუძველზე.",
        points: ["შენობის ანალიზი", "მგზავრთნაკადის მოთხოვნები", "ტვირთამწეობისა და სიჩქარის შერჩევა", "შახტისა და ორმოს კოორდინაცია", "მხარდაჭერა არქიტექტორებისა და დეველოპერებისთვის"],
      },
      {
        title: "მიწოდება",
        text: "ლიფტების, ესკალატორებისა და მოძრავი ბილიკების გადაწყვეტილებების მიწოდება საერთაშორისოდ აღიარებული მწარმოებლებისგან.",
        points: ["აღჭურვილობის მიწოდება", "პროექტის კოორდინაცია"],
      },
      {
        title: "მონტაჟი",
        text: "ვერტიკალური ტრანსპორტის სისტემების პროფესიონალური მონტაჟი და ექსპლუატაციაში გაშვება პროექტის მოთხოვნებისა და უსაფრთხოების სტანდარტების შესაბამისად.",
        points: ["მონტაჟი", "გამოცდა", "ექსპლუატაციაში გაშვება", "ჩაბარების დოკუმენტაცია"],
      },
      {
        title: "ტექნიკური მომსახურება",
        text: "პროფილაქტიკური მომსახურების პროგრამები, რომლებიც უზრუნველყოფს საიმედოობას, უსაფრთხოებასა და გრძელვადიან მუშაობას.",
        points: ["დაგეგმილი პროფილაქტიკური მომსახურება", "ინსპექტირება", "რეგულირება", "მუშაობის მონიტორინგი", "სერვისის ანგარიშგება"],
      },
      {
        title: "შეკეთება",
        text: "სწრაფი და პროფესიონალური დიაგნოსტიკა და შეკეთება აღჭურვილობის მუშაობის აღსადგენად.",
        points: ["დიაგნოსტიკა", "კომპონენტების ჩანაცვლება", "პრობლემის აღმოფხვრა", "24/7 გადაუდებელი მხარდაჭერა"],
      },
      {
        title: "მოდერნიზაცია",
        text: "არსებული ლიფტის სისტემების განახლება უსაფრთხოების, ეფექტურობის, კომფორტისა და მოქმედ სტანდარტებთან შესაბამისობის გასაუმჯობესებლად.",
        points: ["მართვის სისტემები", "ამძრავები", "კარები", "კაბინები", "უსაფრთხოების აღჭურვილობა", "ენერგოეფექტურობის გაუმჯობესება"],
      },
      {
        title: "ტექნიკური მხარდაჭერა",
        text: "პროფესიონალური ტექნიკური დახმარება აღჭურვილობის მთელი სასიცოცხლო ციკლის განმავლობაში.",
      },
      {
        title: "სათადარიგო ნაწილები",
        text: "ორიგინალი სათადარიგო ნაწილებისა და კომპონენტების მიწოდება მომსახურებისა და შეკეთებისთვის.",
      },
    ] satisfies Service[],
    cta: {
      title: "გჭირდებათ მხარდაჭერა თქვენი პროექტისთვის?",
      text: "მოგვიყევით თქვენი პროექტის ან არსებული აღჭურვილობის შესახებ და ჩვენი გუნდი დაგეხმარებათ სწორი გადაწყვეტის პოვნაში.",
    },
  },
} satisfies L<Record<string, unknown>>

export default function Services() {
  const lang = useLang()
  const c = useCommon()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc })

  return (
    <>
      <section className="bg-alt py-16 lg:py-20">
        <Container>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[38px] leading-[1.08] text-ink sm:text-[54px]">{t.title}</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-muted">{t.text}</p>
          <div className="mt-8">
            <Button to="/contact">{c.cta.requestQuote}</Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container>
          <ol className="divide-y divide-line">
            {t.services.map((s: Service, i: number) => (
              <li key={s.title} className="grid gap-6 py-10 md:grid-cols-[80px_1fr_1fr] md:gap-10">
                <span className="font-mono text-[12px] tracking-[0.14em] text-accent-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-[28px] leading-tight text-ink">{s.title}</h2>
                  <p className="mt-3 max-w-md text-[15.5px] leading-[1.75] text-muted">{s.text}</p>
                </div>
                {s.points && (
                  <ul className="grid content-start gap-x-6 gap-y-2.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[14px] leading-[1.5] text-ink/85">
                        <CheckIcon className="mt-0.5 shrink-0 text-accent-text" width={16} height={16} />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-alt py-16 lg:py-20">
        <Container>
          <Eyebrow>{t.processEyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.processTitle}</h2>
          <p className="mt-4 max-w-xl text-[16.5px] leading-[1.75] text-muted">{t.processText}</p>
          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {t.steps.map((s, i) => (
              <li key={s.title} className="bg-card p-6">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">0{i + 1}</span>
                <h3 className="mt-4 text-[21px] leading-tight text-ink">{s.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.7] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-night py-16 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-[30px] leading-tight text-white sm:text-[36px]">{t.cta.title}</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-white/65">{t.cta.text}</p>
          </div>
          <Button to="/contact">{c.cta.contactUs}</Button>
        </Container>
      </section>
    </>
  )
}
