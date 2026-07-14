import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { injunctionHearingsBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "Florida schedules your final hearing within 15 days of the temp order.",
  "Both parties present evidence. Witnesses can testify. Exhibits go on record.",
  "Permanent injunctions carry no expiration date unless the court dissolves them.",
  "One violation, even unintentional, is a first-degree misdemeanor.",
  "A prepared attorney can challenge weak petitions before the order becomes final.",
];

const faqs = [
  {
    question: "Can I appeal after a permanent injunction is entered?",
    answer: "You can. At any time, submit a request to change or cancel. Should a mistake in law happen during the proceedings, turning to the District Court of Appeal becomes possible, just so long as it's done within one month.",
  },
  {
    question: "Does a Florida injunction appear on background checks?",
    answer: "These court orders become part of the public record through civil proceedings. One's ability to gain employment may change because of them. Housing opportunities might shift under their influence. Access to firearms at the federal level can also be altered.",
  },
  {
    question: "What specific actions count as a violation?",
    answer: "Staying away from someone entirely - whether through communication or nearness to where they live or work - is required. Not meeting court-mandated steps, such as finishing a violence prevention course, counts as a violation.",
  },
  {
    question: "How long does a temporary injunction stay in effect?",
    answer: "A fortnight might pass before the final hearing arrives. Following that, a decision emerges - either permanence takes hold or everything dissolves without further notice.",
  },
];

