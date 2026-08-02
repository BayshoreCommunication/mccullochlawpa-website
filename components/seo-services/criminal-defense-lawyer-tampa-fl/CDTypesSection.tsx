"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaUsers,
  FaShieldAlt,
  FaGavel,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaCar,
  FaExclamationTriangle,
  FaCapsules,
  FaLock,
  FaLaptopCode,
  FaFileContract,
  FaUserShield,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface CaseTypeItem {
  id: string;
  title: string;
  image: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface CDTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "duis",
    title: "DUIs",
    image: "/images/practice/dui.png",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Driving with blood alcohol level of .08 or higher is unlawful under Florida traffic law 316. First DUI conviction is punishable with up to six months in jail. Along with imprisonment, license will be revoked for at least 180 days. Prosecutors often focus intensely on breath test results. However those machines require strict maintenance and calibration records.",
    linkHref: "/contact",
  },
  {
    id: "driving-violations",
    title: "Driving Violations",
    image: "/images/practice/driving-with-suspended-or-revoked-license.png",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "In Tampa not all traffic stops result in tickets. Driving with suspended license, reckless driving and fleeing law enforcement lead to serious criminal penalties. Third offense for driving with suspended license can become a third degree felony under Florida law. Criminal defense attorney verifies if the state notified you of the suspension before charges.",
    linkHref: "/contact",
  },
  {
    id: "drug-possession",
    title: "Drug Possession",
    image: "/images/practice/drug-crimes.png",
    badgeIcon: <FaCapsules className="w-5 h-5 text-primary" />,
    description:
      "Simple possession of a controlled substance without valid prescription is a third degree felony. This felony is covered under Florida Statute 893.13. Even possession of under 20 grams of cannabis carries first degree misdemeanor charge. Many drug cases start with a traffic stop and turns into a vehicle search without proper legal grounds. Criminal defense team contests those searches before the state can present findings.",
    linkHref: "/contact",
  },
  {
    id: "drug-trafficking",
    title: "Drug Trafficking and Distribution",
    image: "/images/practice/drug-crimes.png",
    badgeIcon: <FaCapsules className="w-5 h-5 text-primary" />,
    description:
      "Trafficking charges in Florida depend on weight rather than selling intent. This aspect often surprises a lot of defendants. Twenty eight grams of cocaine or four grams of certain opioids can trigger trafficking charge with a mandatory minimum prison sentence. Judges have almost no discretion once that weight threshold gets proven at trial. The firm focuses early on the lab report and chain of custody. This is crucial because trafficking cases often depend on weighing and storing methods for drugs.",
    linkHref: "/contact",
  },
  {
    id: "homicide",
    title: "Homicide",
    image: "/images/practice/homicide-attempted-homicide.png",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Florida separates homicide into degrees. The difference between them can mean life in prison versus a lesser sentence. First degree murder requires premeditation or occurs during certain felonies. This offense can result in death penalty as a capital offense. Second degree murder does not require premeditation. Yet this offense can result in a life sentence. Defense team examines intent, timeline and forensic evidence closely. It's crucial as charged degree allows for more defense arguments.",
    linkHref: "/contact",
  },
  {
    id: "involuntary-manslaughter",
    title: "Involuntary Manslaughter",
    image: "/images/practice/vehicular-manslaughter.png",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "When death results from reckless or negligent conduct it become involuntary manslaughter. This crime is second degree felony and does not require murder intent. Unintentional homicide leads to 15 years in prison. There are changes under SB 156 recently. Penalties will increase if victim is law enforcement officer and on duty. Criminal defense lawyer looks closely if conduct met legal standard for recklessness. It is important because many cases get overcharged from the start.",
    linkHref: "/contact",
  },
  {
    id: "assault-battery",
    title: "Assault and Battery",
    image: "/images/practice/assault-battery-stalking.png",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Simple assault is a threat creating fear of harm. In contast battery requires actual physical contact under Florida law. Aggravated assault involves weapon or intent to commit a felony. This offense is a third degree felony. Battery charges escalate quickly with prior convictions or weapon involvement. Criminal law firm reviews witness statements for inconsistencies. Because assault and battery cases often depend on the initial action.",
    linkHref: "/contact",
  },
  {
    id: "domestic-battery",
    title: "Domestic Battery",
    image: "/images/practice/domestic-violence.png",
    badgeIcon: <FaUsers className="w-5 h-5 text-primary" />,
    description:
      "Domestic battery charges apply if alleged victim is spouse, family member or romantic partner. Florida considers first offense as first degree misdemeanor. Yet second conviction can now be reclassified to a higher degree under HB 277. Arrest often happens the same night based on one person's statement. Defense lawyer moves fast to gather text messages, witness accounts and evidence to contradict initial report.",
    linkHref: "/contact",
  },
  {
    id: "sex-crimes",
    title: "Sex Crimes",
    image: "/images/practice/sex-crimes.png",
    badgeIcon: <FaLock className="w-5 h-5 text-primary" />,
    description:
      "Sexual battery charges in Florida range from second degree felony to capital felony. This depends on victim's age and force used. Conviction always requires registration as a sexual offender or predator. New residency restrictions under SB 212 now bar registered offenders few requisites. They are restricted from living within 1,000 feet of pools, schools and parks.",
    linkHref: "/contact",
  },
  {
    id: "theft-property-crimes",
    title: "Theft and Property Crimes",
    image: "/images/practice/theft-crimes.png",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Florida distinguishes petit theft and grand theft at $750 in stolen property value. Grand theft becomes a felony. On the other hand petit theft usually stays a misdemeanor unless someone has prior theft convictions. Burglary and criminal mischief charges often get added to a single incident and multiplying the exposure. Defense team reviews prosecutors' calculations as they may inflate values to escalate charges.",
    linkHref: "/contact",
  },
  {
    id: "white-collar-crimes",
    title: "White Collar Crimes",
    image: "/images/practice/fraud.png",
    badgeIcon: <FaFileContract className="w-5 h-5 text-primary" />,
    description:
      "Organized fraud, embezzlement and identity theft charges in Florida can carry penalties as severe as violent crime convictions. Scheme involving $50,000 or more becomes first degree felony under Florida's fraud statute. These cases often rely on financial records and forensic accounting. Defense attorney works with financial experts to challenge the state's loss calculation amount and intent.",
    linkHref: "/contact",
  },
  {
    id: "federal-drug-offenses",
    title: "Federal Drug Offenses",
    image: "/images/practice/drug-crimes.png",
    badgeIcon: <FaCapsules className="w-5 h-5 text-primary" />,
    description:
      "Federal drug charges move through the Middle District of Florida and the rules change substantially. Federal minimums under 21 U.S.C. 841 often surpass state penalties. There's no parole in the federal system and inmates must serve most of any sentence imposed.",
    linkHref: "/contact",
  },
  {
    id: "cybercrimes",
    title: "Cybercrimes",
    image: "/images/practice/fraud.png",
    badgeIcon: <FaLaptopCode className="w-5 h-5 text-primary" />,
    description:
      "Florida’s Computer Crimes Act forbids unauthorized computer access, stealing data, and online fraud. Various cybercrime cases are charged under the Computer Fraud and Abuse Act at the federal level. This happens especially when conduct crosses state lines. Evidence in these cases lives on servers, devices and cloud accounts and requires proper forensic handling.",
    linkHref: "/contact",
  },
  {
    id: "weapon-charges",
    title: "Weapon Charges",
    image: "/images/practice/weapons-firearms-charges.png",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "A person found in possession of a firearm can be charged with third degree felony. Even if the weapon was not used according to Florida law. Florida's 10-20-Life statute imposes mandatory prison time for firearm use in certain felonies. Carrying concealed firearm without license is its own separate felony charge.",
    linkHref: "/contact",
  },
  {
    id: "sealing-expunging",
    title: "Sealing and Expunging",
    image: "/images/practice/seal-expunge.png",
    badgeIcon: <FaUserShield className="w-5 h-5 text-primary" />,
    description:
      "Sealing hides a criminal record from public view. Conversely expunging removes it entirely from most databases under Florida law. Both options generally require clean history and charge not ending in conviction. The application runs through the Florida Department of Law Enforcement. This application process can take several months. Defense team handles the paperwork and eligibility review to prevent any costly mistake.",
    linkHref: "/contact",
  },
  {
    id: "probation-violations",
    title: "Probation Violations",
    image: "/images/practice/violation-of-probation.png",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Violating probation in Florida can be technical. For instance missing a meeting or substantive, new arrest. Judges have wide discretion at violation hearing and can impose maximum sentence for original charge. The standard of proof at aiolation hearing is lower than at trial and favors the state.",
    linkHref: "/contact",
  },
  {
    id: "criminal-appeals",
    title: "Criminal Appeals",
    image: "/images/practice/an-overview.png",
    badgeIcon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    description:
      "Cases from Hillsborough County are appealed to Florida's Second District Court of Appeal. Appeals are taken immediately following judgment. You need to file a notice of appeal with the court within 30 days of entry of judgment. On appeal, errors of law committed by the lower court are reviewed. It does not focus on retrying facts of the case. Furthermore, a defense attorney would file a motion for post conviction relief if there is new evidence or mistakes impacted outcome.",
    linkHref: "/contact",
  },
  {
    id: "injunctions",
    title: "Injunctions",
    image: "/images/practice/injunctions.png",
    badgeIcon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    description:
      "Florida allows injunctions for domestic violence, repeat violence, dating violence and sexual violence. Violating an injunction is a standalone criminal offense. Under HB 277 second violation against the same victim can now be charged as third degree felony. The defense team represents people on both sides of these petitions because injunctions get misused in custody disputes.",
    linkHref: "/contact",
  },
  {
    id: "juvenile-crimes",
    title: "Juvenile Crimes",
    image: "/images/practice/juvenile-crimes.png",
    badgeIcon: <FaUsers className="w-5 h-5 text-primary" />,
    description:
      "Florida's juvenile justice system is designed to rehabilitate. However the law changes fast once a prosecutor decides to direct file. Direct file lets the state charge a juvenile as young as 14 as an adult for certain serious felonies. A juvenile record not handled correctly can follow someone into adulthood despite the system's intent.",
    linkHref: "/contact",
  },
  {
    id: "expungements",
    title: "Expungements",
    image: "/images/practice/seal-expunge.png",
    badgeIcon: <FaUserShield className="w-5 h-5 text-primary" />,
    description:
      "Florida offers each individual only one opportunity to seal criminal records. In order to qualify for an expungement, a person needs to obtain a certificate from the Florida Department of Law Enforcement. In addition, a person should have been arrested for dismissed, acquitted charges or no charges. Certain offenses, including most sex crimes and violent felonies, don't qualify no matter how the case ended.",
    linkHref: "/contact",
  },
];

