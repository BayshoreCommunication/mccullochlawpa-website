import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { whatIsWrongfulDeathClaimFloridaBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const keyPoints = [
  "A wrongful death claim only exists if the deceased could have sued for their own injuries had they survived. That's the entire legal test under Florida Statute 768.19.",
  "Only a court-appointed personal representative can file.",
  "Spouses, children, and parents qualify to seek recovery. Unmarried partners and most extended family do not.",
  "The deadline is two years from the date of death, not the date of the accident. Miss it, and the claim is gone for good.",
  "Florida sets no cap on wrongful death damages, except in medical malpractice cases.",
];

const stats1 = [
  { value: "2,849", label: "Florida traffic deaths, 2025 (FLHSMV)" },
  { value: "2 Years", label: "Statute of limitations, most cases" },
  { value: "$0", label: "Upfront cost on contingency" },
];

const survivorsList = [
  "A surviving spouse",
  "Children, adopted or biological, including adult children under 25 in some contexts",
  "Parents of the deceased",
  "Blood relatives or adoptive siblings who depended on the deceased for support, but only when no closer survivor exists",
];

const timelineRows = [
  {
    when: "Day 1",
    label: "The death occurs",
    happens:
      "Evidence preservation window opens. This is the moment that matters most and gets thought about least.",
  },
  {
    when: "Week 1",
    label: "Personal representative sought",
    happens:
      "Probate court appoints or confirms who has standing to file on behalf of the estate.",
  },
  {
    when: "Months 1-6",
    label: "Investigation and demand",
    happens:
      "Records requested, liability established, initial demand sent to insurers if applicable.",
  },
  {
    when: "Up to 2 Years",
    label: "Suit must be filed",
    happens:
      "Florida Statute 95.11 deadline. Filing after this point typically forecloses recovery entirely.",
  },
];

const damagesTableRows = [
  {
    recoverableBy: "Survivors",
    type: "Loss of companionship, guidance, mental pain and suffering",
    appliesTo: "Spouse, minor children, sometimes parents",
  },
  {
    recoverableBy: "Survivors",
    type: "Lost support and services from injury date forward",
    appliesTo: "Spouse, children, dependent relatives",
  },
  {
    recoverableBy: "Estate",
    type: "Medical and funeral expenses charged to the estate",
    appliesTo: "The decedent's estate",
  },
  {
    recoverableBy: "Estate",
    type: "Lost earnings and net accumulations",
    appliesTo: "The decedent's estate",
  },
  {
    recoverableBy: "Estate",
    type: "Prospective net accumulations, present value",
    appliesTo: "Estate, with a surviving spouse or lineal descendants",
  },
];

const settlementRows = [
  { type: "Premises Cases", range: "$90K – $350K", color: "bg-[#BA8E2D]", percentage: 35 },
  { type: "Auto & Motorcycle", range: "$200K – $800K", color: "bg-[#1B2639]", percentage: 65 },
  { type: "Commercial Truck", range: "$450K – $1.8M+", color: "bg-slate-700", percentage: 95 },
  { type: "Med Malpractice", range: "$275K – $1.1M", color: "bg-amber-600", percentage: 75 },
];

const undervaluedPoints = [
  "Lost support gets calculated off stale income figures instead of career trajectory",
  "Loss of companionship for minor children gets minimized or skipped in early offers",
  "Comparative negligence gets overstated to justify a lowball number",
  "Survival action damages, the decedent's own suffering, often never come up at all",
];

const firstDaysChecklist = [
  "Request the police or incident report the moment it's available",
  "Photograph the scene or property condition before repairs happen",
  "Preserve medical records tied to the fatal incident and anything leading up to it",
  "Skip recorded statements to an insurance adjuster until an attorney has weighed in",
  "Start the conversation about the personal representative appointment sooner than it feels necessary",
];

const faqs = [
  {
    question: "Can I file before probate is opened?",
    answer:
      "No. A personal representative has to be appointed first, though evidence preservation can and should start immediately.",
  },
  {
    question: "What if the at-fault party has no insurance?",
    answer:
      "Uninsured and underinsured motorist coverage on the decedent's own policy often ends up being the real source of recovery.",
  },
  {
    question: "Do settlement funds all go to the estate?",
    answer:
      "No. Funds paid directly to survivors generally bypass claims from the estate's creditors.",
  },
  {
    question: "Is a wrongful death case public record?",
    answer:
      "Yes, civil filings are public in Florida. Settlement terms, though, can often be kept confidential by agreement.",
  },
];

const externalLinkRel = "nofollow noopener noreferrer";

export default async function WhatIsWrongfulDeathClaimFlorida() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    whatIsWrongfulDeathClaimFloridaBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== whatIsWrongfulDeathClaimFloridaBlog.slug
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
                    name: "What Is a Wrongful Death Claim in Florida?",
                    item: "https://www.mcfloridalaw.com/blogs/what-is-a-wrongful-death-claim-in-florida-law",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://www.mcfloridalaw.com/blogs/what-is-a-wrongful-death-claim-in-florida-law",
                },
                headline: "What Is a Wrongful Death Claim in Florida?",
                name: "Florida Wrongful Death Claims Guide",
                description:
                  "A wrongful death claim in Florida must be filed within two years by a personal representative. See who qualifies and what families can recover.",
                url: "https://www.mcfloridalaw.com/blogs/what-is-a-wrongful-death-claim-in-florida-law",
                image:
                  "https://www.mcfloridalaw.com/images/static-blogs/what-is-a-wrongful-death-claim-in-florida-law.webp",
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Wrongful Death Law in Florida",
                  description:
                    "An overview of Florida wrongful death claims under Statute 768.19 and Statute 95.11, including eligibility rules, filing deadlines, recoverable estate and survivor damages, settlement ranges, and legal procedures.",
                },
                keywords: [
                  "wrongful death claim Florida",
                  "Florida wrongful death statute",
                  "who can file wrongful death in Florida",
                  "Florida Statute 768.19",
                  "Florida Statute 95.11 wrongful death",
                  "Florida Statute 768.18 survivors",
                  "Florida Statute 768.21 damages",
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
                datePublished: "2026-09-07",
                dateModified: "2026-09-07",
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
                  src={whatIsWrongfulDeathClaimFloridaBlog.featuredImage.image.url}
                  alt={whatIsWrongfulDeathClaimFloridaBlog.featuredImage.altText}
                  title={whatIsWrongfulDeathClaimFloridaBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {whatIsWrongfulDeathClaimFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                McCulloch Law P.A. | Tampa Bay Personal Injury & Wrongful Death Attorneys
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {whatIsWrongfulDeathClaimFloridaBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: September 7, 2026 | Updated: September 7, 2026 | McCulloch Law P.A. | Tampa Bay Wrongful Death Attorneys
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                A wrongful death claim is a lawsuit filed when someone dies because of another person&apos;s negligence or wrongdoing. The family doesn&apos;t file it directly. A personal representative does, on behalf of the estate and the people left behind.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                Florida law, specifically{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/768.19"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Statute 768.19
                </a>
                , sets that rule. And under{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/95.11"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Statute 95.11
                </a>
                , you have two years from the date of death to file. Wait too long, and the case is usually over before it starts.
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
                What Actually Counts as a Wrongful Death in Florida?
              </h2>
              <p>
                A death counts as wrongful under Florida law when the person who died would have had a valid injury claim had they lived. That&apos;s the whole test written into{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/768.19"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.19
                </a>
                .
              </p>
              <p>
                Work backward from there, and the rest falls into place. Car accidents, truck collisions, motorcycle crashes, medical malpractice, defective products, unsafe premises and workplace incidents - all of it qualifies for the same reason. Someone owed a duty of care. They broke it. And the break is what killed the person.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Who Is Actually Allowed to File?
              </h2>
              <p>
                You cannot walk into a Hillsborough County courthouse as a grieving spouse and file this yourself. The suit has to come from a personal representative, a role{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/768.20"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.20
                </a>{" "}
                defines and one that&apos;s usually named in a will or assigned by the probate court when there isn&apos;t one.
              </p>
              <p>
                That representative sues on behalf of the estate and the survivors, but who qualifies as a survivor is its own gate to pass through.{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/768.18"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.18
                </a>{" "}
                spells it out strictly.
              </p>

              <div className="my-6">
                <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                  Survivors Under Florida Statute 768.18
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {survivorsList.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              <p>
                Left out entirely are unmarried partners, fiances, unadopted stepchildren, and grandparents unless dependency existed. We&apos;ve had to explain this to people mid-tears, and it&apos;s a rough conversation every time.
              </p>

              <div className="rounded-md border-l-4 border-[#BA8E2D] bg-gray-50 p-6 italic text-gray-800 my-6">
                <p className="text-lg">
                  &quot;People assume grief equals legal standing. It doesn&apos;t. The first thing we do with a new wrongful death client isn&apos;t talk settlement value, it&apos;s confirm who actually has the right to be in this lawsuit, because filing with the wrong survivor list can delay a case by months.&quot;
                </p>
                <p className="mt-3 font-semibold not-italic text-[#1B2639]">
                  * Drew McCulloch, Founding Attorney, McCulloch Law, P.A.
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Long Do Families Actually Have to File?
              </h2>
              <p>
                Two years.{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/95.11"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 95.11(4)(e)
                </a>
                , running from the date of death, not the crash or the malpractice event if those happened earlier.
              </p>

              <div className="rounded-md border-l-4 border-[#BA8E2D] bg-amber-50/50 p-6 text-gray-800 my-6">
                <h3 className="text-xl font-bold text-[#1B2639] mb-2">
                  A WARNING WORTH REPEATING
                </h3>
                <p>
                  Two years sounds generous until you&apos;re six months into probate, still waiting on medical records, and an insurance adjuster has already closed their file. Evidence, especially dashcam footage, surveillance video, and skid mark documentation, degrades or gets deleted long before the legal deadline arrives. Treat the two-year window as a ceiling, not a target.
                </p>
              </div>

              <p>
                A few exceptions run the other direction. Murder or manslaughter claims carry no statute of limitations at all. Government defendants, a county-owned vehicle, a state road defect, trigger a shorter notice requirement under{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/768.28"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.28
                </a>
                . And in some malpractice cases, a discovery rule can push the clock later if the cause of death wasn&apos;t obvious right away.
              </p>

              <div className="overflow-hidden rounded-md border border-gray-200 my-6">
                <div className="grid grid-cols-3 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-4">TIMELINE</div>
                  <div className="p-4">STAGE</div>
                  <div className="p-4">WHAT HAPPENS</div>
                </div>
                {timelineRows.map((row) => (
                  <div
                    key={row.when}
                    className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700"
                  >
                    <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                      {row.when}
                    </div>
                    <div className="p-4 font-medium text-gray-900">{row.label}</div>
                    <div className="p-4">{row.happens}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Compensation Can a Family Actually Recover?
              </h2>
              <p>
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/768.21"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.21
                </a>{" "}
                splits damages two ways, one bucket for the estate, one for individual survivors, and the split matters because estate funds are subject to creditor claims. Survivor funds generally aren&apos;t.
              </p>

              <div className="overflow-hidden rounded-md border border-gray-200 my-6">
                <div className="grid grid-cols-3 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-4">RECOVERABLE BY</div>
                  <div className="p-4">TYPE OF DAMAGES</div>
                  <div className="p-4">APPLIES TO</div>
                </div>
                {damagesTableRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700"
                  >
                    <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                      {row.recoverableBy}
                    </div>
                    <div className="p-4 font-medium text-gray-900">{row.type}</div>
                    <div className="p-4">{row.appliesTo}</div>
                  </div>
                ))}
              </div>

              <p>
                No general cap exists on wrongful death damages in Florida. However, Section 768.21(8) carves out real restrictions for malpractice cases specifically, adult children lose the right to claim lost companionship when a parent dies from medical negligence, and parents of a deceased adult child face that same restriction. Still fully enforced as of 2026, despite repeated attempts to strike it.
              </p>
              <p>
                Cases touching a hospital, surgeon, or nursing facility often overlap with our{" "}
                <Link
                  href="/blogs/know-medical-negligence-case-indicators"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  medical malpractice work
                </Link>
                , and pursuing both together tends to produce a more complete recovery than treating them as separate claims.
              </p>
            </section>

            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Do Not Let the Two Year Clock Run Out
              </h2>
              <p className="mt-4 leading-8">
                McCulloch Law, P.A. offers free consultations for families across Tampa, St. Petersburg, Clearwater, Brandon, and Riverview. We work on contingency. You pay nothing unless we win.
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
                  Schedule a Free Consultation →
                </Link>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Are Florida Wrongful Death Settlements Actually Worth?
              </h2>
              <p>
                It depends. Really, not as a dodge. Category of loss, strength of liability proof, and how much insurance is actually sitting behind the defendant. Our surveys of recent Tampa Bay settlements, checked against statewide reporting, show real variation by case type rather than one flat number people can plug into a calculator.
              </p>

              <h3 className="text-xl font-bold text-[#1B2639] mt-6 mb-4">
                Typical Settlement Range by Case Type, Tampa Bay Region
              </h3>

              <div className="my-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  {settlementRows.map((item) => (
                    <div key={item.type}>
                      <div className="flex justify-between items-center text-sm font-medium mb-1">
                        <span className="text-gray-800 font-semibold">{item.type}</span>
                        <span className="font-bold text-[#1B2639]">{item.range}</span>
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

              <p>
                These are settlement ranges pulled from real outcomes. Truck cases tend to settle higher because federal minimum coverage rules force carriers to hold deep policies. A premises case against a thinly insured landlord can settle low even with airtight liability. Actually, early preparation moves a number, not the type of case on paper.
              </p>
              <p>
                Federal coverage minimums for commercial carriers are published by the{" "}
                <a
                  href="https://www.fmcsa.dot.gov/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Federal Motor Carrier Safety Administration
                </a>
                , and they&apos;re a big part of why truck cases behave differently than ordinary auto claims.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why Do Insurance Adjusters Undervalue These Claims So Often?
              </h2>
              <p>
                An adjuster calls within days of the death, offers a number that barely covers the funeral, and frames it as compassion. It isn&apos;t. It&apos;s a business decision built to close the file before a family understands what the claim is actually worth.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {undervaluedPoints.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
              <p className="mt-4">
                Statewide crash totals live in the{" "}
                <a
                  href="https://www.flhsmv.gov/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  FLHSMV Traffic Crash Facts report
                </a>
                , and fatality-by-crash-type breakdowns are tracked by the{" "}
                <a
                  href="https://www.iihs.org/topics/fatality-statistics"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  IIHS Fatality Facts database
                </a>
                .
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Should a Family Do in the First Few Days?
              </h2>
              <p>
                The window right after a death is when evidence is easiest to get and easiest to lose.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {firstDaysChecklist.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
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

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Comes Next Is a Decision, Not Just a Deadline
              </h2>
              <p>
                Attorney Drew McCulloch, a former Hillsborough County prosecutor who has taken so many cases to verdict, built McCulloch Law, P.A., to run the wrongful death claim and the survival action together instead of treating them as an afterthought. That coordination is what keeps a family from settling for a number that only covers the funeral when the law allows for far more. Learn more about how the firm handles wrongful death cases in Tampa, or review Drew McCulloch&apos;s background as a trial attorney before your consultation.
              </p>
              <p>
                If a preventable death has put your family&apos;s financial future at risk, the firm&apos;s{" "}
                <Link
                  href="/practice"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  personal injury practice
                </Link>{" "}
                is built to investigate liability and pursue full compensation, starting with a free conversation.
              </p>
            </section>

            <section className="mt-12 rounded-md bg-[#1B2639] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Speak With a Wrongful Death Attorney Today
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                Attorney Drew McCulloch fights for families across Tampa, St. Petersburg, Clearwater, Brandon, and Riverview. Free consultations. No fee unless we win.
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
                  Book Online
                </Link>
              </div>
            </section>

            <div className="mt-10 border-t border-gray-200 pt-6 space-y-3 text-sm leading-6 text-gray-500">
              <p>
                Disclaimer: This article is for general informational purposes and does not constitute legal advice. Consult a licensed Florida attorney about your specific case.
              </p>
              <p className="font-semibold text-gray-700">
                McCulloch Law, P.A. | 238 East Davis Boulevard, Ste 202, Tampa, FL 33606 | Serving Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and all of Hillsborough County
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
