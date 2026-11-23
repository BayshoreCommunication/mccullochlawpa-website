"use client";

import React from "react";
import Link from "next/link";
import {
  FaUserCheck,
  FaFileAlt,
  FaSearchPlus,
  FaShieldAlt,
  FaGavel,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";

export interface HandleStep {
  id: string;
  stepNumber: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export interface ALHowWeHandleSectionProps {
  title?: string;
  subTitle?: string;
  steps?: HandleStep[];
}

const defaultSteps: HandleStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Initial Consultation and Case Review",
    description: (
      <>
        We discuss the incident, your concerns, the current status of the case
        and upcoming court dates. Bring your available documents and a timeline
        of events. Our{" "}
        <Link
          href="/criminal-defense-lawyer-tampa-fl"
          className="font-semibold text-primary underline hover:text-[#d4a843] transition-colors"
        >
          criminal defense lawyer
        </Link>{" "}
        can explain the main legal issues and identify information requiring
        further review.
      </>
    ),
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Review of the Charge and Evidence",
    description: (
      <>
        We examine the charging documents, police reports, witness accounts,
        messages, photographs and recordings available to the defense. Our
        review considers the required elements of simple or aggravated assault
        and the strength of the evidence supporting each allegation. But when an
        assault allegation involves a{" "}
        <Link
          href="/sex-crime-defense-lawyer-tampa"
          className="font-semibold text-primary underline hover:text-[#d4a843] transition-colors"
        >
          sex crime
        </Link>
        , we also review forensic medical records, relationship context and
        prior statements to identify contradictions, bias or false accusations.
      </>
    ),
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Independent Investigation",
    description:
      "Where appropriate, we identify additional witnesses, seek relevant recordings through lawful channels and examine inconsistencies in the available evidence. We also consider physical surroundings, timing and other facts potentially relevant to the alleged threat.",
    icon: <FaSearchPlus className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Defense Preparation",
    description: (
      <>
        We assess possible defenses, legal motions and issues involving the
        collection or reliability of evidence. We explain the strengths and
        limits of each available argument before discussing the next steps. When
        a minor faces an assault allegation, juvenile court procedures and
        potential consequences may differ from adult criminal proceedings. Our{" "}
        <Link
          href="/juvenile-defense-lawyer-tampa"
          className="font-semibold text-primary underline hover:text-[#d4a843] transition-colors"
        >
          juvenile defense
        </Link>{" "}
        addresses the legal requirements and options available in qualifying
        cases.
      </>
    ),
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "Court Representation and Case Resolution",
    description:
      "We represent clients during applicable court proceedings, communicate with the prosecution and assess possible plea agreements when appropriate. We also prepare for trial when the case requires one. Throughout the matter, we explain developments and discuss major decisions with you. We do not promise a dismissal or a particular result.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
];

export default function ALHowWeHandleSection({
  title = "How Our Tampa Assault Lawyer Handles Your Case",
  subTitle = "Our assault lawyer Tampa reviews the facts and legal issues before recommending a defense strategy. Each case requires an individual assessment. An approach suitable for one allegation may not fit another.",
  steps = defaultSteps,
}: ALHowWeHandleSectionProps) {
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

        {/* 5 STEPS VERTICAL / TIMELINE FLOW */}
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#0B1B2D] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row gap-6 md:items-center justify-between group"
            >
              <div className="flex items-start sm:items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-slate-950 transition-all shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold text-primary tracking-wider uppercase">
                      Step {item.stepNumber}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span className="text-xs text-slate-400 font-medium">Defense Phase</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="md:max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed md:pl-6 md:border-l border-slate-800">
                {item.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
