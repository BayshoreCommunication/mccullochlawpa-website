"use client";

import React from "react";
import {
  FaCommentSlash,
  FaUserSlash,
  FaShareAlt,
  FaTrashAlt,
  FaCalendarTimes,
  FaUserFriends,
  FaGavel,
  FaHistory,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface MistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ALCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: MistakeItem[];
}

const defaultMistakes: MistakeItem[] = [
  {
    id: "detailed-statements",
    title: "Giving Detailed Statements Without Legal Advice",
    description:
      "Ask for legal counsel before answering questions about the allegations. Avoid guessing, speculating or making statements without understanding the potential consequences. Your attorney can explain your rights and advise you on communication with investigators.",
    icon: <FaCommentSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "contacting-victim",
    title: "Contacting the Alleged Victim",
    description:
      "Assault cases sometimes involve domestic violence. So follow all release conditions, injunctions and no contact restrictions from court. Even a message intended to resolve the dispute may violate a court order or create a separate legal problem. Ask your attorney about permitted communication before contacting the alleged victim.",
    icon: <FaUserSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "posting-online",
    title: "Posting About the Incident Online",
    description:
      "Avoid discussing the incident on social media or sharing details about your defense. Public posts, comments, photographs and private messages may become evidence during an investigation or criminal proceeding.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "deleting-recordings",
    title: "Deleting Messages or Recordings",
    description:
      "Preserve relevant texts, emails, photographs, videos, call logs and other communications in their original form. Do not delete or alter material because it appears unfavorable. Your attorney can assess its relevance and advise you on the proper handling of potential evidence.",
    icon: <FaTrashAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "ignoring-court-dates",
    title: "Ignoring Court Dates or Legal Notices",
    description:
      "Read every court notice and document carefully. Missing a hearing or failing to meet a deadline may lead to additional legal complications. Contact your attorney promptly if you have a scheduling conflict or do not understand a court requirement.",
    icon: <FaCalendarTimes className="w-5 h-5 text-red-500" />,
  },
  {
    id: "pressuring-witnesses",
    title: "Pressuring Witnesses",
    description:
      "Do not ask witnesses to change their statements, withhold information or coordinate their accounts. Such conduct may damage your defense and create additional legal exposure. Give your attorney the names of potential witnesses and let counsel handle appropriate witness contact.",
    icon: <FaUserFriends className="w-5 h-5 text-red-500" />,
  },
  {
    id: "assuming-victim-controls",
    title: "Assuming the Alleged Victim Controls the Prosecution",
    description:
      "The state attorney generally decides whether to pursue or dismiss criminal charges. The alleged victim may express a preference about prosecution, but the prosecutor can continue the case based on available evidence. Do not assume a withdrawn complaint will automatically end the proceedings.",
    icon: <FaGavel className="w-5 h-5 text-red-500" />,
  },
  {
    id: "waiting-too-long",
    title: "Waiting Too Long to Preserve Recordings",
    description:
      "Security cameras, business surveillance systems and other recording devices may automatically overwrite older footage. Delays can result in lost evidence from the scene. Tell your attorney about potentially relevant recordings as early as possible so counsel can pursue lawful preservation requests.",
    icon: <FaHistory className="w-5 h-5 text-red-500" />,
  },
];

export default function ALCommonMistakesSection({
  title = "Common Mistakes That Risk Your Case",
  subTitle = "Actions after an assault accusation can create additional legal problems or weaken your defense. Avoid these mistakes while your case remains active.",
  items = defaultMistakes,
}: ALCommonMistakesSectionProps) {
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

        {/* 8 MISTAKES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-red-400/50 transition-all duration-300 flex flex-col justify-between group"
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

