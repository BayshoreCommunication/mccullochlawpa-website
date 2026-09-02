"use client";

import React from "react";
import {
  FaHandshake,
  FaSearch,
  FaUserCheck,
  FaUserMd,
  FaCarCrash,
  FaGavel,
  FaExclamationTriangle,
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa";

export interface StrategyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPISettlementVsTrialSectionProps {
  title?: string;
  subTitle?: string;
  items?: StrategyItem[];
}

const defaultItems: StrategyItem[] = [
  {
    id: "fast-settlement-cases",
    title: "Fast Settlement Cases to Work in Favor",
    description:
      "Settling quickly makes sense when insurance coverage fully matches your total economic losses. If liability is clear and policy limits cover all medical bills, quick settlements avoid delays. We analyze available policy limits early to determine if fast settlements benefit your situation. Our team resolves clear claims efficiently when insurers offer maximum available policy limits.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "discovery-evidence-exchange",
    title: "Discovery and Evidence Exchange",
    description:
      "Litigation begins with formal discovery where both legal sides exchange key evidence and documents. We demand internal insurance files, driver safety histories and corporate maintenance records from defendants. Exposing strong evidence during discovery often forces reluctant insurers to rethink settlement positions. Thorough discovery preparation lays firm groundwork for success during pretrial negotiations or trial.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "depositions-witness-testimony",
    title: "Depositions and Witness Testimony",
    description:
      "Depositions allow our attorneys to question negligent drivers and defense witnesses under sworn oath. We lock down defense testimony and expose inconsistencies in driver accounts of accident events. Questioning defense medical examiners reveals biased opinions made to minimize your severe physical injuries. Strong deposition performances by our legal team frequently prompt higher settlement offers quickly.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-expert-testimony",
    title: "Medical Expert Testimony",
    description:
      "Treating physicians and medical specialists present verified testimony regarding your exact physical diagnosis. Experts explain how collision forces damaged your spine, joints or brain during crash impacts. Their professional opinions confirm that your injuries require long term medical care and ongoing treatment. Clear medical testimony proves severity to judges, juries and reluctant insurance adjusters.",
    icon: <FaUserMd className="w-5 h-5 text-primary" />,
  },
  {
    id: "accident-reconstruction-testimony",
    title: "Accident Reconstruction Testimony",
    description:
      "Reconstruction specialists present scientific findings to explain vehicle speeds and exact collision angles. Experts use computer models and physical road data to demonstrate driver fault clearly. Their technical analysis refutes defense claiming you contributed to causing collision impacts. Scientific testimony eliminates doubts regarding liability during trial or formal settlement discussions.",
    icon: <FaCarCrash className="w-5 h-5 text-primary" />,
  },
  {
    id: "pretrial-motions-preparation",
    title: "PreTrial Motions and Case Preparation",
    description:
      "Our trial team files pretrial motions to exclude improper defense evidence from courtrooms. Setting legal parameters before trial protects your case from unfair defense tactics and arguments. Detailed trial prep ensures witness statements, physical exhibits and medical records are ready for court. Comprehensive pretrial preparation gives our attorneys strong advantages during final settlement talks.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "insurer-behavior-decision",
    title: "Insurer Behavior in Decision",
    description:
      "Unreasonable insurance adjusters who deny obvious liability force cases toward formal trial proceedings. When insurers refuse fair payout offers, taking your claim to trial becomes necessary. We evaluate insurer behavior continuously to recommend whether settling or trying cases fits best. Our firm never backs down when insurance carriers refuse to offer fair compensation.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "mediation-process-before-trial",
    title: "Mediation Process Before Trial",
    description:
      "Mediation brings both parties together with a neutral mediator to attempt final settlements. We present clear arguments, expert medical reports and itemized financial losses during mediation talks. Mediators help both sides evaluate risks, often leading to fair compromise settlement agreements. Successful mediation resolves claims faster while securing necessary funds for your recovery needs.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "jury-trial-proceedings-tampa",
    title: "Jury Trial Proceedings in Tampa",
    description:
      "When mediation fails, we present your personal injury case directly to local Tampa jurors at the George Edgecomb Courthouse. Our trial lawyers present strong evidence, call expert witnesses and assert claim for full damages. We fight relentlessly to hold negligent drivers and corporations accountable. Jury verdicts against insurance companies can provide both justice and economic recovery for inadequate settlements.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
];

export default function BPISettlementVsTrialSection({
  title = "Settlement or Trial — How McCulloch Law Determines the Right Strategy",
  subTitle = "McCulloch Law weighs every settlement offer against the strength of trial evidence. Some cases settle fast yet others require a jury to secure fair compensation.",
  items = defaultItems,
}: BPISettlementVsTrialSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
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
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="w-10 h-[2px] bg-primary rounded-full mb-3" />

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
