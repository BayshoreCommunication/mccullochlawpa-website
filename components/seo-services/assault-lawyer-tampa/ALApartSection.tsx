"use client";

import React from "react";
import { FaBalanceScale, FaCheck, FaTimes } from "react-icons/fa";

export interface ApartRow {
  whatToConsider: string;
  mccullochLaw: string;
  otherFirms: string;
}

export interface ALApartSectionProps {
  title?: string;
  rows?: ApartRow[];
}

const defaultRows: ApartRow[] = [
  {
    whatToConsider: "Prosecutorial background",
    mccullochLaw: "Drew McCulloch previously served as a state prosecutor",
    otherFirms: "Many defense attorneys never worked a prosecution file",
  },
  {
    whatToConsider: "Legal experience",
    mccullochLaw: "More than 15 years in personal injury and criminal defense",
    otherFirms: "Experience often limited to one practice area",
  },
  {
    whatToConsider: "Local Representation",
    mccullochLaw:
      "Represents clients across Tampa, Hillsborough County and surrounding Tampa Bay communities.",
    otherFirms: "Often cover only the firm's location and service area.",
  },
  {
    whatToConsider: "Initial consultation",
    mccullochLaw: "Free consultation",
    otherFirms: "Some firms charge for the first meeting or push a retainer early",
  },
  {
    whatToConsider: "Availability",
    mccullochLaw: "Contact the firm 24/7",
    otherFirms: "Often limited to standard business hours",
  },
  {
    whatToConsider: "Practice areas",
    mccullochLaw: "Criminal defense and personal injury under one roof",
    otherFirms: "Frequently siloed, requiring separate firms for related claims",
  },
  {
    whatToConsider: "Case communication",
    mccullochLaw: "Direct, one on one contact with the attorney on your case",
    otherFirms: "Often routed through paralegals or case managers",
  },
];

export default function ALApartSection({
  title = "What Sets McCulloch Law Apart From Other Firms?",
  rows = defaultRows,
}: ALApartSectionProps) {
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
                  What to Consider
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-primary w-3/8">
                  McCulloch Law
                </th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-400 w-3/8">
                  Other Firms
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
                    {row.whatToConsider}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-800 font-medium bg-amber-500/5 align-top">
                    <div className="flex items-start gap-2.5">
                      <FaCheck className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span>{row.mccullochLaw}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-600 align-top">
                    <div className="flex items-start gap-2.5">
                      <FaTimes className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
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

