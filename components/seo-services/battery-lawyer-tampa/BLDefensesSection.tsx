"use client";

import React from "react";
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
  description: string;
  icon: React.ReactNode;
}

export interface BLDefensesSectionProps {
  title?: string;
  items?: DefenseItem[];
}

const defaultDefenses: DefenseItem[] = [
  {
    id: "stand-your-ground",
    title: "Self Defense or Stand Your Ground",
    description:
      "Florida law permits someone to use or threaten to use nondeadly force when the person reasonably believes that such force is necessary to defend against another person's imminent use of unlawful force. The use of deadly force involves stricter statutory requirements. Stand Your Ground protections depend on the evidence, the circumstances and compliance with Florida law. An attorney can review the sequence of events and assess whether the evidence supports a self defense argument.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "defense-of-others",
    title: "Defense of Others",
    description:
      "Florida law also allows defensive force to protect another person from the imminent use of unlawful force under qualifying conditions. The defense depends on the actions of each person, the threat presented and the evidence supporting the intervention.",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "defense-of-property",
    title: "Defense of Property",
    description:
      "Florida statutes permit certain uses of nondeadly force to protect property from unlawful interference, subject to strict legal limits. Force that exceeds statutory authorization may create criminal exposure. We examine the conduct, property interest and danger before evaluating this defense.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "lack-of-intent-accident",
    title: "Lack of Intent or Accident",
    description:
      "Battery requires intentional physical contact or the intentional infliction of bodily harm. An accidental collision, reflex movement or unintended contact may raise questions about the required intent.",
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
    description:
      "Conflicting accounts may arise during personal disputes, financial disagreements, relationship conflicts or custody disputes. If the same dispute includes separate financial deception allegations, a fraud lawyer may need to address those charges separately.",
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
  items = defaultDefenses,
}: BLDefensesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* DEFENSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-amber-500/5" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

