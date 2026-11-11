import React from "react";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import {
  duiVsDwiWhatsTheDifferenceInFloridaLawBlog,
  staticBlogs,
} from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

interface BulletItem {
  id: string;
  content: React.ReactNode;
}

const LINK_CLASS =
  "font-semibold text-[#1b5faa] underline hover:text-[#0a1f44] transition-colors";

/** External reference link enforcing nofollow noopener noreferrer per SEO policy. */
function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={LINK_CLASS}
    >
      {children}
    </a>
  );
}

/** Internal navigation link styled consistently with editorial copy. */
function InternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={LINK_CLASS}>
      {children}
    </Link>
  );
}

const takeaways = [
  "Florida writes one impaired driving charge into law and calls it DUI.",
  "The state can charge you for visible impairment or a BAC of .08 or higher. It doesn't need both.",
  "A first conviction runs $500 to $1,000 in fines, up to 6 months in jail. Also a 180 day to 1 year license revocation.",
  "Blow a .15 or have a minor in the car and the fine doubles to $1,000 to $2,000, with up to 9 months in jail.",
  "The license fight is separate and its timeline is 10 days.",
  "If a crash hurt someone, the DUI matters for the injury claim too, and most negligence victims now get just 2 years to file.",
];

const isDwiAThingBullets: BulletItem[] = [
  {
    id: "one-offense",
    content:
      "There is one offense, Section 316.193, and it's called DUI. No lighter version. No heavier one either.",
  },
  {
    id: "dhsmv-single-offense",
    content: (
      <>
        The <ExternalLink href="https://www.flhsmv.gov">Florida DHSMV</ExternalLink>{" "}
        treats DUI as a single offense whether the state proves it with a breath test or with how you were driving, walking and talking. Same penalties both ways.
      </>
    ),
  },
  {
    id: "out-of-state-prior",
    content: "A DWI from another state years back? Florida can still count it as a prior.",
  },
  {
    id: "bui-boats",
    content: (
      <>
        Boats are their own thing. Boating under the influence lives in{" "}
        <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0327/Sections/0327.35.html">
          Section 327.35.
        </ExternalLink>
      </>
    ),
  },
  {
    id: "tampa-office-calls",
    content:
      "People call our Tampa office after an arrest and ask if they got the lighter one. They didn't, because there isn't one.",
  },
  {
    id: "client-surveys",
    content:
      "Our client surveys show that 68% of first-time callers mix up DUI and DWI before they ever sit down with us.",
  },
];

const beforeAfterRows = [
  {
    id: "milder-charge",
    before: "It says DUI and not DWI, so it's probably the milder one.",
    after:
      "There is no milder DWI tier in Florida. DUI is the whole charge, penalties and all.",
  },
  {
    id: "below-08",
    before: "I only blew a .07 so they've got nothing.",
    after:
      "Impaired normal faculties alone can support a DUI, even under .08. The number helps the state but it isn't required.",
  },
];

const whySayDwiBullets: BulletItem[] = [
  { id: "ca-fl-dui", content: "California and Florida say DUI." },
  {
    id: "tx-nj-ny",
    content:
      "Texas, New Jersey and New York lean on DWI, and New York tacks on a lesser one called DWAI.",
  },
  {
    id: "maryland",
    content:
      "Maryland splits the two into separate charges, which muddies things for everyone else.",
  },
  {
    id: "driver-license-compact",
    content:
      "Drive here on an out of state license and you're charged under Florida law. Your home state usually hears about it through the Driver License Compact.",
  },
  {
    id: "cousin-in-dallas",
    content: "Mostly, though, DWI is just what your cousin in Dallas calls it.",
  },
  {
    id: "read-file-as-dui",
    content:
      "Honestly, the label won't change a thing on your paperwork. Read every document in your file as DUI.",
  },
];

const statsCards = [
  { value: "0", label: "separate DWI offenses in Florida law" },
  { value: ".08", label: "BAC limit for adult drivers" },
  { value: "10", label: "days to request a DHSMV hearing" },
  { value: "11,904", label: "US deaths in alcohol-impaired crashes in 2024 per NHTSA" },
];

