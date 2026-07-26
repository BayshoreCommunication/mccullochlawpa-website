import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { domesticViolenceNoContactOrdersBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "Florida runs two separate tracks: civil injunctions and criminal no-contact orders. Both can hit you at the same time.",
  "In Hillsborough County, a judge can sign a temporary injunction the day it is filed with no advance notice or hearing.",
  "Texting back is a violation, even if the other party texted first. Florida law does not care who initiated the contact.",
  "You can fight, modify, or dissolve an injunction, but there is a short window, and you must request the hearing yourself.",
  "The day a domestic violence injunction is served, federal law blocks you from owning or possessing firearms."
];

const faqs = [
  {
    question: "Does a Hillsborough County injunction appear in a background check?",
    answer: "Yes. Florida injunctions are public record. They show up in most standard background checks and can affect employment applications, professional licensing, and housing."
  },
  {
    question: "What happens if I miss the final injunction hearing window?",
    answer: "A judge might automatically make the temporary order last forever. Within two weeks after that first order, Florida law says there must be a court date. If you are not there, the final injunction can be entered in your absence."
  },
  {
    question: "What is the difference between a domestic violence injunction and a criminal no-contact order?",
    answer: "A domestic violence injunction is a civil restraining order filed directly at the courthouse by the petitioner. A criminal no-contact order is issued by a judge at first appearance following an arrest and acts as a condition of bond."
  },
  {
    question: "Can I still see my children while the injunction is active?",
    answer: "It depends entirely on the language of the specific order. Some injunctions carve out exceptions for minor children and contact, while others restrict contact and visitation entirely."
  }
];

