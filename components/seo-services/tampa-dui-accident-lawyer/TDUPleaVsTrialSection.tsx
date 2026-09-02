"use client";

import React from "react";
import {
  FaSearch,
  FaHandshake,
  FaBriefcase,
  FaGraduationCap,
  FaGavel,
  FaUserCheck,
  FaBalanceScale,
} from "react-icons/fa";

export interface PleaVsTrialItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDUPleaVsTrialSectionProps {
  title?: string;
  subTitle?: string;
  items?: PleaVsTrialItem[];
}

const defaultItems: PleaVsTrialItem[] = [
  {
    id: "evidence-strength-evaluation",
    title: "Evidence Strength Evaluation",
    description:
      "We perform a thorough evidence review before advising you on optimal defense pathways. Examining toxicology reports, video footage and officer statements reveals weaknesses in prosecution claims. Clear evidence assessments help you make informed decisions about your legal representation.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "reduced-charge-negotiations",
    title: "Reduced Charge Negotiations",
    description:
      "Our team leverages evidence flaws to negotiate DUI charges down to reckless driving. Securing reckless driving agreements helps you avoid mandatory DUI penalties and permanent convictions. We work directly with Hillsborough County prosecutors to seek favorable charge reductions.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "long-term-license-job-impact",
    title: "Long Term License and Job Impact",
    description:
      "DUI convictions result in long term criminal records, higher insurance premiums and barriers to employment. We evaluate how prospective plea offers affect your professional licenses and future career. Strategic defense planning protects your career reputation and long term financial stability.",
    icon: <FaBriefcase className="w-5 h-5 text-primary" />,
  },
  {
    id: "first-time-offender-diversion",
    title: "First Time Offender Diversion Eligibility",
    description:
      "Hillsborough County's Reducing Impaired Driving Recidivism program offers first time offenders charge reductions. Eligible drivers complete DUI school, community service hours and alcohol monitoring requirements. Successful program completion results in reckless driving charge reductions without formal convictions.",
    icon: <FaGraduationCap className="w-5 h-5 text-primary" />,
  },
  {
    id: "weak-evidence-trial-prep",
    title: "Weak Evidence Trial Prep",
    description:
      "When state evidence lacks scientific reliability, taking your case to trial is necessary. Attorney Drew McCulloch has more than 100 jury verdicts and more than ten years of trial experience. State prosecutors must prove each charge beyond a reasonable doubt thru meticulous trial preparation.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "client-role-final-decisions",
    title: "Client Role in Final Decisions",
    description:
      "You maintain complete authority when deciding whether to accept plea bargains or go to trial. Our attorneys provide objective legal advice, risk assessments and expected outcome probabilities. Close legal collaboration ensures your personal priorities guide every major decision throughout litigation.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
];

export default function TDUPleaVsTrialSection({
  title = "Plea Deals vs. Trial — How McCulloch Law Choose Best Option For Your Case",
  subTitle = "A plea deal ends a case fast. A trial demands proof from the state. We decide which path fits your evidence.",
  items = defaultItems,
}: TDUPleaVsTrialSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="w-10 h-[2px] bg-primary rounded-full mb-3" />

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
