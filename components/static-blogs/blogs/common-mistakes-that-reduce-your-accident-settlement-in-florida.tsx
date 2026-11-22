import type { ReactNode } from "react";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import Image from "next/image";
import Link from "next/link";
import GetAllPostData from "@/lib/GetPostData";
import {
  commonMistakesThatReduceYourAccidentSettlementInFloridaBlog,
  staticBlogs,
} from "../staticBlogData";

const SITE_URL = "https://www.mcfloridalaw.com";

const keyPoints = [
  "You will have protection around your PIP benefits if you receive medical treatment within 14 days from a provider who can provide evidence of an emergency.",
  "In addition to statements, social media posts, deleted photographs and chatbots can be collected and used as evidence.",
  "Many of these settlements are determined by uninsured and underinsured motorist coverage, which also has strict notification requirements.",
  "Several costly habits are thankfully fading, including riding unbuckled, skipping scene photos, and being afraid of legal fees.",
];

const statHighlights = [
  {
    value: "38.3%",
    description:
      "of Florida drivers are underinsured, per Insurance Research Council data for 2023",
  },
  {
    value: "24%",
    description:
      "of Hillsborough County crashes in 2025 involved a driver who fled (6,056 of 24,935, FLHSMV figures)",
  },
  {
    value: "36",
    description:
      "Facebook photos that vanished between two looks at one Florida plaintiff’s page",
  },
  {
    value: "20 sec",
    description:
      "of pre crash data NHTSA’s 2024 rule requires black boxes to record, up from 5",
  },
];

const recordedStatementRows = [
  {
    phrase: "I’m fine, just sore.",
    interpretation: "No injury reported on day one.",
  },
  {
    phrase: "It was barely a tap.",
    interpretation: "Low impact, so low injury.",
  },
  {
    phrase: "I’ll see how it goes.",
    interpretation: "A treatment gap before treatment even starts.",
  },
  {
    phrase: "I’m feeling better already.",
    interpretation: "Recovery before the doctor finished.",
  },
];

const coverageScenarioRows = [
  {
    situation: "The other driver has no insurance",
    source: "Uninsured Motorists Coverage (if you have it)",
    watch: "Your policy terms control the claim, including notice.",
  },
  {
    situation: "The other driver fled",
    source: "Usually your uninsured motorist coverage",
    watch: "Policies differ on what counts, so read yours.",
  },
  {
    situation: "The other driver’s limits are too low",
    source: "Your underinsured motorist coverage",
    watch: "The 30 day notice before any release.",
  },
  {
    situation: "A commercial truck or company vehicle is involved",
    source: "The commercial carrier, often with larger limits",
    watch: "Name every possible policy early.",
  },
];

const faqs = [
  {
    question: "How long will my Florida accident claim take?",
    answer:
      "It depends on your treatment and on whether fault is disputed. It may take a few months. However, if a dispute arises regarding liability, then it often takes over a year to settle.",
  },
  {
    question: "Is an accident settlement taxable?",
    answer:
      "Generally not when it compensates physical injuries under federal law. However, punitive damages and interest would generally be taxable. You should consult a tax expert.",
  },
  {
    question: "Can insurance companies in Florida use AI to deny/reduce my claim?",
    answer:
      "Nothing new stops them. HB 527 would have required a qualified human to make claim denial and reduction decisions.",
  },
  {
    question: "Can I recover pain and suffering after a Florida car crash?",
    answer:
      "Yes, you can. You need to have an injury that satisfies section 627.737(2).",
  },
];

/** Renders an external reference link with strict nofollow and security attributes. */
function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="text-[#1f4e99] underline font-medium hover:text-[#0b2545] transition-colors"
    >
      {children}
    </a>
  );
}

/** Renders an internal Next.js link that opens in the same browser tab. */
function InternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[#1f4e99] underline font-medium hover:text-[#0b2545] transition-colors"
    >
      {children}
    </Link>
  );
}

