"use client";

import React from "react";
import {
  FaCommentSlash,
  FaShareAlt,
  FaTrashAlt,
  FaUserSlash,
  FaCalendarTimes,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface JuvenileMistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: JuvenileMistakeItem[];
}

const defaultMistakes: JuvenileMistakeItem[] = [
  {
    id: "answering-without-rights",
    title: "Letting a Child Answer Questions Without Understanding Their Rights",
    description:
      "A child speaking without counsel damages defense positions. Protect their rights during police interactions immediately. Police utilize psychological strategies to extract teen confessions. Silence remains the best protection against self incrimination.",
    icon: <FaCommentSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "discussing-group-chats-social",
    title: "Discussing Allegations in Group Chats or on Social Media",
    description:
      "Social media posts become damaging evidence quickly. Avoid public discussion entirely during the legal process. Prosecutors monitor accounts for admissions of guilt. Even private messages can be subpoenaed by authorities.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "deleting-altering-messages",
    title: "Deleting Messages or Altering Potential Evidence",
    description:
      "The destruction of digital files ruins vital proof. Always preserve original data in its native format. Deleting files triggers separate evidence tampering charges. Forensics teams easily recover intentionally deleted materials anyway.",
    icon: <FaTrashAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "contacting-witnesses-families",
    title: "Contacting Witnesses or Other Families About the Allegations",
    description:
      "Direct communication complicates legal disputes unnecessarily. Let attorneys handle witness contact and formal interviews. Reaching out looks like witness intimidation to a judge. Keep distance from anyone involved in the incident.",
    icon: <FaUserSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "ignoring-court-notices-school",
    title: "Ignoring Court Notices or Assuming School Discipline Ends the Matter",
    description:
      "A missed court deadline brings severe legal penalties. School discipline and court cases remain completely separate. A school suspension does not satisfy criminal justice requirements. Judges issue pickup orders for missed court dates.",
    icon: <FaCalendarTimes className="w-5 h-5 text-red-500" />,
  },
];

export default function JDCommonMistakesSection({
  title = "Common Mistakes That Risk Your Child's Case",
  subTitle = "Families often make errors during the initial panic. Careful choices keep defense options open for the lawyer.",
  items = defaultMistakes,
}: JDCommonMistakesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
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

        {/* 5 MISTAKES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-red-100/80 shadow-md hover:shadow-xl hover:border-red-400/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

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
