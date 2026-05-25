import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { breathTestRefusalBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "Refusing a breath test in Florida can trigger an immediate license suspension.",
  "A first refusal can mean a 1-year suspension, while a second or later refusal can mean 18 months.",
  "You generally have only 10 days to request a formal or informal review of the suspension.",
  "The refusal can be used as evidence in the criminal DUI case.",
  "A DUI refusal attorney may challenge the stop, arrest, warning, paperwork, and hearing procedure.",
];

const stats = [
  { value: "10 days", label: "Typical deadline to request suspension review" },
  { value: "1 year", label: "Administrative suspension for a first refusal" },
  { value: "18 months", label: "Suspension for a second or later refusal" },
];

const comparisonRows = [
  {
    situation: "You take the breath test",
    result: "The state may get a BAC result.",
    why: "That number can support the DUI case.",
  },
  {
    situation: "You refuse the breath test",
    result: "A first refusal can bring a 1-year suspension; later refusals can bring 18 months.",
    why: "The refusal can still be used as evidence in court.",
  },
  {
    situation: "You challenge the suspension",
    result: "A formal review may be scheduled within 30 days.",
    why: "Procedural mistakes can help the defense.",
  },
];

const licenseConsequences = [
  "First refusal: a 1-year license suspension.",
  "Second or subsequent refusal: an 18-month license suspension.",
  "Deadline to challenge: generally 10 days from the notice of suspension to request a review.",
  "Temporary permit: the permit issued at the time of suspension expires at midnight on the 10th day after the notice is issued.",
  "Restricted license impact: if the suspension is sustained, a business or employment-only license is generally not available until 90 days after the last temporary permit expires.",
];

const surveyInsights = [
  { label: "Unaware of the 10-day review window", value: "74%" },
  { label: "Did not know refusal becomes court evidence", value: "68%" },
  { label: "Unaware of immediate license suspension", value: "61%" },
  { label: "Did not know suspension differs by refusal history", value: "55%" },
  { label: "Contacted an attorney within 10 days", value: "31%" },
];

const challengePoints = [
  {
    title: "The stop",
    text: "Was there a lawful basis to stop the vehicle before the DUI investigation began?",
  },
  {
    title: "The arrest",
    text: "Did the officer have probable cause before requesting a breath, blood, or urine test?",
  },
  {
    title: "The warning",
    text: "Was the implied consent warning read clearly and correctly before the alleged refusal?",
  },
  {
    title: "The paperwork",
    text: "Do the reports, video, breath-test documents, and notice of suspension match what actually happened?",
  },
  {
    title: "The hearing",
    text: "Were subpoenas honored and did the department meet the formal review timeline required by law?",
  },
];

const faqs = [
  {
    question: "Is refusing a breath test illegal in Florida?",
    answer:
      "A refusal can lead to administrative and criminal consequences. Florida law allows a refusal to be used in a criminal proceeding, and a later refusal can create additional misdemeanor exposure when the driver has a qualifying prior refusal.",
  },
  {
    question: "How long is the license suspension for refusing a breath test?",
    answer:
      "A first refusal usually leads to a 1-year suspension. A second or later refusal usually leads to an 18-month suspension.",
  },
  {
    question: "How fast do I need to act after a refusal?",
    answer:
      "Fast. Florida gives drivers a short 10-day window to request a formal or informal review of the suspension, and the temporary permit expires at midnight on the 10th day.",
  },
  {
    question: "Can a refusal suspension be challenged?",
    answer:
      "Yes. The hearing officer can review reports, receive evidence, and issue subpoenas. Problems with probable cause, warnings, documentation, subpoenas, or hearing deadlines may affect the suspension.",
  },
  {
    question: "Does refusing the test make the DUI case go away?",
    answer:
      "No. Refusal does not end the DUI case. The refusal can still be argued in court, and the administrative suspension continues unless it is challenged successfully.",
  },
];

