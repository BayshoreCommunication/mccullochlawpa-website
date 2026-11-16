import React from "react";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import {
  canDomesticViolenceChargesBeDroppedInFloridaBlog,
  staticBlogs,
} from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const LINK_CLASS =
  "font-semibold text-[#1b5e9e] underline hover:text-[#12304a] transition-colors";

/** External reference link enforcing nofollow noopener noreferrer per SEO policy. */
function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className={LINK_CLASS}>
      {children}
    </a>
  );
}

/** Internal navigation link styled consistently with editorial copy. */
function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={LINK_CLASS}>
      {children}
    </Link>
  );
}

const takeaways = [
  "The state attorney decides, not the accuser.",
  "Prosecutors proceed over the victim’s objection in Florida.",
  "The win includes no-file decisions, dismissal and reduced charges.",
  "Contacting the accuser can create a bigger felony.",
  "The first 30 days after arrest are most important.",
];

const statHighlights = [
  {
    value: "51%",
    text: "of reviewed intimate partner violence arrests were filed in Florida’s 2024-25 STOP-funded projects (1,207 of 2,363).",
    source: "Source Florida DCF, January 2026",
  },
  {
    value: "0.3%",
    text: "of Hillsborough State Attorney cases in 2025 reached a jury trial (199 of 58,877). Most end earlier.",
    source: "Source Hillsborough State Attorney, 2025",
  },
];

const outcomeRows = [
  {
    outcome: "No information filed",
    happens: "Prosecutor declines to file charges",
    trigger: "Thin evidence or conflicting stories",
    effect: "Arrest stays, expunction often available",
  },
  {
    outcome: "Nolle prosequi",
    happens: "State drops the case after filing",
    trigger: "Witness problems or new evidence",
    effect: "Expunction often available",
  },
  {
    outcome: "Dismissal by motion",
    happens: "Judge tosses the case",
    trigger: "Suppressed evidence or statements",
    effect: "Expunction often available",
  },
  {
    outcome: "Reduction",
    happens: "Charge lowered to a non-domestic offense",
    trigger: "Weak proof of injury or relationship",
    effect: "Conviction possible, no DV label",
  },
  {
    outcome: "Pretrial diversion",
    happens: "Conditions met, then dismissal",
    trigger: "Minor facts and prosecutor consent",
    effect: "Case ends without a conviction",
  },
  {
    outcome: "Not guilty verdict",
    happens: "Jury or judge acquits",
    trigger: "Reasonable doubt at trial",
    effect: "Expunction often available",
  },
];

const timelineStages = [
  {
    stage: "Arrest",
    detail: "Police arrest on probable cause. You’re held until first appearance.",
  },
  {
    stage: "Within 24 hours",
    detail: "A judge sets bond, often with a no-contact order. Prosecutors present your history.",
  },
  {
    stage: "Days 1 to 30",
    detail: "Intake review. Your lawyer sends evidence, witness leads, and mitigation.",
  },
  {
    stage: "Day 30",
    detail: "Formal charging deadline under Florida’s court rules.",
  },
  {
    stage: "Day 90",
    detail: "Speedy trial clock expires for misdemeanors.",
  },
  {
    stage: "Day 175",
    detail: "Speedy trial clock expires for felonies.",
  },
];

const faqs = [
  {
    question: "Will a dropped domestic violence charge still show on your record?",
    plainAnswer:
      "Yes. The arrest stays on file until you act. A dismissed or never-filed case often qualifies for expunction after FDLE issues a certificate of eligibility. Our seal and expunge team can help.",
    answer: (
      <>
        Yes. The arrest stays on file until you act. A dismissed or never-filed case often
        qualifies for expunction after FDLE issues a certificate of eligibility. Our{" "}
        <InternalLink href="/practice/seal-expunge">seal and expunge team</InternalLink> can help.
      </>
    ),
  },
  {
    question: "Can you own a gun after a domestic violence arrest?",
    plainAnswer:
      "An arrest alone doesn’t trigger the federal ban. A conviction for a domestic violence misdemeanor does. A protective order can also restrict firearms.",
    answer:
      "An arrest alone doesn’t trigger the federal ban. A conviction for a domestic violence misdemeanor does. A protective order can also restrict firearms.",
  },
  {
    question: "Can you go home after a domestic violence arrest?",
    plainAnswer:
      "Often not right away. Judges commonly bar contact, including the shared home, until the order is modified. Ask your lawyer to request a change.",
    answer:
      "Often not right away. Judges commonly bar contact, including the shared home, until the order is modified. Ask your lawyer to request a change.",
  },
];

