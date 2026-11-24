"use client";

import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaUserShield,
  FaHome,
  FaBrain,
  FaHandshake,
  FaExclamationCircle,
  FaSearchMinus,
  FaHistory,
  FaBalanceScale,
} from "react-icons/fa";

export interface DefenseItem {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const INLINE_LINK_CLASS =
  "font-semibold text-primary underline hover:text-[#d4a843] transition-colors";

export interface BLDefensesSectionProps {
  title?: string;
  subTitle?: string;
  items?: DefenseItem[];
}

const defaultDefenses: DefenseItem[] = [
  {
    id: "stand-your-ground",
    title: "Self Defense or Stand Your Ground",
    description:
      "Florida law permits certain uses of defensive force. Section 776.012 addresses a person's use or threat of force when the person reasonably believes such force is necessary to defend against another person's imminent unlawful force. Florida's Stand Your Ground law may provide immunity from criminal prosecution in qualifying circumstances. The law does not give a person unlimited permission to use force during an argument.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "defense-of-others",
    title: "Defense of Others",
    description: (
      <>
        A person may use lawful defensive force to protect another person from
        imminent unlawful force, subject to the requirements governing the type
        of force involved. If a minor faces a separate charge after acting to
        protect another person,{" "}
        <Link
          href="/juvenile-defense-lawyer-tampa"
          className={INLINE_LINK_CLASS}
        >
          juvenile defense
        </Link>{" "}
        rules may affect the court process and available legal options.
      </>
    ),
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "defense-of-property",
    title: "Defense of Property",
    description:
      "Florida law permits certain uses of nondeadly force to prevent or stop unlawful interference with property, subject to statutory limits. A property dispute does not automatically justify physical force.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "lack-of-intent-accident",
    title: "Lack of Intent or Accident",
    description:
      "Florida battery law requires intentional touching or striking against another person's will or intentional bodily harm. An accidental collision or unintended contact may raise questions about the required intent.",
    icon: <FaBrain className="w-5 h-5 text-primary" />,
  },
  {
    id: "consent-mutual-combat",
    title: "Consent or Mutual Combat",
    description:
      "Evidence of a mutual confrontation may affect the account of the incident. However, an agreement to fight does not automatically excuse every act of physical contact. The legal effect depends on the facts and applicable law.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "false-accusations-credibility",
    title: "False Accusations and Credibility Issues",
    description: (
      <>
        Conflicting accounts may arise during personal disputes, financial
        disagreements, relationship conflicts or custody disputes. If the same
        dispute includes separate financial deception allegations, a{" "}
        <Link
          href="/fraud-defense-lawyer-tampa"
          className={INLINE_LINK_CLASS}
        >
          fraud lawyer
        </Link>{" "}
        may need to address those charges separately.
      </>
    ),
    icon: <FaExclamationCircle className="w-5 h-5 text-primary" />,
  },
  {
    id: "insufficient-evidence",
    title: "Insufficient Evidence",
    description:
      "The prosecutor must prove every required element beyond a reasonable doubt. A complaint alone does not establish guilt. Missing footage, inconsistent accounts or weak evidence connecting a person to the alleged conduct may affect the state's case.",
    icon: <FaSearchMinus className="w-5 h-5 text-primary" />,
  },
  {
    id: "challenging-prior-convictions",
    title: "Challenging Prior Conviction Enhancements",
    description:
      'A qualifying prior conviction can elevate a later battery charge under § 784.03. The statute also defines conviction to include certain prior cases with withheld adjudication or a "no contest" plea. Errors or legal questions involving a prior offense may affect the classification of the new charge.',
    icon: <FaHistory className="w-5 h-5 text-primary" />,
  },
];

export default function BLDefensesSection({
  title = "Possible Defenses Against Battery Charges Under 13th Judicial Circuit Court",
  subTitle = "A battery defense depends on the alleged conduct, available evidence and applicable law. Our defense review focuses on the state's evidence and the legal requirements for the charged offense.",
  items = defaultDefenses,
}: BLDefensesSectionProps) {
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

        {/* 8 DEFENSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((def) => (
            <div
              key={def.id}
              className="bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:shadow-2xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {def.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors mb-2.5 leading-snug">
                  {def.title}
                </h3>

                <div className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {def.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
