import { site } from "../config/site"

export interface InquiryPayload {
  name: string
  company: string
  email: string
  phone: string
  /** "Project type" (home form) or "Service interested in" (contact form). */
  topic: string
  message: string
  language: string
  page: string
}

export type SubmitResult = "sent" | "mailto"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\d\s\-.]{6,}$/

export const isEmail = (v: string) => EMAIL_RE.test(v.trim())
export const isPhone = (v: string) => PHONE_RE.test(v.trim()) && /\d{6,}/.test(v.replace(/\D/g, ""))

/**
 * Posts the inquiry to the configured endpoint (e.g. Formspree, which forwards
 * to info@zenaelevators.ge). Without an endpoint the visitor's mail app opens
 * with a prepared message so no request is ever silently lost.
 */
export async function submitInquiry(data: InquiryPayload): Promise<SubmitResult> {
  const subject = `Website inquiry — ${data.topic || "General"}`

  if (!site.formEndpoint) {
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company || "-"}`,
      `Email: ${data.email || "-"}`,
      `Phone: ${data.phone || "-"}`,
      `Topic: ${data.topic || "-"}`,
      "",
      data.message,
    ].join("\n")
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return "mailto"
  }

  const res = await fetch(site.formEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, ...data }),
  })
  if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`)
  return "sent"
}
