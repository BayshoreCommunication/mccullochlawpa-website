import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { whatHappensAfterADuiArrestInFloridaBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "Two parallel cases run simultaneously: criminal (court) and civil or administrative (license).",
  "10 calendar days to request a Formal Review Hearing, or the suspension locks in automatically.",
  "BAC level, refusal, prior offenses, and injury all shift the penalty math under Fla. Stat. § 316.193.",
  "Early moves, made before arraignment, usually decide more than anything said at trial.",
];

const stats = [
  { value: "10 Days", label: "To request a Formal Review Hearing" },
  { value: "$500–$1,000", label: "First conviction fine range" },
  { value: "15+ Years", label: "Drew McCulloch's trial experience" },
];

const penalties = [
  {
    offense: "1st, standard",
    fine: "$500–$1,000",
    jail: "Up to 6 months",
    interlock: "None mandatory",
    isFelony: false,
  },
  {
    offense: "1st, BAC .15+ or minor in car",
    fine: "$1,000–$2,000",
    jail: "Up to 9 months",
    interlock: "6 months minimum",
    isFelony: false,
  },
  {
    offense: "2nd within 5 years",
    fine: "$1,000–$2,000",
    jail: "10 days mandatory min.",
    interlock: "1 year minimum",
    isFelony: false,
  },
  {
    offense: "3rd within 10 years",
    fine: "$2,000–$5,000",
    jail: "Felony, up to 5 yrs",
    interlock: "2 years minimum",
    isFelony: true,
  },
];

const needlePoints = [
  "Requesting the Formal Review Hearing inside 10 days, correctly filed, not just mentioned in passing to the arresting officer.",
  "Pulling the breath or blood testing equipment's calibration and maintenance records before they age into the background noise of a filing system.",
  "Reviewing whether the traffic stop itself had a lawful basis, since a bad stop can undo everything built on top of it.",
  "Cross referencing prior offenses accurately, since Florida's five and ten year lookback windows change penalty tiers dramatically and get miscalculated more often than you'd think.",
  "Understanding collateral consequences, insurance and professional licensing among them, before entering any plea, not after.",
];

const faqs = [
  {
    question: "Can I get a hardship license immediately after a DUI arrest in Florida?",
    answer:
      "Not immediately. For a first refusal you generally serve 90-days without driving privileges before eligibility opens up, and for an unlawful BAC suspension it's 30-days, both requiring DUI school enrollment first.",
  },
  {
    question: "Does a DUI in Florida show up on background checks forever?",
    answer:
      "Yes, unless it's sealed or expunged, and DUI convictions are notoriously difficult to expunge under Florida law compared to other misdemeanors, so the record tends to follow you through job and housing applications.",
  },
  {
    question: "Can law enforcement force a blood draw if I refuse testing?",
    answer:
      "Only in narrow circumstances involving serious bodily injury or death, where medical personnel may draw blood with reasonable force even over a driver's objection.",
  },
];

