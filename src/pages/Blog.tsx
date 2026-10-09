import { useState } from "react"
import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Media from "../components/ui/Media"
import { LocLink, useLang, type L } from "../i18n"
import { usePageMeta } from "../lib/seo"
import { allLabel, categoryLabels, formatPostMeta, posts, type Post } from "../data/blog"

const copy = {
  en: {
    metaTitle: "Blog — Straight answers on elevators",
    metaDesc:
      "Buying guides, maintenance signals and honest cost breakdowns for developers, owners and architects planning elevators in Georgia.",
    eyebrow: "THE ZENA JOURNAL",
    title: "Straight answers for developers, owners & architects.",
    text: "Buying guides, maintenance signals and honest cost breakdowns for anyone planning, buying or running elevators in Georgia.",
  },
  ka: {
    metaTitle: "ბლოგი — პირდაპირი პასუხები ლიფტებზე",
    metaDesc:
      "სახელმძღვანელოები, მომსახურების სიგნალები და გულწრფელი ფასთაგანი დეველოპერების, მფლობელებისა და არქიტექტორებისთვის, რომლებიც საქართველოში ლიფტებს გეგმავენ.",
    eyebrow: "ZENA-ს ჟურნალი",
    title: "პირდაპირი პასუხები დეველოპერებისთვის, მფლობელებისა და არქიტექტორებისთვის.",
    text: "სახელმძღვანელოები, მომსახურების სიგნალები და გულწრფელი ფასთაგანი ყველასთვის, ვინც საქართველოში ლიფტებს გეგმავს, ყიდულობს ან ამუშავებს.",
  },
} satisfies L<Record<string, unknown>>

type Filter = "all" | Post["category"]

export default function Blog() {
  const lang = useLang()
  const t = copy[lang]
  usePageMeta({ title: t.metaTitle, description: t.metaDesc })

  const [active, setActive] = useState<Filter>("all")
  const cats = Array.from(new Set(posts.map((p) => p.category)))
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <section className="bg-alt py-16 lg:py-20">
        <Container>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[36px] leading-[1.1] text-ink sm:text-[52px]">{t.title}</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-muted">{t.text}</p>

          <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Filter">
            {(["all", ...cats] as Filter[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full border px-4 py-1.5 text-[13px] transition-colors ${
                  active === c
                    ? "border-ink bg-ink text-surface"
                    : "border-line bg-card text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {c === "all" ? allLabel[lang] : categoryLabels[c][lang]}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <LocLink key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col border border-line bg-card">
                <Media src={post.image} label={post.media[lang]} className="aspect-[16/10] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10.5px] tracking-[0.14em] text-accent-text uppercase">
                    {categoryLabels[post.category][lang]}
                  </p>
                  <h2 className="mt-3 text-[23px] leading-[1.2] text-ink group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
                    {post.title[lang]}
                  </h2>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-muted">{post.excerpt[lang]}</p>
                  <p className="mt-5 font-mono text-[10.5px] tracking-[0.12em] text-muted/80">
                    {formatPostMeta(post, lang)}
                  </p>
                </div>
              </LocLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
