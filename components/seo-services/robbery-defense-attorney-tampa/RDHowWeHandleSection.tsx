"use client";

import React from "react";
import {
  FaFileAlt,
  FaHandshake,
  FaStamp,
  FaSearch,
  FaUserCheck,
  FaGavel,
  FaBalanceScale,
  FaShieldAlt,
} from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";

export interface HowWeHandleStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RDHowWeHandleSectionProps {
  title?: string;
  subTitle?: string;
  steps?: HowWeHandleStep[];
}

const defaultSteps: HowWeHandleStep[] = [
  {
    id: "step-1-review-arrest-report",
    stepNumber: "01",
    title: "Step 1. Review the Police’s Arrest Report & Case Evidence",
    description:
      "We start with the arrest report. An initial officer narrative may contain errors, incomplete observations or assumptions based on information from another witness. We compare the original reports with body camera recordings, 911 calls, photographs, surveillance footage and later statements. We also examine identification procedures. A photo lineup, show up identification or witness description may contain reliability problems. We review the procedure, the initial description, viewing conditions and any inconsistencies in the identification.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-2-present-exculpatory-evidence",
    stepNumber: "02",
    title: "Step 2. Present Exculpatory Evidence",
    description:
      "We identify evidence capable of contradicting the prosecution's allegations or providing an alternative explanation for the incident. We organize relevant records and present appropriate material through legal channels. The goal is to give prosecutors a factual basis to reconsider unsupported allegations or charging decisions.",
    icon: <FaFileCircleCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-3-negotiate-lesser-offenses",
    stepNumber: "03",
    title: "Step 3. Negotiate Lesser Offenses",
    description:
      "Robbery allegations may not align with police reports. We assess if the prosecution can establish force, fear, intent, participation and property taking. Based on evidence, we may seek a reduction to theft or a lesser robbery charge. For example simple assault or battery, but not all counts merge into a robbery conviction. If a lesser offense merges under double jeopardy rules, separate punishment cannot be imposed. We analyze these factors",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-4-file-notice-of-appearance",
    stepNumber: "04",
    title: "Step 4. File Notice of Appearance",
    description:
      "We file a notice of appearance with the appropriate court after accepting representation. The filing identifies McCulloch Law as your defense counsel and directs case related communications through the attorney. We monitor the court docket, review pending deadlines and address procedural requirements. You also receive legal guidance about hearings, filings and communication during the case.",
    icon: <FaStamp className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-5-demand-for-discovery",
    stepNumber: "05",
    title: "Step 5. Demand for Discovery",
    description:
      "We pursue discovery under Florida Rule of Criminal Procedure 3.220. Our review may include complete available supplemental reports. Body camera and dash camera recordings. Witness statements and identification records. We compare the disclosed material with the arrest narrative and witness accounts.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-6-conduct-depositions",
    stepNumber: "06",
    title: "Step 6. Conduct Depositions",
    description:
      "We use depositions when the rules allow them and the case strategy supports them. A deposition gives the defense an opportunity to question a witness under oath. We examine the witness's observations, memory, identification, prior statements, relationships and potential bias. The testimony can expose contradictions between an initial police statement and a later account. It may also reveal gaps in an officer's investigation or uncertainty about the alleged weapon, property or sequence of events. We preserve useful testimony for trial preparation and future cross examination.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-7-file-pre-trial-motions",
    stepNumber: "07",
    title: "Step 7. File Pre Trial Motions",
    description:
      "We file pretrial motions when the evidence or procedure provides a valid legal basis. We challenge evidence from unlawful searches, seizures or other constitutional violations. We challenge an identification procedure when police conduct creates an impermissibly suggestive or unreliable identification. We seek dismissal when applicable legal grounds support the request, including qualifying cases involving undisputed facts insufficient to establish a prima facie case. A judge may hold a hearing and examine the evidence, legal arguments and applicable standards.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-8-negotiate-amicable-plea",
    stepNumber: "08",
    title: "Step 8. Negotiate an Amicable Plea",
    description:
      "A negotiated plea may offer an alternative to trial when the evidence, legal exposure and client's objectives support a resolution. We discuss the proposed charge, sentencing range, probation terms, financial obligations, restitution and potential collateral consequences. We also examine immigration concerns, firearm restrictions and record eligibility. You make the final decision about accepting or rejecting a plea.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-9-prepare-for-trial",
    stepNumber: "09",
    title: "Step 9. Prepare for trial",
    description:
      "If the parties cannot reach an acceptable resolution, we prepare to challenge the allegations to a judge or jury. Trial preparation may include witness interviews, deposition review, expert consultation, exhibit preparation, jury instructions and a detailed cross examination plan. We examine the prosecution's evidence and identify the elements the State must prove beyond a reasonable doubt. Our trial strategy may challenge eyewitness identification, physical evidence, weapon allegations, intent, participation or the claimed use of force.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
];

export default function RDHowWeHandleSection({
  title = "How Our Robbery Defense Attorney Tampa Handles Your Case",
  subTitle = "Our robbery defense attorney tampa reviewed the circumstances, examined the prosecution's evidence and developed a defense strategy around your specific case.",
  steps = defaultSteps,
}: RDHowWeHandleSectionProps) {
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

        {/* 9 STEPS GRID */}
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
