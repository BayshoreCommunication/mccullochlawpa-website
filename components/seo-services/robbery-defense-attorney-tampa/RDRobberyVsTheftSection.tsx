"use client";

import React from "react";
import { FaBalanceScale } from "react-icons/fa";

export interface RobberyVsTheftRow {
  legalIssue: string;
  robbery: string;
  theft: string;
}

export interface RDRobberyVsTheftSectionProps {
  title?: string;
  subTitle?: string;
  rows?: RobberyVsTheftRow[];
}

const defaultRows: RobberyVsTheftRow[] = [
  {
    legalIssue: "Definition",
    robbery:
      "Taking property directly from a person by using force, violence, assault or putting them in fear.",
    theft:
      "Unlawfully taking someone else's property with the intent to deprive them of it.",
  },
  {
    legalIssue: "Crime Classification",
    robbery:
      "Always a high level felony, regardless of whether the stolen item is worth $1 or $10,000.",
    theft:
      "Can be a misdemeanor (Petit Theft) or a felony (Grand Theft) depending on the property's value.",
  },
  {
    legalIssue: "Victim Presence",
    robbery:
      "The property must be taken directly from the victim's person or their immediate custody.",
    theft:
      "The victim does not need to be present or even aware (e.g., stealing a bicycle from a yard).",
  },
  {
    legalIssue: "Use of Force/Fear",
    robbery:
      "Force, violence or threats are required to complete the taking or to escape.",
    theft:
      "No force or fear is used. It relies on stealth, deception or opportunity.",
  },
  {
    legalIssue: "Presence of a Weapon",
    robbery:
      "Carrying a weapon escalates the charge to Armed Robbery, carrying up to life in prison.",
    theft:
      "If a weapon is carried, it escalates to grand theft but lacks the elements of personal confrontation.",
  },
];

export default function RDRobberyVsTheftSection({
  title = "Robbery vs. Theft: What’s the Difference?",
  subTitle = "While people often use these terms interchangeably, Florida law treats them as entirely separate offenses.",
  rows = defaultRows,
}: RDRobberyVsTheftSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <thead>
              <tr className="bg-[#081524] text-white">
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider w-1/4">
                  Characteristic
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-primary w-3/8">
                  Robbery (Fla. Stat. § 812.13)
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-300 w-3/8">
                  Theft (Fla. Stat. § 812.014)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, idx) => (
                <tr
                  key={row.legalIssue}
                  className={`transition-colors hover:bg-slate-50/80 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="py-4 px-6 text-sm sm:text-base font-bold text-slate-900 align-top">
                    {row.legalIssue}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-800 font-medium align-top">
                    {row.robbery}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-600 align-top">
                    {row.theft}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

