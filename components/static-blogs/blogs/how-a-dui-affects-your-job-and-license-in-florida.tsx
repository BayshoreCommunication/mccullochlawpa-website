import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { howADuiAffectsYourJobAndLicenseInFloridaBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const keyPoints = [
  "The DHSMV license suspension is separate from the criminal case and starts the moment you're arrested.",
  "Florida law bars adjudication withheld for DUI, meaning a plea or guilty finding becomes a permanent conviction.",
  "CDL holders face federal disqualification rules stricter than any state license.",
  "Licensed professionals, nurses, teachers, agents, often have independent duties to self-report.",
];

const statCards1 = [
  { value: "10", label: "DAYS TO REQUEST A DHSMV HEARING OR HARDSHIP LICENSE" },
  { value: "180", label: "DAY MINIMUM LICENSE SUSPENSION, FIRST DUI, IF YOU TESTED" },
  { value: ".08", label: "BAC THAT TRIGGERS A DUI IN FLORIDA (.04 FOR CDL HOLDERS)" },
  { value: "0", label: "CHANCE OF ADJUDICATION WITHHELD ON A FLORIDA DUI PLEA" },
];

const firstTenDaysList = [
  "Your citation functions as a driving permit for exactly 10 days from arrest, no exceptions for weekends or holidays.",
  "You can request a formal review hearing with the Bureau of Administrative Reviews to challenge the suspension outright.",
  "Or you can accept a hardship license, business purposes only, in exchange for waiving the formal hearing.",
  "Miss the window and the suspension becomes automatic on day 11, with the hard-time period starting immediately.",
];

const timelineSteps = [
  {
    step: "01",
    title: "Arrest & 10-Day Window",
    description:
      "Citation doubles as a temporary permit. The clock to save your license starts now.",
  },
  {
    step: "02",
    title: "Administrative Fight",
    description:
      "Formal review hearing or hardship license application filed with DHSMV.",
  },
  {
    step: "03",
    title: "Criminal Defense",
    description:
      "Stop, testing, and procedure challenged in county court, separate from the license case.",
  },
  {
    step: "04",
    title: "Resolution & Disclosure",
    description:
      "Mandatory conviction if guilty. Board and employer disclosure obligations mapped out.",
  },
];

const suspensionRows = [
  { tier: "1st DUI (tested)", duration: "6–12 mo", note: "Standard first offense suspension" },
  { tier: "1st DUI (refusal)", duration: "12 mo", note: "1 year administrative suspension" },
  { tier: "2nd DUI, within 5 yrs", duration: "60 mo", note: "5 year mandatory revocation" },
  { tier: "3rd DUI, within 10 yrs", duration: "120 mo", note: "10 year mandatory revocation" },
];

const backgroundCheckPoints = [
  "A conviction reads differently than an arrest alone, and Florida's mandatory-adjudication rule guarantees a conviction on any guilty finding.",
  "Sealing and expungement are both off the table for a DUI conviction under current Florida law.",
  "Government, law enforcement, and certain regulated industries can see records even when sealing would otherwise apply.",
  "A charge that gets reduced to reckless driving before conviction is a different animal entirely, and may remain sealable.",
];

const cdlPoints = [
  "1st DUI conviction: a one-year CDL disqualification, sometimes longer with hazardous materials involved.",
  "2nd DUI conviction: lifetime disqualification under federal law, with reinstatement possible only after 10 years in limited cases.",
  "A refusal to submit to testing carries the same disqualifying weight as a conviction under FMCSA rules.",
  "The FMCSA Drug and Alcohol Clearinghouse now shares data across state lines, so an out-of-state DUI follows a Florida CDL home.",
];

const licensedProfessionalsRows = [
  {
    profession: "Nurses / Healthcare",
    body: "Florida Board of Nursing / DOH",
    trigger: "Any criminal disposition, self-reported",
  },
  {
    profession: "Teachers",
    body: "Florida Dept. of Education",
    trigger: "Certification review, possible revocation",
  },
  {
    profession: "Realty Agents",
    body: "Florida Business and Professional Regulation (DBPR)",
    trigger: "Timely disclosure of conviction or plea",
  },
  {
    profession: "Attorneys",
    body: "The Florida Bar",
    trigger: "Notice within 10 days of qualifying arrest",
  },
  {
    profession: "CDL Holders",
    body: "FMCSA / DHSMV",
    trigger: "Conviction or test refusal, on or off duty",
  },
];

const faqs = [
  {
    question: "Can I get a DUI if I was just sleeping while parked?",
    answer:
      "You bet you can. Florida looks at actual physical control. If the keys are anywhere near you while you snooze in the backseat, the state figures you could turn that ignition whenever you feel like it.",
  },
  {
    question: "Does the state actually tow and lock up your car after a conviction?",
    answer:
      "They sure do. For your first offense, your car will be impounded for a mandatory 10 day period. Your vehicle will be placed on its own impound schedule meaning your responsibility for payment to recover your vehicle.",
  },
  {
    question: "Is a DUI conviction in another state like a Florida DUI?",
    answer:
      "All the states have reciprocity agreements with Florida. So that any DUI conviction in another state will be treated as a DUI in Florida for the purpose of your Florida license and your CDL license.",
  },
  {
    question: "How long do you have to carry that high cost FR-44 insurance policy?",
    answer:
      "You are stuck with it for three straight years starting the moment you get your license back. It demands much higher coverage limits than normal car insurance.",
  },
];

const externalLinkRel = "nofollow noopener noreferrer";

export default async function HowADuiAffectsYourJobAndLicenseInFlorida() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    howADuiAffectsYourJobAndLicenseInFloridaBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== howADuiAffectsYourJobAndLicenseInFloridaBlog.slug
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
                    name: "How a DUI Affects Your Job and License in Florida",
                    item: "https://www.mcfloridalaw.com/blogs/how-a-dui-affects-your-job-and-license-in-florida",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://www.mcfloridalaw.com/blogs/how-a-dui-affects-your-job-and-license-in-florida",
                },
                headline: "How a Florida DUI Arrest Affects Your Job and License",
                name: "How a DUI Affects Your Job and License in Florida",
                description:
                  "Florida DUI convictions can’t be sealed and appear on background checks forever. Learn what steps to take during the critical 10 day DHSMV window.",
                url: "https://www.mcfloridalaw.com/blogs/how-a-dui-affects-your-job-and-license-in-florida",
                image:
                  "https://www.mcfloridalaw.com/images/static-blogs/how-a-dui-affects-your-job-and-license-in-florida.webp",
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "How a DUI Affects Your Job and License in Florida",
                  description:
                    "An overview of how a DUI arrest and conviction impacts driver's license status, employment, professional licensing, CDL status, background checks, and legal defense in Florida.",
                },
                keywords: [
                  "How a DUI Affects Your Job and License in Florida",
                  "Florida DUI license suspension",
                  "DHSMV 10 day hearing",
                  "Florida DUI background check",
                  "DUI adjudication withheld Florida",
                  "Florida Statute 316.193",
                  "Florida Statute 316.656",
                  "CDL DUI disqualification Florida",
                  "FR-44 insurance Florida",
                  "Tampa DUI defense lawyer",
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
                datePublished: "2026-09-22",
                dateModified: "2026-09-22",
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
                  src={howADuiAffectsYourJobAndLicenseInFloridaBlog.featuredImage.image.url}
                  alt={howADuiAffectsYourJobAndLicenseInFloridaBlog.featuredImage.altText}
                  title={howADuiAffectsYourJobAndLicenseInFloridaBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {howADuiAffectsYourJobAndLicenseInFloridaBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                McCulloch Law P.A. | Tampa Bay Criminal Defense Attorneys
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {howADuiAffectsYourJobAndLicenseInFloridaBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: September 22, 2026 | Updated: September 22, 2026 | McCulloch Law P.A. | Tampa Bay Criminal Defense Attorneys
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                A Florida DUI arrest leads to a license suspension within 10 days and if convicted, a criminal conviction that can&apos;t be sealed or expunged. This can lead to a commercial driver&apos;s CDL being suspended, a report to the appropriate licensing board, or show up on background checks for years to come.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Key points:
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

            {/* Intro Lead & Stat Cards */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <p>
                Florida DUIs split into two tracks the moment handcuffs go on, a{" "}
                <span className="font-bold text-[#1B2639]">civil license case</span>{" "}
                run by the{" "}
                <a
                  href="https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/florida-dui-administrative-suspension-laws/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Department of Highway Safety and Motor Vehicles
                </a>{" "}
                and a <span className="font-bold text-[#1B2639]">criminal case</span>{" "}
                run by the county court. Miss a deadline on either track and the fallout reaches past the courtroom into your paycheck, your commute, and in some professions, your license to work at all.
              </p>
            </section>

            {/* Stat Cards */}
            <section className="grid gap-4 md:grid-cols-4 mb-12">
              {statCards1.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md bg-[#1B2639] border border-gray-200 p-5 text-center text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#BA8E2D]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-gray-200 uppercase font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </section>

            {/* Section 1: Why a DUI Splits Into Two Separate Cases */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why a DUI Splits Into Two Separate Cases
              </h2>
              <p>
                Florida treats your driving privilege and your criminal liability as two different questions, decided by two different bodies, on two different timelines. Your arresting officer confiscates your physical license and hands you a citation that doubles as a{" "}
                <span className="font-bold text-[#1B2639]">10-day temporary driving permit</span>. Under Florida Statute 316.193, a DUI requires proof your normal faculties were impaired or a blood or breath alcohol level of .08 or higher. That&apos;s the criminal standard. Meanwhile, the{" "}
                <a
                  href="https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/florida-dui-administrative-suspension-laws/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  DHSMV&apos;s administrative suspension
                </a>{" "}
                kicks in independently, based solely on the test result or your refusal to test, regardless of what happens later in court.
              </p>
              <p>
                That last point trips up more people than any other part of a DUI. Beat the criminal charge entirely and your license can still stay suspended, because the administrative case answers a different question and runs on its own clock. The reverse is also true: a favorable administrative hearing doesn&apos;t touch the criminal charge sitting on the county docket.
              </p>

              <div className="my-6 rounded-md border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                  What Happens Inside the First 10 Days
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {firstTenDaysList.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#BA8E2D] font-bold">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Steps Component */}
              <div className="my-8">
                <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                  How the Two Tracks Unfold
                </h3>
                <div className="space-y-4">
                  {timelineSteps.map((stepItem) => (
                    <div
                      key={stepItem.step}
                      className="rounded-md border border-gray-200 bg-white p-5 shadow-sm flex flex-col md:flex-row md:items-center gap-4"
                    >
                      <div className="bg-[#1B2639] text-[#BA8E2D] text-xl font-bold px-4 py-2 rounded text-center shrink-0">
                        {stepItem.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1B2639]">
                          {stepItem.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-6">
                          {stepItem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2: How Long a Suspension Truly Lasts */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Long a Suspension Truly Lasts
              </h2>
              <p>
                Suspension length depends on whether you tested, refused, or have prior DUIs on your record. The{" "}
                <a
                  href="https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/florida-dui-administrative-suspension-laws/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  DHSMV&apos;s own published guidance
                </a>{" "}
                lays out the tiers, and they escalate fast. A first offense with a test result is a matter of months. A refusal, or a second offense within five years, moves into years.
              </p>

              <div className="overflow-hidden rounded-md border border-gray-200 my-6">
                <div className="grid grid-cols-2 bg-[#1B2639] text-xs md:text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-3 md:p-4">Offense Tier</div>
                  <div className="p-3 md:p-4 text-right">Suspension Duration</div>
                </div>
                {suspensionRows.map((row) => (
                  <div
                    key={row.tier}
                    className="grid grid-cols-2 border-t border-gray-200 text-gray-700 text-sm"
                  >
                    <div className="bg-gray-50 p-3 md:p-4 font-semibold text-[#1B2639]">
                      {row.tier}
                    </div>
                    <div className="p-3 md:p-4 text-right font-bold text-[#BA8E2D]">
                      {row.duration}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 italic">
                Note: bars use a compressed scale so shorter suspensions stay legible next to longer ones. A 4th conviction, any time, is a permanent license revocation under Florida law.
              </p>

              <p>
                A hardship license, formally a{" "}
                <span className="font-bold text-[#1B2639]">Business Purposes Only</span>{" "}
                or{" "}
                <span className="font-bold text-[#1B2639]">Employment Purposes Only</span>{" "}
                license, only covers driving to work, school, medical care, and DUI school. Florida also requires an{" "}
                <a
                  href="https://www.wsj.com/buyside/personal-finance/auto-insurance/what-is-an-fr-44"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  FR-44 financial responsibility filing
                </a>{" "}
                for DUI-related reinstatements, a higher-liability standard than the standard{" "}
                <a
                  href="https://www.progressive.com/answers/sr-22/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  SR-22
                </a>{" "}
                most other suspensions require. Drive outside those restrictions and you risk a fresh criminal charge for driving on a suspended license, stacked on top of the DUI you&apos;re already fighting.
              </p>
            </section>

            {/* Section 3: The Legal Trap That Most Drivers Never Expect */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Legal Trap That Most Drivers Never Expect
              </h2>
              <p>
                Florida laws allow judges to withhold adjudication on various criminal charges, letting a defendant walk away from a crime without a conviction on their record. However, DUI is one of the few offenses that don&apos;t allow such a deal. According to{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.656.html"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 316.656
                </a>
                , it&apos;s unlawful for any court to suspend, defer or withhold adjudication of guilt for a DUI violation. In other words, you either plead guilty or are found guilty, there&apos;s no third option as far as Florida laws are concerned.
              </p>

              <div className="rounded-md border-l-4 border-[#BA8E2D] bg-gray-50 p-6 italic text-gray-800 my-6">
                <p className="text-lg">
                  &quot;Clients hear &apos;adjudication withheld&apos; from a friend who beat a different charge and assume it applies here. It doesn&apos;t, not for DUI. The fight has to happen before the plea, not after. Once you&apos;re convicted, the record is the record.&quot;
                </p>
                <p className="mt-3 font-semibold not-italic text-[#1B2639]">
                  — Drew McCulloch, Former State Prosecutor, McCulloch Law, P.A.
                </p>
              </div>
            </section>

            {/* Section 4: What Shows Up on a Background Check */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Shows Up on a Background Check
              </h2>
              <p>
                A DUI conviction, being mandatory and unsealable, will surface on any standard Level 2 background check that Florida employers, landlords and licensing boards routinely run.
              </p>
              <ul className="mt-4 grid gap-3">
                {backgroundCheckPoints.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                  >
                    ● {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5: Commercial Drivers Face a Second, Harsher Rulebook */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Commercial Drivers Face a Second, Harsher Rulebook
              </h2>
              <p>
                If you hold a CDL, Florida&apos;s .08 threshold isn&apos;t the number that matters most. Federal regulations, specifically{" "}
                <a
                  href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  49 CFR Part 383
                </a>
                , upheld by the{" "}
                <a
                  href="https://www.fmcsa.dot.gov/taxonomy/term/13351"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Federal Motor Carrier Safety Administration
                </a>
                , establishes a <span className="font-bold text-[#1B2639]">BAC of 0.04%</span> as the allowable limit for commercial drivers. And even if you are off duty, you are still held to this standard when operating your own personal vehicle.
              </p>
              <ul className="mt-4 grid gap-3">
                {cdlPoints.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                  >
                    ● {item}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                Note: The{" "}
                <a
                  href="https://clearinghouse.fmcsa.dot.gov/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  FMCSA Drug and Alcohol Clearinghouse
                </a>{" "}
                now shares data across state lines, so an out-of-state DUI follows a Florida CDL home.
              </p>
            </section>

            {/* Section 6: Licensed Professionals Answer to a Board */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Licensed Professionals Answer to a Board
              </h2>
              <p>
                In licensing cases, the failure to disclose often draws harsher discipline than the DUI itself. A board can tolerate a mistake. Boards built around trust and public safety have a much harder time tolerating a professional who tried to hide one.
              </p>

              <div className="overflow-hidden rounded-md border border-gray-200 my-6">
                <div className="grid grid-cols-3 bg-[#1B2639] text-xs md:text-sm font-bold uppercase tracking-wide text-white">
                  <div className="p-3 md:p-4">Profession</div>
                  <div className="p-3 md:p-4">Regulating Body</div>
                  <div className="p-3 md:p-4">Typical Trigger</div>
                </div>
                {licensedProfessionalsRows.map((row) => (
                  <div
                    key={row.profession}
                    className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 text-gray-700 text-sm"
                  >
                    <div className="bg-gray-50 p-3 md:p-4 font-semibold text-[#1B2639]">
                      {row.profession}
                    </div>
                    <div className="p-3 md:p-4">{row.body}</div>
                    <div className="p-3 md:p-4">{row.trigger}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: What We're Seeing on the Ground in Hillsborough County */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What We&apos;re Seeing on the Ground in Hillsborough County
              </h2>
              <p>
                Our internal review of recent Tampa Bay DUI matters shows a consistent pattern. People who contacted us within the first 48 hours were able to either get our office to request a formal administrative review, or obtain a hardship license much more often than those that waited until later in the week. This pattern continues to repeat itself when the criminal case is set for arraignment; people who contact us earlier can challenge the validity of the stop, the breathalyzer, or even the police paperwork itself, long after a DUI charge has been issued.
              </p>
              <p>
                Statewide numbers back up how much is riding on the plea decision. Florida&apos;s own court-outcome data puts the statewide DUI guilty rate at roughly{" "}
                <span className="font-bold text-[#1B2639]">91.9%</span>, with adjudication withheld carved out in only about 2.1% of cases, almost always because the charge itself was reduced before conviction, not because a withhold was granted on the DUI itself.{" "}
                <a
                  href="https://drivesoberfl.com/data/"
                  target="_blank"
                  rel={externalLinkRel}
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Statewide traffic fatality data
                </a>{" "}
                also shows impaired driving factored into roughly 29% of Florida&apos;s traffic fatalities in recent years, which explains why prosecutors and licensing boards alike treat these cases with so little flexibility.
              </p>
            </section>

            {/* Section 8: Protect the License and the Livelihood, Not Just the Case */}
            <section className="space-y-5 text-gray-700 leading-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Protect the License and the Livelihood, Not Just the Case
              </h2>
              <p>
                Attorney <span className="font-bold text-[#1B2639]">Drew McCulloch</span>, a former Hillsborough County prosecutor who has tried more than 100 cases to verdict, built McCulloch Law, P.A. specifically to run the criminal defense and the license defense together. That&apos;s the coordination that keeps a single bad night from becoming a permanent mark on your license, your CDL, or your professional standing. Learn more about how the firm{" "}
                <Link
                  href="/dui-defense-attorney"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  handles DUI defense in Tampa
                </Link>
                , or review{" "}
                <Link
                  href="/about"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Drew McCulloch&apos;s background as a trial attorney
                </Link>{" "}
                before your consultation.
              </p>
              <p>
                If a DUI is putting your license, your CDL, or your professional standing at risk, the{" "}
                <Link
                  href="/criminal-defense-attorney"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  firm&apos;s criminal defense practice
                </Link>{" "}
                is built to fight both fronts at once, starting the moment you call.
              </p>
            </section>

            {/* CTA Box */}
            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Don&apos;t Face DHSMV and the Courtroom Alone
              </h2>
              <p className="mt-4 leading-8">
                Protect your driving privileges, career, and future with experienced DUI defense in Tampa Bay.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
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
                  Contact McCULLOCH LAW Today →
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                FAQ
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

            {/* Bottom CTA Banner */}
            <section className="mt-12 rounded-md bg-[#1B2639] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Facing a DUI Charge and Critical 10-Day DHSMV Window?
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                Talk to a former prosecutor who now defends Tampa Bay drivers. Free, confidential, available around the clock.
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
                  Contact McCulloch Law, P.A. Today →
                </Link>
              </div>
            </section>

            <div className="mt-10 border-t border-gray-200 pt-6 space-y-3 text-sm leading-6 text-gray-500">
              <p>
                Disclaimer: This article is for general informational purposes and does not form an attorney-client relationship. For help with a DUI defense matter in Florida, contact McCulloch Law, P.A.
              </p>
              <p className="font-semibold text-gray-700">
                McCulloch Law, P.A. | 238 East Davis Boulevard, Ste 202, Tampa, FL 33606 | Serving Tampa, Brandon, and all of Hillsborough County
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
