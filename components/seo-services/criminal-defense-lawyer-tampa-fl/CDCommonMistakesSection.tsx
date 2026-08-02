"use client";

import React from "react";
import {
  FaUserSecret,
  FaShareAlt,
  FaFileSignature,
  FaClock,
  FaDollarSign,
  FaExclamationTriangle,
  FaUserShield,
} from "react-icons/fa";

export interface CommonMistakeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: CommonMistakeItem[];
}

const defaultMistakeItems: CommonMistakeItem[] = [
  {
    id: "talking-law-enforcement",
    icon: <FaUserSecret className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Talking to Law Enforcement Without Lawyer",
    description:
      "Police officers are trained to get people talking and most conversations happen before anyone realizes they're a suspect. Anything said, even in a friendly tone, can end up quoted directly in an arrest report. Florida law doesn't require officers to remind you of your right to stay silent outside formal interrogation. Politely declining to answer questions until an attorney is present protects you far better than trying to explain your way out.",
  },
  {
    id: "discussing-details-case",
    icon: <FaShareAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Discussing the Details of Case",
    description:
      "Sharing pending case details with friends or family members creates highly dangerous verbal statements. Prosecutors easily subpoena private digital messages whenever text histories become relevant to cases. State prosecutors regularly review your public social media accounts searching for information contradicting defenses. Keeping case details limited to conversations with your attorney closes off that risk entirely.",
  },
  {
    id: "lying-hiding-facts",
    icon: <FaFileSignature className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Lying or Hiding Facts from Lawyer",
    description:
      "A defense attorney can only build a strategy around the facts they actually know, not the ones a client leaves out. Facts that surface later, especially during discovery, can undermine an entire defense strategy built without them. Attorney client privilege protects what you share, so there's no advantage to holding back. Full honesty with your attorney, even about the parts that feel bad, gives them room to prepare for what's coming.",
  },
  {
    id: "waiting-too-long",
    icon: <FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Waiting Too Long to Seek Representation",
    description:
      "The 21 day window before formal charges get filed is often the best chance to influence the outcome of a case. Waiting until after your first formal arraignment hearing means missing this critical timeline entirely. Helpful evidence supporting your defense becomes significantly harder to secure as time passes. Calling a defense attorney within days of an arrest preserves options that disappear the longer someone waits.",
  },
  {
    id: "lowest-fee-attorney",
    icon: <FaDollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Hiring Attorney Based Solely on Lowest Fee",
    description:
      "The cheapest attorney available isn't always taking the time a case actually needs to build a real defense. Low flat fees sometimes reflect a volume based practice built around quick plea deals rather than trial preparation. A case that deserves a fight can get resolved too fast under that kind of arrangement. Comparing experience and trial record matters more than comparing quotes alone.",
  },
  {
    id: "prioritizing-cost-over-competency",
    icon: <FaExclamationTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Prioritizing Cost Over Competency",
    description:
      "Choosing an attorney based on price rather than experience with your specific charge can cost far more in the long run. A felony conviction's collateral consequences, from job loss to immigration issues, often outweigh the difference in attorney fees. The right experience for a DUI case isn't the same as the right experience for a federal drug charge. Matching an attorney's background to the charge matters more than the number on the invoice.",
  },
  {
    id: "representing-yourself-initial-hearings",
    icon: <FaUserShield className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Representing Yourself at Initial Hearings",
    description:
      "Appearing at a first appearance or arraignment without representation means facing a judge and prosecutor with no one advocating for a lower bond. Self represented defendants often don't know what release conditions are negotiable or what questions to ask. A poorly handled first hearing can set unfavorable terms that follow the case for months. Having an attorney present at every early hearing protects ground that's hard to win back later.",
  },
];

export default function CDCommonMistakesSection({
  title = "Common Mistakes That Risk Your Criminal Case Before You Hire a Tampa Defense Lawyer",
  subTitle = "Certain decisions in the first hours after an arrest can damage a case permanently. Hiring a criminal defense lawyer tampa fl early helps avoid these common mistakes.",
  items = defaultMistakeItems,
}: CDCommonMistakesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
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
              <FaExclamationTriangle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
