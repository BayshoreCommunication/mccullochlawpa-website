"use client";

import React from "react";
import {
  FaLock,
  FaUserSlash,
  FaBalanceScale,
  FaKey,
  FaFileAlt,
  FaSearch,
  FaGavel,
} from "react-icons/fa";

export interface ArrestStep {
  id: string;
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface BLArrestSectionProps {
  title?: string;
  subTitle?: string;
  steps?: ArrestStep[];
}

const defaultSteps: ArrestStep[] = [
  {
    id: "booking-jail-processing",
    stepNumber: "Step 01",
    icon: <FaLock className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Booking and Jail Processing",
    description:
      "Police may take a person into custody after an alleged battery. During booking, officers generally collect identifying information, process the arrest and record the charge. Avoid discussing the incident publicly or making detailed statements about the allegations without legal advice. Keep any paperwork officers provide and note upcoming court dates.",
  },
  {
    id: "no-contact-orders",
    stepNumber: "Step 02",
    icon: <FaUserSlash className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "No Contact Orders",
    description:
      "A judge may impose no contact restrictions as a release condition or through a separate court order. The restrictions may prohibit calls, texts, visits or indirect communication. Read the order carefully. Do not assume the alleged victim can cancel a court restriction by agreeing to resume contact. Ask an attorney about the permitted conduct and the procedure for seeking a change.",
  },
  {
    id: "first-appearance-hearing",
    stepNumber: "Step 03",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "First Appearance Hearing (Within 24 Hours)",
    description:
      "Florida Rule of Criminal Procedure 3.130 generally requires a prompt first appearance within 24 hours of arrest unless the person already received lawful release. At the hearing, the judge advises the defendant of the charge and legal rights. The court may also address probable cause, bond, release conditions and restrictions on contact.",
  },
  {
    id: "probable-cause-bond-release",
    stepNumber: "Step 04",
    icon: <FaKey className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Probable Cause Review, Bond and Release",
    description:
      "The court examines the legal basis for continued detention and considers release under applicable law. Bond decisions may depend on the charge, criminal history, prior court compliance and other lawful factors. Follow every release condition. A new violation can create additional legal problems or affect your release status.",
  },
  {
    id: "arraignment-entry-plea",
    stepNumber: "Step 05",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Arraignment and Entry of a Plea",
    description:
      "At arraignment, the court addresses the formal charge and the defendant's plea. The timing varies by case and court schedule. An attorney can review the charging documents and discuss the legal consequences of each available plea before you make a decision.",
  },
  {
    id: "discovery-pretrial-proceedings",
    stepNumber: "Step 06",
    icon: <FaSearch className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Discovery and Pretrial Proceedings",
    description:
      "The defense receives evidence through the applicable discovery process. Materials may include police reports, witness statements, photographs, recordings and relevant medical or digital records. Defense attorneys may file pretrial motions, challenge evidence, conduct permitted depositions, negotiate with the prosecutor or prepare for trial.",
  },
  {
    id: "trial-final-resolution",
    stepNumber: "Step 07",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Trial or Final Resolution",
    description:
      "Some cases resolve through dismissal, a negotiated plea or another lawful outcome. Other cases proceed to trial, where the state must prove the charge beyond a reasonable doubt.",
  },
];

export default function BLArrestSection({
  title = "What Happens After Battery Arrest in Tampa?",
  subTitle = "A battery arrest can lead to booking, a first appearance, formal charges and further court proceedings. The exact process depends on the alleged offense, the circumstances of the arrest and the court's decisions.",
  steps = defaultSteps,
}: BLArrestSectionProps) {
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

        {/* 7 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              className={`bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
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

