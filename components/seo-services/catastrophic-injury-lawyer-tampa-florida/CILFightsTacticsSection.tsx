"use client";

import React from "react";
import {
  FaUserMd,
  FaGavel,
  FaBuilding,
  FaCalculator,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

export interface FightItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILFightsTacticsSectionProps {
  title?: string;
  subTitle?: string;
  items?: FightItem[];
}

const defaultItems: FightItem[] = [
  {
    id: "building-case-with-experts",
    title: "Building Case With Experts",
    description:
      "McCulloch Law coordinates with board-certified medical experts, life care planners and economists immediately. Retained experts perform detailed evaluations to calculate accurate lifetime care costs and lost earnings. Comprehensive expert reports force insurance companies to acknowledge maximum financial exposure early.",
    icon: <FaUserMd className="w-5 h-5 text-primary" />,
  },
  {
    id: "trial-ready-negotiation",
    title: "Trial-Ready Negotiation",
    description:
      "Commercial insurance carriers recognize which law firms settle cheap versus firms that litigate. Attorney Drew McCulloch utilizes extensive courtroom experience to negotiate from maximum legal strength. Complete trial preparation signals to defense counsel that inadequate offers will result in courtroom trial.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "handling-multi-party-corporate-defendants",
    title: "Handling Multi-Party and Corporate Defendants",
    description:
      "Litigating against commercial logistics fleets and corporate entities involves confronting complex corporate structures. McCulloch Law identifies parent corporations, umbrella policies and third-party commercial liability policies. Uncovering all available insurance policies maximizes potential financial recovery for catastrophically injured victims.",
    icon: <FaBuilding className="w-5 h-5 text-primary" />,
  },
  {
    id: "calculating-long-term-damages",
    title: "Calculating Long Term Damages",
    description:
      "Accurate damage assessments incorporate medical inflation rates, structural home modifications and continuous care. Settlement demands structure future surgical costs, prosthetic equipment needs and specialized therapy expenses. Comprehensive financial planning prevents catastrophically injured clients from encountering uncompensated future medical bills.",
    icon: <FaCalculator className="w-5 h-5 text-primary" />,
  },
  {
    id: "taking-case-to-trial-when-necessary",
    title: "Taking Case to Trial When Necessary",
    description:
      "When insurance carriers refuse fair settlement terms, presenting claims before Hillsborough County juries becomes mandatory. Attorney Drew McCulloch has served on more than 75 juries and has tried over 100 cases. Experience in the presentation of cases to a jury is vital to obtaining the maximum jury award possible.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
];

export default function CILFightsTacticsSection({
  title = "How McCulloch Law Fights Insurance Company Tactics",
  subTitle = "Insurance companies build their strategy around volume and speed. Our catastrophic injury lawyer tampa florida build around preparation and detail.",
  items = defaultItems,
}: CILFightsTacticsSectionProps) {
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
