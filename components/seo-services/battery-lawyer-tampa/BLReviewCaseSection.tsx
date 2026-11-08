"use client";

import React from "react";
import {
  FaFileAlt,
  FaClock,
  FaSearch,
  FaGavel,
  FaShieldAlt,
  FaBalanceScale,
  FaUserCheck,
  FaHandshake,
  FaTasks,
} from "react-icons/fa";

export interface ReviewStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BLReviewCaseSectionProps {
  title?: string;
  subTitle?: string;
  steps?: ReviewStep[];
}

const defaultSteps: ReviewStep[] = [
  {
    id: "examine-charging-decision",
    stepNumber: "01",
    title: "Examine the Charging Decision",
    description:
      "We review the charging document, police reports and statutory elements. This step identifies the exact offense, potential enhancements and the evidence supporting the prosecutor's position. We also review prior qualifying convictions when the state alleges felony battery based on criminal history.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "secure-time-sensitive-evidence",
    stepNumber: "02",
    title: "Secure Time Sensitive Evidence",
    description:
      "We identify recordings and records requiring prompt preservation. Evidence may include surveillance footage, Ring camera recordings, 911 call audio, medical records, police photographs and witness contact details. Some sources retain information for only a limited period. We assess the appropriate lawful method for obtaining each record.",
    icon: <FaClock className="w-5 h-5 text-primary" />,
  },
  {
    id: "dissect-stops-warrants",
    stepNumber: "03",
    title: "Dissect Stops and Warrants",
    description:
      "We examine police contact, searches, warrants, interviews and the collection of physical or digital evidence. Constitutional violations may support a motion to suppress evidence. A procedural issue does not automatically dismiss the case. The legal effect depends on the violation, the evidence involved and the court's ruling.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "file-pretrial-motions",
    stepNumber: "04",
    title: "File Pretrial Motions",
    description:
      "Depending on the facts, we may challenge the admissibility of evidence, seek clarification of the charges or address other procedural and legal issues before trial. We select motions based on the facts and applicable rules rather than filing requests without a legal basis.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "evaluate-stand-your-ground",
    stepNumber: "05",
    title: 'Evaluate Florida\'s "Stand Your Ground"',
    description:
      'When the evidence supports self defense, we assess the requirements for defensive force and any possible immunity under Florida law. We review the actions of each person, the timing, witness accounts, recordings and other relevant evidence. The circumstances determine whether the statute applies.',
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "cross-examine-proof",
    stepNumber: "06",
    title: "Cross Examine State's Proof",
    description:
      "We compare witness statements, police affidavits, recordings and the timeline of events. Inconsistencies about the location, physical contact, sequence of actions or alleged injury may affect the state's case. We also examine potential motives for a false or inaccurate account, including documented disputes involving money, custody or retaliation. We base challenges on evidence rather than unsupported assumptions.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "take-sworn-depositions",
    stepNumber: "07",
    title: "Take Sworn Depositions",
    description:
      "When the rules permit and the case requires them, we conduct depositions to examine witness accounts under oath. Testimony may clarify the timeline, identify contradictions or reveal information requiring further investigation. We use the testimony to prepare for negotiations, motions and trial.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "negotiate-reductions",
    stepNumber: "08",
    title: "Negotiate Reductions",
    description:
      "We assess possible resolutions based on the evidence, charge classification, prior record and legal issues. Negotiations may address a reduced charge or another lawful resolution. We explain the potential consequences and risks before you decide whether to accept a proposal.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "prepare-for-trial",
    stepNumber: "09",
    title: "Prepare for Trial",
    description:
      "When a case proceeds to trial, we prepare the defense through evidence review, witness preparation, legal motions and trial planning. We challenge the state's evidence and require the prosecutor to prove every element beyond a reasonable doubt. We explain the process and discuss major decisions throughout the case.",
    icon: <FaTasks className="w-5 h-5 text-primary" />,
  },
];

export default function BLReviewCaseSection({
  title = "How We Review a Battery Case Within Tampa Jurisdiction?",
  subTitle = "Our battery lawyer Tampa reviews the charge, available evidence and procedural history before recommending a course of action.",
  steps = defaultSteps,
}: BLReviewCaseSectionProps) {
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

        {/* 9 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl"
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

