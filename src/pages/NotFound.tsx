import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"

export default function NotFound() {
  const c = useCommon()
  usePageMeta({ title: "404", description: c.notFound.text, noindex: true })

  return (
    <section className="bg-surface py-28">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-[42px] leading-[1.08] text-ink sm:text-[60px]">{c.notFound.title}</h1>
        <p className="mt-5 max-w-md text-[17px] leading-[1.8] text-muted">{c.notFound.text}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button to="/">{c.notFound.back}</Button>
          <Button to="/contact" variant="secondary">
            {c.cta.contactUs}
          </Button>
        </div>
      </Container>
    </section>
  )
}
