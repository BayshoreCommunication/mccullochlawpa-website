"use client";

import React from "react";
import { FaBalanceScale, FaCheck, FaTimes } from "react-icons/fa";

export interface ApartRow {
  capability: string;
  mccullochLaw: string;
  genericFirms: string;
}

export interface RDApartSectionProps {
  title?: string;
  rows?: ApartRow[];
}

const defaultRows: ApartRow[] = [
  {
    capability: "Prosecutorial Background",
    mccullochLaw: "Former Assistant State Attorney (Hillsborough County)",
    genericFirms: "Often lacks direct experience on the state's filing side",
  },
  {
    capability: "Hillsborough Trial Record",
    mccullochLaw: "100+ cases tried to verdict and 75+ juries selected",
    genericFirms: "May rely heavily on quick plea deals to avoid going to trial",
  },
  {
    capability: "Case Assignment",
    mccullochLaw: "Personally handled by a licensed Florida defense attorney",
    genericFirms: "Routinely handed off to paralegals or junior associates",
  },
  {
    capability: "Pre File Intervention",
    mccullochLaw: "Immediate action within the first 21 days post arrest",
    genericFirms: "Often delays work until the state files formal charges",
  },
  {
    capability: "Florida Depositions",
    mccullochLaw: "Affirmative, deposition heavy approach to lock in testimony",
    genericFirms: "Frequently waives depositions to save time or effort",
  },
];

export default function RDApartSection({
  title = "What Sets McCulloch Law Apart From Other Firms?",
  rows = defaultRows,
}: RDApartSectionProps) {
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
                  Capability
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-primary w-3/8">
                  McCulloch Law, P.A.
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-400 w-3/8">
                  Generic Law Firms
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, idx) => (
                <tr
                  key={row.capability}
                  className={`transition-colors hover:bg-slate-50/80 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="py-4 px-6 text-sm sm:text-base font-bold text-slate-900 align-top">
                    {row.capability}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-900 font-semibold align-top">
                    <div className="flex items-start gap-2.5">
                      <FaCheck className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span>{row.mccullochLaw}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-500 align-top">
                    <div className="flex items-start gap-2.5">
                      <FaTimes className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                      <span>{row.genericFirms}</span>
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