const chartBars = [
  { label: ["Felony"], min: 19554, max: 21801, minLabel: "19,554", maxLabel: "21,801", color: "#c08a2e", x: 175 },
  { label: ["Misdemeanor"], min: 43546, max: 49660, minLabel: "43,546", maxLabel: "49,660", color: "#12304a", x: 395 },
  { label: ["All domestic", "violence arrests"], min: 63100, max: 71461, minLabel: "63,100", maxLabel: "71,461", color: "#5f7f9e", x: 615 },
];

/** Vector vertical range chart replicating the Florida DCF / FDLE arrest count ranges. */
function ArrestRangeChart() {
  const yBottom = 330;
  const yTop = 45;
  const scaleY = (val: number) => yBottom - ((val - 10000) / 65000) * (yBottom - yTop);
  const gridValues = [10000, 20000, 30000, 40000, 50000, 60000, 70000];

  return (
    <div className="my-4 w-full rounded-md border border-[#d5dbe1] bg-white p-4 sm:p-6 shadow-sm">
      <svg
        viewBox="0 0 760 395"
        role="img"
        aria-label="Vertical range chart showing lowest and highest yearly count of Florida domestic violence arrests from 2020 to 2024: Felony 19,554 to 21,801, Misdemeanor 43,546 to 49,660, and All domestic violence arrests 63,100 to 71,461."
        className="w-full h-auto max-w-full"
      >
        <title>Florida domestic violence arrests by charge level, 2020 to 2024</title>
        <desc>
          Floating bars show the lowest and highest yearly count of Florida domestic violence
          arrests from 2020 to 2024. Felony 19,554 to 21,801. Misdemeanor 43,546 to 49,660. All
          arrests 63,100 to 71,461.
        </desc>

        {gridValues.map((val) => {
          const y = scaleY(val);
          const isBase = val === 10000;
          return (
            <g key={val}>
              <text
                x="52"
                y={y + 4}
                textAnchor="end"
                fill="#5b6770"
                fontSize="14"
                fontFamily="sans-serif"
              >
                {val / 1000}k
              </text>
              <line
                x1="62"
                y1={y}
                x2="732"
                y2={y}
                stroke={isBase ? "#8a99a8" : "#d5dbe1"}
                strokeWidth={isBase ? "1.5" : "1"}
                strokeDasharray={isBase ? undefined : "3 3"}
              />
            </g>
          );
        })}

        {chartBars.map((bar) => {
          const topY = scaleY(bar.max);
          const bottomY = scaleY(bar.min);
          const barWidth = 86;
          return (
            <g key={bar.label.join(" ")}>
              <text
                x={bar.x}
                y={topY - 10}
                textAnchor="middle"
                fill="#12304a"
                fontSize="15"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                {bar.maxLabel}
              </text>
              <rect
                x={bar.x - barWidth / 2}
                y={topY}
                width={barWidth}
                height={Math.max(bottomY - topY, 4)}
                fill={bar.color}
                rx="2"
              />
              <text
                x={bar.x}
                y={bottomY + 18}
                textAnchor="middle"
                fill="#12304a"
                fontSize="14"
                fontFamily="sans-serif"
              >
                {bar.minLabel}
              </text>
              {bar.label.map((line, i) => (
                <text
                  key={line}
                  x={bar.x}
                  y={356 + i * 19}
                  textAnchor="middle"
                  fill="#12304a"
                  fontSize="16"
                  fontFamily="sans-serif"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/** Renders warm cream editorial quotes with gold left border matching Google Doc style. */
function QuoteCallout({
  quote,
  author,
  meta,
}: {
  quote: string;
  author: string;
  meta: string;
}) {
  return (
    <blockquote className="my-8 rounded-md border-l-4 border-[#c08a2e] bg-[#fbf6ec] p-5 sm:p-6 shadow-sm">
      <p className="text-base sm:text-lg italic text-[#12304a] leading-relaxed text-justify">
        {quote}
      </p>
      <cite className="block mt-2.5 text-sm not-italic text-justify">
        <span className="font-bold text-black">{author}</span>
        <span className="text-[#5b6770]">&nbsp;&nbsp;|&nbsp;&nbsp;{meta}</span>
      </cite>
    </blockquote>
  );
}

function buildJsonLd(canonicalUrl: string) {
  const { title, metaTitle, metaDescription, featuredImage } =
    canDomesticViolenceChargesBeDroppedInFloridaBlog;

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
          width: 1000,
          height: 510,
          caption: featuredImage.caption,
        },
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.mcfloridalaw.com/blogs#blog",
          name: "McCulloch Law, P.A. Blog",
          url: "https://www.mcfloridalaw.com/blogs",
        },
        about: {
          "@type": "Thing",
          name: "Dropping Domestic Violence Charges in Florida Under Statute 741.2901",
        },
        keywords: [
          "can domestic violence charges be dropped in Florida",
          "drop domestic violence charges Florida",
          "Florida Statute 741.2901",
          "Florida Statute 741.28",
          "Hillsborough County State Attorney",
          "nolle prosequi Florida domestic violence",
          "Tampa domestic violence defense lawyer",
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
        datePublished: "2026-11-16",
        dateModified: "2026-11-16",
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        url: canonicalUrl,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.plainAnswer },
        })),
      },
    ],
  };
}

export default async function CanDomesticViolenceChargesBeDroppedInFlorida() {
  const blogPostData = await GetAllPostData();
  const currentSlug = canDomesticViolenceChargesBeDroppedInFloridaBlog.slug;
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
                src={canDomesticViolenceChargesBeDroppedInFloridaBlog.featuredImage.image.url}
                alt={canDomesticViolenceChargesBeDroppedInFloridaBlog.featuredImage.altText}
                title={canDomesticViolenceChargesBeDroppedInFloridaBlog.featuredImage.title}
                width={1000}
                height={510}
                sizes="(max-width: 1024px) 100vw, 1120px"
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="p-3 text-xs sm:text-sm italic text-gray-600 bg-gray-50 border-t border-gray-200 text-center">
                {canDomesticViolenceChargesBeDroppedInFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            {/* Title & American Format Publish / Updated Dates */}
            <header className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c08a2e]">
                Domestic Violence Defense | Florida
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black text-left">
                Can Domestic Violence Charges Be Dropped in Florida?
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">
                Published: November 16, 2026 | Updated: November 16, 2026 | McCulloch Law, P.A. | Florida Domestic Violence Defense
              </p>
            </header>

            {/* Lead Paragraph */}
            <section className="mb-8">
              <p className="text-base sm:text-lg leading-relaxed text-[#12304a] text-justify">
                Yes, but only the state attorney can drop a Florida domestic violence charge. The accused person cannot simply cancel it at will. It will depend on prosecutors whether the charge of domestic violence will be dropped or rejected as insufficient if there is not enough evidence, false eyewitnesses, or if the law was applied incorrectly in the first place. All this will depend on the case being considered.
              </p>
            </section>

            {/* Key Takeaways Box */}
            <section className="rounded-md border-t-4 border-[#12304a] bg-[#eef2f6] p-5 sm:p-6 md:p-8 mb-10 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-[#12304a] text-justify">
                Key Takeaways
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-black leading-7">
                {takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-justify">
                    <span aria-hidden="true" className="text-[#c08a2e] font-bold leading-7 shrink-0">
                      &bull;
                    </span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 1: Who can drop a domestic violence charge in Florida? */}
            <section className="space-y-5 text-black leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-justify">
                Who can drop a domestic violence charge in Florida?
              </h2>
              <p className="text-justify">
                <span className="text-[#12304a] text-base sm:text-lg">
                  Only the state attorney can drop it.
                </span>{" "}
                Not by the police, nor the judge and person calling 911. Within the state of Florida, the{" "}
                <ExternalLink href="https://hillsboroughsao.gov/">
                  Hillsborough County State Attorney&apos;s Office
                </ExternalLink>{" "}
                is responsible for prosecuting for the 13th Judicial Circuit. As stated in{" "}
                <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0741/Sections/0741.2901.html">
                  Florida Statute 741.2901
                </ExternalLink>
                , each circuit is required to adopt a pro-prosecution policy.
              </p>

              <QuoteCallout
                quote="“ Domestic violence be treated as a criminal act rather than a private matter”"
                author="Florida Legislature"
                meta="Fla. Stat. 741.2901(2)"
              />

              {/* 2-Card Stat Row */}
              <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {statHighlights.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-md bg-[#12304a] p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-4xl sm:text-5xl font-bold text-[#e3b661] text-justify">
                        {stat.value}
                      </div>
                      <p className="mt-3 text-sm sm:text-base text-white leading-6 text-justify">
                        {stat.text}
                      </p>
                    </div>
                    <p className="mt-4 text-xs text-[#afc0d1] text-justify">{stat.source}</p>
                  </div>
                ))}
              </div>

              {/* H3: Why can't the victim drop a domestic violence charge? */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#12304a] text-justify pt-2">
                Why can&rsquo;t the victim drop a domestic violence charge?
              </h3>
              <p className="text-justify">
                Often the prosecutors will run the case without the person who accuses the defendant. They rely on{" "}
                <ExternalLink href="https://www.nicepublicsafety.com/glossary/911-audio-recorder">
                  audio files from the 911 system
                </ExternalLink>
                , body camera videos, photos of injuries and medical reports. The officer is able to contact the jury with an emergency communication.
              </p>
              <p className="text-justify">
                Still, those files have soft spots. Many rest on one raw statement, taken late at night, with no outside witness. Photos show a mark. They don&rsquo;t show who started it. And when both people claim injury, officers must pick a primary aggressor, which they don&rsquo;t always get right.
              </p>
              <p className="text-justify">
                That&rsquo;s the argument we press. A case that can&rsquo;t survive cross-examination shouldn&rsquo;t be filed. So we point to the gaps early and in writing. Don&rsquo;t assume the law covers only spouses. Under{" "}
                <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0741/Sections/0741.28.html">
                  Florida Statute 741.28
                </ExternalLink>
                , exes, relatives, people who lived together as a family, and parents of a shared child all count.
              </p>
            </section>

            {/* Section 2: What outcomes can you realistically get besides a full dismissal? */}
            <section className="space-y-5 text-black leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-justify">
                What outcomes can you realistically get besides a full dismissal?
              </h2>
              <p className="text-base sm:text-lg text-[#12304a] text-justify">
                Expect one of 6 outcomes. Full dismissal is best, however, a no-file decision or reduction can also protect your future.
              </p>
              <p className="text-justify">
                So, can domestic violence charges be dropped in practice? Yes, in several forms. Each one treats your record differently, so the label matters.
              </p>

              {/* 6 Outcomes Table */}
              <div className="my-6 overflow-x-auto rounded-md border border-[#d5dbe1] shadow-sm">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-[#12304a] text-white text-sm font-bold">
                      <th className="p-3 sm:p-4 border border-[#d5dbe1] text-justify">Outcome</th>
                      <th className="p-3 sm:p-4 border border-[#d5dbe1] text-justify">What happens</th>
                      <th className="p-3 sm:p-4 border border-[#d5dbe1] text-justify">Typical trigger</th>
                      <th className="p-3 sm:p-4 border border-[#d5dbe1] text-justify">Record effect</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-black">
                    {outcomeRows.map((row, idx) => (
                      <tr key={row.outcome} className={idx % 2 === 0 ? "bg-white" : "bg-[#fbf6ec]"}>
                        <td className="p-3 sm:p-4 border border-[#d5dbe1] font-bold text-[#12304a] align-top text-justify">
                          {row.outcome}
                        </td>
                        <td className="p-3 sm:p-4 border border-[#d5dbe1] align-top text-justify">
                          {row.happens}
                        </td>
                        <td className="p-3 sm:p-4 border border-[#d5dbe1] align-top text-justify">
                          {row.trigger}
                        </td>
                        <td className="p-3 sm:p-4 border border-[#d5dbe1] align-top text-justify">
                          {row.effect}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-justify">
                Your charge level changes your leverage. A first-degree misdemeanor battery carries up to one year in jail, while a third-degree felony carries up to five years. Our guide on the{" "}
                <InternalLink href="/blogs/difference-between-misdemeanor-and-felony-in-florida">
                  difference between a misdemeanor and a felony in Florida
                </InternalLink>{" "}
                shows how that gap shapes negotiations.
              </p>
              <p className="text-justify">
                Don&rsquo;t write off a reduction, either. A non-domestic label keeps many harsh side effects off your record, from custody fights to job screens.
              </p>
              <p className="text-justify">
                Self-defense matters here too. Florida Statute 776.012 lets you use force when you reasonably believe it&rsquo;s necessary to protect yourself, and prosecutors must weigh that claim.
              </p>
              <p className="text-justify">
                For first-time accused people with steady work and no history, we argue for diversion. A conviction isn&rsquo;t needed to keep anyone safe, and the state often agrees when the facts are minor.
              </p>

              {/* Arrests Chart */}
              <div className="pt-4">
                <p className="text-base sm:text-lg font-bold text-[#12304a] text-justify">
                  Florida domestic violence arrests by charge level, 2020 to 2024
                </p>
                <ArrestRangeChart />
                <p className="text-xs sm:text-sm italic text-[#5b6770] text-justify">
                  Misdemeanors outnumber felonies by more than two to one every year. Source: Florida DCF, using FDLE data.
                </p>
              </div>
            </section>

            {/* Section 3: How long before prosecutors drop or file domestic violence charges? */}
            <section className="space-y-5 text-black leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-justify">
                How long before prosecutors drop or file domestic violence charges?
              </h2>
              <p className="text-base sm:text-lg font-bold text-[#12304a] text-justify">
                About 30 days. Florida&rsquo;s court rules give prosecutors roughly a month from arrest to file formal charges.
              </p>

              {/* 6-Stage Timeline Grid */}
              <div className="my-6 space-y-2.5">
                {timelineStages.map((item) => (
                  <div
                    key={item.stage}
                    className="grid grid-cols-1 sm:grid-cols-[175px_1fr] overflow-hidden rounded-md shadow-sm border border-[#d5dbe1]"
                  >
                    <div className="bg-[#12304a] text-white font-bold text-sm sm:text-base p-3.5 sm:p-4 text-justify flex items-center">
                      {item.stage}
                    </div>
                    <div className="bg-[#fbf6ec] border-t-4 sm:border-t-0 sm:border-l-4 border-[#c08a2e] text-black text-sm sm:text-base p-3.5 sm:p-4 text-justify">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-justify">
                That window is powerful. As the state&rsquo;s{" "}
                <ExternalLink href="https://myflfamilies.com/document/66341">
                  2026 domestic violence report
                </ExternalLink>{" "}
                shows, filing isn&rsquo;t automatic. Prosecutors review each arrest, weigh the proof, and decide whether it&rsquo;s worth a courtroom.
              </p>
              <p className="text-justify">
                Our timing argument is blunt. Give prosecutors your side before they commit, and you can change the filing decision. After they file, they tend to dig in.
              </p>
              <p className="text-justify">
                One caution. Continuances you request can waive those speedy trial clocks, so your lawyer must plan the timing.
              </p>

              <QuoteCallout
                quote="“Prosecutors decide early, and they decide on paper. If your side of the story isn’t in that file, it doesn’t exist.”"
                author="Drew McCulloch, Esq."
                meta="Former state prosecutor, McCulloch Law, P.A."
              />
            </section>

            {/* Section 4: What should you avoid if the accuser wants the case dropped? */}
            <section className="space-y-5 text-black leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-justify">
                What should you avoid if the accuser wants the case dropped?
              </h2>
              <p className="text-base sm:text-lg font-bold text-[#12304a] text-justify">
                Avoid all contact about the case. Send every message through your lawyer.
              </p>

              {/* WARNING Callout */}
              <div className="my-6 rounded-md border-l-4 border-[#b83a26] bg-[#fdf0ec] p-5 sm:p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-[#b83a26] text-justify">
                  WARNING
                </p>
                <p className="mt-1.5 text-black leading-7 text-justify">
                  Reaching out to the accuser can violate your no-contact order. It can also trigger witness tampering charges. According to{" "}
                  <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0914/Sections/0914.22.html">
                    Florida Statute 914.22
                  </ExternalLink>
                  , tampering is at least a third-degree felony.
                </p>
              </div>

              <p className="text-justify">
                Do you think a friendly text is harmless? It isn&rsquo;t. A message saying &ldquo;please drop it&rdquo; becomes evidence, and jail calls are recorded too.
              </p>
              <p className="text-justify">
                An affidavit from the accuser isn&rsquo;t useless. Prosecutors can weigh it. It just shouldn&rsquo;t come from you and it should reach them through a lawyer.
              </p>
              <p className="text-justify">
                Skip the social media posts, the apologies, and messages sent through mutual friends. And say nothing about the facts to officers without counsel. Innocent explanations often turn into admissions.
              </p>
            </section>

            {/* Section 5: Why hire a Tampa domestic violence defense lawyer before charges are filed? */}
            <section className="space-y-5 text-black leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-justify">
                Why hire a Tampa domestic violence defense lawyer before charges are filed?
              </h2>
              <p className="text-base sm:text-lg font-bold text-[#12304a] text-justify">
                Because the filing decision is your best shot at ending the case. A lawyer who has prosecuted these cases knows what moves it.
              </p>
              <p className="text-justify">
                McCulloch Law, P.A. is led by Drew McCulloch, a former state prosecutor with more than 15 years of experience across Tampa Bay. He has sat at the prosecution table, so he knows how intake review really works. Our{" "}
                <InternalLink href="/practice/domestic-violence">
                  domestic violence defense team
                </InternalLink>{" "}
                builds on that edge from day one, with honest, one-on-one guidance from the attorney handling your case.
              </p>
              <p className="text-justify">
                The firm&rsquo;s published results include a second-degree felony battery that was never filed and a felony child abuse case that was dismissed. Every case differs and no lawyer can promise an outcome. Still, those results show what early, focused defense can do.
              </p>
              <p className="text-justify">
                We also handle the civil side. If the accuser asks for a protective order, our{" "}
                <InternalLink href="/practice/injunctions">injunction team</InternalLink> can defend you in that parallel case, so one fight doesn&rsquo;t sink the other. From Tampa to Temple Terrace and Plant City, you can reach the firm any hour. Your first consultation is free.
              </p>
            </section>

            {/* Centered Navy CTA Box (Matching Google Doc Center Alignment) */}
            <section className="my-10 rounded-md border-t-4 border-[#c08a2e] bg-[#12304a] p-6 sm:p-8 md:p-10 text-center shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Facing a domestic violence charge in Tampa Bay?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#dce5ee] max-w-2xl mx-auto leading-relaxed text-center">
                Get a free consultation, 24/7. Let a former state prosecutor review your case before the state attorney decides.
              </p>
              <div className="mt-5">
                <a
                  href="tel:8134442817"
                  className="text-3xl sm:text-4xl font-bold text-[#e3b661] hover:underline transition-colors"
                >
                  (813) 444-2817
                </a>
              </div>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-[#c08a2e] px-6 py-3 text-base font-bold text-[#12304a] hover:bg-[#d19a3a] transition-colors text-center"
                >
                  Book your free consultation
                </Link>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-[#afc0d1] text-center">
                238 East Davis Boulevard, Ste 202, Tampa, FL 33606
              </p>
            </section>

            {/* Section 6: Domestic Violence Charges in Florida FAQs */}
            <section className="mt-12 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-justify">
                Domestic Violence Charges in Florida FAQs
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base sm:text-lg font-bold text-[#12304a] text-justify">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-7 text-black text-justify">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <p className="mt-10 border-t border-gray-200 pt-6 text-xs sm:text-sm italic leading-6 text-[#5b6770] text-justify">
              <strong className="font-bold">Disclaimer:</strong> This article offers general information. It doesn&rsquo;t build any attorney-client relationship. If you&rsquo;re in danger, call 911. Contact us for the legal help you need.
            </p>
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
