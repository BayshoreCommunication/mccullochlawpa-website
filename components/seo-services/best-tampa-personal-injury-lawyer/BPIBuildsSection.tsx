"use client";

import React from "react";
import {
  FaSearch,
  FaFolderOpen,
  FaCalculator,
  FaHourglassHalf,
  FaHandshake,
  FaGavel,
  FaBalanceScale,
} from "react-icons/fa";

export interface BuildItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPIBuildsSectionProps {
  title?: string;
  subTitle?: string;
  items?: BuildItem[];
}

const defaultItems: BuildItem[] = [
  {
    id: "free-initial-case-evaluation",
    title: "Free Initial Case Evaluation",
    description:
      "Your legal journey begins with a private consultation with our experienced personal injury team. We evaluate crash details, review insurance coverage options and discuss your physical recovery needs. This initial consultation costs nothing and gives you clear insights into legal choices. You learn how our legal team can assist without any financial obligation.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "investigation-evidence-collection",
    title: "Investigation and Evidence Collection",
    description:
      "Our staff conducts thorough investigations to gather essential evidence for your personal injury claim. We collect official crash reports, obtain medical records and interview key eyewitnesses right away. Securing video footage and physical proof early prevents insurance companies from denying responsibility. Detailed investigations create firm factual foundations that support maximum financial settlement demands.",
    icon: <FaFolderOpen className="w-5 h-5 text-primary" />,
  },
  {
    id: "calculating-full-claim-value",
    title: "Calculating the Full Value of Your Claim",
    description:
      "Accurate claim valuations require counting past expenses alongside estimating long term future needs. We analyze medical records, employment records and expert reports to calculate total financial harm. Factoring in non economic losses ensures we never ask for less than full claim value. Our firm calculates every expense so you receive fair payment from insurers.",
    icon: <FaCalculator className="w-5 h-5 text-primary" />,
  },
  {
    id: "filing-statute-of-limitations",
    title: "Filing Within Florida's Statute of Limitations",
    description:
      "Florida Statute § 95.11 establishes strict deadlines for filing personal injury lawsuits after motor vehicle crashes. Most negligence lawsuits must be filed in court within two years from accident date. Missing this legal deadline forever bars you from recovering financial compensation for injuries. We manage all court deadlines precisely to ensure your lawsuit stays active in the 13th Judicial Circuit.",
    icon: <FaHourglassHalf className="w-5 h-5 text-primary" />,
  },
  {
    id: "negotiating-insurance-adjusters",
    title: "Negotiating With Insurance Adjusters",
    description:
      "Insurance adjusters use clever tactics to minimize financial settlements offered to injured crash victims. We handle all settlement communications and reject unfair lowball offers made by insurance carriers. Our attorneys present clear evidence and firm legal demands to secure maximum payouts. Strong negotiation skills often resolve claims fairly without needing long trial proceedings.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "filing-lawsuit-negotiation-stalls",
    title: "Filing a Lawsuit When Negotiation Stalls",
    description:
      "If insurance companies refuse fair settlements, we file formal lawsuits in the Hillsborough County Circuit Court (13th Judicial Circuit). Litigation shows insurance companies that we are prepared to fight for full value. Court filings initiate formal discovery processes where both sides exchange evidence under legal oversight. Our trial lawyers prepare every claim for court to force fair insurer responses.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
];

export default function BPIBuildsSection({
  title = "How McCulloch Law Builds and Files Your Personal Injury Claim",
  subTitle = "A good claim needs a strong strategy and valid evidence before an insurer offers a settlement for compensation.",
  items = defaultItems,
}: BPIBuildsSectionProps) {
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
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