export default async function WhatRefusingABreathTest() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    breathTestRefusalBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== breathTestRefusalBlog.slug
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
                  src={breathTestRefusalBlog.featuredImage.image.url}
                  alt={breathTestRefusalBlog.featuredImage.altText}
                  title={breathTestRefusalBlog.featuredImage.title}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-gray-500">
                {breathTestRefusalBlog.featuredImage.caption}
              </figcaption>
            </figure>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                DUI Refusal Defense | Plant City, Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {breathTestRefusalBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Updated 2026 | McCulloch Law, P.A. | Florida DUI Defense
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                In Florida, refusing a valid breath test can result in a
                one-year license suspension for a first refusal and an
                18-month suspension for a later refusal.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                The refusal can also become evidence in the criminal DUI case,
                and the deadline to request review of the suspension is usually
                only 10 days.
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
                What Does Refusing a Breath Test Mean in Florida?
              </h2>
              <p>
                Refusing a breath test means you declined a chemical test after
                a DUI arrest. The request usually comes after an officer claims
                there are signs that you were driving while impaired.
              </p>
              <p>
                Florida treats that decision as more than a roadside answer. A
                refusal is tied to the state's implied consent law, can start an
                administrative license suspension, and may become part of the
                prosecutor's case.
              </p>
              <p>
                Refusal cases often turn on process. If the stop lacked a legal
                basis, the arrest was not supported by probable cause, the
                warning was not given properly, or the paperwork is incomplete,
                the foundation of the suspension may be challenged.
              </p>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What Happens Immediately After You Refuse?
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                Refusing a breath test does not end the case. It usually starts
                a new phase involving the Florida Department of Highway Safety
                and Motor Vehicles and the criminal court system.
              </p>
              <p className="mt-4 leading-8 text-gray-700">
                Under{" "}
                <a
                  href="https://leg.state.fl.us/Statutes./index.cfm?App_mode=Display_Statute&URL=0300-0399%2F0322%2F0322.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute section 322.2615
                </a>
                , a first refusal can lead to a 1-year suspension, while a
                second or later refusal can lead to an 18-month suspension. The
                department must also schedule a formal review hearing within 30
                days after receiving a proper request.
              </p>
              <p className="mt-4 leading-8 text-gray-700">
                The review clock begins quickly, which is why the first few
                hours after a refusal can matter as much as the first court
                date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Refusal vs. Taking the Test
              </h2>
              <div className="mt-5 overflow-x-auto rounded-md border border-gray-200">
                <table className="w-full min-w-[720px] border-collapse bg-white text-left">
                  <thead className="bg-[#1B2639] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Situation</th>
                      <th className="p-4 font-semibold">
                        Typical Result in Florida
                      </th>
                      <th className="p-4 font-semibold">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.situation} className="border-t">
                        <td className="p-4 font-semibold text-[#1B2639]">
                          {row.situation}
                        </td>
                        <td className="p-4 leading-7 text-gray-700">
                          {row.result}
                        </td>
                        <td className="p-4 leading-7 text-gray-700">
                          {row.why}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Can a DUI Refusal Attorney Challenge the Suspension?
              </h2>
              <p>
                Yes. A DUI refusal attorney can challenge whether the officer
                had probable cause, whether the implied consent warning was
                proper, and whether the refusal was documented correctly.
              </p>
              <p>
                The hearing officer may review officer reports, breath-test
                documents, refusal paperwork, video, and witness testimony. If
                an officer or breath technician does not appear after a proper
                subpoena, that failure may affect the suspension.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What the Defense Reviews
              </h2>
              <div className="mt-6 grid gap-4">
                {challengePoints.map((point, index) => (
                  <div
                    key={point.title}
                    className="grid gap-4 rounded-md border border-gray-200 p-5 md:grid-cols-[70px_1fr]"
                  >
                    <div className="text-3xl font-bold text-[#BA8E2D]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1B2639]">
                        {point.title}
                      </h3>
                      <p className="mt-2 leading-7 text-gray-700">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                The 10-Day Window Is Already Counting Down
              </h2>
              <p className="mt-4 leading-8">
                Do not let the deadline pass. McCulloch Law, P.A. reviews
                refusal cases quickly and fights for your license in Plant City
                and across Florida.
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
                How Does Refusal Affect the Criminal DUI Case?
              </h2>
              <p>
                Refusal does not automatically help or hurt every DUI case. It
                changes the strategy. The state may lose a breath alcohol
                number, but it may argue the refusal shows awareness of
                impairment.
              </p>
              <p>
                Florida law says refusal to submit to a lawful breath test is
                admissible in a criminal proceeding. You can review that rule in{" "}
                <a
                  href="https://m.flsenate.gov/statutes/316.1932"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Statute section 316.1932
                </a>
                .
              </p>
              <p>
                If the case involves repeat DUI allegations, the stakes can
                rise quickly. A third DUI within 10 years can become a
                third-degree felony, and penalties can include higher fines,
                incarceration exposure, ignition interlock requirements, and a
                long license revocation.
              </p>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                License Consequences After Refusal
              </h2>
              <ul className="mt-5 list-disc pl-6 space-y-2 leading-8 text-gray-700">
                {licenseConsequences.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 leading-8 text-gray-700">
                The{" "}
                <a
                  href="https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/florida-dui-administrative-suspension-laws/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  Florida Department of Highway Safety and Motor Vehicles
                </a>{" "}
                also lists 18 months as the period for a second or subsequent
                refusal suspension.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Survey Insight: What Florida Drivers Did Not Know
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                McCulloch Law's 2025 internal survey found that many Florida
                drivers did not understand the deadlines and consequences tied
                to breath test refusal.
              </p>
              <div className="mt-5 space-y-4">
                {surveyInsights.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between gap-4 text-sm font-semibold text-gray-700">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-gray-100">
                      <div
                        className="h-3 rounded-full bg-[#BA8E2D]"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Source: McCulloch Law internal survey of Florida drivers, 2025.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Why Local Help Matters for Plant City Drivers
              </h2>
              <p>
                Local help matters because DUI refusal cases are part law, part
                procedure, and part timing. A lawyer who understands Florida's
                suspension process can focus on the stop, warning, refusal
                record, and hearing deadline quickly.
              </p>
              <p>
                In refusal cases, timing is not a side issue. It can shape the
                entire license fight and the criminal defense strategy.
              </p>
              <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800">
                "In DUI refusal cases, the paperwork is often the case. If the
                officer's report is incomplete, the warning was improper, or the
                subpoena was not honored, those are real grounds to fight the
                suspension."
              </blockquote>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Need Help After a Breath Test Refusal in Plant City?
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                Refusing a breath test can trigger fast consequences, including
                a license suspension, criminal exposure, and a very short
                deadline to fight back. The stop, warning, documentation, and
                hearing timeline can all shape the outcome.
              </p>
              <p className="mt-4 leading-8 text-gray-700">
                Do not wait to see what happens next. Speak with McCulloch Law,
                P.A. and protect your license before deadlines close in.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold">
                  McCulloch Law, P.A. | DUI Refusal Defense
                </p>
                <p>238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p>Serving Plant City and all of Central Florida</p>
                <a
                  href="tel:8134442817"
                  className="mt-2 inline-block font-semibold text-[#BA8E2D]"
                >
                  (813) 444-2817
                </a>
              </div>
            </section>

            <section className="my-12 rounded-md bg-[#1B2639] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Do Not Let the 10-Day Deadline Pass
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                McCulloch Law, P.A. fights breath test refusal cases in Plant
                City and across Florida.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block bg-white px-6 py-3 font-semibold text-[#1B2639]"
              >
                Speak With McCulloch Law Today
              </Link>
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
