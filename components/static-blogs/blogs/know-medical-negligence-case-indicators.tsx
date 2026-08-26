import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { knowMedicalNegligenceCaseIndicatorsBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "Florida requires proof of duty, breach, causation, and damages.",
  "You generally have two years from discovery to file under Fla. Stat. 95.11(4)(b).",
  "A presuit notice, a corroborating expert affidavit, and a 90-day investigation window are mandatory before any lawsuit under Chapter 766.",
  "Tampa Bay hospitals, surgical centers, and clinics all fall under the same Florida statute.",
];

const stats = [
  { value: "250K+", label: "Estimated US deaths tied to medical errors each year" },
  { value: "2 YEARS", label: "Standard Florida discovery window to file a claim" },
  { value: "90 DAYS", label: "Mandatory presuit investigation before any lawsuit" },
];

const elementsRows = [
  {
    element: "Duty of Care",
    means: "A provider-patient relationship existed",
    example: "You were an established patient at the clinic",
  },
  {
    element: "Breach",
    means: "Care fell below the accepted medical standard",
    example: "The standard screening protocol was skipped",
  },
  {
    element: "Causation",
    means: "The breach directly caused the injury",
    example: "Delay in diagnosis allowed cancer to spread",
  },
  {
    element: "Damages",
    means: "Real, measurable harm resulted",
    example: "Additional surgery, lost wages, permanent limits",
  },
];

const warningSigns = [
  "A new provider seems surprised or troubled by your prior treatment plan.",
  "Your medical records contain gaps, late entries, or conflicting notes.",
  "You were never told about risks that a standard consent form usually covers.",
  "A condition that should have been caught early was diagnosed at a late, harder to treat stage.",
  "A hospital or provider is unusually slow to release your full chart.",
];

const timelineRows = [
  {
    stage: "Records Review",
    happens: "An attorney and medical expert examine your full chart for breach and causation",
    length: "2 to 8 weeks",
  },
  {
    stage: "Expert Affidavit",
    happens: "A medical expert with the same specialty signs a verified opinion supporting the claim",
    length: "2 to 4 weeks",
  },
  {
    stage: "Notice of Intent",
    happens: "Formal notice served on every provider named in the claim",
    length: "1 day to send",
  },
  {
    stage: "Pre-suit Investigation",
    happens: "The insurer or provider reviews the claim and must respond",
    length: "90 days minimum",
  },
  {
    stage: "Filing Suit",
    happens: "Complaint filed in circuit court if no fair settlement is reached",
    length: "60 days after presuit",
  },
];

const compensationItems = [
  "Past and future medical bills tied directly to the negligent act",
  "Lost wages and reduced future earning capacity",
  "Pain and suffering, calculated case by case rather than by a fixed formula",
  "Wrongful death damages for surviving family, filed within two years of the date of death",
];

const localKnowledgeItems = [
  "Tampa General and AdventHealth facilities route claims through in house risk management before insurers even see the file.",
  "Hillsborough County circuit court has specific case management timelines that affect how fast a claim moves.",
  "Local expert witnesses familiar with Tampa Bay hospital protocols carry more weight with area juries.",
];

const faqs = [
  {
    question: "Can I sue a hospital directly instead of the individual doctor?",
    answer:
      "Yes, if the negligent provider was a hospital employee, the hospital can usually be held vicariously liable under Florida law.",
  },
  {
    question: "Does Florida cap damages in medical negligence cases?",
    answer:
      "Florida's prior noneconomic damage caps were struck down by the state supreme court, so recoverable pain and suffering is not capped for most claims.",
  },
  {
    question: "Are birth injury cases treated differently in Florida?",
    answer:
      "Yes, claims involving minors follow a modified timeline, and certain severe birth injuries fall under a separate compensation plan.",
  },
  {
    question: "Can I still file if I signed paperwork at a walk-in urgent care clinic?",
    answer:
      "Yes, urgent care and walk-in clinics are held to the same standard of care requirements as hospitals and private practices.",
  },
  {
    question: "Do I need the exact same specialist to review my case?",
    answer:
      "Florida law requires your corroborating expert to practice in the same specialty as the provider you are pursuing a claim against.",
  },
  {
    question: "What if the negligence happened at a VA or county hospital?",
    answer:
      "Claims against government healthcare providers follow a separate two year filing deadline under recent Florida legislation, so timing matters even more.",
  },
];

