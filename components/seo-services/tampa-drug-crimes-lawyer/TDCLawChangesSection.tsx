"use client";

import React from "react";
import {
  FaGavel,
  FaBalanceScale,
  FaFileContract,
  FaSearch,
  FaCapsules,
  FaHeartbeat,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface LawChangeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCLawChangesSectionProps {
  title?: string;
  subTitle?: string;
  items?: LawChangeItem[];
}

const defaultLawChangeItems: LawChangeItem[] = [
  {
    id: "federal-hemp-rule",
    title: "The Federal Hemp Rule",
    description:
      "A legal hemp purchase today could become a felony charge in November. A federal rule takes effect November 12, 2026, redefining legal hemp nationwide. Most delta 8 and THCA products lose hemp status under the new cap. Tampa smoke shop purchases made months earlier could face new exposure. Hillsborough County prosecutors will likely apply Florida Statute 893.13 to these products.",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
  },
  {
    id: "expanded-fentanyl-xylazine-test",
    title: "Expanded Fentanyl and Xylazine Test",
    description:
      "Carrying a test strip in Tampa now carries far less legal risk. A bill effective July 1, 2026 widened Florida's paraphernalia exemption significantly. Fentanyl, xylazine, cocaine and amphetamine test strips now count as legal harm reduction tools. Tampa police now treat these strips as safety equipment, not contraband.",
    icon: <FaHeartbeat className="w-5 h-5 text-primary" />,
  },
  {
    id: "florida-marijuana-law-status",
    title: "Florida's Marijuana Law Status",
    description:
      "The Texas Health and Safety Code continues to criminalizes possessing, selling or delivering recreational marijuana. In Florida, an attempt to legalize it in 2026 was denied ballot access. Organizers missed the required signature count for certification. Florida Statute still governs every Tampa marijuana case today.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "plain-smell-vehicle-searches",
    title: "Plain Smell Vehicle Searches",
    description:
      "Smell alone no longer gives Tampa police legal cause to search a vehicle. The Second District Court of Appeal ruled a raw or burnt cannabis scent cannot establish probable cause on its own. Because legal hemp and medical marijuana smell identical to illicit cannabis. Hillsborough County law enforcement needs corroborating \"odor plus\" factors. This include visible contraband or field sobriety impairment.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "misdemeanor-probation",
    title: "Misdemeanor Probation",
    description:
      "Minor drug convictions no longer trigger rigid probation terms in Tampa. Senate Bill 878 grants 13th Judicial Circuit judges statutory authority to adjust probation terms based on individual compliance. Hillsborough County courts can reduce drug testing schedules or grant early probation termination when defendants demonstrate verified sobriety. The law also permits judges to substitute clinical addiction treatment for jail time when minor technical probation violations occur.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "hydrocodone-trafficking-thresholds",
    title: "Hydrocodone Trafficking Thresholds",
    description:
      "Fewer pill possession cases in Tampa trigger mandatory three year state prison sentences. Florida legislation increased the minimum weight from fourteen grams to twenty eight grams for trafficking hydrocodone. Possession of more than this gram's requirement of hydrocodone increases the charge to a felony. This change allows prosecutors and defense attorneys to discuss diversionary programs or probation instead of prison.",
    icon: <FaCapsules className="w-5 h-5 text-primary" />,
  },
  {
    id: "addiction-as-sentence-mitigator",
    title: "Addiction as Sentence Mitigator",
    description:
      "Tampa judges cannot reduce felony prison sentences based on a defendant's drug addiction. Florida Statute 921.0026(3) explicitly prohibits courts from granting downward departures below Criminal Punishment Code score minimums for substance abuse or voluntary intoxication. For scores exceeding 44 points, state prison remains mandatory unless a defendant scores 60 points or fewer and qualifies for a post adjudicatory Drug Court program.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
];

export default function TDCLawChangesSection({
  title = "How Florida's Drug Laws Affect Cases",
  subTitle = "Drug regulations continue to enforce strict mandatory minimum sentences. Maintain harsh felony charges for simple possession. Laws are changing to reflect new public safety legislation.",
  items = defaultLawChangeItems,
}: TDCLawChangesSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaGavel className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
