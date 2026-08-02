"use client";

import React from "react";
import {
  FaPercentage,
  FaBan,
  FaCalculator,
  FaUserShield,
  FaBalanceScale,
} from "react-icons/fa";

export interface FaultImpactItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PIComparativeNegligenceSectionProps {
  title?: string;
  subTitle?: string;
  items?: FaultImpactItem[];
}

const defaultFaultItems: FaultImpactItem[] = [
  {
    id: "under-51-fault",
    icon: <FaPercentage className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Under 51% Fault",
    description:
      "You can still recover financial damages if you're fifty percent or less responsible. However, your total compensation award drops proportionally based on your exact blame percentage. McCulloch Law aggressively fights to keep your liability assignment as low as possible. Our tampa personal injury lawyer for car accidents utilizes detailed accident evidence to shield clients from unfair blame.",
  },
  {
    id: "51-or-more-fault",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "51% or More Fault",
    description:
      "Florida statutes bar all financial recovery once you hit fifty one percent at fault. This strict modified comparative fault standard leaves severely injured victims completely empty handed. Even minor driving errors like texting can trigger this devastating defense cutoff rule. McCulloch Law gathers scene proof early to prevent you from crossing this threshold.",
  },
  {
    id: "proportional-reduction",
    icon: <FaCalculator className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Proportional Reduction",
    description:
      "Insurance adjusters and local juries assign blame percentages to every driver involved collectively. That final percentage subtracts money directly from the overall valuation of your case. A twenty percent fault finding on large claims costs you a hundred thousand dollars. Losing that much compensation creates severe financial hardships during your physical recovery process.",
  },
  {
    id: "adjuster-tactics-fault",
    icon: <FaUserShield className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Insurance Adjuster Tactics",
    description:
      "Biased insurance adjusters always assign inflated fault percentages before you retain a lawyer. Shifting just a few percentage points turns a valuable injury claim completely worthless. McCulloch Law actively challenges corporate adjusters by using independent accident reconstruction experts. We use official police reports and neutral witness statements to protect your recovery.",
  },
];

export default function PIComparativeNegligenceSection({
  title = "How Comparative Negligence Impacts Your Tampa Auto Accident Claim",
  subTitle = "Florida legislators changed personal injury system in 2023 and ended pure comparative negligence. Now, if you hold primary responsibility for a crash, you cannot receive compensation. Your blame percentage can fully negate your auto accident claim.",
  items = defaultFaultItems,
}: PIComparativeNegligenceSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

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
