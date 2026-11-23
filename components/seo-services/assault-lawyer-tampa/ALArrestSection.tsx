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
    stepNumber: "01",
    icon: <FaLock className="w-5 h-5 text-primary" />,
    title: "1. Arrest and Booking",
    description:
      "Police may arrest a person following an alleged assault. During booking, officers generally record identifying information and process the arrest under applicable procedures. Avoid discussing the incident with other people in custody or posting about it online. Ask for legal counsel before answering questions about the allegations.",
  },
  {
    id: "first-appearance",
    stepNumber: "02",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    title: "2. First Appearance and Release Conditions",
    description:
      "Florida's criminal procedure rules generally require a prompt first appearance for a person in custody, usually within 24 hours of arrest unless the person has already received lawful release. A judge may consider release conditions, bond and restrictions on contact with other people involved. Follow every court order and release condition.",
  },
  {
    id: "charging-decisions",
    stepNumber: "03",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
    title: "3. Charging Decisions and Arraignment",
    description:
      "The Hillsborough County State Attorney's Office handles criminal prosecutions in the 13th Judicial Circuit. Prosecutors review the available evidence and decide how to proceed under applicable law. The prosecutor may file charges, pursue a different charge or decline prosecution when the evidence or law does not support the case. At arraignment, the court addresses the formal charge and the defendant's plea.",
  },
  {
    id: "evidence-review",
    stepNumber: "04",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
    title: "4. Evidence Review and Discovery",
    description:
      "The defense reviews evidence available through the legal discovery process. Records may include police reports, witness statements, body camera footage, photographs and relevant communications. We compare the evidence with the state's burden of proof and identify areas requiring further investigation.",
  },
  {
    id: "pretrial-motions",
    stepNumber: "05",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
    title: "5. Pretrial Motions and Negotiations",
    description:
      "Depending on the case, your attorney may file motions, challenge specific evidence, discuss possible resolutions with the prosecutor or prepare for trial. The facts and legal issues guide these decisions. The state may offer a plea agreement, but you should understand the consequences before accepting any proposal.",
  },
  {
    id: "trial-resolution",
    stepNumber: "06",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
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

        {/* TIMELINE STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#0B1B2D] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-extrabold text-primary/40 group-hover:text-primary transition-colors font-mono">
                  {step.stepNumber}
                </span>
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Court Procedural Step</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
