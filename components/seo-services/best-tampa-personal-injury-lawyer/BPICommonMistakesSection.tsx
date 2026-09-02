"use client";

import React from "react";
import {
  FaUserClock,
  FaShareAlt,
  FaMicrophoneSlash,
  FaFileSignature,
  FaCarCrash,
  FaHandshake,
  FaHourglassEnd,
  FaCalendarTimes,
  FaPhoneSlash,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface MistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPICommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: MistakeItem[];
}

const defaultItems: MistakeItem[] = [
  {
    id: "waiting-too-long-doctor",
    title: "Waiting Too Long to See Doctor",
    description:
      "Delaying medical evaluation creates gaps in care that insurance adjusters use against claims. Adjusters argue that delayed treatment proves your physical injuries were not caused by crashes. Seeing a doctor immediately protects your physical recovery and creates clear medical documentation. Prompt medical care ensures your injury claim remains protected under Florida insurance laws.",
    icon: <FaUserClock className="w-5 h-5 text-red-500" />,
  },
  {
    id: "social-media-post-accident",
    title: "Social Media Post About Accident",
    description:
      "Insurance investigators routinely monitor public social media accounts for comments or accident photos. Innocent photos showing social activity get twisted by adjusters to disprove physical injury severity. Avoid sharing crash details, photos or physical status updates online during active cases. Keeping quiet online prevents defense attorneys from using your posts against your claim.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "recorded-statement-without-lawyer",
    title: "Recorded Statement Without a Lawyer",
    description:
      "Adjusters record conversations to extract statements that weaken liability arguments or minimize injury severity. Simple courtesy responses like saying you feel okay can hurt your injury case later. Direct all insurance adjuster calls to your attorney before giving any recorded statements. We protect your legal rights by managing all conversations with insurance representatives directly.",
    icon: <FaMicrophoneSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "signing-broad-medical-authorization",
    title: "Signing Broad Medical Authorization",
    description:
      "Insurance companies ask crash victims to sign broad medical releases to inspect health histories. Adjusters search past medical records for preexisting conditions to deny current injury claims. Never sign medical release forms without letting your attorney review it. We limit medical records access to treatment directly related to your crash injuries.",
    icon: <FaFileSignature className="w-5 h-5 text-red-500" />,
  },
  {
    id: "ignoring-property-damage-evidence",
    title: "Ignoring Property Damage Evidence",
    description:
      "Discarding damaged auto parts or repairing vehicles before capturing photos loses valuable physical evidence. Physical vehicle damage shows collision impact severity, direction of force and speed of vehicles. Store damaged safety gear, broken phone screens and torn clothing safely after crashes. Retaining physical evidence strengthens your attorney's ability to prove physical injury severity.",
    icon: <FaCarCrash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "accepting-first-settlement-offer",
    title: "Accepting the First Settlement Offer",
    description:
      "Initial settlement offers made by insurance carriers rarely cover long term medical care expenses. Adjusters make fast cash offers hoping injured victims sign releases before realizing true costs. Once you accept an offer, you lose all rights to seek additional compensation later. Let our attorneys review initial settlement proposals to protect your financial long term future.",
    icon: <FaHandshake className="w-5 h-5 text-red-500" />,
  },
  {
    id: "missing-florida-filing-deadline",
    title: "Missing Florida's Filing Deadline",
    description:
      "Failing to file your injury lawsuit within the two year window under Florida Statute § 95.11 terminates your legal rights completely. Statute of limitations rules leave zero room for late filings in Florida civil courts. Contacting best tampa personal injury lawyer immediately ensures essential paperwork gets prepared and filed on time. Early legal action keeps your lawsuit valid and forces insurers to negotiate fairly.",
    icon: <FaHourglassEnd className="w-5 h-5 text-red-500" />,
  },
  {
    id: "missed-doctor-treatment",
    title: "Missed Doctor’s Recommended Treatment",
    description:
      "Not attending physical therapy or not taking prescribed medications can negatively affect healing process. Insurance adjusters review medical logs and claim skipped appointments show complete injury recovery. Following all physician treatment plans proves you take your health and claim seriously. Consistent medical treatment creates clear records that support full economic damages in court.",
    icon: <FaCalendarTimes className="w-5 h-5 text-red-500" />,
  },
  {
    id: "talking-other-driver-insurer",
    title: "Talking to Other Driver's Insurer",
    description:
      "The at-fault driver's insurance adjuster seeks information to shift blame onto your driving actions. Answering their questions directly exposes your claim to tricky inquiries designed to reduce payouts. Politely tell adjusters that your attorney manages all legal communications for your case. Direct communication through legal counsel prevents insurers from misinterpreting your statement details.",
    icon: <FaPhoneSlash className="w-5 h-5 text-red-500" />,
  },
];

export default function BPICommonMistakesSection({
  title = "Common Mistakes That Can Hurt a Tampa Personal Injury Claim",
  subTitle = "Tampa injury victims often lose thousands of dollars over small, avoidable mistakes. Insurance adjusters watch for these errors and use them against your claim.",
  items = defaultItems,
}: BPICommonMistakesSectionProps) {
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
