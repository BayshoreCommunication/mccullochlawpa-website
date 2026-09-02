"use client";

import React from "react";
import {
  FaVial,
  FaBalanceScale,
  FaFlask,
  FaShieldAlt,
  FaVideo,
  FaGavel,
} from "react-icons/fa";

export interface FightItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDUFightBackSectionProps {
  title?: string;
  subTitle?: string;
  items?: FightItem[];
}

const defaultItems: FightItem[] = [
  {
    id: "challenging-breathalyzer-calibration",
    title: "Challenging Breathalyzer Calibration",
    description:
      "Our firm audits Intoxilyzer 8000 maintenance records, inspection logs and diagnostic software histories. Identifying missing air blank checks or invalid solution tests undermines state breath results. We file formal court motions to exclude unreliable chemical test data from trial.",
    icon: <FaVial className="w-5 h-5 text-primary" />,
  },
  {
    id: "disputing-sobriety-test-errors",
    title: "Disputing Sobriety Test Errors",
    description:
      "We evaluate officer compliance with National Highway Traffic Safety Administration testing standards during roadside tests. Officers who fail to give proper instructions invalidate physical exercise performance scores. We demonstrate how dark roads, physical injuries and traffic noise caused poor results.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "reviewing-blood-draw-custody",
    title: "Reviewing Blood Draw Custody",
    description:
      "Blood samples taken at medical centers require strict handling records under Florida law. Transport gaps, improper sample refrigeration or missing lab signatures compromise blood test reliability. We challenge broken handling procedures to block flawed blood evidence from your court trial.",
    icon: <FaFlask className="w-5 h-5 text-primary" />,
  },
  {
    id: "identifying-fourth-amendment-violations",
    title: "Identifying Fourth Amendment Violations",
    description:
      "Before stopping your car, police must have probable cause or a reasonable suspicion. Your fundamental constitutional rights against unlawful traffic stops and extended roadside detentions are violated. We ask judges to dismiss your charges when police conduct illegal vehicle stops.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "examining-officer-report-bodycam",
    title: "Examining Officer's Report and Bodycam",
    description:
      "We compare written police reports directly against actual body camera audio and video recordings. Contradictions regarding your speech, physical balance and officer commands weaken state claims. Thorough cross examination exposes officer bias and incomplete investigation methods in court.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "filing-motions-to-suppress",
    title: "Filing Motions to Suppress Evidence",
    description:
      "Pretrial motions to suppress exclude unlawfully gathered statements, breath results and search evidence. Winning evidence suppression arguments leaves prosecutors without necessary proof to proceed in court. Excluding flawed evidence frequently forces state attorneys to reduce or dismiss your charges.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
];

export default function TDUFightBackSection({
  title = "How McCulloch Law Fight Back Your DUI Accident Charge",
  subTitle = "A DUI accident charge isn't automatically a conviction. Our tampa dui accident lawyer at McCulloch Law approaches with strategic defense from day one.",
  items = defaultItems,
}: TDUFightBackSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
