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
     
        <div className="w-full">
 
  <h2 className="text-3xl md:text-4xl font-bold text-black mt-6 mb-6">
    Personal Injury Law Firm
  </h2>

 
  <p className="text-base md:text-lg leading-relaxed mb-5">
    If you’ve been injured, whether in an automobile accident or an incident
    due to someone else’s fault, Florida law provides that you have legal
    rights and are entitled to be fully compensated for your injury.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    It is important that you consult with an attorney as soon as possible
    after your injury to make sure your rights are protected, and you do not
    do anything that might jeopardize your case. The attorneys at McCulloch
    Law, P.A. stand ready to fight for you if you’ve been injured in an Auto
    accident, Motorcycle accident, Trucking accident, Bicycle Accident, Uber,
    Uber Eats, and Lyft Accidents, Slip and Fall, Premises Liability, Dog
    Bite, Medical Malpractice, Product Liability, or any other incident in
    which you were injured due to another’s negligence.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    Directly following an injury, you may be contacted by an insurance
    company. It is important to remember that the insurance company has no
    duty to look out for your best interests. If you want someone in your
    corner that has a legal obligation to act in your best interests, you
    should hire an attorney to deal with the insurance company. When you hire
    McCulloch Law, P.A., our attorneys work diligently to maximize your
    settlement money and ensure the best outcome for your case.
  </p>

 
  <h3 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
    Why Hire A Personal Injury Attorney?
  </h3>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    McCulloch Law, P.A. offers free consultations to anyone who has been hurt
    through no fault of their own. Our attorneys can come to you for your
    consultation at your home, the hospital, or anywhere that is convenient
    for you. Additionally, we will take your injury case on a contingency fee
    basis, meaning that you’ll never owe us money for legal fees unless you
    win your case.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    If you’ve been injured, the medical bills and lost wages can start to
    pile up, causing stress on you. Let the experienced attorneys at
    McCulloch Law, P.A. take the burden off of you and start working to make
    you whole again.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    The attorneys at McCulloch Law, P.A. have experience handling personal
    injury and auto accident cases in Tampa, St. Petersburg, Clearwater,
    Brandon, Riverview, and most surrounding areas of the Greater Tampa Bay
    Area. We are licensed to practice law throughout the entire State of
    Florida.
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
    <div className="w-full">
 
  <h2 className="text-3xl md:text-4xl font-bold text-black mt-6 mb-6">
    Auto Accidents
  </h2>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    When you’ve been involved in an automobile accident, your life can be
    turned upside down in an instant. Florida law provides that you are
    entitled to be compensated by the at-fault driver for your injuries and
    the damage to your vehicle.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    In Florida, you have only 14 days to seek medical attention or else waive
    important insurance benefits. This is just one reason to consult with an
    attorney as soon as possible following your automobile accident. The
    attorneys at McCulloch Law, P.A. are here to determine what insurance
    benefits are available and make sure you receive the maximum compensation
    for your auto accident.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    Following an auto accident, it is important to call the police and ask
    for a police report. Make sure the police get the other driver’s driver
    license and insurance information. You’ll also want to document the
    accident by taking photographs of the scene of the accident, your
    vehicle, and the at-fault driver’s vehicle; this evidence may be of great
    use in your case against the at-fault driver. If you’ve been injured in
    the accident, seek the appropriate medical treatment to not only receive
    the necessary treatment, but also to document your injuries. The
    insurance companies may reach out to you to take a statement or offer you
    money to drop the case; in no event should you speak to any insurance
    company without an attorney. This is why it is important to call an
    attorney as soon as possible to make sure your rights are protected.
  </p>

 
  <h3 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
    Why Hire An Auto Accident Lawyer?
  </h3>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    McCulloch Law, P.A. offers free consultations to victims of automobile
    accidents. Our attorneys can come to you for your consultation at your
    home, the hospital, or anywhere that is convenient for you. Additionally,
    we will take your injury case on a contingency fee basis, meaning that
    you’ll never owe us money for legal fees unless you win your case.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    If you’ve been injured in an automobile accident, the medical bills and
    lost wages can start to pile up, causing stress on you. Let the
    experienced attorneys at McCulloch Law, P.A. take the burden off of you
    and start working to make you whole again.
  </p>

  <p className="text-base md:text-lg leading-relaxed mb-5">
    The attorneys at McCulloch Law, P.A. have experience handling auto
    accident cases in Tampa, St. Petersburg, Clearwater, Brandon, Riverview,
    and most surrounding areas of the Greater Tampa Bay Area. We are licensed
    to practice law throughout the entire State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
 
  <h2 className="text-3xl md:text-4xl font-bold text-black">
    Bicycle Accidents
  </h2>

 
  <p className="text-lg leading-relaxed text-gray-700">
    Pinellas County, Florida has the highest cyclist death rate in the Tampa Bay
    metro area – which has the highest rate of any metro region in the United
    States. If you ride a bicycle in Tampa or St. Pete, you know how dangerous
    the roads can be for cyclists.
  </p>

 
  <p className="text-lg leading-relaxed text-gray-700">
    Narrow bike lanes, confusing traffic signals, and distracted drivers are just
    a few of the dangers that you need to be aware of every time you get on your
    bicycle. If you’ve been injured in a bicycle accident, it is important to
    contact an attorney to guide you through the process of making a claim
    against the at-fault driver. The attorneys at McCulloch Law, P.A. are here
    to help.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Protect Yourself: Wear a Helmet
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    The number one precaution you can take as a cyclist is to wear a helmet. This
    not only affects your legal case, but more importantly, it could save your
    life. Helmet use reduces the odds of head injury by 50%, and head, face, or
    neck injury by 33%. Always wear a helmet approved by the federal CPSC Safety
    Standard.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    What To Do After a Bicycle Accident
  </h3>
  <ul className="list-disc pl-6 text-lg leading-relaxed text-gray-700">
    <li>Call the police and request a police report.</li>
    <li>Ensure the officer records the driver’s license and insurance information.</li>
    <li>
      Document the scene by photographing the accident location, your bicycle,
      and the at-fault driver’s vehicle.
    </li>
    <li>
      Seek medical treatment to document your injuries and get proper care.
    </li>
    <li>
      Do not speak with any insurance company before consulting an attorney.
    </li>
  </ul>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire a Bicycle Accident Lawyer?
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations to victims of bicycle
    accidents. Our attorneys can meet you at your home, the hospital, or
    anywhere convenient for you. We work on a contingency fee basis – meaning
    you owe us nothing unless you win.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    If you’ve been injured, medical bills and lost wages can pile up quickly.
    Let our experienced attorneys lift the burden and work to make you whole
    again.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Serving the Tampa Bay Area
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have experience handling bicycle
    accident cases in Tampa, St. Petersburg, Clearwater, Brandon, Riverview,
    and most surrounding areas of the Greater Tampa Bay Area. We are licensed
    to practice throughout the entire State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
 
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    The Lawyer You Need To Call In Tampa, FL After A Trucking Accident
  </h2>

 
  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. was built by Tampa native, Drew McCulloch. He has been a
    personal injury and criminal defense attorney since 2010. McCulloch Law,
    P.A. offers consultations to begin alleviating your post-accident stress.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    How Common Are Trucking Accidents in Tampa, FL?
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    Florida has seen a steady increase in collisions involving large trucks. The
    state currently ranks third in the country for truck accident fatalities.
    Because of its central location and commerce, Tampa is prone to accidents.
    As the population continues to grow, the number of accidents does, too.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    These accidents are almost always due to driver error; however, there are
    exceptions. The most common causes of trucking accidents are:
  </p>

 
  <ul className="list-disc pl-6 text-lg leading-relaxed text-gray-700">
    <li>Speeding</li>
    <li>Traffic flow interruption</li>
    <li>Distracted driving</li>
    <li>Fatigued driving</li>
    <li>Weather conditions</li>
    <li>Road construction</li>
    <li>Cargo overload</li>
    <li>Vehicle malfunctions</li>
    <li>Prescription drug use</li>
  </ul>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Do You Need A Truck Accident Attorney?
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    When a trucking accident occurs, those in a passenger vehicle are typically
    the most affected. Unfortunately, accidents involving trucks are more
    complex than those involving two regular-sized vehicles. The size and weight
    of commercial trucks often lead to more severe injuries and significant
    vehicle damage.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Additionally, trucking accidents often involve multiple insured parties — the
    truck driver, their employer, and even the truck leasing company. These
    cases require investigation into:
  </p>

 
  <ul className="list-disc pl-6 text-lg leading-relaxed text-gray-700">
    <li>Driver regulations</li>
    <li>Logs</li>
    <li>Vehicle maintenance</li>
    <li>Details about the truck & cargo load</li>
    <li>Witness statements</li>
  </ul>

  <p className="text-lg leading-relaxed text-gray-700">
    A truck accident attorney helps you navigate this process to ensure you are
    properly compensated while you focus on recovering.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    When Do You Need To Make A Claim After A Truck Accident Injury?
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    In Florida, you must seek medical care within 14 days after an accident or
    risk waiving certain insurance benefits.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Additionally, trucking companies only retain certain data—such as driver logs
    and maintenance records—for limited periods. Delaying your claim could make
    vital evidence unavailable.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Contacting a truck accident lawyer as soon as possible ensures they can begin
    collecting information from the trucker, the company, witnesses, and vehicle
    logs.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    What Type Of Compensation Could I Expect After A Truck Crash?
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    Compensation after a trucking accident depends on several factors, including:
  </p>

  <ul className="list-disc pl-6 text-lg leading-relaxed text-gray-700">
    <li>The severity of your injuries</li>
    <li>Your required medical care</li>
    <li>Any future medical needs</li>
    <li>Lost wages</li>
    <li>The time missed from work</li>
    <li>The long-term impact on your ability to work</li>
    <li>Life-altering consequences of the accident</li>
  </ul>

  <p className="text-lg leading-relaxed text-gray-700">
    Florida is a comparative negligence state, meaning fault may be shared.
    However, you can still seek damages even if you are partially responsible
    for the accident.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
 
  <h2 className="text-3xl md:text-4xl font-bold text-black">
    Motorcycle Accidents
  </h2>

 
  <p className="text-lg leading-relaxed text-gray-700">
    Motorcycle accidents can be especially devastating, given the fact that a
    motorcycle driver or rider has no seatbelt or large vehicle to protect
    them. Motorcyclists are approximately 28 times more frequently killed in a
    traffic crash compared to occupants of passenger cars.
  </p>

 
  <p className="text-lg leading-relaxed text-gray-700">
    Many times, other drivers on the road do not pay enough attention to
    motorcyclists. This is why vigilance is crucial when riding. If you’ve been
    injured in a motorcycle accident through someone else’s fault, Florida law
    entitles you to compensation. The attorneys at McCulloch Law, P.A. are here
    to help.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Protect Yourself: Wear a Helmet
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    The number one precaution you can take as a motorcyclist is wearing a helmet.
    It impacts your legal case and, more importantly, your survival. Motorcycle
    helmets reduce the risk of head injury by 69% and the risk of death by 42%.
    Always wear a DOT-approved helmet whenever you ride.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    What To Do After a Motorcycle Accident
  </h3>
  <ul className="list-disc pl-6 text-lg leading-relaxed text-gray-700">
    <li>Call the police immediately and request a police report.</li>
    <li>Ensure the officer documents the driver’s license and insurance information.</li>
    <li>
      Photograph the scene, your motorcycle, and the at-fault driver’s vehicle
      to preserve critical evidence.
    </li>
    <li>
      Seek medical treatment promptly to both treat and document your injuries.
    </li>
    <li>
      Do not give statements to insurance companies without speaking to an
      attorney.
    </li>
  </ul>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire a Motorcycle Accident Lawyer?
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations to motorcycle accident victims.
    Our attorneys can meet you at your home, the hospital, or any convenient
    place. We work on a contingency fee basis, so you owe nothing unless you win.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    If you’ve been injured, medical bills and lost wages can quickly accumulate.
    Let our experienced attorneys take the burden off your shoulders and work to
    make you whole again.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Serving the Greater Tampa Bay Area
  </h3>
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have extensive experience handling
    motorcycle accident cases in Tampa, St. Petersburg, Clearwater, Brandon,
    Riverview, and most surrounding areas of the Greater Tampa Bay Region. We
    are licensed to practice throughout the entire State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
 
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Uber, UberEats, and Lyft Accidents
  </h2>

 
  <p className="text-lg leading-relaxed text-gray-700">
    When you’ve been involved in an Uber, UberEats, or Lyft accident, the amount
    of coverage you may receive depends on whether you were in another vehicle,
    a passenger of the Uber/Lyft vehicle, or the driver of the rideshare
    vehicle. Additionally, if you are the driver, coverages may vary depending
    on whether your app is inactive, if you have accepted a fare and are en
    route, or if you are actively transporting a passenger or delivering a meal.
    The experienced attorneys at McCulloch Law, P.A. can guide you on the types
    of coverage available and the amounts you may be entitled to.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Our goal is always to help you obtain full compensation for your losses.
    Florida law states that you are entitled to compensation from the at-fault
    driver for your injuries and vehicle damage. You have only 14 days to seek
    medical attention or risk waiving important insurance benefits — another
    reason why consulting an attorney as soon as possible is crucial. The
    attorneys at McCulloch Law, P.A. will determine which benefits apply and
    ensure you receive maximum compensation.
  </p>

 
  <p className="text-lg leading-relaxed text-gray-700">
    After an Uber, UberEats, or Lyft accident, it is important to call the
    police and request a police report. Ensure the officer documents the other
    driver’s license and insurance information. You should also take photographs
    of the accident scene, the rideshare vehicle, and the at-fault vehicle — this
    evidence may be critical in your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    If you’ve been injured, seek appropriate medical care to treat and document
    your injuries. Insurance companies may reach out to take a statement or
    offer money to settle the claim quickly. Do not speak with them without an
    attorney. Contacting a lawyer early ensures your rights remain protected.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Rideshare Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations to victims of Uber, UberEats,
    and Lyft accidents. Our attorneys can meet you at your home, hospital, or
    any location convenient for you. We handle rideshare injury cases on a
    contingency fee basis — you will never owe legal fees unless we win your
    case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Injuries from a rideshare accident can quickly lead to mounting medical
    bills and lost wages. Let our experienced attorneys take the burden off your
    shoulders and begin working to make you whole again.
  </p>

 
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have experience handling rideshare
    accident cases in Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and
    many surrounding areas throughout the Greater Tampa Bay Area. We are
    licensed to practice law throughout the entire State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
 
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Slip and Fall Accidents
  </h2>

 
  <p className="text-lg leading-relaxed text-gray-700">
    Despite common misconceptions, an unexpected fall on a hard surface can lead to serious personal injuries. More than one million people visit the emergency room each year due to slip and fall incidents, which are a leading cause of injury across all age groups. After a slip or trip and fall, you may be unsure of what caused your accident.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    The experienced attorneys at McCulloch Law, P.A. can investigate your fall, gather evidence, and guide you through the process of filing a slip and fall or trip and fall claim. Many incidents are preventable if property owners maintain their premises safely and monitor for hazards.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Whether you’re a customer in a business or walking on a public sidewalk, the entity responsible for the property owes you a duty to keep you reasonably safe, except in the case of trespassers. The duty owed depends on whether you are an invitee or a licensee. Our attorneys can evaluate your claim and advise on the specific duty owed to you.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    After a slip and fall accident, notify the store or property manager and request an incident report, making sure to get the manager’s full name and a copy of the report. Document the scene and your injuries with photographs. Seek medical treatment promptly to both receive care and properly document your injuries. Do not speak to the property owner’s insurance company or risk management department without an attorney — they may try to settle quickly to minimize their liability.
  </p>

 
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Slip and Fall Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations for victims of slip and fall or trip and fall accidents. Our attorneys can meet you at your home, hospital, or another convenient location. We handle injury cases on a contingency fee basis, meaning you owe no legal fees unless we win your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Medical bills and lost wages can quickly accumulate after a slip and fall. Let our experienced attorneys handle your case and work to make you whole again.
  </p>

 
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have handled slip and fall cases throughout Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and surrounding areas of the Greater Tampa Bay Area. We are licensed to practice law throughout the State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
  
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Premises Liability
  </h2>

  
  <p className="text-lg leading-relaxed text-gray-700">
    Property owners in Florida have a duty to maintain their property in a reasonably safe condition for people who are lawfully on the property — and in some cases, even for trespassers. This duty extends not only to the property itself but also to the staff of a business.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Premises liability cases include slip and fall accidents, negligent security (such as a bouncer using excessive force or a hotel failing to stop a deadly incident), potholes in parking lots, negligent staffing (like a daycare employee injuring a child), and many other types of injuries. If you’ve been injured while on someone else’s property, the attorneys at McCulloch Law, P.A. can help you evaluate your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Each year, thousands of people are injured while in the home of another, whether it be a friend, family member, or neighbor. Many times, your injury will be covered by the homeowner’s insurance of the property owner. When someone invites you into their home, they have a duty to ensure your safety and to warn you of all known dangers. If you’ve been injured in someone else’s home, you may be entitled to compensation through their homeowner’s insurance. Our attorneys can investigate the claim and advise you on available coverage and potential compensation amounts.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    After an injury on someone else’s property, notify the manager or homeowner. If the incident occurred at a business, request an incident report and the full name of the store manager, and obtain a copy for your records. Document your injury and the scene with photographs. Seek medical treatment promptly to ensure proper care and documentation. Do not speak to any insurance company or risk management department without an attorney, as they may attempt to settle quickly to minimize liability.
  </p>

  
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Premises Liability Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations for people injured at a business or in the home of a friend, family member, or neighbor. Our attorneys can meet you at your home, hospital, or another convenient location. We handle injury cases on a contingency fee basis, meaning you pay no legal fees unless we win your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Medical bills and lost wages can quickly accumulate after a premises liability injury. Let our experienced attorneys handle your case and work to make you whole again.
  </p>

  
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have handled premises liability cases throughout Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and surrounding areas of the Greater Tampa Bay Area. We are licensed to practice law throughout the State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
  
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Dog Bites
  </h2>

  
  <p className="text-lg leading-relaxed text-gray-700">
    In Florida, dog owners are “strictly liable” if their dog injures someone. This means there is no need to prove negligence — a victim can bring a claim even if the owner was unaware of the dog’s aggressiveness.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    If you were bitten while on public land, such as a dog park, or lawfully on private property, you likely have a claim against the dog’s owner. Florida law provides few exceptions to a dog owner’s liability.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Dogs bite approximately 4.7 million people each year in the U.S. Dog parks can be particularly risky since you cannot know the other dogs’ behavior or training. Small children are often at greatest risk, as they cannot defend themselves. Many dog bite victims require reconstructive surgery, stitches, therapy, counseling, and more. The attorneys at McCulloch Law, P.A. understand the devastating impact of a dog attack.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Homeowners’ insurance companies paid $675 million in dog bite and dog-related claims in 2018. After a dog bite, notify local authorities or animal control and call the police. Obtain a copy of the animal control report. Document your injuries, the scene, and the dog if it can be done safely. Seek medical treatment promptly to document your injuries and receive care. Do not speak to any insurance company without an attorney, as they may try to settle quickly to minimize liability.
  </p>

  
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Dog Bite Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations for victims of dog bites or attacks. Our attorneys can meet you at your home, hospital, or another convenient location. We handle dog bite cases on a contingency fee basis, meaning you owe no legal fees unless we win your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Medical bills and lost wages can quickly pile up after a dog bite. Let our experienced attorneys handle your case and work to make you whole again.
  </p>

  
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have experience handling dog bite and dog attack cases throughout Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and surrounding areas of the Greater Tampa Bay Area. We are licensed to practice law throughout the State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
  
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Medical Malpractice
  </h2>

  
  <p className="text-lg leading-relaxed text-gray-700">
    In the United States, we trust doctors and medical personnel to care for us in our times of greatest need. Whether it’s an ambulance ride after an accident, emergency surgery, elective cosmetic surgery, or a routine check-up, medical professionals are expected to use their best judgment and the skills they have gained through years of education and experience.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Unfortunately, medical errors sometimes occur. Mistakes like amputating the wrong limb or leaving instruments inside a patient are examples of medical malpractice. Victims of medical malpractice in Florida have the right to seek compensation.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    While many believe medical malpractice is rare, surgical errors are the third-leading cause of death in the United States, with at least 250,000 deaths each year attributed to medical errors. Medical malpractice claims include errors during surgery, childbirth, cancer diagnosis, and treatment of common medical conditions. Florida has seen some of the largest malpractice payouts in history, including a $216.7 million jury award for a misdiagnosed stroke. The attorneys at McCulloch Law, P.A. can investigate your claim to determine what the doctor did or did not do that may have changed the medical outcome. Medical malpractice can result in serious lifelong complications or death.
  </p>

  
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Medical Malpractice Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations for victims of medical malpractice and their families. Our attorneys can meet you at your home, hospital, or another convenient location. We handle medical malpractice cases on a contingency fee basis, meaning you pay no legal fees unless we win your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    If you or a loved one has been the victim of a doctor’s negligence, the consequences can be devastating. Let our experienced attorneys handle your case and work to secure fair compensation.
  </p>

  
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have experience handling medical malpractice cases throughout Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and surrounding areas of the Greater Tampa Bay Area. We are licensed to practice law throughout the State of Florida.
  </p>
