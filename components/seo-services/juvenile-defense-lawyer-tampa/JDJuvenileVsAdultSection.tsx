"use client";

import React from "react";
import { FaBalanceScale } from "react-icons/fa";

export interface ComparisonRow {
  legalCategory: string;
  juvenileApproach: string;
  adultCourtRisks: string;
}

export interface JDJuvenileVsAdultSectionProps {
  title?: string;
  rows?: ComparisonRow[];
}

const defaultRows: ComparisonRow[] = [
  {
    legalCategory: "Court Process",
    juvenileApproach:
      "Overseen by the Florida Department of Juvenile Justice. Cases are decided by a judge rather than a traditional jury.",
    adultCourtRisks:
      "Operates with formal juries and standard criminal procedures. A strong defense fights aggressively to prevent cases from transferring here.",
  },
  {
    legalCategory: "Outcomes & Supervision",
    juvenileApproach:
      "Prioritizes guidance through court-mandated treatment, community service, and restitution to safely correct behavioral issues.",
    adultCourtRisks:
      "Focuses primarily on punitive measures and standard sentencing rather than rehabilitation and developmental support.",
  },
  {
    legalCategory: "Jurisdiction Exceptions",
    juvenileApproach:
      "The baseline for minor offenders, keeping the focus on leniency and supervision.",
    adultCourtRisks:
      "Prosecutors can use \"direct file\" powers to route severe felonies to adult court based on the minor's age and offense severity, though this transfer is not automatic.",
  },
];

export default function JDJuvenileVsAdultSection({
  title = "Juvenile Delinquency vs Adult Criminal Charges What is the Difference?",
  rows = defaultRows,
}: JDJuvenileVsAdultSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

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
                  Legal Category
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-primary w-3/8">
                  Juvenile System Approach
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-300 w-3/8">
                  Adult Court &amp; Prosecution Risks
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, idx) => (
                <tr
                  key={row.legalCategory}
                  className={`transition-colors hover:bg-slate-50/80 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="py-4 px-6 text-sm sm:text-base font-bold text-slate-900 align-top">
                    {row.legalCategory}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-800 font-medium align-top">
                    {row.juvenileApproach}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-600 align-top">
                    {row.adultCourtRisks}
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

