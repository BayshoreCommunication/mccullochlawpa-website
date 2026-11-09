"use client";

import React from "react";
import {
  FaFileAlt,
  FaSearch,
  FaHandshake,
  FaGavel,
  FaComments,
  FaFileContract,
  FaBalanceScale,
} from "react-icons/fa";

export interface HowWeHandleStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDHowWeHandleSectionProps {
  title?: string;
  subTitle?: string;
  steps?: HowWeHandleStep[];
}

const defaultSteps: HowWeHandleStep[] = [
  {
    id: "reviewing-allegations-circumstances",
    stepNumber: "01",
    title: "Reviewing the Allegations and the Child's Circumstances",
    description:
      "Attorneys review all allegations and family circumstances. Thorough reviews establish a solid strategic direction early. We consider the academic history and mental health factors. This context helps negotiate better outcomes with prosecutors.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "examining-evidence-legal-issues",
    stepNumber: "02",
    title: "Examining Evidence and Identifying Legal Issues",
    description:
      "A close look at reports uncovers hidden legal flaws. Evidence examination protects child rights from state overreach. We locate missing witnesses the police completely ignored. Forensic experts review questionable physical evidence when necessary.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "evaluating-diversion-case-options",
    stepNumber: "03",
    title: "Evaluating Diversion and Other Available Case Options",
    description:
      "Diversion programs offer alternative case resolutions for minors. Qualified counsel identifies appropriate options early on. Teen court provides a peer driven consequence system. These alternatives prevent the stigma of a permanent record.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "preparing-hearings-challenging-evidence",
    stepNumber: "04",
    title: "Preparing for Hearings and Challenging the Evidence",
    description:
      "Rigorous hearing preparation challenges weak prosecution evidence. Attorneys protect clients during every single court proceeding. We file motions to suppress illegally obtained evidence. Cross examination dismantles unreliable police narratives effectively.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "keeping-parents-informed",
    stepNumber: "05",
    title: "Keeping Parents Informed Throughout the Proceedings",
    description:
      "Clear communication keeps families fully informed always. Regular updates reduce parental anxiety during stressful times. We explain complex legal procedures in plain English. You will always know the exact case status.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "record-sealing-expunction-questions",
    stepNumber: "06",
    title: "Addressing Record Sealing and Expunction Questions",
    description:
      "Florida law governs strict record sealing rules. Expunction eligibility depends on specific case outcomes. A dismissed case often qualifies for immediate expunction. We guide families through this complex paperwork process.",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
  },
];

export default function JDHowWeHandleSection({
  title = "How Our Tampa Juvenile Defense Lawyer Handles Your Case",
  subTitle = "A methodical approach builds the strongest possible defense. We analyze every detail of the incident thoroughly. McCulloch Law also represents adults facing criminal charges, with legal defense options available for a range of offenses.",
  steps = defaultSteps,
}: JDHowWeHandleSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 6 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase py-1 px-2.5 rounded-md bg-primary/10 border border-primary/30">
                    Step {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

