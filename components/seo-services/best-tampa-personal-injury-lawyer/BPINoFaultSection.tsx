"use client";

import React from "react";
import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaFileContract,
  FaUserNurse,
  FaBalanceScale,
  FaCarCrash,
} from "react-icons/fa";

export interface NoFaultItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPINoFaultSectionProps {
  title?: string;
  subTitle?: string;
  items?: NoFaultItem[];
}

const defaultItems: NoFaultItem[] = [
  {
    id: "pip-coverage-florida",
    title: "Personal Injury Protection Coverage in Florida",
    description:
      "Florida requires all vehicle drivers to maintain Personal Injury Protection coverage on policies. PIP pays initial medical costs and lost earnings regardless of who caused crashes, as governed by Florida Statute § 627.736. This coverage pays 80% of necessary medical bills up to policy coverage caps. Claimants must receive formal medical evaluation within 14 days following motor vehicle collisions to trigger this coverage.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "10k-pip-limit-gaps",
    title: "The $10,000 PIP Limit and Its Gaps in Serious Injuries",
    description:
      "Basic PIP policies cap total available medical benefits at ten thousand dollars maximum. Severe crash injuries quickly surpass this modest coverage amount during initial emergency hospital stays at facilities like Tampa General. Medical treatment without a diagnosed emergency medical condition caps PIP at twenty five hundred dollars. You need additional legal avenues to recover unpaid medical bills and lost earnings.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "serious-injury-threshold",
    title: "Florida's Serious Injury Threshold, Explained",
    description:
      "Under Florida Statute § 627.737, Florida law permits personal injury lawsuits against at-fault drivers only under specific severe conditions. Your injuries must cause permanent bodily harm, significant scarring  or loss of bodily function. Meeting this legal threshold opens doors to seek non economic damages for pain and suffering. Our attorneys review medical records thoroughly to prove your injury meets the statutory threshold.",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
  },
  {
    id: "stepping-outside-no-fault",
    title: "Stepping Outside No Fault to Sue the At-Fault Driver",
    description:
      "Exceeding PIP policy caps allows you to file personal injury claims against negligent drivers. You can demand full reimbursement for total medical bills and lost future income. This legal step enables recovery for physical suffering and emotional distress caused by crashes. We build strong negligence claims to pursue complete compensation from at-fault driver policies.",
    icon: <FaUserNurse className="w-5 h-5 text-primary" />,
  },
  {
    id: "comparative-negligence-effect",
    title: "Comparative Negligence and Its Effect on Your Payout",
    description:
      "Florida applies a modified comparative fault rule under Florida Statute § 768.81 that affects your financial recovery amount. If you are more than 50% responsible, state law bars financial recovery entirely. Being 50% or less at fault reduces your overall court award proportionally. We work hard to minimize fault allegations made against you by insurance adjusters.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "uninsured-underinsured-motorist",
    title: "Uninsured and Underinsured Motorist Claims",
    description:
      "Many Florida drivers operate vehicles without adequate bodily injury liability insurance coverage. Uninsured motorist policies step in to pay your damages when reckless drivers lack insurance. We analyze your auto insurance policy to identify every available source of coverage. Our firm manages uninsured motorist claims to secure full recovery for your losses.",
    icon: <FaCarCrash className="w-5 h-5 text-primary" />,
  },
];

export default function BPINoFaultSection({
  title = "Florida's No Fault Insurance Rules and When You Can Sue for More",
  subTitle = "Florida's automobile insurance rules differ from the liability system used in many other states.",
  items = defaultItems,
}: BPINoFaultSectionProps) {
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