</div>

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
        <div className="flex flex-col gap-6">
  
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Products Liability
  </h2>

  
  <p className="text-lg leading-relaxed text-gray-700">
    Product liability is the area of law in which manufacturers, distributors, suppliers, retailers, and others who make products available to the public are held legally responsible for injuries caused by those products.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Generally, a products liability claim falls into one of three categories:
  </p>

  <ul className="list-decimal list-inside text-lg leading-relaxed text-gray-700">
    <li>
      <strong>Design Defects:</strong> Present in a product from the beginning, making it inherently unsafe.
    </li>
    <li>
      <strong>Manufacturing Defects:</strong> Occur during the manufacturing or assembly process.
    </li>
    <li>
      <strong>Marketing Defects:</strong> Flaws in product marketing, such as improper labeling, insufficient instructions, or inadequate safety warnings.
    </li>
  </ul>

  <p className="text-lg leading-relaxed text-gray-700">
    Products liability cases include, but are not limited to, faulty car manufacturing, exploding e-cigarettes or vaporizers, tobacco products, silicone breast implants, asbestos building materials, faulty construction equipment, defective space heaters, unsafe food products, and any other product that causes injury while being used as intended.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Products liability is generally considered a strict liability offense, meaning a defendant is liable if the product is defective, regardless of intent. Recalled children’s toys or automobiles are common examples. If you or a loved one has been injured by a defective product, contact the attorneys at McCulloch Law, P.A. so they can investigate and evaluate your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    After a product-related injury, document the injury and the defective product with photographs. Keep the defective product, as it will assist your attorney in evaluating the case and may prevent legal complications. Seek medical treatment promptly to receive care and document your injuries.
  </p>

  
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Products Liability Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations for individuals injured by defective products. Our attorneys can meet you at your home, hospital, or another convenient location. We handle products liability cases on a contingency fee basis — you pay no legal fees unless we win your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Medical bills and lost wages can quickly accumulate after a product-related injury. Let our experienced attorneys handle your case and work to make you whole again.
  </p>

  
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. handle products liability cases throughout Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and surrounding areas of the Greater Tampa Bay Area. We are licensed to practice law throughout the State of Florida.
  </p>
