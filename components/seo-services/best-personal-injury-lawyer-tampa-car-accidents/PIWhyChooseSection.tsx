"use client";

import React from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaUserShield,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PIWhyChooseSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  row1Items?: WhyChooseItem[];
  row2Items?: WhyChooseItem[];
}

const defaultRow1Items: WhyChooseItem[] = [
  {
    id: "local-trial-experience",
    icon: <FaGavel className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Local Trial Experience",
    description:
      "McCulloch Law regularly advocates for serious injury cases before local Hillsborough County court judges. Insurance adjusters know exactly which law firms fight inside courtrooms or settle quickly. That local reputation alone often pushes adjusters toward a stronger opening offer.",
  },
  {
    id: "no-fee-unless-win",
    icon: <FaShieldAlt className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "No Fee Unless We Win",
    description:
      "You pay nothing upfront, and you owe nothing if the case doesn't win. McCulloch Law only gets paid from the settlement or verdict it secures. That structure keeps the firm's incentives lined up directly with your own.",
  },
  {
    id: "direct-access-attorney",
    icon: <FaUserShield className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Direct Access to Your Attorney",
    description:
      "Many firms hand your case to a case manager after the first meeting. At McCulloch Law, your attorney stays involved from intake through final settlement. You get real answers from someone who actually knows the details of your case.",
  },
];

const defaultRow2Items: WhyChooseItem[] = [
  {
    id: "strong-negotiators",
    icon: <FaHandshake className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Strong Negotiators",
    description:
      "McCulloch Law never settles fast just to close out a file quickly. Our legal team demands absolute medical clarity before evaluating any corporate payout offers. Strategic courtroom patience routinely transforms low settlement proposals into fair financial compensation packages.",
  },
  {
    id: "bilingual-team",
    icon: <FaGlobe className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "A Bilingual Team",
    description:
      "Tampa's growing Hispanic community deserves skilled legal representation speaking their native language fluently. McCulloch Law's office staff communicates fluently in Spanish during your entire litigation process. Injured clients won't ever feel lost in translation while fighting for fair compensation.",
  },
];

export default function PIWhyChooseSection({
  title = "Why Tampa Residents Choose McCulloch Law After a Car Accident",
  highlightedText = "McCulloch Law",
  subTitle = "Local families choose our firm because we treat every car accident as an urgent priority. Our best personal injury lawyer tampa car accidents at McCulloch Law delivers results without the runaround that big advertisers often provide.",
  row1Items = defaultRow1Items,
  row2Items = defaultRow2Items,
}: PIWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title.split(highlightedText)[0]}
            <span className="text-primary">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaUserShield className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        {/* FEATURES GRID WITH DIVIDERS */}
        <div className="max-w-6xl mx-auto">
          
          {/* ROW 1: 3 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {row1Items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* HORIZONTAL SEPARATOR WITH CENTER CIRCLE RING */}
          <div className="relative my-8 sm:my-10 flex items-center justify-center">
            <div className="w-full h-[1px] bg-slate-200/80" />
            <div className="absolute w-4 h-4 rounded-full border-2 border-primary bg-white" />
          </div>

          {/* ROW 2: 2 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {row2Items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#081524] border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
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
