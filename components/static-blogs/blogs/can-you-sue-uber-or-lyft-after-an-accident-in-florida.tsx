import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { canYouSueUberOrLyftAfterAnAccidentInFloridaBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const keyPoints = [
  "Uber and Lyft have drivers as independent contractors. This shields the companies from most direct injury lawsuits.",
  "Florida Statute 627.748 forces a 3 tier insurance ladder, topping out at $1 million once a passenger is in the car.",
  "Both platforms bury a binding arbitration clause in their terms of service, which can quietly cancel your right to a jury.",
  "You still have 14 days from the crash to seek medical treatment or Florida law lets your PIP benefits evaporate.",
];

const insuranceTiers = [
  {
    tier: "Tier 1: App Off",
    amount: "$0",
    status: "App Off Entirely",
    coverage: "Personal auto policy only ($10,000 PIP Florida minimum)",
    note: "Rideshare company provides zero coverage",
  },
  {
    tier: "Tier 2: App On, Waiting",
    amount: "$50K / $100K / $25K",
    status: "App On, No Ride Accepted",
    coverage: "$50,000 bodily injury per person, $100,000 per accident, $25,000 property",
    note: "TNC contingent liability coverage applies",
  },
  {
    tier: "Tier 3: En Route or Trip",
    amount: "$1,000,000",
    status: "En Route to Pickup or Active Passenger",
    coverage: "$1,000,000 commercial liability + UM/UIM coverage",
    note: "Full Uber/Lyft primary commercial coverage",
  },
];

const insuranceTable = [
  {
    status: "App off entirely",
    coverage: "$10,000 PIP (Florida minimum)",
    payer: "Driver's personal auto insurer",
  },
  {
    status: "App on, no ride accepted",
    coverage: "$50,000 / $100,000 bodily injury, $25,000 property",
    payer: "TNC contingent policy",
  },
  {
    status: "En route to pickup or trip active",
    coverage: "$1,000,000 liability",
    payer: "Uber or Lyft's primary commercial policy",
  },
];

const claimValueTiers = [
  {
    type: "Minor soft tissue, quick recovery",
    estimate: "$15K – $30K",
    desc: "Whiplash, sprains, bruises with full recovery inside a few weeks.",
    width: "35%",
  },
  {
    type: "Moderate injury, ongoing treatment",
    estimate: "$30K – $65K+",
    desc: "Herniated discs, broken bones, extensive physical therapy.",
    width: "65%",
  },
  {
    type: "Serious injury, surgery or lasting harm",
    estimate: "$65K – Policy limits+",
    desc: "Surgical repair, traumatic brain injury, permanent impairment.",
    width: "100%",
  },
];

const faqs = [
  {
    question: "Is it a difference if I was a passenger vs pedestrian hit by a rideshare car?",
    answer:
      "Yes, significantly. Passengers typically fall under the $1 million policy the moment the trip starts. Pedestrians struck by an active rideshare vehicle are also covered under that same policy but proving fault often requires more independent evidence since there's no rider testimony.",
  },
  {
    question: "Am I able to sue if the rideshare driver was using a personally registered car?",
    answer:
      "Generally yes. Florida's statute attaches the insurance requirement to the TNC activity itself, not the vehicle's registration class, so an ordinary personal vehicle logged into Uber or Lyft still falls under the statutory coverage tiers.",
  },
  {
    question: "What if my rideshare driver fled the scene?",
    answer:
      "Hit and run involving a rideshare vehicle still triggers uninsured motorist coverage, and Uber and Lyft both maintain internal trip logs that can identify the driver.",
  },
  {
    question: "What if the ride-share driver is using another app, such as DoorDash?",
    answer:
      "This will cause a coverage conflict between insurers as to primary coverage. Both companies' insurance carriers will attempt to pass financial liability to the other driver if he or she was actively delivering or logged into more than one.",
  },
];

export default async function CanYouSueUberOrLyftAfterAnAccidentInFlorida() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    canYouSueUberOrLyftAfterAnAccidentInFloridaBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== canYouSueUberOrLyftAfterAnAccidentInFloridaBlog.slug
    ) || []),
  ];
  const recentBlogs = sidebarBlogs
    .filter((blog: any) => blog?.published && blog?.slug)
    .slice(0, 10);

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
                "@id":
                  "https://www.mcfloridalaw.com/blogs/can-you-sue-uber-or-lyft-after-an-accident-in-florida#breadcrumb",
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
                    name: "Can You Sue Uber or Lyft After an Accident in Florida?",
                    item: "https://www.mcfloridalaw.com/blogs/can-you-sue-uber-or-lyft-after-an-accident-in-florida",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                "@id":
                  "https://www.mcfloridalaw.com/blogs/can-you-sue-uber-or-lyft-after-an-accident-in-florida#blogposting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.mcfloridalaw.com/blogs/can-you-sue-uber-or-lyft-after-an-accident-in-florida",
                },
                headline: "Can You Sue Uber/Lyft in Florida? (How $1M Policy Works)",
                name: "Can You Sue Uber or Lyft After an Accident in Florida?",
                description:
                  "Uber or Lyft shields itself from lawsuits. Fail to seek care in 14 days and lose your PIP coverage. Call McCulloch Law 24/7 for a free case check.",
                url: "https://www.mcfloridalaw.com/blogs/can-you-sue-uber-or-lyft-after-an-accident-in-florida",
                image: {
                  "@type": "ImageObject",
                  url: "https://www.mcfloridalaw.com/images/static-blogs/can-you-sue-uber-or-lyft-after-accident-in-fl.webp",
                },
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs#blog",
                  name: "McCulloch Law, P.A. Blog",
                  url: "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Uber & Lyft Rideshare Accidents in Florida",
                },
                keywords: [
                  "can you sue Uber or Lyft after an accident in Florida",
                  "suing Uber in Florida",
                  "suing Lyft in Florida",
                  "Florida Statute 627.748 rideshare insurance",
                  "Uber 1 million dollar insurance policy",
                  "rideshare accident lawyer Tampa",
                  "Florida PIP 14 day medical rule",
                  "McCulloch Law, P.A.",
                ],
                author: {
                  "@type": "Organization",
                  name: "McCulloch Law, P.A.",
                  url: "https://www.mcfloridalaw.com/",
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
                datePublished: "2026-10-21",
                dateModified: "2026-10-21",
                inLanguage: "en-US",
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.mcfloridalaw.com/blogs/can-you-sue-uber-or-lyft-after-an-accident-in-florida#faq",
                url: "https://www.mcfloridalaw.com/blogs/can-you-sue-uber-or-lyft-after-an-accident-in-florida",
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
            {/* Featured Image with Figure & Caption */}
            <figure className="w-full overflow-hidden rounded-md bg-gray-50 mb-8 border border-gray-200 shadow-sm">
              <Image
                src={canYouSueUberOrLyftAfterAnAccidentInFloridaBlog.featuredImage.image.url}
                alt={canYouSueUberOrLyftAfterAnAccidentInFloridaBlog.featuredImage.altText}
                title={canYouSueUberOrLyftAfterAnAccidentInFloridaBlog.featuredImage.title}
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="p-3 text-xs md:text-sm text-gray-500 italic bg-gray-50 border-t border-gray-100 text-center">
                {canYouSueUberOrLyftAfterAnAccidentInFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            {/* Post Header & Dates (American Format) */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Rideshare Accidents | Florida Personal Injury
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {canYouSueUberOrLyftAfterAnAccidentInFloridaBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600 font-medium">
                Published: October 21, 2026 | Updated: October 21, 2026 | McCulloch Law, P.A. | Florida Rideshare Accident Attorney
              </p>
            </div>

            {/* Hero Navy Callout Box */}
            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10 shadow-sm">
              <p className="text-xl md:text-2xl leading-relaxed text-justify">
                Rarely can you sue Uber or Lyft itself because their drivers are considered by Florida laws as independent contractors. You can pursue the driver&apos;s rideshare insurance policy, which climbs to $1 million once a ride is accepted, and in limited cases the company itself for negligent hiring or app defects.
              </p>
            </section>

            {/* Key Points Box */}
            <section className="mb-10 rounded-md border-l-4 border-[#BA8E2D] bg-[#F2F4F8] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-[#1B2639] uppercase tracking-wide">
                Key Points
              </h2>
              <ul className="mt-5 grid gap-3">
                {keyPoints.map((item, index) => (
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

            {/* Section: Opening Context */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <p className="text-justify">
                Alright, let&apos;s cut through the fog on this one, because half of Tampa Bay thinks a rideshare crash works exactly like a regular fender bender, and the other half thinks Uber will just cut a million dollar check because the app said so. Neither camp has it right.
              </p>
            </section>

            {/* Section: You Can't Just Sue Uber or Lyft Directly */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                You Can&apos;t Just Sue Uber or Lyft Directly
              </h2>
              <p className="text-justify">
                Both companies built their entire labor model around one legal fiction that the driver isn&apos;t an employee. Florida, as most states, continues to treat rideshare drivers as independent contractors rather than staff. As such, the company is not responsible for the actions of its employees while working on the clock. Contractors are a different case and Uber&apos;s lawyers have spent a decade making sure judges keep seeing it that way.
              </p>
              <p className="text-justify">
                That single classification is the wall standing between you and a straightforward negligence claim against a trillion dollar corporation. It&apos;s also exactly why Florida legislators stepped in and passed a specific statute rather than leaving rideshare victims to the mercy of a labor law loophole, a statute you can read in full through the{" "}
                <a
                  href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.748.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Florida Legislature&apos;s official statute database
                </a>
                .
              </p>
            </section>

            {/* Section: The Insurance Ladder Florida Built Around That Loophole */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Insurance Ladder Florida Built Around That Loophole
              </h2>
              <p className="text-justify">
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.748.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Florida Statute 627.748
                </a>{" "}
                forces Uber and Lyft to carry insurance in tiers that shift depending on exactly what the driver&apos;s app was doing the second of impact. Three periods, three very different coverage amounts, and the gap between them has ended more than one accident victim&apos;s hope for full compensation.
              </p>

              {/* 3 Tiers Visual Cards */}
              <div className="grid gap-5 md:grid-cols-3 my-8">
                {insuranceTiers.map((tier) => (
                  <div
                    key={tier.tier}
                    className="rounded-md bg-gray-50 border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        {tier.tier}
                      </div>
                      <div className="text-2xl md:text-3xl font-extrabold text-[#BA8E2D] mt-2">
                        {tier.amount}
                      </div>
                      <div className="mt-3 font-semibold text-sm text-[#1B2639]">
                        {tier.status}
                      </div>
                      <p className="mt-2 text-xs leading-5 text-gray-600">
                        {tier.coverage}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200 text-xs italic text-gray-500">
                      {tier.note}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-justify">
                Notice that first bar. App off means the driver&apos;s personal auto policy is your only shot, and Florida&apos;s minimum personal injury protection sits at a measly $10,000. If your driver was between fares with the app dark, you&apos;re negotiating with whatever coverage that individual happens to carry, which for a lot of part time drivers isn&apos;t much.
              </p>
              <p className="text-justify">
                Once the app switches on and the driver is simply waiting for a ping, Uber and Lyft&apos;s own supplemental policy kicks in at $50,000 per person and $100,000 per accident for injuries, plus $25,000 for property. Respectable, not extraordinary. The{" "}
                <a
                  href="https://www.flhsmv.gov/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Florida Department of Highway Safety and Motor Vehicles
                </a>{" "}
                keeps tabs on these baseline requirements across the state.
              </p>
            </section>

            {/* Mid-Article Call to Action Banner */}
            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-[#BA8E2D]">
                Not Sure Which Insurance Period Applies to Your Crash?
              </h2>
              <p className="mt-3 text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                McCulloch Law, P.A. investigates app logs and coverage layers to protect your financial recovery.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 border border-[#BA8E2D] text-[#BA8E2D] rounded hover:bg-[#BA8E2D] hover:text-white transition-colors"
                >
                  Call (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-[#1B2639] rounded hover:bg-white hover:text-[#1B2639] transition-colors"
                >
                  Free Consultation &rarr;
                </Link>
              </div>
            </section>

            {/* Section: Florida Rideshare Insurance Periods at a Glance */}
            <section className="space-y-4 my-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Florida Rideshare Insurance Periods at a Glance
              </h2>
              <p className="text-justify text-gray-700 leading-8">
                Every rideshare claim starts with figuring out which of these three periods the crash falls into. Get this wrong and an adjuster will happily let you keep believing it, because it&apos;s their money on the other side of the mistake.
              </p>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-md border border-gray-200 shadow-sm mt-4">
                <table className="w-full min-w-[620px] border-collapse">
                  <thead>
                    <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                      <th className="p-4 border border-gray-200">App Status</th>
                      <th className="p-4 border border-gray-200">Required Coverage</th>
                      <th className="p-4 border border-gray-200">Who Usually Pays</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                    {insuranceTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-4 border border-gray-200 font-bold text-[#1B2639]">
                          {row.status}
                        </td>
                        <td className="p-4 border border-gray-200 text-gray-800 font-medium">
                          {row.coverage}
                        </td>
                        <td className="p-4 border border-gray-200 text-[#BA8E2D] font-semibold">
                          {row.payer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section: So Who Exactly Can You Pursue After the Crash? */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                So Who Exactly Can You Pursue After the Crash?
              </h2>
              <p className="text-justify">
                This is where most people&apos;s understanding runs dry, and where a rideshare accident lawyer earns the fee. Depending on how the crash unfolded, you may have several defendants worth naming, not just one.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">The rideshare driver personally,</span> if their own negligence, like distracted driving or running a light, caused the wreck.
                </li>
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">A third party driver</span> who hit the rideshare vehicle, which is really just a standard auto claim wearing a rideshare costume.
                </li>
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">Uber or Lyft directly,</span> in the rarer scenario involving negligent hiring, a driver with a violent criminal history the company failed to screen, or a defective feature in the app itself.
                </li>
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">An underinsured or uninsured motorist policy,</span> either your own or the TNC&apos;s, when the at fault party&apos;s coverage simply doesn&apos;t stretch far enough to cover your losses.
                </li>
              </ul>
              <p className="text-justify">
                McCulloch Law, P.A. built its{" "}
                <Link
                  href="/practice/uber-ubereats-lyft-accident"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  rideshare accident practice
                </Link>{" "}
                around sorting exactly this out for Tampa, St. Petersburg, Clearwater, Brandon, and Riverview clients, because guessing wrong about which policy applies can cost a victim tens of thousands of dollars they never even knew existed. The firm&apos;s broader{" "}
                <Link
                  href="/practice/auto-accident"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  auto accident practice
                </Link>{" "}
                covers the standard third party driver claims that often run alongside a rideshare case.
              </p>
            </section>

            {/* Section: The Arbitration Clause Most People Ignore */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Arbitration Clause Most People Ignore
              </h2>
              <p className="text-justify">
                Buried inside both Uber&apos;s and Lyft&apos;s terms of service sits a mandatory arbitration clause, and in 2026 those provisions are being tested in courtrooms across the country with mixed results for riders. Sign onto the app, and you may have already waived your constitutional right to a jury trial without realizing it, agreeing instead to let a private arbitrator, not a jury of your peers, decide the value of your case.
              </p>
              <p className="text-justify">
                Courts haven&apos;t uniformly upheld these clauses. A{" "}
                <a
                  href="https://www.pacourts.us/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Pennsylvania Superior Court ruling
                </a>{" "}
                found that a hyperlinked agreement a rider never actually clicked through doesn&apos;t clearly and unambiguously waive that right. But relying on a favorable ruling from another jurisdiction is a gamble, not a strategy. The smarter move is figuring out, immediately after a crash, whether your specific claim can be kept in open court or whether it&apos;s already bound for arbitration, and there are legitimate ways to challenge a poorly disclosed clause.
              </p>

              {/* Quote Block by Drew McCulloch */}
              <blockquote className="my-8 border-l-4 border-[#BA8E2D] bg-[#F2F4F8] p-6 italic text-gray-800 rounded-r-md shadow-sm">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-justify">
                  &ldquo;I spent years as a prosecutor learning exactly how insurance companies and their lawyers build a defense before they ever offer a settlement. I use that same preparation now for the people I represent, because a rideshare claim rewards whoever understood the coverage layers first.&rdquo;
                </p>
                <cite className="block mt-3 text-sm font-bold text-[#1B2639] not-italic">
                  &mdash; Drew McCulloch, Esq., McCulloch Law, P.A.
                </cite>
              </blockquote>
            </section>

            {/* Section: What Is a Rideshare Injury Claim Actually Worth? */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Is a Rideshare Injury Claim Actually Worth?
              </h2>
              <p className="text-justify">
                Each case is different depending upon the circumstances of the case itself, the medical records, and the coverage layer. Thus, you should consider anything that we offer as a guideline only. The severity of the injury is a factor.
              </p>

              {/* Value Range Visual Cards */}
              <div className="space-y-4 my-6">
                {claimValueTiers.map((tier) => (
                  <div
                    key={tier.type}
                    className="rounded-md border border-gray-200 bg-gray-50 p-5 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div className="font-bold text-[#1B2639] text-base">
                        {tier.type}
                      </div>
                      <div className="text-xl md:text-2xl font-extrabold text-[#BA8E2D]">
                        {tier.estimate}
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      {tier.desc}
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-[#BA8E2D]"
                        style={{ width: tier.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-justify">
                Notice something interesting about that graph? Even the low end presumes proper documentation and a timely claim. Meaning, if you fail to file within the 14 day medical treatment window in Florida that&apos;s mandated by law an insurance company will always, and I mean always, argue (and succeed) that either your injuries were not serious or a result of the crash.
              </p>
            </section>

            {/* Section: What Should You Do in the First 48 Hours */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Should You Do in the First 48 Hours
              </h2>
              <p className="text-justify">
                Take a breath, now follow the steps. Insurance adjusters know exactly what to do to take advantage of the average rider&apos;s panic.
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">Call the police and insist that a written report be produced.</span> The report should specifically name the Uber or Lyft driver, the vehicle and any third party involved.
                </li>
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">Photograph the scene, both vehicles, visible injuries</span> and the rideshare app screen showing trip status at the time of the crash.
                </li>
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">Get medical attention within 14 days, no exceptions,</span> or Florida law lets your PIP benefits quietly disappear.
                </li>
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">Decline recorded statements</span> to any insurance adjuster, Uber&apos;s, Lyft&apos;s, or the other driver&apos;s, until you&apos;ve spoken with an attorney.
                </li>
                <li className="text-justify">
                  <span className="font-bold text-[#1B2639]">Preserve the trip receipt and screenshots</span> from the app before the account data becomes harder to retrieve.
                </li>
              </ul>

              <p className="text-justify">
                That fourth point trips up more people than anything else on this list. A friendly sounding claims rep calling within days of the crash isn&apos;t being friendly. They&apos;re building a file, and every casual sentence you offer becomes material they can use to undervalue or deny the claim later. The{" "}
                <a
                  href="https://www.iii.org/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Insurance Information Institute
                </a>{" "}
                publishes consumer guidance on exactly this tactic if you want the outside confirmation.
              </p>
            </section>

            {/* Section: What You Really Need Is Local Tampa Bay Experience */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What You Really Need Is Local Tampa Bay Experience
              </h2>
              <p className="text-justify">
                Rideshare litigation isn&apos;t a template you photocopy from a national firm&apos;s website. Florida&apos;s statute, the specific insurers Uber and Lyft contract within this state, and the judges hearing these cases in Hillsborough and Pinellas Counties all shape how a claim actually plays out.
              </p>
              <p className="text-justify">
                A firm that&apos;s spent over 15 years in Tampa Bay courtrooms, like Attorney Drew McCulloch, brings a working knowledge of local adjusters, judges, and juries that a call center attorney simply can&apos;t replicate.
              </p>
              <p className="text-justify">
                McCulloch Law, P.A. handles these cases from Tampa down through St. Petersburg, Clearwater, Brandon, and Riverview, and the firm&apos;s background as a former state prosecutor&apos;s office translates directly into rideshare work. Prosecutors spend years learning how the other side builds a case before it ever reaches trial, and that same instinct now works in favor of injured riders rather than against defendants. You can review the firm&apos;s{" "}
                <Link
                  href="/testimonials"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  case results and testimonials
                </Link>{" "}
                directly on their site.
              </p>
            </section>

            {/* Bottom CTA Banner */}
            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-[#BA8E2D]">
                Injured in a Rideshare Crash Somewhere Between Tampa and Riverview?
              </h2>
              <p className="mt-3 text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Contact McCulloch Law, P.A. for aggressive representation against multi-billion dollar rideshare carriers.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 border border-[#BA8E2D] text-[#BA8E2D] rounded hover:bg-[#BA8E2D] hover:text-white transition-colors"
                >
                  Call (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-[#1B2639] rounded hover:bg-white hover:text-[#1B2639] transition-colors"
                >
                  Free Consultation, 24/7 &rarr;
                </Link>
              </div>
            </section>

            {/* Office Location & Contact Details */}
            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Rideshare Accident Lawyer Near You &mdash; Get Help Today
              </h2>
              <p className="mt-4 leading-8 text-gray-700 text-justify">
                Uber and Lyft insurance carriers deploy experienced claim examiners immediately after a collision. You need an attorney with the local courtroom skill and insurance insight to level the playing field.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold text-lg text-[#1B2639]">
                  McCulloch Law, P.A. | Outstanding Rideshare &amp; Personal Injury Defense
                </p>
                <p className="mt-1">238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p className="mt-1">Serving Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and all Tampa Bay communities</p>
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

            {/* FAQ Section */}
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
              Disclaimer: The information in this article is for informational purposes only and should not be construed as legal advice or as the establishment of an attorney-client relationship.
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
