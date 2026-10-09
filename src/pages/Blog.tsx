import { useState } from "react"
import Container from "../components/ui/Container"
import Eyebrow from "../components/ui/Eyebrow"
import Media from "../components/ui/Media"
import { LocLink, useLang, type L } from "../i18n"
import { useCommon } from "../i18n/useCommon"
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
    metaTitle: "ბლოგი - პირდაპირი პასუხები ლიფტებზე",
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
  const c = useCommon()
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
          {/* One article per row: wide enough for long (especially Georgian) titles */}
          <ul className="space-y-6">
            {filtered.map((post) => (
              <li key={post.slug}>
                <LocLink
                  to={`/blog/${post.slug}`}
                  className="group grid border border-line bg-card md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
                >
                  <Media
                    src={post.image}
                    label={post.media[lang]}
                    className="aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[240px]"
                  />
                  <div className="flex flex-col justify-center p-6 md:p-9">
                    <p className="font-mono text-[10.5px] tracking-[0.14em] text-accent-text uppercase">
                      {categoryLabels[post.category][lang]}
                    </p>
                    <h3 className="mt-3 text-[25px] leading-[1.22] text-ink sm:text-[29px]">{post.title[lang]}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-muted">{post.excerpt[lang]}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                      <p className="font-mono text-[10.5px] tracking-[0.12em] text-muted/80">
                        {formatPostMeta(post, lang)}
                      </p>
                      <span className="text-[13.5px] font-medium text-ink underline decoration-gold underline-offset-[6px] transition-colors group-hover:decoration-2">
                        {c.cta.readArticle} →
                      </span>
                    </div>
                  </div>
                </LocLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
