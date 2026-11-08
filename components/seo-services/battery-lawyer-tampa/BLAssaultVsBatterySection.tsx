"use client";

import React from "react";
import { FaBalanceScale } from "react-icons/fa";

export interface ComparisonRow {
  legalIssue: string;
  assault: string;
  battery: string;
}

export interface BLAssaultVsBatterySectionProps {
  title?: string;
  rows?: ComparisonRow[];
}

const defaultRows: ComparisonRow[] = [
  {
    legalIssue: "Main conduct",
    assault: "An intentional, unlawful threat of imminent violence",
    battery:
      "Intentional touching or striking against another person's will or intentional bodily harm",
  },
  {
    legalIssue: "Physical contact",
    assault: "Simple assault does not require contact",
    battery: "Battery generally involves contact or bodily harm",
  },
  {
    legalIssue: "Main statute",
    assault: "Florida Statutes § 784.011",
    battery: "Florida Statutes § 784.03",
  },
  {
    legalIssue: "General classification",
    assault:
      "Simple assault is a second degree misdemeanor, subject to statutory exceptions",
    battery:
      "Ordinary battery is a first degree misdemeanor, subject to statutory exceptions",
  },
  {
    legalIssue: "Aggravated offense",
    assault: "Aggravated assault under § 784.021",
    battery: "Aggravated battery under § 784.045",
  },
];

export default function BLAssaultVsBatterySection({
  title = "Assault vs. Battery: What’s the Difference?",
  rows = defaultRows,
}: BLAssaultVsBatterySectionProps) {
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
                  Legal issue
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-300 w-3/8">
                  Assault
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-primary w-3/8">
                  Battery
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors hover:bg-slate-50/80 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="py-4 px-6 text-sm sm:text-base font-bold text-slate-900 align-top">
                    {row.legalIssue}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-700 align-top">
                    {row.assault}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-900 font-semibold bg-amber-500/5 align-top">
                    {row.battery}
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

