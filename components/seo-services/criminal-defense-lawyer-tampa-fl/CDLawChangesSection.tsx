"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaMapMarkerAlt,
  FaFileAlt,
  FaLandmark,
  FaUsers,
  FaBan,
  FaExclamationTriangle,
  FaUserShield,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface LawChangeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDLawChangesSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: LawChangeItem[];
}

const defaultLawChangeItems: LawChangeItem[] = [
  {
    id: "missys-law",
    icon: <FaLandmark className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Missy's Law",
    description:
      "Missy's Law requires courts to remand anyone convicted of or pleading guilty to a dangerous crime into custody immediately, without bond, before sentencing. The law also expanded Florida's list of dangerous crimes to include certain computer pornography and child exploitation offenses. This removes judicial discretion that previously allowed some defendants to stay free after conviction. Criminal law firm now builds sentencing strategy earlier in a case, since post conviction release is no longer an option for qualifying charges.",
  },
  {
    id: "domestic-violence-injunctions",
    icon: <FaShieldAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Domestic Violence and Injunctions",
    description:
      "House Bill 277 lowers thresholds for felony reclassifications during local domestic violence cases. A second injunction violation against the same victim becomes a third degree felony charge. Judges can now weigh threats against pets when deciding to grant protective injunctions. They also consider existing military protective orders during these critical courtroom injunction hearings. Victims will receive increased relocation assistance from fifteen hundred dollars to twenty five hundred. Our defense team reviews prior histories closely since past violations carry much heavier penalties.",
  },
  {
    id: "habitual-traffic-offenders",
    icon: <FaExclamationTriangle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Habitual Traffic Offenders",
    description:
      "Known as Isaiah's Law, HB 35 added driving without a valid license to the list of offenses that can trigger a habitual traffic offender designation. Fifteen qualifying convictions within five years still lead to that designation, but the pool of qualifying offenses just got wider. Anyone designated a habitual traffic offender who drives again faces a third degree felony charge. Criminal defense lawyer tampa fl contests HTO designations built on incomplete or inaccurate driving records.",
  },
  {
    id: "officer-jason-raynor-act",
    icon: <FaUserShield className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Officer Jason Raynor Act",
    description:
      "The Officer Jason Raynor Act increases penalties for violent offenses against law enforcement. Manslaughter of an on duty officer now carries a mandatory life sentence instead. This new bill also expands the traditional definition of resisting arrest with violence. Defense team scrutinizes officer conduct closely in these cases, since the enhanced penalties raise the stakes for every disputed fact.",
  },
  {
    id: "gang-statutes",
    icon: <FaUsers className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Gang Statutes",
    description:
      "Effective October 1, 2026, HB 429 lets prosecutors use social media posts, usernames and even a spouse's statement to establish criminal gang membership. A person now needs to meet only two of several listed criteria, rather than relying on direct evidence of gang activity. This makes online behavior fair game in ways it wasn't before. Criminal defense attorney challenges how gang membership gets proven, since a single old post shouldn't define an entire case.",
  },
  {
    id: "mandatory-minimums-sexual",
    icon: <FaBan className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Mandatory Minimums for Sexual Offenses",
    description:
      "HB 1159 created mandatory minimum sentences for specified adult sexual offenses against children and added a life felony for aggravated exploitation of a child under 12. The law also criminalized new categories of AI generated exploitation material. These mandatory minimums remove much of the sentencing flexibility judges previously had in these cases.",
  },
  {
    id: "child-reporting-violation",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Child Reporting Violation Time Limits",
    description:
      "Senate Bill 590 changes the official clock for child abuse reporting violations. The statute of limitations doesn't start until law enforcement learns about violations. This means reporting violations from years earlier can still result in charges today. The defense team reviews the full timeline in these cases, since the new rule changes what counts as too old to prosecute.",
  },
  {
    id: "sexual-offenders-predators",
    icon: <FaMapMarkerAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Sexual Offenders and Predators",
    description:
      "Senate Bill 212 prohibits registered sexual offenders from residing close to educational institutions. They are not allowed to reside within a thousand feet of public pools, playgrounds or parks. Without prior court approval, probationers are not permitted to work or volunteer at public pools. Violating these new residency rules carries its own separate criminal penalty. Criminal law firm helps registered clients review housing and employment situations against the new distance requirements before a violation happens.",
  },
  {
    id: "felony-battery",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Felony Battery",
    description:
      "Simple misdemeanor battery charges are elevated to third degree felonies under Senate Bill 436. This elevation triggers if defendants have prior convictions for resisting officers with violence. It also adds felony battery causing bodily injury to prison releasee reoffender lists. That status can mean serving a sentence with no possibility of early release.",
  },
];

export default function CDLawChangesSection({
  title = "How Florida's Criminal Laws Changes Affect Cases in 2026",
  subTitle = "Florida's legislature passed nine major criminal justice bills that took effect July first, 2026. Each one changes something about how Tampa cases get charged, sentenced or resolved.",
  imagePath = "/images/seo-services/criminal-defense-lawyer-tampa-fl/courthouse-law.png",
  items = defaultLawChangeItems,
}: CDLawChangesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {subTitle}
            </p>

            <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Tampa Courthouse Legal Changes 2026"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaBalanceScale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  <span>Legal changes.</span>
                  <span>Real consequences.</span>
                  <span className="font-bold text-white">Strong defense matters.</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-slate-700/60" />

              <a
                href="tel:8134442817"
                className="group flex items-center gap-4 hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-950 shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <IoIosCall className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-primary tracking-wide leading-tight group-hover:text-yellow-400 transition-colors">
                    Get a Free Case Review
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Speak with a Tampa Criminal Defense Lawyer Today.
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="border-l-2 border-primary pl-3.5 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