</div>

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
       <div className="flex flex-col gap-6">
  
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Wrongful Death
  </h2>

  
  <p className="text-lg leading-relaxed text-gray-700">
    Losing a loved one due to someone else’s negligence or wrongful actions is a tragic and life-changing event. Florida law allows the surviving family members to pursue a wrongful death claim to seek compensation for their loss.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Wrongful death claims can arise from a variety of situations, including car accidents, medical malpractice, defective products, unsafe premises, workplace accidents, or other negligent or intentional acts that result in death. These claims are intended to provide financial support to cover medical expenses, funeral costs, lost income, and loss of companionship.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Filing a wrongful death claim can be complex and requires careful investigation. The attorneys at McCulloch Law, P.A. can help gather evidence, identify responsible parties, and guide your family through the legal process while ensuring your rights are protected.
  </p>

  
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Wrongful Death Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations for families who have lost a loved one due to negligence. Our attorneys can meet you at your home, hospital, or another convenient location. We handle wrongful death cases on a contingency fee basis, meaning you pay no legal fees unless we win your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Losing a loved one is devastating, and navigating the legal process can be overwhelming. Let our experienced attorneys manage your case and work to obtain the compensation your family deserves.
  </p>

  
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have experience handling wrongful death cases throughout Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and surrounding areas of the Greater Tampa Bay Area. We are licensed to practice law throughout the State of Florida.
  </p>
