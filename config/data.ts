// export interface Insight {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   date: string;
// }

// export const insightsData: Insight[] = [
//   {
//     id: 1,
//     title:
//       "How Founder-Led Businesses Can Break Free from Stagnation and Scale to $100M and Beyond",
//     description:
//       "How Founder-Led Businesses Can Break Free from Stagnation and Scale to $100M and Beyond",
//     image: "/images/about-us/image 28 (1).png",
//     date: "Dec 15 2024",
//   },
//   {
//     id: 2,
//     title: "Scaling Your Business Effectively",
//     description:
//       "Discover the key principles for scaling your business while maintaining quality and culture.",
//     image: "/images/homepage/blog2.png",
//     date: "Dec 10 2024",
//   },
//   {
//     id: 3,
//     title: "Leadership in the Digital Age",
//     description:
//       "Explore modern leadership strategies that work in today's fast-paced digital environment.",
//     image: "/images/homepage/blog3.png",
//     date: "Dec 05 2024",
//   },
// ];

// export interface News {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   date: string;
//   url: string;
// }

// export const newsData: News[] = [
//   {
//     id: 1,
//     title: "Innovative Franchise Model Becomes Shwapno's Growth Engine",
//     description:
//       "Sabbir Hasan Nasir's franchise innovation at Shwapno turned a debt-burdened retail chain into a national growth engine. By flipping the traditional franchise model and retaining operational control, he pioneered a system that delivers consistent profit while empowering SME investors across Bangladesh.",
//     image: "/news/Frame90.png",
//     date: "Jan 15 2024",
//     url: "https://www.tbsnews.net/economy/corporates/innovative-franchise-model-becomes-shwapnos-growth-engine-aci-logistics-md-sabbir",
//   },
//   // {
//   //   id: 2,
//   //   title:
//   //     "The Corporate Sufi of Bangladesh: An Interview with Sabbir Hasan Nasir",
//   //   description:
//   //     "The corporate Sufi of Bangladesh, Sabbir Hasan Nasir, blends engineering precision with spiritual depth, transforming his unconventional journey across music, physics, and business into a masterclass in visionary leadership. As the force behind Shwapno's turnaround, he exemplifies how empathy, design thinking, and relentless pursuit of excellence can reshape industries.",
//   //   image: "/news/Frame91.png",
//   //   date: "Oct 24 2017",
//   //   url: "https://futurestartup.com/2017/10/24/an-interview-sabbir-hasan-nasir-executive-directoraci-logistics/",
//   // },
//   {
//     id: 4,
//     title: "From Engineer to Retail Force: Sabbir's Otobi Transformation",
//     description:
//       "Personally requested by Otobi's legendary founder in his final days, Sabbir Hasan Nasir took charge of a struggling legacy; what happened next changed the course of the company. How did an engineer with global corporate experience turn an artist's dream into a regional retail force?",
//     image: "/news/Frame93.png",
//     date: "Mar 20 2023",
//     url: "https://www.thedailystar.net/news-detail-73783",
//   },

//   {
//     id: 5,
//     title: "ACI Ltd Announces Sabbir H Nasir as New Managing Director",
//     description:
//       "After transforming Shwapno into the country's most recognized retail brand, Sabbir H Nasir takes on the role of Managing Director. With decades of local and global leadership experience, his next move signals a strategic shift for ACI's retail ambitions.",
//     image: "/news/Frame94.png",
//     date: "Jun 10 2023",
//     url: "https://www.dhakatribune.com/business/345984/aci-ltd-announces-sabbir-h-nasir-as-newmd-of",
//   },
//   {
//     id: 6,
//     title:
//       "How Shwapno Heads Towards Full Break-Even: A Masterpiece in Progress",
//     description:
//       "Layer by layer, Sabbir H Nasir has painted Shwapno across the map. Brushstrokes of risk, resilience, and reinvention led the company to dominate its competitions. As the outlines of profit begin to take shape, his long-drawn composition nears its boldest form yet.",
//     image: "/news/Frame95.png",
//     date: "Sep 05 2023",
//     url: "https://www.tbsnews.net/economy/corporates/how-shwapno-heads-towards-full-break-even-852371",
//   },
//   {
//     id: 3,
//     title: "Life Lessons from Sabbir Hasan Nasir: 10 Sharp Insights",
//     description:
//       "In this deeply personal feature, Sabbir Hasan Nasir, Executive Director of ACI Logistics and the man behind Shwapno's retail revolution, opens up about the philosophies that shaped his life. From studying under physicist Dr. Jamal Nazrul Islam to designing organizations with empathy and soul, he shares 10 sharp lessons on creativity, growth, and leading with meaning.",
//     image: "/news/Frame92.png",
//     date: "Nov 25 2019",
//     url: "https://futurestartup.com/2019/11/25/life-lessons-sabbir-hasan-nasir-aci-logistics/",
//   },
// ];