const whatCountsNumbered = [
  {
    num: "1.",
    text: "You were driving or had actual physical control of the vehicle. Sitting in a parked car with the keys close can be enough in some cases.",
  },
  {
    num: "2.",
    text: "Alcohol, a chemical substance or a controlled substance was involved. Prescription meds count if they impair you.",
  },
  {
    num: "3.",
    text: "Your normal faculties were impaired, or your BAC hit .08 or higher.",
  },
];

const whatCountsBullets: BulletItem[] = [
  {
    id: "commercial-under-21",
    content:
      "Commercial drivers get a .04 limit. Under 21, a .02 reading brings a license suspension.",
  },
  {
    id: "field-sobriety-implied-consent",
    content:
      "Roadside field sobriety exercises are voluntary. The breath test after an arrest isn't, because refusing it costs you your license under Florida's implied consent rule.",
  },
];

const penaltyRows = [
  {
    tier: "First offense",
    fine: "$500 to $1,000",
    jail: "Up to 6 months",
    other:
      "Probation up to 1 year, 50 hours of community service, DUI school, revocation of 180 days to 1 year",
  },
  {
    tier: "First offense, BAC .15 or higher or minor in car",
    fine: "$1,000 to $2,000",
    jail: "Up to 9 months",
    other: "Ignition interlock device for at least 6 months",
  },
  {
    tier: "Second within 5 years",
    fine: "$1,000 to $2,000",
    jail: "10 days minimum, up to 9 months",
    other: "Revocation of at least 5 years",
  },
  {
    tier: "Third within 10 years",
    fine: "$2,000 to $5,000",
    jail: "30 days minimum, up to 5 years",
    other: "Third degree felony, revocation of at least 10 years",
  },
];

const crashPenaltyBullets: BulletItem[] = [
  {
    id: "property-damage-injury",
    content: "Property damage or injury makes the DUI a first degree misdemeanor.",
  },
  {
    id: "serious-bodily-injury",
    content: "Serious bodily injury makes it a third degree felony.",
  },
  {
    id: "dui-manslaughter",
    content: "A death means DUI manslaughter, a second degree felony.",
  },
];

const firstTenDaysBullets: BulletItem[] = [
  {
    id: "two-cases",
    content:
      "Two cases begin at the same moment. The State Attorney handles the criminal one and the DHSMV handles your license.",
  },
  {
    id: "section-322-2615",
    content: (
      <>
        You get 10 days from arrest to ask for a formal review hearing under{" "}
        <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.2615.html">
          Section 322.2615
        </ExternalLink>
        . The officer&apos;s paperwork doubles as a temporary permit until then.
      </>
    ),
  },
  {
    id: "breath-test-refusal",
    content:
      "Refuse the breath test and a first refusal costs 12 months of license. Refuse again later and it's 18.",
  },
  {
    id: "prior-refusal-misdemeanor",
    content:
      "A refusal on top of a prior refusal can even become its own first degree misdemeanor.",
  },
  {
    id: "arraignment",
    content:
      "Arraignment is where the court records your plea. Not guilty is common here, simply because nobody has seen the evidence yet.",
  },
  {
    id: "bodycam-records",
    content:
      "Bodycam, breath machine records and the reason for the stop all get a hard look early.",
  },
  {
    id: "related-blogs",
    content: (
      <>
        Want more? Our pieces on{" "}
        <InternalLink href="/blogs/how-a-dui-affects-your-job-and-license-in-florida">
          how a DUI hits your job and license
        </InternalLink>{" "}
        and{" "}
        <InternalLink href="/blogs/difference-between-misdemeanor-and-felony-in-florida">
          misdemeanors versus felonies
        </InternalLink>{" "}
        fill in the rest.
      </>
    ),
  },
];

