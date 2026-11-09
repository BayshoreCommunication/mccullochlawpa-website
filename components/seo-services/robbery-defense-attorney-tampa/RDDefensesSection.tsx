"use client";

import React from "react";
import {
  FaUserSecret,
  FaShieldAlt,
  FaSearchMinus,
  FaUserFriends,
  FaLockOpen,
  FaCrosshairs,
  FaBalanceScale,
} from "react-icons/fa";

export interface RobberyDefenseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RDDefensesSectionProps {
  title?: string;
  subTitle?: string;
  items?: RobberyDefenseItem[];
}

const defaultDefenses: RobberyDefenseItem[] = [
  {
    id: "mistaken-identity",
    title: "Mistaken Identity",
    description:
      "Mistaken identity can become a central issue when police rely on eyewitness descriptions, photo lineups or brief observations during a stressful incident. A witness may misidentify a person because of poor lighting, distance, limited viewing time, stress or an inaccurate initial description. A suggestive identification procedure can create further reliability concerns.",
    icon: <FaUserSecret className="w-5 h-5 text-primary" />,
  },
  {
    id: "lack-of-force-or-fear",
    title: "Lack of Force or Fear",
    description:
      "Florida robbery law requires the prosecution to connect the property taking with force, violence, assault or fear. A disagreement about ownership or an unauthorized taking does not automatically establish robbery. For example, a person may take property without force, followed by a separate argument after the owner discovers the loss. The timing and connection between the events may affect the robbery allegation.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "insufficient-evidence",
    title: "Insufficient Evidence",
    description:
      "The prosecution must prove every required element beyond a reasonable doubt. Weak identification evidence, inconsistent witness accounts, missing recordings, unreliable forensic findings or a broken chain of custody may create reasonable doubt.",
    icon: <FaSearchMinus className="w-5 h-5 text-primary" />,
  },
  {
    id: "lack-of-participation-or-intent",
    title: "Lack of Participation or Intent",
    description:
      "The prosecution must establish your participation in the alleged offense and the required intent to deprive the owner of property. Mere presence at a location or association with another suspect does not automatically establish criminal responsibility. A person may appear in surveillance footage, travel with an accused individual or have contact with someone involved in an incident without committing robbery.",
    icon: <FaUserFriends className="w-5 h-5 text-primary" />,
  },
  {
    id: "unlawfully-obtained-evidence",
    title: "Unlawfully Obtained Evidence",
    description:
      "Police must follow constitutional rules during searches, seizures and custodial questioning. A court may suppress evidence after an unlawful search or an unconstitutional interrogation.",
    icon: <FaLockOpen className="w-5 h-5 text-primary" />,
  },
  {
    id: "challenging-weapon-allegations",
    title: "Challenging Weapon Allegations",
    description:
      "A weapon allegation can change the robbery classification and create mandatory sentencing exposure. A witness may describe an object incorrectly. A recording may fail to show the alleged weapon clearly. Police may also misclassify an ordinary object without adequate evidence of its nature or use.",
    icon: <FaCrosshairs className="w-5 h-5 text-primary" />,
  },
];

export default function RDDefensesSection({
  title = "Possible Defenses Against Robbery Charges",
  subTitle = "A robbery defense must address the specific elements and evidence in the charging document.",
  items = defaultDefenses,
}: RDDefensesSectionProps) {
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

        {/* 6 DEFENSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
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

