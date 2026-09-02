"use client";

import React from "react";
import { FaShieldAlt, FaDog, FaUserSecret, FaFlask, FaBalanceScale } from "react-icons/fa";

export interface FightBackItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCFightBackSectionProps {
  title?: string;
  subTitle?: string;
  items?: FightBackItem[];
}

const defaultFightBackItems: FightBackItem[] = [
  {
    id: "constructive-possession-claims",
    title: "Constructive Possession Claims",
    description:
      "Under Florida law prosecutors can charge individuals, with drug possession even if they never actually used the drugs. For example if police discover a bag of drugs in a car that has multiple people inside all of the passengers can be considered suspects. McCulloch Law challenges constructive possession by attacking knowledge and control. Shared bedrooms, borrowed cars and roommate closets raise suspicion about drug owners.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "illegal-searches-k9",
    title: "Illegal Searches, K9 Alerts & Traffic Stops",
    description:
      "Most Tampa drug arrests occur during a stop, on I 275 or Dale Mabry Highway. Officers need sufficient cause or consent for searching a vehicle. A K9 alert can still get challenged once the stop's full timeline comes under scrutiny. McCulloch Law files motions to suppress when a search runs past the original reason for the stop. Evidence collected after an illegal search gets excluded and cases built on that evidence collapse with it.",
    icon: <FaDog className="w-5 h-5 text-primary" />,
  },
  {
    id: "confidential-informants",
    title: "Confidential Informants",
    description:
      "Tampa drug task forces rely heavily on confidential informants working off their own pending charges. These informants have every reason to overstate what they saw or heard. McCulloch Law investigates an informant's criminal history, prior deals  and motivation to influence testimony. A jury that learns about an informant's plea agreement hears their story very differently. Credibility decides plenty of drug cases in Hillsborough County courtrooms, sometimes more than the physical evidence does.",
    icon: <FaUserSecret className="w-5 h-5 text-primary" />,
  },
  {
    id: "chain-custody-lab-errors",
    title: "Chain of Custody and Crime Lab Errors",
    description:
      "Every substance seized in Tampa goes to a crime lab before trial. FDLE labs process thousands of samples a year and errors happen more often than prosecutors admit. McCulloch Law demands full chain of custody records for each item collected. Gaps in documentation, mislabeled samples or delayed testing can undercut the state's entire case. A single weight miscalculation can drop a trafficking charge down to simple possession.",
    icon: <FaFlask className="w-5 h-5 text-primary" />,
  },
];

export default function TDCFightBackSection({
  title = "How McCulloch Law Fights Back Against False Accusation of Drug Crime in Tampa",
  subTitle = "Drew McCulloch spent years inside the State Attorney's Office and knows exactly which gaps prosecutors count on defendants missing.",
  items = defaultFightBackItems,
}: TDCFightBackSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
