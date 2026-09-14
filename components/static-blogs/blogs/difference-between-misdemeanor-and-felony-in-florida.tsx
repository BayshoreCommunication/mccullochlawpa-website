import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { differenceBetweenMisdemeanorAndFelonyInFloridaBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const keyPoints = [
  "Misdemeanors cap out at 364 days down at the county jail but felonies start with prison time past a year. Florida sorts those felonies into 5 different levels running from third degree up to capital.",
  "The County Court conducts the misdemeanor cases and the Circuit Court conducts felonies.",
  "If you happen to be in Hillsborough County, a mandatory felony scoresheet calculates whether prison is required before a judge ever says a word.",
  "A withhold of adjudication can keep a conviction off your record for job applications, but only if your attorney negotiates it before sentencing, not after.",
  "Some misdemeanors, including DUI, battery, and petit theft, upgrade to felonies automatically based on prior convictions. The charge on paper today isn't always where it lands.",
  "Statute of limitations windows differ by charge type, from one year on minor misdemeanors up to four years on first degree felonies, with no limit at all on capital cases.",
];

const statCards1 = [
  { value: "364", label: "MAXIMUM DAYS IN JAIL, 1ST DEGREE MISDEMEANOR" },
  { value: "5", label: "FELONY TIERS IN FLORIDA LAW" },
  { value: "30 Years", label: "MAXIMUM PRISON, 1ST DEGREE FELONY" },
];

const misdemeanorVsFelonyRows = [
  {
    factor: "Total Tiers",
    misdemeanor: "2 Tiers (1st and 2nd Degree)",
    felony: "5 Tiers (3rd Degree to Capital)",
  },
  {
    factor: "Incarceration Location",
    misdemeanor: "County Jail",
    felony: "Florida State Prison",
  },
  {
    factor: "Confinement Limit",
    misdemeanor: "Up to 364 Days",
    felony: "Over 1 Year to Life or Death",
  },
  {
    factor: "Court Jurisdiction",
    misdemeanor: "County Court",
    felony: "Circuit Court",
  },
];

const penaltiesRows = [
  {
    level: "2nd Degree Misdemeanor",
    confinement: "60 days jail",
    fine: "$500",
    probation: "6 months",
  },
  {
    level: "1st Degree Misdemeanor",
    confinement: "364 days jail",
    fine: "$1,000",
    probation: "12 months",
  },
  {
    level: "3rd Degree Felony",
    confinement: "5 years prison",
    fine: "$5,000",
    probation: "Up to 5 years",
  },
  {
    level: "2nd Degree Felony",
    confinement: "15 years prison",
    fine: "$10,000",
    probation: "Up to 15 years",
  },
  {
    level: "1st Degree Felony",
    confinement: "30 years prison",
    fine: "$10,000",
    probation: "Up to 30 years",
  },
  {
    level: "Life / Capital Felony",
    confinement: "Life or death penalty",
    fine: "$15,000",
    probation: "N/A",
  },
];

const timelineSteps = [
  {
    step: "STEP 1",
    title: "Arrest and Booking",
    description:
      "Charge level is set by the underlying statute at this point, not negotiated on scene.",
  },
  {
    step: "STEP 2",
    title: "Court Assignment",
    description:
      "Misdemeanors route to County Court. Felonies route to Circuit Court, a separate system with its own procedural clock.",
  },
  {
    step: "STEP 3",
    title: "Scoresheet (Felonies Only)",
    description:
      "Every felony in Florida requires a sentencing scoresheet that determines whether prison is mandatory and for how long, before a plea is even discussed.",
  },
  {
    step: "STEP 4",
    title: "Negotiation Window",
    description:
      "This is where diversion programs, reduced charges, or a withhold of adjudication get built. Earlier engagement from defense counsel means more room to work with.",
  },
  {
    step: "STEP 5",
    title: "Disposition",
    description:
      "Dismissal, plea, or trial. An adjudication of guilt versus a withhold changes what shows up on background checks for the rest of the client's career.",
  },
];

const representationRows = [
  {
    withoutRep:
      "Unaware a prior conviction upgraded the current charge to a felony",
    withMcCulloch: "Charge history reviewed before any plea decision is made",
  },
  {
    withoutRep:
      "Pleads early without knowing a withholding of adjudication was on the table",
    withMcCulloch:
      "Withholding of adjudication negotiated whenever the facts support it",
  },
  {
    withoutRep:
      "Faces the maximum scoresheet range with no mitigation argument presented",
    withMcCulloch:
      "Scoresheet challenged and mitigation built into the negotiation",
  },
  {
    withoutRep:
      "Risks a two-year driver's license suspension on an adjudicated charge",
    withMcCulloch:
      "License consequences flagged and addressed before sentencing, not after",
  },
];

const statuteOfLimitationsRows = [
  { chargeType: "2nd Deg. Misdemeanor", window: "1 yr", percentage: 20 },
  { chargeType: "1st Deg. Misdemeanor", window: "2 yrs", percentage: 40 },
  { chargeType: "Most Felonies", window: "3 yrs", percentage: 60 },
  { chargeType: "1st Deg. Felony", window: "4 yrs", percentage: 80 },
  { chargeType: "Abuse / Securities / Env.", window: "5 yrs", percentage: 100 },
];

const faqs = [
  {
    question: "Is the withholding of adjudication considered a conviction?",
    answer:
      "Not usually, in most cases involving jobs applications, but it might show up in your background checks unless you have sealed or expunged your record.",
  },
  {
    question: "Can you reduce the felony charge to a misdemeanor?",
    answer:
      "Yes, it can be done through plea bargaining, diversion programs and mitigation of circumstances at the sentencing.",
  },
  {
    question: "Can a misdemeanor become a felony in Florida?",
    answer:
      "Yes. DUI, battery, petit theft, and driving while license suspended can turn into a felony if you have prior charges of these crimes.",
  },
];

const externalLinkRel = "nofollow noopener noreferrer";

export default async function DifferenceBetweenMisdemeanorAndFelonyInFlorida() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    differenceBetweenMisdemeanorAndFelonyInFloridaBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== differenceBetweenMisdemeanorAndFelonyInFloridaBlog.slug
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
                    name: "Difference Between Misdemeanor and Felony in Florida",
                    item: "https://www.mcfloridalaw.com/blogs/difference-between-misdemeanor-and-felony-in-florida",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://www.mcfloridalaw.com/blogs/difference-between-misdemeanor-and-felony-in-florida",
                },
                headline: "Difference Between Misdemeanor and Felony in Florida",
                name: "What Makes Misdemeanor Different Felony in Florida?",
                description:
                  "Misdemeanors cap at 364 days in county jail while felonies mean over a year in state prison. Learn Florida charge levels, penalties, and court processes.",
                url: "https://www.mcfloridalaw.com/blogs/difference-between-misdemeanor-and-felony-in-florida",
                image:
                  "https://www.mcfloridalaw.com/images/static-blogs/difference-between-misdemeanor-and-felony-in-florida.webp",
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Difference Between Misdemeanor and Felony in Florida",
                  description:
                    "An overview of criminal charge classifications in Florida, comparing misdemeanors and felonies, incarceration limits, court jurisdiction, sentencing penalties, habitual offender status, and legal defenses.",
                },
                keywords: [
                  "difference between misdemeanor and felony in Florida",
                  "misdemeanor vs felony Florida",
                  "Florida criminal charge levels",
                  "misdemeanor jail time Florida",
                  "felony prison time Florida",
                  "Florida Statute 775.081",
                  "Florida Statute 775.0837",
                  "county court vs circuit court Florida",
                  "felony scoresheet Hillsborough County",
                  "withhold of adjudication Florida",
                  "misdemeanor upgrade to felony Florida",
                  "statute of limitations Florida criminal",
                  "Tampa criminal defense attorney",
                  "McCulloch Law P.A.",
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
                datePublished: "2026-09-14",
                dateModified: "2026-09-14",
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
                  src={differenceBetweenMisdemeanorAndFelonyInFloridaBlog.featuredImage.image.url}
                  alt={differenceBetweenMisdemeanorAndFelonyInFloridaBlog.featuredImage.altText}
                  title={differenceBetweenMisdemeanorAndFelonyInFloridaBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {differenceBetweenMisdemeanorAndFelonyInFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                McCulloch Law P.A. | Tampa Bay Criminal Defense Attorneys
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {differenceBetweenMisdemeanorAndFelonyInFloridaBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: September 14, 2026 | Updated: September 14, 2026 | McCulloch Law P.A. | Tampa Bay Criminal Defense Attorneys
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                A misdemeanor is basically any crime where you can end up in county jail for up to 364 days, while a felony is the heavy stuff that carries a sentence of more than a full year over in state prison.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                It in fact comes down to the punishment , not how dramatic or ugly the situation felt when it happened.{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/775.081"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 775.081
                </a>{" "}
                sets that boundary right in the sand. The designation of that offense can determine where you are tried and what appears in your criminal record.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Key Points
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

            {/* Section 1: What Separates Misdemeanor from Felony? */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Separates Misdemeanor from Felony?
              </h2>
              <p>
                365 days. Anything under that ceiling, and Florida calls it a misdemeanor. Cross it, and the state calls it a felony. That single line in{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/775.081"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 775.081
                </a>{" "}
                is the entire architecture behind how criminal charges get classified in this state, and almost nobody outside a courtroom knows it exists until they need to.
              </p>
              <p>Florida splits misdemeanors into 2 tiers.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>● 2nd degree and,</li>
                <li>● 1st degree.</li>
              </ul>

              <div className="my-6">
                <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                  Misdemeanor vs. Felony
                </h3>
                <div className="overflow-hidden rounded-md border border-gray-200">
                  <div className="grid grid-cols-3 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                    <div className="p-4">Category</div>
                    <div className="p-4">Misdemeanor</div>
                    <div className="p-4">Felony</div>
                  </div>
                  {misdemeanorVsFelonyRows.map((row) => (
                    <div
                      key={row.factor}
                      className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700"
                    >
                      <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                        {row.factor}
                      </div>
                      <div className="p-4">{row.misdemeanor}</div>
                      <div className="p-4">{row.felony}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Out in places like Tampa and Hillsborough County or anywhere around the Bay Area, the physical courtroom changes too. Misdemeanors go to County Court. Felonies move over to Circuit Court, which means a different building, different judges, different rules, and in Hillsborough specifically, a different division assignment setup.
              </p>
            </section>

            {/* Stat Cards */}
            <section className="grid gap-4 md:grid-cols-3 mb-12">
              {statCards1.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md bg-gray-50 border border-gray-200 p-5 text-center md:text-left"
                >
                  <div className="text-3xl font-bold text-[#BA8E2D]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600 uppercase font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </section>

            {/* Section 2: What Does Florida Classify as a Felony or Misdemeanor? */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Does Florida Classify as a Felony or Misdemeanor?
              </h2>
              <p>
                Two variables move the needle most often in practice, value and injury. Theft under $750 is petit theft, a misdemeanor. Cross that dollar threshold and it becomes grand theft, a felony. A simple battery without a weapon is a misdemeanor of the first degree. Add in a deadly weapon or serious bodily injury and you’re talking aggravated battery, a felony charge that can carry a state prison sentence.
              </p>

              <div className="rounded-md border-l-4 border-[#BA8E2D] bg-gray-50 p-6 italic text-gray-800 my-6">
                <p className="text-lg">
                  &quot;Clients entrust me with their most intimate and difficult problems. I listen closely and understand them in order to give proper advice. Every case deserves careful preparation and honest communication.&quot;
                </p>
                <p className="mt-3 font-semibold not-italic text-[#1B2639]">
                  Drew McCulloch, Founding Attorney of McCulloch Law, P.A.
                </p>
              </div>

              <p>
                Your history matters as much as what happened today. A handful of Florida misdemeanors, DUI, battery, petit theft, and driving with a suspended license among them, upgrade to felony status automatically once someone accumulates enough priors. This is where cases get missed. If anyone thinks facing a routine misdemeanor plea, they don&apos;t realize an old conviction from 2019 just turned this charge into a felony.
              </p>
            </section>

            {/* Section 3: Penalties for Felonies and Misdemeanors In Florida */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Penalties for Felonies and Misdemeanors In Florida
              </h2>
              <p>
                Numbers settle arguments faster than opinions do. Below is the punishment range across every tier, straight from Florida sentencing statutes.
              </p>

              <div className="overflow-hidden rounded-md border border-gray-200 my-6">
                <div className="grid grid-cols-4 bg-[#1B2639] text-xs md:text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-3 md:p-4">Charge Level</div>
                  <div className="p-3 md:p-4">Max Confinement</div>
                  <div className="p-3 md:p-4">Max Fine</div>
                  <div className="p-3 md:p-4">Probation</div>
                </div>
                {penaltiesRows.map((row) => (
                  <div
                    key={row.level}
                    className="grid grid-cols-1 md:grid-cols-4 border-t border-gray-200 text-gray-700 text-sm"
                  >
                    <div className="bg-gray-50 p-3 md:p-4 font-semibold text-[#1B2639]">
                      {row.level}
                    </div>
                    <div className="p-3 md:p-4">{row.confinement}</div>
                    <div className="p-3 md:p-4">{row.fine}</div>
                    <div className="p-3 md:p-4">{row.probation}</div>
                  </div>
                ))}
              </div>

              <p>
                Two charges of the same class don&apos;t have to run together, either. Judges decide if criminal sentences run at the exact same time or stack back to back. Concurrent means serving two charges together so the total time equals the longer charge. Consecutive means adding them together. This choice doubles or reduces prison time, which makes a strong legal defense crucial during final sentencing.
              </p>
            </section>

            {/* CTA Box 1 */}
            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Charged With Something You Don&apos;t Fully Understand Yet?
              </h2>
              <p className="mt-4 leading-8">
                A former state prosecutor now works your side of the table.
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
                  Schedule A Free Consultation
                </Link>
              </div>
            </section>

            {/* Section 4: What Happens After You're Charged With a Misdemeanor or Felony in Florida? */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Happens After You&apos;re Charged With a Misdemeanor or Felony in Florida?
              </h2>
              <p>
                The process forks almost immediately based on classification, and most people never see the fork coming.
              </p>

              <div className="space-y-4 my-6">
                {timelineSteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="rounded-md border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#1B2639] text-white text-xs font-bold px-3 py-1 rounded">
                        {stepItem.step}
                      </span>
                      <h3 className="text-lg font-bold text-[#1B2639]">
                        {stepItem.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7">
                      {stepItem.description}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                We push hard for a withhold of adjudication whenever the facts allow it, because that single distinction is often the difference between checking &quot;yes&quot; on a job application&apos;s conviction question and legitimately checking &quot;no.&quot; Teachers, nurses, real estate agents, and stock brokers have lost job offers over adjudications that a better-timed negotiation could have avoided entirely. That&apos;s not a footnote. That&apos;s the actual stakes.
              </p>

              {/* Representation Comparison Grid */}
              <div className="grid gap-5 md:grid-cols-2 my-6">
                <div className="rounded-md border border-red-100 bg-red-50 p-6">
                  <h3 className="text-xl font-bold text-[#1B2639] mb-4 uppercase tracking-wide">
                    WITHOUT A LAWYER
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {representationRows.map((row, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">●</span>
                        <span>{row.withoutRep}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-green-100 bg-green-50 p-6">
                  <h3 className="text-xl font-bold text-[#1B2639] mb-4 uppercase tracking-wide">
                    WITH McCULLOCH LAW
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {representationRows.map((row, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">●</span>
                        <span>{row.withMcCulloch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Statute of Limitations for Misdemeanors and Felonies in Florida */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Statute of Limitations for Misdemeanors and Felonies in Florida
              </h2>
              <p>
                Florida doesn&apos;t give the state unlimited time to file charges, and the window shrinks or grows depending entirely on classification. Most felonies fall at three years, 1st degree felonies stretch to four, and a handful of serious categories, abuse, securities fraud, environmental first degree felonies, reach five. Capital and life felony cases carry no limit at all.
              </p>

              {/* Dynamic Visual Graph Component */}
              <div className="my-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1B2639] mb-2">
                  Filing Window by Charge Type (Years)
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Statute of limitations timeframe comparison under Florida criminal procedure:
                </p>
                <div className="space-y-4">
                  {statuteOfLimitationsRows.map((item) => (
                    <div key={item.chargeType}>
                      <div className="flex justify-between items-center text-sm font-medium mb-1">
                        <span className="text-gray-800">{item.chargeType}</span>
                        <span className="font-bold text-[#1B2639]">{item.window}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                        <div
                          className="h-full bg-[#BA8E2D] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                There&apos;s a wrinkle worth knowing about too. Florida&apos;s Habitual Misdemeanor Offender statute,{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/775.0837"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  775.0837
                </a>
                , applies to anyone with four qualifying misdemeanor convictions inside a single year. That status opens the door to jail, residential treatment, or supervised residence for anywhere from six to 364 days, and it only applies if the current charge hasn&apos;t already been reclassified as a felony. Prior record and current charge interact constantly in Florida sentencing. Treating them as separate questions is how people get blindsided.
              </p>
            </section>

            {/* Section 6: Why Local Representation Changes the Outcome in Hillsborough County */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why Local Representation Changes the Outcome in Hillsborough County
              </h2>
              <p>
                In Hillsborough County, misdemeanor divisions run A through G and get assigned by the defendant&apos;s last name. Felony cases get randomly assigned across seven divisions, A through I, plus dedicated tracks for probation violations, drug offenses, and jury trials. Every division has a different judge, and every judge sentences differently.
              </p>
              <p>
                A national call-center firm that&apos;s never stood in front of Hillsborough&apos;s felony divisions is guessing. We aren&apos;t. Drew McCulloch prosecuted thousands of cases as a former state prosecutor before switching sides, which means the negotiating table isn&apos;t unfamiliar territory, it&apos;s the same table he used to sit on. That matters more in a felony scoresheet negotiation than almost any other factor in the case.
              </p>

              <div className="rounded-md border-l-4 border-[#1B2639] bg-gray-50 p-6 italic text-gray-800 my-6">
                <p className="text-lg">
                  &quot;The gap between a misdemeanor and a felony isn&apos;t philosophical. It&apos;s the gap between a background check you can explain away and one that follows you into every job interview for a decade.&quot;
                </p>
                <p className="mt-3 font-semibold not-italic text-[#1B2639]">
                  Tampa Bay Criminal Defense Practice Note
                </p>
              </div>

              <p>
                Our surveys show this pattern repeatedly among Tampa Bay clients. The ones who call a criminal defense attorney within 48 hours of an arrest walk away with meaningfully better outcomes. Waiting doesn&apos;t protect you. It just shortens the window your attorney has to work in.
              </p>
            </section>

            {/* FAQ Section */}
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

            {/* Bottom CTA Banner */}
            <section className="mt-12 rounded-md bg-[#1B2639] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Facing a Charge and Not Sure What It Means Long Term?
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                Talk to a former prosecutor who now defends Tampa Bay. Free, confidential, available around the clock.
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
                  Contact McCulloch Law, P.A. Today →
                </Link>
              </div>
            </section>

            <div className="mt-10 border-t border-gray-200 pt-6 space-y-3 text-sm leading-6 text-gray-500">
              <p>
                Disclaimer: This article is for general informational purposes and does not form an attorney-client relationship. For help with a criminal defense matter in Florida, contact McCulloch Law, P.A.
              </p>
              <p className="font-semibold text-gray-700">
                McCulloch Law, P.A. | 238 East Davis Boulevard, Ste 202, Tampa, FL 33606 | Serving Tampa, Brandon, and all of Hillsborough County
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
