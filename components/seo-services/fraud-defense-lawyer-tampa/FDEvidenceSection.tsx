"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBalanceScale,
  FaSearchDollar,
  FaUserTie,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export interface FraudEvidenceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FDEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  ctaText?: string;
  ctaButtonText?: string;
  items?: FraudEvidenceItem[];
}

const defaultEvidenceItems: FraudEvidenceItem[] = [
  {
    id: "intent-decides-outcome",
    icon: <FaBalanceScale className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Why Intent Decides the Outcome",
    description:
      "Intent sits at the center of almost every fraud charge. The State has to prove you knowingly meant to deceive someone. Honest mistakes and clerical errors are not fraud under Florida law.",
  },
  {
    id: "document-review-process",
    icon: <FaSearchDollar className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Our Document Review Process",
    description:
      "We go through financial statements, contracts, and communications line by line. We look for gaps in the State's version of events. We also flag explanations the prosecution may have missed. Bank records often tell a different story once the full transaction history is laid out. A single flagged deposit rarely captures the full picture. Context can change how a number reads to a jury.",
  },
  {
    id: "outside-experts",
    icon: <FaUserTie className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Bringing in Outside Experts",
    description:
      "Complex fraud cases sometimes call for an expert witness. A forensic accountant can explain disputed transactions clearly. We bring in qualified experts when a case demands it.",
  },
];

export default function FDEvidenceSection({
  title = "Which Evidence You Should Preserve After a Fraud Investigation in Tampa",
  subTitle = "Fraud cases are more likely to be on the rise or fall in documentation. Witness statements, emails and financial records are used as proof of intent by prosecutors. It is important to carefully examine each item.",
  imagePath = "/images/seo-services/fraud-defense-lawyer-tampa/evidence-folder.png",
  ctaText = "Act fast. Financial documentation & emails define fraud intent. Secure proof with McCulloch Law.",
  ctaButtonText = "Get a Free Case Evaluation",
  items = defaultEvidenceItems,
}: FDEvidenceSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {subTitle}
            </p>

            <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Preserve Fraud Investigation Evidence - McCulloch Law"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  {ctaText}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-yellow-400 transition-colors group cursor-pointer"
                >
                  <span>{ctaButtonText}</span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
