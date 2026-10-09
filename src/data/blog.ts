import type { L, Lang } from "../i18n"
import { site } from "../config/site"

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; caption?: string }

export interface Post {
  slug: string
  category: "buyers-guide" | "pricing" | "modernization" | "maintenance"
  /** ISO date, formatted per language at display time. */
  date: string
  readMinutes: number
  title: L<string>
  excerpt: L<string>
  media: L<string>
  image?: string
  body: L<Block[]>
}

export const categoryLabels: Record<Post["category"], L<string>> = {
  "buyers-guide": { en: "Buyer's Guide", ka: "მყიდველის გზამკვლევი" },
  pricing: { en: "Pricing", ka: "ფასები" },
  modernization: { en: "Modernization", ka: "მოდერნიზაცია" },
  maintenance: { en: "Maintenance", ka: "ტექნიკური მომსახურება" },
}

export const allLabel: L<string> = { en: "All", ka: "ყველა" }

export function formatPostMeta(post: Post, lang: Lang): string {
  const d = new Date(post.date)
  const month = new Intl.DateTimeFormat(lang === "ka" ? "ka-GE" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(d)
  const read = lang === "ka" ? `${post.readMinutes} წთ საკითხავი` : `${post.readMinutes} min read`
  return `${month} · ${read}`
}

const countries = site.sjecCountries

/**
 * Articles written by Elene (Georgian originals), with English versions.
 * Claims about ZENA's years in Georgia were removed on purpose (see the
 * website review): nothing here states a number of years, uptime or response time.
 */
export const posts: Post[] = [
  /* ------------------------------------------------------------------ 1 */
  {
    slug: "cheapest-elevator-costs-most",
    category: "buyers-guide",
    date: "2026-06-12",
    readMinutes: 4,
    title: {
      en: "The Cheapest Elevator Will Cost You the Most. Here's Why.",
      ka: "ყველაზე იაფი ლიფტი საბოლოოდ ყველაზე ძვირი დაგიჯდებათ — აი რატომ",
    },
    excerpt: {
      en: "Three proposals, nearly identical on paper. Here's what the price tag never tells you.",
      ka: "სამი შეთავაზება, ქაღალდზე თითქმის იდენტური. აი, რას არ გეუბნებათ ფასის ეტიკეტი.",
    },
    media: { en: "elevator cabin interior · brushed steel + glass", ka: "ლიფტის კაბინის ინტერიერი · უჟანგავი ფოლადი და მინა" },
    image: "/images/blog/cheapest-elevator-costs-most.webp",
    body: {
      en: [
        { type: "p", text: "You've spent months on the plans. You've negotiated every line item. And now you're staring at three elevator proposals, wondering: are they really that different?" },
        { type: "p", text: "On paper, they look almost identical. Same capacity. Similar speed. Comparable specs. So you do what any rational person would do — you go with the lowest price." },
        { type: "p", text: "It feels like a smart decision. Until the elevator breaks down at 11 PM on a Friday night." },
        { type: "p", text: "That's the moment when you discover what you actually bought. Not a passenger elevator or a commercial elevator — you bought a relationship. And some relationships don't show up when you need them most." },
        { type: "h3", text: "An elevator isn't furniture" },
        { type: "p", text: "A sofa sits in a corner. An elevator moves hundreds of people, every single day, for the next 20 to 30 years. It is one of the most used mechanical systems in any building — and one of the most overlooked at the purchasing stage." },
        { type: "p", text: "The real cost of an elevator is never just the purchase price:" },
        { type: "list", items: ["The installation", "The ongoing elevator maintenance", "The emergency elevator repair call at midnight", "The spare parts that either arrive in 24 hours — or in six weeks"] },
        { type: "p", text: "The price tag tells you almost nothing about any of that." },
        { type: "h3", text: "What a real elevator partner looks like" },
        { type: "p", text: "At ZENA Elevators, we don't believe our job ends when the elevator is installed. Honestly, that's when it begins." },
        { type: "p", text: "Before we recommend a single model, we study your building. We look at the shaft, the drawings, the expected passenger traffic. We ask questions that might seem excessive — until you realize they're the reason your elevator runs perfectly in year 15, not just year one." },
        { type: "p", text: `We also give our clients access to something most local suppliers can't offer: world-class technology from SJEC, one of the world's leading elevator manufacturers, with installations in ${countries} countries — including pavilions at the Shanghai World Expo. Quality in line with European standards, backed by a local team that actually picks up the phone.` },
        { type: "quote", text: "Are you buying a product — or are you choosing a partner?", caption: "The question worth asking before you sign anything" },
        { type: "p", text: "Because in 10 years, nobody will remember the price difference. But they'll remember every time the elevator worked. And every time it didn't." },
        { type: "p", text: "At ZENA, we're in this for the long run. Just like your building." },
      ],
      ka: [
        { type: "p", text: "თვეების განმავლობაში მუშაობდით პროექტზე. დეტალურად შეათანხმეთ ბიუჯეტის თითოეული პუნქტი. ახლა კი თქვენს წინაშეა სამი კომერციული წინადადება ლიფტის შესახებ და ფიქრობთ: ნუთუ მათ შორის მართლაც ისეთი დიდი განსხვავებაა?" },
        { type: "p", text: "ქაღალდზე თითქმის იდენტურად გამოიყურებიან. იგივე ტვირთამწეობა. მსგავსი სიჩქარე. თითქმის ერთნაირი ტექნიკური მახასიათებლები. ამიტომაც აკეთებთ იმას, რასაც ნებისმიერი რაციონალური ადამიანი გააკეთებდა — არჩევთ ყველაზე დაბალ ფასს." },
        { type: "p", text: "ერთი შეხედვით, ეს სწორი გადაწყვეტილებაა. სანამ პარასკევს ღამის 11 საათზე ლიფტი არ გაჩერდება." },
        { type: "p", text: "სწორედ მაშინ ხვდებით, რეალურად რა შეიძინეთ. არა უბრალოდ სამგზავრო ან კომერციული ლიფტი. თქვენ შეიძინეთ პარტნიორობა. და ზოგიერთი პარტნიორი ყველაზე საჭირო მომენტში უბრალოდ არ ჩნდება." },
        { type: "h3", text: "ლიფტი ავეჯი არ არის" },
        { type: "p", text: "დივანი წლების განმავლობაში ერთ ადგილას დგას. ლიფტი კი ყოველდღიურად ასობით ადამიანს ემსახურება მომდევნო 20–30 წლის განმავლობაში. ის ნებისმიერი შენობის ერთ-ერთი ყველაზე დატვირთული საინჟინრო სისტემაა და, ამავდროულად, ერთ-ერთი ყველაზე ნაკლებად შეფასებული შესყიდვის ეტაპზე." },
        { type: "p", text: "ლიფტის რეალური ღირებულება მხოლოდ მისი შეძენის ფასი არ არის. ეს არის:" },
        { type: "list", items: ["მონტაჟი", "მიმდინარე ტექნიკური მომსახურება", "შუაღამისას საჭირო გადაუდებელი შეკეთება", "სათადარიგო ნაწილები, რომლებიც ან 24 საათში ჩამოვა, ან ექვს კვირაში"] },
        { type: "p", text: "ფასის ეტიკეტი ამ ყველაფერზე თითქმის არაფერს გეუბნებათ." },
        { type: "h3", text: "როგორი უნდა იყოს ნამდვილი ლიფტის პარტნიორი" },
        { type: "p", text: "ZENA Elevators-ში არ გვჯერა, რომ ჩვენი საქმე ლიფტის მონტაჟის დასრულებით მთავრდება. სინამდვილეში, სწორედ მაშინ იწყება." },
        { type: "p", text: "სანამ რომელიმე მოდელს შემოგთავაზებთ, დეტალურად ვსწავლობთ თქვენს შენობას. ვაფასებთ ლიფტის შახტას, პროექტს, მოსალოდნელ სამგზავრო ნაკადს. ვსვამთ კითხვებს, რომლებიც შესაძლოა ზედმეტად დეტალური მოგეჩვენოთ — სანამ არ გააცნობიერებთ, რომ სწორედ ამ კითხვების წყალობით მუშაობს თქვენი ლიფტი გამართულად არა მხოლოდ პირველ წელს, არამედ მეთხუთმეტე წელიწადშიც." },
        { type: "p", text: `ჩვენს კლიენტებს ასევე ვთავაზობთ იმას, რასაც ადგილობრივი მომწოდებლების უმეტესობა ვერ უზრუნველყოფს: მსოფლიო დონის ტექნოლოგიას SJEC-ისგან — ლიფტების ერთ-ერთი წამყვანი საერთაშორისო მწარმოებლისგან, რომლის სისტემები დამონტაჟებულია ${countries} ქვეყანაში, მათ შორის შანხაის World Expo-ს პავილიონებში. ევროპული სტანდარტების შესაბამისი ხარისხი, რომელსაც მხარს უჭერს ადგილობრივი გუნდი, რომელიც საჭირო დროს ნამდვილად პასუხობს თქვენს ზარს.` },
        { type: "quote", text: "თქვენ უბრალოდ პროდუქტს ყიდულობთ თუ პარტნიორს ირჩევთ?", caption: "მთავარი კითხვა ხელშეკრულების გაფორმებამდე" },
        { type: "p", text: "რადგან 10 წლის შემდეგ ფასში განსხვავებას აღარავინ გაიხსენებს. მაგრამ ყველას ემახსოვრება ყოველი შემთხვევა, როდესაც ლიფტმა გამართულად იმუშავა. და ასევე ყოველი შემთხვევა, როდესაც არ იმუშავა." },
        { type: "p", text: "ZENA-ში ჩვენ გრძელვადიან პარტნიორობაზე ვართ ორიენტირებული. ზუსტად ისე, როგორც თქვენი შენობაა გათვლილი ხანგრძლივ მომავალზე." },
      ],
    },
  },

  /* ------------------------------------------------------------------ 2 */
  {
    slug: "seven-elevator-mistakes",
    category: "buyers-guide",
    date: "2026-06-03",
    readMinutes: 5,
    title: {
      en: "7 Elevator Mistakes That Cost Georgian Developers Thousands",
      ka: "7 შეცდომა, რომლებიც ქართველ დეველოპერებს ათასობით ლარი უჯდებათ — და როგორ აიცილოთ თავიდან თითოეული მათგანი",
    },
    excerpt: {
      en: "The same seven mistakes keep appearing in elevator projects across Georgia. Here is how to avoid each one.",
      ka: "ლიფტის პროექტებში საქართველოში ერთი და იგივე შვიდი შეცდომა მეორდება. აი, როგორ აიცილოთ თავიდან თითოეული.",
    },
    media: { en: "shaft drawings on a site table", ka: "შახტის ნახაზები სამშენებლო მაგიდაზე" },
    image: "/images/blog/seven-elevator-mistakes.webp",
    body: {
      en: [
        { type: "p", text: "Nobody plans to make an expensive mistake." },
        { type: "p", text: "They usually happen when the elevator selection process is rushed, handed to the responsible person too late, or treated as a formality rather than a strategic decision." },
        { type: "p", text: "In the Georgian market, these seven mistakes come up again and again — in premium developments as well as in small and mid-sized residential complexes." },
        { type: "h3", text: "Mistake #1 — Choosing on price alone" },
        { type: "p", text: "The lowest price almost never reflects the full picture. Hidden costs in maintenance, regular service, spare parts and emergency repairs often cancel out the initial saving completely — and in many cases exceed it significantly." },
        { type: "h3", text: "Mistake #2 — Misjudging the building's load" },
        { type: "p", text: "A 12-storey building with 80 apartments has completely different vertical-transport requirements from a building of the same height with 30 apartments. Correct passenger-traffic analysis is not an extra service — it determines whether the elevator can meet the building's demands from day one." },
        { type: "h3", text: "Mistake #3 — Choosing the wrong capacity" },
        { type: "p", text: "A slightly larger cabin or higher capacity requires a relatively small additional investment at the start of a project. Replacing an under-sized elevator later is a cost of an entirely different scale." },
        { type: "h3", text: "Mistake #4 — Ignoring the total cost of ownership" },
        { type: "p", text: "The purchase price is only one component. Also consider:" },
        { type: "list", items: ["Maintenance contracts", "Energy consumption", "Periodic modernization", "Spare parts and repair work"] },
        { type: "p", text: "Over a 25-year service life, these costs often far exceed the initial investment." },
        { type: "h3", text: "Mistake #5 — Planning the shaft dimensions incorrectly" },
        { type: "p", text: "This is one of the most expensive mistakes in construction. When the elevator shaft has to be corrected after construction has started, the changes cause significant additional cost and project delays." },
        { type: "h3", text: "Mistake #6 — Choosing a supplier without local support" },
        { type: "p", text: "An international brand without its own technical service and repair team in Georgia means that, if a problem occurs, you depend on outside specialists. When residents are stuck between floors, neither waiting nor flying in a specialist from abroad is an acceptable solution." },
        { type: "h3", text: "Mistake #7 — Planning the elevator at the last stage" },
        { type: "p", text: "When elevator decisions are made in the final phase of construction, compromises are almost inevitable. By then the choices are limited and the room for negotiation is much smaller." },
        { type: "h3", text: "What does ZENA Elevators do differently?" },
        { type: "p", text: "Before making any recommendation, we carry out:" },
        { type: "list", items: ["A full technical analysis of the elevator shaft", "An assessment of passenger traffic", "A detailed study of the building's functional requirements"] },
        { type: "p", text: "We work with architects and engineers from the design stage — not after the building structure is already complete." },
        { type: "quote", text: "Getting an elevator right doesn't start in the showroom. It starts at the design table." },
        { type: "p", text: "Contact ZENA Elevators for a free professional consultation in Georgia." },
      ],
      ka: [
        { type: "p", text: "არავინ გეგმავს ძვირადღირებული შეცდომების დაშვებას." },
        { type: "p", text: "ისინი ჩვეულებრივ მაშინ ხდება, როდესაც ლიფტის შერჩევის პროცესი დაჩქარებულია, დაგვიანებით გადაეცემა პასუხისმგებელ პირს ან უბრალო ფორმალობად აღიქმება და არა სტრატეგიულ გადაწყვეტილებად." },
        { type: "p", text: "საქართველოს ბაზარზე ეს შვიდი შეცდომა არაერთხელ მეორდება — როგორც პრემიუმ კლასის პროექტებში, ისე საშუალო და მცირე საცხოვრებელ კომპლექსებში." },
        { type: "h3", text: "შეცდომა #1 — არჩევანის გაკეთება მხოლოდ ფასის მიხედვით" },
        { type: "p", text: "ყველაზე დაბალი ფასი თითქმის არასდროს ასახავს სრულ სურათს. ლიფტის ტექნიკურ მომსახურებაში, რეგულარულ სერვისში, სათადარიგო ნაწილებსა და ავარიულ შეკეთებაში დამალული ხარჯები ხშირად მთლიანად ანულებს თავდაპირველ ეკონომიას — და ხშირ შემთხვევაში მას მნიშვნელოვნადაც აღემატება." },
        { type: "h3", text: "შეცდომა #2 — შენობის დატვირთვის არასწორი შეფასება" },
        { type: "p", text: "12-სართულიან შენობას 80 ბინით სრულიად განსხვავებული ვერტიკალური ტრანსპორტირების მოთხოვნები აქვს, ვიდრე იმავე სიმაღლის შენობას 30 ბინით. მგზავრთნაკადის სწორი ანალიზი არ არის დამატებითი სერვისი — სწორედ ის განსაზღვრავს, შეძლებს თუ არა ლიფტი შენობის მოთხოვნების დაკმაყოფილებას პირველივე დღიდან." },
        { type: "h3", text: "შეცდომა #3 — არასწორი ტვირთამწეობის არჩევა" },
        { type: "p", text: "ოდნავ უფრო დიდი კაბინა ან მაღალი ტვირთამწეობა პროექტის საწყის ეტაპზე შედარებით მცირე დამატებით ინვესტიციას მოითხოვს. მომავალში არასაკმარისი ტვირთამწეობის მქონე ლიფტის შეცვლა კი სრულიად სხვა მასშტაბის ხარჯებთან არის დაკავშირებული." },
        { type: "h3", text: "შეცდომა #4 — სრული ექსპლუატაციის ღირებულების უგულებელყოფა" },
        { type: "p", text: "შეძენის ფასი მხოლოდ ერთი კომპონენტია. ასევე გასათვალისწინებელია:" },
        { type: "list", items: ["ტექნიკური მომსახურების კონტრაქტები", "ენერგომოხმარება", "პერიოდული მოდერნიზაცია", "სათადარიგო ნაწილები და სარემონტო სამუშაოები"] },
        { type: "p", text: "25-წლიანი ექსპლუატაციის პერიოდში ეს ხარჯები ხშირად ბევრად აღემატება საწყის ინვესტიციას." },
        { type: "h3", text: "შეცდომა #5 — შახტის ზომების არასწორი დაგეგმვა" },
        { type: "p", text: "ეს არის ერთ-ერთი ყველაზე ძვირადღირებული შეცდომა სამშენებლო პროცესში. როდესაც ლიფტის შახტის კორექტირება მშენებლობის დაწყების შემდეგ ხდება საჭირო, ცვლილებები მნიშვნელოვან დამატებით ხარჯებს და პროექტის შეფერხებას იწვევს." },
        { type: "h3", text: "შეცდომა #6 — მომწოდებლის არჩევა ადგილობრივი მხარდაჭერის გარეშე" },
        { type: "p", text: "საერთაშორისო ბრენდი, რომელსაც საქართველოში ტექნიკური მომსახურებისა და შეკეთების საკუთარი გუნდი არ ჰყავს, ნიშნავს, რომ პრობლემის შემთხვევაში დამოკიდებული ხართ გარე სპეციალისტებზე. როდესაც მოსახლეობა სართულებს შორის არის გაჩერებული, არც ლოდინი და არც უცხოეთიდან სპეციალისტის ჩამოსვლა მისაღები გამოსავალი არ არის." },
        { type: "h3", text: "შეცდომა #7 — ლიფტის დაგეგმვა ბოლო ეტაპზე" },
        { type: "p", text: "როდესაც ლიფტის შესახებ გადაწყვეტილებები სამშენებლო პროცესის საბოლოო ფაზაში მიიღება, კომპრომისები თითქმის გარდაუვალია. ამ ეტაპზე არჩევანი უკვე შეზღუდულია, ხოლო მოლაპარაკებების შესაძლებლობები მნიშვნელოვნად შემცირებული." },
        { type: "h3", text: "რას აკეთებს განსხვავებულად ZENA Elevators?" },
        { type: "p", text: "ნებისმიერი რეკომენდაციის გაცემამდე ვატარებთ:" },
        { type: "list", items: ["ლიფტის შახტის სრულ ტექნიკურ ანალიზს", "მგზავრთნაკადის შეფასებას", "შენობის ფუნქციური მოთხოვნების დეტალურ შესწავლას"] },
        { type: "p", text: "ჩვენ ვთანამშრომლობთ არქიტექტორებთან და ინჟინრებთან პროექტირების ეტაპიდანვე — და არა მას შემდეგ, რაც შენობის კონსტრუქცია უკვე დასრულებულია." },
        { type: "quote", text: "სწორი ლიფტის მონტაჟი შოურუმში არ იწყება. ის იწყება პროექტირების მაგიდასთან." },
        { type: "p", text: "დაგვიკავშირდით ZENA Elevators-ში და მიიღეთ უფასო პროფესიონალური კონსულტაცია საქართველოში." },
      ],
    },
  },

  /* ------------------------------------------------------------------ 3 */
  {
    slug: "elevator-installation-cost-georgia",
    category: "pricing",
    date: "2026-05-14",
    readMinutes: 4,
    title: {
      en: "How Much Does Elevator Installation Cost in Georgia? The Honest Answer.",
      ka: "რა ღირს ლიფტის მონტაჟი საქართველოში? — გულწრფელი პასუხი",
    },
    excerpt: {
      en: "Anyone who quotes a price before seeing your building is guessing. Here's what actually drives cost.",
      ka: "ვინც შენობის გაცნობამდე ზუსტ ფასს გეუბნებათ, ვარაუდობს. აი, რა განსაზღვრავს რეალურ ღირებულებას.",
    },
    media: { en: "installation team in a shaft", ka: "სამონტაჟო გუნდი შახტაში" },
    image: "/images/blog/elevator-installation-cost-georgia.webp",
    body: {
      en: [
        { type: "p", text: "This is the first question almost every developer asks. And quite rightly." },
        { type: "p", text: "But there is one important detail: if someone quotes you an exact price before getting any information about your building, they are really only guessing." },
        { type: "p", text: "And in the elevator industry, guesses are often very expensive." },
        { type: "h3", text: "What determines the cost of elevator installation in Georgia?" },
        { type: "p", text: "Every building is unique. Even two seemingly identical residential towers may need completely different technical solutions. The following factors affect the price:" },
        { type: "list", items: ["Number of floors and total travel height", "Required capacity — from a standard passenger elevator to heavy-load systems", "Elevator speed, which affects both the mechanical system and energy consumption", "Cabin design and interior finish", "Shaft parameters — dimensions, pit depth and headroom", "Door type and configuration — automatic or manual, single- or two-panel", "MRL (Machine Room Less) system or a traditional elevator, which affects both space and total cost"] },
        { type: "h3", text: "Why don't we name a price before reviewing the project?" },
        { type: "p", text: "A quick quote may look like a time saver, but it creates serious problems later. We have repeatedly seen developers choose an incompletely developed proposal and then discover that:" },
        { type: "list", items: ["The shaft doesn't match the selected system", "The capacity is insufficient", "The necessary technical support doesn't exist on the local market at all"] },
        { type: "p", text: "That is why our process always starts with a technical assessment, not a price list." },
        { type: "h3", text: "What do you get from ZENA Elevators?" },
        { type: "p", text: "Full transparency. Our commercial proposals are itemized in detail, and all costs are clearly visible from the start. There are no:" },
        { type: "list", items: ["Unexpected extra costs during installation", "Unclear line items", "Vague terms"] },
        { type: "p", text: "You know exactly what you're investing in and what you receive in return." },
        { type: "p", text: "Ask ZENA Elevators for a free, no-obligation cost estimate." },
      ],
      ka: [
        { type: "p", text: "ეს არის პირველი კითხვა, რომელსაც თითქმის ყველა დეველოპერი სვამს. და სრულიად სამართლიანად." },
        { type: "p", text: "თუმცა არსებობს ერთი მნიშვნელოვანი დეტალი: თუ ვინმე შენობის შესახებ ინფორმაციის მიღებამდე გთავაზობთ ზუსტ ფასს, ის რეალურად მხოლოდ ვარაუდობს." },
        { type: "p", text: "ლიფტების ინდუსტრიაში კი ვარაუდები ხშირად ძალიან ძვირი ჯდება." },
        { type: "h3", text: "რა განსაზღვრავს ლიფტის მონტაჟის ღირებულებას საქართველოში?" },
        { type: "p", text: "ყველა შენობა უნიკალურია. ორი გარეგნულად იდენტური საცხოვრებელი კოშკიც კი შეიძლება სრულიად განსხვავებულ ტექნიკურ გადაწყვეტას საჭიროებდეს. ფასზე გავლენას ახდენს შემდეგი ფაქტორები:" },
        { type: "list", items: ["სართულების რაოდენობა და საერთო გადაადგილების სიმაღლე", "მოთხოვნილი ტვირთამწეობა — სტანდარტული სამგზავრო ლიფტიდან მძიმე ტვირთის გადამზიდავ სისტემებამდე", "ლიფტის სიჩქარე, რომელიც გავლენას ახდენს როგორც მექანიკურ სისტემაზე, ასევე ენერგომოხმარებაზე", "კაბინის დიზაინი და ინტერიერის დასრულება", "შახტის ტექნიკური პარამეტრები — ზომები, ორმოს სიღრმე და ზედა სივრცის სიმაღლე", "კარის ტიპი და კონფიგურაცია — ავტომატური, მექანიკური, ერთფრთიანი ან ორფრთიანი", "MRL (Machine Room Less) სისტემა ან ტრადიციული ლიფტი, რაც გავლენას ახდენს როგორც სივრცეზე, ისე მთლიან ღირებულებაზე"] },
        { type: "h3", text: "რატომ არ ვასახელებთ ფასს პროექტის გაცნობამდე?" },
        { type: "p", text: "სწრაფი შეთავაზება შეიძლება დროის ეკონომიად ჩანდეს, მაგრამ მომავალში სერიოზულ პრობლემებს ქმნის. არაერთხელ გვინახავს შემთხვევა, როდესაც დეველოპერმა აირჩია არასრულად დამუშავებული შეთავაზება და შემდეგ აღმოაჩინა, რომ:" },
        { type: "list", items: ["შახტი არ შეესაბამება შერჩეულ სისტემას", "ტვირთამწეობა არასაკმარისია", "საჭირო ტექნიკური მხარდაჭერა ადგილობრივ ბაზარზე საერთოდ არ არსებობს"] },
        { type: "p", text: "სწორედ ამიტომ, ჩვენი პროცესი ყოველთვის ტექნიკური შეფასებით იწყება და არა ფასების სიით." },
        { type: "h3", text: "რას იღებთ ZENA Elevators-ისგან?" },
        { type: "p", text: "სრულ გამჭვირვალობას. ჩვენი კომერციული წინადადებები დეტალურად არის გაწერილი, ყველა ხარჯი თავიდანვე ნათლად ჩანს. არ არსებობს:" },
        { type: "list", items: ["მოულოდნელი დამატებითი ხარჯები მონტაჟის პროცესში", "გაუგებარი პუნქტები", "ბუნდოვანი პირობები"] },
        { type: "p", text: "თქვენ ზუსტად იცით, რაში დებთ ინვესტიციას და რას იღებთ სანაცვლოდ." },
        { type: "p", text: "მოითხოვეთ უფასო და ვალდებულებების გარეშე მომზადებული ფასთაღრიცხვა ZENA Elevators-ისგან." },
      ],
    },
  },

  /* ------------------------------------------------------------------ 4 */
  {
    slug: "new-elevator-or-modernization",
    category: "modernization",
    date: "2026-05-02",
    readMinutes: 3,
    title: {
      en: "New Elevator or Modernization? The Question That Could Save You Tens of Thousands.",
      ka: "ახალი ლიფტი თუ მოდერნიზაცია? გადაწყვეტილება, რომელმაც შესაძლოა ათიათასობით ლარი დაგიზოგოთ",
    },
    excerpt: {
      en: "The ride is rougher, the bills are climbing. Replace or modernize — the answer is rarely obvious.",
      ka: "სვლა უხეშდება, ხარჯები იზრდება. ჩანაცვლება თუ მოდერნიზაცია — პასუხი იშვიათად არის აშკარა.",
    },
    media: { en: "control panel and drive", ka: "მართვის პანელი და ამძრავი" },
    image: "/images/blog/new-elevator-or-modernization.webp",
    body: {
      en: [
        { type: "p", text: "Every building reaches the moment when its elevator clearly starts to show its age." },
        { type: "p", text: "The doors are slow. The ride is less comfortable. Maintenance costs are rising. And finally the question arises: full replacement or modernization?" },
        { type: "p", text: "The right answer is not always obvious. And a wrong decision means a significant financial loss in either case." },
        { type: "h3", text: "When is modernization the better choice?" },
        { type: "p", text: "If the elevator's main structure and shaft are in good technical condition, modernization can improve the system significantly for only a fraction of the cost of full replacement. Modernization makes sense when:" },
        { type: "list", items: ["The main mechanical structure is still sound", "Faults are becoming more frequent, but the system still works", "Energy consumption is high and modern technology can reduce it", "Safety systems are outdated and no longer meet current standards and certification requirements"] },
        { type: "h3", text: "When is full replacement necessary?" },
        { type: "p", text: "In some cases modernization is no longer effective or technically possible. For example, when:" },
        { type: "list", items: ["Main structural elements are heavily worn", "Spare parts are no longer produced or available on the market", "The existing system, even after modernization, cannot meet modern safety norms and building requirements"] },
        { type: "h3", text: "The ZENA approach: objective assessment, not a sales presentation" },
        { type: "p", text: "Our goal is to give you the most economically justified decision — not the one that is most profitable for us." },
        { type: "p", text: "Sometimes the best solution is targeted modernization. Sometimes it's a completely new elevator. In either case, we will explain in detail the reasons for the decision and all the possible alternatives." },
      ],
      ka: [
        { type: "p", text: "ყველა შენობის ცხოვრებაში დგება მომენტი, როდესაც ლიფტი ცვეთას უკვე აშკარად ამჟღავნებს." },
        { type: "p", text: "კარები ნელა მუშაობს. გადაადგილება ნაკლებად კომფორტული ხდება. ტექნიკური მომსახურების ხარჯები იზრდება. და საბოლოოდ დგება კითხვა: სრული ჩანაცვლება თუ მოდერნიზაცია?" },
        { type: "p", text: "სწორი პასუხი ყოველთვის აშკარა არ არის. არასწორი გადაწყვეტილება კი ორივე შემთხვევაში მნიშვნელოვან ფინანსურ დანაკარგს იწვევს." },
        { type: "h3", text: "როდის არის ლიფტის მოდერნიზაცია უკეთესი არჩევანი?" },
        { type: "p", text: "თუ ლიფტის ძირითადი კონსტრუქცია და შახტი კარგ ტექნიკურ მდგომარეობაშია, მოდერნიზაციამ შეიძლება მნიშვნელოვნად გააუმჯობესოს სისტემა სრული ჩანაცვლების ღირებულების მხოლოდ მცირე ნაწილად. მოდერნიზაცია მიზანშეწონილია, როდესაც:" },
        { type: "list", items: ["ძირითადი მექანიკური კონსტრუქცია ჯერ კიდევ გამართულია", "გაუმართაობები გახშირებულია, თუმცა სისტემა კვლავ ფუნქციონირებს", "ენერგომოხმარება მაღალია და თანამედროვე ტექნოლოგიებით შესაძლებელია მისი შემცირება", "უსაფრთხოების სისტემები მოძველებულია და აღარ აკმაყოფილებს მოქმედ სტანდარტებსა და სერტიფიცირების მოთხოვნებს"] },
        { type: "h3", text: "როდის არის სრული ჩანაცვლება აუცილებელი?" },
        { type: "p", text: "ზოგიერთ შემთხვევაში მოდერნიზაცია აღარ არის ეფექტური ან ტექნიკურად შესაძლებელი. მაგალითად, როდესაც:" },
        { type: "list", items: ["ძირითადი კონსტრუქციული ელემენტები ძლიერ არის გაცვეთილი", "სათადარიგო ნაწილები აღარ იწარმოება ან ბაზარზე ხელმისაწვდომი აღარ არის", "არსებული სისტემა მოდერნიზაციის შემდეგაც ვერ დააკმაყოფილებს თანამედროვე უსაფრთხოების ნორმებსა და სამშენებლო მოთხოვნებს"] },
        { type: "h3", text: "ZENA-ს მიდგომა: ობიექტური შეფასება და არა გაყიდვების პრეზენტაცია" },
        { type: "p", text: "ჩვენი მიზანია მოგაწოდოთ თქვენთვის ყველაზე ეკონომიურად გამართლებული გადაწყვეტილება და არა ჩვენთვის ყველაზე მომგებიანი." },
        { type: "p", text: "ზოგჯერ საუკეთესო გამოსავალი მიზნობრივი მოდერნიზაციაა. ზოგჯერ — სრულიად ახალი ლიფტის მონტაჟი. ნებისმიერ შემთხვევაში, დეტალურად აგიხსნით გადაწყვეტილების მიზეზებს და ყველა შესაძლო ალტერნატივას." },
      ],
    },
  },

  /* ------------------------------------------------------------------ 5 */
  {
    slug: "five-signs-your-elevator-needs-attention",
    category: "maintenance",
    date: "2026-04-16",
    readMinutes: 3,
    title: {
      en: "5 Signs Your Elevator Is Telling You Something's Wrong",
      ka: "5 ნიშანი, რომ თქვენი ლიფტი გაფრთხილებთ — ნუ უგულებელყოფთ მათ",
    },
    excerpt: {
      en: "Elevators rarely fail without warning. Here are five signals worth an immediate inspection.",
      ka: "ლიფტები გაფრთხილების გარეშე იშვიათად ფუჭდება. აი, ხუთი სიგნალი, რომელიც დაუყოვნებლივ შემოწმებას საჭიროებს.",
    },
    media: { en: "door operator inspection", ka: "კარის მექანიზმის შემოწმება" },
    image: "/images/blog/five-signs-your-elevator-needs-attention.webp",
    body: {
      en: [
        { type: "p", text: "Elevators don't usually fail without warning." },
        { type: "p", text: "The signs of a problem almost always exist — unnoticeable at first, then increasingly obvious. The key question is: can you react before the problem turns into an emergency?" },
        { type: "p", text: "Here are the five most common signals that need an immediate technical check." },
        { type: "h3", text: "1. Unusual noises" },
        { type: "p", text: "Squeaking, knocking, metallic sounds, rumbling or any other sound that wasn't there before. Mechanical systems don't make noise without a reason. If the sound has changed, something in the system has changed too — and, as a rule, not for the better." },
        { type: "h3", text: "2. Door problems" },
        { type: "p", text: "If the doors:" },
        { type: "list", items: ["Are late opening or closing", "Close with excessive force", "Don't close completely", "Suddenly reopen"] },
        { type: "p", text: "then a check is essential. The door system is one of the most common sources of elevator faults — and also one of the easiest to prevent." },
        { type: "h3", text: "3. Vibration during travel" },
        { type: "p", text: "A properly maintained elevator should move smoothly and softly. If you notice shaking, vibration or jolts during the ride, this may point to:" },
        { type: "list", items: ["Worn guide rails", "Damaged rollers", "Faults in other mechanical components"] },
        { type: "h3", text: "4. Stopping between floors" },
        { type: "p", text: "This is the problem residents notice fastest. When an elevator doesn't stop exactly at floor level, or stops between floors altogether, it is almost always a sign of a developing serious technical problem. Such incidents quickly erode confidence in the building's infrastructure." },
        { type: "h3", text: "5. Frequent unexpected shutdowns" },
        { type: "p", text: "A single emergency stop doesn't always mean a problem. But if such incidents repeat regularly, it points to a systemic fault:" },
        { type: "list", items: ["In the electrical system", "In mechanical parts", "In the control system"] },
        { type: "p", text: "Problems like this don't go away on their own." },
        { type: "h3", text: "Why does waiting cost more?" },
        { type: "p", text: "Every big problem starts with small signs. If you don't react in time, any one of them can grow into a complete mechanical breakdown. Emergency repair is always more expensive than scheduled maintenance." },
        { type: "p", text: "ZENA Elevators provides 24/7 emergency support and elevator maintenance in Georgia. If you think something isn't right — it's better to contact us early than late." },
      ],
      ka: [
        { type: "p", text: "ლიფტები, როგორც წესი, გაფრთხილების გარეშე არ ფუჭდება." },
        { type: "p", text: "პრობლემის ნიშნები თითქმის ყოველთვის არსებობს — თავიდან შეუმჩნეველი, შემდეგ კი სულ უფრო აშკარა. მთავარი კითხვაა: მოახერხებთ რეაგირებას მანამდე, სანამ პრობლემა ავარიულ მდგომარეობაში გადაიზრდება?" },
        { type: "p", text: "აქ არის ხუთი ყველაზე გავრცელებული სიგნალი, რომლებიც დაუყოვნებლივ ტექნიკურ შემოწმებას საჭიროებს." },
        { type: "h3", text: "1. უჩვეულო ხმები" },
        { type: "p", text: "ჭრიალი, კაკუნი, მეტალის ხმა, ხმაური ან ნებისმიერი სხვა ბგერა, რომელიც ადრე არ ისმოდა. მექანიკური სისტემები მიზეზის გარეშე არ ხმაურობენ. თუ ხმა შეიცვალა, ეს ნიშნავს, რომ სისტემაშიც რაღაც შეიცვალა. და, როგორც წესი, უკეთესობისკენ არა." },
        { type: "h3", text: "2. კარების მუშაობის პრობლემები" },
        { type: "p", text: "თუ კარები:" },
        { type: "list", items: ["იგვიანებს გახსნას ან დახურვას", "ზედმეტი ძალით იხურება", "სრულად არ იკეტება", "მოულოდნელად ხელახლა იღება"] },
        { type: "p", text: "მაშინ აუცილებელია შემოწმება. კარის სისტემა ლიფტის გაუმართაობის ერთ-ერთი ყველაზე გავრცელებული წყაროა და ამავე დროს ერთ-ერთი ყველაზე მარტივად პრევენცირებადი პრობლემა." },
        { type: "h3", text: "3. ვიბრაცია გადაადგილებისას" },
        { type: "p", text: "გამართულად მოვლილი ლიფტი შეუფერხებლად და რბილად უნდა მოძრაობდეს. თუ მგზავრობისას შეამჩნიეთ რყევა, ვიბრაცია ან ბიძგები, ეს შესაძლოა მიუთითებდეს:" },
        { type: "list", items: ["გზამკვლევი რელსების ცვეთაზე", "როლიკების დაზიანებაზე", "სხვა მექანიკური კომპონენტების გაუმართაობაზე"] },
        { type: "h3", text: "4. გაჩერება სართულებს შორის" },
        { type: "p", text: "ეს არის პრობლემა, რომელსაც მაცხოვრებლები ყველაზე სწრაფად ამჩნევენ. როდესაც ლიფტი არ ჩერდება ზუსტად სართულის დონეზე ან საერთოდ სართულებს შორის ჩერდება, ეს თითქმის ყოველთვის სერიოზული ტექნიკური პრობლემის განვითარების ნიშანია. ასეთი შემთხვევები სწრაფად ამცირებს შენობის ინფრასტრუქტურისადმი ნდობას." },
        { type: "h3", text: "5. ხშირი გაუთვალისწინებელი გათიშვები" },
        { type: "p", text: "ერთჯერადი ავარიული გაჩერება ყოველთვის პრობლემას არ ნიშნავს. მაგრამ თუ მსგავსი შემთხვევები რეგულარულად მეორდება, ეს უკვე მიუთითებს სისტემურ გაუმართაობაზე:" },
        { type: "list", items: ["ელექტრულ სისტემაში", "მექანიკურ ნაწილებში", "მართვის სისტემაში"] },
        { type: "p", text: "ასეთი პრობლემები თავისით არ ქრება." },
        { type: "h3", text: "რატომ ჯდება ლოდინი უფრო ძვირი?" },
        { type: "p", text: "ყველა დიდი პრობლემა პატარა ნიშნებით იწყება. თუ დროულად არ მოხდება რეაგირება, ნებისმიერი მათგანი შეიძლება გადაიზარდოს სრულ მექანიკურ მწყობრიდან გამოსვლაში. გადაუდებელი შეკეთება ყოველთვის უფრო ძვირია, ვიდრე დაგეგმილი ტექნიკური მომსახურება." },
        { type: "p", text: "ZENA Elevators უზრუნველყოფს 24/7 გადაუდებელ მხარდაჭერასა და ლიფტების ტექნიკურ მომსახურებას საქართველოში. თუ ფიქრობთ, რომ რაღაც რიგზე არ არის — სჯობს დაგვიკავშირდეთ ადრე, ვიდრე გვიან." },
      ],
    },
  },
]

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
export const recentPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
