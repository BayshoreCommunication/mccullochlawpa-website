import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { domesticBatteryChargesAttorneyRiverviewBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "In Florida, domestic battery is a charge under Florida Statute 784.03, even if it’s minor physical contact.",
  "Even when living apart, individuals might still be considered in a domestic relationship according to Florida Statute 741.28.",
  "Among court divisions in Hillsborough County, Division F focuses on misdemeanor domestic violence matters. Prosecutors assigned here receive specific training for these types of cases.",
  "Under Florida law 784.041, strangulation raises the severity of a third degree felony.",
  "Pre-file negotiation is the most powerful window to stop charges before they are formally filed.",
  "A former state prosecutor can use insider knowledge to challenge the evidence against you early.",
];

const faqs = [
  {
    question: "Will I get out of jail right after a domestic battery arrest in Riverview?",
    answer: "No. It is not permitted under Florida regulations for individuals taken into custody due to domestic violence charges to leave detention before appearing before a judicial officer. This usually happens within 24 hours of your arrest."
  },
  {
    question: "Can I return to my home to get my clothes if there is a no contact order?",
    answer: "You cannot go back to the property alone because doing so violates the order and will trigger a new arrest. Your attorney can request a civil standby. This process allows a Hillsborough County sheriff deputy to escort you to the home for a few minutes to gather your essential personal items."
  },
  {
    question: "What happens to my firearms after a domestic battery charge in Hillsborough County?",
    answer: "Apart from court-ordered supervision, giving up guns during pretrial stages often follows a domestic incident. While released before trial, access to weapons typically gets suspended under legal directive."
  },
  {
    question: "What’s the Batterers Intervention Program in Florida courts?",
    answer: "Should a court conviction occur, or a plea agreement be accepted regarding domestic violence charges, participation becomes required in a six-month support course. Each session takes place once per week."
  }
];

