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
  FaUserMd,
} from "react-icons/fa";

export interface CommonMistakeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: CommonMistakeItem[];
}

const defaultMistakeItems: CommonMistakeItem[] = [
  {
    id: "not-hiring-immediately",
    icon: <FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Not Hiring Defense Attorney Immediately",
    description:
      "If you delay in hiring an attorney then prosecutors will have more time to build their case against you without interference. Early involvement can stop prosecutors from filing charges and shape the bail hearing outcome. Every day without representation is a day the prosecution operates without any legal opposition at all.",
  },
  {
    id: "speaking-to-police",
    icon: <FaUserSecret className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Speaking to Police or Investigators Without Counsel",
    description:
      "Police can legally deceive you during questioning and courts treat your statements as admissible. Many defendants believe explaining their version quickly will stop formal charges from landing. In most Tampa sex crime convictions, defendant's own words contributed directly to the prosecution's case. Silence is not guilt rather it is the only legally protected response.",
  },
  {
    id: "contacting-accuser",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Contacting or Confronting the Accuser",
    description:
      "Under FL Law contacting the alleged victim for any reason is witness tampering. It can trigger additional charges, bond revocation and consciousness of guilt evidence prosecutors introduce at trial. Your attorney handles all relevant communications once you retain counsel and you contact no one. Even indirect contact through a mutual friend can give prosecutors trial evidence to use against you.",
  },
  {
    id: "social-media",
    icon: <FaShareAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Discussing Case on Social Media",
    description:
      "Prosecutors can take screenshots of public posts and group chats and use them as court evidence. In Florida, social media exchanges including those from Facebook or Instagram are viewed as valid records within legal proceedings involving sexual offenses. Lock every account and make this topic off limits with everyone. A jury can interpret vague posts about stress or unfairness as consciousness of guilt.",
  },
  {
    id: "not-understanding-charge",
    icon: <FaFileSignature className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Not Understanding the Charge Properly",
    description:
      "Most defendants lack knowledge of the statute under charge or what the state must prove. Without it you can not evaluate options or judge whether any plea offer is reasonable for your situation. Criminal defense lawyer explains every charge in plain terms before any strategic decision is made.",
  },
  {
    id: "tampering-digital-evidence",
    icon: <FaExclamationTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Tampering or Deleting Digital Evidence",
    description:
      "Deleting texts or resetting your phone after an accusation is obstruction of justice in Florida. Prosecutors often recover deleted data and deletion itself becomes evidence of guilt at trial. Preserve everything and allow the defense lawyer to determine the legally protected information from disclosure. Deletion often causes more damage than leaving the underlying content.",
  },
  {
    id: "withholding-information",
    icon: <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Withholding Information from Your Defense Team",
    description:
      "Failure to include details even embarrassing ones can leaves your defense team uninformed at trial. A fact you consider unimportant may be core theory to prosecution's case. Full and honest disclosure to defense team is the single most important step in building defense startegy.",
  },
  {
    id: "hiring-general-practitioner",
    icon: <FaUserMd className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Hiring a General Practitioner Instead of a Specialist",
    description:
      "General criminal defense attorneys lack the specialized depth Florida sex crime cases require. Hillsborough County sex crime prosecutors work these cases full time and exploit knowledge gaps aggressively. Sex crime defense lawyer in tampa treats this specific crime as a primary area to defend. This specialization produces measurable differences in available options to Tampa defendants.",
  },
];

export default function SCCommonMistakesSection({
  title = "Common Mistakes That Risk Your Sex Crime Case Before You Hire a Tampa Defense Lawyer",
  subTitle = "Most of the damage to cases happens in first 72 hours before hiring sex crime defense lawyer tampa. People make their worst decisions during that window and impact negatively  every stage of prosecution.",
  items = defaultMistakeItems,
}: SCCommonMistakesSectionProps) {
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
