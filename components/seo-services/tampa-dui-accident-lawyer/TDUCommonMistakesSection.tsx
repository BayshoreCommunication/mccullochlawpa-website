"use client";

import React from "react";
import {
  FaCommentSlash,
  FaVial,
  FaShareAlt,
  FaHourglassEnd,
  FaPhoneSlash,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface MistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDUCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: MistakeItem[];
}

const defaultItems: MistakeItem[] = [
  {
    id: "admitting-guilt-accident",
    title: "Admitting Guilt For Accident",
    description:
      "Often in shock or distress, drivers can sometimes give incriminating statements to investigating officers. Making admissions of alcohol consumption or causing an accident can damage your legal standing severely. Florida accident privilege laws protect your crash statements and we enforce these protections.",
    icon: <FaCommentSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "refusing-implied-consent",
    title: "Refusing or Failing to Understand Implied Consent",
    description:
      "You must submit to legal breath, urine or  blood tests under Florida's implied consent laws. Refusing chemical testing triggers an automatic one year license loss. Under Trenton's Law, refusing tests now carries separate misdemeanor criminal charges.",
    icon: <FaVial className="w-5 h-5 text-red-500" />,
  },
  {
    id: "posting-social-media",
    title: "Posting About the Accident on Social Media",
    description:
      "Accused drivers sometimes share accident details, photos or comments across social media platforms. Prosecutors monitor social accounts to gather statements that contradict your official defense claims. Avoid deleting posts after an arrest, as destroying evidence causes additional court sanctions.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "missing-10-day-deadline",
    title: "Missing the 10 Day DHSMV Deadline",
    description:
      "Failing to challenge your administrative license suspension within ten days causes automatic license loss. You lose your chance to secure a temporary business permit when deadlines pass. Retaining our firm immediately ensures we file your review request before time expires.",
    icon: <FaHourglassEnd className="w-5 h-5 text-red-500" />,
  },
  {
    id: "talking-insurance-without-counsel",
    title: "Talking to Insurance Company Without Counsel",
    description:
      "Insurance adjusters request recorded statements shortly after motor vehicle collisions occur. Statements about alcohol consumption or accident details are shared directly with prosecuting attorneys. We handle all conversations with insurance representatives to prevent self incrimination.",
    icon: <FaPhoneSlash className="w-5 h-5 text-red-500" />,
  },
];

export default function TDUCommonMistakesSection({
  title = "Common Mistakes That Destroy Your DUI Case Before You Hire Defense Lawyer",
  subTitle = "Simple mistakes in first 24 hours after DUI auto accident could turn out to be fatal to your defense. Preventing these mistakes can protect your defense from the very start.",
  items = defaultItems,
}: TDUCommonMistakesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaExclamationTriangle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="w-10 h-[2px] bg-red-400 rounded-full mb-3" />

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
