import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { outstandingWarrantsBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const takeaways = [
  "Outstanding means unresolved, not expired or forgotten.",
  "Bench warrants and arrest warrants both allow immediate arrest.",
  "Warrants remain active indefinitely in the Florida legal system.",
  "Polk County launched a Warrant Resolution Clinic for non-violent offenses in 2026.",
  "A motion to quash can clear a warrant without an arrest.",
  "Working with a defense attorney before surrendering can dramatically improve your outcome.",
];

const stats = [
  { value: "8,000+", label: "Active warrants in Polk County system in 2026" },
  { value: "24-48 hrs", label: "Typical wait to see a judge after arrest" },
  { value: "20+ years", label: "How long warrants can remain enforceable" },
];

const discoveryStats = [
  { label: "Police stop or arrest", value: "42%" },
  { label: "Background check", value: "28%" },
  { label: "Lawyer check", value: "18%" },
  { label: "Court records search", value: "9%" },
  { label: "Other or unknown", value: "3%" },
];

const clearSteps = [
  {
    title: "Check the warrant",
    text: "Look at court records or talk with a lawyer to confirm the case number, charge, and warrant details.",
  },
  {
    title: "Find out what kind of warrant it is",
    text: "Bench warrants and arrest warrants are handled differently, so the first step is identifying the exact type.",
  },
  {
    title: "Get a defense lawyer",
    text: "A lawyer can help you plan the safest approach and avoid being arrested unexpectedly at home or work.",
  },
  {
    title: "Ask the judge to cancel the warrant",
    text: "Your lawyer can file a motion to quash or recall the warrant, often by showing the court you will appear.",
  },
  {
    title: "Go to court or turn yourself in",
    text: "When surrender is necessary, doing it with a plan can affect bond, release, and the judge's view of the case.",
  },
];

const faqs = [
  {
    question: "Do outstanding warrants show up on a background check?",
    answer:
      "Yes. Most employment and housing background checks can show active warrants.",
  },
  {
    question: "Can an outstanding warrant be dropped?",
    answer:
      "Yes. A judge can cancel a warrant through a motion to quash or recall the warrant.",
  },
  {
    question: "What is the best way to get rid of a warrant?",
    answer:
      "Work with a defense attorney to verify the warrant and file the right motion with the court.",
  },
  {
    question: "Can you get a job with outstanding warrants?",
    answer:
      "It can be difficult because many employers treat active warrants as a serious risk.",
  },
  {
    question: "Should you turn yourself in?",
    answer:
      "Sometimes, but only after talking to a lawyer and making a plan for surrender, bond, and the next court date.",
  },
];

export default async function WhatAreOutstandingWarrants() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    outstandingWarrantsBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) => blog?.slug !== outstandingWarrantsBlog.slug
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
            <div className="relative w-full aspect-[725/438] overflow-hidden rounded-md mb-8">
              <Image
                src={outstandingWarrantsBlog.featuredImage.image.url}
                alt={outstandingWarrantsBlog.featuredImage.altText}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Warrant Defense | Polk County, Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {outstandingWarrantsBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Updated 2026 | McCulloch Law | Central Florida Criminal Defense
              </p>
            </div>

            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                An outstanding warrant is a court order authorizing police to
                arrest you. It stays active until resolved.
              </p>
              <p className="mt-4 text-white/85 leading-8">
                In Polk County, warrants never expire on their own. Missing a
                court date, unpaid fines, or a probation violation can all
                trigger one.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Quick Takeaways
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
                What Does "Outstanding Warrants" Mean?
              </h2>
              <p>
                Outstanding means something has not been taken care of yet. It
                does not mean a case is finished, expired, or thrown out. It
                means a court order is still in effect and can be enforced.
              </p>
              <p>
                Outstanding does not only refer to fines that have not been
                paid. It refers to any issue that has not been resolved,
                including showing up to court, following probation rules, or
                doing what a court ordered.
              </p>
              <p>
                An outstanding warrant is a court order that allows police to
                arrest someone. It has not been carried out yet, so police have
                the power to arrest that person at any time.
              </p>
            </section>

            <section className="grid gap-5 md:grid-cols-2 my-12">
              <div className="rounded-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Bench Warrants
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Bench warrants happen when someone does not show up to court.
                  They can also happen if you ignore a subpoena or do not pay a
                  fine. Missing a court date for a traffic ticket can be enough.
                </p>
              </div>
              <div className="rounded-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Arrest Warrants
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Arrest warrants happen when police believe someone committed a
                  crime. A judge or magistrate must approve the warrant after
                  police provide a sworn statement and probable cause.
                </p>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Common Reasons People Get Outstanding Warrants in Polk County
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Missing a court date or hearing.</li>
                <li>Not paying traffic tickets or court fines.</li>
                <li>Not following probation rules.</li>
                <li>
                  Ignoring court orders, including jury duty or court-ordered
                  child support.
                </li>
              </ul>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                2026 Update: Polk County Warrant Resolution Clinic
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                According to Yahoo News on April 3, 2026, Polk County started a
                Warrant Resolution Clinic. The program helps clear warrants for
                non-violent crimes without the person getting arrested right
                away. It often allows judges to cancel the warrant and set a
                court date.
              </p>
              <p className="mt-4 leading-8 text-gray-700">
                The goal is to address more than 8,000 warrants in the system.
                The program may also provide help with payment plans and getting
                driver licenses back.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How People Discover Their Warrant
              </h2>
              <div className="mt-5 space-y-4">
                {discoveryStats.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm font-semibold text-gray-700">
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
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How To Check If Someone Has An Outstanding Warrant in Polk
                County, Florida
              </h2>
              <p>
                If you think there might be a warrant out for you, checking
                early can help prevent an unexpected arrest.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Search Polk County court records to review your case status.
                </li>
                <li>
                  Contact the Polk County Clerk of Courts for details about your
                  case.
                </li>
                <li>
                  Speak with a criminal defense lawyer who can verify warrants
                  more safely.
                </li>
                <li>
                  Check with local law enforcement carefully. Going to the{" "}
                  <a
                    href="https://www.polksheriff.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    Polk County Sheriff's Office
                  </a>{" "}
                  could lead to an arrest, so talk to a lawyer first.
                </li>
              </ul>
              <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800">
                "The worst thing a person can do is walk into a police station
                to 'check' on a warrant without legal counsel. That is how
                people end up in handcuffs."
              </blockquote>
            </section>

            <section className="my-12 rounded-md bg-[#BA8E2D] p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Think You Have a Warrant in Polk County?
              </h2>
              <p className="mt-4 leading-8">
                Do not wait for the police to show up. Contact McCulloch Law
                today and find out where you stand.
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
                How Long Do Outstanding Warrants Last in Polk County?
              </h2>
              <p>
                A warrant remains active in the Florida legal system until it is
                resolved. The court must officially recall or quash the warrant
                to end it.
              </p>
              <p>
                Warrants do not expire on their own regardless of how much time
                passes. Even an old warrant can lead to jail during a routine
                stop in Lakeland or a background check for work.
              </p>
              <p>
                For serious offenses like a felony, there may be no statute of
                limitations. Learn more about why the{" "}
                <Link
                  href="/blogs/why-does-the-difference-between-a-pinellas-county-felony-and-misdemeanor-matter-for-your-future"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  difference between a felony and misdemeanor matters
                </Link>
                .
              </p>
              <blockquote className="border-l-4 border-[#BA8E2D] bg-gray-50 p-5 italic text-gray-800">
                "I once had a client come to me with a twenty-year-old warrant.
                He thought the court simply forgot about his old case from
                Bartow. Unfortunately, the police arrested him during a routine
                background check for work."
              </blockquote>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How to Tell if an Outstanding Warrant Is Still Active
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Look up your case in county court records and check for words
                  like open, active, FTA, or capias.
                </li>
                <li>
                  Call the court clerk to confirm whether a warrant has not been
                  served.
                </li>
                <li>
                  Ask a lawyer to check for you. Lawyers can review official
                  systems, including the{" "}
                  <a
                    href="http://pas.fdle.state.fl.us/pas/restricted/PAS/person/WantedPersons.jsf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#BA8E2D] underline"
                  >
                    FDLE wanted persons search
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Can I Clear a Warrant in Polk County, Florida?
              </h2>
              <div className="mt-6 grid gap-4">
                {clearSteps.map((step, index) => (
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
              <p className="mt-6 leading-8 text-gray-700">
                If you missed court because of a medical emergency, a lawyer can
                present proof to the judge and request cancellation. Low-level
                offenses may also qualify for Warrant Resolution Clinics.
              </p>
            </section>

            <section className="grid gap-5 md:grid-cols-2 mb-12">
              <div className="rounded-md border border-red-100 bg-red-50 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  Without Legal Help
                </h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                  <li>Arrested without warning at work or home.</li>
                  <li>No chance to plan or prepare a defense.</li>
                  <li>Days in Polk County jail waiting on a judge.</li>
                  <li>A warrant can follow you for 10 or 20+ years.</li>
                </ul>
              </div>
              <div className="rounded-md border border-green-100 bg-green-50 p-6">
                <h3 className="text-xl font-bold text-[#1B2639]">
                  With McCulloch Law
                </h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                  <li>Warrant resolved quietly before arrest.</li>
                  <li>Motion to quash filed by your attorney.</li>
                  <li>You stay free while the case is handled.</li>
                  <li>Judges respond better to cooperative clients.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-5 text-gray-700 leading-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                How Long Do You Sit in Jail if You Have a Warrant?
              </h2>
              <p>
                If you get arrested on a warrant, you go to jail and stay there
                until you see a judge. In Polk County, this usually happens
                within 24 to 48 hours.
              </p>
              <p>
                At the hearing, the judge decides if you can be released on
                bail. Your criminal history, the warrant type, and the charge
                all matter.
              </p>
              <p>
                If the warrant is connected to a DUI case, this guide on a{" "}
                <Link
                  href="/blogs/first-arrest-for-dui-advice-from-a-first-time-dui-lawyer-in-wesley-chapel"
                  className="font-semibold text-[#BA8E2D] underline"
                >
                  first DUI arrest in Wesley Chapel
                </Link>{" "}
                may also help.
              </p>
            </section>

            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Warrant Defense Lawyer Near You, Get Help Today
              </h2>
              <p className="mt-4 leading-8 text-gray-700">
                Outstanding warrants do not go away on their own. The longer
                you wait, the higher the risk that you will be arrested in
                public, at work, or at home.
              </p>
              <p className="mt-4 leading-8 text-gray-700">
                McCulloch Law helps people with criminal defense and injury
                cases in Central Florida. Our team can help you understand the
                court system and protect your rights.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold">McCulloch Law | Outstanding Warrant Defense</p>
                <p>238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p>Serving all of Central Florida</p>
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