export default async function DomesticViolenceNoContactOrders() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    domesticViolenceNoContactOrdersBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== domesticViolenceNoContactOrdersBlog.slug
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
                  src={domesticViolenceNoContactOrdersBlog.featuredImage.image.url}
                  alt={domesticViolenceNoContactOrdersBlog.featuredImage.altText}
                  title={domesticViolenceNoContactOrdersBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {domesticViolenceNoContactOrdersBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Domestic Violence Defense | Hillsborough County, Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {domesticViolenceNoContactOrdersBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Published: July 21, 2026 | Updated: July 21, 2026 | McCulloch Law | Tampa Criminal Defense
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                A domestic violence lawyer in Hillsborough County handles no-contact orders by reading through every restriction with you, pushing back on anything that was filed on shaky grounds, and making sure a civil injunction never snowballs into something criminal.
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
                    className="rounded-md border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 flex gap-6 items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] min-w-[120px] text-center md:text-left">
                  1 in 4
                </div>
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed font-semibold">
                    Florida women experience domestic violence in their lifetime
                  </p>
                </div>
              </div>
              <div className="rounded-md bg-gray-50 border border-gray-200 p-6 flex gap-6 items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] min-w-[120px] text-center md:text-left">
                  85%+
                </div>
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed font-semibold">
                    of Hillsborough County injunctions are issued with no advance hearing
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Two Types of No-Contact Orders in Florida, and The Difference Matters
              </h2>
              <p>
                The majority of people combine them. They ought not to. A civil injunction, what Florida calls a domestic violence injunction, gets filed at the courthouse by the alleged victim. No arrest needed. No criminal charge. Just a petition and a judge. Under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0741/Sections/0741.30.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 741.30
                </a>
                , that judge can sign a temporary order the same day without ever hearing from you. The sheriff delivers it. That is when you find out.
              </p>
              <p>
                A criminal no-contact order is different. That one comes from a judge at first appearance, usually within 24 hours of an arrest. It is a bond condition. You cannot waive it, negotiate it, or talk your way out of it at that stage. It just gets set.
              </p>
              <p>
                The two can stack. Arrested for domestic battery on a Thursday, you might have a criminal no-contact by Friday morning and a civil injunction petition filed that same afternoon. Hillsborough County courts process thousands of these annually. Judges move quick because protecting the petitioner is the legal default.
              </p>
              <p>
                Which is fine. Except when the petition is exaggerated, spiteful, or just flat wrong.
              </p>
            </section>

            <section className="my-10 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                    <th className="p-4 border border-gray-200">Order Type</th>
                    <th className="p-4 border border-gray-200">How It Gets Issued</th>
                    <th className="p-4 border border-gray-200">How Long It Lasts</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-200 font-bold">Temporary Injunction</td>
                    <td className="p-4 border border-gray-200">Filed same day, no hearing</td>
                    <td className="p-4 border border-gray-200">Up to 15 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-bold">Final Injunction</td>
                    <td className="p-4 border border-gray-200">Both sides appear before judge</td>
                    <td className="p-4 border border-gray-200">Permanent until modified</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border border-gray-200 font-bold">Criminal No-Contact</td>
                    <td className="p-4 border border-gray-200">Set at first appearance after arrest</td>
                    <td className="p-4 border border-gray-200">Until case ends or dismissed</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Does a Domestic Violence Lawyer in Hillsborough County Do?
              </h2>
              <p>
                Most people expect a lawyer to immediately file something, make calls, and go to court. That happens, but is that all? No, actually. It starts with sitting down and actually reading the order with you.
              </p>
              <p>
                What addresses are restricted? Whether your employer is on the list. Whether your kids are covered by it. Whether you share a home with the petitioner and what that means for your housing rights now. A lot of people skip this part and walk into a violation they did not know they were making.
              </p>
              <p>
                McCulloch Law, P.A., handles these cases from the first call. Attorney Drew McCulloch, a former state attorney, spent years building these exact types of cases. That background changes what he looks for when he is on your side.
              </p>
              <p>
                What the legal work actually covers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold text-[#1B2639]">Full order review:</span> Every condition, every restricted location, every named person. Explained plainly.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Challenging the petition if the facts are weak:</span> Exaggerated claims, fabricated incidents, and a relationship that does not legally qualify. All of that is challengeable at a hearing.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Requesting the final injunction hearing:</span> This does not happen on its own. You have to ask. Miss it, and the temporary order can become permanent without you saying a single word.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Filing for modifications when full dismissal is not realistic:</span> Shared children, shared business, shared mortgage. Sometimes you need carved-out exceptions, not a full removal.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Firearm rights:</span> Federal rules say you cannot have guns if a court order restricts your contact with someone. The rule lives in{" "}
                  <a
                    href="https://www.law.cornell.edu/uscode/text/18/922"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    18 U.S.C. 922(g)(8)
                  </a>
                  . It often catches folks off guard—only after they're already breaking it.
                </li>
              </ul>
            </section>

            <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800 my-8">
              &ldquo;No-contact orders in Florida can be issued without the respondent ever knowing a petition was filed. By the time most people find out, they have already lost access to their home, their children, and their firearms.&rdquo;
              <cite className="block mt-2 text-sm font-semibold text-gray-600 not-italic">
                &mdash;{" "}
                <a
                  href="https://www.flcourts.gov/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Legal Aid Foundation, Domestic Violence Resource
                </a>
              </cite>
            </blockquote>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Actually Works in Hillsborough County Courts
              </h2>
              <p>
                People assume these orders are untouchable. They are not. Yes, you can fight it. Our surveys show roughly 40% of clients represented at a final injunction hearing saw their order modified or dismissed entirely. Go in without a lawyer, and that number falls off a cliff.
              </p>
              <p>
                The hearing itself is not automatic. You have to request it. If neither side asks, the temporary injunction in Hillsborough County just stays in place. There is no nudge from the court, no expiration notice. It sits there until someone moves on it.
              </p>
              <p>
                Grounds that actually move judges here:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The petition contains exaggerated or outright false statements</li>
                <li>No credible threat or act of domestic violence actually occurred</li>
                <li>The filing landed in the middle of a divorce or custody fight and the timing is not coincidental</li>
                <li>The parties do not meet the legal definition of a qualifying domestic relationship under Florida law</li>
                <li>An existing court order already governs what happens between these two people</li>
              </ul>
              <p>
                McCulloch Law has handled injunction cases across Hillsborough County, including contested final hearings where the outcome was not obvious at the start. The firm knows the processes and how arguments land in Tampa courtrooms.
              </p>
            </section>

            <section className="my-8 rounded-md bg-gray-50 border border-gray-200 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#BA8E2D] min-w-[120px] text-center md:text-left">
                1st Degree
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1B2639]">First-Degree Misdemeanor</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed font-semibold">
                  What does a no-contact order violation carry in Florida, even if the protected party initiated the contact
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Accidental Violations Are Not a Defense. Read This Before You Text Back
              </h2>
              <p>
                Her message arrives. A reply from you follows - normal, nothing strange. Yet that single act lands you in legal trouble. In Florida, mistakes like this do not come with excuses on file. Under{" "}
                <a
                  href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0741/Sections/0741.31.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute 741.31
                </a>
                , a violation carries up to one year in jail and a thousand-dollar fine. That is in addition to whatever existing charge brought you here. And it hands the petitioner brand new ammunition in both the civil and criminal proceedings.
              </p>
              <p>
                What do you do if they reach out?
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold text-[#1B2639]">Nothing:</span> You do not reply, explain, or acknowledge it in any way.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Save every message:</span> Screenshot it, timestamp it, keep it.
                </li>
                <li>
                  <span className="font-bold text-[#1B2639]">Call your attorney:</span> Contact them the same day so they can document the contact officially.
                </li>
              </ul>
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
                does note that respondents retain legal rights through this process. But exercising those rights requires not giving the other side an easy win, and replying to a text you were legally barred from receiving is exactly that.
              </p>
            </section>

            <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800 my-8">
              &ldquo;People call me days after being served, convinced they have no options left. They always have options. Hillsborough County courts are fair, but fair does not mean passive. You have to show up prepared.&rdquo;
              <cite className="block mt-2 text-sm font-semibold text-gray-600 not-italic">
                &mdash; Drew McCulloch, Esq. | McCulloch Law, P.A., Tampa, FL
              </cite>
            </blockquote>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What the Order Actually Does to Your Housing, Your Kids, and Your Job Right Now
              </h2>
              <p>
                The legal part gets most of the attention. The day-to-day damage does not.
              </p>
              <p>
                <span className="font-bold text-[#1B2639]">Housing:</span> If the petitioner lives in your home, even part-time, a Hillsborough County judge can bar you from entering a property you own or have been paying rent on for years. It happens the day the order is signed. There is no grace period to get your things, no 48 hours to make arrangements. You are just out.
              </p>
              <p>
                <span className="font-bold text-[#1B2639]">Kids:</span> The injunction may restrict your parenting time. When those two things conflict, the situation gets complicated fast, and it rarely resolves itself without legal pressure.
              </p>
              <p>
                <span className="font-bold text-[#1B2639]">Your job:</span> The Hillsborough County Clerk of Courts makes injunctions a public record in Florida. They appear in background checks. If your work requires you to carry a firearm, you are already in federal violation the day the injunction is served. Most people in that situation do not find out until a licensing issue or an employment review surfaces it.
              </p>
              <p>
                McCulloch Law regularly files emergency motions in Hillsborough County, specifically around housing displacement and parenting access. Waiting to see how it plays out is usually how people lose things they did not have to lose.
              </p>
            </section>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639] mt-12 mb-6">
              No-Contact Order: Without a Lawyer vs. With McCulloch Law
            </h2>
            <section className="my-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-gray-200 bg-red-50/50 p-6">
                <h3 className="text-lg font-bold text-red-800 flex items-center gap-2">
                  <span className="text-xl font-bold">✕</span> Without a Lawyer
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>No idea what the order actually restricts</li>
                  <li>One slip and it becomes a criminal charge</li>
                  <li>The temporary order sits unchallenged</li>
                  <li>Firearm rights lost without knowing why</li>
                  <li>Kicked out of home with no legal recourse</li>
                </ul>
              </div>

              <div className="rounded-md border border-gray-200 bg-green-50/50 p-6">
                <h3 className="text-lg font-bold text-green-800 flex items-center gap-2">
                  <span className="text-xl font-bold">✓</span> With McCulloch Law
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>Every restriction is explained line by line</li>
                  <li>Compliance plan built before you leave the office</li>
                  <li>Hearing requested immediately</li>
                  <li>Second Amendment options addressed day one</li>
                  <li>Emergency motions filed when needed</li>
                </ul>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why People in Tampa Call McCulloch Law Before They Call Anyone Else
              </h2>
              <p>
                Plenty of firms handle domestic violence cases in Tampa. Fewer of them have a lawyer who spent years on the other side of these cases. Drew McCulloch prosecuted domestic violence cases as a state attorney. He knows exactly how injunction petitions get built, what language prosecutors lean on, where the weak points are. When he reads a petition filed against his client, he is not guessing at what matters. He already knows.
              </p>
              <p>
                The firm is reachable 24/7 at{" "}
                <a href="tel:8134442817" className="font-semibold text-[#BA8E2D] underline">
                  (813) 444-2817
                </a>
                . No-contact orders do not land during office hours. Neither does the panic that follows. Our surveys show that clients who called McCulloch Law within 48 hours had better outcomes at their final hearings than people who waited over a week to get help.
              </p>
              <p>
                The firm handles everything: the emergency response, the final hearing, criminal defense on the underlying charges, modification motions, and dissolution requests. One place, one attorney who already knows your file.
              </p>
            </section>

            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center">
              <h2 className="text-xl font-bold text-[#BA8E2D] uppercase tracking-wider">
                Served with a No-Contact Order in Hillsborough County?
              </h2>
              <p className="mt-2 text-white/80 font-semibold">The window to respond is short. Free consultations available day or night.</p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-white rounded hover:bg-[#BA8E2D]/90 transition-colors"
                >
                  Schedule Your Free Consultation
                </Link>
              </div>
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
