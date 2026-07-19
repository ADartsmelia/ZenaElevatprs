export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  category: string
  name: string
  tags: string
  description: string
  imageAlt: string
  specs: ProductSpec[]
}

export const products: Product[] = [
  {
    slug: "fes-escalator",
    category: "Commercial",
    name: "FES Escalator",
    tags: "Malls · Hotels · Offices",
    description:
      "Silence and comfort for continuous public traffic — malls, hotels and office blocks.",
    imageAlt: "FES escalator · shopping mall",
    specs: [
      { label: "Inclination", value: "30° / 35°" },
      { label: "Step width", value: "600 / 800 / 1000mm" },
      { label: "Speed", value: "0.5 m/s" },
      { label: "Rise", value: "2–8.3 m" },
    ],
  },
  {
    slug: "feh-feh20-escalator",
    category: "Public transport · Heavy duty",
    name: "FEH / FEH20 Escalator",
    tags: "Metro · Railway · Airport",
    description:
      "Weatherproof, heavy-duty construction for airports, subways and overpasses — built to run continuously outdoors.",
    imageAlt: "FEH20 escalator · outdoor metro overpass",
    specs: [
      { label: "Inclination", value: "FEH 23.2–35° · FEH20 30°" },
      { label: "Step width", value: "600 / 800 / 1000mm" },
      { label: "Speed", value: "0.5 / 0.65 m/s" },
      { label: "Rise", value: "FEH 2–15m · FEH20 3–50m" },
    ],
  },
  {
    slug: "passenger-conveyor",
    category: "Moving walk",
    name: "Passenger Conveyor",
    tags: "Airports · Transit halls",
    description:
      "Reliable, high-efficiency, easy for maintenance — suited to hypermarkets and airports. Available in inclined (FET/FEF) and flat (FEW) configurations.",
    imageAlt: "Passenger conveyor · airport moving walk",
    specs: [
      { label: "Inclination", value: "FET/FEF 10/11/12° · FEW 0–6°" },
      { label: "Pallet width", value: "800–1400mm" },
      { label: "Speed", value: "0.5 m/s" },
      { label: "Rise / length", value: "H 2–8.3m · L 20–120m" },
    ],
  },
  {
    slug: "feb-trolley-conveyor",
    category: "Trolley conveyor",
    name: "FEB Trolley Conveyor",
    tags: "Malls · Airport carts",
    description:
      "A shopping cart/trolley transport system with high efficiency and small installation space — usually installed beside escalators, separating people and trolleys into two paths for better safety.",
    imageAlt: "FEB trolley conveyor · beside escalator, mall entrance",
    specs: [
      { label: "Inclination", value: "30° / 35°" },
      { label: "Speed", value: "0.5 m/s" },
      { label: "Installation", value: "Indoor" },
      { label: "Rise", value: "2–6 m" },
    ],
  },
]
