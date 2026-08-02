"use client";

import React from "react";
import {
  FaUserSecret,
  FaEnvelope,
  FaClock,
  FaBan,
  FaShareAlt,
  FaFileSignature,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface CommonMistakeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: CommonMistakeItem[];
}

const defaultMistakeItems: CommonMistakeItem[] = [
  {
    id: "talking-to-officers",
    icon: <FaUserSecret className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Talking to Officers Freely During or After Arrest",
    description:
      "Any detail shared with law enforcement without a lawyer present becomes evidence against you. Officers are trained to ask conversational questions to produce admissible statements. Even when defendants believe they are simply providing context or clarification. The right to remain silent exists specifically for this moment. Invoking it is the most protective decision available in attorney's presence.",
  },
  {
    id: "sending-message",
    icon: <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Sending Message to Alleged Victim",
    description:
      "Text, voicemail or social media message sent after court order for no communication qualifies as a criminal violation. The content of the message does not determine the charge. Because an apology and a confrontational statement carry identical legal consequences under Florida's no-contact statute. Prosecutors add violation charges to original domestic battery case. This complicates plea discussions and increases overall sentencing exposure considerably.",
  },
  {
    id: "waiting-weeks",
    icon: <FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Waiting Weeks Before Retaining Legal Representation",
    description:
      "Security footage at and near the incident location usually overwritten within 48 to 72 hours after arrest. Hiring defense attorney can request file preservation on your behalf. Witness memories might fade and conflicting evidence can deteriorate if not documented. Without retained counsel give prosecution a chance to organize its case against you with no one reviewing or challenging it.",
  },
  {
    id: "victim-withdraw",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Assuming the Alleged Victim Can Withdraw Case",
    description:
      "Florida's state attorney holds independent charging authority under the no-drop policy. Victim's request for dismissal carries limited persuasive weight with no binding legal effect on the prosecution's decision. Defendants waiting for alleged victim to resolve the situation lose weeks of critical defense preparation time. An attorney with Hillsborough County prosecution patterns knowledge can use the victim's position strategically.",
  },
  {
    id: "social-media-discussion",
    icon: <FaShareAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Discussing Arrest or Incident on Social Media",
    description:
      "Investigators check defendant social media accounts immediately after domestic violence arrests. Anything posted is screenshotted and treated as potential trial evidence regardless of privacy settings. Neutral or even supportive post of defendant's own position can be introduced at trial to contradict the account presented in court. The only defensible approach is to post nothing about the incident, arrest, alleged victim or case on any platform.",
  },
  {
    id: "accepting-plea",
    icon: <FaFileSignature className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Accepting the First Plea Offer Before Case Review",
    description:
      "Early prosecution offers are built around the arresting officer's police report. This reflects one interpretation of events and frequently contains errors, unsupported conclusions and missing context. Affidavit inconsistencies, missing body cam footage, and witness credibility problems often go unnoticed. These issues in charging documents are rarely identified until defense attorney reviews the complete case file. A plea accepted without review settles the case on prosecution's terms rather than evidence's actual strength.",
  },
];

export default function DVCommonMistakesSection({
  title = "Common Mistakes That Risk Your Domestic Violence Case Before You Hire a Tampa Defense Lawyer",
  subTitle = "Most Tampa domestic violence cases are lost in court due to some common mistake and not hiring criminal defense lawyer for domestic violence in tampa immediately.",
  items = defaultMistakeItems,
}: DomesticViolenceCommonMistakesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        {/* SECTION HEADER */}
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

        {/* MISTAKES GRID */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer"
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
