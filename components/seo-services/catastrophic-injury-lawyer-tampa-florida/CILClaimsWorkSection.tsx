"use client";

import React from "react";
import {
  FaFileContract,
  FaBalanceScale,
  FaSearchPlus,
  FaUserMd,
  FaGavel,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

export interface ClaimWorkItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILClaimsWorkSectionProps {
  title?: string;
  subTitle?: string;
  items?: ClaimWorkItem[];
}

const defaultItems: ClaimWorkItem[] = [
  {
    id: "filing-personal-injury-claim",
    title: "Filing Personal Injury Claim",
    description:
      "Initiating a legal claim requires detailed initial investigation, evidence collection and formal notice. Written insurance demands detail liability theories, physical trauma evidence and projected financial losses. Early investigative accuracy prevents insurance adjusters from asserting false liability denials during negotiations.",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
  },
  {
    id: "comparative-negligence-rule",
    title: "Comparative Negligence Rule",
    description:
      "Florida formerly operated under a pure comparative fault system allowing partial victim recovery regardless of fault. Legislative updates under House Bill 837 established a strict 51 percent comparative fault bar. Claimants found over 50 percent responsible for collisions are completely barred from receiving damages.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "fault-proving-injury-case",
    title: "Fault Proving in Injury Case",
    description:
      "To prove liability in personal injury case, the law requires proving duty, breached and directly and legally caused damages. Accident reconstruction experts can help determine the extent of the damage. This evaluation relates both to vehicles involved as well as the roadway. Establishing clear defendant negligence eliminates comparative fault defenses raised by commercial insurance companies.",
    icon: <FaSearchPlus className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-records-testimony",
    title: "Medical Records and Testimony",
    description:
      "Detailed hospital treatment records establish immediate causal links between collision events and physical trauma. Board-certified medical experts translate complex radiological scans into objective evidence of permanent disability. Expert witness credibility remains critical when proving lifelong care needs to insurance adjusters and juries.",
    icon: <FaUserMd className="w-5 h-5 text-primary" />,
  },
  {
    id: "settlement-vs-lawsuit",
    title: "Settlement vs. Lawsuit",
    description:
      "Pre-suit settlement discussions involve presenting formal demand packages to commercial insurance carriers. Insurance carriers rarely offer complete compensation for permanent disabilities without active court litigation. Filing a formal lawsuit demonstrates trial readiness and forces insurers into serious negotiations.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "liability-multi-party-accidents",
    title: "Liability in Multi Party Accidents",
    description:
      "Complex highway collisions frequently involve commercial trucking carriers, multiple motorists and equipment manufacturers. Identifying all potential insurance coverage policies maximizes total financial recovery for severely injured victims. Multi-party legal actions require strategic fault allocation among corporate defendants to protect client recovery.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
];

export default function CILClaimsWorkSection({
  title = "How Catastrophic Injury Claims Work in Florida",
  subTitle = "Florida legislature made significant changes to personal injury law in 2023. These factors considerably affect all catastrophic injury cases in Tampa nowadays.",
  items = defaultItems,
}: CILClaimsWorkSectionProps) {
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
              <FaShieldAlt className="w-4 h-4 text-primary" />
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
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
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
