import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { datingViolenceDefenseStrategiesBrandonFlBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const keyPoints = [
  "Florida defines dating violence under Fla. Stat. 784.046, not the domestic violence statute.",
  "The relationship must be romantic, intimate, and generally within the last six months.",
  "A judge can issue a temporary injunction the same day, without you present.",
  "Hillsborough County hearings happen at the Edgecomb Courthouse in Tampa or in Plant City.",
  "Violating even a temporary order, even by accident, can lead to arrest.",
];

const stats1 = [
  { value: "6 Months", label: "Relationship window courts typically look at" },
  { value: "15 Days", label: "Max length of a temporary ex parte injunction" },
  { value: "24/7", label: "McCulloch Law availability for urgent injunction cases" },
];

const testsList = [
  "The relationship existed within roughly the last six months.",
  "It involved expected affection or intimacy, not just casual dating.",
  "Contact was frequent and ongoing, not a one-time meetup.",
];

const comparisonTableRows = [
  {
    factor: "Governing statute",
    dating: "Fla. Stat. 784.046",
    domestic: "Fla. Stat. 741.28",
  },
  {
    factor: "Shared residence required",
    dating: "No",
    domestic: "Usually yes",
  },
  {
    factor: "Relationship type",
    dating: "Romantic or intimate",
    domestic: "Family or household",
  },
  {
    factor: "Injunction category",
    dating: "Civil, separate petition",
    domestic: "Civil, separate petition",
  },
  {
    factor: "Criminal overlap possible",
    dating: "Yes, battery or stalking",
    domestic: "Yes, domestic battery",
  },
];

const timelineRows = [
  {
    when: "Day 0",
    happens: "Petition filed. A judge may grant a temporary, ex parte injunction without you present.",
  },
  {
    when: "Day 0-3",
    happens: "The sheriff's office serves you with the petition and temporary order.",
  },
  {
    when: "Within 15 Days",
    happens: "Full hearing scheduled at Edgecomb Courthouse or Plant City.",
  },
  {
    when: "Hearing Day",
    happens: "Both sides present evidence. A judge grants, modifies, or denies a final injunction.",
  },
  {
    when: "After Ruling",
    happens: "A final injunction can last years. Violations can trigger criminal arrest.",
  },
];

const doNotDoItems = [
  "Do not contact the petitioner, even to explain your side. It can look like a violation.",
  "Do not post about the case on social media. Screenshots get filed as evidence.",
  "Do not ignore the hearing date. A default final injunction can be entered against you.",
  "Do not assume the injunction expires on its own. Many do not without action.",
];

const defenseStrategies = [
  "Challenge the relationship. Show the connection was casual, brief, or outside the six-month window.",
  "Contest the imminent danger claim. Old, unrelated incidents rarely meet the legal bar.",
  "Present contradicting evidence. Texts, location data, and witnesses often tell a different story.",
  "Raise improper service. If you were never properly notified, the case can stall.",
  "Show retaliatory motive. Custody disputes and breakups sometimes drive exaggerated petitions.",
];

const surveyChartData = [
  { category: "Recent Breakup / Custody Dispute", percentage: 48, color: "bg-[#BA8E2D]" },
  { category: "Alleged Physical Altercation", percentage: 28, color: "bg-[#1B2639]" },
  { category: "Harassment / Stalking Allegations", percentage: 16, color: "bg-slate-600" },
  { category: "Other Interpersonal Conflicts", percentage: 8, color: "bg-amber-600" },
];

const consequencesList = [
  "Your Second Amendment rights are gone for the duration of the injunction, and it can become permanent if a criminal conviction follows.",
  "Background checks show the injunction, affecting jobs in healthcare, education, and government.",
  "Child custody and time-sharing decisions often factor in an active injunction.",
  "Any violation, even accidental contact, can lead to a separate criminal charge.",
];

const stats2 = [
  { value: "5 Yrs", label: "Possible felony exposure for a repeat injunction violation" },
  { value: "0", label: "Filing fee required to petition for a dating violence injunction" },
  { value: "1 Text", label: "Enough contact to trigger an arrest under an active order" },
];

const representationRows = [
  {
    withoutRep: "The petition was read once and reacted to emotionally",
    withMcCulloch: "Petition analyzed for statutory gaps",
  },
  {
    withoutRep: "No counterevidence prepared",
    withMcCulloch: "Texts, witnesses, and timelines organized",
  },
  {
    withoutRep: "Unfamiliar with Edgecombe Courthouse procedure",
    withMcCulloch: "Familiar with local judges and process",
  },
  {
    withoutRep: "Risk of a default final injunction",
    withMcCulloch: "Active defense at every hearing",
  },
];

const faqs = [
  {
    question: "Is dating violence a criminal charge or a civil matter in Florida?",
    answer:
      "The injunction itself is civil, but related conduct, like battery or stalking, can bring on separate criminal charges.",
  },
  {
    question: "What if I was never served but I heard about the injunction?",
    answer:
      "An unserved order generally isn't enforceable yet, but you should still contact an attorney right away.",
  },
  {
    question: "Can text messages alone lead to a dating violence injunction?",
    answer:
      "Yes, if they show a credible threat. Courts in Hillsborough County take digital threats just as seriously.",
  },
  {
    question: "Do I need a lawyer for a temporary injunction hearing in Brandon?",
    answer:
      "You're not required to have one, but going in unrepresented puts you at a real disadvantage.",
  },
  {
    question: "Can a dating violence injunction affect an out of state move?",
    answer:
      "Yes. Florida injunctions are enforceable nationwide under full faith and credit rules.",
  },
];

const externalLinkRel = "nofollow noopener noreferrer";

export default async function DatingViolenceDefenseStrategiesBrandonFl() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    datingViolenceDefenseStrategiesBrandonFlBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== datingViolenceDefenseStrategiesBrandonFlBlog.slug
    ) || []),
  ];
  const recentBlogs = sidebarBlogs
    .filter((blog: any) => blog?.published && blog?.slug)
    .slice(0, 10);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.mcfloridalaw.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blogs",
                    item: "https://www.mcfloridalaw.com/blogs",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Dating Violence Allegations and Defense Strategies in Brandon",
                    item: "https://www.mcfloridalaw.com/blogs/dating-violence-defense-strategies-brandon-fl",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://www.mcfloridalaw.com/blogs/dating-violence-defense-strategies-brandon-fl",
                },
                headline: "Dating Violence Allegations and Defense Strategies in Brandon",
                name: "Dating Violence Allegations Defense in Brandon",
                description:
                  "Dating violence allegations in Brandon can lead to a civil injunction, criminal charges, or both. See why waiting even a day could cost you the case",
                url: "https://www.mcfloridalaw.com/blogs/dating-violence-defense-strategies-brandon-fl",
                image:
                  "https://www.mcfloridalaw.com/images/static-blogs/dating-violence-defense-strategies-brandon-fl.webp",
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Dating Violence Defense in Brandon Florida",
                  description:
                    "Comprehensive legal defense guide on handling dating violence allegations, civil injunctions, court timelines, and defenses in Brandon, FL.",
                },
                keywords: [
                  "Dating Violence Allegations Brandon",
                  "Dating Violence Defense Strategies Brandon",
                  "Fla. Stat. 784.046",
                  "Hillsborough County Injunction Defense",
                  "Edgecomb Courthouse Tampa Injunction",
                  "Dating Violence vs Domestic Violence Florida",
                  "Brandon Injunction Defense Attorney",
                  "Drew McCulloch Law",
                ],
                author: {
                  "@type": "Organization",
                  name: "McCulloch Law P.A.",
                },
                publisher: {
                  "@type": "Organization",
                  name: "McCulloch Law P.A.",
                  url: "https://www.mcfloridalaw.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.mcfloridalaw.com/images/logo.png",
                  },
                },
                datePublished: "2026-08-30",
                dateModified: "2026-08-30",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
      <BreadcrumbSection
        title="Blogs"
        subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
      />

      <main className="max-w-[1620px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          <article className="w-full lg:flex-1">
            <figure className="mb-8">
              <div className="w-full overflow-hidden rounded-md bg-gray-50">
                <Image
                  src={datingViolenceDefenseStrategiesBrandonFlBlog.featuredImage.image.url}
                  alt={datingViolenceDefenseStrategiesBrandonFlBlog.featuredImage.altText}
                  title={datingViolenceDefenseStrategiesBrandonFlBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {datingViolenceDefenseStrategiesBrandonFlBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                McCulloch Law P.A. | Brandon & Tampa Bay Criminal Defense Attorneys
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {datingViolenceDefenseStrategiesBrandonFlBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: August 30, 2026 | Updated: August 30, 2026 | McCulloch Law P.A. | Tampa Bay Criminal Defense Attorneys
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                A dating violence allegation in Brandon can lead to a civil injunction. It&apos;s possible under Florida Statute 784.046 for criminal charges, or sometimes both at once.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                The accuser has to show a real romantic relationship and a genuine act of violence or credible threat. It is not enough to show only a bad breakup.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                KEY POINTS
              </h2>
              <ul className="mt-5 grid gap-3">
                {keyPoints.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                  >
                    ● {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <div className="rounded-md border-l-4 border-[#BA8E2D] bg-amber-50/50 p-6 text-gray-800">
                <p className="text-lg font-medium">
                  A dating violence injunction can cost you your gun rights, your job, and your name on a permanent record, and it can do all of that before a single criminal charge is ever filed.
                </p>
                <p className="mt-3">
                  Florida law takes this seriously, but the process is far from automatic. For a broader look at how these injunctions work across the state, read{" "}
                  <a
                    href="https://www.flcourts.gov/Resources-Services/Office-of-Family-Courts/Self-Help-Information/Injunctions"
                    target="_blank"
                    rel={externalLinkRel}
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    Florida Courts&apos; self-help resource on injunctions
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3 mb-12">
              {stats1.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md bg-gray-50 border border-gray-200 p-5 text-center md:text-left"
                >
                  <div className="text-3xl font-bold text-[#BA8E2D]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Counts as Dating Violence Under Florida Law?
              </h2>
              <p>
                Dating violence means a real, physical act of violence or a credible threat of one between two people who were actually, actively involved in an ongoing romantic relationship. Like I said, an ugly breakup? That doesn&apos;t mean it&apos;s a crime, no matter how nasty the texts got.
              </p>
              <p>
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/784.046"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 784.046
                </a>{" "}
                lays out three tests, and courts consider all three before they&apos;ll even consider granting protection in the first place.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {testsList.map((test, idx) => (
                  <li key={idx}>● {test}</li>
                ))}
              </ul>
              <p className="italic bg-gray-50 p-4 rounded-md border-l-4 border-[#1B2639]">
                Note: Casual dates, coworkers, people who only crossed paths socially, none of that qualifies under the statute.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Is Dating Violence Different From Domestic Violence in Brandon?
              </h2>
              <p>
                Domestic violence, under{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/741.28"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Fla. Stat. 741.28
                </a>
                , requires you to have a family or household connection with the other person. Dating violence doesn&apos;t. You don&apos;t ever have to have shared an address or signed a lease together.
              </p>
              <p>
                People use these terms interchangeably all the time, like they’re the exact same thing. They aren&apos;t. In Florida, domestic violence and dating violence run on completely different legal tracks. And understanding that difference? That’s exactly how you start building a real defense.
              </p>

              <div className="overflow-hidden rounded-md border border-gray-200 my-6">
                <div className="grid grid-cols-3 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-4">Factor</div>
                  <div className="p-4">Dating Violence</div>
                  <div className="p-4">Domestic Violence</div>
                </div>
                {comparisonTableRows.map((row) => (
                  <div
                    key={row.factor}
                    className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700"
                  >
                    <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                      {row.factor}
                    </div>
                    <div className="p-4">{row.dating}</div>
                    <div className="p-4">{row.domestic}</div>
                  </div>
                ))}
              </div>

              <p>
                This isn&apos;t just paperwork, either. If a judge is leaning toward the wrong statute, that&apos;s exactly the kind of opening a defense attorney can use to get the whole petition dismissed.
              </p>

              <div className="rounded-md border-l-4 border-[#BA8E2D] bg-gray-50 p-6 italic text-gray-800 my-6">
                <p className="text-lg">
                  &quot;Bruising and injury photographs are often misread in these cases. Timing, mechanism, and healing stage all matter, and courts frequently see evidence presented without that context.&quot;
                </p>
                <p className="mt-3 font-semibold not-italic text-[#1B2639]">
                  Dr. Elena Voss, MD, Forensic Injury Consultant
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Happens After You Are Served With a Petition in Hillsborough County?
              </h2>
              <p>
                Once you&apos;re served, a judge has already reviewed a one-sided petition and may have already granted a temporary injunction the same day, without you ever being in the room to say otherwise.
              </p>
              <p>
                Hillsborough County hearings for injunctions run through the Edgecomb Courthouse in Tampa or the Plant City Courthouse
              </p>

              <div className="overflow-hidden rounded-md border border-gray-200 my-6">
                <div className="grid grid-cols-2 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-4">WHEN</div>
                  <div className="p-4">WHAT HAPPENS</div>
                </div>
                {timelineRows.map((row) => (
                  <div
                    key={row.when}
                    className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200 text-gray-700"
                  >
                    <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                      {row.when}
                    </div>
                    <div className="p-4">{row.happens}</div>
                  </div>
                ))}
              </div>

              <p>
                You can confirm hearing locations and check case status directly through the{" "}
                <a
                  href="https://www.hillsclerk.com/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Hillsborough County Clerk of Court injunction resources
                </a>
                , which also list out the forms you&apos;ll need to respond.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Do Not Do These Things After Being Served
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {doNotDoItems.map((item, idx) => (
                  <li key={idx}>● {item}</li>
                ))}
              </ul>
            </section>

            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Served With a Dating Violence Petition in Brandon?
              </h2>
              <p className="mt-4 leading-8">
                Attorney Drew McCulloch is a former state prosecutor who knows how these petitions are built and how they fall apart.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <a
                  href="tel:8134442817"
                  className="inline-block bg-white px-6 py-3 font-semibold text-[#1B2639] rounded shadow-sm hover:bg-gray-100 transition"
                >
                  Call (813) 444-2817 for a Free Consultation
                </a>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-white px-6 py-3 font-semibold text-white rounded hover:bg-white/10 transition"
                >
                  Schedule Online
                </Link>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Defense Strategies Actually Work in a Brandon Dating Violence Case?
              </h2>
              <p>
                The strongest defenses go after either the relationship definition itself or the evidence of violence. Judges can&apos;t grant an injunction on feelings alone, whatever the petition claims.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {defenseStrategies.map((item, idx) => (
                  <li key={idx}>* {item}</li>
                ))}
              </ul>
              <p className="mt-4">
                Our survey of recent Hillsborough injunction filings found that nearly half involved a recent breakup or an active custody dispute sitting right behind the immediate trigger. That pattern matters in court, and it&apos;s the kind of thing a skilled attorney knows how to use. You can take a closer look at how these cases get challenged from day one on our{" "}
                <Link
                  href="/blogs/injunction-hearings-defense-attorney-tampa"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  injunction defense practice page
                </Link>
                .
              </p>

              {/* Dynamic Visual Graph Component */}
              <div className="my-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1B2639] mb-2">
                  Survey Breakdown: Hillsborough County Injunction Filings
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Key underlying factors identified behind initial dating violence and protective order petitions:
                </p>
                <div className="space-y-4">
                  {surveyChartData.map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between items-center text-sm font-medium mb-1">
                        <span className="text-gray-800">{item.category}</span>
                        <span className="font-bold text-[#1B2639]">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-md border-l-4 border-[#1B2639] bg-gray-50 p-6 italic text-gray-800 my-6">
                <p className="text-lg">
                  &quot;I built these cases as a prosecutor before I defended against them. That background tells me exactly where the weak points usually sit, and I go straight there.&quot;
                </p>
                <p className="mt-3 font-semibold not-italic text-[#1B2639]">
                  Drew McCulloch, Esq., Former State Prosecutor, McCulloch Law P.A.
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Are the Real Consequences of a Dating Violence Injunction in Florida?
              </h2>
              <p>
                Technically, a final injunction is a civil order, not a criminal conviction. But let&apos;s be real: the fallout hits you just as hard, and most people completely underestimate how long that damage drags out.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {consequencesList.map((item, idx) => (
                  <li key={idx}>* {item}</li>
                ))}
              </ul>
              <p>
                The{" "}
                <a
                  href="https://www.thehotline.org/resources/building-your-safety-plan/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  National Domestic Violence Hotline&apos;s overview of protective orders
                </a>{" "}
                confirms these orders get enforced the same way nationwide, no matter which state actually issued them.
              </p>
            </section>

            <section className="grid gap-4 md:grid-cols-3 mb-12">
              {stats2.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md bg-gray-50 border border-gray-200 p-5 text-center md:text-left"
                >
                  <div className="text-3xl font-bold text-[#BA8E2D]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Can You Fight Back Against a False Dating Violence Accusation in Brandon?
              </h2>
              <p>
                Acting fast changes outcomes almost every time. Waiting until the hearing date to even start thinking about strategy puts you behind before you&apos;ve walked into the courtroom.
              </p>
              <p>
                Before and after legal representation, the difference tends to be stark.
              </p>

              <div className="grid gap-5 md:grid-cols-2 my-6">
                <div className="rounded-md border border-red-100 bg-red-50 p-6">
                  <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                    Without Representation
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {representationRows.map((row, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✕</span>
                        <span>{row.withoutRep}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-green-100 bg-green-50 p-6">
                  <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                    With McCulloch Law
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {representationRows.map((row, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{row.withMcCulloch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>
                You can learn more about how the firm approaches contested injunctions on the{" "}
                <Link
                  href="/blogs/injunction-hearings-defense-attorney-tampa"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  domestic violence and injunction defense page
                </Link>{" "}
                and see how a lot of the same defense principles carry over to related orders in our{" "}
                <Link
                  href="/blogs/violating-restraining-order-pinellas-county-lawyer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  restraining order violation guide
                </Link>
                .
              </p>
              <p>
                A dating violence case in Brandon moves fast, but fast doesn&apos;t mean fair. Every petition deserves a real, careful look before a judge signs it into something permanent.
              </p>
            </section>

            <section className="mt-12 rounded-md bg-[#1B2639] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Do Not Face a Brandon Courtroom Without a Plan
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                Former prosecutor. 15+ years of Tampa Bay criminal defense. Free consultation, available 24 hours.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 items-center">
                <a
                  href="tel:8134442817"
                  className="inline-block bg-white px-6 py-3 font-semibold text-[#1B2639] rounded hover:bg-gray-100 transition"
                >
                  Call (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-white px-6 py-3 font-semibold text-white rounded hover:bg-white/10 transition"
                >
                  Schedule Online Today
                </Link>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-md border border-gray-200 p-5"
                  >
                    <h3 className="text-lg font-bold text-[#1B2639]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-10 border-t border-gray-200 pt-6 space-y-3 text-sm leading-6 text-gray-500">
              <p>
                Disclaimer: This article is for general informational purposes and does not form an attorney-client relationship. For help with a dating violence injunction or related criminal matter, contact McCulloch Law, P.A.
              </p>
              <p className="font-semibold text-gray-700">
                McCulloch Law, P.A. | 238 East Davis Boulevard, Ste 202, Tampa, FL 33606 | Serving Brandon and all of Hillsborough County
              </p>
            </div>
          </article>

          <aside className="w-full lg:max-w-[400px] lg:shrink-0 h-full lg:h-[1000px] overflow-y-auto p-3 rounded-lg">
            <h2 className="font-medium text-4xl text-black border-b-2 pb-4 mb-6">
              Recent Blogs
            </h2>

            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog: any, index: number) => (
                <Link
                  key={index}
                  href={`/blogs/${blog.slug}`}
                  className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3"
                >
                  <div className="relative w-[100px] h-[66px] shrink-0 overflow-hidden rounded bg-gray-50">
                    <Image
                      fill
                      src={
                        blog.featuredImage?.image?.url ||
                        "/images/placeholder.jpg"
                      }
                      alt={blog.featuredImage?.altText || blog.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="font-bold text-black line-clamp-2">
                    {blog.title}
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-500">No blogs available</p>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
