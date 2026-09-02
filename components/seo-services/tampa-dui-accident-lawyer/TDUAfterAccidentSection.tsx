"use client";

import React from "react";
import {
  FaBalanceScale,
  FaVial,
  FaBuilding,
  FaGavel,
  FaCar,
  FaIdCard,
  FaShieldVirus,
} from "react-icons/fa";

export interface AfterAccidentItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TDUAfterAccidentSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
  items?: AfterAccidentItem[];
}

const defaultItems: AfterAccidentItem[] = [
  {
    id: "field-sobriety-tests",
    icon: <FaBalanceScale className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Field Sobriety Tests at Accident Scene",
    description:
      "Officers ask you to perform physical balance exercises to gather arrest evidence against you. Roadside shock, physical injuries and uneven pavement often impair balance, confusing officer observations. Your attorney will challenge these test scores by demonstrating how officers gave unclear instructions or misjudged conditions.",
  },
  {
    id: "breathalyzer-blood-testing",
    icon: <FaVial className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Breathalyzer and Blood Alcohol Testing",
    description:
      "Florida requires breath or blood testing following a DUI accident arrest. A result of 0.08 or higher supports the core criminal charge. Florida administrative rules mandate strict machine maintenance and twenty minute continuous driver observation periods. Exposing machine calibration flaws and testing protocol errors block this evidence in court.",
  },
  {
    id: "booking-orient-road-jail",
    icon: <FaBuilding className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Booking Process at Orient Road Jail",
    description:
      "After an arrest, officers take you to the Orient Road Jail for processing. Florida Statute § 316.193 requires holding you in custody for eight hours after arrest or until your blood alcohol level drops below 0.05 percent. You need to act quickly to protect your rights and secure your immediate release from custody.",
  },
  {
    id: "bond-hearing-release-conditions",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Bond Hearing and Release Conditions",
    description:
      "A Hillsborough County judge evaluates flight risk and criminal records during your initial bond hearing. Court conditions following crash arrests often include continuous alcohol monitoring or driving bans. Petitioning local judges for fair release terms is good option so you can return home without harsh restrictions.",
  },
  {
    id: "vehicle-impoundment",
    icon: <FaCar className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Vehicle Impoundment After a DUI Accident",
    description:
      "Florida statutes require minimum ten day vehicle impoundment following a drunk driving conviction. Crash scene towing creates expensive daily storage fees on top of law enforcement holds. Filing hardship motions can allow your family members to regain access to your personal automobile quickly.",
  },
  {
    id: "notification-florida-dhsmv",
    icon: <FaIdCard className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Notification to Florida DHSMV",
    description:
      "Arresting officers send formal suspension notices directly to the state driver licensing agency upon arrest. Your traffic ticket acts as a temporary driving permit for only ten calendar days. You need to file immediate hearing requests before this strict ten day deadline expires to keep you driving.",
  },
];

export default function TDUAfterAccidentSection({
  title = "What Happens After a DUI Accident Arrest in Tampa",
  subTitle = "An arrest starts a process most drivers never expect to face. Each step along the way creates evidence the state will use later.",
  description = "",
  items = defaultItems,
}: TDUAfterAccidentSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-12 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
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
