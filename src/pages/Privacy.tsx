import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import { useLang, type L } from "../i18n"
import { usePageMeta } from "../lib/seo"
import { site } from "../config/site"

const copy = {
  en: {
    metaTitle: "Privacy Policy",
    metaDesc: "How ZENA Elevators LLC collects, uses and protects personal data submitted through this website.",
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    updated: "Last updated: October 2026",
    draft: "Draft text — to be reviewed by legal counsel before publication.",
    sections: [
      {
        h: "Who we are",
        p: `This website is operated by ZENA Elevators LLC, Tbilisi, Georgia. You can contact us at ${site.email} or ${site.phone}.`,
      },
      {
        h: "What we collect",
        p: "Only the information you choose to send us through the contact forms: your name, company, email address, phone number, the service you are interested in and your message. We do not use advertising or tracking cookies.",
      },
      {
        h: "How we use it",
        p: "To reply to your enquiry, prepare a proposal and arrange follow-up. We do not sell your data and we do not use it for unrelated marketing.",
      },
      {
        h: "Who can see it",
        p: "Our team, and the service providers that deliver the form to us (for example an email or form-processing service). They may only use it to provide that service.",
      },
      {
        h: "How long we keep it",
        p: "For as long as needed to handle your enquiry and any resulting project or contract, and as required by law.",
      },
      {
        h: "Your rights",
        p: `You may ask us to access, correct or delete your personal data at any time by writing to ${site.email}.`,
      },
      {
        h: "Local storage",
        p: "To remember your language and light/dark preference this site stores two small settings in your browser. They contain no personal information.",
      },
    ],
  },
  ka: {
    metaTitle: "კონფიდენციალურობის პოლიტიკა",
    metaDesc: "როგორ აგროვებს, იყენებს და იცავს ZENA Elevators LLC ამ ვებგვერდის მეშვეობით გადმოცემულ პერსონალურ მონაცემებს.",
    eyebrow: "იურიდიული",
    title: "კონფიდენციალურობის პოლიტიკა",
    updated: "ბოლო განახლება: 2026 წლის ოქტომბერი",
    draft: "პროექტი — გამოქვეყნებამდე საჭიროა იურისტის მიერ გადახედვა.",
    sections: [
      {
        h: "ვინ ვართ",
        p: `ამ ვებგვერდს მართავს ZENA Elevators LLC, თბილისი, საქართველო. დაგვიკავშირდით: ${site.email} ან ${site.phone}.`,
      },
      {
        h: "რას ვაგროვებთ",
        p: "მხოლოდ იმ ინფორმაციას, რომელსაც თავად გვიგზავნით საკონტაქტო ფორმებით: სახელი, კომპანია, ელფოსტა, ტელეფონი, თქვენთვის საინტერესო სერვისი და შეტყობინება. სარეკლამო ან თვალთვალის ქუქიებს არ ვიყენებთ.",
      },
      {
        h: "როგორ ვიყენებთ",
        p: "თქვენს მოთხოვნაზე პასუხის გასაცემად, შეთავაზების მოსამზადებლად და შემდგომი კომუნიკაციისთვის. მონაცემებს არ ვყიდით და არ ვიყენებთ უკავშირო მარკეტინგისთვის.",
      },
      {
        h: "ვის შეუძლია მათი ნახვა",
        p: "ჩვენს გუნდს და სერვისის მომწოდებლებს, რომლებიც ფორმას გვიმისამართებენ (მაგალითად, ელფოსტის ან ფორმის დამუშავების სერვისი). მათ მხოლოდ ამ სერვისის გასაწევად შეუძლიათ მონაცემების გამოყენება.",
      },
      {
        h: "რამდენ ხანს ვინახავთ",
        p: "იმდენ ხანს, რამდენიც საჭიროა თქვენი მოთხოვნისა და მისგან გამომდინარე პროექტის ან ხელშეკრულების დასამუშავებლად, ასევე კანონით გათვალისწინებულ ვადებში.",
      },
      {
        h: "თქვენი უფლებები",
        p: `ნებისმიერ დროს შეგიძლიათ მოითხოვოთ თქვენს პერსონალურ მონაცემებზე წვდომა, მათი შესწორება ან წაშლა — მოგვწერეთ: ${site.email}.`,
      },
      {
        h: "ლოკალური შენახვა",
        p: "თქვენი ენისა და ნათელი/მუქი რეჟიმის არჩევანის დასამახსოვრებლად საიტი ბრაუზერში ინახავს ორ მცირე პარამეტრს. ისინი პერსონალურ ინფორმაციას არ შეიცავს.",
      },
    ],
  },
} satisfies L<Record<string, unknown>>

export default function Privacy() {
  const lang = useLang()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc })

  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="mt-4 text-[40px] leading-[1.1] text-ink sm:text-[54px]">{t.title}</h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.12em] text-muted">{t.updated}</p>
        <p className="mt-3 border-l-2 border-gold pl-4 text-[13px] text-muted">{t.draft}</p>
        <div className="mt-10 space-y-8">
          {t.sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-[26px] text-ink">{s.h}</h2>
              <p className="mt-2 text-[16px] leading-[1.8] text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