export interface PersonalInjury {
  id: number;
  title: string;
  description: string;
  image: string;
  mainDescription: string;
  slug: string;
}
export const PersonalInjuryServices: PersonalInjury[] = [
  {
    id: 1,
    title: "An Overview",
    description:
      "Injuries can turn life upside down, and you shouldn’t have to face the aftermath alone. We guide you through the process and fight for the compensation you deserve.",
    mainDescription: `
     
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mt-6 mb-4">
                      What Is Assault?
                    </h2>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Assault is the intentional threat one person makes toward
                      another, creating a real fear of harm even when no physical
                      contact occurs.
                    </p>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      The penalties depend on the specific charge and can have a
                      lasting impact on your future. Allegations of assault,
                      battery, stalking, or violating an injunction should never be
                      taken lightly. These cases require strong evidence, careful
                      preparation, and the guidance of an experienced criminal
                      defense attorney to ensure you receive a fair process.
                    </p>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      In today’s environment, especially when charges involve law
                      enforcement or other sensitive situations, it is important to
                      work with someone who can view your case clearly and handle it
                      with the skill it deserves.
                    </p>
                  </div>
                
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Are you looking for a criminal defense attorney in Tampa?
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      At McCulloch Law, P.A., we help clients through some of the
                      most difficult moments of their lives and work toward the best
                      possible outcome. Our attorney provides clear, steady guidance
                      to help you navigate a complicated legal system and understand
                      what to expect at every stage. Contact our team today to learn
                      how we can support you.
                    </p>
                  </div>
                 
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Legal Consequences of Assault on a Law Enforcement Officer
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Assault on a law enforcement officer is a serious offense that
                      carries enhanced penalties when the officer is performing
                      lawful duties. Depending on the circumstances, the charge can
                      be filed as a second-degree misdemeanor, punishable by up to
                      60 days in jail and a $500 fine, or as a first-degree
                      misdemeanor with penalties of up to one year in jail and a
                      $1,000 fine. In more severe situations, the case may even be
                      elevated to a felony, leading to far more significant
                      consequences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Penalties for Assaulting a Person 65 Years or Older
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Assault on a person who is 65 years or older carries enhanced
                      penalties, even if you did not know the individual’s age at
                      the time. The offense is still based on making a credible
                      threat that creates fear of harm, and a conviction can result
                      in up to one year in jail.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Understanding Aggravated Assault in Florida
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Aggravated assault in Florida is defined as intentionally
                      threatening another person while using a deadly weapon or
                      while committing a felony. The threat must create a reasonable
                      fear that harm is imminent. This offense is classified as a
                      third-degree felony, which carries far more serious
                      consequences than simple assault, a second-degree misdemeanor.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      The Consequences Of Aggravated Assault On A Law Enforcement
                      Officer
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Aggravated assault is an even bigger issue than assault on a
                      law enforcement officer. The use of force can garner a
                      third-degree felony with a 5 year prison maximum and a $5,000
                      fine, while a second-degree felony warrants up to 15 years in
                      prison and a $10,000 fine.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      What Is Battery?
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Battery in Florida occurs when a defendant intentionally makes
                      physical contact with a victim against that person’s will. The
                      prosecutor must show that the contact was unwanted and
                      intentional. The charge can range in severity from simple
                      battery to felony battery, and the penalties vary based on the
                      level of the offense.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      The Consequences Of Battery On A Law Enforcement Officer
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      In Florida, battery on a law enforcement officer is a serious
                      offense punishable by up to five years in prison, five years
                      of probation, and a $5,000 fine. The charge applies when a
                      defendant knowingly and intentionally strikes an officer who
                      is performing lawful duties at the time of the incident.
                    </p>
                    <ul className="text-base md:text-base leading-relaxed mb-3 space-y-2 list-disc list-inside">
                      <p>A law enforcement officer may include:</p>
                      <li>Police officer</li>
                      <li>Correctional officer</li>
                      <li>Traffic enforcement officer</li>
                      <li>Probation officer</li>
                      <li>Federal law enforcement officer</li>
                      <li>
                        And other authorized officers acting within their legal
                        duties
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Consequences Of Battery On A Person 65 Years Or Older
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Battery on a person 65 years or older involves using force
                      against their will and causing bodily harm. The contact is
                      typically defined as a strike, and a conviction can result in
                      penalties of up to five years in prison.
                    </p>
                  </div>
    `,

    image: "/images/practice/Assault.png",
    slug: "an-overview",
  },
  {
    id: 2,
    title: "Auto Accident",
    description:
      "Support for clients injured in auto accidents, including guidance through the claims process and help pursuing fair compensation.",
    mainDescription: `
        `,
    image: "/images/practice/Assault.png",
    slug: "auto-accident",
  },
  {
    id: 3,
    title: "Bicycle Accident",
    description:
      "Representation for cyclists hurt by negligent drivers, with clear direction on how to move forward with a claim.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "bicycle-accident",
  },
  {
    id: 4,
    title: "Truck Accidents",
    description:
      "Protection for clients after serious truck accidents, focused on preserving rights and pursuing the recovery they deserve.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "truck-accidents",
  },
  {
    id: 5,
    title: "Motorcycle Accidents",
    description:
      "Assistance for injured riders, from navigating the claims process to seeking full and fair compensation.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "motorcycle-accidents",
  },
  {
    id: 6,
    title: "Uber, UberEats And Lyft Accident",
    description:
      "Help for individuals injured in rideshare-related accidents, including support in seeking compensation.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "uber-ubereats-lyft-accident",
  },
  {
    id: 7,
    title: "Slip, Trip And Fall",
    description:
      "Guidance for clients injured in slip-trip-and-fall incidents, ensuring they understand their rights and available options.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "slip-trip-fall",
  },
  {
    id: 8,
    title: "Premises Liability",
    description:
      "Representation for injuries caused by unsafe property conditions, with strategic support through each step of the claim.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "premises-liability",
  },
  {
    id: 9,
    title: "Dog Bites",
    description:
      "Assistance for clients hurt in dog bite incidents, including pursuing compensation and protecting their rights.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "dog-bites",
  },
  {
    id: 10,
    title: "Medical Malpractice",
    description:
      "Support for individuals harmed by medical errors, with a focus on securing compensation for recovery.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "medical-malpractice",
  },
  {
    id: 11,
    title: "Products Liability",
    description:
      "Representation for clients injured by defective or dangerous products, along with help building a strong claim.",
    mainDescription: `
        
    `,
    image: "/images/practice/Assault.png",
    slug: "products-liability",
  },
  {
    id: 12,
    title: "Wrongful Death",
    description:
      "When a friend or family member passes away due to someone else’s negligence, our priority is to secure critical evidence, open a thorough investigation, and protect your family's right to justice.",
    mainDescription: `
       
                
    `,
    image: "/images/practice/Assault.png",
    slug: "wrongful-death",
  },
  {
    id: 13,
    title: "Fatal Accidents",
    description:
      "When negligence causes an accidental death, we help families understand their rights, investigate the case, and pursue the compensation they deserve.",
    mainDescription: `
       
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mt-6 mb-4">
                      What Is Assault?
                    </h2>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Assault is the intentional threat one person makes toward
                      another, creating a real fear of harm even when no physical
                      contact occurs.
                    </p>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      The penalties depend on the specific charge and can have a
                      lasting impact on your future. Allegations of assault,
                      battery, stalking, or violating an injunction should never be
                      taken lightly. These cases require strong evidence, careful
                      preparation, and the guidance of an experienced criminal
                      defense attorney to ensure you receive a fair process.
                    </p>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      In today’s environment, especially when charges involve law
                      enforcement or other sensitive situations, it is important to
                      work with someone who can view your case clearly and handle it
                      with the skill it deserves.
                    </p>
                  </div>
                
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Are you looking for a criminal defense attorney in Tampa?
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      At McCulloch Law, P.A., we help clients through some of the
                      most difficult moments of their lives and work toward the best
                      possible outcome. Our attorney provides clear, steady guidance
                      to help you navigate a complicated legal system and understand
                      what to expect at every stage. Contact our team today to learn
                      how we can support you.
                    </p>
                  </div>
                 
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Legal Consequences of Assault on a Law Enforcement Officer
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Assault on a law enforcement officer is a serious offense that
                      carries enhanced penalties when the officer is performing
                      lawful duties. Depending on the circumstances, the charge can
                      be filed as a second-degree misdemeanor, punishable by up to
                      60 days in jail and a $500 fine, or as a first-degree
                      misdemeanor with penalties of up to one year in jail and a
                      $1,000 fine. In more severe situations, the case may even be
                      elevated to a felony, leading to far more significant
                      consequences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Penalties for Assaulting a Person 65 Years or Older
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Assault on a person who is 65 years or older carries enhanced
                      penalties, even if you did not know the individual’s age at
                      the time. The offense is still based on making a credible
                      threat that creates fear of harm, and a conviction can result
                      in up to one year in jail.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Understanding Aggravated Assault in Florida
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Aggravated assault in Florida is defined as intentionally
                      threatening another person while using a deadly weapon or
                      while committing a felony. The threat must create a reasonable
                      fear that harm is imminent. This offense is classified as a
                      third-degree felony, which carries far more serious
                      consequences than simple assault, a second-degree misdemeanor.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      The Consequences Of Aggravated Assault On A Law Enforcement
                      Officer
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Aggravated assault is an even bigger issue than assault on a
                      law enforcement officer. The use of force can garner a
                      third-degree felony with a 5 year prison maximum and a $5,000
                      fine, while a second-degree felony warrants up to 15 years in
                      prison and a $10,000 fine.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      What Is Battery?
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Battery in Florida occurs when a defendant intentionally makes
                      physical contact with a victim against that person’s will. The
                      prosecutor must show that the contact was unwanted and
                      intentional. The charge can range in severity from simple
                      battery to felony battery, and the penalties vary based on the
                      level of the offense.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      The Consequences Of Battery On A Law Enforcement Officer
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      In Florida, battery on a law enforcement officer is a serious
                      offense punishable by up to five years in prison, five years
                      of probation, and a $5,000 fine. The charge applies when a
                      defendant knowingly and intentionally strikes an officer who
                      is performing lawful duties at the time of the incident.
                    </p>
                    <ul className="text-base md:text-base leading-relaxed mb-3 space-y-2 list-disc list-inside">
                      <p>A law enforcement officer may include:</p>
                      <li>Police officer</li>
                      <li>Correctional officer</li>
                      <li>Traffic enforcement officer</li>
                      <li>Probation officer</li>
                      <li>Federal law enforcement officer</li>
                      <li>
                        And other authorized officers acting within their legal
                        duties
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-black mt-6 mb-4">
                      Consequences Of Battery On A Person 65 Years Or Older
                    </h4>
                    <p className="text-base md:text-base leading-relaxed mb-3">
                      Battery on a person 65 years or older involves using force
                      against their will and causing bodily harm. The contact is
                      typically defined as a strike, and a conviction can result in
                      penalties of up to five years in prison.
                    </p>
                  </div>
               
    `,
    image: "/images/practice/Assault.png",
    slug: "fatal-accidents",
  },
];
