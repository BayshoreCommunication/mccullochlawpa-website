import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import { shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import Image from "next/image";
import Link from "next/link";

const keyPoints = [
  "You are under no obligation to give a recorded statement to the at-fault driver's insurer.",
  "Florida's 14-day medical rule can gut your PIP benefits before you even meet a claims adjuster.",
  "Represented claimants net more after fees in the vast majority of cases, though the averages get complicated fast.",
  "A free consultation costs nothing and locks in nothing, so there's no reason to guess alone.",
];

const stats = [
  {
    value: "14 Days",
    label: "To seek medical care or risk losing PIP",
    statute: "Fla. Stat. § 627.736",
  },
  {
    value: "$10,000",
    label: "Minimum PIP coverage required statewide",
    statute: "Fla. Stat. § 627.736",
  },
  {
    value: "60 Days",
    label: "For an insurer to cure bad faith conduct after notice",
    statute: "Fla. Stat. § 624.155",
  },
];

const comparisonData = [
  {
    factor: "Gross settlement per $1 of medical bills",
    unrepresented: "$1.80 (2022 average)",
    represented: "~$2.00–$2.30 before fees",
  },
  {
    factor: "Median time to close a claim",
    unrepresented: "Roughly half as long",
    represented: "Nearly 440 days (median)",
  },
  {
    factor: "Recorded statement risk exposure",
    unrepresented: "Full exposure, unscreened",
    represented: "Filtered through counsel",
  },
  {
    factor: "Typical claim complexity",
    unrepresented: "Skews toward minor, undisputed",
    represented: "Skews toward serious, contested",
  },
  {
    factor: "Who reviews the settlement release",
    unrepresented: "You, alone, under time pressure",
    represented: "An attorney familiar with the language",
  },
];

const faqs = [
  {
    question: "May I change attorneys if my case is already pending?",
    answer:
      "Yeah. When you feel like they are being rude by ignoring your calls or simply that they are sitting on their hands and your bills are piling up, you can simply get rid of them.",
  },
  {
    question: "When do I have to file a personal injury case in Florida?",
    answer:
      "The statute of limitations for most negligence cases is 2 years from the date of the accident, so if you wait too long, you may kill your case before it even begins.",
  },
  {
    question: "What if the at-fault person doesn’t have enough coverage?",
    answer:
      "In those instances, your own Uninsured/Underinsured Motorist coverage, also known as UM, will have to take the heat. It's similar to the other man's insurance policy that he should have had in the first place.",
  },
  {
    question: "What if my fault was a part of the accident?",
    answer:
      "Florida has embraced the comparative negligence doctrine, to a point where if you're not over 50% at fault, you can still recover damages.",
  },
];

export default async function ShouldYouTalkToInsuranceAfterACrashWithoutALawyer() {
  const blogPostData = await GetAllPostData();
  const sidebarBlogs = [
    shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog,
    ...(blogPostData?.data?.filter(
      (blog: { slug?: string }) =>
        blog?.slug !== shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog.slug
    ) || []),
  ];
  const recentBlogs = sidebarBlogs
    .filter((blog: any) => blog?.published && blog?.slug)
    .slice(0, 10);

  return (
    <>
      {/* Schema / Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.mcfloridalaw.com/blogs/should-you-talk-to-insurance-after-a-crash-without-a-lawyer#breadcrumb",
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
                    name: "Should You Talk to Insurance After a Crash Without a Lawyer?",
                    item: "https://www.mcfloridalaw.com/blogs/should-you-talk-to-insurance-after-a-crash-without-a-lawyer",
                  },
                ],
              },
              {
                "@type": "BlogPosting",
                "@id":
                  "https://www.mcfloridalaw.com/blogs/should-you-talk-to-insurance-after-a-crash-without-a-lawyer#blogposting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.mcfloridalaw.com/blogs/should-you-talk-to-insurance-after-a-crash-without-a-lawyer",
                },
                headline: "Talk to Insurance After a Crash? Think Twice",
                name: "Should You Talk to Insurance After a Crash Without a Lawyer?",
                description:
                  "You shouldn’t talk to insurance after a Florida crash without legal representation. Unrepresented victims often settle faster for significantly lower payouts.",
                url: "https://www.mcfloridalaw.com/blogs/should-you-talk-to-insurance-after-a-crash-without-a-lawyer",
                image: {
                  "@type": "ImageObject",
                  url: "https://www.mcfloridalaw.com/images/static-blogs/talk-to-insurance-after-a-crash-without-lawyer.webp",
                },
                isPartOf: {
                  "@type": "Blog",
                  "@id": "https://www.mcfloridalaw.com/blogs#blog",
                  name: "McCulloch Law, P.A. Blog",
                  url: "https://www.mcfloridalaw.com/blogs",
                },
                about: {
                  "@type": "Thing",
                  name: "Car Accident Insurance Claims in Florida",
                },
                keywords: [
                  "talk to insurance after a crash without a lawyer",
                  "should you talk to insurance adjuster after accident",
                  "Florida car accident insurance recorded statement",
                  "PIP benefits Florida 14 day rule",
                  "Florida bad faith insurance claim 624.155",
                  "unrepresented vs represented claimant settlement",
                  "Tampa car accident attorney",
                  "McCulloch Law, P.A.",
                ],
                author: {
                  "@type": "Organization",
                  name: "McCulloch Law, P.A.",
                  url: "https://www.mcfloridalaw.com/",
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
                datePublished: "2026-10-28",
                dateModified: "2026-10-28",
                inLanguage: "en-US",
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.mcfloridalaw.com/blogs/should-you-talk-to-insurance-after-a-crash-without-a-lawyer#faq",
                url: "https://www.mcfloridalaw.com/blogs/should-you-talk-to-insurance-after-a-crash-without-a-lawyer",
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
            {/* Featured Image with Figure & Caption */}
            <figure className="w-full overflow-hidden rounded-md bg-gray-50 mb-8 border border-gray-200 shadow-sm">
              <Image
                src={shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog.featuredImage.image.url}
                alt={shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog.featuredImage.altText}
                title={shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog.featuredImage.title}
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
              <figcaption className="p-3 text-xs md:text-sm text-gray-500 italic bg-gray-50 border-t border-gray-100 text-center">
                {shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog.featuredImage.caption}
              </figcaption>
            </figure>

            {/* Post Header & Dates (American Format) */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BA8E2D]">
                Car Accident Claims | Tampa Bay, Florida
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#1B2639]">
                {shouldYouTalkToInsuranceAfterACrashWithoutALawyerBlog.title}
              </h1>
              <p className="mt-4 text-base text-gray-600 font-medium">
                Published: October 28, 2026 | Updated: October 28, 2026 | McCulloch Law, P.A. | Tampa Personal Injury Attorney
              </p>
            </div>

            {/* Hero Navy Callout Box */}
            <section className="rounded-md border border-gray-200 bg-[#1B2639] p-6 md:p-8 text-white mb-10 shadow-sm">
              <p className="text-xl md:text-2xl leading-relaxed text-justify">
                <span className="font-bold text-[#BA8E2D]">No. </span>
                You aren&apos;t legally required to give that other driver&apos;s insurance company a recorded statement, and you&apos;d be irrational to give one before an attorney looks over your case. Florida&apos;s own no-fault rules and the actual claims data both show that unrepresented folks settle faster but they walk away with way less money, especially once your body starts falling apart 3 days later.
              </p>
            </section>

            {/* Key Points Box */}
            <section className="mb-10 rounded-md border-l-4 border-[#BA8E2D] bg-[#F2F4F8] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-[#1B2639] uppercase tracking-wide">
                Key Points
              </h2>
              <ul className="mt-5 grid gap-3">
                {keyPoints.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800"
                  >
                    <span className="text-[#BA8E2D] font-bold text-lg leading-none mt-1">
                      &#9679;
                    </span>
                    <span className="leading-7 text-justify font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Let's Talk About That Phone Call You're About to Get */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Let&apos;s Talk About That Phone Call You&apos;re About to Get
              </h2>
              <p className="text-justify">
                Here&apos;s the scene. Your bumper is somewhere in the median off Dale Mabry, your neck feels like it&apos;s been on a rollercoaster designed by a sadist, and your phone rings from a number you don&apos;t recognize. A voice, warm as Florida asphalt in July, tells you they&apos;re &ldquo;just calling to help wrap this up quickly.&rdquo; Friend, that&apos;s not a courtesy call.
              </p>
              <p className="text-justify">
                Now, I&apos;m not trying to scare you. You&apos;re smart enough to know when someone is trying to pull one over on you and I would rather you get the straight dirt than some corporate propaganda. So let&apos;s talk about what&apos;s actually going down when an insurance adjuster calls you after a Tampa Bay crash.
              </p>
            </section>

            {/* Section: Who's On the Other End of That Line, Exactly? */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Who&apos;s On the Other End of That Line, Exactly?
              </h2>
              <p className="text-justify">
                Two different insurance conversations happen after a crash, and mixing them up is where good people get hurt twice. The first is with your own carrier, where you&apos;re seeking Personal Injury Protection, or PIP, benefits under Florida&apos;s no-fault system. The second call is with the guy who hit you&apos;s insurance, and that right there is where the real drama starts.
              </p>
            </section>

            {/* Statutory Deadlines & Rules: 3 Stats Cards */}
            <section className="grid gap-4 md:grid-cols-3 mb-12">
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="rounded-md bg-gray-50 border border-gray-200 p-6 text-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#BA8E2D]">
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-700 leading-6">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs text-gray-500 font-medium">
                    {item.statute}
                  </p>
                </div>
              ))}
            </section>

            {/* Section: The Recorded Statement Is a Deposition Wearing a Disguise */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                The Recorded Statement Is a Deposition Wearing a Disguise
              </h2>
              <p className="text-justify">
                Let&apos;s be honest about what a recorded statement actually is. It sounds like paperwork. It behaves like testimony. The adjuster on that call isn&apos;t your advocate, no matter how many times they say &ldquo;we&apos;re here to help.&rdquo; Their employer measures their performance, in part, by how little the company pays out. That&apos;s the business model.
              </p>
              <p className="text-justify">
                The tactics are well documented and remarkably consistent from one insurer to the next. Adjusters compare your recorded statement against everything else you&apos;ve said, looking for the smallest inconsistency between what you told the officer at the scene and what you say a week later once the pain has fully announced itself. As{" "}
                <a
                  href="https://www.allenandallen.com/blog/why-you-shouldnt-give-a-recorded-statement-to-the-insurance-company/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  one plaintiff&apos;s firm bluntly put it
                </a>
                , the company needs a reason to deny your claim, and your own words are the cheapest ammunition they&apos;ll ever get.
              </p>

              {/* Quote Block by Drew McCulloch */}
              <blockquote className="my-8 border-l-4 border-[#BA8E2D] bg-[#F2F4F8] p-6 italic text-gray-800 rounded-r-md shadow-sm">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-justify">
                  &ldquo;People think the adjuster&apos;s job is to pay them what they&apos;re owed. The adjuster&apos;s job is to close the file for less than what it&apos;s actually worth. Those are two very different jobs, and only one of them is looking out for you.&rdquo;
                </p>
                <cite className="block mt-3 text-sm font-bold text-[#1B2639] not-italic">
                  &mdash; Drew McCulloch, Esq., Personal Injury Attorney, McCulloch Law, P.A.
                </cite>
              </blockquote>

              <p className="text-justify">
                Common maneuvers include minimizing your injuries before an MRI ever happens, dangling a quick settlement check before you know the full extent of what&apos;s wrong with you, and quietly shifting blame onto you in ways that shave down the eventual number.{" "}
                <a
                  href="https://onmyside.com/blog/tactics-insurance-adjusters-use-to-lowball-your-claim/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Industry analyses of these patterns
                </a>{" "}
                describe delay, dispute, and deny as the three-step rhythm most claims departments run on, and once you understand the rhythm, the friendly voice on the phone starts sounding a lot less friendly.
              </p>
            </section>

            {/* Mid-Article Call To Action Banner */}
            <section className="my-10 rounded-md bg-[#1B2639] p-6 md:p-8 text-white text-center shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-[#BA8E2D]">
                Already Got the Call? Don&apos;t Answer It Alone.
              </h2>
              <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                McCulloch Law, P.A. offers a free consultation, day or night, before you say one more word to an adjuster.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 border border-[#BA8E2D] text-[#BA8E2D] rounded hover:bg-[#BA8E2D] hover:text-white transition-colors"
                >
                  Call (813) 444-2817
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#BA8E2D] text-[#1B2639] rounded hover:bg-white hover:text-[#1B2639] transition-colors"
                >
                  Schedule Online &rarr;
                </Link>
              </div>
            </section>

            {/* Section: Now For the Part Most Blogs Won't Tell You */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Now For the Part Most Blogs Won&apos;t Tell You
              </h2>
              <p className="text-justify">
                The Insurance Research Council, an arm connected to the insurance industry&apos;s own Triple-I network, released a 2026 analysis covering more than 7.4 million auto injury claims closed between 2017 and 2022. The headline finding gets repeated everywhere.{" "}
                <a
                  href="https://www.insurancebusinessmag.com/us/news/claims/us-auto-injury-claim-costs-outpaced-medical-inflation-for-five-years-straight--study-585608.aspx"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Attorney-represented claimants took nearly 440 days
                </a>{" "}
                on average to settle compared to about 200 days for those who didn&apos;t have lawyers. And the clients received $1.40 per $1 in medical expenses after fees, compared with $1.80 for unrepresented claimants.
              </p>
              <p className="text-justify">
                Look closer at the same study and you&apos;ll find that before fees, represented claimants actually received more, roughly $2.00 in total settlement for every dollar of medical bills, up from $1.80 just five years earlier. The gap after fees exists because attorney&apos;s fees exist, not because attorneys make cases worse. And an insurer-funded study measuring how expensive lawyers are for insurers is a little like a fox publishing research on henhouse security.
              </p>
            </section>

            {/* Section: What the Comparison Actually Looks Like */}
            <section className="my-10 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                What the Comparison Actually Looks Like
              </h2>
              <div className="overflow-x-auto rounded-md border border-gray-200 shadow-sm">
                <table className="w-full min-w-[620px] border-collapse">
                  <thead>
                    <tr className="bg-[#1B2639] text-white text-left text-sm font-semibold">
                      <th className="p-4 border border-gray-200">Factor</th>
                      <th className="p-4 border border-gray-200">Unrepresented Claimant</th>
                      <th className="p-4 border border-gray-200">Represented Claimant</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                    {comparisonData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-4 border border-gray-200 font-bold text-[#1B2639]">
                          {row.factor}
                        </td>
                        <td className="p-4 border border-gray-200 text-gray-700">
                          {row.unrepresented}
                        </td>
                        <td className="p-4 border border-gray-200 font-semibold text-[#BA8E2D]">
                          {row.represented}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mt-2 text-right">
                Source: Insurance Research Council, &ldquo;Auto Injury Insurance Claims: A Study of Increasing Claim Severity,&rdquo; 2026.
              </p>
            </section>

            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <p className="text-justify">
                There&apos;s a second wrinkle nobody advertises. That $1.80 unrepresented average isn&apos;t a clean control group of people who negotiated brilliantly on their own. It includes every fender-bender with a sore neck that healed in a week, cases so minor and clear-cut that any reasonable adjuster pays them fast because there&apos;s nothing to fight about.
              </p>
            </section>

            {/* Section: When Insurers Cross the Line Into Bad Faith */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                When Insurers Cross the Line Into Bad Faith
              </h2>
              <p className="text-justify">
                Florida isn&apos;t only a state that controls the actions of the insurance company, it also provides you with teeth to use to enforce these actions. If an insurer fails to make a &ldquo;fair and timely settlement&rdquo; and fails to explain a denial or fails to conduct a proper investigation, then it may be liable for damages in excess of the policy limit, per Florida Statute &sect; 624.155.{" "}
                <a
                  href="https://www.lawyer-monthly.com/?p=75989"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  A bad faith claim
                </a>{" "}
                must be filed with the Florida Department of Financial Services in advance of any claim, and the insurer is then given 60 days to make the claim right.
              </p>
            </section>

            {/* Infographic Banner: AVERAGE U.S. AUTO BODILY INJURY CLAIM PAYMENTS */}
            <section className="my-12 rounded-md bg-[#1B2639] p-6 md:p-8 text-white shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-[#BA8E2D] uppercase tracking-wider text-center">
                Average U.S. Auto Bodily Injury Claim Payments, 2017 vs 2022
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 text-center max-w-lg mx-auto">
                <div className="bg-white/10 rounded-lg p-6 border border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-white">$14,000</div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-white/70 font-semibold">2017 Average</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 border border-[#BA8E2D]/40">
                  <div className="text-4xl md:text-5xl font-bold text-[#BA8E2D]">$20,000+</div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-white/70 font-semibold">2022 Average</div>
                </div>
              </div>
              <p className="mt-4 text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center">
                Claim severity rose 7.8% annually, more than double the pace of medical inflation, driven by rising medical costs and greater attorney involvement. Source: Insurance Research Council, 2026.
              </p>
            </section>

            {/* Section: A Former Prosecutor Reads an Insurance File Differently */}
            <section className="space-y-5 text-gray-700 leading-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                A Former Prosecutor Reads an Insurance File Differently
              </h2>
              <p className="text-justify">
                When an insurance adjuster is trying to shift blame against you for your claim, he or she is essentially creating a case against you much like a prosecutor in court. Drew knows this because he spent four years working for the{" "}
                <Link
                  href="/about"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Hillsborough County State Attorney&apos;s Office
                </Link>{" "}
                before founding McCulloch Law, P.A. in 2014. He understands first-hand how adjusters build these thinly-veiled arguments, and he knows how to deconstruct them in order to get his clients the maximum settlement possible.
              </p>
              <p className="text-justify">
                For more than 15 years, offering personal injury as well as criminal defense services to our clients in{" "}
                <Link
                  href="/practice/auto-accident"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  Tampa, St. Petersburg, Clearwater, Brandon and Riverview
                </Link>
                , the company is ready to assist in any personal injury case on a contingency-fee basis. This implies that the client will not be obliged to pay any legal fees in case of the firm&apos;s inefficiency in securing compensation. The firm not only assists clients in the courtroom, but also provides easy consultation services in a client&apos;s home or hospital room.
              </p>
              <p className="text-justify">
                Drew&apos;s natural ability to spot a weak argument is put to good use in{" "}
                <Link
                  href="/testimonials"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  client testimonials
                </Link>
                , where people praises him as an effective communicator, a reasonable negotiator and an honest evaluator of the options available in one&apos;s case.
              </p>
              <p className="text-justify">
                When considering whether to retain the firm for a{" "}
                <Link
                  href="/blogs/what-is-a-wrongful-death-claim-in-florida-law"
                  className="font-semibold text-[#BA8E2D] underline hover:text-[#d4a843] transition-colors"
                >
                  wrongful death
                </Link>{" "}
                or serious injury case, it&apos;s important to realize that most personal injury attorneys would not devote the time and resources necessary to build the kinds of arguments that Drew is capable of constructing.
              </p>
            </section>

            {/* Law Firm Contact Box */}
            <section className="my-12 rounded-md bg-gray-50 border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Car Accident Lawyer Near You &mdash; Get Help Today
              </h2>
              <p className="mt-4 leading-8 text-gray-700 text-justify">
                Insurance adjusters work tirelessly to protect company profits by reducing payouts. Before you answer questions or sign a release, make sure your rights and future medical needs are fully safeguarded.
              </p>
              <div className="mt-6 text-gray-800">
                <p className="font-bold text-lg text-[#1B2639]">
                  McCulloch Law, P.A. | Outstanding Personal Injury &amp; Car Accident Representation
                </p>
                <p className="mt-1">238 East Davis Boulevard, Ste 202, Tampa, FL</p>
                <p className="mt-1">Serving Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and all Tampa Bay communities</p>
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

            {/* FAQ Section */}
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2639]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-md border border-gray-200 p-5 bg-white shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-[#1B2639]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-700 text-justify">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <p className="mt-10 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500 italic text-justify">
              Disclaimer: This article is for general informational purposes and does not form an attorney-client relationship. For help with any personal injury or accident case, reach out to McCulloch Law.
            </p>
          </article>

          {/* Recent Blogs Sidebar */}
          <aside className="w-full lg:max-w-[400px] lg:shrink-0 h-full lg:h-[1000px] overflow-y-auto p-3 rounded-lg">
            <h2 className="font-medium text-4xl text-black border-b-2 pb-4 mb-6">
              Recent Blogs
            </h2>

            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog: any, index: number) => (
                <Link
                  key={index}
                  href={`/blogs/${blog.slug}`}
                  className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3 hover:shadow-md transition-shadow"
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
