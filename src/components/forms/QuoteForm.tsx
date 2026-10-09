import { useRef, useState, type FormEvent, type ReactNode } from "react"
import Button from "../ui/Button"
import { CheckIcon } from "../ui/Icons"
import { LocLink, useLang } from "../../i18n"
import { common } from "../../i18n/common"
import { useCommon } from "../../i18n/useCommon"
import { site } from "../../config/site"
import { isEmail, isPhone, submitInquiry, type SubmitResult } from "../../lib/inquiry"

type Tone = "dark" | "light"
type Status = "idle" | "sending" | SubmitResult | "error"

interface Values {
  name: string
  company: string
  email: string
  phone: string
  topic: string
  message: string
}
type Errors = Partial<Record<"name" | "message" | "contact" | "email" | "phone", string>>

const empty: Values = { name: "", company: "", email: "", phone: "", topic: "0", message: "" }

const tones = {
  dark: {
    card: "bg-night-2 border border-white/10",
    label: "text-white/55",
    input:
      "border-white/20 bg-transparent text-white placeholder:text-white/35 focus:border-[#d1a15e]",
    error: "text-[#f0b27a]",
    hint: "text-white/50",
    link: "text-white underline underline-offset-2",
    option: "bg-night",
  },
  light: {
    card: "bg-card border border-line",
    label: "text-muted",
    input:
      "border-line bg-surface text-ink placeholder:text-muted/60 focus:border-accent-text",
    error: "text-[#b3471f]",
    hint: "text-muted",
    link: "text-ink underline underline-offset-2",
    option: "",
  },
} as const

function Field({
  id,
  text,
  error,
  styles,
  children,
}: {
  id: string
  text: string
  error?: string
  styles: { label: string; error: string }
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className={`font-mono text-[10.5px] tracking-[0.14em] uppercase ${styles.label}`}>
        {text}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className={`mt-1.5 text-[12.5px] ${styles.error}`}>
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * Contact form used on Home ("project" kind) and Contact ("service" kind).
 * Spam protection: hidden honeypot field + minimum fill time.
 */
export default function QuoteForm({
  kind,
  tone,
  requireMessage = false,
  page,
}: {
  kind: "project" | "service"
  tone: Tone
  requireMessage?: boolean
  page: string
}) {
  const c = useCommon()
  const lang = useLang()
  const t = tones[tone]
  const f = c.form

  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>("idle")
  const honeypot = useRef<HTMLInputElement>(null)
  const openedAt = useRef(Date.now())

  const options = kind === "project" ? f.projectTypes : f.services
  const englishOptions = kind === "project" ? common.en.form.projectTypes : common.en.form.services
  const topicLabel = kind === "project" ? f.projectType : f.serviceInterested

  // Editing a field clears its own error straight away (email/phone also clear the "need one of them" error).
  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((prev) => {
      if (!Object.keys(prev).length) return prev
      const next = { ...prev }
      if (key === "name" || key === "message" || key === "email" || key === "phone") delete next[key]
      if (key === "email" || key === "phone") delete next.contact
      return next
    })
  }

  function validate(): Errors {
    const e: Errors = {}
    if (values.name.trim().length < 2) e.name = f.errors.name
    if (requireMessage && values.message.trim().length < 5) e.message = f.errors.message

    const hasEmail = values.email.trim() !== ""
    const hasPhone = values.phone.trim() !== ""
    if (hasEmail && !isEmail(values.email)) e.email = f.errors.email
    if (hasPhone && !isPhone(values.phone)) e.phone = f.errors.phone
    if (!hasEmail && !hasPhone) e.contact = f.errors.contact
    return e
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    // Bots: a filled honeypot or an implausibly fast submission. Pretend success, send nothing.
    const looksLikeBot = (honeypot.current?.value ?? "") !== "" || Date.now() - openedAt.current < 2500
    if (looksLikeBot) {
      setStatus("sent")
      return
    }

    setStatus("sending")
    try {
      const result = await submitInquiry({
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        topic: englishOptions[Number(values.topic)] ?? "",
        message: values.message.trim(),
        language: lang,
        page,
      })
      setStatus(result)
      setValues(empty)
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div className={`${t.card} p-8`} role="status">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
          <CheckIcon />
        </span>
        <p className={`mt-5 text-[17px] leading-relaxed ${tone === "dark" ? "text-white" : "text-ink"}`}>
          {status === "sent" ? f.success : `${f.successMail} ${site.email}.`}
        </p>
      </div>
    )
  }

  const input = `mt-1.5 w-full rounded-[3px] border px-3.5 py-3 text-[14.5px] outline-none transition-colors ${t.input}`
  const fieldStyle = { label: t.label, error: t.error }

  return (
    <form onSubmit={onSubmit} noValidate className={`${t.card} space-y-5 p-6 sm:p-8`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field styles={fieldStyle} id={`${page}-name`} text={`${f.fullName} *`} error={errors.name}>
          <input
            id={`${page}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            placeholder={f.placeholders.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${page}-name-err` : undefined}
            className={input}
          />
        </Field>
        <Field styles={fieldStyle} id={`${page}-company`} text={f.company}>
          <input
            id={`${page}-company`}
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={set("company")}
            placeholder={f.placeholders.company}
            className={input}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field styles={fieldStyle} id={`${page}-email`} text={f.email} error={errors.email}>
          <input
            id={`${page}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            placeholder={f.placeholders.email}
            aria-invalid={!!errors.email || !!errors.contact}
            className={input}
          />
        </Field>
        <Field styles={fieldStyle} id={`${page}-phone`} text={f.phone} error={errors.phone}>
          <input
            id={`${page}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder={f.placeholders.phone}
            aria-invalid={!!errors.phone || !!errors.contact}
            className={input}
          />
        </Field>
      </div>
      {errors.contact ? (
        <p className={`-mt-2 text-[12.5px] ${t.error}`}>{errors.contact}</p>
      ) : (
        <p className={`-mt-2 text-[12px] ${t.hint}`}>{f.contactHint}</p>
      )}

      <Field styles={fieldStyle} id={`${page}-topic`} text={topicLabel}>
        <select
          id={`${page}-topic`}
          name="topic"
          value={values.topic}
          onChange={set("topic")}
          className={input}
        >
          {options.map((o, i) => (
            <option key={o} value={i} className={t.option}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field
        styles={fieldStyle}
        id={`${page}-message`}
        text={requireMessage ? `${f.message} *` : f.message}
        error={errors.message}
      >
        <textarea
          id={`${page}-message`}
          name="message"
          rows={4}
          value={values.message}
          onChange={set("message")}
          placeholder={f.placeholders.message}
          aria-invalid={!!errors.message}
          className={`${input} resize-y`}
        />
      </Field>

      {/* Honeypot: invisible to people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input ref={honeypot} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className={`text-[13.5px] leading-relaxed ${t.error}`}>
          {f.failure}{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className={`max-w-xs text-[12px] leading-relaxed ${t.hint}`}>
          {f.consent}{" "}
          <LocLink to="/privacy" className={t.link}>
            {f.consentLink}
          </LocLink>
          .
        </p>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? c.cta.sending : c.cta.sendMessage}
        </Button>
      </div>
    </form>
  )
}
