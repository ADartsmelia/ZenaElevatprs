import Media from "./Media"
import { useLang } from "../../i18n"
import type { Model } from "../../data/products"

/** One specified SJEC model with its spec table. `flip` swaps image/text sides. */
export default function ModelCard({ model, flip = false }: { model: Model; flip?: boolean }) {
  const lang = useLang()
  return (
    <article className="grid items-center gap-8 bg-card p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
      <Media
        src={model.image}
        label={model.media}
        className={`aspect-[4/3] w-full ${flip ? "lg:order-2" : ""}`}
      />
      <div>
        <p className="font-mono text-[10.5px] tracking-[0.14em] text-accent-text uppercase">
          {model.tag[lang]}
        </p>
        <h3 className="mt-2 text-[28px] leading-tight text-ink">{model.name}</h3>
        <p className="mt-3 max-w-md text-[15.5px] leading-[1.75] text-muted">{model.description[lang]}</p>
        <dl className="mt-6 grid grid-cols-2 border border-line">
          {model.specs.map((s, i) => (
            <div
              key={s.label.en}
              className={`p-4 ${i % 2 === 0 ? "border-r border-line" : ""} ${
                i < model.specs.length - 2 ? "border-b border-line" : ""
              }`}
            >
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">{s.label[lang]}</dt>
              <dd className="mt-1 text-[14px] font-medium text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
