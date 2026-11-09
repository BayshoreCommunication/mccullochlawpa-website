"use client";

import React from "react";
import { FaBalanceScale, FaCheck, FaTimes } from "react-icons/fa";

export interface ApartRow {
  comparisonPoint: string;
  mccullochLaw: string;
  otherFirms: string;
}

export interface JDApartSectionProps {
  title?: string;
  rows?: ApartRow[];
}

const defaultRows: ApartRow[] = [
  {
    comparisonPoint: "Prosecutorial Experience",
    mccullochLaw: "Drew McCulloch is a former state prosecutor with firsthand knowledge of how criminal cases are built.",
    otherFirms: "Attorneys bring different professional backgrounds and levels of prosecutorial experience.",
  },
  {
    comparisonPoint: "Trial Experience",
    mccullochLaw: "The firm reports hundreds of trials and more than 100 verdicts.",
    otherFirms: "Trial experience and case histories vary by attorney.",
  },
  {
    comparisonPoint: "Case Preparation",
    mccullochLaw: "Each case receives a careful review of available evidence, police reports, witness statements, and potential legal issues.",
    otherFirms: "Case preparation and attorney involvement vary by firm.",
  },
  {
    comparisonPoint: "Client Communication",
    mccullochLaw: "The firm offers 24/7 availability for urgent client concerns.",
    otherFirms: "Communication practices and availability depend on the firm.",
  },
  {
    comparisonPoint: "Initial Consultation",
    mccullochLaw: "Families can discuss their concerns during a free initial consultation.",
    otherFirms: "Consultation fees and policies vary by firm.",
  },
  {
    comparisonPoint: "Juvenile Defense",
    mccullochLaw: "The firm handles juvenile criminal defense cases in Florida.",
    otherFirms: "Experience with juvenile cases varies by attorney.",
  },
];

export default function JDApartSection({
  title = "What Sets McCulloch Law Apart From Other Firms?",
  rows = defaultRows,
}: JDApartSectionProps) {
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
                  Comparison Point
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-primary w-3/8">
                  McCulloch Law, P.A.
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-400 w-3/8">
                  Other Law Firms
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, idx) => (
                <tr
                  key={row.comparisonPoint}
                  className={`transition-colors hover:bg-slate-50/80 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="py-4 px-6 text-sm sm:text-base font-bold text-slate-900 align-top">
                    {row.comparisonPoint}
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
                      <span>{row.otherFirms}</span>
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

