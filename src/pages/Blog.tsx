import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "../components/Container"
import Eyebrow from "../components/Eyebrow"
import ImagePlaceholder from "../components/ImagePlaceholder"
import { blogPosts, categories } from "../data/blogPosts"

export default function Blog() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active)

  return (
    <>
      <section className="bg-white py-16 dark:bg-dark">
        <Container>
          <Eyebrow>THE ZENA JOURNAL</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Straight answers for developers, owners & architects.
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted dark:text-white/60">
            Buying guides, maintenance signals and honest cost breakdowns — from 15+ years
            installing elevators and escalators across Georgia.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === c
                    ? "border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink"
                    : "border-ink/15 text-muted hover:border-ink/40 dark:border-white/20 dark:text-white/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 dark:bg-white/5">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white dark:bg-dark">
                <ImagePlaceholder label={post.imageAlt} className="aspect-[4/3] w-full" />
                <div className="p-5">
                  <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
                    {post.category}
                  </p>
                  <h2 className="mt-2 text-lg font-bold leading-snug text-ink group-hover:underline dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 font-mono text-[11px] tracking-wide text-muted/70 dark:text-white/40">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
