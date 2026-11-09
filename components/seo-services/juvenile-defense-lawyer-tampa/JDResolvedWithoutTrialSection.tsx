"use client";

import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaBalanceScale,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

export interface ResolvedWithoutTrialItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDResolvedWithoutTrialSectionProps {
  title?: string;
  subTitle?: string;
  items?: ResolvedWithoutTrialItem[];
}

const defaultItems: ResolvedWithoutTrialItem[] = [
  {
    id: "diversion-programs-eligibility",
    title: "Juvenile Diversion Programs and Eligibility",
    description:
      "Diversion programs allow eligible minors to bypass formal court. Eligibility relies heavily on the specific offense circumstances. First time offenders often qualify for these rehabilitative paths.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "teen-court-alternative",
    title: "Teen Court and Alternative Resolution Options",
    description:
      "Teen court uses a peer driven justice model successfully. This alternative focuses on community service and strict accountability. It removes the minor from traditional formal adjudication proceedings.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
  {
    id: "informal-adjustment-resolutions",
    title: "Informal Adjustment and Other Available Resolutions",
    description:
      "Informal adjustment handles minor infractions without a judge. This process requires strict compliance with specific behavioral conditions. It differs greatly from formal delinquency adjudication trials.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "after-diversion-program",
    title: "What Happens After a Child Completes a Diversion Program?",
    description:
      "Successful program completion often results in dismissed criminal charges. A failed program sends the case back to formal court. Attorneys evaluate these options before families sign any agreements.",
    icon: <FaCheckCircle className="w-5 h-5 text-primary" />,
  },
];

export default function JDResolvedWithoutTrialSection({
  title = "Can Juvenile Charges Be Resolved Without Going to Trial?",
  subTitle = "Florida courts prefer rehabilitation over formal trial proceedings. Your juvenile defense lawyer Tampa explores every alternative resolution pathway.",
  items = defaultItems,
}: JDResolvedWithoutTrialSectionProps) {
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
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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
