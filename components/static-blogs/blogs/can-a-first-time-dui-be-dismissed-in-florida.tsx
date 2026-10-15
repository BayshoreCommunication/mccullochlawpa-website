import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { canAFirstTimeDuiBeDismissedInFloridaBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "A first offense doesn't buy you automatic leniency under Florida law.",
  "Dismissal comes from procedural failure, not sympathy. Think illegal stops, broken chain of custody, machine errors.",
  "The Intoxilyzer 8000 isn't infallible. A 2026 Duval County ruling on unauthorized repairs is reshaping breath test challenges statewide.",
  "The clock starts at arrest. You get 10 days to request a formal review hearing before the license suspension locks in.",
  "Early motion practice changes your leverage before the state ever offers a plea.",
];

const stats = [
  { value: "91.9%", label: "Statewide DUI guilty rate, 2023 to 2025" },
  { value: "1.2%", label: "Statewide DUI dismissal rate" },
  { value: "10 Days", label: "To request a license review hearing" },
];

const caseWeaknesses = [
  {
    detail: "Failed breath test",
    looksLike: "Guaranteed conviction",
    actuallyProves: "Depends entirely on maintenance and calibration records",
  },
  {
    detail: "Poor field sobriety performance",
    looksLike: "Clear impairment",
    actuallyProves: "Could reflect fatigue, footwear, or terrain",
  },
  {
    detail: 'Officer says "erratic driving"',
    looksLike: "Valid stop",
    actuallyProves: "Must be a specific, articulable traffic violation",
  },
  {
    detail: "No video of the stop",
    looksLike: "Nothing to challenge",
    actuallyProves: "Often opens the door to challenging the officer's account directly",
  },
];

const withoutAttorney = [
  "Breath test treated as final and unchallengeable",
  "Field sobriety scoring accepted at face value",
  "10-day license window missed entirely",
  "Early plea taken without reviewing the stop's legality",
];

const withAttorney = [
  "Maintenance and calibration logs subpoenaed immediately",
  "Officer testimony cross-examined against body-cam footage",
  "Formal review hearing requested inside the 10-day window",
  "Motion to suppress filed before any plea is discussed",
];

const dismissalFlow = [
  {
    step: "1",
    title: "Arrest and Citation",
    text: "The 10-day administrative clock starts immediately, separate from the criminal case.",
  },
  {
    step: "2",
    title: "Case File Review",
    text: "Defense attorney pulls the arrest report, dashcam and body-cam footage, and breath test machine logs.",
  },
  {
    step: "3",
    title: "Motion Practice",
    text: "Motions to suppress filed against an illegal stop, faulty machine maintenance, or a flawed arrest.",
  },
  {
    step: "4",
    title: "Suppression Hearing",
    text: "A judge rules on whether the challenged evidence, such as the breath test, can be used at all.",
  },
  {
    step: "5",
    title: "Outcome",
    text: "Dismissal, reduction to reckless driving, or trial, depending on what evidence survives.",
  },
];

const faqs = [
  {
    question: "Will a first DUI show up on a background check in Florida?",
    answer:
      "Yes, unless it's dismissed or sealed. A conviction stays public permanently, and DUIs can't be expunged.",
  },
  {
    question: "Can you refuse a breath test on a first DUI in Florida?",
    answer:
      "You can, but refusal triggers an automatic one-year license suspension under implied consent law, separate from the DUI itself.",
  },
  {
    question: "Does a first DUI always require an ignition interlock device?",
    answer:
      "No. It's optional on a standard first offense, mandatory for six months if BAC hit .15 or a minor was in the car.",
  },
];

