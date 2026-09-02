"use client";

import React from "react";
import {
  FaHourglassHalf,
  FaCalendarAlt,
  FaBuilding,
  FaExclamationTriangle,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

export interface StatuteItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILStatuteSectionProps {
  title?: string;
  subTitle?: string;
  items?: StatuteItem[];
}

const defaultItems: StatuteItem[] = [
  {
    id: "florida-2-year-deadline",
    title: "Florida's 2 Year Deadline",
    description:
      "Florida law limits time available to initiate personal injury lawsuits after negligent accidents occur. Statutory updates under House Bill 837 reduced negligence filing windows from four years to two years. Negligence claims arising after March 24, 2023, must be filed within two years under Fla. Stat. § 95.11.",
    icon: <FaHourglassHalf className="w-5 h-5 text-primary" />,
  },
  {
    id: "exceptions-extend-deadline",
    title: "Exceptions To Extend Deadline",
    description:
      "Specific statutory exceptions toll or extend legal filing deadlines for personal injury actions. Defendants fleeing Florida or hiding identity to conceal liability temporarily pause statutory time clocks. Incapacitated victims lacking mental capacity from severe brain trauma receive temporary statutory deadline extensions.",
    icon: <FaCalendarAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "claims-against-government",
    title: "Claims Against Government Entities",
    description:
      "Suing public entities requires strictly complying with notice procedures under Florida Statute § 768.28. Claimants must provide written notice to the involved agency and Department of Financial Services. A mandatory six-month administrative investigation period must elapse prior to filing court lawsuits.",
    icon: <FaBuilding className="w-5 h-5 text-primary" />,
  },
  {
    id: "missed-the-deadline",
    title: "Missed the Deadline",
    description:
      "Failing to file lawsuits before statutory deadlines pass results in permanent loss of legal rights. Trial judges grant mandatory dismissals with prejudice for complaints filed past statutory deadlines. Insurance carriers immediately terminate all settlement discussions once statute of limitations deadlines expire.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "discovery-rule",
    title: "Discovery Rule",
    description:
      "The discovery rule modifies statute of limitations start dates for delayed physical injury diagnoses. The statutory filing clock begins when victims discovered or reasonably should have discovered injuries. Delayed organ damage or latent chemical exposure claims utilize discovery rules to protect legal rights.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
];

export default function CILStatuteSection({
  title = "Catastrophic Injury Statute of Limitations in Florida",
  subTitle = "Florida's filing deadlines are shorter than most people realize and missing one ends a case permanently.",
  items = defaultItems,
}: CILStatuteSectionProps) {
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
              <FaShieldAlt className="w-4 h-4 text-primary" />
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
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
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
