"use client";

import React from "react";
import {
  FaUserShield,
  FaCommentSlash,
  FaKey,
  FaUserSlash,
  FaClock,
  FaCalendarCheck,
  FaGavel,
  FaBalanceScale,
} from "react-icons/fa";

export interface RobberyArrestStep {
  id: string;
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface RDWhatToDoAfterArrestSectionProps {
  title?: string;
  subTitle?: string;
  steps?: RobberyArrestStep[];
}

const defaultSteps: RobberyArrestStep[] = [
  {
    id: "invoke-rights-immediately",
    stepNumber: "Step 01",
    icon: <FaUserShield className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Invoke Your Rights Immediately",
    description:
      "Tell officers you choose to remain silent and want an attorney. State your decision clearly, then stop answering questions about the alleged robbery. Do not consent to searches without legal advice. Do not physically resist officers or interfere with the investigation. You can comply with lawful instructions while preserving your right to challenge improper police conduct.",
  },
  {
    id: "not-speak-first-appearance",
    stepNumber: "Step 02",
    icon: <FaCommentSlash className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Not Speak About Your Case’s Facts During Appearance Hearing",
    description:
      "The first appearance hearing generally addresses probable cause, bond, release conditions and access to legal counsel. The judge may also explain the pending allegations and restrictions. Do not volunteer a detailed explanation of the incident. Avoid discussing disputed evidence, your relationship with the alleged victim or conversations with other suspects. Give the court any required identification or personal information, but reserve your account of the incident for your attorney.",
  },
  {
    id: "bond-pretrial-release-conditions",
    stepNumber: "Step 03",
    icon: <FaKey className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Bond and Pretrial Release Conditions",
    description:
      "A judge may consider the alleged offense, criminal history, community ties, prior court appearances and other relevant factors when determining bond and pretrial release. The court may impose conditions such as monetary bond or supervised release. Travel restrictions or GPS monitoring. Drug testing, curfews or regular reporting. Restrictions on firearms or other weapons. Review every condition with your attorney.",
  },
  {
    id: "strictly-follow-no-contact-orders",
    stepNumber: "Step 04",
    icon: <FaUserSlash className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Strictly Follow ‘No Contact’ Orders",
    description:
      "A “no contact” order can prohibit direct and indirect communication with a protected person. The restriction may apply to phone calls, text messages, emails, social media, personal visits and communication through third parties. Do not assume the restriction ends because the alleged victim contacts you first. Do not respond or arrange a meeting without legal advice.",
  },
  {
    id: "urgent-evidence-preservation",
    stepNumber: "Step 05",
    icon: <FaClock className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Urgent Evidence Preservation",
    description:
      "Identify evidence capable of confirming your location, explaining the property dispute or challenging the State's timeline. Digital records may disappear quickly. Write down the relevant dates, locations, camera systems, vehicle details, account names and potential witnesses.",
  },
  {
    id: "tracking-court-dates-arraignment",
    stepNumber: "Step 06",
    icon: <FaCalendarCheck className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Tracking Court Dates & Arraignment",
    description:
      "Keep a written record of every court date, hearing, deadline and release condition. Check your case information through the Hillsborough County court system and communicate with your attorney about scheduling changes. Arraignment generally provides the court with an opportunity to address the formal charges and receive a plea. Your attorney can explain the available procedural options and determine whether an appearance waiver or written plea applies.",
  },
  {
    id: "early-legal-representation",
    stepNumber: "Step 07",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />,
    title: "Early Legal Representation",
    description:
      "Contact a defense attorney as soon as possible after an arrest, detective interview request or notice of a robbery investigation. Early representation gives counsel an opportunity to examine the available evidence and identify records at risk of deletion.",
  },
];

export default function RDWhatToDoAfterArrestSection({
  title = "What to Do After a Robbery Arrest in Tampa?",
  subTitle = "A robbery arrest can trigger immediate court deadlines, bond decisions and evidence preservation concerns. Your first actions should protect your legal rights and prevent avoidable violations during the case.",
  steps = defaultSteps,
}: RDWhatToDoAfterArrestSectionProps) {
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

        {/* 7 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`bg-[#0c1a29] rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
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

