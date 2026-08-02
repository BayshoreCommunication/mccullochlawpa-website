"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaSearch,
  FaFileInvoice,
  FaShieldAlt,
} from "react-icons/fa";

export interface InvestigateItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FDInvestigateSectionProps {
  title?: string;
  subTitle?: string;
  items?: InvestigateItem[];
}

const defaultInvestigateItems: InvestigateItem[] = [
  {
    number: "01",
    id: "investigators-contact-you",
    icon: <FaPhoneAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "If Investigators Contact You",
    description:
      "When law enforcement reaches out to you it often feels urgent and intimidating. Detectives might request a statement to clarify certain details but anything you say in those early moments can become evidence later. You should consult with a fraud defense lawyer Tampa before answering any questions. Securing legal counsel ensures you do not provide information that could be twisted to support an accusation.",
  },
  {
    number: "02",
    id: "search-warrants-seized-records",
    icon: <FaSearch className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Search Warrants and Seized Records",
    description:
      "Police often use search warrants in fraud investigations to collect items such as computers, bank statements or business records. These warrants must be specific and follow strict legal standards. We carefully review every warrant to ensure the police stayed within the required boundaries. If investigators overstepped their authority or seized items outside the allowed scope there may be grounds to challenge that evidence.",
  },
  {
    number: "03",
    id: "after-charges-filed",
    icon: <FaFileInvoice className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "After Charges Are Filed",
    description:
      "The formal filing of charges marks the transition from investigation to active litigation. The case moves to an arraignment which begins a strict timeline of court dates and deadlines. Keeping up with these requirements is essential for a strong defense. Having a fraud defense lawyer Tampa by your side from the start helps you stay organized and prepared so you can handle the court process without falling behind.",
  },
];

export default function FDInvestigateSection({
  title = "What Happens When Tampa Police Investigate a Fraud Allegation",
  subTitle = "A fraud investigation will seldom begin with an arrest. Typically, detectives collect documents and interview witnesses. This may happen in weeks or months prior to charges being filed.",
  items = defaultInvestigateItems,
}: FDInvestigateSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
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

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <div className="flex flex-col pt-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Phase {item.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

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
