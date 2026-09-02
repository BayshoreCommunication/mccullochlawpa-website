"use client";

import React from "react";
import {
  FaSearch,
  FaFileContract,
  FaEnvelopeOpenText,
  FaGavel,
  FaUserMd,
  FaShieldAlt,
} from "react-icons/fa";

export interface LowballItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPILowballSectionProps {
  title?: string;
  subTitle?: string;
  items?: LowballItem[];
}

const defaultItems: LowballItem[] = [
  {
    id: "spotting-lowball-offer",
    title: "Spotting Lowball Offer Before Signing",
    description:
      "Insurers send quick settlement offers and it barely cover initial emergency room bills alone. These low offers ignore future medical needs, ongoing physical pain and lost earning capacity completely. We analyze every settlement proposal against your actual long term financial expenses to catch lowball offers. Our firm prevents clients from accepting unfair settlements that leave unpaid bills.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "countering-adjuster-documentation",
    title: "Countering Adjuster With Documentation",
    description:
      "Adjusters often claim physical injuries were preexisting or treatment was medically unnecessary. We counter these claims by presenting objective diagnostic imaging tests and physician treatment plans. Concrete medical documentation disproves adjuster arguments and forces reevaluations of claim values. Detailed factual evidence keeps pressure on insurance companies to make fair offers.",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
  },
  {
    id: "sending-demand-letter-evidence",
    title: "Sending Demand Letter With Evidence",
    description:
      "Our attorneys prepare comprehensive demand letters outlining complete liability facts and total money losses. We include itemized medical bills, wage loss documentation and expert opinion statements inside packages. Clear demand packages demonstrate our complete trial readiness to insurance adjusters handling your claim. Well documented demands force insurance carriers to take your financial recovery demands seriously.",
    icon: <FaEnvelopeOpenText className="w-5 h-5 text-primary" />,
  },
  {
    id: "advance-litigation-disagree",
    title: "Advance Litigation When Insurers Disagree",
    description:
      "When insurance companies refuse reasonable settlement terms, we immediately file formal civil lawsuits with the 13th Judicial Circuit. Taking your claim to litigation moves the case into Hillsborough County circuit courts. Court filings force insurance carriers to hire defense counsel and incur defense litigation expenses. Moving forward with formal litigation shows insurers we will fight for full value.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "working-with-medical-experts",
    title: "Working With Medical Experts",
    description:
      "We collaborate with orthopedic surgeons, neurologists and life care planners to prove future losses. Expert medical witnesses detail necessary surgeries, permanent physical restrictions and lifetime medical costs. Medical testimony bridges gaps between current injuries and lifetime financial requirements for severe claims. Expert documentation forces insurance companies to calculate settlement offers based on actual data.",
    icon: <FaUserMd className="w-5 h-5 text-primary" />,
  },
];

export default function BPILowballSection({
  title = "How McCulloch Law Handles Lowball Personal Injury Settlements",
  subTitle = "McCulloch Law rejects insurance offers undervaluing an injury victim's true financial damages. The firm pushes back with medical records, wage loss data and expert opinions.",
  items = defaultItems,
}: BPILowballSectionProps) {
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
