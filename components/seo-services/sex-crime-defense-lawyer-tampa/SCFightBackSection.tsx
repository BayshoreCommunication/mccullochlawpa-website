"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaSearch,
  FaFileAlt,
  FaFlask,
  FaHistory,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export interface FightBackItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCFightBackSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: FightBackItem[];
}

const defaultFightBackItems: FightBackItem[] = [
  {
    number: "01",
    id: "disclosing-motive",
    icon: <FaSearch className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Disclosing Accuser's Motive",
    description:
      "False accusations do not appear without context and almost always involves a concrete motive. They follow custody disputes, financial conflicts, bad breakups or retaliatory confrontations. McCulloch Law investigates the accuser's background, communications and relationship history with the defendant. A documented motive influences the jury's interpretation of all evidence.",
  },
  {
    number: "02",
    id: "documenting-inconsistencies",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Documenting Inconsistencies in Accuser's Account",
    description:
      "Fabricated accounts rarely stay consistent across multiple retellings made to different audiences under different conditions. McCulloch Law compares the initial police report against deposition testimony. Then we compare victim advocate statements and trial testimony. Our defense team documents every inconsistency in timing, location and description and presents them precisely.",
  },
  {
    number: "03",
    id: "challenging-physical-evidence",
    icon: <FaFlask className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Challenging Physical Evidence",
    description:
      "Many false accusations lack any physical corroboration. This lack makes the accuser's credibility entire case for the prosecution. Upon physical evidence our defense attorney challenges custody procedures, lab handling protocols and forensic interpretation. Conclusive results for a jury often have valid scientific limitations upon examination. These experts testify in Florida courts and communicate those scientific limits clearly to non technical jurors.",
  },
  {
    number: "04",
    id: "reconstructing-digital-timeline",
    icon: <FaHistory className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Reconstructing Digital Evidence Timeline",
    description:
      "Digital records create an objective timeline for accuser not to change or revise after the fact. McCulloch Law retains forensic experts to reconstruct every relevant event using extracted metadata from all sources. When reconstruction contradicts the accusation, the defense does not need credibility comparison between parties. Objective timelines frequently expose timing impossibilities.",
  },
  {
    number: "05",
    id: "alibi-character-witnesses",
    icon: <FaUsers className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Preparing Alibi and Character Witnesses",
    description:
      "McCulloch Law identifies every available alibi witness and prepares them well. Our team selects character witnesses for specific personal knowledge and qualifies them for cross examination. Together they provide jury with a verified and documented alternative account of actual events. They reinforce the factual defense with testimony.",
  },
];

export default function SCFightBackSection({
  title = "How McCulloch Law Fights Back Against False Accusation of Sex Crime in Tampa",
  subTitle = "False accusations happen and institutions treat them as fact. McCulloch Law builds every false accusation defense around documented evidence with best sex crime defense lawyer tampa.",
  imagePath = "/images/seo-services/sex-crime-defense-lawyer-tampa/attorney-office.png",
  items = defaultFightBackItems,
}: SCFightBackSectionProps) {
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
                False Accusations Require Strategic Action
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                We investigate motives, reconstruct timelines, and present objective physical &amp; digital evidence to dismantle false claims.
              </p>
              <a
                href="tel:8134442817"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-yellow-400 transition-colors pt-2 group"
              >
                <span>Call (813) 444-2817 for Defense Representation</span>
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
