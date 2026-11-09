"use client";

import React from "react";
import {
  FaShieldAlt,
  FaUserSecret,
  FaSearchMinus,
  FaLockOpen,
  FaComments,
  FaBalanceScale,
} from "react-icons/fa";

export interface JuvenileDefenseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDDefensesSectionProps {
  title?: string;
  subTitle?: string;
  items?: JuvenileDefenseItem[];
}

const defaultDefenses: JuvenileDefenseItem[] = [
  {
    id: "self-defense-defense-of-others",
    title: "Self Defense and Defense of Another Person",
    description:
      "Florida law allows minors to protect themselves from unprovoked physical harm. This defense applies frequently in chaotic schoolyard altercations. A child can also legally defend a targeted friend. The defense requires showing the physical force was strictly necessary. We gather witness statements to prove who threw the first punch.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "mistaken-identity-unreliable-witnesses",
    title: "Mistaken Identity and Unreliable Witness Accounts",
    description:
      "Chaotic environments like crowded hallways easily confuse frantic bystanders. Poor lighting also leads to completely false suspect identifications. Rumors spread fast and corrupt the memories of teenage witnesses. We use cross examination to expose these massive factual inconsistencies. Solid alibi evidence proves the minor was somewhere else entirely.",
    icon: <FaUserSecret className="w-5 h-5 text-primary" />,
  },
  {
    id: "lack-of-intent-insufficient-evidence",
    title: "Lack of Criminal Intent or Insufficient Evidence",
    description:
      "Prosecutors carry the heavy burden of proving every legal element. The state cannot secure a conviction based on mere suspicion. Accidental property damage severely lacks the required malicious criminal intent. Many teenage pranks simply do not meet statutory crime definitions. Highlighting these missing elements often forces prosecutors to drop charges.",
    icon: <FaSearchMinus className="w-5 h-5 text-primary" />,
  },
  {
    id: "unlawful-searches-questioning",
    title: "Unlawful Searches Questioning or Evidence Collection",
    description:
      "When investigating juveniles quickly police often break constitutional rights. Your officer will not have any lawful grounds to search your child's backpack. We will file a strict motion to suppress any physical evidence obtained unlawfully. If the police do not read the Miranda rights confessions can be thrown out. By holding law enforcers accountable we can ensure that your child is not abused by the system.",
    icon: <FaLockOpen className="w-5 h-5 text-primary" />,
  },
  {
    id: "digital-evidence-context",
    title: "Digital Evidence Taken Out of Context",
    description:
      "Incomplete screenshots completely misrepresent the reality of online conversations. Sarcastic jokes routinely look like dangerous physical threats on paper. We demand the entire chat log to reveal true context. Fake social media profiles routinely frame completely innocent local teenagers. Our experienced juvenile defense lawyer Tampa examines account data to prove innocence.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
];

export default function JDDefensesSection({
  title = "Possible Defenses Against Juvenile Criminal Charges",
  subTitle = "Florida law deems some acts of minors as delinquent acts. The nature of the charges is dependent on the circumstances.",
  items = defaultDefenses,
}: JDDefensesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
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

        {/* 5 DEFENSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
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
