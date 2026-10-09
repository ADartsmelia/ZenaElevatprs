/**
 * Single source of truth for company facts. Anything the business has not
 * confirmed yet lives here (and only here) so it is easy to change.
 */
export const site = {
  name: "ZENA Elevators",
  legalName: "ZENA Elevators LLC",
  url: "https://www.zenaelevators.ge",
  website: "www.zenaelevators.ge",

  phone: "+995 599 277 453",
  phoneHref: "tel:+995599277453",
  email: "info@zenaelevators.ge",
  // No street address yet: only the city is shown publicly.
  location: { en: "Tbilisi, Georgia", ka: "თბილისი, საქართველო" },
  mapQuery: "Tbilisi, Georgia",

  hours: { open: "09:00", close: "18:00" },

  // TODO: replace with the real company profiles once they exist.
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },

  /** Replace with the direct link to the official SJEC catalogue / e-brochure. */
  sjecCatalogueUrl: "https://www.sjec.com.cn",
  /** The catalogue PDF visitors download (public/downloads/). Swap the file to update it. */
  catalogue: {
    path: "/downloads/SJEC-V300-Catalogue.pdf",
    fileName: "SJEC-V300-Catalogue.pdf",
    sizeLabel: "PDF · 47 MB",
  },
  sjecCountries: "130+",

  /**
   * Where the contact forms are posted (e.g. a Formspree endpoint that
   * forwards to info@zenaelevators.ge). Set VITE_FORM_ENDPOINT at build time.
   * When it is empty the form falls back to opening the visitor's mail app.
   */
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "",
} as const
