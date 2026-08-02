"use client";

import React from "react";
import {
  FaUserShield,
  FaBalanceScale,
  FaGavel,
  FaSearch,
  FaHandshake,
  FaShieldAlt,
  FaFolderOpen,
  FaBullseye,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDWhyChooseSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  row1Items?: WhyChooseItem[];
  row2Items?: WhyChooseItem[];
}

const defaultRow1Items: WhyChooseItem[] = [
  {
    id: "expert-local-system",
    icon: <FaUserShield className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Expert of Local System",
    description:
      "Drew McCulloch spent years inside the Hillsborough County State Attorney's Office before starting his own practice in 2014. That experience shows his vast knowledge of specific judges, prosecutors and courtrooms’ operations in Tampa. Local knowledge like this can not be replicated by an attorney parachuting in from another county. Prosecutors respond differently to attorneys they recognize from prior negotiations and trials. Clients get a defense built around Hillsborough County's court work.",
  },
  {
    id: "experienced-in-criminal-law",
    icon: <FaGavel className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Experienced In Criminal Law",
    description:
      "McCulloch Law has handled thousands of criminal cases since 2014. All these cases include everything from minor traffic violations to major felony jury trials. Experience from all those cases ensure quality and it indicates the firm has observed these cases in practice. Clients benefit from patterns the firm has already recognized across similar cases.",
  },
  {
    id: "explain-charges-legal-options",
    icon: <FaBalanceScale className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Explain Charges and All Legal Options",
    description:
      "Every criminal charge comes with more than one possible path forward including trial, negotiated plea and diversion program. Understanding those options requires an experienced tampa criminal defense lawyer to explain tradeoffs in simple terms. McCulloch Law P.A. walks clients through every realistic outcome before any decision gets made. This includes being honest about weak spots in a case along with strong ones.",
  },
  {
    id: "identify-weakness-in-case",
    icon: <FaSearch className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Identify Weakness In Case",
    description:
      "Every criminal case has points where evidence or procedure can be challenged. Finding that weakness requires a close read of police reports, lab results and witness statements. McCulloch Law treats this review as the starting point for every case. A weakness identified early can shape the entire defense strategy.",
  },
];

const defaultRow2Items: WhyChooseItem[] = [
  {
    id: "negotiate-better-plea-deal",
    icon: <FaHandshake className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Negotiate Better Plea Deal",
    description:
      "Most Hillsborough County criminal cases resolve through a negotiated plea rather than a jury trial. A good plea deal usually comes from a credible threat to take the case to trial. This firm prepares every case as if it's going the distance. This changes how prosecutors negotiate. That preparation often produces plea offers for felonies and reduced charges.",
  },
  {
    id: "minimizing-collateral-consequences",
    icon: <FaShieldAlt className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Minimizing Collateral Consequences",
    description:
      "The consequences of conviction causeincarceration, affect employment, housing, immigration and professional licensing. Plea negotiations can fail to consider these issues, creating one problem while resolving several others. McCulloch Law P.A. structures plea agreements with these downstream effects in mind from the start. This approach often means the difference between a resolved case and a resolved life.",
  },
  {
    id: "investigation-and-defense",
    icon: <FaFolderOpen className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Investigation and Defense",
    description:
      "Building a defense means going beyond the state’s offers during discovery. The firm conducts independent investigation on every case with disputed facts. This includes tracking down witnesses the state didn't interview and evidence the state didn't collect. A more complete picture of events often changes the provable at trial.",
  },
  {
    id: "personalized-defense-strategy",
    icon: <FaBullseye className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Personalized Defense Strategy",
    description:
      "No two arrests happen under identical circumstances, even when the charges look identical on paper. Drew McCulloch's team builds a strategy around the specific facts, history and goals of each client. That might mean advocating for dismissal, negotiating a plea or preparing for trial. A client focused on avoiding a felony record needs a different strategy than one facing deportation risk. That personalized approach shapes every decision the firm makes on a case.",
  },
];

export default function CDWhyChooseSection({
  title = "Why Tampa Residents Choose McCulloch Law for Criminal Defense",
  highlightedText = "Criminal Defense",
  subTitle = "Tampa locals choose for the expertise of Drew McCulloch and his team at McCulloch Law. the law firm offering customized defense based on limited caseloads and the resources of qualified attorneys.",
  row1Items = defaultRow1Items,
  row2Items = defaultRow2Items,
}: CDWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title.split(highlightedText)[0]}
            <span className="text-primary">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaUserShield className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        {/* FEATURES GRID WITH DIVIDERS */}
        <div className="max-w-6xl mx-auto">
          
          {/* ROW 1: 4 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {row1Items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* HORIZONTAL SEPARATOR WITH CENTER CIRCLE RING */}
          <div className="relative my-8 sm:my-10 flex items-center justify-center">
            <div className="w-full h-[1px] bg-slate-200/80" />
            <div className="absolute w-4 h-4 rounded-full border-2 border-primary bg-white" />
          </div>

          {/* ROW 2: 4 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {row2Items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#081524] border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
