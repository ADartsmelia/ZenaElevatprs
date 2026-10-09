import { useParams } from "react-router-dom"
import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Media from "../components/ui/Media"
import NotFound from "./NotFound"
import { LocLink, useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
import { usePageMeta } from "../lib/seo"
import { site } from "../config/site"
import { categoryLabels, formatPostMeta, getPost, posts, type Block } from "../data/blog"

const copy = {
  en: {
    crumb: "Blog",
    by: "ZENA Elevators Team",
    ctaEyebrow: "FREE CONSULTATION",
    ctaTitle: "Not sure which elevator fits your building?",
    ctaText: "Tell us about the project — we'll review it and come back with a transparent scope.",
    keep: "KEEP READING",
    related: "Related articles",
  },
  ka: {
    crumb: "ბლოგი",
    by: "ZENA Elevators-ის გუნდი",
    ctaEyebrow: "უფასო კონსულტაცია",
    ctaTitle: "არ იცით, რომელი ლიფტი შეესაბამება თქვენს შენობას?",
    ctaText: "მოგვიყევით პროექტის შესახებ — განვიხილავთ და გამჭვირვალე შეთავაზებით დაგიბრუნდებით.",
    keep: "განაგრძეთ კითხვა",
    related: "მსგავსი სტატიები",
  },
} satisfies L<Record<string, unknown>>

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h3":
      return <h2 className="mt-12 text-[29px] leading-tight text-ink">{block.text}</h2>
    case "list":
      return (
        <ul className="my-5 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[16.5px] leading-[1.75] text-muted">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      )
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-gold pl-6">
          <p className="font-serif text-[26px] leading-[1.35] text-ink italic">“{block.text}”</p>
          {block.caption && <p className="mt-3 text-[13.5px] text-muted">{block.caption}</p>}
        </blockquote>
      )
    default:
      return <p className="mt-5 text-[16.5px] leading-[1.85] text-muted">{block.text}</p>
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const lang = useLang()
  const c = useCommon()
  const t = copy[lang]
  const post = slug ? getPost(slug) : undefined

  usePageMeta({
    title: post ? post.title[lang] : "404",
    description: post ? post.excerpt[lang] : "",
    noindex: !post,
  })

  if (!post) return <NotFound />

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <article className="bg-surface py-14 lg:py-20">
        <Container className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            <LocLink to="/blog" className="hover:text-ink hover:underline">
              {t.crumb}
            </LocLink>{" "}
            / {categoryLabels[post.category][lang]}
          </p>
          <h1 className="mt-5 text-[36px] leading-[1.1] text-ink sm:text-[50px]">{post.title[lang]}</h1>
          <p className="mt-5 text-[13.5px] text-muted">
            {t.by} · <span className="font-mono tracking-[0.1em]">{formatPostMeta(post, lang)}</span>
          </p>

          <Media src={post.image} label={post.media[lang]} className="mt-9 aspect-[16/9] w-full" />

          <div className="mt-6">
            {post.body[lang].map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>

          <div className="mt-16 border border-line bg-alt p-7 sm:p-9">
            <Eyebrow>{t.ctaEyebrow}</Eyebrow>
            <h2 className="mt-3 text-[28px] leading-tight text-ink">{t.ctaTitle}</h2>
            <p className="mt-3 max-w-lg text-[15.5px] leading-[1.75] text-muted">{t.ctaText}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button to="/contact">{c.cta.requestQuote}</Button>
              <a href={site.phoneHref} className="font-mono text-[13px] tracking-wide text-muted hover:text-ink">
                {site.phone}
              </a>
            </div>
          </div>
        </Container>
      </article>

      <section className="bg-alt py-16">
        <Container>
          <Eyebrow>{t.keep}</Eyebrow>
          <h2 className="mt-3 text-[30px] text-ink">{t.related}</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <LocLink to={`/blog/${r.slug}`} className="group block">
                  <p className="font-mono text-[10.5px] tracking-[0.14em] text-accent-text uppercase">
                    {categoryLabels[r.category][lang]}
                  </p>
                  <p className="mt-2 font-serif text-[22px] leading-snug text-ink group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
                    {r.title[lang]}
                  </p>
                </LocLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
