"use client";

import React from "react";
import {
  FaGavel,
  FaUserInjured,
  FaSkull,
  FaCoins,
  FaKey,
  FaTruck,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDUPenaltiesSectionProps {
  title?: string;
  subTitle?: string;
  items?: PenaltyItem[];
}

const defaultItems: PenaltyItem[] = [
  {
    id: "first-offense-dui-accident",
    title: "First Offense DUI Accident",
    description:
      "A first DUI accident charge still carries real consequences under Florida law. Fines start near five hundred dollars and rise with property damage. Jail time can reach six months even for a first time offender. Courts also order DUI school along with community service hours. A conviction stays on your record and affects sentencing in future cases.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "increased-punishment-dui-injury",
    title: "Increased Punishment for DUI Injury",
    description:
      "Florida treats DUI with injury as a more serious charge level entirely. Conviction carries a maximum one year sentence in county jail. The charge becomes third degree felony if there is serious bodily harm. Maximum prison term for such crime is five years. Prosecutors rarely offer lenient deals once injury becomes part of a case.",
    icon: <FaUserInjured className="w-5 h-5 text-primary" />,
  },
  {
    id: "dui-manslaughter-sentencing",
    title: "DUI Manslaughter Sentencing",
    description:
      "DUI manslaughter now falls under Trenton's Law, passed in 2025. This law reclassified the offense as a first degree felony statewide. Sentencing can extend to thirty years with minimum four year mandatory jail. Additionally, if you have fled the scene of an accident involving death while under the influence of drugs sentencing will be even higher. This charge demands immediate legal representation before any statement gets made.",
    icon: <FaSkull className="w-5 h-5 text-primary" />,
  },
  {
    id: "fines-restitution-property-damage",
    title: "Fines and Restitution for Property Damage",
    description:
      "Courts order restitution separately from any criminal fine in the case. Restitution covers vehicle repair costs, medical bills and lost property value. The amount depends on documented damage listed in the accident report. Unpaid restitution can extend your probation period well beyond its original term. We negotiate restitution amounts based on verified costs, not rough estimates.",
    icon: <FaCoins className="w-5 h-5 text-primary" />,
  },
  {
    id: "mandatory-ignition-interlock",
    title: "Mandatory Ignition Interlock",
    description:
      "Florida now requires ignition interlock devices for more first time offenders. This update applies especially to drivers seeking a hardship license. Installation runs several hundred dollars, plus ongoing monthly service fees. A failed breath sample on the device can extend your restriction period. We walk clients through every requirement before installation ever begins.",
    icon: <FaKey className="w-5 h-5 text-primary" />,
  },
  {
    id: "revoke-commercial-drivers-license",
    title: "Revoke Commercial Driver's License",
    description:
      "A DUI accident results in an automatic one year CDL suspension. Hauling hazardous materials at the time raises that period to three years. A second DUI offense results in a lifetime commercial license ban. Many employers suspend commercial drivers well before any court decision is reached. We move quickly to protect your commercial driving privileges throughout the case.",
    icon: <FaTruck className="w-5 h-5 text-primary" />,
  },
];

export default function TDUPenaltiesSection({
  title = "What Penalties for DUI With Property Damage or Injury in Florida",
  subTitle = "Penalties climb quickly once property damage or injury enters a DUI case. Florida law separates these outcomes into distinct sentencing categories.",
  items = defaultItems,
}: TDUPenaltiesSectionProps) {
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
              <FaGavel className="w-4 h-4 text-primary" />
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
