import type { L } from "../i18n"

export interface Fact {
  label: L<string>
  value: L<string>
}

export interface Spec {
  label: L<string>
  value: string
}

/** A specific SJEC model shown under an escalator / conveyor category. */
export interface Model {
  name: string
  tag: L<string>
  description: L<string>
  specs: Spec[]
  media: string
  /** Optional photo; the placeholder is shown until this is set. */
  image?: string
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
  models?: Model[]
  /** Caption for the image placeholder. */
  media: L<string>
  image?: string
  /** Where the technical content came from, shown on the detail page. */
  source?: L<string>
}

const spec = {
  inclination: { en: "Inclination", ka: "დახრის კუთხე" },
  stepWidth: { en: "Step width", ka: "საფეხურის სიგანე" },
  palletWidth: { en: "Pallet width", ka: "პალეტის სიგანე" },
  speed: { en: "Speed", ka: "სიჩქარე" },
  rise: { en: "Rise", ka: "სიმაღლე" },
  riseLength: { en: "Rise / length", ka: "სიმაღლე / სიგრძე" },
  installation: { en: "Installation", ka: "მონტაჟი" },
} satisfies Record<string, L<string>>

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
  },
  {
    slug: "hospital-elevators",
    group: "elevators",
    name: { en: "Hospital Elevators", ka: "სამედიცინო ლიფტები" },
    short: {
      en: "Spacious, smooth-riding bed and stretcher elevators designed for healthcare buildings.",
      ka: "ფართო და რბილად მოძრავი საწოლისა და სანიტრული ლიფტები სამედიცინო დაწესებულებებისთვის.",
    },
    summary: {
      en: "Healthcare buildings need reliable, comfortable and safe vertical transport with cabins that fit beds and stretchers. We help clinics and hospitals select a suitable solution and plan installation with minimum disruption.",
      ka: "სამედიცინო შენობებს სჭირდებათ საიმედო, კომფორტული და უსაფრთხო ვერტიკალური ტრანსპორტი, კაბინებით, რომლებშიც საწოლები და საკაცეები თავისუფლად ეტევა. კლინიკებსა და საავადმყოფოებს ვეხმარებით სწორი გადაწყვეტის შერჩევასა და მონტაჟის დაგეგმვაში მინიმალური შეფერხებით.",
    },
    highlights: {
      en: [
        "Cabins sized for beds and stretchers",
        "Smooth ride and accurate levelling",
        "Safety and accessibility standards taken into account (EN 81-70)",
      ],
      ka: [
        "საწოლებისა და საკაცეებისთვის გათვლილი კაბინა",
        "რბილი სვლა და ზუსტი დონეზე გაჩერება",
        "უსაფრთხოებისა და ხელმისაწვდომობის სტანდარტების გათვალისწინება (EN 81-70)",
      ],
    },
    applications: {
      en: ["Hospitals", "Clinics", "Care homes", "Medical centres"],
      ka: ["საავადმყოფოები", "კლინიკები", "მოვლის ცენტრები", "სამედიცინო ცენტრები"],
    },
    media: { en: "hospital bed elevator", ka: "სამედიცინო ლიფტი" },
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
      ka: "საოჯახო ლიფტი უნდა იყოს პატარა, ჩუმი და ლამაზი. SJEC-ის V300 „CUBE“ სერია აერთიანებს აკუმულატორზე მომუშავე სისტემასა და ულტრაკომპაქტურ მართვის კარადას, რომლის სრულად დამალვაც შესაძლებელია — ლიფტი სახლს ერგება და არა პირიქით.",
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
        "ჩუმი მუშაობა — კონტაქტორის, ვენტილატორებისა და დამამუხრუჭებელი რეზისტორის გარეშე",
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
    source: {
      en: "Technical details from the SJEC V300 / CUBE brochure. Villa lift limited to single-family use.",
      ka: "ტექნიკური დეტალები SJEC-ის V300 / CUBE ბროშურიდან. საოჯახო ლიფტი განკუთვნილია მხოლოდ ერთი ოჯახის გამოსაყენებლად.",
    },
  },
  {
    slug: "car-elevators",
    group: "elevators",
    name: { en: "Car Elevators", ka: "ავტომობილის ლიფტები" },
    short: {
      en: "Vehicle lifts for private garages, parking levels and showrooms.",
      ka: "ავტომობილის ლიფტები კერძო გარაჟებისთვის, პარკინგის დონეებისა და შოურუმებისთვის.",
    },
    summary: {
      en: "Car elevators depend heavily on vehicle size and building layout, so each one is engineered for its project. Share the vehicles, levels and available space and we will propose a suitable solution.",
      ka: "ავტომობილის ლიფტი დიდად არის დამოკიდებული ავტომობილის ზომასა და შენობის განლაგებაზე, ამიტომ თითოეული პროექტისთვის ინდივიდუალურად ინჟინრდება. გვითხარით ავტომობილების ტიპი, დონეები და არსებული სივრცე და შემოგთავაზებთ შესაფერის გადაწყვეტას.",
    },
    highlights: {
      en: [
        "Engineered per project: vehicle dimensions, platform size and load",
        "For residential garages and commercial parking levels",
      ],
      ka: [
        "ინდივიდუალური გათვლა: ავტომობილის ზომები, პლატფორმა და დატვირთვა",
        "საცხოვრებელი გარაჟებისა და კომერციული პარკინგებისთვის",
      ],
    },
    applications: {
      en: ["Private garages", "Underground parking", "Car showrooms"],
      ka: ["კერძო გარაჟები", "მიწისქვეშა პარკინგები", "ავტოსალონები"],
    },
    media: { en: "car elevator", ka: "ავტომობილის ლიფტი" },
  },
  {
    slug: "dumbwaiters",
    group: "elevators",
    name: { en: "Dumbwaiters", ka: "მცირე სატვირთო ლიფტები" },
    short: {
      en: "Compact service lifts for moving food, linen and light goods between floors.",
      ka: "კომპაქტური სერვის-ლიფტები საკვების, თეთრეულისა და მსუბუქი ტვირთის სართულებს შორის გადასაადგილებლად.",
    },
    summary: {
      en: "Dumbwaiters are small goods lifts that quietly save hours of carrying in restaurants, hotels, homes and offices.",
      ka: "მცირე სატვირთო ლიფტი ჩუმად ზოგავს ტვირთის ტარებაზე დახარჯულ დროს რესტორნებში, სასტუმროებში, სახლებსა და ოფისებში.",
    },
    highlights: {
      en: ["Compact size for small shafts", "Moves food, linen, documents and light goods"],
      ka: ["კომპაქტური ზომა პატარა შახტებისთვის", "გადააქვს საკვები, თეთრეული, დოკუმენტები და მსუბუქი ტვირთი"],
    },
    applications: {
      en: ["Restaurants and kitchens", "Hotels", "Private homes", "Offices and archives"],
      ka: ["რესტორნები და სამზარეულოები", "სასტუმროები", "კერძო სახლები", "ოფისები და არქივები"],
    },
    media: { en: "dumbwaiter", ka: "მცირე სატვირთო ლიფტი" },
  },

  /* -------------------------------------------------------------- Escalators */
  {
    slug: "commercial-escalators",
    group: "escalators",
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
    models: [
      {
        name: "FES",
        tag: { en: "Commercial", ka: "კომერციული" },
        description: {
          en: "Silence and comfort for continuous public traffic — malls, hotels and office blocks.",
          ka: "სიჩუმე და კომფორტი უწყვეტი საზოგადოებრივი ნაკადისთვის — სავაჭრო ცენტრები, სასტუმროები და საოფისე შენობები.",
        },
        specs: [
          { label: spec.inclination, value: "30° / 35°" },
          { label: spec.stepWidth, value: "600 / 800 / 1000 mm" },
          { label: spec.speed, value: "0.5 m/s" },
          { label: spec.rise, value: "2–8.3 m" },
        ],
        media: "FES escalator · shopping mall",
      },
    ],
  },
  {
    slug: "heavy-duty-escalators",
    group: "escalators",
    name: { en: "Heavy-Duty Escalators", ka: "მძიმე რეჟიმის ესკალატორები" },
    short: {
      en: "Weatherproof, heavy-duty escalators for metro, railway and airport projects.",
      ka: "ამინდგამძლე, მძიმე რეჟიმის ესკალატორები მეტროს, რკინიგზისა და აეროპორტის პროექტებისთვის.",
    },
    summary: {
      en: "Public-transport escalators run for many hours a day in demanding conditions. The FEH and FEH20 series are built for subways, airports and overpasses, including outdoor installations. SJEC equipment operates in metro systems and international airports around the world.",
      ka: "საზოგადოებრივი ტრანსპორტის ესკალატორები დღეში მრავალი საათი მუშაობს მძიმე პირობებში. FEH და FEH20 სერიები შექმნილია მეტროს, აეროპორტებისა და ესტაკადებისთვის, მათ შორის გარე მონტაჟისთვის. SJEC-ის აღჭურვილობა მსოფლიოს მეტროსა და საერთაშორისო აეროპორტებში მუშაობს.",
    },
    highlights: {
      en: ["Weatherproof, heavy-duty construction", "Built to run continuously, including outdoors", "Rise of up to 50 m (FEH20)"],
      ka: ["ამინდგამძლე, მძიმე რეჟიმის კონსტრუქცია", "განკუთვნილია უწყვეტი მუშაობისთვის, გარეთაც", "სიმაღლე 50 მ-მდე (FEH20)"],
    },
    applications: {
      en: ["Metro and railway stations", "Airports", "Pedestrian overpasses"],
      ka: ["მეტროსა და რკინიგზის სადგურები", "აეროპორტები", "ესტაკადები და გადასასვლელები"],
    },
    media: { en: "FEH20 escalator · outdoor metro overpass", ka: "FEH20 ესკალატორი · მეტროს გარე ესტაკადა" },
    models: [
      {
        name: "FEH / FEH20",
        tag: { en: "Public transport · heavy duty", ka: "საზოგადოებრივი ტრანსპორტი · მძიმე რეჟიმი" },
        description: {
          en: "Weatherproof, heavy-duty construction for airports, subways and overpasses — built to run continuously outdoors.",
          ka: "ამინდგამძლე, მძიმე რეჟიმის კონსტრუქცია აეროპორტებისთვის, მეტროსა და ესტაკადებისთვის — განკუთვნილია გარეთ უწყვეტი მუშაობისთვის.",
        },
        specs: [
          { label: spec.inclination, value: "FEH 23.2–35° · FEH20 30°" },
          { label: spec.stepWidth, value: "600 / 800 / 1000 mm" },
          { label: spec.speed, value: "0.5 / 0.65 m/s" },
          { label: spec.rise, value: "FEH 2–15 m · FEH20 3–50 m" },
        ],
        media: "FEH20 escalator · outdoor metro overpass",
      },
    ],
  },
  {
    slug: "moving-walks",
    group: "escalators",
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
    models: [
      {
        name: "Passenger Conveyor",
        tag: { en: "Moving walk", ka: "მოძრავი ბილიკი" },
        description: {
          en: "Reliable, high-efficiency, easy for maintenance — suited to hypermarkets and airports. Available in inclined (FET/FEF) and flat (FEW) configurations.",
          ka: "საიმედო, მაღალეფექტური, მარტივად სამსახურებელი — შესაფერისია ჰიპერმარკეტებისა და აეროპორტებისთვის. ხელმისაწვდომია დახრილი (FET/FEF) და ჰორიზონტალური (FEW) კონფიგურაციით.",
        },
        specs: [
          { label: spec.inclination, value: "FET/FEF 10/11/12° · FEW 0–6°" },
          { label: spec.palletWidth, value: "800–1400 mm" },
          { label: spec.speed, value: "0.5 m/s" },
          { label: spec.riseLength, value: "H 2–8.3 m · L 20–120 m" },
        ],
        media: "passenger conveyor · airport moving walk",
      },
    ],
  },
  {
    slug: "trolley-conveyors",
    group: "escalators",
    name: { en: "Trolley Conveyors", ka: "ეტლების კონვეიერები" },
    short: {
      en: "Cart and trolley conveyors that separate people and trolleys for safer shopping floors.",
      ka: "ეტლებისა და ურიკების კონვეიერები, რომლებიც ადამიანებსა და ეტლებს ერთმანეთისგან ყოფს.",
    },
    summary: {
      en: "A shopping-cart transport system with high efficiency and a small installation footprint. Usually installed beside escalators, it separates people and trolleys into two paths for better safety.",
      ka: "სავაჭრო ეტლების გადამზიდი სისტემა მაღალი ეფექტურობითა და მცირე სამონტაჟო სივრცით. ჩვეულებრივ ესკალატორის გვერდით მონტაჟდება და ადამიანებსა და ეტლებს ორ ცალკე გზაზე ანაწილებს უკეთესი უსაფრთხოებისთვის.",
    },
    highlights: {
      en: ["High efficiency, small installation space", "Indoor installation", "Installed beside escalators"],
      ka: ["მაღალი ეფექტურობა, მცირე სამონტაჟო სივრცე", "შიდა მონტაჟი", "მონტაჟდება ესკალატორის გვერდით"],
    },
    applications: {
      en: ["Shopping malls", "Hypermarkets", "Airport cart areas"],
      ka: ["სავაჭრო ცენტრები", "ჰიპერმარკეტები", "აეროპორტის ეტლების ზონები"],
    },
    media: { en: "FEB trolley conveyor · beside escalator", ka: "FEB ეტლების კონვეიერი · ესკალატორის გვერდით" },
    models: [
      {
        name: "FEB Trolley Conveyor",
        tag: { en: "Trolley conveyor", ka: "ეტლების კონვეიერი" },
        description: {
          en: "A shopping cart/trolley transport system with high efficiency and small installation space — usually installed beside escalators, separating people and trolleys into two paths for better safety.",
          ka: "სავაჭრო ეტლების გადამზიდი სისტემა მაღალი ეფექტურობითა და მცირე სამონტაჟო სივრცით — ჩვეულებრივ ესკალატორის გვერდით მონტაჟდება, ადამიანებსა და ეტლებს ორ ცალკე გზაზე ანაწილებს.",
        },
        specs: [
          { label: spec.inclination, value: "30° / 35°" },
          { label: spec.speed, value: "0.5 m/s" },
          { label: spec.installation, value: "Indoor" },
          { label: spec.rise, value: "2–6 m" },
        ],
        media: "FEB trolley conveyor · beside escalator",
      },
    ],
  },
]

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)

export const elevatorCategories = categories.filter((c) => c.group === "elevators")
export const escalatorCategories = categories.filter((c) => c.group === "escalators")

/** All individually specified SJEC models (shown lower on the Products page). */
export const allModels = escalatorCategories.flatMap((c) => c.models ?? [])
