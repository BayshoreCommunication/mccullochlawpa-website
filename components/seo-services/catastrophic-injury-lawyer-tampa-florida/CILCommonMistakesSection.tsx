"use client";

import React from "react";
import {
  FaHandshake,
  FaMicrophoneSlash,
  FaCalendarTimes,
  FaShareAlt,
  FaUserClock,
  FaNotesMedical,
  FaFileSignature,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface MistakeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILCommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: MistakeItem[];
}

const defaultItems: MistakeItem[] = [
  {
    id: "accepting-first-settlement-offer",
    title: "Accepting First Settlement Offer",
    description:
      "Early settlement offers from insurance adjusters fail to account for lifetime catastrophic care needs. Insurers push fast settlements before complete medical diagnoses and life care plans are finished. Accepting initial cash offers forever waives rights to seek compensation for future medical complications.",
    icon: <FaHandshake className="w-5 h-5 text-red-500" />,
  },
  {
    id: "giving-recorded-statement",
    title: "Giving Recorded Statement to Insurers",
    description:
      "Adjusters conduct recorded interviews designed to extract statements that weaken victim liability claims. Casual comments regarding vehicle speed or physical recovery are weaponized during settlement negotiations. Injured parties should direct insurance adjusters to legal counsel rather than giving recorded statements.",
    icon: <FaMicrophoneSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "missing-medical-appointments",
    title: "Missing Medical Appointments",
    description:
      "Inconsistent medical treatment history enables adjusters to claim injuries are minor or resolved. Defense attorneys argue missed doctor visits prove non-compliance or absence of genuine physical suffering. Attending all recommended medical appointments creates uninterrupted records supporting high claim valuations.",
    icon: <FaCalendarTimes className="w-5 h-5 text-red-500" />,
  },
  {
    id: "posting-social-media",
    title: "Posting on Social Media",
    description:
      "Defense investigators actively monitor social media channels for photos, comments and location check-ins. Innocent photographs displaying social gatherings are introduced in court to refute physical disability claims. Injured victims must refrain from social media activity while personal injury claims remain active.",
    icon: <FaShareAlt className="w-5 h-5 text-red-500" />,
  },
  {
    id: "waiting-too-long-hire-lawyer",
    title: "Waiting Too Long to Hire Lawyer",
    description:
      "Delaying legal retention permits critical accident scene physical evidence to disappear over time. Commercial surveillance video footage is regularly overwritten within days unless formally preserved by attorneys. Early legal retention secures vital evidence and ensures compliance with compressed filing deadlines.",
    icon: <FaUserClock className="w-5 h-5 text-red-500" />,
  },
  {
    id: "ignoring-ongoing-symptoms",
    title: "Ignoring Ongoing Symptoms",
    description:
      "Failing to log daily pain levels and functional impairments weakens non-economic damage claims. Detailed personal pain diaries record daily physical struggles for presentation to jury members. Precise personal records reinforce medical expert testimony regarding permanent physical impairment impacts.",
    icon: <FaNotesMedical className="w-5 h-5 text-red-500" />,
  },
  {
    id: "signing-medical-forms-unreviewed",
    title: "Signing Medical Forms UnReviewed",
    description:
      "Unrestricted medical releases allow insurers to gather confidential medical records dating back decades. Insurers analyze prior medical histories to attribute current catastrophic harm to pre-existing conditions. Experienced attorneys must review and restrict medical authorizations before releasing confidential patient records.",
    icon: <FaFileSignature className="w-5 h-5 text-red-500" />,
  },
];

export default function CILCommonMistakesSection({
  title = "Common Mistakes That Risk Your Catastrophic Injury Settlement Before You Hire Tampa Injury Lawyer",
  subTitle = "Small mistakes made early in the process can lead to people losing hundreds of thousands of dollars in compensation. These are the most common errors we see in Tampa.",
  items = defaultItems,
}: CILCommonMistakesSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
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
