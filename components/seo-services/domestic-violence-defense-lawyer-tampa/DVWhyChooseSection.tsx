"use client";

import React from "react";
import {
  FaComments,
  FaLandmark,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBullseye,
  FaShieldAlt,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceWhyChooseSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  imagePath?: string;
  row1Items?: WhyChooseItem[];
  row2Items?: WhyChooseItem[];
}

const defaultRow1Items: WhyChooseItem[] = [
  {
    id: "direct-attorney-comm",
    icon: <FaComments className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Direct Attorney Communication From Day One",
    description:
      "Every McCulloch Law client communicates directly with the attorney managing their defense instead of paralegal or intake coordinator. We prepare each client for an exact court sequence and refine their testimony to avoid pitfalls.",
  },
  {
    id: "hillsborough-courtroom-knowledge",
    icon: <FaLandmark className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Working Knowledge of Hillsborough County Courtroom",
    description:
      "McCulloch Law works regularly inside the Hillsborough County courthouse. Our lawyers understand judges' domestic violence arraignments, bond hearings and trial calendaring in this jurisdiction. Our local familiarity shapes every pre hearing decision.",
  },
];

const defaultRow2Items: WhyChooseItem[] = [
  {
    id: "strategy-before-arraignment",
    icon: <FaCalendarAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Defense Strategy Begins Before Your Arraignment Date",
    description:
      "Our firm does not wait for a trial date to begin building your case. We begin evidence preservation requests, witness contact and affidavit analysis within first days of representation.",
  },
  {
    id: "accurate-case-assessment",
    icon: <FaClipboardCheck className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Accurate Case Assessment With No Upfront Fee",
    description:
      "We give clients a straight picture of the strengths and weaknesses in their case before discussing any strategy. We do not promise a specific outcome to earn a retainer because that will tell you more about the attorney than case.",
  },
  {
    id: "defined-practice-focus",
    icon: <FaBullseye className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Domestic Violence Defense as Defined Practice Focus",
    description:
      "McCulloch Law handles domestic violence cases as a specific part of its criminal defense practice. Our firm knows the 2026 statutory updates and prosecution patterns in Hillsborough County. We understand the specific defense strategies that produce results in Tampa courts.",
  },
];

export default function DomesticViolenceWhyChooseSection({
  title = "Why Tampa Residents Choose McCulloch Law for Domestic Violence Defense",
  highlightedText = "Domestic Violence Defense",
  subTitle = "Tampa domestic violence cases progress quickly and hiring a domestic violence defense lawyer in tampa within 48 hours impacts future options. McCulloch Law is specific, local and experienced with Hillsborough County's cases.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/attorney-office.png",
  row1Items = defaultRow1Items,
  row2Items = defaultRow2Items,
}: DomesticViolenceWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title.split(highlightedText)[0]}
            <span className="text-primary">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </h2>

          {/* Shield Emblem Divider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        {/* ==================================================== */}
        {/* FEATURES GRID WITH DIVIDERS                          */}
        {/* ==================================================== */}
        <div className="max-w-6xl mx-auto">
          
          {/* ROW 1: 2 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {row1Items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center p-6 sm:p-8 group cursor-pointer"
              >
                {/* Circular Badge Icon (White Background + Gold Border) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* HORIZONTAL SEPARATOR WITH CENTER CIRCLE RING */}
          <div className="relative my-6 sm:my-10 flex items-center justify-center">
            <div className="w-full h-[1px] bg-slate-200/80" />
            <div className="absolute w-4 h-4 rounded-full border-2 border-slate-300 bg-white" />
          </div>

          {/* ROW 2: 3 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {row2Items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center p-6 sm:p-8 group cursor-pointer"
              >
                {/* Circular Badge Icon (Dark Navy Background + Gold Border) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#081524] border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
