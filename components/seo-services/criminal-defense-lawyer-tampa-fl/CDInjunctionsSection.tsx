"use client";

import React from "react";
import Image from "next/image";
import {
  FaBalanceScale,
  FaGavel,
  FaFileInvoice,
  FaShieldAlt,
  FaUserShield,
  FaSearch,
  FaClock,
} from "react-icons/fa";

export interface InjunctionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDInjunctionsSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: InjunctionItem[];
}

const defaultInjunctionItems: InjunctionItem[] = [
  {
    id: "pre-hearing-discovery",
    icon: <FaFileInvoice className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Pre-Hearing Strategies and \"Discovery\"",
    description:
      "Florida law requires a full injunction hearing within 15 days of a temporary injunction being granted. Requesting records, witness statements and any prior communications between the parties needs to start immediately. This discovery process reveals whether the petition holds up under scrutiny. Our defense team begins gathering this material the same day a client calls.",
  },
  {
    id: "challenging-the-evidence",
    icon: <FaGavel className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Challenging the Evidence",
    description:
      "Injunction petitioners frequently submit evidence with minimal court scrutiny initially. A full hearing gives respondent a chance to challenge weak or exaggerated evidence. Crosse xamination at this stage can reveal gaps on paper. Our Tampa criminal defense lawyer prepares detailed questions built around inconsistencies found during discovery.",
  },
  {
    id: "gathering-contradictory-proof",
    icon: <FaSearch className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Gathering Contradictory Proof",
    description:
      "Text messages, emails and witness accounts can directly contradict claims made in a petition. Timestamped evidence often shows a different sequence of events. Friends, family, or even impartial witnesses can attest to the events of that day. More importantly judges are far more likely to believe contradictions to specific testimonies than general claims of innocence. Drew McCulloch's team builds this evidence into a clear organized presentation for the hearing.",
  },
  {
    id: "negotiating-modifying-terms",
    icon: <FaBalanceScale className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Negotiating and Modifying Terms",
    description:
      "Not every injunction case needs a full contested hearing to reach a fair outcome. Both parties may agree to terms to modify the original contract. For instance, a revised contact plan for shared children. Thus avoiding responsibility without either party having to concede fault. This can expedite resolution while avoiding the uncertainty of a trial. McCulloch Law negotiates these terms when it genuinely serves the client's interests, not as a default option.",
  },
  {
    id: "identifying-malicious-intent",
    icon: <FaUserShield className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Identifying Malicious Intent",
    description:
      "Injunctions get filed strategically in custody disputes and contentious breakups more often than most people assume. A petition filed to gain an edge in a separate family court matter often shows inconsistencies once examined closely. Timing, especially filing right before a custody hearing, can itself be revealing. McCulloch Law P.A. looks at this context as part of building a complete defense.",
  },
  {
    id: "explains-nuances-defends-violations",
    icon: <FaShieldAlt className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Explains Nuances and Defends Violations",
    description:
      "Violating an injunction even accidentally results in a separate criminal charge in addition to any civil penalties. Charges for that usually depend on whether the contact was unsolicited or accidental. A court will also distinguish between an intentional and an accidental violation, although this is hard to prove. The defense team explains these boundaries to clients up front, then defends any violation charge that follows.",
  },
  {
    id: "requesting-continuances",
    icon: <FaClock className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Requesting Continuances",
    description:
      "A short continuance can give a defense team the time it needs to gather evidence a rushed hearing date wouldn't allow. Courts grant continuances more readily when there's a specific, documented reason rather than a general request for delay. Rushing an injunction hearing without adequate preparation rarely favors the respondent. The firm requests continuances strategically, only when the extra time will actually change the outcome.",
  },
];

export default function CDInjunctionsSection({
  title = "Criminal Injunctions and Restraining Orders — How McCulloch Law Defends Your Case",
  subTitle = "An injunction hearing moves within two weeks of the initial filing. Our criminal defense lawyer tampa fl at McCulloch Law prepares a defense according to matched accelerated timelines.",
  imagePath = "/images/seo-services/criminal-defense-lawyer-tampa-fl/courthouse-law.png",
  items = defaultInjunctionItems,
}: CDInjunctionsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Tampa Injunction Court Hearing"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-snug">
                  Injunction Hearing Pending?
                </span>
                <span className="text-xs text-slate-300 mt-1 font-sans">
                  McCulloch Law defends criminal injunctions in Hillsborough County courts.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