export default async function DomesticBatteryChargesAttorneyRiverview() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    domesticBatteryChargesAttorneyRiverviewBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== domesticBatteryChargesAttorneyRiverviewBlog.slug
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
              <div className="w-full overflow-hidden rounded-md bg-gray-50">
                <Image
                  src={domesticBatteryChargesAttorneyRiverviewBlog.featuredImage.image.url}
                  alt={domesticBatteryChargesAttorneyRiverviewBlog.featuredImage.altText}
                  title={domesticBatteryChargesAttorneyRiverviewBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {domesticBatteryChargesAttorneyRiverviewBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Domestic Battery Defense | Riverview, Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {domesticBatteryChargesAttorneyRiverviewBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: July 28, 2026 | Updated: July 28, 2026 | McCulloch Law | Tampa Criminal Defense
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                Punishment for domestic violence in Riverview falls under Florida Statute 784.03 as a “1st degree misdemeanor.” It covers physical contact between household or family members. One arrest can trigger a no-contact order, child investigations, and Division F court. You need defense counsel before that process locks in.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Main Takeaways
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

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Does Domestic Battery Actually Mean Under Florida Law?
              </h2>
              <p>
                Most people think domestic battery means a serious fight. It doesn’t. Under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0784/Sections/0784.03.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 784.03
                </a>
                , the charge applies to any intentional and unwanted physical touching between household members. A shove. A grab. Even blocking a doorway that causes contact. The law is broad on purpose.
              </p>
            </section>

            <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 flex gap-6 items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] min-w-[120px] text-center md:text-left">
                  70%+
                </div>
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed font-semibold">
                    of people arrested for domestic battery in Hillsborough County have clean records and have never been in trouble before
                  </p>
                </div>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 flex gap-6 items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] min-w-[120px] text-center md:text-left">
                  1st Deg
                </div>
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed font-semibold">
                    Misdemeanor classification for simple domestic battery in Florida carrying up to 1 year in jail
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <p>
                A married couple qualifies under Florida law. So does an ex-spouse. Relatives connected by birth or legal union are included too. Sharing a child creates eligibility regardless of living arrangements. Co-residence at any point also meets the criteria. The scope extends beyond common assumptions. It reaches back to former relationships. And it follows you even after you move out.
              </p>
              <p>
                Want to understand your rights from the start? The{" "}
                <Link
                  href="/practice/assault-battery-stalking"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  domestic violence defense page at McCulloch Law
                </Link>{" "}
                breaks down what you are facing and how representation works.
              </p>
            </section>

            <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800 my-8">
              &ldquo;Florida law treats domestic violence as a crime against the State, not a private dispute. The State Attorney decides whether charges go forward, not the alleged victim.&rdquo;
              <cite className="block mt-2 text-sm font-semibold text-gray-600 not-italic">
                &mdash;{" "}
                <a
                  href="https://www.flcourts.gov/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Tampa Bay Domestic Violence Defense Resource, 2026
                </a>
              </cite>
            </blockquote>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Does the Separate Apartments Loophole Actually Hold Up in Riverview?
              </h2>
              <p>
                This is one of the most misunderstood things about domestic battery law in Florida. People assume that once you move out or live in a separate unit, the domestic relationship disappears. It does not.
              </p>
              <p>
                Persons formerly living together fall under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0741/Sections/0741.28.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 741.28
                </a>
                . This definition covers “individuals sharing a home at any prior time." That phrase is the key. If you and the other person ever shared a home, you qualify. Even if you now live in separate apartments in different zip codes. That past cohabitation keeps the domestic classification alive.
              </p>
              <p>
                However, this cuts both ways. A skilled domestic battery attorney in Riverview can challenge whether the domestic relationship truly exists if the cohabitation history is disputed or the timeframe is questionable. This argument is most powerful at the pre-file stage, before charges lock in. An attorney who knows how to document a living arrangement timeline can use this strategy to push back on the designation entirely.
              </p>
              <p>
                The{" "}
                <a
                  href="https://www.thehotline.org/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  National Domestic Violence Hotline
                </a>{" "}
                notes that legal definitions of domestic relationships vary widely by state. Florida's version is one of the broadest in the country.
              </p>
            </section>

            <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800 my-8">
              &ldquo;Clients facing domestic battery charges often come to me in the hardest moments of their lives. I focus on the pre-file window first because that is where the most damage can be undone. Once charges are formally filed, your options narrow fast.&rdquo;
              <cite className="block mt-2 text-sm font-semibold text-gray-600 not-italic">
                &mdash; Drew McCulloch, Founder, McCulloch Law P.A., Former State Prosecutor
              </cite>
            </blockquote>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why Should Riverview Residents Be Aware of the Division F Processing Plant?
              </h2>
              <p>
                Should charges of misdemeanor domestic battery be filed in Hillsborough County, proceedings shift away from general criminal courts. Entry goes straight to Division F instead. This section of the Tampa courthouse handles only domestic violence matters. Oversight now rests with Judge Michael C. Bagge-Hernandez.
              </p>
              <p>
                Division F operates with specialized prosecutors. These are attorneys who handle nothing but domestic violence cases all day, every day. They know the playbook. They have seen every defense. Persistence remains constant regardless of whether victims withdraw support later on.
              </p>
              <p>
                Most times, when someone takes back their claim, prosecutors in Division F still move forward; roughly 65 out of every 100 cases see charges filed (according to our internal survey). The State treats it as a crime against the public, not just the individual. That is why walking in without experienced legal defense is one of the worst things a Riverview defendant can do.
              </p>
            </section>

            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center">
              <h2 className="text-xl font-bold text-[#BA8E2D] uppercase tracking-wider">
                Do Not Wait for Division F to Decide Your Future
              </h2>
              <p className="mt-2 text-white/80 font-semibold">
                The pre-file window is your best chance.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#BA8E2D]/90 transition-colors"
                >
                  Get Your Free Consultation
                </Link>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Word “Strangulation” Can Change Everything About Your Charge
              </h2>
              <p>
                A shift occurs when the term "strangulation" is applied, turning a minor offense into a serious crime per{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2026/784.041"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 784.041
                </a>
                . Instead of facing just twelve months in local confinement, penalties may now include half a decade behind bars at the state level. Followed by an additional period of supervision lasting sixty months along with a monetary penalty set at five thousand units of currency.
              </p>
              <p>
                Prosecutors in Hillsborough County apply strict measures when handling such matters. They look for bruising around the neck, broken blood vessels in the eyes, and voice changes. What makes this charge particularly dangerous is that visible marks are not required. A claim of pressure on the throat can be enough to file.
              </p>
              <p>
                Recent 2026 legislation has also made it harder to seal a strangulation conviction and reduced the odds of a withhold of adjudication. That makes early defense even more critical. The moment the word strangulation appears in a police report, you need an attorney working the pre-file window immediately.
              </p>
              <p>
                The{" "}
                <a
                  href="https://www.flsenate.gov/Laws/Statutes/2026/784.041"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Senate's official page on Statute 784.041
                </a>{" "}
                lays out the exact statutory language. And the{" "}
                <a
                  href="https://www.americanbar.org/groups/domestic_violence/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  American Bar Association's domestic violence resources
                </a>{" "}
                show just how aggressively these charges are pursued nationally.
              </p>
            </section>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] mt-12 mb-6">
              Domestic Battery Charge Risk Levels in Hillsborough County (2026)
            </h2>
            <section className="my-6 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                    <th className="p-4 border border-gray-200">Offense Type</th>
                    <th className="p-4 border border-gray-200">Statutory Classification</th>
                    <th className="p-4 border border-gray-200">Maximum Penalty</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-200 font-bold">Simple Battery</td>
                    <td className="p-4 border border-gray-200">1st Degree Misdemeanor (FS 784.03)</td>
                    <td className="p-4 border border-gray-200">Up to 1 year jail / $1,000 fine</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-bold">Strangulation</td>
                    <td className="p-4 border border-gray-200">3rd Degree Felony (FS 784.041)</td>
                    <td className="p-4 border border-gray-200">Up to 5 years prison / $5,000 fine / 5 yrs probation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-200 font-bold">Aggravated Battery</td>
                    <td className="p-4 border border-gray-200">2nd Degree Felony</td>
                    <td className="p-4 border border-gray-200">Up to 15 years prison</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-bold">Prior Conviction + Repeat</td>
                    <td className="p-4 border border-gray-200">3rd Degree Felony Upgrade</td>
                    <td className="p-4 border border-gray-200">Up to 5 years prison</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Does the Child Safety Plan Ambush Put You at a Disadvantage?
              </h2>
              <p>
                If children were present during the alleged incident, a CPI investigator from the Hillsborough County Sheriff's Office will likely show up. And when they do, they often come with a Child Safety Plan ready to sign.
              </p>
              <p>
                Here is the problem. That plan can require you to leave your own home, restrict your access to your children, or force you into programs. It is not a conviction. It is not even a formal charge. But it carries real consequences. And many parents sign it without understanding that it can be used against them later in both the criminal case and any related family court proceedings.
              </p>
              <p>
                Our survey shows that in cases where a Child Safety Plan was signed without legal review, defendants faced significantly worse outcomes in both the domestic battery case and in custody disputes that followed. Do not sign anything until you have spoken to a domestic battery attorney in Riverview. That is not legal advice for any specific situation. It is just smart.
              </p>
              <p>
                For more on how criminal defense connects to family matters in Florida, see the{" "}
                <Link
                  href="/practice/assault-battery-stalking"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  assault, battery and stalking defense page at McCulloch Law
                </Link>
                .
              </p>
            </section>

            <section className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] mb-2">
                  65%
                </div>
                <p className="text-sm font-bold text-[#1B2639]">Domestic Cases Proceed</p>
                <p className="mt-1 text-xs text-gray-600">Without victim cooperation in Division F</p>
              </div>

              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] mb-2">
                  5 Yrs
                </div>
                <p className="text-sm font-bold text-[#1B2639]">Max Prison for Strangulation</p>
                <p className="mt-1 text-xs text-gray-600">Third-degree felony under FL Statute 784.041</p>
              </div>

              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] mb-2">
                  21 Days
                </div>
                <p className="text-sm font-bold text-[#1B2639]">Critical Pre-File Window</p>
                <p className="mt-1 text-xs text-gray-600">Before State Attorney formally files charges</p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Is the Pre-File Negotiation Window and How Can Drew McCulloch Change the Tides?
              </h2>
              <p>
                After an arrest, the Hillsborough County State Attorney's Office has a window of time before formally filing charges. This is the pre-file negotiation window. It is, hands down, the most powerful phase of the entire domestic battery case.
              </p>
              <p>
                At that stage, mitigation may be offered by a lawyer with background in criminal defense. Inconsistencies within the official report might become central to the argument instead of being overlooked. Challenges to the basis for detention often shift how situations are viewed afterward. What catches a prosecuting office’s attention during evaluation tends to mirror prior courtroom patterns seen before. That insider view is worth a lot in those first twenty-one days.
              </p>
              <p>
                Drew McCulloch is a former state prosecutor with over 15 years of experience defending clients across Tampa Bay. He knows Division F. He knows how specialized DV prosecutors think. And he knows what it takes to get a case declined before it ever enters the system.
              </p>
              <p>
                The{" "}
                <a
                  href="https://www.flcourts.gov/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Courts domestic violence overview
                </a>{" "}
                confirms how quickly the court process accelerates once charges are filed. Getting in front of that timeline is everything. The{" "}
                <Link
                  href="/about"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  McCulloch Law about page
                </Link>{" "}
                details Drew's background and why former prosecutor experience is a real advantage for Riverview defendants.
              </p>
            </section>

            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center">
              <h2 className="text-xl font-bold text-[#BA8E2D] uppercase tracking-wider">
                Your Defense Starts Now. Not Later.
              </h2>
              <p className="mt-2 text-white/80 font-semibold">
                McCulloch Law P.A. is available 24/7 across Riverview and all of Tampa Bay. Call (813) 444-2817 for a free consultation with former prosecutor Drew McCulloch.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#BA8E2D]/90 transition-colors"
                >
                  Call (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-white text-[#1B2639] rounded hover:bg-gray-100 transition-colors"
                >
                  Book Online at MCFloridalaw.com
                </Link>
              </div>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Domestic Battery Defense Lawyer in Riverview &mdash; Get Help Today
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                Domestic battery charges move rapidly in Hillsborough County. The longer you wait during the pre-file window, the higher the risk that formal charges will lock in and restrict your future.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold text-lg text-[#1B2639]">McCulloch Law, P.A. | Outstanding Criminal Defense</p>
                <p className="mt-1">238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p className="mt-1">Serving Riverview, Tampa, Brandon, Valrico, and all of Hillsborough County</p>
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
              Legal Disclaimer: This article is for general informational purposes only and does not constitute legal advice. For guidance specific to your situation, contact a licensed Florida attorney.
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
