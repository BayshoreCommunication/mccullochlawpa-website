import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { duiAccidentInjuryClaimBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "A DUI arrest and your personal injury claim are two separate legal actions.",
  "Florida PIP may cover up to $10,000, but serious DUI crash injuries often cost far more.",
  "Florida's modified comparative negligence rule can bar recovery if you are more than 50% at fault.",
  "DUI crash cases may support punitive damages, and Florida removes punitive damage caps when alcohol or drugs are involved.",
  "You generally have two years to file a negligence lawsuit, so fast evidence preservation matters.",
];

const stats = [
  { value: "30%", label: "Approximate share of U.S. traffic fatalities involving drunk drivers, according to NHTSA" },
  { value: "$10,000", label: "Typical Florida PIP policy limit for covered crash benefits" },
  { value: "2 years", label: "Florida deadline to file most negligence injury lawsuits" },
];

const impactStats = [
  { label: "Alcohol-confirmed crashes in Florida", value: "5,200+" },
  { label: "DUI-related deaths", value: "~400" },
  { label: "Serious injury cases", value: "~2,800" },
  { label: "Cases involving no insurance", value: "~1,100" },
];

const comparisonRows = [
  {
    factor: "Who files it?",
    criminal: "State of Florida",
    civil: "You, with your attorney",
  },
  {
    factor: "Standard of proof",
    criminal: "Beyond a reasonable doubt",
    civil: "Preponderance of the evidence",
  },
  {
    factor: "Goal",
    criminal: "Punish the drunk driver",
    civil: "Compensate your losses",
  },
  {
    factor: "Do you need a conviction?",
    criminal: "Not applicable",
    civil: "No",
  },
  {
    factor: "Covers your bills?",
    criminal: "No",
    civil: "Yes",
  },
  {
    factor: "Timeline",
    criminal: "Controlled by the court",
    civil: "You generally have 2 years to file",
  },
];

const claimSteps = [
  {
    title: "Separate the criminal case from your injury claim",
    text: "The prosecutor handles punishment. Your civil claim focuses on medical bills, lost wages, pain and suffering, property damage, and long-term financial recovery.",
  },
  {
    title: "Open PIP and get medical care quickly",
    text: "Florida PIP rules require initial medical care within 14 days. Missing that window can damage your ability to access no-fault benefits.",
  },
  {
    title: "Document intoxication and crash evidence",
    text: "Police reports, body camera footage, field sobriety evidence, blood or breath testing, witness statements, vehicle photos, and scene evidence can all matter.",
  },
  {
    title: "Identify every insurance source",
    text: "A strong claim may look at the drunk driver's bodily injury coverage, your uninsured motorist coverage, vehicle owner liability, and possible third-party liability.",
  },
  {
    title: "Evaluate punitive damages and settlement pressure",
    text: "When alcohol or drugs caused the crash, punitive damages can change negotiations because the case is no longer only about reimbursing bills.",
  },
];

const faqs = [
  {
    question: "Do I need a lawyer if the insurance company offers me money?",
    answer:
      "Yes. Insurance companies often offer quick checks before the full medical picture is clear. Talk with a lawyer before signing a release that gives up your right to seek more compensation.",
  },
  {
    question: "What if the drunk driver has no insurance?",
    answer:
      "Your lawyer can review your own policy for uninsured motorist coverage and investigate whether another person or business may share responsibility for the crash.",
  },
  {
    question: "How much does a DUI accident lawyer cost?",
    answer:
      "McCulloch Law handles injury claims on a contingency fee basis, which means you do not pay attorney fees unless there is a recovery.",
  },
  {
    question: "Can I get money if I was a passenger in the drunk driver's car?",
    answer:
      "Yes. Passengers have injury claim rights. Even if you knew the driver had been drinking, you may still have a claim depending on the facts and fault allocation.",
  },
  {
    question: "What evidence should I collect after a DUI crash?",
    answer:
      "Photos of the vehicles, road conditions, visible injuries, debris, bottles or cans, witness names, medical records, and the crash report can all help support your case.",
  },
];

const externalLinkRel = "nofollow noopener noreferrer";

