"use client";

import React from "react";
import {
  FaLock,
  FaBalanceScale,
  FaFileAlt,
  FaSearch,
  FaHandshake,
  FaGavel,
} from "react-icons/fa";

export interface ArrestStep {
  id: string;
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ALArrestSectionProps {
  title?: string;
  subTitle?: string;
  steps?: ArrestStep[];
}

const defaultSteps: ArrestStep[] = [
  {
    id: "arrest-booking",
    stepNumber: "Step 01",
    icon: <FaLock className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "1. Arrest and Booking",
    description:
      "Police may arrest a person following an alleged assault. During booking, officers generally record identifying information and process the arrest under applicable procedures. Avoid discussing the incident with other people in custody or posting about it online. Ask for legal counsel before answering questions about the allegations.",
  },
  {
    id: "first-appearance",
    stepNumber: "Step 02",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "2. First Appearance and Release Conditions",
    description:
      "Florida's criminal procedure rules generally require a prompt first appearance for a person in custody, usually within 24 hours of arrest unless the person has already received lawful release. A judge may consider release conditions, bond and restrictions on contact with other people involved. Follow every court order and release condition.",
  },
  {
    id: "charging-arraignment",
    stepNumber: "Step 03",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "3. Charging Decisions and Arraignment",
    description:
      "The Hillsborough County State Attorney's Office handles criminal prosecutions in the 13th Judicial Circuit. Prosecutors review the available evidence and decide how to proceed under applicable law. The prosecutor may file charges, pursue a different charge or decline prosecution when the evidence or law does not support the case. At arraignment, the court addresses the formal charge and the defendant's plea.",
  },
  {
    id: "evidence-discovery",
    stepNumber: "Step 04",
    icon: <FaSearch className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "4. Evidence Review and Discovery",
    description:
      "The defense reviews evidence available through the legal discovery process. Records may include police reports, witness statements, body camera footage, photographs and relevant communications. We compare the evidence with the state's burden of proof and identify areas requiring further investigation.",
  },
  {
    id: "pretrial-motions",
    stepNumber: "Step 05",
    icon: <FaHandshake className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "5. Pretrial Motions and Negotiations",
    description:
      "Depending on the case, your attorney may file motions, challenge specific evidence, discuss possible resolutions with the prosecutor or prepare for trial. The facts and legal issues guide these decisions. The state may offer a plea agreement, but you should understand the consequences before accepting any proposal.",
  },
  {
    id: "trial-resolution",
    stepNumber: "Step 06",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "6. Trial or Final Resolution",
    description:
      "Some cases resolve before trial. Others proceed to trial, where the state must prove the charge beyond a reasonable doubt. We prepare for the available paths and explain the legal and practical consequences of each option. The court determines the outcome under applicable law.",
  },
];

export default function ALArrestSection({
  title = "What Happens After an Assault Arrest in Tampa?",
  subTitle = "An assault arrest can lead to several court proceedings. The path depends on the charge, the circumstances of the arrest, the release conditions and the decisions of the prosecutor and court.",
  steps = defaultSteps,
}: ALArrestSectionProps) {
  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
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

        {/* 6 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.id}
              className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-inner">
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {s.stepNumber}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors mb-3 leading-snug">
                  {s.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