export default async function WhatHappensAfterADuiArrestInFlorida() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    whatHappensAfterADuiArrestInFloridaBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== whatHappensAfterADuiArrestInFloridaBlog.slug
    ) || []),
  ];
  const recentBlogs = sidebarBlogs
    .filter((blog: any) => blog?.published && blog?.slug)
    .slice(0, 10);

  const canonicalUrl = `https://www.mcfloridalaw.com/blogs/${whatHappensAfterADuiArrestInFloridaBlog.slug}`;

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
                    name: whatHappensAfterADuiArrestInFloridaBlog.title,
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
                headline: whatHappensAfterADuiArrestInFloridaBlog.metaTitle,
                name: whatHappensAfterADuiArrestInFloridaBlog.title,
                description: whatHappensAfterADuiArrestInFloridaBlog.metaDescription,
                url: canonicalUrl,
                image: `https://www.mcfloridalaw.com${whatHappensAfterADuiArrestInFloridaBlog.featuredImage.image.url}`,
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "What Happens After a DUI Arrest in Florida",
                  description:
                    whatHappensAfterADuiArrestInFloridaBlog.featuredImage.description,
                },
                keywords: [
                  "What Happens After a DUI Arrest in Florida",
                  "Florida DUI arrest process",
                  "10 day rule DUI Florida",
                  "FLHSMV formal review hearing",
                  "Florida Statute 316.193",
                  "Intoxilyzer 8000 breath test Florida",
                  "Tampa DUI defense lawyer",
                  "Hillsborough County DUI attorney",
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
                datePublished: "2026-10-07",
                dateModified: "2026-10-07",
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
                src={whatHappensAfterADuiArrestInFloridaBlog.featuredImage.image.url}
                alt={whatHappensAfterADuiArrestInFloridaBlog.featuredImage.altText}
                title={whatHappensAfterADuiArrestInFloridaBlog.featuredImage.title}
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="p-3 text-sm italic text-gray-600 bg-gray-50 border-t border-gray-200">
                {whatHappensAfterADuiArrestInFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            {/* Post Header & Dates */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                DUI Defense | Florida Criminal Defense
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {whatHappensAfterADuiArrestInFloridaBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600 font-medium">
                Published: October 7, 2026 | Updated: October 7, 2026 | McCulloch Law, P.A. | Florida DUI Defense
              </p>
            </div>

            {/* Lead Section - Hero Navy Box */}
            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10 shadow-sm">
              <p className="text-xl md:text-2xl leading-relaxed text-justify">
                After a Florida DUI arrest, two clocks start running at once. A criminal case builds in court, and a separate administrative case at FLHSMV starts eating your license,{" "}
                <a
                  href="https://www.flhsmv.gov/pdf/forms/78306.pdf"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  with a hard 10-day deadline
                </a>{" "}
                to fight back. Miss that window and you lose leverage you can never get back, regardless of what happens later in the courtroom.
              </p>
            </section>

            {/* Key Takeaways */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Key Takeaways
              </h2>
              <ul className="mt-5 grid gap-3">
                {takeaways.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm flex items-start gap-3"
                  >
                    <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">&#9679;</span>
                    <span className="leading-7 text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Stats Cards */}
            <section className="grid gap-4 md:grid-cols-3 mb-12">
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
            </section>

            {/* Section 1: The Night Doesn't End at the Jail */}
            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Night Doesn&apos;t End at the Jail, It Just Changes Rooms
              </h2>
              <p className="text-justify">
                Here&apos;s the part nobody explains at the scene. The officer takes your license and hands you a citation, and that flimsy paper is now doing double duty. It is a criminal charging document and a 10-day driving permit, both, stapled into one piece of paper. Two systems just switched on, and they don&apos;t talk to each other the way you&apos;d hope.
              </p>
              <p className="text-justify">
                One is criminal court, working through arraignment, discovery, motions, maybe trial. The other lives at the Florida Department of Highway Safety and Motor Vehicles, and it doesn&apos;t care about your court date at all. It runs on its own calendar, and that calendar is short.
              </p>
              <p className="text-justify">
                Under Florida law, a DUI means your normal faculties were impaired, or your blood or breath alcohol sat at .08 or higher, full stop,{" "}
                <a
                  href="https://www.flsenate.gov/laws/statutes/2025/316.193"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Florida Statute 316.193
                </a>{" "}
                lays it out plain. It doesn&apos;t matter which theory the state runs at trial. For roadside or station breath tests, law enforcement agencies in Florida primarily use the{" "}
                <strong className="text-[#1B2639]">Intoxilyzer 8000</strong>. The{" "}
                <a
                  href="https://www.fdle.state.fl.us/alcohol-testing-program"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Florida Department of Law Enforcement (FDLE) Alcohol Testing Program
                </a>{" "}
                strictly regulates these machines to ensure their scientific reliability.
              </p>
            </section>

            {/* Subsection: The 10 Day Countdown */}
            <section className="space-y-5 text-gray-700 leading-8 mt-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The 10 Day Countdown Nobody Warns You About
              </h3>
              <p className="text-justify">
                You get 10 calendar days, weekends included, holidays included, no grace period, to request what&apos;s called a Formal Review Hearing with{" "}
                <a
                  href="https://www.flhsmv.gov/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  FLHSMV
                </a>
                . Miss it and the suspension goes automatic. No hearing. No argument. Just gone.
              </p>
              <p className="text-justify">
                Win that hearing, or even just request it properly, and you can often get a 42-day temporary permit while the review plays out. The hearing itself puts an officer&apos;s paperwork under a microscope early, long before the prosecutor has finished building the criminal file.
              </p>
              <p className="text-justify">
                Request the hearing and lose it, and you&apos;re looking at a 30-day hard suspension if you blew into the machine, 90-days if you refused. Waive the hearing instead through a waiver review, and you skip that hard suspension, but you also skip your one shot at cross examining the officer before the state&apos;s case solidifies. That is a decision that warrants a lawyer who has sat across from Hillsborough hearing officers before,{" "}
                <Link
                  href="/practice/dui"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  our DUI defense practice
                </Link>{" "}
                exists specifically for that first 72 hours.
              </p>
            </section>

            {/* Urgent Callout Box 1 */}
            <section className="my-10 rounded-md border-l-4 border-[#1B2639] bg-[#E9EEF6] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
                The 10 day clock does not pause for the weekend.
              </h3>
              <p className="mt-2 text-base md:text-lg italic text-[#1B2639]/80">
                If you were arrested recently, the review hearing window may already be closing.
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

            {/* Section 2: What a Conviction Actually Costs You */}
            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What a Conviction Actually Costs You?
              </h2>
              <p className="text-justify">
                People imagine a DUI conviction as one flat penalty. It isn&apos;t. Florida stacks the consequences based on blood alcohol level, whether anyone got hurt, whether a minor was in the car, and whether this is your first rodeo or your third.
              </p>

              {/* Penalties Table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                      <th className="p-4 border border-gray-200">Offense</th>
                      <th className="p-4 border border-gray-200">Fine</th>
                      <th className="p-4 border border-gray-200">Jail Exposure</th>
                      <th className="p-4 border border-gray-200">Ignition Interlock</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                    {penalties.map((item, index) => (
                      <tr
                        key={item.offense}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-4 border border-gray-200 font-bold">
                          {item.offense}
                        </td>
                        <td className="p-4 border border-gray-200">
                          {item.fine}
                        </td>
                        <td
                          className={`p-4 border border-gray-200 ${
                            item.isFelony
                              ? "text-red-600 font-semibold"
                              : ""
                          }`}
                        >
                          {item.jail}
                        </td>
                        <td className="p-4 border border-gray-200">
                          {item.interlock}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs md:text-sm italic text-gray-500">
                Source: Florida Statute 316.193, current as filed through the 2026 legislative session.
              </p>

              <p className="text-justify">
                None of that accounts for what happens when a DUI involves a crash, an injury, or worse. Those cases move into an entirely different category of exposure, and if you&apos;re facing one, that belongs in a direct conversation on{" "}
                <Link
                  href="/practice/dui"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  our DUI practice page
                </Link>
                , not a blog post.
              </p>
            </section>

            {/* Section 3: Why the First Move Matters More */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why the First Move Matters More Than the Closing Argument
              </h2>
              <p className="text-justify">
                The outcome of a DUI case is usually decided in the first two weeks. Evidence gets stale. Body camera footage gets reviewed or it doesn&apos;t. Witnesses remember less by the month. The officer&apos;s maintenance records on that breath machine either get pulled while they&apos;re still sitting in a filing system somewhere, or they get buried under six months of routine paperwork nobody bothers to chase anymore.
              </p>
              <p className="text-justify">
                Attorney Drew McCulloch has spent time on the other side of this exact table. Before defending these cases across Tampa Bay, he spent years as a Florida state prosecutor. Fifteen years of that pattern recognition changes how a case gets attacked from day one, and it&apos;s part of why{" "}
                <Link
                  href="/about"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Drew McCulloch
                </Link>{" "}
                has been recognized by both Super Lawyers Rising Stars and The National Trial Lawyers.
              </p>

              {/* Quote Block */}
              <blockquote className="my-8 rounded-md border-l-4 border-[#BA8E2D] bg-gray-50 p-6 md:p-8 text-gray-800 shadow-sm">
                <p className="text-lg md:text-xl italic text-[#1B2639] leading-relaxed">
                  &ldquo;I built these cases from the other side for years. I know exactly what a prosecutor is hoping the defense never checks, and that&apos;s usually the first thing I check.&rdquo;
                </p>
                <cite className="block mt-3 text-sm md:text-base font-bold text-[#BA8E2D] not-italic">
                  &mdash; Drew McCulloch, Esq., Former State Prosecutor, McCulloch Law, P.A.
                </cite>
              </blockquote>

              <p className="text-justify">
                Take a case out of Hillsborough. A client came in facing a second DUI within five years involving alcohol, the kind of charge that statute treats as a mandatory jail sentence waiting to happen. The case was dismissed by motion. Another client walked in facing a DUI over .15, the aggravated tier with the steeper fines and the longer interlock requirement. Same result, dismissed by motion. These weren&apos;t lucky breaks. They were built on finding the procedural gap early, back when each case was still soft, before the state had time to harden it. You can read more of these outcomes on the firm&apos;s{" "}
                <Link
                  href="/testimonials"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  testimonials and case results page
                </Link>
                .
              </p>
            </section>

            {/* Section 4: Your License Isn't the Only Thing on the Clock */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Your License Isn&apos;t the Only Thing on the Clock
              </h2>
              <p className="text-justify">
                Insurance companies watch court dockets closer than most people realize. A pending DUI charge, even before conviction, can trigger rate increases or nonrenewal notices depending on your carrier and your policy language. Professional license holders, nurses, contractors, real estate agents, teachers, often face separate reporting obligations to their licensing board that have nothing to do with the criminal court timeline and everything to do with contract language signed years ago and never reread.
              </p>
              <p className="text-justify">
                None of this gets explained at the scene of the arrest, and most of it doesn&apos;t get explained by an overworked public defender either, not out of neglect, just out of raw caseload math. This is where the investigative instinct matters. Somebody needs to be reading the full picture, the citation, the breath machine&apos;s maintenance log, the officer&apos;s history, the insurance exposure, the license board fine print, all of it, together, in the first days.
              </p>
            </section>

            {/* Section 5: What Actually Moves the Needle */}
            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Actually Moves the Needle in These Cases
              </h2>
              <ul className="mt-5 grid gap-3">
                {needlePoints.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm flex items-start gap-3"
                  >
                    <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">&#9679;</span>
                    <span className="leading-7 text-justify">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-justify mt-6">
                Look, a DUI arrest feels like the walls closed in overnight. They didn&apos;t. Two clocks are running, one loud and one quiet, and the quiet one, the 10-day license clock, is usually the one that costs people the most when they ignore it. The math in Florida&apos;s statute book is not on your side by default. Somebody needs to go read the fine print before the state finishes writing its version of the story.
              </p>
            </section>

            {/* Urgent Callout Box 2 */}
            <section className="my-10 rounded-md border-l-4 border-[#1B2639] bg-[#E9EEF6] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B2639]">
                If you&apos;re holding that citation right now, the next 10 days decide more than you think.
              </h3>
              <p className="mt-2 text-base md:text-lg italic text-[#1B2639]/80">
                Drew McCulloch spent years prosecuting these cases. Now he uses that same eye for detail for you.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-base font-bold">
                <Link
                  href="/contact"
                  className="text-[#BA8E2D] underline hover:text-[#967123] transition-colors"
                >
                  Contact McCulloch Law, P.A. today
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

            {/* Gold Action CTA Card */}
            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                A Charge Is Not a Conviction. Not Yet.
              </h2>
              <p className="mt-4 leading-8 text-justify">
                At McCulloch Law, P.A., we start building your defense before the State finishes building theirs. Two parallel cases are running &mdash; don&apos;t let the 10-day administrative hearing window expire.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <span className="bg-[#1B2639] px-3 py-1 rounded">Talk to Us Now</span>
                <span className="bg-[#1B2639] px-3 py-1 rounded">Available 24 Hours</span>
                <span className="bg-[#1B2639] px-3 py-1 rounded">Tampa Bay & Statewide</span>
              </div>
            </section>

            {/* Contact Information & Defense Lawyer Near You */}
            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Florida DUI Defense Lawyer Near You &mdash; Get Help Today
              </h2>
              <p className="mt-4 leading-8 text-gray-700 text-justify">
                A DUI arrest in Florida triggers rapid legal consequences. The longer you wait to request your formal review hearing and build your defense, the higher the risk of severe penalties, license suspension, and mandatory sentencing.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold text-lg text-[#1B2639]">McCulloch Law, P.A. | Outstanding DUI Defense</p>
                <p className="mt-1">238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p className="mt-1">Serving Tampa, Clearwater, St. Petersburg, and all surrounding Florida counties</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
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
            <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500 italic">
              Disclaimer: This article is provided for general informational purposes only and does not constitute legal advice. Contact McCulloch Law to discuss your individual situation.
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