</div>

                
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
       
                 <div className="flex flex-col gap-6">
  
  <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Fatal Accidents
  </h2>

  
  <p className="text-lg leading-relaxed text-gray-700">
    Fatal accidents can occur suddenly and without warning, leaving families devastated. In Florida, victims’ families may be entitled to pursue legal action when a loved one dies as a result of someone else’s negligence or wrongful conduct.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Fatal accidents can arise from a variety of circumstances, including car and truck accidents, motorcycle crashes, pedestrian incidents, medical malpractice, defective products, unsafe premises, or workplace accidents. The goal of a legal claim in these situations is to obtain compensation for medical bills, funeral expenses, lost income, and loss of companionship.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Investigating a fatal accident requires careful attention to evidence and details. The attorneys at McCulloch Law, P.A. can help collect evidence, identify responsible parties, and guide your family through the legal process while protecting your rights.
  </p>

  
  <h3 className="text-2xl font-semibold text-black mt-4">
    Why Hire A Fatal Accidents Lawyer?
  </h3>

  <p className="text-lg leading-relaxed text-gray-700">
    McCulloch Law, P.A. offers free consultations for families affected by fatal accidents. Our attorneys can meet you at your home, hospital, or any convenient location. We handle fatal accident cases on a contingency fee basis, meaning you pay no legal fees unless we win your case.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    The loss of a loved one is overwhelming, and managing the legal process can be stressful. Let our experienced attorneys handle your case and work to obtain the compensation your family deserves.
  </p>

  
  <p className="text-lg leading-relaxed text-gray-700">
    The attorneys at McCulloch Law, P.A. have experience handling fatal accident cases throughout Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and surrounding areas of the Greater Tampa Bay Area. We are licensed to practice law throughout the State of Florida.
  </p>
</div>

               
    `,
    image: "/images/practice/Assault.png",
    slug: "fatal-accidents",
  },
];