/** Renders an individual numbered mistake header matching the document hierarchy. */
function MistakeHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-3 text-left">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a681c]">
        MISTAKE {number}
      </p>
      <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#0b2545] leading-snug">
        {title}
      </h3>
    </div>
  );
}

/** Renders a navy quote block with a warm gold left accent border. */
function NavyQuoteCallout({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <blockquote className="my-6 rounded-r-md border-l-4 border-[#c8a24a] bg-[#0b2545] px-5 py-4 sm:px-6 sm:py-5 text-left shadow-sm">
      <p className="text-base sm:text-lg italic leading-relaxed text-white">
        {quote}
      </p>
      <footer className="mt-2.5 text-sm leading-snug">
        <span className="font-bold text-[#c8a24a]">{author}</span>
        <span className="text-[#d9dee6]">
          {role.startsWith(",") ? role : ` — ${role}`}
        </span>
      </footer>
    </blockquote>
  );
}

/** Builds structured JSON-LD schema for BreadcrumbList, BlogPosting, and FAQPage. */
function buildJsonLd(canonicalUrl: string) {
  const { title, metaTitle, metaDescription, featuredImage } =
    commonMistakesThatReduceYourAccidentSettlementInFloridaBlog;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
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
          url: `${SITE_URL}${featuredImage.image.url}`,
          width: 1000,
          height: 510,
          caption: featuredImage.caption,
        },
        isPartOf: {
          "@type": "Blog",
          "@id": `${SITE_URL}/blogs#blog`,
          name: "McCulloch Law, P.A. Blog",
          url: `${SITE_URL}/blogs`,
        },
        about: {
          "@type": "Thing",
          name: "Florida Personal Injury and Accident Settlement Mistakes",
        },
        keywords: [
          "common mistakes that reduce your accident settlement in Florida",
          "Florida accident settlement mistakes",
          "Florida PIP 14 day rule Section 627.736",
          "Florida comparative negligence Section 768.81",
          "uninsured motorist 30 day notice Section 627.727",
          "Florida car accident lawyer Tampa",
          "McCulloch Law, P.A.",
        ],
        author: { "@type": "Person", name: "Drew McCulloch, Esq." },
        publisher: {
          "@type": "Organization",
          name: "McCulloch Law, P.A.",
          url: `${SITE_URL}/`,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.png`,
          },
        },
        datePublished: "2026-11-22",
        dateModified: "2026-11-22",
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

interface SidebarBlogItem {
  slug?: string;
  title?: string;
  published?: boolean;
  featuredImage?: {
    image?: { url?: string };
    altText?: string;
  };
}

export default async function CommonMistakesThatReduceYourAccidentSettlementInFlorida() {
  const blogPostData = await GetAllPostData();
  const currentSlug =
    commonMistakesThatReduceYourAccidentSettlementInFloridaBlog.slug;
  const apiBlogs: SidebarBlogItem[] = Array.isArray(blogPostData?.data)
    ? blogPostData.data
    : [];

  const seenSlugs = new Set<string>();
  const recentBlogs = [...staticBlogs, ...apiBlogs]
    .filter((blog: SidebarBlogItem) => {
      if (
        !blog?.published ||
        !blog?.slug ||
        blog.slug === currentSlug ||
        seenSlugs.has(blog.slug)
      ) {
        return false;
      }
      seenSlugs.add(blog.slug);
      return true;
    })
    .slice(0, 10);

  const canonicalUrl = `${SITE_URL}/blogs/${currentSlug}`;
  const jsonLd = buildJsonLd(canonicalUrl);
  const { featuredImage } =
    commonMistakesThatReduceYourAccidentSettlementInFloridaBlog;

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
          <article className="w-full lg:flex-1 min-w-0 text-[#222222]">
            {/* Featured Image & Caption */}
            <figure className="w-full overflow-hidden rounded-md bg-gray-50 mb-8 border border-[#e3ddd0] shadow-sm">
              <Image
                src={featuredImage.image.url}
                alt={featuredImage.altText}
                title={featuredImage.title}
                width={1000}
                height={510}
                sizes="(max-width: 1024px) 100vw, 1120px"
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="p-3 text-xs sm:text-sm italic text-gray-700 bg-[#f7f3ea] border-t border-[#e3ddd0] text-center">
                {featuredImage.caption}
              </figcaption>
            </figure>

            {/* Title & American Format Publish / Updated Dates */}
            <header className="mb-8 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a681c]">
                Personal Injury | Florida Settlement Guide
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0b2545]">
                Common Mistakes That Reduce Your Accident Settlement in Florida
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">
                Published: November 22, 2026 | Updated: November 22, 2026 |
                McCulloch Law, P.A. | Florida Personal Injury
              </p>
            </header>

            {/* Intro Summary Callout Box (Justified to match Google Doc) */}
            <section className="mb-8 rounded-r-md border-l-4 border-[#c8a24a] bg-[#f7f3ea] px-5 py-4 sm:px-6 sm:py-5 shadow-sm">
              <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify">
                Late medical treatment, recorded admissions, failure to meet 2
                year time limits, negligent use of social media and AI, and
                mistakes in uninsured motorist documentation are the most
                expensive mistakes to make in Florida. These give the insurance
                company a reason to underpay and can easily be avoided by taking
                early documented action.
              </p>
            </section>

            {/* Key Points Section (Left-aligned to match Google Doc) */}
            <section className="mb-8 text-left">
              <h2 className="text-2xl font-bold text-[#0b1f3a] mb-4">
                KEY POINTS
              </h2>
              <ul className="space-y-3 pl-5 list-disc text-base sm:text-lg leading-relaxed text-[#222222]">
                {keyPoints.map((point) => (
                  <li key={point} className="text-left">
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            {/* 4-Card KPI Strip (Centered on #0b2545 Navy with #c8a24a Gold values) */}
            <section className="my-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 rounded-md bg-white p-1 border border-[#e3ddd0]">
              {statHighlights.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded bg-[#0b2545] px-4 py-5 text-center flex flex-col justify-start"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[#c8a24a]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm leading-snug text-[#e8ecf2]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </section>

            {/* Section 1: Costliest Mistakes */}
            <section className="mt-10 mb-10 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2545] border-b-2 border-[#c8a24a] pb-2 text-left">
                Which settlement mistakes still cost Florida accident victims
                the most?
              </h2>

              {/* Mistake 01 (Justified paragraphs per Google Doc) */}
              <div>
                <MistakeHeading
                  number="01"
                  title="Treating inside 14 days with the wrong kind of provider"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify mb-4">
                  You&rsquo;ve heard of the 14 day rule. This provision is
                  located within the{" "}
                  <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2025/627.736">
                    Florida Statutes at Section 627.736
                  </ExternalLink>
                  . The full $10,000 of medical/disability benefits will be
                  available if the injured party sees a physician, dentist,
                  physician assistant or advanced practice nurse who identifies
                  an emergency medical condition. A finding of no emergency
                  condition caps medical benefits at $2,500.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify">
                  A chiropractor can treat you inside that window, sure, but
                  they cannot make that call. That is a $7,500 swing sitting
                  right between those two caps, hiding behind an appointment
                  that felt like pure diligence. We review PIP files daily as{" "}
                  <InternalLink href="/practice/auto-accident">
                    auto accident lawyers in Tampa
                  </InternalLink>
                  . This is a common issue. If the initial visit is with someone
                  who can identify an emergency condition in addition to
                  following up with all appointments.
                </p>
              </div>

              {/* Mistake 02 (Left-aligned paragraphs & table per Google Doc) */}
              <div>
                <MistakeHeading
                  number="02"
                  title="Handing the other side’s adjuster a recorded statement"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left mb-4">
                  Adjusters call fast, sound kind, and want &ldquo;just a quick
                  statement for the file.&rdquo; The file is theirs. By day four
                  you may not have your MRI results, yet you&rsquo;re describing
                  your pain, your speed, and your weekend plans on tape. Every
                  &ldquo;I think&rdquo; and &ldquo;maybe&rdquo; becomes a quote.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left mb-4">
                  Here is how ordinary sentences can be read once they land in a
                  claim file.
                </p>

                <div className="overflow-x-auto rounded border border-[#e3ddd0] shadow-sm">
                  <table className="w-full min-w-[520px] border-collapse text-left text-sm sm:text-base">
                    <thead>
                      <tr className="bg-[#0b2545] text-white">
                        <th className="p-3.5 font-bold border border-[#e3ddd0] w-1/2">
                          What you say
                        </th>
                        <th className="p-3.5 font-bold border border-[#e3ddd0] w-1/2">
                          How the file can read it
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recordedStatementRows.map((row, idx) => (
                        <tr
                          key={row.phrase}
                          className={
                            idx % 2 === 0 ? "bg-white" : "bg-[#f7f3ea]"
                          }
                        >
                          <td className="p-3.5 font-bold text-[#222222] border border-[#e3ddd0]">
                            {row.phrase}
                          </td>
                          <td className="p-3.5 text-[#222222] border border-[#e3ddd0]">
                            {row.interpretation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mistake 03 (Justified paragraphs per Google Doc) */}
              <div>
                <MistakeHeading
                  number="03"
                  title="Believing you still have four years"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify mb-4">
                  The statute of limitations for negligence claims has been
                  reduced to half of what it used to be after March 24th, 2023 (
                  <ExternalLink href="https://www.flsenate.gov/Session/Bill/2023/837">
                    HB 837
                  </ExternalLink>
                  ). However, many old blog articles, forum discussions and your
                  cousin&rsquo;s memory will tell you it&apos;s 4. Search
                  engines keep old pages alive for years, which is why that
                  number haunts people like a lovebug on a windshield.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify">
                  Evidence, witnesses, and surveillance video don&rsquo;t wait
                  around for day 730, but the courthouse door itself slams on
                  the second anniversary. Wrongful death has its own 2 year
                  clock, which we cover in our guide to{" "}
                  <InternalLink href="/blogs/time-limits-for-filing-wrongful-death-cases-in-florida">
                    Florida wrongful death filing deadlines
                  </InternalLink>
                  . Miss the date and the strongest case in the county is worth
                  exactly nothing.
                </p>
              </div>

              {/* Mistake 04 (Bold lead left-aligned, body justified per Google Doc) */}
              <div>
                <MistakeHeading
                  number="04"
                  title="Narrating your own fault"
                />
                <p className="text-base sm:text-lg font-bold leading-relaxed text-[#222222] text-left mb-3">
                  Florida bars recovery when a jury puts more than 50% of the
                  fault on you.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify mb-4">
                  That&rsquo;s{" "}
                  <ExternalLink href="https://flsenate.gov/Laws/Statutes/2026/768.81">
                    Section 768.81(6)
                  </ExternalLink>
                  , another product of HB 837. Prior to 2023, if you were 90%
                  responsible, you would still be able to claim 10% of the
                  damages. Now, if you are 50%, you can claim 50% and if you are
                  51% responsible, you claim nothing. If your damages are
                  $200,000. One percentage point is the difference between
                  $100,000 and goose egg.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify">
                  So every offhand sentence, like &ldquo;I didn&rsquo;t see the
                  sign&rdquo; or &ldquo;I should&rsquo;ve known that floor was
                  wet,&rdquo; is a lump of fault you just handed over. The same
                  arithmetic governs a{" "}
                  <InternalLink href="/practice/slip-trip-fall">
                    slip and fall claim
                  </InternalLink>{" "}
                  in a Brandon grocery aisle as much as a left turn at Dale
                  Mabry and Kennedy. Say what happened. Skip what you wish
                  you&rsquo;d done.
                </p>
              </div>

              {/* Mistake 05 (Bold lead left-aligned, body justified per Google Doc) */}
              <div>
                <MistakeHeading
                  number="05"
                  title="Signing a release before you know the real number"
                />
                <p className="text-base sm:text-lg font-bold leading-relaxed text-[#222222] text-left mb-3">
                  A release is permanent, and the number on the check is not the
                  number you keep.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify mb-4">
                  First offers arrive early and polite, often before your doctor
                  has said the words maximum medical improvement. Sign a release
                  and the claim ends, including the surgery you didn&rsquo;t
                  know you&rsquo;d need next March. Then comes the net.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify">
                  With Health Plans, Medicare, Medicaid and Medical Providers
                  possibly claiming a percentage of your settlement, $40,000
                  could easily vanish faster than an ice cone melts on
                  Clearwater Beach in August. Firstly, request the gross
                  settlement amount, liens, and what treatment you can expect.
                </p>
              </div>
            </section>

            {/* Section 2: Fastest-Rising Settlement Mistakes */}
            <section className="mt-10 mb-10 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2545] border-b-2 border-[#c8a24a] pb-2 text-left">
                  Which settlement mistakes are rising fastest in Florida right
                  now?
                </h2>
                <p className="mt-3 text-base sm:text-lg italic text-[#5c6b7a] text-left">
                  5 mistakes are climbing because the technology, the law, and
                  the insurance market all shifted at once.
                </p>
              </div>

              {/* Mistake 06 (Left-aligned per Google Doc) */}
              <div>
                <MistakeHeading
                  number="06"
                  title="Deleting your social media after the crash"
                />
                <p className="text-base sm:text-lg font-bold leading-relaxed text-[#222222] text-left mb-3">
                  Posting is risky, and deleting is worse.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left">
                  In{" "}
                  <ExternalLink href="https://www.floridabar.org/the-florida-bar-news/if-friends-can-see-facebook-photos-so-can-opposing-counsel/">
                    Nucci v. Target
                  </ExternalLink>
                  , a Florida appeals court{" "}
                  <ExternalLink href="https://www.floridabar.org/__85256AA9005B9F25.nsf/0/B31FD3F00DFDF58485257DD30047B33D">
                    ordered a slip and fall plaintiff to hand over her Facebook
                    photos
                  </ExternalLink>{" "}
                  after Target&rsquo;s lawyer counted her pictures twice and the
                  number dropped. The court called those photos powerfully
                  relevant and her privacy interest slight. As of 2015, all
                  platforms now include stories, reels, tagged photos and
                  location stamps which are all read by insurers.
                </p>
              </div>

              {/* Mistake 07 (Left-aligned per Google Doc + Quote + Table) */}
              <div>
                <MistakeHeading
                  number="07"
                  title="Settling with the at fault driver’s insurer before notifying your own"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left mb-4">
                  Check the coverage numbers up top. Florida only requires you
                  to have a minimum of $10,000 in PIP and $10,000 for property
                  damage liability and this isn&rsquo;t a requirement for most
                  drivers to have bodily injury. So a crash on I-275 can put you
                  across from someone with no coverage, a bargain basement
                  policy, or a taillight vanishing toward Ybor.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left">
                  Your own uninsured and underinsured motorist coverage exists
                  for that gap, and{" "}
                  <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2025/627.727">
                    Section 627.727(6)
                  </ExternalLink>{" "}
                  hides a trap inside it. Before you accept the other
                  driver&rsquo;s limits and sign a release, your insurer gets
                  written notice and 30 days to approve the deal or pay you that
                  same amount and take over the claim against the driver.
                </p>

                <NavyQuoteCallout
                  quote="“One out of every five Florida drivers has no insurance at all.”"
                  author="Mark Friedlander"
                  role="Director of Corporate Communications, Insurance Information Institute"
                />

                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left mb-4">
                  The table shows where the money comes from in each scenario.
                </p>

                <div className="overflow-x-auto rounded border border-[#e3ddd0] shadow-sm">
                  <table className="w-full min-w-[600px] border-collapse text-left text-sm sm:text-base">
                    <thead>
                      <tr className="bg-[#0b2545] text-white">
                        <th className="p-3.5 font-bold border border-[#e3ddd0]">
                          Situation
                        </th>
                        <th className="p-3.5 font-bold border border-[#e3ddd0]">
                          Where money comes from first
                        </th>
                        <th className="p-3.5 font-bold border border-[#e3ddd0]">
                          What to watch
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {coverageScenarioRows.map((row, idx) => (
                        <tr
                          key={row.situation}
                          className={
                            idx % 2 === 0 ? "bg-white" : "bg-[#f7f3ea]"
                          }
                        >
                          <td className="p-3.5 font-bold text-[#222222] border border-[#e3ddd0]">
                            {row.situation}
                          </td>
                          <td className="p-3.5 text-[#222222] border border-[#e3ddd0]">
                            {row.source}
                          </td>
                          <td className="p-3.5 text-[#222222] border border-[#e3ddd0]">
                            {row.watch}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mistake 08 (Left-aligned per Google Doc) */}
              <div>
                <MistakeHeading
                  number="08"
                  title="Treating on a letter of protection without reading the fine print"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left mb-4">
                  <ExternalLink href="https://codes.findlaw.com/fl/title-xlv-torts/fl-st-sect-768-0427/">
                    Section 768.0427
                  </ExternalLink>{" "}
                  requires you to provide information about the letter, detailed
                  billing information, and if you were referred to them by
                  someone. If your lawyer made the referral, that fact can still
                  reach the jury. If the provider sold your bill to a third
                  party, what that buyer paid can become evidence of what the
                  care was worth.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left">
                  If you carry health insurance and skip it, the defense may
                  show what your plan would have paid. None of that makes a
                  letter of protection wrong. It makes a careless one expensive.
                  Ask who referred you, what rate you&rsquo;re being billed, and
                  whether your health plan would cost less before you sign
                  anything.
                </p>
              </div>

              {/* Mistake 09 (Left-aligned per Google Doc) */}
              <div>
                <MistakeHeading
                  number="09"
                  title="Asking a chatbot instead of a lawyer"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left">
                  By mid 2026 Florida injury firms were fielding a wave of
                  articles and AI generated answers claiming no fault insurance
                  ended on July 1, 2026. It didn&rsquo;t. PIP is still the law.
                  The second problem is nastier. In February 2026 a federal
                  judge in Manhattan ruled that a defendant&rsquo;s chats with a
                  consumer AI tool were neither attorney client privileged nor
                  protected work product, a point{" "}
                  <ExternalLink href="https://www.goodwinlaw.com/en/insights/publications/2026/03/alerts-practices-ai-chatbots-privilege-and-pitfalls">
                    Goodwin&rsquo;s lawyers laid out in a client alert
                  </ExternalLink>
                  .
                </p>
              </div>

              {/* Mistake 10 (Left-aligned per Google Doc) */}
              <div>
                <MistakeHeading
                  number="10"
                  title="Letting digital evidence expire"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left mb-4">
                  Your car&rsquo;s event data recorder logs speed, braking, and
                  throttle around a hit. Under the{" "}
                  <ExternalLink href="https://www.congress.gov/bill/114th-congress/senate-bill/766">
                    federal Driver Privacy Act of 2015
                  </ExternalLink>{" "}
                  you own that data, and others generally need your consent or a
                  court order to read it. NHTSA&rsquo;s final rule in December
                  2024 stretches the required pre-crash window from five seconds
                  to twenty, which helps anyone who preserves it. Preserving is
                  the catch.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-left">
                  Save the video today. Tell the tow yard not to move the car.
                  Have a lawyer send preservation letters to the other driver,
                  because their black box is the one you can&rsquo;t touch
                  alone.
                </p>
              </div>
            </section>

            {/* Centered 24/7 Navy Consultation CTA Card */}
            <section className="my-10 rounded-md bg-[#0b2545] px-6 py-8 sm:p-10 text-center shadow-md">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#c8a24a]">
                FREE CONSULTATION AVAILABLE 24/7
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white text-center">
                Hurt in a Tampa Bay crash?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#e8ecf2] max-w-xl mx-auto text-center">
                Talk to Attorney Drew McCulloch before you talk to an adjuster.
              </p>
              <div className="mt-4">
                <a
                  href="tel:8134442817"
                  className="text-3xl sm:text-4xl font-bold text-[#c8a24a] hover:underline transition-colors"
                >
                  (813) 444-2817
                </a>
              </div>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-[#c8a24a] px-6 py-3 text-sm sm:text-base font-bold text-[#0b2545] hover:bg-[#d8b45d] transition-colors text-center"
                >
                  Book your free consultation at mcfloridalaw.com
                </Link>
              </div>
            </section>

            {/* Section 3: Who Should You Call First */}
            <section className="mt-10 mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2545] border-b-2 border-[#c8a24a] pb-2 text-left">
                Who should you call first after a Tampa Bay crash?
              </h2>

              <NavyQuoteCallout
                quote="“Insurance companies don’t need you to lie. They only need you to guess, and then they write the guess down.”"
                author="Drew McCulloch, Esq."
                role=", McCulloch Law, P.A."
              />

              <p className="text-base sm:text-lg leading-relaxed text-[#222222] text-justify">
                <InternalLink href="/about">
                  Attorney Drew McCulloch
                </InternalLink>{" "}
                has served as a Hillsborough County prosecutor and has selected
                over 75 juries and tried over 100+ cases to verdict. He will
                help quell any fear you have in the courtroom because he is not
                afraid either. McCulloch Law, P.A. provides legal representation
                to the{" "}
                <strong className="font-bold">
                  Tampa, St. Petersburg, Clearwater, Brandon, Riverview and
                  surrounding Bay Area.
                </strong>{" "}
                We are available by phone 24/7. We don&rsquo;t charge any legal
                fees unless we win your case.
              </p>
            </section>

            {/* Section 4: FAQ (Left-aligned per Google Doc) */}
            <section className="mt-10 mb-10 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2545] border-b-2 border-[#c8a24a] pb-2 mb-6">
                FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-md border border-[#e3ddd0] bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-[#0b2545]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-[#222222]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <p className="mt-10 border-t border-[#e3ddd0] pt-6 text-xs sm:text-sm italic leading-6 text-[#5c6b7a] text-left">
              <strong className="font-bold">Disclaimer:</strong> This article
              offers general legal information about Florida injury claims and
              does not establish an attorney-client relationship. Every crash
              and policy is different. Contact McCulloch Law, P.A. directly for
              advice regarding your specific situation.
            </p>
          </article>

          {/* Recent Blogs Sidebar */}
          <aside className="w-full lg:max-w-[400px] lg:shrink-0 h-full lg:h-[1000px] overflow-y-auto p-3 rounded-lg">
            <h2 className="font-medium text-3xl sm:text-4xl text-black border-b-2 pb-4 mb-6">
              Recent Blogs
            </h2>

            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-[100px] h-[66px] shrink-0 overflow-hidden rounded bg-gray-50">
                    <Image
                      fill
                      sizes="100px"
                      src={
                        blog.featuredImage?.image?.url ||
                        "/images/placeholder.jpg"
                      }
                      alt={blog.featuredImage?.altText || blog.title || "Blog"}
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
