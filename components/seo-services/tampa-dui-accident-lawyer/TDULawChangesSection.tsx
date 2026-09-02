"use client";

import React from "react";
import {
  FaVial,
  FaKey,
  FaExclamationTriangle,
  FaFileAlt,
  FaGavel,
} from "react-icons/fa";

export interface LawChangeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDULawChangesSectionProps {
  title?: string;
  subTitle?: string;
  items?: LawChangeItem[];
}

const defaultItems: LawChangeItem[] = [
  {
    id: "changes-bac-enforcement",
    title: "Changes to BAC Threshold Enforcement",
    description:
      "Florida enforces the standard 0.08 percent limit while expanding prosecution of lower alcohol levels. State attorneys aggressively pursue drug or combined substance charges without requiring specific blood limits. We consult toxicology experts to challenge state assumptions regarding your driving capability.",
    icon: <FaVial className="w-5 h-5 text-primary" />,
  },
  {
    id: "new-interlock-mandates",
    title: "New Ignition Interlock Mandates",
    description:
      "Recent statutory updates expand mandatory ignition interlock installations across broader license reinstatement categories. First offense cases with elevated alcohol levels face non negotiable six month interlock device terms. Electronic compliance monitors send real time violation reports directly to Hillsborough County probation officers.",
    icon: <FaKey className="w-5 h-5 text-primary" />,
  },
  {
    id: "updated-penalties-repeat-offenders",
    title: "Updated Penalties for Repeat Offenders",
    description:
      "Repeat DUI offenders face longer license revocation periods under current law. A third offense within ten years now carries felony level consequences. Interlock requirements for repeat offenders extend well beyond first offense minimums. Courts show little flexibility once a prior conviction appears on record.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "dui-accident-reporting",
    title: "DUI Accident Reporting Requirements",
    description:
      "Updated state rules mandate immediate electronic crash reporting for all traffic accidents involving injuries. Officers must detail physical impairment signs directly inside official digital crash documents. Fast digital filings create immediate prosecution records that we must inspect for inconsistencies.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
];

export default function TDULawChangesSection({
  title = "How Florida's Updated DUI Laws Affect Your Case",
  subTitle = "Florida's DUI statutes shifted in recent years and the changes carry real weight for 2026 cases. Our tampa dui accident lawyer prepare for every update for defense strategy.",
  items = defaultItems,
}: TDULawChangesSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
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
