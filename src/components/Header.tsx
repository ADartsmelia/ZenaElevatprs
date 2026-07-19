import { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import Button from "./Button"
import Container from "./Container"

const links = [
  { to: "/", label: "Home" },
  { to: "/catalog", label: "Catalog" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-dark/90">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-6 font-sans text-[13.5px] font-medium md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-ink dark:text-white"
                  : "text-muted transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <div className="hidden sm:block">
            <Button to="/contact">Get a Free Quote</Button>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-ink dark:bg-white" />
              <span className="absolute inset-x-0 top-1.5 h-0.5 bg-ink dark:bg-white" />
              <span className="absolute inset-x-0 top-3 h-0.5 bg-ink dark:bg-white" />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden dark:border-white/10 dark:bg-dark">
          <Container className="flex flex-col gap-4 py-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-ink dark:text-white" : "text-muted dark:text-white/60"
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Button to="/contact" onClick={() => setOpen(false)}>
                Get a Free Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
