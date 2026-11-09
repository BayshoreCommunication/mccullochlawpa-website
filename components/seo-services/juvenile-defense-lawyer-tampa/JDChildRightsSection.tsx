"use client";

import React from "react";
import {
  FaCommentSlash,
  FaUserShield,
  FaUsers,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";

export interface ChildRightItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDChildRightsSectionProps {
  title?: string;
  subTitle?: string;
  items?: ChildRightItem[];
}

const defaultRights: ChildRightItem[] = [
  {
    id: "right-to-remain-silent",
    title: "The Right to Remain Silent During Police Questioning",
    description:
      "Children hold an absolute right to remain silent always. Police utilize pressure strategies against scared minors frequently. Silence prevents harmful self incrimination during stressful interrogations.",
    icon: <FaCommentSlash className="w-5 h-5 text-primary" />,
  },
  {
    id: "access-to-legal-counsel",
    title: "Access to Legal Counsel During Juvenile Proceedings",
    description:
      "Every minor deserves professional legal representation during criminal proceedings. Lawyers shield children from aggressive state questioning strategies. Counsel ensures authorities respect every single constitutional boundary.",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "parental-involvement-police-interviews",
    title: "Parental Involvement During Police Interviews",
    description:
      "Florida law requires police to attempt parental notification promptly. A parent present does not replace an actual attorney. Parents must seek legal counsel before allowing substantive police interviews.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
  {
    id: "protection-unlawful-searches",
    title: "Protection Against Unlawful Searches and Coerced Statements",
    description:
      "The Constitution forbids unlawful police searches of minor suspects. Coerced confessions violate fundamental due process rights completely. An attorney assesses exactly how police obtained their evidence.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
];

export default function JDChildRightsSection({
  title = "What Rights Does a Child Have During a Juvenile Investigation?",
  subTitle = "Minors possess fundamental constitutional protections during criminal investigations. An expert juvenile defense lawyer Tampa protects these vulnerable rights immediately.",
  items = defaultRights,
}: JDChildRightsSectionProps) {
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

        {/* 4 RIGHTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
