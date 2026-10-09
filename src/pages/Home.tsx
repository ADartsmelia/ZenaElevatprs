import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import SectionHead from "../components/ui/SectionHead"
import Button, { ArrowLink } from "../components/ui/Button"
import Media from "../components/ui/Media"
import SjecBadge from "../components/ui/SjecBadge"
import { CheckIcon } from "../components/ui/Icons"
import { LogoMark } from "../components/brand/Logo"
import QuoteForm from "../components/forms/QuoteForm"
import { LocLink, useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"
import { site } from "../config/site"
import { getCategory } from "../data/products"
import { categoryLabels, formatPostMeta, recentPosts } from "../data/blog"

const copy = {
  en: {
    metaTitle: "ZENA Elevators — Elevator & Escalator Solutions in Georgia",
    metaDesc:
      "Authorized SJEC partner in Georgia. Elevator and escalator solutions for residential, commercial and public buildings — consultation, supply, installation, modernization and long-term service.",
    hero: {
      eyebrow: "SJEC PARTNER · GEORGIA",
      line1: "You're not buying an elevator.",
      line2: "You're choosing a",
      accent: "partner.",
      text: "We offer elevators and escalators for residential, commercial and public buildings — from technical consultation, procurement and supply to installation, modernization and long-term service.",
      benefits: ["International Technology", "Procurement", "Professional Installation", "Tailored Solutions", "Local Support"],
      alt: "Architectural sketch of an atrium with an escalator and a glass elevator",
      card: "Countries with SJEC installations",
      media: "escalator · airport atrium · long-exposure motion",
    },
    trust: {
      title: "Certified & Trusted",
      sub: "SJEC Manufacturing Standards",
      note: "Certifications refer to SJEC manufacturing and quality systems.",
      stat: "countries with SJEC installations",
    },
    products: {
      eyebrow: "OFFICIAL SJEC COLLECTIONS",
      title: "Our Products",
      sub: "Elevators and escalators for residential, commercial, healthcare, hospitality and public infrastructure projects.",
      portfolio: "Explore Our Product Portfolio",
      portfolioSub: "Official SJEC Collections",
      escalators: {
        name: "Escalators & Moving Walks",
        short: "Commercial and heavy-duty escalators, passenger conveyors and trolley conveyors for malls, transit and airports.",
        media: "escalator · shopping mall",
      },
    },
    services: {
      eyebrow: "WHAT WE DO",
      title: "Our Services",
      sub: "ZENA supports every stage of the vertical transportation lifecycle.",
      items: [
        { title: "Technical Consultation & Planning", text: "Full passenger-traffic analysis and correct shaft planning." },
        { title: "Procurement & Installation", text: "Equipment procurement, supply, installation, handover and commissioning." },
        { title: "Maintenance & Repair", text: "Preventive inspection, diagnostics and repair, with 24/7 emergency support." },
        { title: "Modernization", text: "Replacing outdated systems with new ones, for safety, efficiency and comfort." },
      ],
    },
    zcare: {
      eyebrow: "Z-CARE · REMOTE MONITORING",
      title: "We spot the risk before it breaks.",
      text: "AI, IoT and 24/7 remote monitoring protect the reliability and safety of your elevators — available as an upgrade to our post-warranty maintenance program.",
      items: [
        { title: "Maximum uptime", text: "Minimizing unforeseen faults and ensuring reliable operation." },
        { title: "Early forecasting", text: "AI predicts a problem before it becomes a failure." },
        { title: "Faster response", text: "Remote diagnostics let us equip technical staff in advance with the right tools and spare parts." },
        { title: "Full transparency", text: "Owners get a complete picture of the elevators' condition and history." },
      ],
    },
    why: {
      eyebrow: "WHY ZENA",
      title: "Who We Are and What Sets ZENA Apart",
      paras: [
        "An elevator is not just a technical product — it is an essential part of a building that serves people every day. That is why we approach every project with special attention, responsibility and care.",
        "There are many excellent elevator brands known globally. However, ZENA's main advantage is our local team, which knows the Georgian market and customer needs well and makes decisions quickly.",
        `We work with international technology partners, including SJEC — one of the world's leading elevator manufacturers, whose products are TÜV-certified and present in ${site.sjecCountries} countries. You receive international-standard technology and quality in the local market, supported by a team that is always available.`,
      ],
      expectTitle: "What to expect from us",
      expect: [
        "A professional team with many years of experience in vertical transportation",
        "Fast and effective communication",
        "Competitive and transparent pricing",
        "Flexible timelines for delivery and installation",
        "A long-term partnership — our relationship doesn't end with installation, it starts right there",
      ],
      pillars: [
        { title: "Project-specific engineering", text: "Every recommendation starts with your building — shaft, passenger traffic and purpose — not with pricing." },
        { title: "Transparent commercial proposals", text: "Transparent commercial policy." },
        { title: "International technology", text: "Products from our international manufacturing partners." },
        { title: "Local team and constant support", text: "A team that knows the local market well and stays with you after project handover." },
      ],
    },
    blog: {
      eyebrow: "FROM THE BLOG",
      title: "From Our Blog",
      all: "All articles",
    },
    contact: {
      eyebrow: "REQUEST A QUOTE",
      title: "Let's discuss your project.",
      text: "Tell us about your building, project stage and technical requirements. Our team will review the information and contact you shortly to find the most suitable vertical transportation solution.",
      tel: "TEL",
      mail: "EML",
      loc: "LOC",
    },
  },
  ka: {
    metaTitle: "ZENA Elevators - ლიფტებისა და ესკალატორების გადაწყვეტილებები საქართველოში",
    metaDesc:
      "SJEC-ის ავტორიზებული პარტნიორი საქართველოში. ლიფტებისა და ესკალატორების გადაწყვეტილებები საცხოვრებელი, კომერციული და საზოგადოებრივი შენობებისთვის - კონსულტაცია, მიწოდება, მონტაჟი, მოდერნიზაცია და გრძელვადიანი სერვისი.",
    hero: {
      eyebrow: "SJEC-ის პარტნიორი · საქართველო",
      line1: "თქვენ ლიფტს არ ყიდულობთ.",
      line2: "თქვენ ირჩევთ",
      accent: "პარტნიორს.",
      text: "გთავაზობთ ლიფტებისა და ესკალატორებს საცხოვრებელი, კომერციული და საზოგადოებრივი შენობებისთვის - ტექნიკური კონსულტაციიდან, შესყიდვიდან და მიწოდებიდან მონტაჟის, მოდერნიზაციისა და გრძელვადიანი სერვისის ჩათვლით.",
      benefits: ["საერთაშორისო ტექნოლოგია", "შესყიდვა", "პროფესიონალური მონტაჟი", "ინდივიდუალური გადაწყვეტილებები", "ადგილობრივი მხარდაჭერა"],
      alt: "არქიტექტურული ესკიზი: ატრიუმი ესკალატორითა და მინის ლიფტით",
      card: "ქვეყანა SJEC-ის სისტემებით",
      media: "ესკალატორი · აეროპორტის ატრიუმი",
    },
    trust: {
      title: "სერტიფიცირებული და სანდო",
      sub: "SJEC-ის წარმოების სტანდარტები",
      note: "სერტიფიკატები SJEC-ის წარმოებისა და ხარისხის მართვის სისტემებს ეხება.",
      stat: "ქვეყანა SJEC-ის სისტემებით",
    },
    products: {
      eyebrow: "SJEC-ის ოფიციალური კოლექციები",
      title: "ჩვენი პროდუქტები",
      sub: "ლიფტების და ესკალატორები: საცხოვრებელი, კომერციული, სამედიცინო, სასტუმრო და საზოგადოებრივი ინფრასტრუქტურის პროექტებისთვის.",
      portfolio: "გაეცანით ჩვენი პროდუქტის პორტფოლიოს",
      portfolioSub: "SJEC-ის ოფიციალური კოლექციები",
      escalators: {
        name: "ესკალატორები და მოძრავი ბილიკები",
        short: "კომერციული და მძიმე რეჟიმის ესკალატორები, სამგზავრო და ეტლების კონვეიერები სავაჭრო ცენტრებისთვის, ტრანსპორტისა და აეროპორტებისთვის.",
        media: "ესკალატორი · სავაჭრო ცენტრი",
      },
    },
    services: {
      eyebrow: "რას ვაკეთებთ",
      title: "ჩვენი სერვისები",
      sub: "ZENA გვერდით გიდგათ ვერტიკალური ტრანსპორტის სასიცოცხლო ციკლის ყველა ეტაპზე.",
      items: [
        { title: "ტექნიკური კონსულტაცია და დაგეგმვა", text: "მგზავრთნაკადების სრული ანალიზი და შახტის სწორად დაგეგმარება." },
        { title: "შესყიდვა და მონტაჟი", text: "დანადგარის შესყიდვა, მიწოდება, მონტაჟი, ჩაბარება და ექსპლუატაციაში გაშვება." },
        { title: "ტექნიკური მომსახურება და შეკეთება", text: "პრევენციული შემოწმება, დიაგნოსტიკა და შეკეთება, 24/7 გადაუდებელი მხარდაჭერით." },
        { title: "მოდერნიზაცია", text: "ძველი სისტემების ახლით ჩანაცვლება, უსაფრთხოების, ეფექტურობისა და კომფორტისთვის." },
      ],
    },
    zcare: {
      eyebrow: "Z-CARE · დისტანციური მონიტორინგი",
      title: "ვხედავთ რისკს დაზიანებამდე.",
      text: "ხელოვნური ინტელექტი, IoT და 24/7 დისტანციური მონიტორინგი იცავს თქვენი ლიფტების საიმედოობასა და უსაფრთხოებას - ხელმისაწვდომია, როგორც განახლება ჩვენს საგარანტიო-შემდგომ მოვლის პროგრამაში.",
      items: [
        { title: "მაქსიმალური ხელმისაწვდომობა", text: "გაუთვალისწინებელი ხარვეზების მინიმუმამდე დაყვანა და საიმედო ექსპლუატაცია." },
        { title: "ადრეული პროგნოზირება", text: "AI პროგნოზირებს პრობლემას დაზიანებამდე" },
        { title: "სწრაფი რეაგირება", text: "დისტანციური დიაგნოსტიკის გამოყენება უზრუნველყოფს ტექნიკური პერსონალის წინასწარ აღჭურვას შესაბამისი ინვენტარითა და სათადარიგო ნაწილებით" },
        { title: "სრული გამჭვირვალობა", text: "მესაკუთრეებს გააჩნიათ სრული სურათი ლიფტების მდგომარეობასა და ისტორიაზე." },
      ],
    },
    why: {
      eyebrow: "რატომ ZENA",
      title: "ვინ ვართ და რა გამოარჩევს ZENA-ს ბაზარზე",
      paras: [
        "ლიფტი მხოლოდ ტექნიკური პროდუქტი არ არის - ის შენობის მნიშვნელოვანი ნაწილია, რომელიც ყოველდღიურად ემსახურება ადამიანებს. სწორედ ამიტომ, თითოეულ პროექტს განსაკუთრებული ყურადღებით, პასუხისმგებლობითა და ზრუნვით ვუდგებით.",
        "მსოფლიოში ცნობილია არაერთი შესანიშნავი ლიფტის ბრენდი. თუმცა ZENA-ს მთავარი უპირატესობა არის ადგილობრივი გუნდი, რომელიც კარგად იცნობს ქართულ ბაზარს, მომხმარებლის საჭიროებებს და გადაწყვეტილებებს სწრაფად იღებს.",
        `ჩვენ გვყავს საერთაშორისო ტექნოლოგიური პარტნიორები, მათ შორის SJEC - მსოფლიოში ლიფტების ერთ-ერთი წამყვანი მწარმოებელი, რომლის პროდუქტი TÜV-ით არის სერტიფიცირებული და წარმოდგენილია ${site.sjecCountries} ქვეყანაში. თქვენ იღებთ საერთაშორისო დონის ტექნოლოგიასა და ხარისხს ადგილობრივ ბაზარზე, იმ გუნდის მხარდაჭერით, რომელიც ყოველთვის ხელმისაწვდომია.`,
      ],
      expectTitle: "რას ელოდოთ ჩვენგან",
      expect: [
        "მრავალწლიანი გამოცდილების მქონე პროფესიონალ გუნდს ვერტიკალური ტრანსპორტირების სფეროში",
        "სწრაფ და ეფექტურ კომუნიკაციას",
        "კონკურენტულ და გამჭვირვალე ფასებს",
        "მიწოდებისა და ინსტალაციის მოქნილ ვადებს",
        "გრძელვადიან პარტნიორობას - ჩვენი ურთიერთობა ლიფტის მონტაჟით არ სრულდება, პირიქით, სწორედ აქედან იწყება",
      ],
      pillars: [
        { title: "პროექტზე მორგებული ინჟინერია", text: "ყოველი რეკომენდაცია იწყება თქვენი შენობით - შახტით, მგზავრთნაკადით, დანიშნულებითა და არა განფასებით." },
        { title: "გამჭვირვალე კომერციული წინადადებები", text: "გამჭვირვალე კომერციული პოლიტიკა" },
        { title: "საერთაშორისო ტექნოლოგია", text: "პროდუქტები - ჩვენი პარტნიორი საერთაშორისო მწარმოებლებისგან." },
        { title: "ადგილობრივი გუნდი და მუდმივი მხარდაჭერა", text: "გუნდი, რომელიც ადგილობრივ ბაზარს კარგად იცნობს და პროექტის ჩაბარების შემდეგაც თქვენს გვერდით რჩება." },
      ],
    },
    blog: {
      eyebrow: "ბლოგიდან",
      title: "ჩვენი ბლოგიდან",
      all: "ყველა სტატია",
    },
    contact: {
      eyebrow: "შეთავაზების მოთხოვნა",
      title: "განვიხილოთ თქვენი პროექტი.",
      text: "მოგვიყევით თქვენი შენობის, პროექტის ეტაპისა და ტექნიკური მოთხოვნების შესახებ. ჩვენი გუნდი განიხილავს ინფორმაციას და მალევე დაგიკავშირდებათ, რათა შეგირჩიოთ ყველაზე შესაფერისი ვერტიკალური გადაწყვეტა.",
      tel: "ტელ.",
      mail: "ელფ.",
      loc: "ადგ.",
    },
  },
} satisfies L<Record<string, unknown>>

export default function Home() {
  const lang = useLang()
  const c = useCommon()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc, full: true })

  const homeCategories = [
    "passenger-elevators",
    "panoramic-elevators",
    "hospital-elevators",
    "freight-elevators",
    "home-villa-elevators",
  ]
    .map((slug) => getCategory(slug))
    .filter((x) => x !== undefined)

  const latestPosts = recentPosts.slice(0, 3)

  return (
    <>
      {/* ----------------------------------------------------------- Hero */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
          <div className="flex flex-col justify-center">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[44px] leading-[1.04] text-ink sm:text-[62px] lg:text-[68px]">
              {t.hero.line1}
              <br />
              {t.hero.line2} <span className="text-accent-text italic">{t.hero.accent}</span>
            </h1>
            <p className="mt-7 max-w-lg text-[17px] leading-[1.8] text-muted">{t.hero.text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact">{c.cta.requestQuote}</Button>
              <Button to="/products" variant="secondary">
                {c.cta.exploreProducts} →
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
              {t.hero.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[12.5px] text-muted/80">{c.brand.poweredBy}</p>
          </div>

          <div className="relative self-center">
            <Media
              src="/images/hero-sketch.webp"
              alt={t.hero.alt}
              label={t.hero.media}
              priority
              className="aspect-[4/5] w-full object-[72%_30%] sm:aspect-square"
            />
            <div className="absolute right-4 bottom-4 left-4 max-w-[260px] bg-night px-6 py-5 text-white shadow-2xl sm:right-auto sm:-left-6 sm:bottom-10">
              <p className="font-serif text-[40px] leading-none">
                {site.sjecCountries.replace("+", "")}
                <span className="text-[#d1a15e]">+</span>
              </p>
              <p className="mt-2 font-mono text-[10.5px] tracking-[0.12em] text-white/60 uppercase">
                {t.hero.card}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------- Certified & Trusted */}
      <section className="border-y border-line bg-alt">
        <Container className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 py-8">
          <div>
            <p className="font-serif text-[22px] text-ink">{t.trust.title}</p>
            <p className="mt-1 max-w-sm text-[12.5px] leading-relaxed text-muted">{t.trust.note}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <SjecBadge />
            <ul className="flex flex-wrap gap-2.5 font-mono text-[11px] tracking-[0.1em] text-muted">
              {["ISO 9001", "ISO 14001", "ISO 45001", "CE"].map((b) => (
                <li key={b} className="border border-line bg-card px-3 py-2">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-[34px] leading-none text-ink">{site.sjecCountries}</p>
            <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
              {t.trust.stat}
            </p>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------- Products */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            description={t.products.sub}
            aside={<ArrowLink to="/products">{c.cta.viewAllProducts}</ArrowLink>}
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {homeCategories.map((cat) => (
              <LocLink
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group flex flex-col bg-card p-7 transition-colors hover:bg-alt"
              >
                <LogoMark className="h-5 w-auto text-gold" />
                <h3 className="mt-6 text-[24px] leading-tight text-ink">{cat.name[lang]}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-muted">{cat.short[lang]}</p>
                <span className="mt-6 text-[13px] font-medium text-ink underline decoration-gold underline-offset-[6px]">
                  {c.cta.viewSolutions} →
                </span>
              </LocLink>
            ))}
            <LocLink
              to="/products#escalators"
              className="group flex flex-col bg-card p-7 transition-colors hover:bg-alt"
            >
              <LogoMark className="h-5 w-auto text-gold" />
              <h3 className="mt-6 text-[24px] leading-tight text-ink">{t.products.escalators.name}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-muted">{t.products.escalators.short}</p>
              <span className="mt-6 text-[13px] font-medium text-ink underline decoration-gold underline-offset-[6px]">
                {c.cta.viewSolutions} →
              </span>
            </LocLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border border-line bg-alt px-7 py-6">
            <div>
              <p className="font-serif text-[22px] text-ink">{t.products.portfolio}</p>
              <p className="mt-1 font-mono text-[10.5px] tracking-[0.14em] text-accent-text uppercase">
                {t.products.portfolioSub}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/products">{c.cta.browseProducts}</Button>
              <Button href={site.sjecCatalogueUrl} external variant="secondary">
                {c.cta.openCatalogue} ↗
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Services */}
      <section className="bg-alt py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.sub}
            aside={<ArrowLink to="/services">{c.cta.exploreServices}</ArrowLink>}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((s, i) => (
              <div key={s.title} className="flex flex-col border border-line bg-card p-6">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-[22px] leading-tight text-ink">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- Z-Care */}
      <section className="bg-night py-20 text-white lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow onDark>{t.zcare.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[34px] leading-[1.12] text-white sm:text-[44px]">{t.zcare.title}</h2>
            <p className="mt-5 max-w-md text-[16.5px] leading-[1.8] text-white/65">{t.zcare.text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button to="/z-care">{c.cta.discoverZCare}</Button>
            </div>
          </div>
          <ul className="grid gap-px border border-white/15 bg-white/10 sm:grid-cols-2">
            {t.zcare.items.map((item, i) => (
              <li key={item.title} className="bg-night p-6">
                <span className="font-mono text-[11px] tracking-[0.14em] text-[#d1a15e]">0{i + 1}</span>
                <h3 className="mt-3 text-[21px] leading-tight text-white">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-white/55">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------------------------------------------- Why ZENA */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>{t.why.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.why.title}</h2>
              <div className="mt-6 space-y-4 text-[16px] leading-[1.8] text-muted">
                {t.why.paras.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <div className="border border-line bg-alt p-7 lg:p-8">
              <p className="font-serif text-[24px] text-ink">{t.why.expectTitle}</p>
              <ul className="mt-5 space-y-4">
                {t.why.expect.map((e) => (
                  <li key={e} className="flex gap-3 text-[14.5px] leading-[1.6] text-ink/85">
                    <CheckIcon className="mt-0.5 shrink-0 text-accent-text" width={17} height={17} />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {t.why.pillars.map((p, i) => (
              <div key={p.title} className="bg-card p-6">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">0{i + 1}</span>
                <h3 className="mt-4 text-[21px] leading-tight text-ink">{p.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.7] text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Blog */}
      <section className="bg-alt py-20 lg:py-24">
        <Container>
          <SectionHead
            eyebrow={t.blog.eyebrow}
            title={t.blog.title}
            aside={<ArrowLink to="/blog">{t.blog.all}</ArrowLink>}
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <LocLink
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col border border-line bg-card"
                >
                  <Media src={p.image} label={p.media[lang]} className="aspect-[16/10] w-full" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10.5px] tracking-[0.14em] text-accent-text uppercase">
                      {categoryLabels[p.category][lang]}
                    </p>
                    <h3 className="mt-3 text-[22px] leading-[1.2] text-ink group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
                      {p.title[lang]}
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-muted">{p.excerpt[lang]}</p>
                    <p className="mt-5 font-mono text-[10.5px] tracking-[0.12em] text-muted/80">
                      {formatPostMeta(p, lang)}
                    </p>
                  </div>
                </LocLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------ Quote section */}
      <section className="bg-night-2 py-20 text-white lg:py-24" id="quote">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow onDark>{t.contact.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[34px] leading-[1.12] text-white sm:text-[42px]">{t.contact.title}</h2>
            <p className="mt-5 max-w-md text-[16px] leading-[1.8] text-white/65">{t.contact.text}</p>
            <dl className="mt-9 space-y-4 text-[14.5px]">
              <div className="flex gap-5">
                <dt className="w-10 font-mono text-[11px] tracking-[0.14em] text-[#d1a15e] uppercase">{t.contact.tel}</dt>
                <dd>
                  <a href={site.phoneHref} className="text-white/85 hover:text-white">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-5">
                <dt className="w-10 font-mono text-[11px] tracking-[0.14em] text-[#d1a15e] uppercase">{t.contact.mail}</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-white/85 hover:text-white">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-5">
                <dt className="w-10 font-mono text-[11px] tracking-[0.14em] text-[#d1a15e] uppercase">{t.contact.loc}</dt>
                <dd className="text-white/85">{site.location[lang]}</dd>
              </div>
            </dl>
          </div>
          <QuoteForm kind="project" tone="dark" page="home" />
        </Container>
      </section>
    </>
  )
}
