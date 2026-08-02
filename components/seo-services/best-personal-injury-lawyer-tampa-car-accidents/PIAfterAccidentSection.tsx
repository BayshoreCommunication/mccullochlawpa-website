"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaHospital,
  FaFileAlt,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

export interface AfterAccidentItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PIAfterAccidentSectionProps {
  title?: string;
  subTitle?: string;
  items?: AfterAccidentItem[];
}

const defaultAfterAccidentItems: AfterAccidentItem[] = [
  {
    number: "01",
    id: "call-911",
    icon: <FaPhoneAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Get Safe and Call 911",
    description:
      "Move your damaged vehicle out of moving traffic whenever you can do so safely. Call emergency 911 operators immediately even for relatively minor vehicular collisions. This is important because Florida requires a report for injuries. Officers who respond create the crash report insurers will reference throughout your claim.",
  },
  {
    number: "02",
    id: "medical-14-days",
    icon: <FaHospital className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Seek Medical Care Within 14 Days",
    description:
      "Florida's PIP law requires treatment within fourteen days, or your benefits disappear. A doctor must classify your injury as an emergency medical condition for full benefits. Without that emergency classification, your medical payout caps at just twenty-five hundred dollars.",
  },
  {
    number: "03",
    id: "police-document-scene",
    icon: <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Let the Police Document the Scene",
    description:
      "A responding officer's report becomes the backbone of your entire injury claim. Give the officer your account, but avoid guessing about speed or distance. You can request your crash report online through Florida's official crash portal.",
  },
  {
    number: "04",
    id: "report-own-insurer",
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Report the Crash to Your Own Insurer",
    description:
      "Florida requires prompt notice to your own carrier to preserve PIP benefits. This call is about triggering coverage, not describing fault or accepting blame. Keep the conversation short, and let your lawyer handle everything that follows.",
  },
  {
    number: "05",
    id: "talk-to-lawyer-first",
    icon: <FaUserShield className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Talk to a Lawyer Before You Talk to Theirs",
    description:
      "The at-fault driver's insurer usually calls fast, often within twenty-four hours of impact. That call isn't friendly, even when the adjuster sounds warm and sympathetic. Personal injury attorney takes those calls for you, starting the day you sign on.",
  },
];

export default function PIAfterAccidentSection({
  title = "What Happens After a Car Accident in Tampa",
  subTitle = "The first fourteen days after a Tampa crash decide a lot about your claim. Acting with purpose and hiring a personal injury lawyer in tampa for car accidents protects your rights and evidence from the start.",
  items = defaultAfterAccidentItems,
}: PIAfterAccidentSectionProps) {
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

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
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

                  <div className="flex flex-col pt-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Step {item.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
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
