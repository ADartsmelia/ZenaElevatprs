import Media from "./Media"
import { LocLink, useLang } from "../../i18n"
import { useCommon } from "../../i18n/useCommon"
import type { ProductCategory } from "../../data/products"

export default function CategoryCard({ cat }: { cat: ProductCategory }) {
  const lang = useLang()
  const c = useCommon()
  return (
    <LocLink to={`/products/${cat.slug}`} className="group flex flex-col border border-line bg-card">
      <Media
        src={cat.image}
        label={cat.media[lang]}
        className="aspect-[4/3] w-full transition-opacity group-hover:opacity-90"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[24px] leading-tight text-ink">{cat.name[lang]}</h3>
        <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-muted">{cat.short[lang]}</p>
        <span className="mt-5 text-[13px] font-medium text-ink underline decoration-gold underline-offset-[6px]">
          {c.cta.viewSolutions} →
        </span>
      </div>
    </LocLink>
  )
}
