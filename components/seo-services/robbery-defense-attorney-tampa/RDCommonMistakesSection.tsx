"use client";

import React from "react";
import {
  FaCommentSlash,
  FaPhoneSlash,
  FaShareAlt,
  FaUserSlash,
  FaTrashAlt,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface RobberyMistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RDCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: RobberyMistakeItem[];
}

const defaultMistakes: RobberyMistakeItem[] = [
  {
    id: "talking-to-police",
    title: "Talking to the Police Without a Lawyer",
    description:
      "Police may ask you to explain your location, identify other people, describe the incident or discuss disputed property. Even a casual conversation can produce statements investigators later use against you. You have the right to remain silent and request legal counsel during custodial questioning. State your decision clearly, request an attorney and stop answering questions about the allegation.",
    icon: <FaCommentSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "jail-phones-visitors",
    title: "Discussing the Case on Jail Phones or Visitors' Booths",
    description:
      "Jail phone calls and visitor conversations may undergo monitoring or recording. Investigators and prosecutors may later review statements about the incident, witnesses, property or possible defenses. Do not discuss case facts, speculate about evidence or ask another person to change a statement. Use privileged attorney communication for confidential legal discussions. Also remind family members to avoid discussing the case with witnesses or posting information online.",
    icon: <FaPhoneSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "social-media-content",
    title: "Posting, Deleting or Modifying Social Media Content",
    description:
      "Social media posts, photographs, comments, direct messages and location tags may become evidence in a criminal investigation. Prosecutors may use online activity to challenge an alibi or establish contact with another person. Do not delete messages, edit photographs or remove posts after an arrest. Such conduct can raise evidence tampering concerns.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "contacting-victim-witnesses",
    title: "Contacting the Victim or Alleged Witnesses",
    description:
      "Contacting the alleged victim or witnesses can create additional legal problems. A judge may impose a “no contact” condition as part of bond or pretrial release. Do not call, message, visit or approach a protected person. Avoid indirect contact through relatives, friends or social media. Do not ask anyone to withdraw a complaint, change testimony or destroy records.",
    icon: <FaUserSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "getting-rid-physical-items",
    title: "Getting Rid of or Modifying Physical Items",
    description:
      "Do not throw away, hide, clean, repair or alter clothing, footwear, vehicles, electronic devices or other items connected to the investigation. Prosecutors may treat attempts to destroy or conceal evidence as separate criminal conduct. Changes to physical evidence can also make an innocent explanation harder to establish.",
    icon: <FaTrashAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "delaying-alibi-video",
    title: "Delaying the Preservation of Crucial Alibi Video",
    description:
      "Security footage may disappear when businesses, apartment complexes, parking facilities and private camera systems overwrite older recordings. A delay can eliminate footage from a location capable of confirming your movements. Identify the relevant camera locations, dates, approximate times and business contacts as soon as possible.",
    icon: <FaClock className="w-5 h-5 text-red-500" />,
  },
];

export default function RDCommonMistakesSection({
  title = "Common Mistakes That Risk Your Case to Lose",
  subTitle = "Applicants without Tampa criminal defense lawyer often made minor mistakes that damaged their case.",
  items = defaultMistakes,
}: RDCommonMistakesSectionProps) {
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

        {/* 6 MISTAKES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-red-100/80 shadow-md hover:shadow-xl hover:border-red-400/50 transition-all duration-300 flex flex-col justify-between group"
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

