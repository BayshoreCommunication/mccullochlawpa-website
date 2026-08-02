"use client";

import React from "react";
import {
  FaPlaneDeparture,
  FaUniversity,
  FaIdCard,
  FaShieldAlt,
} from "react-icons/fa";

export interface RestrictionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FDRestrictionsSectionProps {
  title?: string;
  subTitle?: string;
  items?: RestrictionItem[];
}

const defaultRestrictionItems: RestrictionItem[] = [
  {
    id: "bond-conditions-travel-limits",
    icon: <FaPlaneDeparture className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Bond Conditions and Travel Limits",
    description:
      "Florida courts regularly set bond conditions on fraud defendants. Depending on the charge, those conditions can include travel restrictions, passport surrender, or mandatory check-ins with pretrial services. Federal cases tend to carry stricter terms. A single violation, even an unintended one, can result in detention. Our fraud defense lawyer Tampa reviews every condition imposed in your case and pushes back on anything the charge does not actually support.",
  },
  {
    id: "business-financial-account-restrictions",
    icon: <FaUniversity className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Business and Financial Account Restrictions",
    description:
      "In the case of corporate fraud allegations, there are times when court orders are issued that will freeze accounts or restrict the way that a business functions during the course of the process. These are typically requested by prosecutors to preserve funds to be sought for restitution. This financial burden that comes afterwards can cause a ripple effect that can impact on your employees before the trial date has even come. We review those orders carefully and challenge anything that reaches beyond what the law permits.",
  },
  {
    id: "professional-license-reporting",
    icon: <FaIdCard className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Professional License Reporting Requirements",
    description:
      "In Florida, many licensed professionals carry a legal obligation to report a pending fraud charge to their state board. That includes attorneys, physicians, real estate agents, and contractors, among others. A board can move to suspend a license while a case is still active, without waiting for a conviction. The professional consequences can arrive well ahead of any courtroom outcome. McCulloch Law handles licensing exposure as part of the defense from the beginning, not something addressed later.",
  },
];

export default function FDRestrictionsSection({
  title = "What Restrictions Are Imposed After Being Charged With Fraud in Tampa",
  subTitle = "Fraud charges do not wait for a verdict to start affecting your life. Restrictions can attach the moment the State files charges, sometimes before you have spoken with anyone about your defense. Knowing what those restrictions look like from the start puts you in a better position to handle them.",
  items = defaultRestrictionItems,
}: FDRestrictionsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
