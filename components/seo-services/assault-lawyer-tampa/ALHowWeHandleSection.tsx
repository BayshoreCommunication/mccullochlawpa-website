"use client";

import React from "react";
import {
  FaComments,
  FaFileAlt,
  FaSearch,
  FaShieldAlt,
  FaGavel,
  FaBalanceScale,
} from "react-icons/fa";

export interface HandleStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ALHowWeHandleSectionProps {
  title?: string;
  subTitle?: string;
  steps?: HandleStep[];
}

const defaultSteps: HandleStep[] = [
  {
    id: "consultation-case-review",
    stepNumber: "01",
    title: "Initial Consultation and Case Review",
    description:
      "We discuss the incident, your concerns, the current status of the case and upcoming court dates. Bring your available documents and a timeline of events. Our criminal defense lawyer can explain the main legal issues and identify information requiring further review.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "review-charge-evidence",
    stepNumber: "02",
    title: "Review of the Charge and Evidence",
    description:
      "We examine the charging documents, police reports, witness accounts, messages, photographs and recordings available to the defense. Our review considers the required elements of simple or aggravated assault and the strength of the evidence supporting each allegation. But when an assault allegation involves a sex crime, we also review forensic medical records, relationship context and prior statements to identify contradictions, bias or false accusations.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "independent-investigation",
    stepNumber: "03",
    title: "Independent Investigation",
    description:
      "Where appropriate, we identify additional witnesses, seek relevant recordings through lawful channels and examine inconsistencies in the available evidence. We also consider physical surroundings, timing and other facts potentially relevant to the alleged threat.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "defense-preparation",
    stepNumber: "04",
    title: "Defense Preparation",
    description:
      "We assess possible defenses, legal motions and issues involving the collection or reliability of evidence. We explain the strengths and limits of each available argument before discussing the next steps. When a minor faces an assault allegation, juvenile court procedures and potential consequences may differ from adult criminal proceedings. Our juvenile defense addresses the legal requirements and options available in qualifying cases.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "court-representation",
    stepNumber: "05",
    title: "Court Representation and Case Resolution",
    description:
      "We represent clients during applicable court proceedings, communicate with the prosecution and assess possible plea agreements when appropriate. We also prepare for trial when the case requires one. Throughout the matter, we explain developments and discuss major decisions with you. We do not promise a dismissal or a particular result.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
];

export default function ALHowWeHandleSection({
  title = "How Our Tampa Assault Lawyer Handles Your Case",
  subTitle = "Our assault lawyer Tampa reviews the facts and legal issues before recommending a defense strategy. Each case requires an individual assessment. An approach suitable for one allegation may not fit another.",
  steps = defaultSteps,
}: ALHowWeHandleSectionProps) {
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

        {/* 5 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-primary/40 group-hover:text-primary transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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

