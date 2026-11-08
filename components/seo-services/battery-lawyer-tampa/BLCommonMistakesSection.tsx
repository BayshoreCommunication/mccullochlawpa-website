"use client";

import React from "react";
import {
  FaCommentSlash,
  FaShareAlt,
  FaUserSlash,
  FaFistRaised,
  FaTrashAlt,
  FaUserShield,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface MistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BLCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: MistakeItem[];
}

const defaultMistakes: MistakeItem[] = [
  {
    id: "talking-to-police",
    title: "Talking to Police Without an Attorney",
    description:
      "You have the right to remain silent and request legal counsel. Avoid guessing or trying to explain every detail during questioning before receiving legal advice. Tell officers you want an attorney and follow lawful instructions. Your lawyer can advise you on communication with investigators.",
    icon: <FaCommentSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "posting-social-media",
    title: "Posting on Social Media",
    description:
      "Posts, photographs, comments and private messages can become evidence. Avoid discussing the alleged incident, criticizing witnesses or publishing details of your defense. Preserve relevant content and ask an attorney about appropriate handling of your accounts.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "violating-no-contact",
    title: "Violating ‘No Contact’ Orders or Bond Conditions",
    description:
      "Follow every court order, release condition and injunction. A call or message intended to resolve a personal dispute may violate a restriction or create an additional charge. Contact an attorney before taking any action involving a person covered by an order.",
    icon: <FaUserSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "excessive-force",
    title: "Using Excessive or Disproportionate Force",
    description:
      "A claim of self defense depends on the facts and legal requirements. Continued force after a threat ends or force beyond lawful limits, may weaken a defense. Describe the full sequence of events to the attorney. Do not omit conduct simply because it may seem unfavorable.",
    icon: <FaFistRaised className="w-5 h-5 text-red-500" />,
  },
  {
    id: "failing-preserve-evidence",
    title: "Failing to Preserve Early Evidence",
    description:
      "Security systems may overwrite recordings and digital records may become harder to retrieve over time. Preserve relevant files and identify possible cameras, witnesses and records as soon as possible. Battery defense attorneys can pursue lawful preservation requests and assess available evidence.",
    icon: <FaTrashAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "self-representation",
    title: "Attempting Self Representation",
    description:
      "Battery cases may involve statutory defenses, evidence rules, court deadlines and procedural requirements. A procedural mistake can affect your legal options. An attorney can review the charge, explain the process and represent your interests during applicable proceedings.",
    icon: <FaUserShield className="w-5 h-5 text-red-500" />,
  },
];

export default function BLCommonMistakesSection({
  title = "Common Mistakes That Risk Your Case",
  subTitle = "Actions after a battery arrest can create additional legal problems or weaken your defense. Avoid these mistakes while your case remains active.",
  items = defaultMistakes,
}: BLCommonMistakesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-red-400/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-red-500/60 bg-red-500/10 flex items-center justify-center text-red-500 shadow-sm">
              <FaExclamationTriangle className="w-4 h-4" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-red-400/40 rounded-full" />
          </div>
        </div>

        {/* 6 MISTAKES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-red-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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