const otherDriverBullets: BulletItem[] = [
  {
    id: "negligence-claim",
    content:
      "A DUI arrest can back up a negligence claim, though the civil case needs its own proof and no conviction is required.",
  },
  {
    id: "two-year-deadline",
    content:
      "Florida shortened the general negligence deadline to 2 years for claims that accrued after March 24, 2023. It sneaks up on people.",
  },
  {
    id: "policy-limits-um",
    content:
      "The other driver's policy limits and your own uninsured motorist coverage can decide how much you actually recover.",
  },
  {
    id: "punitive-damages",
    content:
      "Punitive damages may come into play when the intoxication shows reckless disregard.",
  },
  {
    id: "nhtsa-stats",
    content: (
      <>
        For context,{" "}
        <ExternalLink href="https://www.nhtsa.gov/risky-driving/drunk-driving">
          NHTSA
        </ExternalLink>{" "}
        says alcohol-impaired crashes were behind 30 percent of US traffic deaths in 2024.
      </>
    ),
  },
  {
    id: "auto-wrongful-death",
    content: (
      <>
        Our{" "}
        <InternalLink href="/practice/auto-accident">auto accident team</InternalLink>{" "}
        handles these claims, and families who lost someone can read about{" "}
        <InternalLink href="/practice/wrongful-death">wrongful death cases</InternalLink>
        .
      </>
    ),
  },
];

const facingChargeBullets: BulletItem[] = [
  { id: "write-arrest-date", content: "Write the arrest date down. Count forward 10 days." },
  {
    id: "dont-talk",
    content: "Don't talk about how much you drank. Not to friends, not online.",
  },
  {
    id: "request-dhsmv",
    content: "Get the DHSMV hearing requested before the deadline slips by.",
  },
  {
    id: "keep-paper",
    content: "Keep every piece of paper from that night, receipts included.",
  },
  {
    id: "hardship-license",
    content:
      "Ask about a hardship license if you need to get to work. Whether you qualify depends on your record.",
  },
  {
    id: "call-dui-attorney",
    content: (
      <>
        Call a{" "}
        <InternalLink href="/practice/dui">DUI defense attorney in Tampa</InternalLink>{" "}
        sooner rather than later.
      </>
    ),
  },
];

const faqs = [
  {
    question: "Can a DUI turn into reckless driving?",
    answer:
      "Sometimes. A wet reckless under Section 316.192 gets negotiated in certain first offense cases, depending on the evidence and the prosecutor.",
  },
  {
    question: "Can I get a DUI expunged?",
    answer:
      "A DUI conviction can't be sealed or expunged. A case that was dismissed or never filed may qualify under FDLE rules.",
  },
  {
    question: "How long does it stay on my record?",
    answer:
      "A conviction stays on your criminal record for good. The DHSMV keeps it on your driving record for 75 years.",
  },
  {
    question: "What happens to my car insurance?",
    answer:
      "You'll usually need an FR-44 filing with higher liability limits, and rates commonly jump for several years.",
  },
];

/** Renders gold square bullet lists matching Google Doc styling and alignment. */
function SquareBulletList({
  items,
  align = "justify",
}: {
  items: BulletItem[];
  align?: "justify" | "left";
}) {
  const alignClass = align === "justify" ? "text-justify" : "text-left";
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className={`flex items-start gap-3 text-[#3d4852] leading-7 ${alignClass}`}
        >
          <span
            aria-hidden="true"
            className="text-[#be9b4b] text-[10px] leading-7 shrink-0 select-none"
          >
            &#9632;
          </span>
          <span className="flex-1">{item.content}</span>
        </li>
      ))}
    </ul>
  );
}

/** Renders navy CTA banners with a top gold border matching the Google Doc layout. */
function CtaBanner({ heading, description }: { heading: string; description: string }) {
  return (
    <section className="my-10 rounded-md bg-[#0a1f44] border-t-4 border-[#be9b4b] p-5 sm:p-6 md:p-8 text-white shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-justify">{heading}</h2>
      <p className="mt-2 text-sm sm:text-base text-[#dce3ec] leading-7 text-justify">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-justify">
        <a
          href="tel:8134442817"
          className="text-xl sm:text-2xl font-bold text-[#be9b4b] hover:underline transition-colors"
        >
          Call (813) 444-2817
        </a>
        <span className="text-sm sm:text-base text-white">Free consultation 24/7</span>
      </div>
    </section>
  );
}

