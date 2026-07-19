import { Link, Navigate, useParams } from "react-router-dom"
import Container from "../components/Container"
import Button from "../components/Button"
import ImagePlaceholder from "../components/ImagePlaceholder"
import { blogPosts } from "../data/blogPosts"
import type { BlogBlock } from "../data/blogPosts"

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h3") {
    return <h3 className="mt-8 text-xl font-bold text-ink dark:text-white">{block.text}</h3>
  }
  if (block.type === "quote") {
    return (
      <blockquote className="my-8 border-l-2 border-accent pl-6">
        <p className="text-xl font-medium leading-snug text-ink dark:text-white">
          "{block.text}"
        </p>
        {block.caption && (
          <p className="mt-2 text-sm text-muted dark:text-white/50">{block.caption}</p>
        )}
      </blockquote>
    )
  }
  if (block.type === "list") {
    return (
      <ul className="my-4 space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[17px] leading-relaxed text-muted dark:text-white/60">
            <span className="text-accent">—</span>
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="mt-4 text-[17px] leading-relaxed text-muted dark:text-white/60">{block.text}</p>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <section className="bg-white py-16 dark:bg-dark">
        <Container className="max-w-3xl">
          <p className="font-mono text-xs text-muted dark:text-white/40">
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / {post.category}
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-wide text-accent uppercase">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl dark:text-white">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted dark:text-white/50">
            ZENA Elevators Team &nbsp;·&nbsp; {post.date.toUpperCase()} · {post.readTime.toUpperCase()}
          </p>

          <ImagePlaceholder label={post.imageAlt} className="mt-8 aspect-[16/9] w-full" />

          <article className="mt-8">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>

          <div className="mt-12 border border-tan p-6 dark:border-white/10">
            <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
              Free consultation
            </p>
            <h2 className="mt-2 text-xl font-bold text-ink dark:text-white">
              Not sure which elevator fits your building?
            </h2>
            <p className="mt-2 text-[17px] leading-relaxed text-muted dark:text-white/60">
              Tell us about the project — we'll respond within one business day with a
              transparent scope.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Button to="/contact">Get a Free Quote</Button>
              <span className="font-mono text-sm text-muted dark:text-white/50">
                +995 32 2 44 55 66
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 dark:bg-white/5">
        <Container>
          <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
            Keep reading
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink dark:text-white">Related articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="flex flex-col group">
                <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
                  {r.category}
                </p>
                <span className="mt-2 font-bold leading-snug text-ink group-hover:underline dark:text-white">
                  {r.title}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
