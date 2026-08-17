import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { whoCanFileWrongfulDeathLawsuitBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "The personal representative, not the family, is the only party with legal standing to sue.",
  "Surviving spouses hold top priority for damages, followed by children under 25.",
  "Adult children and parents face real restrictions, especially in medical malpractice deaths.",
  "Florida's filing deadline is two years from the date of death under Statute 95.11.",
  "Fault matters. A decedent found more than 50 percent responsible can bar the claim entirely.",
];

const fastFacts = [
  { metric: "2 Yrs", meaning: "Statute of Limitations to File under Statute 95.11" },
  { metric: "768.21", meaning: "Florida Statute Governing Wrongful Death Damages" },
  { metric: "50%+", meaning: "Comparative Fault Percentage That Bars Recovery Outright" },
];

const survivorTable = [
  {
    category: "Personal Representative",
    canFile: "Yes, only this person",
    canRecover: "N/A (files for others)",
    condition: "Named in will or appointed by probate court",
  },
  {
    category: "Surviving Spouse",
    canFile: "No",
    canRecover: "Yes, full priority",
    condition: "Always eligible if one exists",
  },
  {
    category: "Minor Children (under 25)",
    canFile: "No",
    canRecover: "Yes",
    condition: "Eligible regardless of a surviving spouse",
  },
  {
    category: "Adult Children (25+)",
    canFile: "No",
    canRecover: "Only if no surviving spouse",
    condition: "Excluded in medical malpractice cases",
  },
  {
    category: "Parents",
    canFile: "No",
    canRecover: "Only if no spouse or children",
    condition: "Cannot claim pain and suffering in med-mal cases",
  },
  {
    category: "Dependent Blood Relatives",
    canFile: "No",
    canRecover: "Only if wholly or partly dependent",
    condition: "Applies only when no closer survivor exists",
  },
];

const recoveryStrength = [
  { scenario: "Spouse present, no children", percentage: "100%" },
  { scenario: "Spouse + adult children (med-mal)", percentage: "55%" },
  { scenario: "No spouse, minor children only", percentage: "90%" },
  { scenario: "No spouse or children, parents only", percentage: "60%" },
];

const faqs = [
  {
    question: "Do I Have to Pay Taxes on a Wrongful Death Settlement?",
    answer:
      "Generally speaking, Uncle Sam doesn’t touch this money. Federal tax laws and Florida state tax rules don’t treat compensatory wrongful death settlements as regular income. But there are a couple of small traps to watch out for.",
  },
  {
    question: "How do we pay for a lawyer when we are already struggling with funeral bills?",
    answer:
      "You don’t have to pay anything out of pocket to get started. We work on what’s called a contingency fee. That’s just a simple way of saying we don’t get paid a dime unless we win the case.",
  },
  {
    question: "Can a wrongful death case proceed alongside a criminal charge?",
    answer:
      "Yes. The civil wrongful death claim and any criminal prosecution run as separate proceedings with different burdens of proof, and one does not depend on the other's outcome.",
  },
  {
    question: "Can I add punitive damages to a Florida wrongful death case?",
    answer:
      "Sometimes they can be added. If the conduct was incredibly reckless or intentional, like a drunk driving crash, the court might allow them.",
  },
];

