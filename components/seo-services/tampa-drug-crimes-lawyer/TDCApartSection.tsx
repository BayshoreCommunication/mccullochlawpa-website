"use client";

import React from "react";
import { FaCheck, FaTimes, FaBalanceScale } from "react-icons/fa";

export interface ApartRow {
  feature: string;
  mcculloch: string;
  others: string;
}

export interface TDCApartSectionProps {
  title?: string;
  rows?: ApartRow[];
}

const defaultRows: ApartRow[] = [
  {
    feature: "Atorneys experience",
    mcculloch: "4+ years as a Hillsborough Assistant State Attorney",
    others: "No inside view of the state's case",
  },
  {
    feature: "Trial record",
    mcculloch: "75+ juries picked, 100+ cases to verdict",
    others: "A record built mostly on pleas",
  },
  {
    feature: "Attorney access",
    mcculloch: "Direct line to Drew McCulloch, day or night",
    others: "Calls routed through a paralegal",
  },
  {
    feature: "Circuit knowledge",
    mcculloch: "Knows which judges favor drug court and PTI",
    others: "Unfamiliar with local diversion programs",
  },
  {
    feature: "Peer recognition",
    mcculloch: "Super Lawyers Rising Stars, National Trial Lawyers",
    others: "Rankings bought through paid advertising",
  },
  {
    feature: "Response time",
    mcculloch: "Guidance within the first 48 hours of arrest",
    others: "A callback days later",
  },
];

export default function TDCApartSection({
  title = "What Sets McCulloch Law Apart From Other Firm",
  rows = defaultRows,
}: TDCApartSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
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

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <thead>
              <tr className="bg-[#081524] text-white">
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider">
                  What matters after drug arrest
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-primary">
                  McCulloch Law
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-400">
                  Other law firm
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="py-4 px-6 font-bold text-slate-900 text-xs sm:text-sm">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-semibold text-xs sm:text-sm bg-primary/5 border-l-2 border-primary">
                    <div className="flex items-start gap-2.5">
                      <FaCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{row.mcculloch}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <FaTimes className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
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