export default async function CanAFirstTimeDuiBeDismissedInFlorida() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    canAFirstTimeDuiBeDismissedInFloridaBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== canAFirstTimeDuiBeDismissedInFloridaBlog.slug
    ) || []),
  ];
  const recentBlogs = sidebarBlogs
    .filter((blog: any) => blog?.published && blog?.slug)
    .slice(0, 10);

  const canonicalUrl = `https://www.mcfloridalaw.com/blogs/${canAFirstTimeDuiBeDismissedInFloridaBlog.slug}`;

  return (
    <>
      {/* Schema / Structured Data for SEO */}
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
                    name: canAFirstTimeDuiBeDismissedInFloridaBlog.title,
                    item: canonicalUrl,
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                },
                headline: canAFirstTimeDuiBeDismissedInFloridaBlog.metaTitle,
                name: canAFirstTimeDuiBeDismissedInFloridaBlog.title,
                description:
                  canAFirstTimeDuiBeDismissedInFloridaBlog.metaDescription,
                url: canonicalUrl,
                image: `https://www.mcfloridalaw.com${canAFirstTimeDuiBeDismissedInFloridaBlog.featuredImage.image.url}`,
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Can a First-Time DUI Be Dismissed in Florida",
                  description:
                    canAFirstTimeDuiBeDismissedInFloridaBlog.featuredImage.description,
                },
                keywords: [
                  "Can a First-Time DUI Be Dismissed in Florida",
                  "Florida first DUI dismissal",
                  "how to get a DUI dismissed in Florida",
                  "Florida Statute 316.193",
                  "Intoxilyzer 8000 challenge Florida",
                  "Florida DUI 10 day rule",
                  "Tampa DUI defense attorney",
                  "Hillsborough County DUI lawyer",
                  "McCulloch Law P.A.",
                  "Drew McCulloch",
                ],
                author: {
                  "@type": "Organization",
                  name: "McCulloch Law, P.A.",
                },
                publisher: {
                  "@type": "Organization",
                  name: "McCulloch Law, P.A.",
                  url: "https://www.mcfloridalaw.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.mcfloridalaw.com/images/logo.png",
                  },
                },
                datePublished: "2026-10-14",
                dateModified: "2026-10-14",
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
            {/* Featured Image Section with Caption */}
            <figure className="w-full overflow-hidden rounded-md bg-gray-50 mb-8 border border-gray-200">
              <Image
                src={canAFirstTimeDuiBeDismissedInFloridaBlog.featuredImage.image.url}
                alt={canAFirstTimeDuiBeDismissedInFloridaBlog.featuredImage.altText}
                title={canAFirstTimeDuiBeDismissedInFloridaBlog.featuredImage.title}
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="p-3 text-sm italic text-gray-600 bg-gray-50 border-t border-gray-200">
                {canAFirstTimeDuiBeDismissedInFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            {/* Post Header & Dates (American Format) */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                DUI Defense | Florida Criminal Defense
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {canAFirstTimeDuiBeDismissedInFloridaBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600 font-medium">
                Published: October 14, 2026 | Updated: October 14, 2026 | McCulloch Law, P.A. | Florida DUI Defense
              </p>
            </div>

            {/* Lead Section - Hero Navy Box */}
            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10 shadow-sm">
              <p className="text-xl md:text-2xl leading-relaxed text-justify italic font-light">
                Yes, a Florida court can dismiss a first-time DUI charge. Procedures such as a stop without real cause, a breath test machine without maintenance, or an arrest that cuts corners can kill the case. Only 1.2% of DUI cases in the state are dismissed, and that percentage rises when the arrest is investigated and the crack is discovered.
              </p>
            </section>

            {/* Key Takeaways */}
            <section className="mb-10 rounded-md border-l-4 border-[#BA8E2D] bg-[#F2F4F8] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-[#1B2639] uppercase tracking-wide">
                KEY TAKEAWAYS
              </h2>
              <ul className="mt-5 grid gap-3">
                {takeaways.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800"
                  >
                    <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">
                      &#9679;
                    </span>
                    <span className="leading-7 text-justify font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 1: A First DUI Offense Gets No Legal Head Start */}
            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                A First DUI Offense Gets No Legal Head Start
              </h2>
              <p className="text-justify">
                Under{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2026/316.193"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Florida Statute 316.193
                </a>
                , a first DUI is a misdemeanor, as long as nobody got hurt, there was no minor in the car, and your BAC didn&apos;t hit .15. Still, that&apos;s up to six months in jail, fines from $500 to $1,000, a license revocation running six months to a year, and DUI school you can&apos;t skip. None of that gets softer just because you&apos;ve never been arrested before.
              </p>

              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-3 my-8">
                {stats.map((item) => (
                  <div
                    key={item.value}
                    className="rounded-md bg-[#1B2639] border border-gray-200 p-6 text-center text-white shadow-sm"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#BA8E2D]">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-200">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-justify">
                &ldquo;First offense&rdquo; affects your sentence. A prosecutor looks at how solid the stop was, whether the evidence will hold up, and whether the officer followed the rules. Being a first-timer helps at sentencing. It doesn&apos;t help you win and treating it like a built-in defense is exactly why so many people plead out on a case that never should have gotten that far.
              </p>
            </section>

            {/* Section 2: What Actually Gets a DUI Case Dismissed in Florida? */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Actually Gets a DUI Case Dismissed in Florida?
              </h2>
              <p className="text-justify">
                There are really only four ways a first-time DUI gets dismissed in Florida, and they show up again and again in dismissal orders coming out of Hillsborough and the counties around it.
              </p>

              <ul className="mt-5 grid gap-4">
                <li className="rounded-md border border-gray-200 bg-white p-5 text-gray-700 shadow-sm flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">
                    &#9679;
                  </span>
                  <div className="leading-7 text-justify">
                    <strong className="text-[#1B2639]">The stop was illegal.</strong>{" "}
                    Florida Statute 901.151 requires specific, articulable facts, not just a hunch. Swerving to dodge a pothole isn&apos;t the same as drifting across two lanes.
                  </div>
                </li>

                <li className="rounded-md border border-gray-200 bg-white p-5 text-gray-700 shadow-sm flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">
                    &#9679;
                  </span>
                  <div className="leading-7 text-justify">
                    <strong className="text-[#1B2639]">The breath test wasn&apos;t administered right.</strong>{" "}
                    The Intoxilyzer 8000 needs a full, uninterrupted 20 minutes of observation before the sample. An officer who steps away breaks that chain fast.
                  </div>
                </li>

                <li className="rounded-md border border-gray-200 bg-white p-5 text-gray-700 shadow-sm flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">
                    &#9679;
                  </span>
                  <div className="leading-7 text-justify">
                    <strong className="text-[#1B2639]">The machine itself failed maintenance.</strong>{" "}
                    Florida requires monthly agency checks and annual{" "}
                    <a
                      href="https://www.fdle.state.fl.us/Alcohol-Testing-Program/Intoxilyzer-8000-Records"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                    >
                      FDLE-verified inspections
                    </a>{" "}
                    under Chapter 11D-8, F.A.C. A gap in those logs, or an unauthorized repair, can get the reading tossed.
                  </div>
                </li>

                <li className="rounded-md border border-gray-200 bg-white p-5 text-gray-700 shadow-sm flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">
                    &#9679;
                  </span>
                  <div className="leading-7 text-justify">
                    <strong className="text-[#1B2639]">There was no real probable cause to arrest.</strong>{" "}
                    A legal stop doesn&apos;t automatically mean a legal arrest. The officer still needs more than a gut feeling.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 3: The Breath Test Everyone Trusts Just Took a Statewide Hit */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Breath Test Everyone Trusts Just Took a Statewide Hit
              </h2>
              <p className="text-justify">
                Most first-time DUI defendants have no idea this happened. In August 2026, a three-judge panel in Duval County threw out an Intoxilyzer 8000 result after discovering the rubber O-rings inside the machine had been swapped during &ldquo;routine maintenance,&rdquo; except it wasn&apos;t authorized by an approved facility. A part that costs about a dollar. That&apos;s all it took to knock out a failed breath test.
              </p>

              {/* Quote Block */}
              <blockquote className="my-8 rounded-md border-l-4 border-[#BA8E2D] bg-[#FFF8EC] p-6 md:p-8 text-gray-800 shadow-sm">
                <p className="text-lg md:text-xl italic text-[#1B2639] leading-relaxed">
                  &ldquo;A scary breath number doesn&apos;t mean the machine was accurate. We subpoena maintenance records on every case, because that&apos;s where the state&apos;s evidence actually lives or dies.&rdquo;
                </p>
                <cite className="block mt-3 text-sm md:text-base font-bold text-[#BA8E2D] not-italic">
                  &mdash; Attorney Drew McCulloch, Former State Prosecutor, McCulloch Law, P.A.
                </cite>
              </blockquote>

              <p className="text-justify">
                The ruling only applies to that one case on paper. But the maintenance shortcut it exposed runs through Intoxilyzer 8000 units statewide, not one bad machine in one county. Defense attorneys are now pulling maintenance records on every pending breath test case, hunting for the same gap.
              </p>
              <p className="text-justify">
                Our own review of recent Hillsborough County filings backs this up. Breath test challenges have climbed noticeably since the ruling went public. Makes sense. Once a court flags a procedural crack that size, every case sitting on the same machine model inherits it.
              </p>
            </section>

            {/* Section 4: How Long Do You Have to Act After a First DUI Arrest? */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Long Do You Have to Act After a First DUI Arrest?
              </h2>
              <p className="text-justify">
                Ten days. Write it down. That&apos;s the window{" "}
                <a
                  href="https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/florida-dui-administrative-suspension-laws/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Florida law
                </a>{" "}
                gives you to demand a formal review hearing on your license suspension, and the citation you got handed doubles as a temporary permit for that stretch. Get the hearing requested in time and that permit usually stretches another 42 days while it gets scheduled. Miss the window? The suspension locks in on day 11. No extension. No do-over.
              </p>
              <p className="text-justify">
                The license fight and the criminal case run on totally different clocks. The DUI charge sometimes takes months. The license side runs through the Bureau of Administrative Reviews and that one waits for nobody.
              </p>
              <p className="text-justify">
                Roughly that timeline looks like in practice.
              </p>

              {/* Timeline Cards */}
              <div className="my-8 space-y-3">
                {/* Day 0 */}
                <div className="rounded-md border border-gray-200 bg-[#F2F4F8] p-5 shadow-sm">
                  <div className="font-bold text-lg text-[#1B2639]">Day 0</div>
                  <p className="text-sm text-gray-600 mt-1">
                    Arrest. Citation doubles as a temporary permit.
                  </p>
                </div>

                <div className="flex justify-center text-[#BA8E2D] font-bold text-xl leading-none">
                  &#9474;
                </div>

                {/* Days 1 to 10 - Highlighted */}
                <div className="rounded-md border-2 border-[#BA8E2D] bg-[#BA8E2D] p-5 text-white shadow-md">
                  <div className="font-bold text-lg text-white">Days 1 to 10</div>
                  <p className="text-sm text-white/95 mt-1 font-medium">
                    Window to request a formal review hearing.
                  </p>
                </div>

                <div className="flex justify-center text-[#BA8E2D] font-bold text-xl leading-none">
                  &#9474;
                </div>

                {/* Day 11 */}
                <div className="rounded-md border border-gray-200 bg-[#F2F4F8] p-5 shadow-sm">
                  <div className="font-bold text-lg text-[#1B2639]">Day 11</div>
                  <p className="text-sm text-gray-600 mt-1">
                    Suspension locks in if no hearing was requested.
                  </p>
                </div>

                <div className="flex justify-center text-[#BA8E2D] font-bold text-xl leading-none">
                  &#9474;
                </div>

                {/* Up to Day 52 */}
                <div className="rounded-md border border-gray-200 bg-[#F2F4F8] p-5 shadow-sm">
                  <div className="font-bold text-lg text-[#1B2639]">Up to Day 52</div>
                  <p className="text-sm text-gray-600 mt-1">
                    Extended permit window if the hearing was requested on time.
                  </p>
                </div>
              </div>
            </section>

            {/* Urgent Callout Box 1 */}
            <section className="my-10 rounded-md border-l-4 border-[#1B2639] bg-[#E9EEF6] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
                The 10-day clock does not pause for weekends or holidays.
              </h3>
              <p className="mt-2 text-base md:text-lg italic text-[#1B2639]/80">
                If you were arrested recently, your window to contest the license suspension is already ticking down.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-base font-bold">
                <Link
                  href="/contact"
                  className="text-[#BA8E2D] underline hover:text-[#967123] transition-colors"
                >
                  Talk to McCulloch Law, P.A. now
                </Link>
                <span className="text-gray-400">|</span>
                <a
                  href="tel:8134442817"
                  className="text-[#1B2639] hover:text-[#BA8E2D] transition-colors"
                >
                  (813) 444-2817
                </a>
              </div>
            </section>

            {/* Section 5: Field Sobriety Exercises Are Weaker Evidence Than They Look */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Field Sobriety Exercises Are Weaker Evidence Than They Look
              </h2>
              <p className="text-justify">
                Walk-and-turn. One-leg stand. Horizontal gaze nystagmus. Police reports write these up like they&apos;re lab results. They&apos;re not even close. Uneven pavement, the wrong shoes, nerves, being exhausted, an old knee injury, even a lazy eye can produce the exact same &ldquo;clues&rdquo; an officer&apos;s trained to read as impairment.
              </p>
              <p className="text-justify">
                Field sobriety scoring is entirely subjective, scored by the same officer who already decided you looked drunk before they asked you out of the car. That&apos;s the whole problem in a nutshell.
              </p>

              {/* Table: Weaknesses vs Meaning */}
              <div className="pt-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#1B2639] mb-4">
                  First DUI Case Weaknesses vs. What They Actually Mean
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                        <th className="p-4 border border-gray-200 w-1/3">
                          Arrest Detail
                        </th>
                        <th className="p-4 border border-gray-200 w-1/3">
                          What It Looks Like
                        </th>
                        <th className="p-4 border border-gray-200 w-1/3">
                          What It May Actually Prove
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                      {caseWeaknesses.map((row, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="p-4 border border-gray-200 font-semibold text-[#1B2639]">
                            {row.detail}
                          </td>
                          <td className="p-4 border border-gray-200">
                            {row.looksLike}
                          </td>
                          <td className="p-4 border border-gray-200 text-justify">
                            {row.actuallyProves}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Representation Comparison Box */}
              <div className="pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#1B2639] mb-6">
                  The Difference Representation Makes
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Without Defense Attorney */}
                  <div className="rounded-md border border-red-200 bg-[#F2F4F8] p-6 shadow-sm">
                    <h4 className="text-base font-bold text-[#A6402B] uppercase tracking-wide mb-4">
                      WITHOUT A DEFENSE ATTORNEY
                    </h4>
                    <ul className="space-y-3">
                      {withoutAttorney.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm leading-6">
                          <span className="text-[#A6402B] font-bold text-base leading-none mt-1">&#8226;</span>
                          <span className="text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* With McCulloch Law */}
                  <div className="rounded-md border border-green-200 bg-[#FFF8EC] p-6 shadow-sm">
                    <h4 className="text-base font-bold text-[#2E6B4F] uppercase tracking-wide mb-4">
                      WITH McCULLOCH LAW, P.A.
                    </h4>
                    <ul className="space-y-3">
                      {withAttorney.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-800 text-sm leading-6 font-medium">
                          <span className="text-[#2E6B4F] font-bold text-base leading-none mt-1">&#8226;</span>
                          <span className="text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: When Does a First DUI Actually Get Reduced Instead of Dismissed? */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                When Does a First DUI Actually Get Reduced Instead of Dismissed?
              </h2>
              <p className="text-justify">
                Not every shaky case gets thrown out completely, and that&apos;s fine. A lot of the time the realistic win is a reduction down to reckless driving, which happens when the evidence has real problems but isn&apos;t fatally broken. Still worth fighting for. Reckless driving skips the mandatory license revocation that comes with a DUI conviction, and it barely registers on employment or insurance screenings.
              </p>
              <p className="text-justify">
                Timing decides almost everything here. Dashcam footage disappears. 911 recordings get purged on a schedule nobody tells you about. Maintenance logs vanish into routine paperwork cycles. No prosecutor volunteers the weak spots in their own case, why would they. Florida courts keep siding with defendants whose attorneys moved fast.
              </p>

              {/* Vertical Stepper: How a First DUI Case Moves Toward Dismissal */}
              <div className="pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#1B2639] mb-6">
                  How a First DUI Case Actually Moves Toward Dismissal
                </h3>
                <div className="space-y-4">
                  {dismissalFlow.map((item, index) => (
                    <div key={item.step}>
                      <div className="flex items-start gap-4 rounded-md border border-gray-200 bg-[#F2F4F8] p-5 shadow-sm">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#1B2639] text-white font-bold text-lg">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-[#1B2639]">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm text-gray-700 leading-6 text-justify">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      {index < dismissalFlow.length - 1 && (
                        <div className="flex justify-center py-1 text-[#BA8E2D] font-bold text-2xl leading-none">
                          &darr;
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7: Finding a Tampa DUI Attorney Who Has Argued Both Sides */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Finding a Tampa DUI Attorney Who Has Argued Both Sides
              </h2>
              <p className="text-justify">
                Attorney Drew McCulloch built McCulloch Law, P.A., after years as a state prosecutor, which means he&apos;s handled DUI cases from both chairs.
              </p>
              <p className="text-justify">
                The firm&apos;s track record goes well past typical first-offense work, including a fifth DUI with property damage that got dismissed outright, plus multiple repeat-offense cases knocked out by motion. That&apos;s the exact skill set a first-time DUI in Tampa needs applied early, before the state&apos;s case hardens. Check the firm&apos;s{" "}
                <Link
                  href="/practice/dui"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  DUI defense page
                </Link>{" "}
                or browse recent outcomes on the{" "}
                <Link
                  href="/testimonials"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  case results and testimonials page
                </Link>
                .
              </p>
              <p className="text-justify">
                Most first-time DUI arrests around here end up in front of the{" "}
                <a
                  href="https://www.fljud13.org/About/About-the-Court"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Thirteenth Judicial Circuit
                </a>
                , either downtown at the Edgecomb Courthouse or out at the Plant City annex, and the two courtrooms don&apos;t run the same way. You learn that by showing up, case after case.
              </p>
            </section>

            {/* CTA Box - Navy Banner */}
            <section className="my-12 rounded-md bg-[#1B2639] p-8 text-white shadow-md text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                A First DUI Deserves a Real Defense, Not a Guess
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
                McCulloch Law, P.A. is available 24/7 for a free, confidential consultation on your Florida DUI case.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#a67c24] transition-colors w-full sm:w-auto"
                >
                  Call (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 border-2 border-[#BA8E2D] text-[#BA8E2D] rounded hover:bg-[#BA8E2D] hover:text-white transition-colors w-full sm:w-auto"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </section>

            {/* Contact Information & Office Details */}
            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Florida DUI Defense Lawyer Near You &mdash; Get Help Today
              </h2>
              <p className="mt-4 leading-8 text-gray-700 text-justify">
                A DUI arrest in Florida triggers rapid legal consequences. The longer you wait to request your formal review hearing and build your defense, the higher the risk of severe penalties, license suspension, and mandatory sentencing.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold text-lg text-[#1B2639]">
                  McCulloch Law, P.A. | Outstanding DUI Defense
                </p>
                <p className="mt-1 text-gray-600">238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p className="mt-1 text-gray-600">
                  Serving Tampa, Clearwater, St. Petersburg, and all surrounding Florida counties
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:8134442817"
                    className="inline-flex items-center justify-center font-bold px-5 py-3 border border-[#BA8E2D] text-[#BA8E2D] rounded hover:bg-[#BA8E2D] hover:text-white transition-colors"
                  >
                    Call (813) 444-2817
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-bold px-5 py-3 bg-[#1B2639] text-white rounded hover:bg-[#1B2639]/90 transition-colors"
                  >
                    Contact Us Online
                  </Link>
                </div>
              </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-md border border-gray-200 p-5 bg-white shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-[#1B2639]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-700 text-justify">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500 italic text-justify">
              Disclaimer: This article is provided for general informational purposes only and does not constitute legal advice. Every DUI case depends on its specific facts. Contact McCulloch Law to discuss your individual situation.
            </p>
          </article>

          {/* Recent Blogs Sidebar */}
          <aside className="w-full lg:max-w-[400px] lg:shrink-0 h-full lg:h-[1000px] overflow-y-auto p-3 rounded-lg">
            <h2 className="font-medium text-4xl text-black border-b-2 pb-4 mb-6">
              Recent Blogs
            </h2>

            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog: any, index: number) => (
                <Link
                  key={index}
                  href={`/blogs/${blog.slug}`}
                  className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 hover:shadow-md transition-shadow"
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