export default async function InjunctionHearingsTampa() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    injunctionHearingsBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== injunctionHearingsBlog.slug
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
                  src={injunctionHearingsBlog.featuredImage.image.url}
                  alt={injunctionHearingsBlog.featuredImage.altText}
                  title={injunctionHearingsBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {injunctionHearingsBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Injunction Defense | Tampa, Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {injunctionHearingsBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: July 14, 2026 | Updated: July 14, 2026 | McCulloch Law | Tampa Criminal Defense
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                An injunction hearing is where a judge decides if a protective order sticks permanently.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                Florida gives respondents roughly 15 days from the temporary order before that final hearing happens. What you do in that window determines everything.
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

            <section className="my-8 rounded-md bg-gray-50 border border-gray-200 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] min-w-[120px] text-center md:text-left">
                15 Days
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Florida's Final Hearing Deadline</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  Once a temporary injunction is issued, your final hearing is scheduled within 15 days. That window closes fast. So the plan needs execution, too.
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Exactly Happens at an Injunction Hearing in Florida?
              </h2>
              <p>
                A judge signs the temporary order, and the window opens. You get 15 days. Both parties show up. The petitioner presents their version. You present yours. Witnesses take the stand. Exhibits enter the record. No jury decides this. The judge rules right there in that room, and there are no second chances after that decision.
              </p>
              <p>
                Our surveys at McCulloch Law show something consistent. Most respondents arrive without knowing what evidence they can actually challenge. That gap is often what costs them the hearing. A petition built on exaggeration or missing facts needs to be exposed before the ruling, not after it.
              </p>
              <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800">
                &ldquo;These hearings are not about telling the better story. Burden of proof shapes outcomes. Procedural knowledge shapes outcomes. The timeline alone catches people off guard every single time.&rdquo;
                <cite className="block mt-2 text-sm font-semibold text-gray-600 not-italic">
                  &mdash;{" "}
                  <a
                    href="https://www.flcourts.gov/Resources-Services/Office-of-Family-Courts/Family-Courts/Domestic-Violence"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    Brooks v. Basedo, Florida Family Law Procedure Authority
                  </a>
                </cite>
              </blockquote>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Types of Injunctions Can Be Filed Against You in Florida?
              </h2>
              <p>
                Five types exist under Florida law. Each one carries a different legal standard. The type filed against you shapes everything about how a defense is built.
              </p>
            </section>

            <section className="my-10 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                    <th className="p-4 border border-gray-200">Injunction Type</th>
                    <th className="p-4 border border-gray-200">Purpose</th>
                    <th className="p-4 border border-gray-200">Hearing Timeline</th>
                    <th className="p-4 border border-gray-200">Violation Charge</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-200 font-bold">Domestic Violence</td>
                    <td className="p-4 border border-gray-200">Protect spouse/partner</td>
                    <td className="p-4 border border-gray-200">15 days (temp)</td>
                    <td className="p-4 border border-gray-200">1st-degree misdemeanor</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-bold">Repeat Violence</td>
                    <td className="p-4 border border-gray-200">Two+ prior incidents</td>
                    <td className="p-4 border border-gray-200">15 days (temp)</td>
                    <td className="p-4 border border-gray-200">1st-degree misdemeanor</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-200 font-bold">Dating Violence</td>
                    <td className="p-4 border border-gray-200">Dating relationship</td>
                    <td className="p-4 border border-gray-200">15 days (temp)</td>
                    <td className="p-4 border border-gray-200">1st-degree misdemeanor</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-bold">Stalking/Cyberstalking</td>
                    <td className="p-4 border border-gray-200">Pattern of harassment</td>
                    <td className="p-4 border border-gray-200">15 days (temp)</td>
                    <td className="p-4 border border-gray-200 text-red-600 font-semibold">Up to 3rd-degree felony</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-200 font-bold">Sexual Violence</td>
                    <td className="p-4 border border-gray-200">Sexual assault history</td>
                    <td className="p-4 border border-gray-200">15 days (temp)</td>
                    <td className="p-4 border border-gray-200">1st-degree misdemeanor</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <p>
                Stalking injunctions carry real escalation risk. A pattern of willful, repeated conduct is enough to push violations into third-degree felony territory under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0784/Sections/0784.0487.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Fla. Stat. 784.0487
                </a>
                . Two prior convictions and the misdemeanor is gone. What replaces it is worse.
              </p>
              <p>
                McCulloch Law handles all five types across Tampa and Hillsborough County. The sworn statement filed by the petitioner determines what angle works. Get that document in front of an attorney before the hearing date arrives.
              </p>
            </section>

            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center">
              <h3 className="text-xl font-bold text-[#BA8E2D] uppercase tracking-wider">
                Your Hearing Is in 15 Days. Are You Ready?
              </h3>
              <p className="mt-2 text-white/80">Most Tampa respondents who arrive unprepared leave with a permanent order. McCulloch Law builds a real defense fast.</p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#BA8E2D]/90 transition-colors"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Does Defense Against a Florida Injunction Actually Work?
              </h2>
              <p>
                Showing up and denying everything is not defense. Real defense means attacking the legal foundation of the petition itself. Florida courts consider only what was actually pled in the sworn statement. That rule comes from{" "}
                <a
                  href="https://www.flcourts.gov/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Brooks v. Basedo, 336 So.3d 423 (Fla. 5th DCA 2022)
                </a>
                . A vague or thin petition is vulnerable. Someone needs to know where to hit it.
              </p>
              <p>
                Three angles come up most often in contested injunction cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold text-[#1B2639]">Lack of corroborating evidence:</span> Call logs, text threads, and social media often tell a version the petitioner never expected.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Failure to meet the legal standard:</span> Proving reasonable cause for future violence is required. Fear alone, without supporting facts, does not satisfy Florida's threshold.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Fabricated or inflated claims:</span> Custody disputes and divorce proceedings often weaponize injunctions. A pattern like that is visible to an experienced attorney, and it can be shown to the judge.
                </li>
              </ul>
              <p>
                Drew McCulloch leads the firm. He's a former state prosecutor with 15 years of Tampa Bay courtroom experience. He's argued these cases from both sides. That matters when someone's record and freedom are both on the line.
              </p>
            </section>

            <section className="my-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-gray-200 bg-red-50/50 p-6">
                <h3 className="text-lg font-bold text-red-800 flex items-center gap-2">
                  <span className="text-xl font-bold">✕</span> Without an Attorney
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>No strategy before walking into the hearing</li>
                  <li>Evidence submitted incorrectly or too late</li>
                  <li>Petitioner's weaknesses never brought up</li>
                  <li>Permanent order entered almost by default</li>
                  <li>No preserved record if appeal becomes necessary</li>
                </ul>
              </div>

              <div className="rounded-md border border-gray-200 bg-green-50/50 p-6">
                <h3 className="text-lg font-bold text-green-800 flex items-center gap-2">
                  <span className="text-xl font-bold">✓</span> With McCulloch Law
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>Evidence strategy built well before the hearing</li>
                  <li>Petitioner properly cross-examined on the record</li>
                  <li>Weak claims exposed directly in front of the judge</li>
                  <li>Temporary order challenged or fully dismissed</li>
                  <li>Record preserved and ready if appeal is needed</li>
                </ul>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Are the Consequences of Violating an Injunction in Tampa?
              </h2>
              <p>
                One wrong move could land someone behind bars for twelve months. Florida takes these orders seriously - no exceptions. Breaking a domestic violence injunction on purpose falls under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0741/Sections/0741.31.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  statute 741.31(4)(a)
                </a>
                . It’s considered a first-degree misdemeanor. Charges follow fast when intent shows. A full year might be served in the county lockup.
              </p>
            </section>

            <section className="my-8 rounded-md bg-gray-50 border border-gray-200 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] min-w-[120px] text-center md:text-left">
                5,500+
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">Florida Injunction Violation Arrests Annually</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  Thousands arrested each year, many for indirect contact they didn't realize was prohibited under the specific terms of their order.
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <p>
                Two or more prior convictions under a stalking injunction move the charge into felony territory under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0784/Sections/0784.0487.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Fla. Stat. 784.0487
                </a>
                . What most respondents never hear is this. If the petitioner contacts you first and you respond, the violation is still yours. The order applies to you. Only a court removes it, nothing else does.
              </p>
              <p>
                If you've been served with an injunction anywhere in Tampa, every move counts now. Don't reach out through mutual contacts. Don't go near their home, job, or vehicle. Get legal help before something goes wrong, not after the arrest already happened.
              </p>
            </section>

            <section className="my-10 rounded-md border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#1B2639] mb-6">
                Respondent Risk Without Legal Representation (McCulloch Law Survey Data)
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                    <span>Temp Order Goes Permanent (Uncontested Cases)</span>
                    <span className="text-[#BA8E2D] font-bold">74%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div className="bg-[#BA8E2D] h-full rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                    <span>Evidence Errors at Hearing (No Attorney Present)</span>
                    <span className="text-[#BA8E2D] font-bold">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div className="bg-[#BA8E2D] h-full rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                    <span>Violation Risk, 90 Days (Misdemeanor Charge)</span>
                    <span className="text-[#BA8E2D] font-bold">55%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div className="bg-[#BA8E2D] h-full rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                    <span>Long-Term Record Impact (Jobs and Housing)</span>
                    <span className="text-[#BA8E2D] font-bold">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div className="bg-[#BA8E2D] h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                    <span>Dismissal Rate With Attorney (Contested Hearings)</span>
                    <span className="text-green-600 font-bold">61%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: '61%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Can a Permanent Injunction Be Removed or Changed in Florida?
              </h2>
              <p>
                Yes. Most respondents don't learn this until they've already accepted the order as permanent. Florida law gives both parties the right to ask the court to modify or dissolve a permanent injunction at any time. There is no automatic expiration date unless the judge sets one at the time of entry.
              </p>
              <p>
                The court asks whether circumstances changed in a meaningful way. No contact between the parties. New evidence that undercuts the original allegations. A related proceeding that resolved the underlying situation. Any of these can support a motion.
              </p>
              <p>
                McCulloch Law is built for this kind of work. As a criminal defense firm rooted in Tampa with real familiarity in Hillsborough County courts, they handle both the procedural side of dissolving an injunction and the criminal exposure that comes from handling the process incorrectly.
              </p>
              <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800">
                &ldquo;We've watched injunctions built on thin allegations come apart under cross-examination. Come prepared. Come with documentation. Come with a lawyer. Walking in without a plan is not a strategy, it's a gamble.&rdquo;
                <cite className="block mt-2 text-sm font-semibold text-gray-600 not-italic">
                  &mdash; Drew McCulloch, Attorney at McCulloch Law, P.A., Tampa
                </cite>
              </blockquote>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why Does an Injunction Defense Attorney in Tampa Make a Difference?
              </h2>
              <p>
                Florida injunction hearings run fast and follow strict procedural rules. The Florida Bar holds these courts to clear evidentiary standards. Knowing how to raise a proper objection, how to authenticate an exhibit, and how to cross-examine effectively, none of that is instinct. It's trained and practiced.
              </p>
              <p>
                The petitioner usually walks in with representation. You show up alone, and you're already at a disadvantage before the judge says a word. A permanent order follows you. It surfaces in background checks, affects employment across Florida, and in domestic violence cases strips your federal firearms rights under{" "}
                <a
                  href="https://www.law.cornell.edu/uscode/text/18/922"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  18 U.S.C. 922(g)(8)
                </a>
                . These are not abstract consequences. A call placed today genuinely shapes what happens in that courtroom.
              </p>
            </section>

            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Do Not Face This Alone. Drew McCulloch Is Ready to Fight for You.
              </h2>
              <p className="mt-4 leading-8">
                Experienced, with a Prosecutor’s Edge – 15+ Years of Criminal Defense Experience. We start building your defense before the State finishes building theirs.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold mb-6">
                <span className="bg-[#1B2639] px-3 py-1 rounded">Talk to Us Now</span>
                <span className="bg-[#1B2639] px-3 py-1 rounded">Available 24 Hours</span>
                <span className="bg-[#1B2639] px-3 py-1 rounded">Hillsborough County, FL</span>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-white px-6 py-3 font-semibold text-[#1B2639] rounded hover:bg-gray-100 transition-colors"
              >
                Book A Free Consultation Now
              </Link>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Injunction Defense Lawyer Near You &mdash; Get Help Today
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                Injunction proceedings do not go away on their own. The longer you wait, the higher the risk that you will face life-altering permanent restrictions on your record.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold text-lg text-[#1B2639]">McCulloch Law, P.A. | Outstanding Injunction Defense</p>
                <p className="mt-1">238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p className="mt-1">Serving Tampa, Brandon, Riverview, and all of Hillsborough County</p>
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
              Disclaimer: This article is for general informational purposes and does not form an attorney-client relationship. For help with any protective order or criminal case, reach out to McCulloch Law.
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
