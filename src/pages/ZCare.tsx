import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import { CheckIcon } from "../components/ui/Icons"
import { useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"

interface Item {
  title: string
  text: string
}

/* Source: the ZENA company presentation (Z-Care slides), EN and KA versions. */
const copy = {
  en: {
    metaTitle: "Z-Care — Smart Care with AI & 24/7 Remote Monitoring",
    metaDesc:
      "Z-Care combines AI, IoT and 24/7 remote monitoring to protect the reliability, safety and value of your elevators — available as an upgrade to ZENA's post-warranty maintenance program.",
    eyebrow: "Z-CARE · REMOTE MONITORING",
    title: "Smart care for your elevators.",
    text: "AI, IoT and 24/7 remote monitoring protect the reliability and safety of your elevators.",
    note: "Z-Care is available as an upgrade to our post-warranty maintenance program.",
    monitorEyebrow: "WHAT Z-CARE WATCHES",
    monitorTitle: "Every signal that matters, continuously.",
    monitor: [
      { title: "Running performance", text: "Continuous real-time analysis of elevator operation." },
      { title: "Door cycles", text: "Monitoring door open/close frequency and function." },
      { title: "Motor health", text: "Early detection of overheating and wear." },
      { title: "Speed & comfort", text: "Assessing ride smoothness and stability." },
      { title: "Fault history", text: "Complete, automatic logging of every event." },
      { title: "Electrical parameters", text: "Monitoring voltage, current and power use." },
      { title: "Safety systems", text: "Continuous automatic checks on safety devices." },
      { title: "Component lifespan", text: "Forecasting the expected life of individual parts." },
    ] satisfies Item[],
    riskEyebrow: "PREDICTIVE CARE",
    riskTitle: "We spot the risk before it breaks.",
    riskText:
      "AI continuously analyzes the data and flags early signals, helping us schedule maintenance before failure.",
    risk: [
      { title: "Door wear", text: "Early detection of wear and faults." },
      { title: "Motor degradation", text: "Forecasting gradual performance decline." },
      { title: "Brake faults", text: "Continuous monitoring of this critical part." },
      { title: "Power fluctuations", text: "Detecting voltage and current anomalies." },
      { title: "Rising vibration", text: "Early signal of abnormal vibration." },
      { title: "24/7 monitoring", text: "Instant alerts and diagnostics." },
    ] satisfies Item[],
    gainEyebrow: "WHAT YOU GAIN",
    gainTitle: "Reliability you can plan around.",
    gain: [
      { title: "Maximum uptime", text: "Minimizing unforeseen faults and ensuring reliable operation." },
      { title: "Early forecasting", text: "AI predicts a problem before it becomes a failure." },
      { title: "Faster response", text: "Remote diagnostics let us equip technical staff in advance with the right tools and spare parts." },
      { title: "Lower costs", text: "Condition-based care reduces costly emergency repairs." },
      { title: "Passenger safety", text: "Continuous monitoring catches abnormal conditions early." },
      { title: "Equipment longevity", text: "Early intervention reduces wear on critical parts." },
      { title: "Full transparency", text: "Owners get a complete picture of the elevators' condition and history." },
      { title: "Future-ready technology", text: "AI, IoT and cloud computing in one ecosystem — for your building's lasting reliability." },
    ] satisfies Item[],
    cta: {
      title: "Interested in Z-Care for your building?",
      text: "Tell us about your elevators and we will explain how Z-Care can be added to your maintenance program.",
    },
  },
  ka: {
    metaTitle: "Z-Care — ჭკვიანი მოვლა AI-თი და 24/7 დისტანციური მონიტორინგით",
    metaDesc:
      "Z-Care აერთიანებს ხელოვნურ ინტელექტს, IoT-სა და 24/7 დისტანციურ მონიტორინგს თქვენი ლიფტების საიმედოობის, უსაფრთხოებისა და ღირებულების დასაცავად — ხელმისაწვდომია, როგორც განახლება ZENA-ს საგარანტიო-შემდგომ მოვლის პროგრამაში.",
    eyebrow: "Z-CARE · დისტანციური მონიტორინგი",
    title: "ჭკვიანი მოვლა თქვენი ლიფტებისთვის.",
    text: "ხელოვნური ინტელექტი, IoT და 24/7 დისტანციური მონიტორინგი იცავს თქვენი ლიფტების საიმედოობასა და უსაფრთხოებას.",
    note: "Z-Care ხელმისაწვდომია, როგორც განახლება ჩვენს საგარანტიო-შემდგომ მოვლის პროგრამაში.",
    monitorEyebrow: "რას აკვირდება Z-CARE",
    monitorTitle: "ყველა მნიშვნელოვანი სიგნალი, უწყვეტად.",
    monitor: [
      { title: "მუშაობის ხარისხი", text: "ლიფტის რეალურ დროში ფუნქციონირების უწყვეტი ანალიზი." },
      { title: "კარის ციკლები", text: "კარის გახსნა-დახურვის სიხშირისა და გამართულობის კონტროლი." },
      { title: "ძრავის მდგომარეობა", text: "გადახურებისა და ცვეთის ადრეული გამოვლენა." },
      { title: "სიჩქარე და კომფორტი", text: "მგზავრობის სიგლუვისა და სტაბილურობის შეფასება." },
      { title: "გაუმართაობათა ისტორია", text: "ყველა შემთხვევის სრული, ავტომატური აღრიცხვა." },
      { title: "ელექტრული პარამეტრები", text: "ძაბვის, დენისა და ენერგომოხმარების მონიტორინგი." },
      { title: "უსაფრთხოების სისტემა", text: "დამცავი მოწყობილობების უწყვეტი ავტომატური შემოწმება." },
      { title: "კომპონენტების რესურსი", text: "ცალკეული ნაწილების მოსალოდნელი ვადის პროგნოზირება." },
    ] satisfies Item[],
    riskEyebrow: "პროგნოზირებადი მოვლა",
    riskTitle: "ვხედავთ რისკს დაზიანებამდე.",
    riskText:
      "AI მუდმივად აანალიზებს მონაცემებს და ავლენს ადრეულ სიგნალებს, რაც გვეხმარება მოვლა დავგეგმოთ დაზიანებამდე.",
    risk: [
      { title: "კარის ცვეთა", text: "ცვეთისა და ხარვეზების ადრეული აღმოჩენა." },
      { title: "ძრავის გაუარესება", text: "მუშაობის თანდათანობითი კლების პროგნოზი." },
      { title: "მუხრუჭის ხარვეზი", text: "კრიტიკული კვანძის მუდმივი მონიტორინგი." },
      { title: "დენის რყევები", text: "ძაბვისა და დენის ანომალიების აღმოჩენა." },
      { title: "ვიბრაციის მატება", text: "არანორმალური რხევის ადრეული სიგნალი." },
      { title: "24/7 მონიტორინგი", text: "მყისიერი შეტყობინება და დიაგნოსტიკა." },
    ] satisfies Item[],
    gainEyebrow: "რას იღებთ",
    gainTitle: "საიმედოობა, რომელზეც შეგიძლიათ დაგეგმოთ.",
    gain: [
      { title: "მაქსიმალური ხელმისაწვდომობა", text: "გაუთვალისწინებელი ხარვეზების მინიმუმამდე დაყვანა და საიმედო ექსპლუატაცია." },
      { title: "ადრეული პროგნოზირება", text: "AI პროგნოზირებს პრობლემას დაზიანებამდე" },
      { title: "სწრაფი რეაგირება", text: "დისტანციური დიაგნოსტიკის გამოყენება უზრუნველყოფს ტექნიკური პერსონალის წინასწარ აღჭურვას შესაბამისი ინვენტარითა და სათადარიგო ნაწილებით" },
      { title: "დაბალი ხარჯები", text: "მდგომარეობაზე დაფუძნებული მოვლა ამცირებს ძვირადღირებულ, გადაუდებელ შეკეთებებს." },
      { title: "მგზავრთა უსაფრთხოება", text: "უწყვეტი მონიტორინგი ავლენს არანორმალურ პირობებს დროულად." },
      { title: "მოწყობილობის ხანგრძლივობა", text: "ადრეული ჩარევა ამცირებს კრიტიკული კომპონენტების ცვეთას." },
      { title: "სრული გამჭვირვალობა", text: "მესაკუთრეებს გააჩნიათ სრული სურათი ლიფტების მდგომარეობასა და ისტორიაზე." },
      { title: "მომავლისთვის მზა ტექნოლოგია", text: "AI, IoT და ღრუბლოვანი გამოთვლები ერთიან ეკოსისტემაში — თქვენი შენობის ხანგრძლივი საიმედოობისთვის." },
    ] satisfies Item[],
    cta: {
      title: "გაინტერესებთ Z-Care თქვენი შენობისთვის?",
      text: "მოგვიყევით თქვენი ლიფტების შესახებ და აგიხსნით, როგორ დაემატოს Z-Care თქვენს მომსახურების პროგრამას.",
    },
  },
} satisfies L<Record<string, unknown>>

/** Decorative heartbeat line: the "monitoring" idea without showing any invented data. */
function Pulse() {
  return (
    <svg viewBox="0 0 600 90" className="zc-pulse w-full max-w-md text-gold" fill="none" aria-hidden="true">
      <path
        d="M0 46 H170 L196 46 L214 12 L240 80 L262 30 L280 46 H600"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  )
}

export default function ZCare() {
  const lang = useLang()
  const c = useCommon()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc })

  return (
    <>
      <section className="bg-night py-20 text-white lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Eyebrow onDark>{t.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[42px] leading-[1.05] text-white sm:text-[60px]">{t.title}</h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.8] text-white/70">{t.text}</p>
            <p className="mt-5 max-w-xl border-l-2 border-gold pl-4 text-[14px] leading-relaxed text-white/60">
              {t.note}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact">{c.cta.requestQuote}</Button>
              <Button to="/services" variant="ghostDark">
                {c.cta.exploreServices} →
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <span className="font-serif text-[88px] leading-none text-white/90 sm:text-[120px]">
              Z<span className="text-[#d1a15e]">-</span>Care
            </span>
            <Pulse />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <Eyebrow>{t.monitorEyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.monitorTitle}</h2>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {t.monitor.map((m: Item, i: number) => (
              <div key={m.title} className="bg-card p-6">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[22px] leading-tight text-ink">{m.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-night-2 py-16 text-white lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow onDark>{t.riskEyebrow}</Eyebrow>
            <h2 className="mt-3 text-[34px] leading-[1.12] text-white sm:text-[44px]">{t.riskTitle}</h2>
            <p className="mt-5 max-w-md text-[16.5px] leading-[1.8] text-white/65">{t.riskText}</p>
          </div>
          <ul className="divide-y divide-white/10 border border-white/15">
            {t.risk.map((r: Item, i: number) => (
              <li key={r.title} className="flex gap-5 px-6 py-4">
                <span className="font-mono text-[11px] text-[#d1a15e]">0{i + 1}</span>
                <div>
                  <p className="text-[16px] text-white">{r.title}</p>
                  <p className="mt-0.5 text-[13.5px] text-white/55">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-alt py-16 lg:py-24">
        <Container>
          <Eyebrow>{t.gainEyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.gainTitle}</h2>
          <ul className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {t.gain.map((g: Item) => (
              <li key={g.title} className="flex gap-4">
                <CheckIcon className="mt-1 shrink-0 text-accent-text" width={20} height={20} />
                <div>
                  <h3 className="text-[22px] leading-tight text-ink">{g.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.7] text-muted">{g.text}</p>
                </div>
              </li>
            ))}
          </ul>
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