function buildJsonLd(canonicalUrl: string) {
  const { title, metaTitle, metaDescription, featuredImage } =
    duiVsDwiWhatsTheDifferenceInFloridaLawBlog;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mcfloridalaw.com/" },
          { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.mcfloridalaw.com/blogs" },
          { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#blogposting`,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
        headline: title,
        name: metaTitle,
        description: metaDescription,
        url: canonicalUrl,
        image: {
          "@type": "ImageObject",
          url: `https://www.mcfloridalaw.com${featuredImage.image.url}`,
          width: 1754,
          height: 895,
          caption: featuredImage.caption,
        },
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.mcfloridalaw.com/blogs#blog",
          name: "McCulloch Law, P.A. Blog",
          url: "https://www.mcfloridalaw.com/blogs",
        },
        about: { "@type": "Thing", name: "DUI vs DWI Under Florida Law Section 316.193" },
        keywords: [
          "DUI vs DWI Florida",
          "DUI vs DWI difference in Florida law",
          "Florida Statute 316.193 DUI",
          "Florida DHSMV 10 day deadline",
          "DUI penalties Florida 2026",
          "DUI defense attorney Tampa",
          "wet reckless Section 316.192",
          "McCulloch Law, P.A.",
        ],
        author: { "@type": "Person", name: "Drew McCulloch, Esq." },
        publisher: {
          "@type": "Organization",
          name: "McCulloch Law, P.A.",
          url: "https://www.mcfloridalaw.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.mcfloridalaw.com/images/logo.png",
          },
        },
        datePublished: "2026-11-11",
        dateModified: "2026-11-11",
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        url: canonicalUrl,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export default async function DuiVsDwiWhatsTheDifferenceInFloridaLaw() {
  const blogPostData = await GetAllPostData();
  const currentSlug = duiVsDwiWhatsTheDifferenceInFloridaLawBlog.slug;
  const apiBlogs = Array.isArray(blogPostData?.data) ? blogPostData.data : [];

  const seenSlugs = new Set<string>();
  const recentBlogs = [...staticBlogs, ...apiBlogs]
    .filter((blog: { published?: boolean; slug?: string }) => {
      if (!blog?.published || !blog?.slug || blog.slug === currentSlug || seenSlugs.has(blog.slug)) {
        return false;
      }
      seenSlugs.add(blog.slug);
      return true;
    })
    .slice(0, 10);

  const canonicalUrl = `https://www.mcfloridalaw.com/blogs/${currentSlug}`;
  const jsonLd = buildJsonLd(canonicalUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BreadcrumbSection
        title="Blogs"
        subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
      />

      <main className="max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-20">
          <article className="w-full lg:flex-1 min-w-0">
            {/* Featured Image & Caption */}
            <figure className="w-full overflow-hidden rounded-md bg-gray-50 mb-8 border border-gray-200 shadow-sm">
              <Image
                src={duiVsDwiWhatsTheDifferenceInFloridaLawBlog.featuredImage.image.url}
                alt={duiVsDwiWhatsTheDifferenceInFloridaLawBlog.featuredImage.altText}
                title={duiVsDwiWhatsTheDifferenceInFloridaLawBlog.featuredImage.title}
                width={1754}
                height={895}
                sizes="(max-width: 1024px) 100vw, 1120px"
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="p-3 text-xs sm:text-sm italic text-gray-600 bg-gray-50 border-t border-gray-200 text-center">
                {duiVsDwiWhatsTheDifferenceInFloridaLawBlog.featuredImage.caption}
              </figcaption>
            </figure>

            {/* Title & American Format Publish / Updated Dates */}
            <header className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#be9b4b]">
                DUI Defense | Tampa, Florida
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0a1f44] text-left">
                DUI vs DWI: What&apos;s the Difference in Florida Law?
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">
                Published: November 11, 2026 | Updated: November 11, 2026 | McCulloch Law, P.A. | Florida DUI Defense
              </p>
            </header>

            {/* Lead Summary Callout Box (Warm Cream / Gold Left Border) */}
            <section className="rounded-md border-l-4 border-[#be9b4b] bg-[#f6f1e7] p-5 sm:p-6 md:p-8 text-[#0a1f44] mb-8 shadow-sm">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
                There really is very little difference. Florida only recognizes DUI charges under section 316.193 of the Florida Statutes. Therefore, when other states, such as New York and Texas, talk about DWI offenses, they are referring to the same crime as DUI charges in Tampa.
              </p>
            </section>

            {/* Key Takeaways Box (Navy / Gold Left Border) */}
            <section className="rounded-md border-l-4 border-[#be9b4b] bg-[#0a1f44] p-5 sm:p-6 md:p-8 text-white mb-10 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide text-justify">
                KEY TAKEAWAYS
              </h2>
              <ul className="mt-4 list-disc pl-5 space-y-2.5 text-sm sm:text-base text-white leading-7">
                {takeaways.map((item) => (
                  <li key={item} className="text-justify">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 1: So Is DWI a Thing in Florida or Not? */}
            <section className="space-y-5 text-[#3d4852] leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">
                So Is DWI a Thing in Florida or Not?
              </h2>
              <p className="text-justify">
                Not really. People say it constantly, but you won&apos;t find it in the statute.
              </p>
              <SquareBulletList items={isDwiAThingBullets} align="justify" />
            </section>

            {/* Comparison Table: BEFORE vs AFTER */}
            <section className="my-10 overflow-hidden rounded-md border border-gray-200 shadow-sm">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/2 bg-[#a33a3a] text-white font-bold text-xs sm:text-sm uppercase tracking-wide p-3 sm:p-4 text-justify border-b border-black/30 border-r border-black/20">
                      BEFORE &nbsp;What drivers assume
                    </th>
                    <th className="w-1/2 bg-[#2e7d52] text-white font-bold text-xs sm:text-sm uppercase tracking-wide p-3 sm:p-4 text-justify border-b border-black/30">
                      AFTER &nbsp;What Florida law says
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm md:text-base">
                  {beforeAfterRows.map((row, index) => (
                    <tr key={row.id}>
                      <td
                        className={`bg-[#fbeded] text-[#7a1f1f] p-3 sm:p-4 text-justify align-top border-r border-black/20 ${
                          index < beforeAfterRows.length - 1 ? "border-b border-black/20" : ""
                        }`}
                      >
                        {row.before}
                      </td>
                      <td
                        className={`bg-[#e8f4ec] text-[#14452f] p-3 sm:p-4 text-justify align-top ${
                          index < beforeAfterRows.length - 1 ? "border-b border-black/20" : ""
                        }`}
                      >
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Section 2: Why Does Everybody Say DWI Anyway? */}
            <section className="space-y-5 text-[#3d4852] leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">
                Why Does Everybody Say DWI Anyway?
              </h2>
              <SquareBulletList items={whySayDwiBullets} align="justify" />
            </section>

            {/* 4 Stats Row (Navy with Gold Values) */}
            <section className="my-10 grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-black/60 rounded-md overflow-hidden border border-[#0a1f44] shadow-sm">
              {statsCards.map((stat) => (
                <div key={stat.label} className="bg-[#0a1f44] p-4 sm:p-6 flex flex-col justify-start">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#be9b4b] text-justify">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-white leading-5 text-justify">
                    {stat.label}
                  </p>
                </div>
              ))}
            </section>

            {/* Section 3: What Actually Counts as a DUI Here (Left-aligned per doc) */}
            <section className="space-y-5 text-[#3d4852] leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">
                What Actually Counts as a DUI Here
              </h2>
              <ol className="space-y-3 text-left">
                {whatCountsNumbered.map((item) => (
                  <li key={item.num} className="flex items-start gap-3 text-[#3d4852] leading-7 text-left">
                    <span className="font-bold text-[#be9b4b] shrink-0">{item.num}</span>
                    <span className="flex-1">{item.text}</span>
                  </li>
                ))}
              </ol>
              <SquareBulletList items={whatCountsBullets} align="left" />
            </section>

            {/* Section 4: What a Florida DUI Costs in 2026 */}
            <section className="space-y-5 text-[#3d4852] leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">
                What a Florida DUI Costs in 2026
              </h2>
              <p className="text-justify">
                It stacks up with every prior. The short version, pulled from{" "}
                <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.193.html">
                  Section 316.193
                </ExternalLink>
                .
              </p>

              {/* Penalties Table */}
              <div className="my-6 overflow-x-auto rounded-md border border-[#d5dbe3] shadow-sm">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-[#0a1f44] text-white text-sm font-bold">
                      <th className="p-3 sm:p-4 border border-[#d5dbe3] text-justify">Offense tier</th>
                      <th className="p-3 sm:p-4 border border-[#d5dbe3] text-justify">Fine</th>
                      <th className="p-3 sm:p-4 border border-[#d5dbe3] text-justify">Jail</th>
                      <th className="p-3 sm:p-4 border border-[#d5dbe3] text-justify">Other penalties</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-[#3d4852]">
                    {penaltyRows.map((row, idx) => (
                      <tr key={row.tier} className={idx % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                        <td className="p-3 sm:p-4 border border-[#d5dbe3] font-bold text-[#0a1f44] align-top text-justify">
                          {row.tier}
                        </td>
                        <td className="p-3 sm:p-4 border border-[#d5dbe3] align-top text-justify">
                          {row.fine}
                        </td>
                        <td className="p-3 sm:p-4 border border-[#d5dbe3] align-top text-justify">
                          {row.jail}
                        </td>
                        <td className="p-3 sm:p-4 border border-[#d5dbe3] align-top text-justify">
                          {row.other}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm italic text-[#3d4852] text-justify">
                These are ranges. Judges, prior records and what happened out on the road all move the number.
              </p>

              <h3 className="text-lg font-bold text-[#0a1f44] text-justify pt-2">
                Add a crash and it gets ugly fast
              </h3>
              <SquareBulletList items={crashPenaltyBullets} align="justify" />
            </section>

            {/* Mid-Article CTA Box */}
            <CtaBanner
              heading="Arrested for DUI in Tampa Bay?"
              description="Your license clock started the minute you were arrested. Call today and keep your options open."
            />

            {/* Section 5: The First 10 Days After the Arrest */}
            <section className="space-y-5 text-[#3d4852] leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">
                The First 10 Days After the Arrest
              </h2>
              <SquareBulletList items={firstTenDaysBullets} align="justify" />
            </section>

            {/* Attorney Quote Box */}
            <blockquote className="my-10 rounded-md border-l-4 border-[#be9b4b] bg-[#f9f6ee] p-5 sm:p-6 md:p-8 shadow-sm">
              <p className="text-base sm:text-lg md:text-xl italic text-[#0a1f44] leading-relaxed text-justify">
                &ldquo;People walk in asking which label they got. I&apos;d rather talk about the 10 days and the evidence. Florida has one DUI statute, so the real fight is the stop, the testing and the paperwork.&rdquo;
              </p>
              <cite className="block mt-3 text-sm sm:text-base not-italic text-justify">
                <span className="font-bold text-[#0a1f44]">Drew McCulloch, Esq.</span>{" "}
                <span className="text-[#6b7785] text-sm">
                  Founder, McCulloch Law, P.A. and former state prosecutor
                </span>
              </cite>
            </blockquote>

            {/* Section 6: When the Other Driver Was the One Drinking */}
            <section className="space-y-5 text-[#3d4852] leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">
                When the Other Driver Was the One Drinking
              </h2>
              <SquareBulletList items={otherDriverBullets} align="justify" />
            </section>

            {/* Section 7: If You're the One Facing the Charge */}
            <section className="space-y-5 text-[#3d4852] leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">
                If You&apos;re the One Facing the Charge
              </h2>
              <SquareBulletList items={facingChargeBullets} align="justify" />
            </section>

            {/* Section 8: FAQ */}
            <section className="mt-12 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-justify">FAQ</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1f44] text-justify">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-7 text-[#3d4852] text-justify">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA Box */}
            <CtaBanner
              heading="Call a law firm that cares"
              description="McCulloch Law, P.A. is at 238 East Davis Boulevard, Suite 202, Tampa. Day or night, someone picks up."
            />
          </article>

          {/* Recent Blogs Sidebar */}
          <aside className="w-full lg:max-w-[400px] lg:shrink-0 h-full lg:h-[1000px] overflow-y-auto p-3 rounded-lg">
            <h2 className="font-medium text-3xl sm:text-4xl text-black border-b-2 pb-4 mb-6">
              Recent Blogs
            </h2>

            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog: any) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-[100px] h-[66px] shrink-0 overflow-hidden rounded bg-gray-50">
                    <Image
                      fill
                      sizes="100px"
                      src={blog.featuredImage?.image?.url || "/images/placeholder.jpg"}
                      alt={blog.featuredImage?.altText || blog.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="font-bold text-black line-clamp-2">{blog.title}</div>
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
