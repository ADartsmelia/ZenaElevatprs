import type { ReactNode } from "react"
import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import QuoteForm from "../components/forms/QuoteForm"
import {
  ClockIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "../components/ui/Icons"
import { useLang, type L } from "../i18n"
import { usePageMeta } from "../lib/seo"
import { site } from "../config/site"

const copy = {
  en: {
    metaTitle: "Contact — Request a Quote",
    metaDesc:
      "Contact ZENA Elevators in Tbilisi, Georgia. Phone +995 599 277 453, info@zenaelevators.ge. Tell us about your project and request a quote.",
    eyebrow: "CONTACT",
    title: "Let's Discuss Your Project",
    text: "Whether you're planning a new installation, modernization or maintenance, our team is ready to help you find the right solution.",
    labels: { phone: "Phone", email: "Email", website: "Website", location: "Location", hours: "Working hours" },
    hours: "Monday – Friday",
    emergency: "24/7 emergency support for service clients",
    follow: "Follow us",
    formEyebrow: "REQUEST A QUOTE",
    formTitle: "Tell us about your project.",
    formText:
      "The more detail you share — building type, floors, project stage, timeline — the more precise our first proposal will be.",
    steps: ["We review your building and requirements", "A ZENA engineer contacts you to clarify details", "You receive a transparent, itemized proposal"],
    mapTitle: "Map of Tbilisi, Georgia",
  },
  ka: {
    metaTitle: "კონტაქტი — შეთავაზების მოთხოვნა",
    metaDesc:
      "დაუკავშირდით ZENA Elevators-ს თბილისში, საქართველოში. ტელეფონი +995 599 277 453, info@zenaelevators.ge. მოგვიყევით თქვენი პროექტის შესახებ და მოითხოვეთ შეთავაზება.",
    eyebrow: "კონტაქტი",
    title: "განვიხილოთ თქვენი პროექტი",
    text: "იქნება ეს ახალი მონტაჟი, მოდერნიზაცია თუ ტექნიკური მომსახურება — ჩვენი გუნდი მზად არის დაგეხმაროთ სწორი გადაწყვეტის პოვნაში.",
    labels: { phone: "ტელეფონი", email: "ელფოსტა", website: "ვებგვერდი", location: "მდებარეობა", hours: "სამუშაო საათები" },
    hours: "ორშაბათი – პარასკევი",
    emergency: "24/7 გადაუდებელი მხარდაჭერა სერვისის კლიენტებისთვის",
    follow: "გამოგვყევით",
    formEyebrow: "შეთავაზების მოთხოვნა",
    formTitle: "მოგვიყევით თქვენი პროექტის შესახებ.",
    formText:
      "რაც მეტ დეტალს გაგვიზიარებთ — შენობის ტიპი, სართულები, პროექტის ეტაპი, ვადები — მით უფრო ზუსტი იქნება ჩვენი პირველი შეთავაზება.",
    steps: ["ვაანალიზებთ თქვენს შენობას და მოთხოვნებს", "ZENA-ს ინჟინერი დაგიკავშირდებათ დეტალების დასაზუსტებლად", "იღებთ გამჭვირვალე, დეტალურად გაწერილ შეთავაზებას"],
    mapTitle: "თბილისის რუკა, საქართველო",
  },
} satisfies L<Record<string, unknown>>

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <div className="border border-line bg-card p-6">
      <span className="flex items-center gap-2.5 text-accent-text">
        {icon}
        <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase">{label}</span>
      </span>
      <div className="mt-4 text-[16px] leading-snug text-ink">{children}</div>
    </div>
  )
}

export default function Contact() {
  const lang = useLang()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc })

  const social = [
    { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  ]

  return (
    <>
      <section className="bg-alt py-16 lg:py-24">
        <Container>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[40px] leading-[1.08] text-ink sm:text-[58px]">{t.title}</h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.85] text-muted">{t.text}</p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard icon={<PhoneIcon />} label={t.labels.phone}>
            <a href={site.phoneHref} className="font-medium hover:underline">
              {site.phone}
            </a>
          </InfoCard>
          <InfoCard icon={<MailIcon />} label={t.labels.email}>
            <a href={`mailto:${site.email}`} className="font-medium break-all hover:underline">
              {site.email}
            </a>
          </InfoCard>
          <InfoCard icon={<GlobeIcon />} label={t.labels.website}>
            <a href={site.url} className="font-medium hover:underline">
              {site.website}
            </a>
          </InfoCard>
          <InfoCard icon={<PinIcon />} label={t.labels.location}>
            <span className="font-medium">{site.location[lang]}</span>
          </InfoCard>
          <div className="sm:col-span-2 lg:col-span-2">
            <InfoCard icon={<ClockIcon />} label={t.labels.hours}>
              <span className="font-medium">
                {t.hours}, {site.hours.open} – {site.hours.close}
              </span>
              <span className="mt-1.5 block text-[13.5px] text-muted">{t.emergency}</span>
            </InfoCard>
          </div>
          <div className="flex items-center gap-4 border border-line bg-card p-6 sm:col-span-2 lg:col-span-2">
            <span className="font-mono text-[10.5px] tracking-[0.16em] text-accent-text uppercase">{t.follow}</span>
            <div className="flex gap-2">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-alt py-16 lg:py-24" id="quote">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>{t.formEyebrow}</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.12] text-ink sm:text-[40px]">{t.formTitle}</h2>
            <p className="mt-5 max-w-md text-[16.5px] leading-[1.8] text-muted">{t.formText}</p>
            <ol className="mt-8 space-y-4">
              {t.steps.map((s, i) => (
                <li key={s} className="flex gap-4 text-[14.5px] leading-[1.6] text-ink/85">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-accent-text">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <QuoteForm kind="service" tone="light" requireMessage page="contact" />
        </Container>
      </section>

      <section className="bg-surface" aria-label={t.mapTitle}>
        <iframe
          title={t.mapTitle}
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=11&output=embed`}
          className="block h-[380px] w-full border-0 grayscale-[0.4]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  )
}
