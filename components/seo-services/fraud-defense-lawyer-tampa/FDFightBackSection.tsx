"use client";

import React from "react";
import Image from "next/image";
import {
  FaSearch,
  FaBalanceScale,
  FaGavel,
  FaArrowRight,
} from "react-icons/fa";

export interface DefenseStrategyItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FDFightBackSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: DefenseStrategyItem[];
}

const defaultDefenseItems: DefenseStrategyItem[] = [
  {
    number: "01",
    id: "reviewing-allegation",
    icon: <FaSearch className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Reviewing the Allegation Against You",
    description:
      "We start by reviewing every allegation against you in full. We go through each document, statement, and piece of evidence. We look for weaknesses in the State's theory.",
  },
  {
    number: "02",
    id: "looking-into-motivation",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Looking Into What Drove the Accusation",
    description:
      "We also look into what may be driving the accusation. Business conflicts and personal disputes sometimes lead to false claims. That context can shift a case.",
  },
  {
    number: "03",
    id: "negotiation-trial-if-needed",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Negotiation, and Trial if Needed",
    description:
      "When it makes sense, we negotiate directly with prosecutors before trial. Many fraud cases end in reduced charges or dismissal. When talks fail, we prepare for trial.",
  },
];

export default function FDFightBackSection({
  title = "Falsely Accused of Fraud in Tampa? Here's How McCulloch Law Defends Your Case",
  subTitle = "Even if you have done nothing wrong, you can be a victim of fraud and that is worrying. Such allegations are commonly rumored or arise from conflicts regarding business. We take every false accusation seriously. Drew McCulloch spent years as a state prosecutor. That gives him a real edge here. He has seen how these cases get built from the other side.",
  imagePath = "/images/seo-services/fraud-defense-lawyer-tampa/mcculloch.webp",
  items = defaultDefenseItems,
}: FDFightBackSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="McCulloch Law Defending False Fraud Allegations"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-3">
              <h3 className="text-lg font-bold text-primary">
                Former Prosecutorial Edge
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Drew McCulloch spent years prosecuting fraud for the State. He uses that exact insider knowledge to dismantle false allegations.
              </p>
              <a
                href="tel:8134442817"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-yellow-400 transition-colors pt-2 group"
              >
                <span>Call (813) 444-2817 for Legal Action</span>
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/30">
                      Step {item.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
