"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaSearch,
  FaFileAlt,
  FaFlask,
  FaHistory,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";

export interface FightBackItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDFightBackSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: FightBackItem[];
}

const defaultFightBackItems: FightBackItem[] = [
  {
    number: "01",
    id: "independent-investigation",
    icon: <FaSearch className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Independent Investigation & Evidence Gathering",
    description:
      "McCulloch Law P.A. doesn't rely solely on the state's version of events documented in a police report. We interview critical witnesses and gather private surveillance footage to build accurate timelines. This independent process regularly uncovers helpful evidence that police officers completely ignored before. A thorough independent investigation frequently reveals gaps the prosecution's file doesn't show.",
  },
  {
    number: "02",
    id: "attacking-accuser-credibility",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Attacking the Accuser's Credibility",
    description:
      "When local cases rest entirely on single accounts, personal motives matter enormously. Prior inconsistent statements or clear motives to lie can completely destroy accusations early. This situation requires careful cross examination instead of aggressive arguments that backfire later. Our firm builds these specific legal challenges using documented factual contradictions instead of speculation.",
  },
  {
    number: "03",
    id: "pre-file-intervention",
    icon: <FaShieldAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Pre File Intervention",
    description:
      "Before the State Attorney's Office formally files charges, there's a window to present exculpatory evidence directly to the prosecutor. A well timed pre file intervention can convince a prosecutor to decline charges or file something less serious. This strategy only works with fast action, since the filing decision typically comes within 21 days of arrest. Our tampa criminal defense lawyer moves on this window immediately after taking a case.",
  },
  {
    number: "04",
    id: "exploiting-procedural-flaws",
    icon: <FaHistory className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Exploiting Procedural and Constitutional Flaws",
    description:
      "Fourth Amendment violations during a search, Miranda violations during questioning and chain of custody breaks can all undermine a case regardless of guilt or innocence. Motions to suppress evidence obtained improperly can eliminate key pieces of the state's case entirely. Judges take these motions seriously when the constitutional violation is clearly documented. Our firm reviews every arrest for these procedural openings before considering any other strategy.",
  },
  {
    number: "05",
    id: "forensic-medical-experts",
    icon: <FaFlask className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Forensic and Medical Experts' Testimony",
    description:
      "Independent forensic and medical experts can challenge the state's interpretation of physical evidence, injuries or lab results. A defense expert reviewing the same blood sample or injury photograph often reaches a different conclusion than the state's expert. Jurors give real weight to qualified experts who explain complex evidence in plain terms. Drew McCulloch's team brings in these experts on cases where the physical evidence is disputed.",
  },
  {
    number: "06",
    id: "direct-defense-strategies",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Direct Defense Strategies",
    description:
      "Alibi evidence, self defense claims under Florida's Stand Your Ground law and mistaken identity defenses each require a different kind of proof. Building any of these defenses starts with the evidence gathered in the first days after an arrest. Waiting too long to build a direct defense narrows which strategy is even still available. McCulloch Law P.A. identifies the strongest available defense early, then builds the entire case around proving it.",
  },
];

export default function CDFightBackSection({
  title = "How McCulloch Law Fights Back Against False Accusation of Crime in Tampa",
  subTitle = "False accusations happen more often between people who know each other. McCulloch Law approaches these cases with a defense built from day one.",
  imagePath = "/images/seo-services/criminal-defense-lawyer-tampa-fl/mcculloch.webp",
  items = defaultFightBackItems,
}: CDFightBackSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="McCulloch Law Defense Strategy"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-3">
              <h3 className="text-lg font-bold text-primary">
                Strategic Defense Built From Day One
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                We investigate motives, reconstruct timelines, and exploit procedural flaws to build a strong defense.
              </p>
              <a
                href="tel:8134442817"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-yellow-400 transition-colors pt-2 group"
              >
                <span>Call (813) 444-2817 for Representation</span>
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/30">
                      Step {item.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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
