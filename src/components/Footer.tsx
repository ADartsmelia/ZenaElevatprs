import Logo from "./Logo"
import Container from "./Container"

export default function Footer() {
  return (
    <footer className="bg-dark">
      <Container className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo inverted />
        <p className="font-mono text-xs tracking-wide text-white/40">
          © 2026 ZENA ELEVATORS LLC · SJEC AUTHORIZED PARTNER
        </p>
      </Container>
    </footer>
  )
}
