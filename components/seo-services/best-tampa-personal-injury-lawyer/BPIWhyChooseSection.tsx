"use client";

import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaGavel,
  FaUserCheck,
  FaSearch,
  FaFileAlt,
  FaShieldAlt,
  FaCoins,
  FaHandshake,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPIWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: WhyChooseItem[];
}

const defaultItems: WhyChooseItem[] = [
  {
    id: "local-tampa-representation",
    title: "Local Tampa Personal Injury Representation",
    description:
      "Our law firm works directly within the Tampa area community. We understand local traffic patterns on major roadways like Interstate and Kennedy Boulevard. Local representation means you can meet your legal team in person whenever needed. We care deeply about defending the rights of our neighbors across Hillsborough County.",
    icon: <FaMapMarkerAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "knowledge-hillsborough-courts",
    title: "Knowledge of Hillsborough County Courts",
    description:
      "Navigating local court systems requires familiarity with Hillsborough County judicial rules and procedures. Our attorneys appear regularly before local judges in Tampa's George Edgecomb Courthouse facility. Understanding local court operations allows us to move your injury lawsuit forward efficiently. Our courtroom experience gives your claim strong advantages throughout all legal proceedings.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "individualized-case-evaluation",
    title: "Individualized Case Evaluation",
    description:
      "Every personal injury claim involves unique facts, specific injuries and distinct insurance coverage details. We tailor legal strategies specifically to your personal circumstances rather than using generic templates. Individualized case reviews identify every avenue for recovering maximum financial compensation for you. Our focused approach ensures no detail gets overlooked during claim preparation processes.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "early-investigation-injury-claims",
    title: "Early Investigation of Injury Claims",
    description:
      "Launching immediate crash investigations preserves vital physical evidence before scene conditions change over time. We send investigators to document skid marks, gather security camera video and interview witnesses. Early action prevents insurance companies from shaping crash narratives to suit their defense.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "detailed-evidence-review",
    title: "Detailed Evidence Review",
    description:
      "Our legal team reviews every police report, medical record and repair estimate meticulously. Analyzing fine details allows us to spot inconsistencies in defense statements and adjusters' claims. Detailed evidence reviews ensure we calculate every dollar owed for your injuries. Thorough preparation prevents insurance companies from minimizing your legitimate economic losses during talks.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "assessment-insurance-coverage",
    title: "Careful Assessment of Insurance Coverage",
    description:
      "Recovering full compensation requires identifying all available insurance policy coverages for your claim. We evaluate bodily injury policies, umbrella coverage and uninsured motorist coverage options thoroughly. Identifying multiple insurance policies increases total available funds to cover your medical needs.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "focus-full-damage-value",
    title: "Focus on Full Damage Value",
    description:
      "We calculate your claim's worth by combining current bills with long term financial expenses. Our focus includes non economic losses like physical pain, suffering and reduced quality of life. Demanding full value prevents clients from facing unpaid medical expenses in coming years.",
    icon: <FaCoins className="w-5 h-5 text-primary" />,
  },
  {
    id: "strategic-insurance-negotiations",
    title: "Strategic Insurance Negotiations",
    description:
      "Effective negotiation requires deep knowledge of insurance tactics alongside firm evidence presentation strategies. We present clear demands backed by medical records, financial documents and expert opinions. Strategic negotiations force adjusters to treat your personal injury claim with serious attention.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "trial-representation-unfair-settlement",
    title: "Trial Representation For Unfair Settlement",
    description:
      "If insurance companies refuse fair settlement terms, our trial attorneys take your case to court. We present strong arguments, cross examine defense witnesses and fight for full jury awards. Outstanding trial representation ensures your legal rights stay protected through every courtroom step. You can rely on our courtroom experience when litigation becomes necessary for justice.",
    icon: <FaAward className="w-5 h-5 text-primary" />,
  },
];

export default function BPIWhyChooseSection({
  title = "Why Tampa Injury Victims Choose McCulloch Law",
  subTitle = "Injury victims want best tampa personal injury lawyer fighting insurance companies aggressively for real payouts. McCulloch Law delivers real results through preparation, trial experience and constant client communication.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/mcculloch.webp",
  items = defaultItems,
}: BPIWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaCheckCircle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <Image
              src={imagePath}
              alt="Attorney Drew McCulloch - Best Tampa Personal Injury Lawyer"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-sm font-bold text-white">Drew McCulloch, Esq.</p>
              <p className="text-xs text-slate-300">100+ Jury Selections &amp; Verdicts in Florida</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-5 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#0c1a29] rounded-2xl p-5 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