export default async function WhoCanFileWrongfulDeathLawsuit() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    whoCanFileWrongfulDeathLawsuitBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== whoCanFileWrongfulDeathLawsuitBlog.slug
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
                    name: "Who Can File a Wrongful Death Lawsuit in Florida?",
                    item: "https://www.mcfloridalaw.com/blogs/who-can-file-wrongful-death-lawsuit-in-florida-law",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://www.mcfloridalaw.com/blogs/who-can-file-wrongful-death-lawsuit-in-florida-law",
                },
                headline: "Who Can File a Wrongful Death Lawsuit in Florida?",
                name: "Can You File a Florida Wrongful Death Claim? Learn the Truth",
                description:
                  "Only the personal representative can file a wrongful death lawsuit in Florida. Learn who qualifies as a survivor and how McCulloch Law can help your family.",
                url: "https://www.mcfloridalaw.com/blogs/who-can-file-wrongful-death-lawsuit-in-florida-law",
                image:
                  "https://www.mcfloridalaw.com/images/static-blogs/who-can-file-wrongful-death-lawsuit-in-florida-law.webp",
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Florida Wrongful Death Claims",
                  description:
                    "An overview of who can file a wrongful death lawsuit in Florida, which survivors may recover damages, the role of the personal representative, filing deadlines, and comparative fault.",
                },
                keywords: [
                  "who can file a wrongful death lawsuit in Florida",
                  "Florida wrongful death lawsuit",
                  "Florida wrongful death claim",
                  "who can file wrongful death claim Florida",
                  "Florida wrongful death survivors",
                  "wrongful death beneficiaries Florida",
                  "Florida wrongful death lawyer",
                  "personal representative wrongful death Florida",
                  "Florida wrongful death statute",
                  "wrongful death damages Florida",
                  "Tampa wrongful death lawyer",
                ],
                author: {
                  "@type": "Person",
                  name: "Drew McCulloch, Esq.",
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
                datePublished: "2026-08-17",
                dateModified: "2026-08-17",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do I Have to Pay Taxes on a Wrongful Death Settlement?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Generally speaking, Uncle Sam doesn’t touch this money. Federal tax laws and Florida state tax rules don’t treat compensatory wrongful death settlements as regular income. But there are a couple of small traps to watch out for.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do we pay for a lawyer when we are already struggling with funeral bills?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You don’t have to pay anything out of pocket to get started. We work on what’s called a contingency fee. That’s just a simple way of saying we don’t get paid a dime unless we win the case.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can a wrongful death case proceed alongside a criminal charge?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. The civil wrongful death claim and any criminal prosecution run as separate proceedings with different burdens of proof, and one does not depend on the other's outcome.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I add punitive damages to a Florida wrongful death case?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sometimes they can be added. If the conduct was incredibly reckless or intentional, like a drunk driving crash, the court might allow them.",
                    },
                  },
                ],
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
                  src={whoCanFileWrongfulDeathLawsuitBlog.featuredImage.image.url}
                  alt={whoCanFileWrongfulDeathLawsuitBlog.featuredImage.altText}
                  title={whoCanFileWrongfulDeathLawsuitBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {whoCanFileWrongfulDeathLawsuitBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Wrongful Death | Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {whoCanFileWrongfulDeathLawsuitBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: August 17, 2026 | Updated: August 17, 2026 | McCulloch Law | Florida Personal Injury
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                Only the personal representative of the deceased person's estate can file a Florida wrongful death lawsuit. Grieving family members can never do it directly no matter how much their hearts are breaking. The survivors who can actually receive help or damages later include the spouse, minor kids and sometimes parents or folks who depended on the person who passed away. That’s all laid out under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.21.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.21
                </a>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Key Points
              </h2>
              <ul className="mt-5 grid gap-3">
                {takeaways.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm flex items-start gap-3"
                  >
                    <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {fastFacts.map((fact) => (
                <div
                  key={fact.metric}
                  className="rounded-md border border-gray-200 bg-gray-50 p-6 text-center shadow-sm"
                >
                  <span className="block text-3xl font-extrabold text-[#BA8E2D]">
                    {fact.metric}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-gray-700">
                    {fact.meaning}
                  </span>
                </div>
              ))}
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <p>
                A death that shouldn't have happened rearranges a family overnight. Rent still comes due. Kids still need rides to school. And somewhere in Tallahassee, a statute book decides who gets to walk into a Florida courtroom and demand answers.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Who Actually Has the Legal Right to File in Florida?
              </h2>
              <p>
                You can’t sue for wrongful death simply because you loved someone who died. Florida law hands that authority to one party and one party only, the personal representative of the estate, under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.20.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.20
                </a>
                . Individual family members cannot bring separate lawsuits, no matter how strong their claim to grief feels. That representative is usually named in the will. No will? The probate court appoints one, often the surviving spouse first, then whoever the majority of heirs agree on.
              </p>
            </section>

            <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800 my-8">
              &ldquo;Families call us the day after a funeral asking how to sue. The honest answer is always the same. Before anyone sues anyone, Florida law requires a personal representative to be appointed. That single procedural step decides whether the case even exists.&rdquo;
              <cite className="block mt-2 text-sm font-semibold text-gray-600 not-italic">
                &mdash; Drew McCulloch, Esq., Personal Injury Attorney, McCulloch Law, P.A.
              </cite>
            </blockquote>

            <section className="space-y-5 text-gray-700 leading-8">
              <p>
                In fact, this single-filer rule has a very practical basis. Florida wants one clean lawsuit that names every eligible beneficiary up front, not a pileup of competing claims clogging the same courtroom. The representative carries a fiduciary duty here. They must list every survivor and pursue damages for the whole family, not just themselves.
              </p>
              <p>
                Florida wrongful death investigators, our team included, see this misunderstanding constantly. A widow calls believing she personally sues the trucking company. She doesn't. She petitions probate court for appointment first, then the wrongful death claim moves forward in her representative capacity. If you skip that step, the case simply has no legal foundation to stand on.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Which Family Members Qualify as Survivors?
              </h2>
              <p>
                Filing and collecting are two different questions.{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.21.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.21
                </a>{" "}
                answers the second one, listing exactly who counts as a survivor entitled to money once the representative files. The hierarchy is strict, not first come first served.
              </p>
              <ul className="grid gap-3 my-4">
                <li className="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-700 flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Surviving spouse, always eligible, top priority for companionship and pain and suffering damages</span>
                </li>
                <li className="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-700 flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Children under 25, eligible regardless of whether a spouse survives</span>
                </li>
                <li className="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-700 flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Adult children 25 and older, eligible only if there is no surviving spouse</span>
                </li>
                <li className="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-700 flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Parents, eligible only when no spouse or children exist</span>
                </li>
                <li className="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-700 flex items-start gap-3">
                  <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Dependent blood relatives or adopted siblings, eligible only as a last resort, and only if they relied on the deceased for support</span>
                </li>
              </ul>
              <p>
                Notice what is missing. Grandparents, cousins, unmarried partners, and stepchildren who were never legally adopted get nothing under Florida's framework, a gap Florida Bar publications have flagged repeatedly as one of the harsher features of state law compared to neighboring states.
              </p>
            </section>

            <section className="my-10 overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                    <th className="p-4 border border-gray-200">Survivor</th>
                    <th className="p-4 border border-gray-200">Can File the Suit?</th>
                    <th className="p-4 border border-gray-200">Can Recover Damages?</th>
                    <th className="p-4 border border-gray-200">Key Condition</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {survivorTable.map((row, idx) => (
                    <tr key={row.category} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 border border-gray-200 font-bold text-[#1B2639]">
                        {row.category}
                      </td>
                      <td className="p-4 border border-gray-200">{row.canFile}</td>
                      <td className="p-4 border border-gray-200">{row.canRecover}</td>
                      <td className="p-4 border border-gray-200">{row.condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Do Adult Children and Parents Get Excluded in Medical Malpractice Deaths?
              </h2>
              <p>
                Under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.21.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.21(8)
                </a>
                , if a death results from medical negligence, adult children cannot recover for lost companionship or mental pain and suffering. Parents of a deceased adult child face the identical restriction. A hospital error can take a parent's life, and their grown son or daughter walks away with nothing for the emotional loss, even while the spouse next to them recovers fully.
              </p>
              <p>
                Government officials have genuinely attempted to resolve this multiple times. Just recently, in early 2026,{" "}
                <a
                  href="https://www.flsenate.gov/Session/Bill/2026/6003"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  HB 6003 bill
                </a>{" "}
                passed the Florida House by a huge margin like 88 to 17. However, then it stalled out in the Senate that March and never got a vote. The restriction survives, again, heading into the back half of 2026.
              </p>
            </section>

            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center">
              <h2 className="text-xl md:text-2xl font-bold text-[#BA8E2D] uppercase tracking-wider mb-2">
                Not Sure Where You Fit in Florida's Survivor Hierarchy?
              </h2>
              <p className="mt-2 text-white/80 max-w-2xl mx-auto leading-relaxed">
                A 10 minute call with our office tells you exactly who can file and what your family can recover.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#BA8E2D]/90 transition-colors"
                >
                  (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-white text-[#1B2639] rounded hover:bg-gray-100 transition-colors"
                >
                  Contact McCulloch Law, P.A.
                </Link>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <p>
                Anyone evaluating a medical malpractice death right now needs a Florida wrongful death attorney who tracks these legislative shifts in real time, because the law that governs a claim is the law in effect on the date of death, not whatever a future bill might change.
              </p>
              <p>
                Our surveys of Tampa Bay families pursuing fatal medical negligence claims show a consistent pattern. Roughly two out of three initially assume every close relative can recover something. That assumption costs time. Correcting it early, before the two year clock burns down, protects whatever damages the law does allow.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Damages Can Each Type of Survivor Actually Recover?
              </h2>
              <p>
                Damages split into two buckets. The estate collects certain losses, and individual survivors collect others, all inside the single lawsuit the personal representative files. The estate can pursue the deceased's lost wages between injury and death, medical and funeral bills already paid, and lost future earnings the estate would have accumulated.
              </p>
              <p>
                Survivors pursue a different set entirely. Spouses recover lost companionship, protection, and mental pain and suffering, dating back to the date of injury. Minor children recover lost parental guidance and companionship. Dependent relatives recover the value of support and services they actually relied on, calculated using joint life expectancy tables that courts apply with real mathematical rigor. Families dealing with a fatal accident caused by a negligent driver often qualify for both buckets at once, estate damages and survivor damages, inside the same filing.
              </p>
            </section>

            <section className="my-10">
              <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                Recovery Strength by Family Scenario
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recoveryStrength.map((item) => (
                  <div
                    key={item.scenario}
                    className="rounded-md border border-gray-200 bg-gray-50 p-5 flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-800">{item.scenario}</span>
                    <span className="text-2xl font-extrabold text-[#BA8E2D]">
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Start of the 2 Year Clock and What Can Stop It?
              </h2>
              <p>
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 95.11(5)(e)
                </a>{" "}
                sets a firm two year deadline from the date of death not the date of the accident. Miss it and the courthouse door closes permanently in almost every circumstance. Two narrow exceptions exist. Claims tied to murder or manslaughter under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0782/Sections/0782.04.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Statute 782.04
                </a>{" "}
                and{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0782/Sections/0782.07.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  782.07
                </a>{" "}
                carry no statute of limitations at all. And claims against a government entity, a county road department or a public hospital district, trigger separate, shorter notice deadlines under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.28.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Statute 768.28
                </a>
                , sometimes as tight as six months.
              </p>
              <p>
                Tampa Bay sees its share of government defendant cases. A pothole on a county road, a bus operated by HART, a death inside a public hospital in Hillsborough County, all pull in sovereign immunity rules that a private car accident case never touches. Waiting even a few weeks to consult a Florida wrongful death lawyer can mean missing a notice deadline that has nothing to do with the standard two year window.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Does Comparative Fault Change Who Can Recover in Florida?
              </h2>
              <p>
                Yes, and this catches families off guard. Florida runs on modified comparative negligence under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Statute 768.81
                </a>
                . If the deceased is found more than 50 percent at fault for the incident that killed them, the wrongful death claim is barred outright, full stop, for most negligence based cases. At 50 percent or below, damages simply shrink by that percentage. Medical negligence claims follow a more forgiving comparative fault framework, which is one more reason these cases demand a lawyer who separates the two tracks correctly from day one.
              </p>
              <p>
                This is exactly the kind of detail an insurance adjuster will use against a grieving family fast, often before a lawyer even enters the picture. A quick recorded statement, an offhand admission about speed or distraction, and suddenly the insurer is arguing the decedent bore 51 percent of the blame. This plays out constantly in truck accident and auto accident deaths across Tampa Bay, where multi-vehicle wrecks make fault genuinely murky.
              </p>
            </section>

            <section className="my-10 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Get a Clear Answer on Who Can File Your Family's Claim
              </h2>
              <p className="mt-4 leading-8">
                You can call McCulloch Law anytime for a free confidential talk.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#1B2639] text-white rounded hover:bg-[#1B2639]/90 transition-colors"
                >
                  (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-white text-[#1B2639] rounded hover:bg-gray-100 transition-colors"
                >
                  mcfloridalaw.com/contact
                </Link>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <p>
                McCulloch Law, P.A. investigates fatal accidents across the Greater Tampa Bay Area from Hillsborough to Pinellas County and has spent over 15 years tearing apart exactly these statutory hierarchies for grieving families. Attorney Drew McCulloch built his early career as a state prosecutor, which means he reads a fatal accident investigation the way the opposing insurance company's lawyers will, before they do.
              </p>
            </section>

            <section className="mt-12">
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

            <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
              Disclaimer: This article is provided for general informational purposes only and does not constitute legal advice. Reading this content does not create an attorney client relationship with McCulloch Law, P.A.
            </p>
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
