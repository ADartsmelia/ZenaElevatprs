import type { L } from "../i18n"

export interface Fact {
  label: L<string>
  value: L<string>
}

/** The part of the SJEC catalogue (a PDF excerpt in public/downloads/catalogue) that belongs to a category. */
export interface CatalogueExcerpt {
  file: string
  title: L<string>
  pages: L<string>
}

export interface ProductCategory {
  slug: string
  group: "elevators" | "escalators"
  name: L<string>
  short: L<string>
  summary: L<string>
  highlights: L<string[]>
  applications: L<string[]>
  facts?: Fact[]
  /** Caption for the image placeholder. */
  media: L<string>
  image?: string
  /** Where the technical content came from, shown on the detail page. */
  source?: L<string>
  /** Catalogue excerpt shown on the detail page. */
  catalogue?: CatalogueExcerpt
  /** false: the card is only a cover, there is no detail page behind it. */
  linked?: boolean
}

export const categories: ProductCategory[] = [
  /* ---------------------------------------------------------------- Elevators */
  {
    slug: "passenger-elevators",
    group: "elevators",
    name: { en: "Passenger Elevators", ka: "სამგზავრო ლიფტები" },
    short: {
      en: "Machine-room-less passenger elevators for residential, office and mixed-use buildings.",
      ka: "მანქანური განყოფილების გარეშე (MRL) სამგზავრო ლიფტები საცხოვრებელი, საოფისე და შერეული დანიშნულების შენობებისთვის.",
    },
    summary: {
      en: "Passenger elevators are the backbone of any residential or commercial building. ZENA helps you specify the right capacity, speed and cabin for your traffic profile — then supplies, installs and services the equipment locally.",
      ka: "სამგზავრო ლიფტები ნებისმიერი საცხოვრებელი და კომერციული შენობის საფუძველია. ZENA გეხმარებათ თქვენი მგზავრთნაკადისთვის შესაფერისი ტვირთამწეობის, სიჩქარისა და კაბინის შერჩევაში, შემდეგ კი ადგილობრივად აწვდის, ამონტაჟებს და ემსახურება აღჭურვილობას.",
    },
    highlights: {
      en: [
        "Machine-room-less (MRL) designs that free up building space",
        "Configurations from low-rise to high-rise buildings",
        "High-speed options for tall buildings",
        "Cabin finishes matched to your interior design",
      ],
      ka: [
        "MRL სისტემები, რომლებიც შენობაში სივრცეს ზოგავს",
        "კონფიგურაციები დაბალი და მაღალი შენობებისთვის",
        "მაღალსიჩქარიანი ვარიანტები მაღლივი შენობებისთვის",
        "კაბინის მოპირკეთება, რომელიც თქვენს ინტერიერს ერგება",
      ],
    },
    applications: {
      en: ["Residential complexes", "Office buildings", "Mixed-use developments", "Hotels"],
      ka: ["საცხოვრებელი კომპლექსები", "საოფისე შენობები", "შერეული დანიშნულების პროექტები", "სასტუმროები"],
    },
    facts: [
      { label: { en: "Typical rise (MRL)", ka: "ტიპური სიმაღლე (MRL)" }, value: { en: "3–33 floors", ka: "3–33 სართული" } },
      {
        label: { en: "High-speed range", ka: "მაღალსიჩქარიანი სერია" },
        value: { en: "up to 6.0 m/s", ka: "6.0 მ/წმ-მდე" },
      },
    ],
    media: { en: "passenger elevator cabin", ka: "სამგზავრო ლიფტის კაბინა" },
    image: "/images/products/passenger-elevators.webp",
    catalogue: {
      file: "/downloads/catalogue/SJEC-Car-Style-Standard-Car.pdf",
      title: { en: "Car Style - Standard car", ka: "კაბინის სტილი - სტანდარტული კაბინა" },
      pages: { en: "Catalogue page 15", ka: "კატალოგის გვ. 15" },
    },
  },

  {
    slug: "panoramic-elevators",
    group: "elevators",
    name: { en: "Panoramic Elevators", ka: "პანორამული ლიფტები" },
    short: {
      en: "Glass-walled cabins that bring light, views and a premium feel to atriums and façades.",
      ka: "მინის კედლებიანი კაბინები, რომლებიც ატრიუმებსა და ფასადებს სინათლეს, ხედსა და პრემიუმ შეგრძნებას ანიჭებს.",
    },
    summary: {
      en: "Panoramic elevators make the ride part of the architecture. We help architects and developers choose a glazed solution that suits the building, the shaft and the intended look.",
      ka: "პანორამული ლიფტი მგზავრობას არქიტექტურის ნაწილად აქცევს. ვეხმარებით არქიტექტორებსა და დეველოპერებს, შეარჩიონ მინის გადაწყვეტა, რომელიც შენობას, შახტასა და სასურველ იერსახეს შეესაბამება.",
    },
    highlights: {
      en: [
        "Glass cabin walls with premium interiors",
        "Visible installations that add to the building's character",
        "Can be coordinated with the architect from the design stage",
      ],
      ka: [
        "მინის კედლებიანი კაბინა პრემიუმ ინტერიერით",
        "თვალსაჩინო მონტაჟი, რომელიც შენობის იერსახეს ამდიდრებს",
        "შესაძლებელია არქიტექტორთან კოორდინაცია საპროექტო ეტაპიდანვე",
      ],
    },
    applications: {
      en: ["Shopping centres", "Hotels", "Atriums and lobbies", "Office façades"],
      ka: ["სავაჭრო ცენტრები", "სასტუმროები", "ატრიუმები და ლობები", "საოფისე ფასადები"],
    },
    media: { en: "panoramic elevator in atrium", ka: "პანორამული ლიფტი ატრიუმში" },
    image: "/images/products/panoramic-elevators.webp",
    catalogue: {
      file: "/downloads/catalogue/SJEC-Observation-Lift.pdf",
      title: { en: "Observation lifts", ka: "პანორამული ლიფტები" },
      pages: { en: "Catalogue page 15", ka: "კატალოგის გვ. 15" },
    },
  },

  {
    slug: "freight-elevators",
    group: "elevators",
    name: { en: "Freight Elevators", ka: "სატვირთო ლიფტები" },
    short: {
      en: "Heavy-duty goods elevators with wide doors and high load capacity for logistics, retail and industry.",
      ka: "მძიმე ტვირთის ლიფტები განიერი კარებითა და მაღალი ტვირთამწეობით ლოგისტიკის, ვაჭრობისა და წარმოებისთვის.",
    },
    summary: {
      en: "Freight elevators are built around the load, not the passenger. Capacity, cabin size and door width are specified from the goods you move and the way you move them.",
      ka: "სატვირთო ლიფტი ტვირთის გარშემოა აგებული და არა მგზავრის. ტვირთამწეობა, კაბინის ზომა და კარის სიგანე ისაზღვრება იმის მიხედვით, რა ტვირთს და როგორ გადაადგილებთ.",
    },
    highlights: {
      en: [
        "Wide doors for pallets and equipment",
        "Reinforced cabins for frequent loading",
        "Capacity specified from your actual cargo",
      ],
      ka: [
        "განიერი კარები პალეტებისა და აღჭურვილობისთვის",
        "გამაგრებული კაბინა ხშირი ჩატვირთვისთვის",
        "ტვირთამწეობა თქვენი რეალური ტვირთის მიხედვით",
      ],
    },
    applications: {
      en: ["Warehouses and logistics", "Retail and supermarkets", "Factories", "Parking and service levels"],
      ka: ["საწყობები და ლოგისტიკა", "ვაჭრობა და სუპერმარკეტები", "საწარმოები", "პარკინგი და სერვისის დონეები"],
    },
    facts: [
      { label: { en: "Load capacity", ka: "ტვირთამწეობა" }, value: { en: "500–5000 kg", ka: "500–5000 კგ" } },
    ],
    media: { en: "freight elevator", ka: "სატვირთო ლიფტი" },
    image: "/images/products/freight-elevators.webp",
    catalogue: {
      file: "/downloads/catalogue/SJEC-Car-Style-Optional-Car.pdf",
      title: { en: "Car Style - Optional car", ka: "კაბინის სტილი - დამატებითი კაბინა" },
      pages: { en: "Catalogue page 15", ka: "კატალოგის გვ. 15" },
    },
  },

  {
    slug: "home-villa-elevators",
    group: "elevators",
    name: { en: "Home & Villa Elevators", ka: "საოჯახო და ვილის ლიფტები" },
    short: {
      en: "Compact, quiet residential lifts for private homes and villas.",
      ka: "კომპაქტური და ჩუმი საოჯახო ლიფტები კერძო სახლებისა და ვილებისთვის.",
    },
    summary: {
      en: "Home lifts need to be small, quiet and beautiful. SJEC's V300 \"CUBE\" series pairs a battery-driven system with an ultra-compact controller that can be fully concealed — so the lift fits the home, not the other way round.",
      ka: "საოჯახო ლიფტი უნდა იყოს პატარა, ჩუმი და ლამაზი. SJEC-ის V300 „CUBE“ სერია აერთიანებს აკუმულატორზე მომუშავე სისტემასა და ულტრაკომპაქტურ მართვის კარადას, რომლის სრულად დამალვაც შესაძლებელია - ლიფტი სახლს ერგება და არა პირიქით.",
    },
    highlights: {
      en: [
        "Battery-drive system: charges at off-peak times and keeps running during a power cut",
        "Controller about 17% of the volume of a mainstream cabinet (approx. 325 × 425 × 50 mm)",
        "Quiet operation — no contactor, fans or braking resistor",
        "Built-in emergency power (ARD), battery health monitoring, automatic relevelling at low power",
        "Cabin finishes in hairline or mirror stainless steel: natural, champagne gold, bronze, titanium gold, rose gold, dark titanium",
      ],
      ka: [
        "აკუმულატორზე მომუშავე სისტემა: იმუხტება ღამის ტარიფზე და დენის გათიშვისას მუშაობას აგრძელებს",
        "მართვის კარადა ჩვეულებრივი კარადის მოცულობის დაახლოებით 17%-ია (დაახლ. 325 × 425 × 50 მმ)",
        "ჩუმი მუშაობა - კონტაქტორის, ვენტილატორებისა და დამამუხრუჭებელი რეზისტორის გარეშე",
        "ჩაშენებული საავარიო კვება (ARD), აკუმულატორის მდგომარეობის მონიტორინგი, ავტომატური დონეზე გასწორება დაბალი მუხტისას",
        "კაბინის მოპირკეთება ნაკაწრებიანი ან სარკისებრი უჟანგავი ფოლადით: ბუნებრივი, შამპანური ოქრო, ბრინჯაო, ტიტანის ოქრო, ვარდისფერი ოქრო, მუქი ტიტანი",
      ],
    },
    applications: {
      en: ["Private homes", "Villas", "Duplex apartments", "Single-family residences"],
      ka: ["კერძო სახლები", "ვილები", "დუპლექს ბინები", "ერთოჯახიანი საცხოვრებელი"],
    },
    facts: [
      { label: { en: "Typical rise", ka: "ტიპური სიმაღლე" }, value: { en: "2–6 floors", ka: "2–6 სართული" } },
      {
        label: { en: "Energy saving (SJEC)", ka: "ენერგოდანაზოგი (SJEC)" },
        value: { en: "up to 40% with time-of-use tariffs", ka: "40%-მდე დიფერენცირებულ ტარიფზე" },
      },
      { label: { en: "Controller noise", ka: "კონტროლერის ხმაური" }, value: { en: "below 40 dB (XCR-2000)", ka: "40 დბ-ზე დაბლა (XCR-2000)" } },
    ],
    media: { en: "V300 CUBE home lift · concealed controller", ka: "V300 CUBE საოჯახო ლიფტი · დამალული კონტროლერი" },
    image: "/images/products/home-villa-elevators.webp",
    source: {
      en: "Technical details from the SJEC V300 / CUBE brochure. Villa lift limited to single-family use.",
      ka: "ტექნიკური დეტალები SJEC-ის V300 / CUBE ბროშურიდან. საოჯახო ლიფტი განკუთვნილია მხოლოდ ერთი ოჯახის გამოსაყენებლად.",
    },
    catalogue: {
      file: "/downloads/catalogue/SJEC-Car-Style-Page.pdf",
      title: { en: "Car Style", ka: "კაბინის სტილი" },
      pages: { en: "Catalogue page 15", ka: "კატალოგის გვ. 15" },
    },
  },
  {
    slug: "cabin-designs",
    group: "elevators",
    name: { en: "Cabin Designs", ka: "კაბინის დიზაინები" },
    short: {
      en: "Ready-made cabin interiors in steel, mirror, gold and wood finishes, from classic to premium.",
      ka: "მზა კაბინის ინტერიერები ფოლადის, სარკისებური, ოქროსფერი და ხის მოპირკეთებით - კლასიკურიდან პრემიუმ დონემდე.",
    },
    summary: {
      en: "The cabin is the part of the elevator people actually experience. SJEC offers reference cabin designs in the JR, JC, JH and VC series, each with its own ceiling, wall finish, handrail and floor options. We help you choose the one that fits the building.",
      ka: "კაბინა ლიფტის ის ნაწილია, რომელსაც მგზავრი რეალურად აფასებს. SJEC გთავაზობთ JR, JC, JH და VC სერიების კაბინის დიზაინებს, თითოეული საკუთარი ჭერის, კედლების მოპირკეთების, სახელურისა და იატაკის ვარიანტებით. ჩვენ დაგეხმარებით შენობისთვის შესაფერისის შერჩევაში.",
    },
    highlights: {
      en: [
        "Reference designs in the JR, JC, JH and VC series",
        "Every design lists its ceiling, car wall, front return, handrail, car door and floor",
        "Finishes include hairline and mirror stainless steel, gold-toned steel, etched patterns and wood-effect surfaces",
        "Optional marble-effect floors are listed for many designs",
      ],
      ka: [
        "მზა დიზაინები JR, JC, JH და VC სერიებში",
        "თითოეულ დიზაინში მითითებულია ჭერი, კაბინის კედლები, წინა პანელი, სახელური, კაბინის კარი და იატაკი",
        "მოპირკეთება: ნაკაწრებიანი და სარკისებრი უჟანგავი ფოლადი, ოქროსფერი ფოლადი, გრავირებული ნახატები და ხის ფაქტურა",
        "ბევრ დიზაინს დამატებით შეიძლება მარმარილოს იატაკი ჰქონდეს",
      ],
    },
    applications: {
      en: ["Residential buildings", "Offices", "Hotels", "Shopping centres"],
      ka: ["საცხოვრებელი შენობები", "ოფისები", "სასტუმროები", "სავაჭრო ცენტრები"],
    },
    media: { en: "cabin interior design sketch", ka: "კაბინის ინტერიერის ესკიზი" },
    image: "/images/products/cabin-designs.webp",
    catalogue: {
      file: "/downloads/catalogue/SJEC-Cabin-Designs.pdf",
      title: { en: "Cabin designs", ka: "კაბინის დიზაინები" },
      pages: { en: "Catalogue pages 16-19", ka: "კატალოგის გვ. 16-19" },
    },
  },
  {
    slug: "lighting-and-panels",
    group: "elevators",
    name: { en: "Lighting & Operating Panels", ka: "განათება და ღილაკების პანელი" },
    short: {
      en: "Cabin ceilings with LED lighting, handrails, wall and floor materials, operating panels, displays and buttons.",
      ka: "კაბინის ჭერი LED განათებით, სახელურები, კედლისა და იატაკის მასალები, ღილაკების პანელები, დისპლეები და ღილაკები.",
    },
    summary: {
      en: "Lighting and controls shape how a cabin feels and how easy it is to use. The SJEC catalogue covers ceiling designs, handrails, wall and floor materials, car operating panels (COP), landing fixtures (FOB), displays, buttons and hall lanterns.",
      ka: "განათება და მართვის ელემენტები განსაზღვრავს, როგორ აღიქმება კაბინა და რამდენად მოსახერხებელია მისი გამოყენება. SJEC-ის კატალოგში წარმოდგენილია ჭერის დიზაინები, სახელურები, კედლისა და იატაკის მასალები, ღილაკების პანელები (COP), სართულის გამოსაძახებელი პანელები (FOB), დისპლეები, ღილაკები და სართულის სიგნალური მაჩვენებლები.",
    },
    highlights: {
      en: [
        "Ceiling designs with LED lighting",
        "Handrails, wall and door materials and floor finishes",
        "Car operating panels with displays and buttons",
        "Landing fixtures for every floor, hall lanterns and an auxiliary panel for disabled passengers",
      ],
      ka: [
        "ჭერის დიზაინები LED განათებით",
        "სახელურები, კედლისა და კარის მასალები და იატაკის მოპირკეთება",
        "კაბინის ღილაკების პანელები დისპლეითა და ღილაკებით",
        "სართულის გამოსაძახებელი პანელები, სიგნალური მაჩვენებლები და დამატებითი პანელი შეზღუდული შესაძლებლობის მქონე მგზავრებისთვის",
      ],
    },
    applications: {
      en: ["Residential buildings", "Offices", "Hotels", "Public buildings"],
      ka: ["საცხოვრებელი შენობები", "ოფისები", "სასტუმროები", "საზოგადოებრივი შენობები"],
    },
    media: { en: "cabin lighting and operating panel sketch", ka: "კაბინის განათებისა და ღილაკების პანელის ესკიზი" },
    catalogue: {
      file: "/downloads/catalogue/SJEC-Lighting-and-Panels.pdf",
      title: { en: "Lighting & operating panels", ka: "განათება და ღილაკების პანელი" },
      pages: { en: "Catalogue pages 20-26", ka: "კატალოგის გვ. 20-26" },
    },
  },
  /* -------------------------------------------------------------- Escalators */
  {
    slug: "commercial-escalators",
    group: "escalators",
    /** Cover card only: no detail page. */
    linked: false,
    name: { en: "Commercial Escalators", ka: "კომერციული ესკალატორები" },
    short: {
      en: "Silent, comfortable escalators for malls, hotels and office blocks.",
      ka: "ჩუმი და კომფორტული ესკალატორები სავაჭრო ცენტრებისთვის, სასტუმროებისა და საოფისე შენობებისთვის.",
    },
    summary: {
      en: "Escalators move large numbers of people smoothly and keep a building flowing. The FES series is designed for continuous public traffic in commercial buildings.",
      ka: "ესკალატორი დიდ ნაკადს რბილად ამოძრავებს და შენობას დინამიკურს ხდის. FES სერია განკუთვნილია კომერციულ შენობებში უწყვეტი საზოგადოებრივი ნაკადისთვის.",
    },
    highlights: {
      en: ["Quiet, comfortable operation for continuous public traffic", "Meets EN 115 safety standard", "Inclination of 30° or 35°"],
      ka: ["ჩუმი და კომფორტული მუშაობა უწყვეტი ნაკადისთვის", "შეესაბამება EN 115 უსაფრთხოების სტანდარტს", "დახრის კუთხე 30° ან 35°"],
    },
    applications: {
      en: ["Shopping malls", "Hotels", "Office blocks"],
      ka: ["სავაჭრო ცენტრები", "სასტუმროები", "საოფისე შენობები"],
    },
    media: { en: "FES escalator · shopping mall", ka: "FES ესკალატორი · სავაჭრო ცენტრი" },
    image: "/images/products/commercial-escalators.webp",
  },

  {
    slug: "moving-walks",
    group: "escalators",
    /** Cover card only: no detail page. */
    linked: false,
    name: { en: "Moving Walks", ka: "მოძრავი ბილიკები" },
    short: {
      en: "Passenger conveyors for airports, hypermarkets and transit halls.",
      ka: "სამგზავრო კონვეიერები აეროპორტებისთვის, ჰიპერმარკეტებისა და სატრანზიტო დარბაზებისთვის.",
    },
    summary: {
      en: "Moving walks carry passengers (and their luggage or trolleys) over long, level or gently inclined distances. Available in inclined (FET/FEF) and flat (FEW) configurations.",
      ka: "მოძრავი ბილიკი მგზავრებს (ბარგითა და ეტლებით) გადაჰყავს გრძელ, ჰორიზონტალურ ან ოდნავ დახრილ მანძილზე. ხელმისაწვდომია დახრილი (FET/FEF) და ჰორიზონტალური (FEW) კონფიგურაციით.",
    },
    highlights: {
      en: ["Reliable, high-efficiency and easy to maintain", "Inclined (FET/FEF) and flat (FEW) versions"],
      ka: ["საიმედო, მაღალეფექტური და მარტივად სამსახურებელი", "დახრილი (FET/FEF) და ჰორიზონტალური (FEW) ვერსიები"],
    },
    applications: {
      en: ["Airports", "Hypermarkets", "Transit halls"],
      ka: ["აეროპორტები", "ჰიპერმარკეტები", "სატრანზიტო დარბაზები"],
    },
    media: { en: "passenger conveyor · airport moving walk", ka: "სამგზავრო კონვეიერი · აეროპორტის მოძრავი ბილიკი" },
    image: "/images/products/moving-walks.webp",
  },
]

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)

export const elevatorCategories = categories.filter((c) => c.group === "elevators")
export const escalatorCategories = categories.filter((c) => c.group === "escalators")

