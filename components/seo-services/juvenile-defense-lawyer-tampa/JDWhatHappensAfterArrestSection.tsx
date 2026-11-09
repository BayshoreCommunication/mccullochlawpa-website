"use client";

import React from "react";
import {
  FaUserShield,
  FaGavel,
  FaFileAlt,
  FaSearch,
  FaBalanceScale,
} from "react-icons/fa";

export interface JuvenileArrestStep {
  id: string;
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface JDWhatHappensAfterArrestSectionProps {
  title?: string;
  subTitle?: string;
  steps?: JuvenileArrestStep[];
}

const defaultSteps: JuvenileArrestStep[] = [
  {
    id: "initial-contact-arrest-intake",
    stepNumber: "Step 01",
    icon: <FaUserShield className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Initial Contact Arrest and Juvenile Intake",
    description:
      "When the alleged juvenile is arrested by police they are typically taken to a Juvenile Assessment Centre where staff carry out an in depth risk assessment. This is to determine whether the child should be placed into secure detention immediately. The child will receive legal representation at this stage to protect their basic constitutional rights. This ensures that the police cannot intimidate the child into saying anything that could be harmful to them.",
  },
  {
    id: "detention-decisions-initial-hearings",
    stepNumber: "Step 02",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Detention Decisions and Initial Court Hearings",
    description:
      "The conditions of bail will be looked at by the judge at the early mandatory bail hearing. Under Florida law secure detention is very strictly limited to 21 days. This means defence counsel must act quickly. The Judge will make a decision on whether the child can be released back home. A lawyer argues for release to the parents instead of state custody. We present evidence showing the child poses zero community threat.",
  },
  {
    id: "filing-decisions-formal-allegations",
    stepNumber: "Step 03",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Filing Decisions and Formal Allegations",
    description:
      "All police reports will have been examined by prosecutors before any formal charges of delinquency are brought. It is also important to remember that just because a young person has been arrested doesn’t mean they will be prosecuted. The state attorney has complete discretion as to whether they wish to proceed with weak cases. Defence lawyers will also put forward evidence to mitigate the case. This dynamic strategy often convinces the state to reject charges. We highlight missing facts that police failed to document properly.",
  },
  {
    id: "evidence-review-diversion-pretrial",
    stepNumber: "Step 04",
    icon: <FaSearch className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Evidence Review Diversion and Pretrial Options",
    description:
      "Defense attorneys meticulously evaluate all evidence and diversion program eligibility. Program acceptance depends on specific offense criteria and past history. Successful completion of a diversion program results in dropped charges. This outcome keeps the criminal record of the child completely clean. Families avoid the massive stress of a formal courtroom trial. We negotiate aggressively to secure these favorable alternative resolutions.",
  },
  {
    id: "adjudicatory-hearings-disposition",
    stepNumber: "Step 05",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Adjudicatory Hearings and Disposition Decisions",
    description:
      "Adjudicatory hearings determine if the state can actually prove the allegations. Florida Juvenile Court does not have citizen juries at all. The Judge hears evidence and decides if you are guilty of fact. Another hearing then takes place to decide what your punishment should be. Behaviour reports are looked at so they can decide what help you need. All stages have a good lawyer questioning untrustworthy witnesses.",
  },
];

export default function JDWhatHappensAfterArrestSection({
  title = "What Happens After a Juvenile Arrest in Tampa?",
  subTitle = "The legal system moves incredibly fast once police detain a minor. Knowledge of these specific procedures helps parents protect their children. A strong defense requires knowing exactly what happens next.",
  steps = defaultSteps,
}: JDWhatHappensAfterArrestSectionProps) {
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

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 5 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`bg-[#0c1a29] rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl ${
                idx === 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase py-1 px-2.5 rounded-md bg-primary/10 border border-primary/30">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug mb-3">
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