export default function CDTypesSection({
  subTitle = "PRACTICE AREAS",
  title = "Types of Criminal Cases a Tampa Defense Lawyer Handles",
  description = "Florida's criminal code covers more charges than most people recognize by name. An expert criminal defense lawyer tampa fl handles each of these charges with a distinct defense approach.",
  caseItems = defaultCaseItems,
}: CDTypesSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [paginationEl, setPaginationEl] = React.useState<HTMLDivElement | null>(null);

  return (
    <section className="w-full bg-slate-50/60 py-8 md:pt-16 md:pb-8 text-slate-800 relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {subTitle}
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            {description}
          </p>
        </div>

        <div className="relative px-2 sm:px-6">
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="custom-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:bg-primary hover:text-slate-950 hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer -ml-2 sm:-ml-5 focus:outline-none"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="custom-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:bg-primary hover:text-slate-950 hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer -mr-2 sm:-mr-5 focus:outline-none"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          <Swiper
            key={paginationEl ? "swiper-ready" : "swiper-init"}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: paginationEl,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full pt-4 pb-2 [&_.swiper-wrapper]:items-stretch"
          >
            {caseItems.map((item) => (
              <SwiperSlide key={item.id} className="flex !h-auto">
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col w-full h-full min-h-[450px] sm:min-h-[470px] group hover:-translate-y-1 relative">
                  <div className="relative w-full h-44 sm:h-48">
                    <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>

                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#081524] border-2 border-primary flex items-center justify-center shadow-xl z-30">
                      {item.badgeIcon}
                    </div>
                  </div>

                  <div className="pt-9 px-5 sm:px-6 pb-6 flex flex-col flex-grow text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow text-left sm:text-center font-sans">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-3 border-t border-slate-100 flex justify-center">
                      <Link
                        href={item.linkHref || "/contact"}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-yellow-600 transition-colors group/link cursor-pointer"
                      >
                        <span>Read More</span>
                        <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={(node) => setPaginationEl(node)}
            className="swiper-pagination-custom flex items-center justify-center gap-1.5 mt-8 sm:mt-10 min-h-[20px]"
          />
        </div>
      </div>
    </section>
  );
}
