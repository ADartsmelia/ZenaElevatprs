import { LogoHorizontal } from "../brand/Logo"
import Container from "../ui/Container"
import SjecBadge from "../ui/SjecBadge"
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../ui/Icons"
import { LocLink, useLang } from "../../i18n"
import { useCommon } from "../../i18n/useCommon"
import { site } from "../../config/site"

export default function Footer() {
  const c = useCommon()
  const lang = useLang()

  const colTitle = "font-mono text-[10.5px] tracking-[0.18em] uppercase text-white/40"
  const link = "text-[13.5px] text-white/75 transition-colors hover:text-white"

  const social = [
    { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  ]

  return (
    <footer className="bg-night text-white">
      <Container className="pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <LocLink to="/" aria-label="ZENA Elevators — home" className="inline-block text-white">
              <LogoHorizontal />
            </LocLink>
            <p className="mt-5 max-w-xs text-[13.5px] leading-[1.75] text-white/55">
              {c.brand.poweredBy}
            </p>
            <div className="mt-6">
              <SjecBadge onDark />
            </div>
          </div>

          <nav aria-label={c.footer.company}>
            <p className={colTitle}>{c.footer.company}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <LocLink to="/about" className={link}>
                  {c.nav.about}
                </LocLink>
              </li>
              <li>
                <LocLink to="/contact" className={link}>
                  {c.nav.contact}
                </LocLink>
              </li>
              <li>
                <LocLink to="/blog" className={link}>
                  {c.nav.blog}
                </LocLink>
              </li>
            </ul>
          </nav>

          <nav aria-label={c.footer.solutions}>
            <p className={colTitle}>{c.footer.solutions}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <LocLink to="/products" className={link}>
                  {c.nav.products}
                </LocLink>
              </li>
              <li>
                <LocLink to="/services" className={link}>
                  {c.nav.services}
                </LocLink>
              </li>
              <li>
                <LocLink to="/z-care" className={link}>
                  {c.nav.zcare}
                </LocLink>
              </li>
              <li>
                <LocLink to="/contact" className={link}>
                  {c.cta.requestQuote}
                </LocLink>
              </li>
            </ul>
          </nav>

          <div>
            <p className={colTitle}>{c.footer.contact}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.phoneHref} className={link}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </a>
              </li>
              <li className="text-[13.5px] text-white/75">{site.location[lang]}</li>
            </ul>
            <div className="mt-6 flex gap-2">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/60 hover:text-white"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/45 sm:flex-row sm:items-center">
          <p>{c.footer.rights}</p>
          <LocLink to="/privacy" className="transition-colors hover:text-white">
            {c.footer.privacy}
          </LocLink>
        </div>
      </Container>
    </footer>
  )
}
