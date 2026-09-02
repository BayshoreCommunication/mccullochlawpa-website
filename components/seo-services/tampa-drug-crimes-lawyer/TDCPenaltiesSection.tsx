"use client";

import React from "react";
import { FaGavel, FaExclamationTriangle, FaBalanceScale, FaPassport } from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCPenaltiesSectionProps {
  title?: string;
  subTitle?: string;
  items?: PenaltyItem[];
}

const defaultPenaltyItems: PenaltyItem[] = [
  {
    id: "misdemeanor-felony-penalties",
    title: "Misdemeanor and Felony Penalties",
    description:
      "A single gram above permitted limit can change a misdemeanor into a felony. Having than 20 grams of cannabis is still a first degree misdemeanor. This charge can result in a sentence of one year, in jail and a $1,000 fine. It also results in six month license suspension throughout Florida. Most of the time a charge of 893.13 is considered a crime a third degree felony. But if you have ten grams or more of a Schedule I substance that is a serious crime it becomes a first degree felony. Vape cartridges and THC wax carry felony exposure at any weight at all.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "mandatory-minimums",
    title: "Mandatory Minimums",
    description:
      "A trafficking conviction can lock in years of prison a judge cannot undo. Statute of Florida 893.135 sets mandatory minimum prison terms for every trafficking conviction. A Hillsborough County circuit judge has zero power to waive this minimum. Cocaine trafficking starts at three years and climbs toward a life sentence. Fentanyl and heroin trafficking start even lower, at just four grams.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "drug-court-alternative",
    title: "Drug Court Alternative to Conviction",
    description:
      "Completing treatment through Hillsborough's Drug Court can erase your charges entirely. Judge Denise Pomponio oversees this program from the Annex Courthouse. First and second time offenders can enter Drug Pretrial Intervention, known locally as DPTI. Successful completion ends with the State Attorney dropping every charge. Eligibility favors possession cases, while trafficking and select substances fall outside the program.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "immigration-consequences",
    title: "Immigration Consequences for Non-Citizens",
    description:
      "A single conviction can end a green card holder's life in Tampa. Federal law makes almost every drug conviction a deportable offense immediately. One narrow exception protects a single 30 gram marijuana possession case only. Hillsborough County removal cases move to the Orlando Immigration Court for hearings. A withheld adjudication in Tampa still constitutes a federal conviction. Under federal law trafficking level charges are frequently classified as aggravated felonies. It eliminates the majority of available options for relief.",
    icon: <FaPassport className="w-5 h-5 text-primary" />,
  },
];

export default function TDCPenaltiesSection({
  title = "What Penalties Does a Drug Conviction Carry in Tampa?",
  subTitle = "Felony drug sentencing in Tampa is handled by Hillsborough's Criminal Division. This division is led by Judge Michael Scionti.",
  items = defaultPenaltyItems,
}: TDCPenaltiesSectionProps) {
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
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
