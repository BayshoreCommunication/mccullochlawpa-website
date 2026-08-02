"use client";

import React from "react";
import {
  FaGavel,
  FaCalendarCheck,
  FaClipboardCheck,
  FaBan,
  FaDollarSign,
  FaShieldAlt,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
  footerNote?: React.ReactNode;
}

export interface DomesticViolencePenaltiesSectionProps {
  title?: string;
  description1?: string;
  description2?: string;
  penalties?: PenaltyItem[];
}

const defaultPenalties: PenaltyItem[] = [
  {
    id: "jail-sentences",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Jail and Prison Time Based on Charge Level",
    description:
      "First offense misdemeanor domestic battery carries up to one year in Hillsborough County Jail and up to one year of probation. Third degree felony domestic violence conviction carries up to five years in Florida state prison. First degree felony carries up to 30 years of imprisonment. Strangulation charges, serious bodily injury incidents and cases with children have higher minimum sentences.",
  },
  {
    id: "bip-program",
    icon: <FaCalendarCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "29 Week Batterer's Intervention Program",
    description:
      "Florida law requires every person convicted of domestic violence to complete a state certified batterer's intervention program. This mandatory program had no judicial exceptions permitted. The program runs 29 consecutive weeks and requires consistent attendance regardless of work schedule or family obligations. Failing to complete the program constitutes probation violation and results in a hearing for maximum sentence.",
  },
  {
    id: "probation-conditions",
    icon: <FaClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Probation With Strict Compliance Conditions",
    description:
      "Domestic violence probation in Florida includes mandatory contact prohibition orders, regular officer check-ins, substance abuse screening, and restricted travel. Hillsborough County probation officers monitor compliance actively. Single documented violation triggers a formal violation of probation hearing. Judges can impose the maximum sentence at that hearing regardless of violations’ severity.",
  },
  {
    id: "firearm-ban",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Loss of Federal Firearm Rights Permanently",
    description:
      "The Lautenberg Amendment permanently strips firearm ownership rights upon any misdemeanor domestic violence conviction. This applies to concealed carry permits, hunting licenses and any professional firearm use in law enforcement or licensed security roles. Florida's state prohibition lasts three years. However the federal lifetime ban applies over it and cannot be restored through any state level legal proceeding.",
  },
  {
    id: "court-costs",
    icon: <FaDollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Mandatory Fines and Court Costs",
    description:
      "Florida courts impose mandatory fines for misdemeanor domestic battery and for aggravated felony domestic violence. These fines are separate from court filing costs and program enrollment fees. The batterer's intervention program carries its own per session attendance fees and defendant needs to take that financial responsibility. Court ordered financial obligations in a first offense misdemeanor often exceed $5,000.",
  },
];

export default function DomesticViolencePenaltiesSection({
  title = "What Penalties Does a Domestic Violence Conviction Carry in Tampa?",
  description1 = "Tampa domestic violence conviction punishes at two levels. Immediate sentence covers jail time, fines and program completion. Next permanent consequences follow long after the sentence ends.",
  description2 = "",
  penalties = defaultPenalties,
}: DomesticViolencePenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          {/* Emblem Divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          {/* Header Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            {description1}
          </p>
          {description2 && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1 max-w-3xl">
              {description2}
            </p>
          )}
        </div>

        {/* ==================================================== */}
        {/* PENALTIES STACKED CARD LIST                          */}
        {/* ==================================================== */}
        <div className="max-w-5xl mx-auto space-y-6">
          {penalties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 lg:gap-10 relative overflow-hidden"
            >
              {/* Subtle top border hover highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon + Title + Description */}
              <div className="w-full flex flex-col items-start shrink-0">
                <div className="flex items-start gap-4 mb-3">
                  {/* Circular Badge Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Expanding Gold Divider Line */}
                <div className="w-12 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                {/* Full Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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
