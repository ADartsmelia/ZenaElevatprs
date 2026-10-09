import { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "../brand/Logo"
import ThemeToggle from "./ThemeToggle"
import LangSwitch from "./LangSwitch"
import Container from "../ui/Container"
import { useLocalePath } from "../../i18n"
import { useCommon } from "../../i18n/useCommon"

export default function Header() {
  const [open, setOpen] = useState(false)
  const c = useCommon()
  const localize = useLocalePath()

  const links = [
    { to: "/", label: c.nav.home },
    { to: "/products", label: c.nav.products },
    { to: "/services", label: c.nav.services },
    { to: "/z-care", label: c.nav.zcare },
    { to: "/about", label: c.nav.about },
    { to: "/blog", label: c.nav.blog },
    { to: "/contact", label: c.nav.contact },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? "text-ink" : "text-muted hover:text-ink"}`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <Container className="flex h-[80px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 text-[16px] font-medium xl:flex" aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={localize(link.to)}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <LangSwitch />
            <ThemeToggle />
          </div>
          <button
            type="button"
            aria-label={open ? c.menu.close : c.menu.open}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[18px] w-7">
              <span
                className={`absolute inset-x-0 h-[1.5px] bg-ink transition-all ${open ? "top-2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute inset-x-0 top-2 h-[1.5px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute inset-x-0 h-[1.5px] bg-ink transition-all ${open ? "top-2 -rotate-45" : "top-4"}`}
              />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-surface xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={localize(link.to)}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-[18px] ${isActive ? "text-ink" : "text-muted"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-line pt-4">
              <LangSwitch />
              <ThemeToggle />
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
