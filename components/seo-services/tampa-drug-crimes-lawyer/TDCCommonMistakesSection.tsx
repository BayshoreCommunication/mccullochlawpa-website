"use client";

import React from "react";
import {
  FaCommentSlash,
  FaSearch,
  FaShareAlt,
  FaCalendarTimes,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface MistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: MistakeItem[];
}

const defaultMistakeItems: MistakeItem[] = [
  {
    id: "talking-to-police",
    title: "Talking to Police Without Attorney",
    description:
      "One casual comment at the scene can become the state's best evidence. Officers at the scene keep a conversation going on purpose. Staying silent until your attorney arrives costs you absolutely nothing.",
    icon: <FaCommentSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "consenting-search",
    title: "Consenting to Unwarranted Search",
    description:
      "Saying yes to a search often erases your strongest legal argument. Many Tampa drug cases start with an unnecessary consent search. A single yes weakens any later motion to suppress evidence.",
    icon: <FaSearch className="w-5 h-5 text-red-500" />,
  },
  {
    id: "posting-contacting-witnesses",
    title: "Posting About Case or Contacting Witnesses",
    description:
      "One social media post can hand prosecutors evidence they lacked before. Prosecutors in Hillsborough County pull social media posts into discovery routinely. A single explanation posted online can create a brand new angle for them.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "missed-court-date",
    title: "Court Date or Pretrial Deadline Missed",
    description:
      "One missed date can undo months of careful legal progress. A missed PP Court date can trigger a new warrant instantly. A missed DPTI deadline can remove you from the program entirely.",
    icon: <FaCalendarTimes className="w-5 h-5 text-red-500" />,
  },
];

export default function TDCCommonMistakesSection({
  title = "Common Mistakes That Risk Your Drug Crime Case Before You Hire a Tampa Defense Lawyer",
  subTitle = "The first hours after a Tampa arrest matter more than any court date.",
  items = defaultMistakeItems,
}: TDCCommonMistakesSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
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
