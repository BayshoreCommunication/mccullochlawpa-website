import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { timeLimitsForFilingWrongfulDeathCasesInFloridaBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const keyPoints = [
  "The standard window is 2 years and not the 4 years many families remember from before 2023.",
  "Missing the deadline by even one day generally bars the claim forever with almost no judicial mercy.",
  "Claims against government entities like a county road department or public hospital run on a shorter and separate clock.",
  "A personal representative must be appointed through probate before any wrongful death suit can be filed at all.",
];

const statCards = [
  {
    num: "1",
    value: "2 Yrs",
    label: "Standard Deadline",
    subtext: "Fla. Stat. § 95.11(4)(d)",
  },
  {
    num: "2",
    value: "4 Yrs",
    label: "Malpractice Ceiling",
    subtext: "With discovery rule applied",
  },
  {
    num: "3",
    value: "197,449",
    label: "US Injury Deaths, 2024",
    subtext: "CDC National Vital Statistics",
  },
];

const deadlinesByType = [
  {
    label: "Murder / Manslaughter Death",
    value: "No deadline",
    width: "100%",
    bg: "bg-[#BA8E2D]",
    text: "text-white",
  },
  {
    label: "Medical Neglect (Discovery Rule Ceiling)",
    value: "48 months",
    width: "80%",
    bg: "bg-[#1B2639]",
    text: "text-white",
  },
  {
    label: "Government Defendant Notice Window",
    value: "24 months",
    width: "50%",
    bg: "bg-[#1B2639]",
    text: "text-white",
  },
  {
    label: "Standard Negligence Claim",
    value: "24 months",
    width: "50%",
    bg: "bg-[#1B2639]",
    text: "text-white",
  },
  {
    label: "Time Most Families Wait To Call A Lawyer",
    value: "~5 months",
    width: "18%",
    bg: "bg-[#718096]",
    text: "text-white",
  },
];

const deadLinesGlance = [
  {
    type: "Standard negligence (car crash, premises, workplace)",
    deadline: "2 years from date of death",
    statute: "Fla. Stat. § 95.11(4)(d)",
  },
  {
    type: "Medical malpractice resulting in death",
    deadline: "2 years, up to 4 with discovery rule",
    statute: "Fla. Stat. § 95.11(4)(b)",
  },
  {
    type: "Claim against a city, county, or state agency",
    deadline: "2 year notice deadline runs first",
    statute: "Fla. Stat. § 768.28(6)",
  },
  {
    type: "Death from murder or manslaughter",
    deadline: "No deadline at all",
    statute: "Fla. Stat. § 95.11(11)",
  },
  {
    type: "Product liability or defective equipment death",
    deadline: "2 years from date of death",
    statute: "Fla. Stat. § 95.11(4)(d)",
  },
];

const comparisonData = [
  {
    withoutCounsel:
      "Family assumes the criminal case covers everything, and the civil deadline slips by unnoticed.",
    withMcCulloch:
      "The firm opens a parallel civil investigation the moment the family calls, independent of any criminal timeline.",
  },
  {
    withoutCounsel:
      "Medical records, black box information or other evidence can be disposed of, destroyed or overwritten in a matter of weeks.",
    withMcCulloch:
      "Evidence preservation letters and subpoenas can be sent out immediately in order to protect evidence.",
  },
  {
    withoutCounsel:
      "The estate has no appointed personal representative, so no wrongful death suit can even be filed.",
    withMcCulloch:
      "Attorney Drew McCulloch guides the family through Florida probate court to get a personal representative named fast.",
  },
  {
    withoutCounsel:
      "A government agency is involved, and the family misses the separate, shorter notice deadline entirely.",
    withMcCulloch:
      "The firm tracks every parallel clock, including the Florida Statute 768.28 notice requirement for public entities.",
  },
];

const first30DaysList = [
  "Request the police, medical examiner, or incident report immediately, since Florida agencies purge or archive records on their own schedules.",
  "Send preservation letters to any business, driver, or agency involved, before surveillance footage cycles out or equipment gets serviced.",
  "Begin the probate process to appoint a personal representative, since no wrongful death suit can be filed without one.",
  "Avoid recorded statements to an insurance adjuster until an attorney has reviewed the facts, since early statements get used against the estate later.",
  "Track every medical, funeral, and lost income expense from day one, since Florida damages calculations depend on documented figures.",
];

const faqs = [
  {
    question: "Can creditors take the wrongful death settlement's money?",
    answer:
      "Your family money goes right to you. Creditors can’t touch that cash. Only estate funds pay off old medical bills or debts.",
  },
  {
    question: "What if the deceased was partially at fault for the accident?",
    answer:
      "If your loved one was halfway or less at fault, you still get paid. As long as it doesn’t cross the 50% limit.",
  },
  {
    question: "Can an open criminal investigation or trial pause the 2 year civil filing deadline?",
    answer:
      "The civil clock keeps ticking no matter what police do. You can’t wait on criminal trials or you will miss the window.",
  },
  {
    question: "Are wrongful death settlements subject to state or federal income tax?",
    answer:
      "Uncle Sam leaves your emotional recovery money alone. It is tax free. You only pay taxes if the court awards punitive damages.",
  },
];

const externalLinkRel = "nofollow noopener noreferrer";

export default async function TimeLimitsForFilingWrongfulDeathCasesInFlorida() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    timeLimitsForFilingWrongfulDeathCasesInFloridaBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.slug
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
                    name: timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.title,
                    item: `https://www.mcfloridalaw.com/blogs/${timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.slug}`,
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://www.mcfloridalaw.com/blogs/${timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.slug}`,
                },
                headline:
                  timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.metaTitle,
                name: timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.title,
                description:
                  timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.metaDescription,
                url: `https://www.mcfloridalaw.com/blogs/${timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.slug}`,
                image: `https://www.mcfloridalaw.com${timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.featuredImage.image.url}`,
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Wrongful Death Statute of Limitations in Florida",
                  description:
                    "Legal deadlines and statutes of limitations for filing wrongful death claims in Florida, including exceptions for medical malpractice, government entities, and intentional acts.",
                },
                keywords: [
                  "Time Limits for Filing Wrongful Death Cases in Florida",
                  "Florida wrongful death statute of limitations",
                  "Florida Statute 95.11(4)(d)",
                  "wrongful death filing deadline Florida",
                  "Florida Wrongful Death Act",
                  "Drew McCulloch wrongful death attorney",
                  "Tampa wrongful death lawyer",
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
                datePublished: "2026-09-27",
                dateModified: "2026-09-27",
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
            {/* Featured Image */}
            <figure className="mb-8">
              <div className="w-full overflow-hidden rounded-md bg-gray-50">
                <Image
                  src={
                    timeLimitsForFilingWrongfulDeathCasesInFloridaBlog
                      .featuredImage.image.url
                  }
                  alt={
                    timeLimitsForFilingWrongfulDeathCasesInFloridaBlog
                      .featuredImage.altText
                  }
                  title={
                    timeLimitsForFilingWrongfulDeathCasesInFloridaBlog
                      .featuredImage.title
                  }
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500 italic">
                {timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            {/* Post Header */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Wrongful Death Law | Florida Statute of Limitations
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {timeLimitsForFilingWrongfulDeathCasesInFloridaBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: September 27, 2026 | Updated: September 27, 2026 | McCulloch Law, P.A. | Florida Wrongful Death Legal Counsel
              </p>
            </div>

            {/* Intro Lead Box */}
            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10 shadow-sm">
              <p className="text-xl md:text-2xl leading-relaxed">
                When a family loses someone, the law hands them a clock and that clock gives folks exactly 2 years from the day of passing to file a wrongful death lawsuit under{" "}
                <a
                  href="https://codes.findlaw.com/fl/title-viii-limitations/fl-st-sect-95-11/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] hover:underline"
                >
                  Florida Statute 95.11(4)(d)
                </a>
                .
              </p>
              <p className="mt-4 text-white/90 leading-8">
                Now, if medical malpractice was involved, things can stretch out to 4 years under discovery rule. Government defendants bring a separate 2-year notice requirement and if a life was taken by murder or manslaughter, well, there&apos;s no deadline on the books at all.
              </p>
            </section>

            {/* Key Points */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                Key Points
              </h2>
              <ul className="mt-5 grid gap-3">
                {keyPoints.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                  >
                    <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-0.5">●</span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3 Metric Cards */}
            <section className="grid gap-4 md:grid-cols-3 mb-12">
              {statCards.map((item) => (
                <div
                  key={item.num}
                  className="rounded-md bg-[#F4EFE2] border border-[#B08D3F]/40 p-6 text-center shadow-sm"
                >
                  <span className="text-xs font-bold text-[#BA8E2D] uppercase tracking-wider block mb-1">
                    {item.num}
                  </span>
                  <div className="text-3xl md:text-4xl font-bold text-[#1B2639]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#1B2639] leading-snug">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-600 italic">
                    {item.subtext}
                  </p>
                </div>
              ))}
            </section>

            {/* Florida's Statute Of Limitations For Wrongful Death */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                Florida&apos;s Statute Of Limitations For Wrongful Death
              </h2>
              <p className="text-lg font-bold text-[#1B2639]">
                Two years from the date your loved one died under most circumstances.
              </p>
              <p>
                Before HB 837, negligence based wrongful death claims often carried a 4-year window. That changed for causes of action accruing on or after March 24, 2023.
              </p>
              <p>
                If your loved one died on or after that date, the 2-year rule applies to you, no exceptions for how complicated the case seems. You can read the full text of{" "}
                <a
                  href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/0095.html"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Chapter 95 of the Florida Statutes
                </a>{" "}
                directly through the Florida Legislature&apos;s website, and it’s worth doing so before you take any secondhand summary at face value, including this one.
              </p>

              {/* Deadlines By Claim Type Visual */}
              <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#1B2639] mb-6">
                  Deadlines By Claim Type
                </h3>
                <div className="space-y-5">
                  {deadlinesByType.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm font-semibold text-gray-800">
                        <span>{item.label}</span>
                        <span className="text-[#BA8E2D] font-bold sm:text-right">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-7 overflow-hidden relative">
                        <div
                          className={`h-full ${item.bg} ${item.text} flex items-center justify-end px-3 text-xs font-semibold rounded-full transition-all duration-500`}
                          style={{ width: item.width }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Who Exactly Has The Right To File? */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                Who Exactly Has The Right To File?
              </h2>
              <p className="text-lg font-bold text-[#1B2639]">
                Only the appointed personal representative of the estate may file, even though the money ultimately flows to surviving family members.
              </p>
              <p>
                Florida Statutes 768.19 through 768.21, known collectively as the Florida Wrongful Death Act, requires the decedent&apos;s estate, acting through a court appointed personal representative to bring the lawsuit. If no personal representative has been named yet, that has to happen in probate court before the wrongful death clock even matters, and probate itself can eat weeks off your two year window if nobody starts the process quickly.
              </p>

              <ul className="grid gap-3 my-4">
                <li className="flex items-start gap-3 rounded-md bg-gray-50 border border-gray-200 p-4">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">✓</span>
                  <div>
                    <strong className="text-[#1B2639]">Surviving spouse:</strong> can recover for loss of companionship, mental pain, and lost support and services.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-md bg-gray-50 border border-gray-200 p-4">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">✓</span>
                  <div>
                    <strong className="text-[#1B2639]">Minor children:</strong> can recover for lost parental companionship, instruction, and guidance, plus mental pain and suffering.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-md bg-gray-50 border border-gray-200 p-4">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">✓</span>
                  <div>
                    <strong className="text-[#1B2639]">Adult children:</strong> recover similarly only when there is no surviving spouse under current Florida law.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-md bg-gray-50 border border-gray-200 p-4">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">✓</span>
                  <div>
                    <strong className="text-[#1B2639]">Parents of a deceased minor:</strong> can recover for mental pain and suffering regardless of other survivors.
                  </div>
                </li>
              </ul>

              <p>
                <Link
                  href="/"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#9A731F]"
                >
                  McCulloch Law, P.A.
                </Link>{" "}
                routinely walks grieving families through the probate appointment process alongside the civil claim itself because separating the two tasks and hoping a family figures out probate on their own is how deadlines silently slip by.
              </p>

              {/* Callout CTA 1 */}
              <div className="rounded-md bg-[#1B2639] p-6 md:p-8 text-center text-white my-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  Don&apos;t Let Probate Paperwork Eat Your Filing Window
                </h3>
                <p className="text-white/80 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                  Our legal team steps in immediately to ensure probate and civil court filings occur concurrently without lost time.
                </p>
                <Link
                  href="/contact"
                  className="inline-block font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#a67c22] transition-colors uppercase tracking-wider text-sm"
                >
                  Schedule Your Free Consultation Today
                </Link>
              </div>
            </section>

            {/* Exceptions Can Extend Or Erase The 2 Year Deadline */}
            <section className="space-y-6 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                Exceptions Can Extend Or Erase The 2 Year Deadline
              </h2>
              <p className="text-lg font-bold text-[#1B2639]">
                Only 3 exceptions exist, and they are medical malpractice discovery, missing defendants and homicide. Almost everything else you read online about other exceptions is wrong or outdated.
              </p>

              {/* Subsection 1 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Deaths From Medical Malpractice
                </h3>
                <p>
                  If death was caused by the negligence of a physician, hospital, or a nursing facility, Fla. Stat. 95.11(4)(b) provides that the 2-year statute may begin on the day on which the malpractice was discovered. Or perhaps when it should have been discovered with a 4-year outer limit from the date of the incident. McCulloch Law&apos;s{" "}
                  <Link
                    href="/practice/medical-malpractice"
                    className="font-semibold text-[#BA8E2D] underline hover:text-[#9A731F]"
                  >
                    medical malpractice practice
                  </Link>{" "}
                  exists specifically because these discovery rule calculations are where families lose claims to simple miscounting.
                </p>
              </div>

              {/* Subsection 2 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Murder Or Manslaughter
                </h3>
                <p>
                  <a
                    href="https://www.flsenate.gov/laws/statutes/2024/95.11"
                    target="_blank"
                    rel={externalLinkRel}
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    Florida Statute 95.11(11)
                  </a>{" "}
                  removes the deadline entirely when a death results from an intentional act meeting the legal definition of murder or manslaughter under Florida Statute 782.04 or 782.07. A criminal conviction isn’t required to file the civil claim, and families don’t have to wait for a criminal trial to conclude.{" "}
                  <Link
                    href="/about"
                    className="font-semibold text-[#BA8E2D] underline hover:text-[#9A731F]"
                  >
                    Attorney McCulloch&apos;s background
                  </Link>{" "}
                  as a former prosecutor gives him a genuine read on how these parallel criminal and civil tracks actually move inside Hillsborough County courts.
                </p>
              </div>

              {/* Subsection 3 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Claims Against Government Entities
                </h3>
                <p>
                  If a public school bus, a county owned vehicle, or a state agency contributed to the death,{" "}
                  <a
                    href="https://codes.findlaw.com/fl/title-xlv-torts/fl-st-sect-768-28/"
                    target="_blank"
                    rel={externalLinkRel}
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    Florida Statute 768.28(6)
                  </a>{" "}
                  requires written notice to the agency and the Florida Department of Financial Services within a much tighter window before the lawsuit can even be filed, and that notice requirement runs on its own separate track from the 2 year statute of limitations.
                </p>
              </div>

              {/* Deadlines At A Glance Table */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Deadlines At A Glance
                </h3>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-[#1B2639] text-white">
                      <tr>
                        <th className="p-4 font-bold border-b border-gray-300">
                          Type Of Wrongful Death Claim
                        </th>
                        <th className="p-4 font-bold border-b border-gray-300">
                          Filing Deadline
                        </th>
                        <th className="p-4 font-bold border-b border-gray-300">
                          Governing Law
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {deadLinesGlance.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-[#EDF0F5]"}
                        >
                          <td className="p-4 font-medium text-gray-800">
                            {row.type}
                          </td>
                          <td className="p-4 font-bold text-[#1B2639]">
                            {row.deadline}
                          </td>
                          <td className="p-4 text-gray-600">
                            {row.statute}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Timing Determines The Outcome, Not Just The Eligibility */}
            <section className="space-y-6 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                Timing Determines The Outcome, Not Just The Eligibility
              </h2>
              <p className="text-lg font-bold text-[#1B2639]">
                A technically eligible claim filed on weak evidence loses to a technically identical claim filed with evidence secured in week one.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="w-1/2 p-4 font-bold text-white bg-[#8C2F2F] text-center uppercase tracking-wider text-xs md:text-sm">
                        Without Counsel Before The Clock Runs
                      </th>
                      <th className="w-1/2 p-4 font-bold text-white bg-[#3F6B4A] text-center uppercase tracking-wider text-xs md:text-sm">
                        With McCulloch Law On The Case Early
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="w-1/2 p-4 bg-[#FBF0F0] text-gray-800 border-r border-gray-200 leading-6 align-top">
                          <span className="inline-block text-red-600 font-bold mr-1.5">✕</span>
                          {item.withoutCounsel}
                        </td>
                        <td className="w-1/2 p-4 bg-[#EFF5F0] text-gray-800 leading-6 align-top">
                          <span className="inline-block text-green-700 font-bold mr-1.5">✓</span>
                          {item.withMcCulloch}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* What The Data Shows */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                Let&apos;s See What The Data Shows About Fatal Accidents In Florida Right Now
              </h2>
              <p>
                Nationally, CDC&apos;s{" "}
                <a
                  href="https://www.cdc.gov/nchs/fastats/accidental-injury.htm"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  National Vital Statistics System data
                </a>{" "}
                shows 197,449 unintentional injury deaths in 2024, making it the 3rd leading cause of death with over 41,000 of those injuries being motor vehicle related. Florida&apos;s year round traffic, seasonal tourist traffic and large motorcycle riding population put the state&apos;s numbers above the national average in several key categories tracked by the{" "}
                <a
                  href="https://www.flhsmv.gov/resources/crash-and-citation-reports/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Highway Safety and Motor Vehicles Office
                </a>
                .
              </p>
              <p>
                Our surveys show that most families who eventually retain wrongful death counsel in Tampa Bay do so between three and six months after the death, which is well inside the two year window but often after critical physical evidence has already been lost or overwritten.
              </p>

              {/* Callout Banner 2 */}
              <div className="rounded-md bg-[#1B2639] p-6 md:p-8 text-center text-white my-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  Every Week You Wait Is Evidence You Cannot Get Back
                </h3>
                <p className="text-white/80 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                  Speak directly with Attorney Drew McCulloch about your family&apos;s timeline, free of charge.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:8134442817"
                    className="w-full sm:w-auto font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#a67c22] transition-colors uppercase tracking-wider text-sm"
                  >
                    Call (813) 444-2817
                  </a>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto font-bold px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-[#1B2639] transition-colors uppercase tracking-wider text-sm"
                  >
                    Book Online
                  </Link>
                </div>
              </div>
            </section>

            {/* What Should You Do In The First 30 Days */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                What Should You Do In The First 30 Days
              </h2>
              <p className="text-lg font-bold text-[#1B2639]">
                Make sure that a lawyer reviews the file before adjusters from the insurance company twist the story. On the other hand, there are other crucial steps that shouldn&apos;t be overlooked.
              </p>

              <ul className="grid gap-3">
                {first30DaysList.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-md bg-white border border-gray-200 p-4 shadow-sm"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B2639] text-[#BA8E2D] font-bold text-xs flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-7">{step}</span>
                  </li>
                ))}
              </ul>

              {/* Drew McCulloch Quote Block */}
              <div className="my-8 rounded-lg border-l-4 border-[#1B2639] bg-[#EDF0F5] p-6 md:p-8">
                <span className="text-5xl font-serif text-[#1B2639] leading-none block mb-2">
                  “
                </span>
                <blockquote className="text-lg md:text-xl font-normal text-gray-800 italic leading-relaxed">
                  Grieving families need someone who will hold the deadline in their head so they can hold their family together instead. That is the job, every single time.
                </blockquote>
                <div className="mt-4 text-right">
                  <p className="font-bold text-base text-[#1B2639]">Drew McCulloch</p>
                  <p className="text-xs text-gray-600 italic">
                    Founder, McCulloch Law, P.A., Former State Prosecutor
                  </p>
                </div>
              </div>
            </section>

            {/* Circuit Court Filings in Tampa, St. Petersburg and The Surroundings */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
                Circuit Court Filings in Tampa, St. Petersburg and The Surroundings
              </h2>
              <p>
                Tampa cases fall under the authority of the{" "}
                <a
                  href="https://www.fljud13.org/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  13th Judicial Circuit Court located in the county of Hillsborough
                </a>
                . However, the St. Petersburg and Clearwater areas are under the jurisdiction of the{" "}
                <a
                  href="https://www.jud6.org/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  6th Judicial Circuit located in the county of Pinellas
                </a>
                . These differences may affect the speed of dockets, the rules about mediation, and even the insurance defense companies that may represent the opposing party.
              </p>
              <p>
                McCulloch Law, P.A. has built its wrongful death and fatal accident practice specifically around Tampa, St. Petersburg, Clearwater, Brandon, and Riverview, which means the firm already knows the tendencies of the judges and defense counsel your case is likely to encounter, rather than learning them on your family&apos;s clock.
              </p>
            </section>

            {/* Firm Contact Block */}
            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Wrongful Death Legal Representation &mdash; Contact McCulloch Law, P.A.
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                Wrongful death filing deadlines in Florida are strict and unforgiving. Taking action early ensures critical evidence is preserved and your family&apos;s claim is protected from day one.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold text-lg text-[#1B2639]">McCulloch Law, P.A. | Tampa Bay Personal Injury &amp; Wrongful Death</p>
                <p className="mt-1">238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p className="mt-1">Serving Tampa, Clearwater, St. Petersburg, Brandon, Riverview, and all surrounding Florida communities</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:8134442817"
                    className="inline-flex items-center justify-center font-bold px-6 py-3 border border-[#BA8E2D] text-[#BA8E2D] rounded hover:bg-[#BA8E2D] hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    Call (813) 444-2817
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#1B2639] text-white rounded hover:bg-[#1B2639]/90 transition-colors uppercase tracking-wider text-sm"
                  >
                    Contact Us Online
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] border-b pb-3 border-[#BA8E2D]/40">
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
                    <p className="mt-2 leading-7 text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
              Disclaimer: This article is for general informational purposes and does not form an attorney-client relationship. For help with any personal injury or wrongful death case, reach out to McCulloch Law, P.A.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:max-w-[400px] lg:shrink-0 h-full lg:h-[1000px] overflow-y-auto p-3 rounded-lg">
            <h2 className="font-medium text-4xl text-black border-b-2 pb-4 mb-6">
              Recent Blogs
            </h2>

            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog: any, index: number) => (
                <Link
                  key={index}
                  href={`/blogs/${blog.slug}`}
                  className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 hover:bg-gray-50 transition-colors rounded"
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
                  <div className="font-bold text-black line-clamp-2 text-sm">
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
