"use client";

import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaBalanceScale,
  FaFileAlt,
  FaGavel,
  FaShieldVirus,
} from "react-icons/fa";

export interface ArrestItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCArrestSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
  items?: ArrestItem[];
}

const defaultArrestItems: ArrestItem[] = [
  {
    id: "arrest-booking",
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Arrest and Booking",
    description:
      "After arrest you are transported to the Hillsborough County Jail for formal processing. Officers collect fingerprints, photographs and personal property. They charges enter the court record officially. Courts treat everything you say during booking as a statement against your interest.",
  },
  {
    id: "first-appearance",
    icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "First Appearance",
    description:
      "A first appearance hearing in Tampa typically occurs within 24 hours of arrest. The judge reviews probable cause and takes decision on setting bail or holding you. Having tampa sex crime defense lawyer engaged before this hearing produces measurable differences in the outcome.",
  },
  {
    id: "state-attorney-review",
    icon: <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "State Attorney Review",
    description:
      "The Hillsborough County State Attorney's Office reviews the arrest report and makes decision to file charges. They evaluate evidence's strength, alleged victim's cooperation and availability of exculpatory material. Defense attorney contacts State Attorney's Office during this window to present mitigating facts and argue against prosecution.",
  },
  {
    id: "arraignment",
    icon: <FaBalanceScale className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Arraignment",
    description:
      "At arraignment you formally enter a plea to every charge the state has filed against you. Most defendants enter not guilty plea to preserve all available defense options going forward. The arraignment sets formal discovery deadlines and scheduling order for the entire case. Defense team uses this stage to establish a clear procedural strategy and begin pressing for full discovery.",
  },
  {
    id: "pretrial-motion-sentencing",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Pre Trial Motion and Sentencing",
    description:
      "Pre trial defense motions can suppress evidence, dismiss charges or limit juries' hearings. A sex crime defense laywer tamapa routinely challenges unlawful searches, coerced statements and defective identification procedures. Successful motions can produce reductions or full dismissals before the case reaches trial.",
  },
];

export default function SCArrestSection({
  title = "What Happens When Tampa Police Make Sex Crime Arrest",
  subTitle = "The criminal process moves on a fixed timeline from the moment of arrest. Knowing each stage gives your defense the ability to act before critical options disappear entirely.",
  description = "",
  items = defaultArrestItems,
}: SCArrestSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
              {description}
            </p>
          )}

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldVirus className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

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