export default async function DuiAccidentInjuryClaim() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    duiAccidentInjuryClaimBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== duiAccidentInjuryClaimBlog.slug
    ) || []),
  ];
  const recentBlogs = sidebarBlogs
    .filter((blog: any) => blog?.published && blog?.slug)
    .slice(0, 10);

  return (
    <>
      <BreadcrumbSection
        title="Blogs"
        subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
      />

      <main className="max-w-[1620px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          <article className="w-full lg:flex-1">
            <figure className="mb-8">
              <div className="relative w-full aspect-[725/438] overflow-hidden rounded-md">
                <Image
                  src={duiAccidentInjuryClaimBlog.featuredImage.image.url}
                  alt={duiAccidentInjuryClaimBlog.featuredImage.altText}
                  title={duiAccidentInjuryClaimBlog.featuredImage.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {duiAccidentInjuryClaimBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                DUI Accident Claims | Riverview, Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {duiAccidentInjuryClaimBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Updated 2026 | McCulloch Law | Central Florida Personal Injury
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                A DUI with an accident lawyer in Riverview handles your injury
                claim separately from the criminal case against the drunk driver.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                Florida law may allow recovery for medical bills, lost wages,
                pain and suffering, property damage, and punitive damages when
                alcohol or drugs caused the crash.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Key Takeaways
              </h2>
              <ul className="mt-5 grid gap-3">
                {takeaways.map((item) => (
                  <li
                    key={item}
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
                Why a DUI Arrest Is Not a Settlement
              </h2>
              <p>
                People often ask whether they automatically get paid because
                the drunk driver was arrested. The answer is no. A criminal DUI
                case is about punishment, license consequences, probation, jail,
                and public safety. The prosecutor does not represent you and
                does not recover your medical bills or missed wages.
              </p>
              <p>
                Your personal injury claim is a separate civil case. It can
                move forward even if the driver is released on bond, pleads to a
                different charge, or avoids a conviction. In a civil case, your
                attorney must show that it is more likely than not that the
                impaired driver caused your injuries.
              </p>
              <p>
                The{" "}
                <a
                  href="https://www.nhtsa.gov/risky-driving/drunk-driving"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  National Highway Traffic Safety Administration
                </a>{" "}
                reports that about 30% of U.S. traffic fatalities involve drunk
                drivers with BACs of .08 g/dL or higher.
              </p>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Florida DUI Crash Impact
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                DUI crash statistics are not abstract numbers. They represent
                people whose lives changed in seconds because someone chose to
                drive after drinking.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {impactStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-gray-200 bg-white p-5"
                  >
                    <div className="text-3xl font-bold text-[#BA8E2D]">
                      {item.value}
                    </div>
                    <p className="mt-2 text-gray-700">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-gray-500">
                Sources include NHTSA impaired-driving data and Florida crash
                reporting resources from{" "}
                <a
                  href="https://www.flhsmv.gov/resources/crash-citation-reports/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  FLHSMV
                </a>
                .
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Florida No-Fault Insurance and Your PIP Benefits
              </h2>
              <p>
                Florida is a no-fault state. That does not mean nobody is to
                blame. It means your own insurance usually pays first through
                Personal Injury Protection, commonly called PIP.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You must receive initial medical care within 14 days of the
                  crash to access PIP benefits.
                </li>
                <li>
                  PIP generally pays 80% of reasonable medical expenses and 60%
                  of covered lost income.
                </li>
                <li>
                  The limit is usually $10,000, which can disappear quickly
                  after an ambulance ride, emergency room visit, imaging, or
                  surgery consultation.
                </li>
              </ul>
              <p>
                The Florida PIP rules are outlined in{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/627.736"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 627.736
                </a>
                . A Riverview DUI accident lawyer can help pursue the remaining
                damages from the at-fault driver and other available insurance.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Criminal Case vs. Civil Injury Claim
              </h2>
              <div className="mt-6 overflow-hidden rounded-md border border-gray-200">
                <div className="grid grid-cols-3 bg-[#1B2639] text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-4">Factor</div>
                  <div className="p-4">Criminal Case</div>
                  <div className="p-4">Civil Claim</div>
                </div>
                {comparisonRows.map((row) => (
                  <div
                    key={row.factor}
                    className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700"
                  >
                    <div className="bg-gray-50 p-4 font-semibold text-[#1B2639]">
                      {row.factor}
                    </div>
                    <div className="p-4">{row.criminal}</div>
                    <div className="p-4">{row.civil}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Meeting the Serious Injury Threshold
              </h2>
              <p>
                Florida no-fault rules limit when an injured person can pursue
                pain and suffering. To step outside PIP and bring a broader
                injury claim, your injuries generally need to meet the serious
                injury threshold.
              </p>
              <p>
                A serious DUI crash may leave permanent injuries, scarring,
                loss of an important bodily function, or long-term pain. Medical
                records, specialist opinions, imaging, work restrictions, and
                treatment history help prove how the crash changed your life.
              </p>
            </section>

            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Was a Drunk Driver More Than 50% at Fault?
              </h2>
              <p className="mt-4 leading-8">
                Do not let the insurance company flip the blame. McCulloch Law
                fights to protect your full recovery after a Riverview DUI
                crash.
              </p>
              <a
                href="tel:8134442817"
                className="mt-5 inline-block bg-white px-6 py-3 font-semibold text-[#1B2639]"
              >
                Call (813) 444-2817
              </a>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The New 50% Fault Rule in Florida
              </h2>
              <p>
                Florida uses modified comparative negligence. Under{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2023/768.81"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.81
                </a>
                , a person found greater than 50% at fault for their own harm
                may not recover damages in most negligence actions.
              </p>
              <p>
                Insurance companies may argue that you were speeding, distracted,
                or partly responsible. Your lawyer can use crash reconstruction,
                traffic camera footage, police evidence, toxicology evidence,
                witnesses, and vehicle damage patterns to keep the focus on the
                impaired driver.
              </p>
            </section>

            <section className="grid gap-5 md:grid-cols-2 my-12">
              <div className="rounded-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Punitive Damages
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  In a normal crash, damages usually focus on compensation. In a
                  DUI crash, punitive damages may also punish reckless conduct
                  and pressure the insurer to take the claim seriously.
                </p>
              </div>
              <div className="rounded-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  No Alcohol-Related Cap
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Under{" "}
                  <a
                    href="https://www.flsenate.gov/Laws/Statutes/2024/768.736"
                    target="_blank"
                    rel={externalLinkRel}
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    Florida Statute 768.736
                  </a>
                  , punitive damage caps do not apply when the defendant was
                  impaired by alcohol or drugs, or had a BAC of .08 or higher.
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Holding Bars Liable With Dram Shop Laws
              </h2>
              <p>
                Sometimes the drunk driver is not the only potential defendant.
                A bar, restaurant, or other alcohol provider may be investigated
                when the facts suggest unlawful service contributed to the
                crash.
              </p>
              <p>
                Florida's dram shop law,{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2024/0768.125"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 768.125
                </a>
                , is narrow. A business may become liable if it willfully and
                unlawfully serves a minor or knowingly serves someone habitually
                addicted to alcohol. These cases require fast investigation,
                receipts, video, witnesses, and proof of what the business knew.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How McCulloch Law Builds Your DUI Injury Claim
              </h2>
              <div className="mt-6 grid gap-4">
                {claimSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-4 rounded-md border border-gray-200 p-5 md:grid-cols-[70px_1fr]"
                  >
                    <div className="text-3xl font-bold text-[#BA8E2D]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1B2639]">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-gray-700">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2 mb-12">
              <div className="rounded-md border border-red-100 bg-red-50 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Waiting Too Long
                </h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                  <li>Witness memories fade and video can be erased.</li>
                  <li>PIP benefits may be limited if treatment is delayed.</li>
                  <li>Insurance adjusters may push a quick low settlement.</li>
                  <li>The two-year filing deadline can pass before you know it.</li>
                </ul>
              </div>
              <div className="rounded-md border border-green-100 bg-green-50 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  With McCulloch Law
                </h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                  <li>Evidence is preserved early.</li>
                  <li>Insurance coverage is investigated fully.</li>
                  <li>Punitive damages are evaluated from the start.</li>
                  <li>Your medical, wage, and pain claims are documented.</li>
                </ul>
              </div>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Taking Care of Your DUI Claim in Riverview
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                A DUI accident does not end at the crash scene. It often gets
                harder when medical bills arrive, your car is unavailable, and
                the insurance company starts asking questions. If a drunk driver
                hit you in Riverview, McCulloch Law can help you understand the
                claim, the deadline, and the evidence needed to fight for a full
                recovery.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold">McCulloch Law | DUI Accident Claims</p>
                <p>238 East Davis Boulevard, Ste. 202, Tampa, FL 33606</p>
                <p>Serving Riverview and Central Florida</p>
                <a
                  href="tel:8134442817"
                  className="mt-2 inline-block font-semibold text-[#BA8E2D]"
                >
                  (813) 444-2817
                </a>
              </div>
            </section>

            <section>
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
                Time Is Running. Two Years Goes Fast.
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                A Riverview DUI accident lawyer is ready to fight for your full
                recovery after a drunk-driving crash.
              </p>
              <a
                href="tel:8134442817"
                className="mt-5 inline-block bg-white px-6 py-3 font-semibold text-[#1B2639]"
              >
                Free Case Review: (813) 444-2817
              </a>
            </section>

            <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
              Disclaimer: This article is for general informational purposes and
              does not form an attorney-client relationship. For help with any
              personal injury or criminal case, reach out to McCulloch Law.
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
                  <Image
                    width={120}
                    height={120}
                    src={
                      blog.featuredImage?.image?.url ||
                      "/images/placeholder.jpg"
                    }
                    alt={blog.featuredImage?.altText || blog.title}
                    className="w-[100px] h-auto rounded"
                  />
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