const externalLinkRel = "nofollow noopener noreferrer";

export default async function KnowMedicalNegligenceCaseIndicators() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    knowMedicalNegligenceCaseIndicatorsBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== knowMedicalNegligenceCaseIndicatorsBlog.slug
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
                    name: "How to Know If You Have a Medical Negligence Case",
                    item: "https://www.mcfloridalaw.com/blogs/know-medical-negligence-case-indicators",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://www.mcfloridalaw.com/blogs/know-medical-negligence-case-indicators",
                },
                headline: "How to Know If You Have a Medical Negligence Case",
                name: "Medical Negligence Case Signs | Tampa FL Lawyer",
                description:
                  "Wondering if you have a medical negligence case in Florida? Learn the legal signs, timeline, and next steps from a Tampa Bay injury attorney.",
                url: "https://www.mcfloridalaw.com/blogs/know-medical-negligence-case-indicators",
                image:
                  "https://www.mcfloridalaw.com/images/static-blogs/know-medical-negligence-case-indicators.webp",
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Medical Negligence in Florida",
                  description:
                    "An overview of how to identify a potential medical negligence case in Florida, including duty of care, breach, causation, damages, warning signs, presuit requirements, and filing deadlines.",
                },
                keywords: [
                  "how to know if you have a medical negligence case",
                  "medical negligence case",
                  "medical negligence Florida",
                  "medical malpractice Florida",
                  "medical malpractice case indicators",
                  "medical negligence warning signs",
                  "Florida medical malpractice lawyer",
                  "Florida medical negligence claim",
                  "medical malpractice statute of limitations Florida",
                  "Florida Chapter 766",
                  "medical negligence presuit process",
                  "medical negligence attorney Tampa",
                  "Tampa medical malpractice lawyer",
                  "medical malpractice claim",
                  "personal injury lawyer",
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
                datePublished: "2026-08-23",
                dateModified: "2026-08-23",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can I sue a hospital directly instead of the individual doctor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, if the negligent provider was a hospital employee, the hospital can usually be held vicariously liable under Florida law.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Florida cap damages in medical negligence cases?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Florida's prior noneconomic damage caps were struck down by the state supreme court, so recoverable pain and suffering is not capped for most claims.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are birth injury cases treated differently in Florida?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, claims involving minors follow a modified timeline, and certain severe birth injuries fall under a separate compensation plan.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I still file if I signed paperwork at a walk-in urgent care clinic?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, urgent care and walk-in clinics are held to the same standard of care requirements as hospitals and private practices.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need the exact same specialist to review my case?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Florida law requires your corroborating expert to practice in the same specialty as the provider you are pursuing a claim against.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What if the negligence happened at a VA or county hospital?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Claims against government healthcare providers follow a separate two year filing deadline under recent Florida legislation, so timing matters even more.",
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
                  src={knowMedicalNegligenceCaseIndicatorsBlog.featuredImage.image.url}
                  alt={knowMedicalNegligenceCaseIndicatorsBlog.featuredImage.altText}
                  title={knowMedicalNegligenceCaseIndicatorsBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {knowMedicalNegligenceCaseIndicatorsBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                McCulloch Law P.A. | Tampa Bay Personal Injury Attorneys
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {knowMedicalNegligenceCaseIndicatorsBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published & Updated August 23, 2026 | McCulloch Law P.A. | Tampa Bay Personal Injury Attorneys
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                If a Florida healthcare provider departed from the accepted standard of care and that caused real, provable harm, then you may have a medical negligence case.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                However, not every bad outcome qualifies. The gap between a mistake and a compensable claim comes down to duty, breach, causation, and damages.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Key Takeaways
              </h2>
              <ul className="mt-5 grid gap-3">
                {takeaways.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-4 md:grid-cols-3 mb-12">
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="rounded-md bg-gray-50 border border-gray-200 p-5"
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

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Actually Counts as Medical Negligence in Florida
              </h2>
              <p>
                A doctor made a mistake another competent doctor would not have made. That mistake caused real harm. That is medical negligence under{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/766.102"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Fla. Stat. 766.102
                </a>
                . Nothing more complicated than that.
              </p>
              <p>
                Florida law draws a much tighter, sharper line than that, asking a very specific question. Did your caregiver act reasonably? If the answer is no, and that failure caused injury, you have the foundation of a claim. Some possible situations are -
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When a surgeon operates on the wrong site or leaves an instrument inside a patient.</li>
                <li>If your physician misreads clear imaging and delays a cancer diagnosis by months, that’s negligence.</li>
                <li>When a hospital discharges a patient with unstable vital signs and no follow up plan.</li>
                <li>A nurse administers the wrong medication dose despite a clear chart entry.</li>
                <li>If anesthesiologist neglects to check oxygen levels, you may have a claim.</li>
              </ul>
              <div className="rounded-md border-l-4 border-[#BA8E2D] bg-gray-50 p-6 italic text-gray-800 my-6">
                <p className="text-lg">
                  Attorney Drew McCulloch puts it plainly to clients in these first conversations. &quot;The question I ask is simple. Would another competent doctor, looking at the same chart, have done something different? If yes, we have something to investigate.&quot;
                </p>
                <p className="mt-3 font-semibold not-italic text-[#1B2639]">
                  That framing separates a true negligence case from an unfortunate but non-actionable complication.
                </p>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Four Legal Elements You Must Prove
              </h2>
              <p className="mt-4 leading-8 text-gray-700 mb-6">
                Every Florida medical negligence claim rests on four elements. Miss one, and the case falls apart regardless of how serious the injury was. This is where a lot of self-filed complaints get rejected before they reach a courtroom.
              </p>
              <div className="overflow-hidden rounded-md border border-gray-200">
                <div className="grid grid-cols-3 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-4">Element</div>
                  <div className="p-4">What It Means</div>
                  <div className="p-4">Example</div>
                </div>
                {elementsRows.map((row) => (
                  <div
                    key={row.element}
                    className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700"
                  >
                    <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                      {row.element}
                    </div>
                    <div className="p-4">{row.means}</div>
                    <div className="p-4">{row.example}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 leading-8 text-gray-700">
                Causation is usually where cases are won or lost. It is not enough to show a doctor made an error. You have to show that specific error, more likely than not, caused the harm you are living with now. That link almost always requires a qualified medical expert, which{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/766.203"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 766.203
                </a>{" "}
                makes mandatory before you can even file.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Are the Warning Signs of a Possible Case
              </h2>
              <p>
                Some red flags are obvious. Others surface weeks or months later, once a second doctor reviews the same file and asks why certain steps were skipped.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {warningSigns.map((sign, idx) => (
                  <li key={idx}>{sign}</li>
                ))}
              </ul>
              <div className="rounded-md border border-amber-200 bg-amber-50 p-6 text-amber-950 my-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Do Not Wait to Request Your Records
                </h3>
                <p className="mt-3 leading-7 text-gray-800">
                  Florida providers can take weeks to produce full medical records, and delays eat into your filing window. Request your complete chart the moment you suspect something went wrong, before memories fade and before the four year repose deadline moves closer.
                </p>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How the Florida Claims Timeline Actually Works
              </h2>
              <p className="mt-4 leading-8 text-gray-700 mb-6">
                Florida does not let you walk into court the day you suspect malpractice. Chapter 766 builds in a structured presuit process, and skipping a step can void the entire claim, according to{" "}
                <a
                  href="https://www.floridabar.org/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Bar
                </a>{" "}
                publications on the statute.
              </p>
              <div className="overflow-hidden rounded-md border border-gray-200">
                <div className="grid grid-cols-3 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-4">Stage</div>
                  <div className="p-4">What Happens</div>
                  <div className="p-4">Typical Length</div>
                </div>
                {timelineRows.map((row) => (
                  <div
                    key={row.stage}
                    className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700"
                  >
                    <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                      {row.stage}
                    </div>
                    <div className="p-4">{row.happens}</div>
                    <div className="p-4">{row.length}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 leading-8 text-gray-700">
                Add it up and most Florida medical negligence cases take four to six months just to reach the courthouse steps, and that is before litigation even begins. Firms that skip proper investigation to file fast often see cases dismissed on a technicality, which is why McCulloch Law builds every claim around a verified expert opinion first.
              </p>
            </section>

            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Not Sure If Your Case Qualifies?
              </h2>
              <p className="mt-4 leading-8">
                McCulloch Law P.A. offers a free, no obligation case review for Tampa Bay families facing a possible medical negligence claim.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <a
                  href="tel:8134442817"
                  className="inline-block bg-white px-6 py-3 font-semibold text-[#1B2639] rounded shadow-sm hover:bg-gray-100 transition"
                >
                  Call (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-white px-6 py-3 font-semibold text-white rounded hover:bg-white/10 transition"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Handling a Medical Negligence Claim Alone vs With a Lawyer
              </h2>
              <p className="mt-4 leading-8 text-gray-700 mb-6">
                Insurance carriers for hospitals and physicians employ full-time claims teams. Going in without counsel puts you at a structural disadvantage before the first letter is even sent.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-md border border-red-100 bg-red-50 p-6">
                  <h3 className="text-xl font-bold text-[#1B2639]">
                    WITHOUT A LAWYER
                  </h3>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                    <li>Missed presuit deadlines can void the claim entirely</li>
                    <li>No same specialty expert lined up to satisfy Chapter 766</li>
                    <li>Provider records requests routinely delayed or incomplete</li>
                    <li>Settlement offers based on medical bills alone, not future care</li>
                  </ul>
                </div>
                <div className="rounded-md border border-green-100 bg-green-50 p-6">
                  <h3 className="text-xl font-bold text-[#1B2639]">
                    WITH MCCULLOCH LAW
                  </h3>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                    <li>Presuit notice, affidavit, and filings tracked and served on time</li>
                    <li>Vetted medical experts matched to the exact specialty at issue</li>
                    <li>Formal records demands with statutory deadlines enforced</li>
                    <li>Full damages calculated, including lost earning capacity and future treatment</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 leading-8 text-gray-700 italic border-l-4 border-[#1B2639] pl-4">
                Attorney Drew McCulloch spent years as a state prosecutor before shifting to represent injured patients. That background means he knows how the other side builds a defense file, and he builds the claim to counter it from day one.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Compensation Looks Like in a Florida Case
              </h2>
              <p>
                Florida allows recovery for both economic and non economic losses in medical negligence claims, though the categories work differently than a typical car accident case.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {compensationItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p>
                Median settlements in Florida medical negligence cases tend to land well below the widely quoted national averages, largely because so many claims settle during the mandatory presuit window once an insurer sees a solid expert affidavit. A strong presuit package often moves faster than most families expect.
              </p>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 my-6">
                <p className="text-lg font-semibold text-[#1B2639] italic">
                  &quot;Insurers move fastest when they see a claim was built correctly the first time. A weak presuit filing invites delay. A strong one invites a real offer.&quot;
                </p>
                <p className="mt-3 text-sm text-[#BA8E2D] font-bold">
                  — Drew McCulloch, Esq., Personal Injury Attorney, McCulloch Law P.A.
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why Tampa Bay Patients Need Local Legal Knowledge
              </h2>
              <p>
                Hillsborough County circuit courts, Tampa General, and the network of clinics across Brandon, Riverview, and South Tampa each have their own claims patterns.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {localKnowledgeItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p>
                A firm that only knows the statute on paper misses how local hospital risk management teams actually negotiate. McCulloch Law P.A. is based on East Davis Boulevard in Tampa and has spent over 15 years working these exact courts.
              </p>
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

            <section className="mt-12 rounded-md bg-[#1B2639] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Think a Doctor or Hospital Let You Down?
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                Get a free, honest case review from a Tampa Bay attorney who has handled complex injury claims for over 15 years.
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
                  Visit mcfloridalaw.com/contact
                </Link>
              </div>
            </section>

            <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
              Disclaimer: This article is provided for general information only and does not constitute legal advice. Every medical negligence case depends on its specific facts. Contact McCulloch Law P.A. for a free consultation about your situation.
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
