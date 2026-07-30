"use client";

import React from "react";
import {
  FaGavel,
  FaCalendarCheck,
  FaClipboardCheck,
  FaBan,
  FaDollarSign,
  FaShieldAlt,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
  footerNote?: React.ReactNode;
}

export interface DomesticViolencePenaltiesSectionProps {
  title?: string;
  description1?: string;
  description2?: string;
  penalties?: PenaltyItem[];
}

const defaultPenalties: PenaltyItem[] = [
  {
    id: "jail-sentences",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Jail & Prison Sentences",
    description: "A conviction can lead to significant incarceration depending on the charge.",
    bullets: [
      "Up to 1 year in county jail for a first-degree misdemeanor",
      "Up to 5 years in state prison for a third-degree felony",
      "Up to 30 years for certain first-degree felonies",
      "Strangulation, serious injury, or cases involving children often carry enhanced penalties",
    ],
  },
  {
    id: "bip-program",
    icon: <FaCalendarCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Mandatory 29-Week Batterer's Intervention Program",
    description:
      "Florida law requires every domestic violence conviction to complete a state-certified Batterer's Intervention Program.",
    bullets: [
      "29 consecutive weeks",
      "Mandatory attendance",
      "No judicial exceptions",
      "Failure to complete the program may violate probation and lead to additional penalties",
    ],
  },
  {
    id: "probation-conditions",
    icon: <FaClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Strict Probation Conditions",
    description: "Domestic violence probation commonly includes:",
    bullets: [
      "No-contact orders",
      "Probation officer reporting",
      "Substance abuse screening",
      "Travel restrictions",
    ],
    footerNote: (
      <p className="text-xs sm:text-sm text-slate-500 italic mt-3 pt-3 border-t border-slate-100">
        Even a single violation can result in probation revocation and additional jail time.
      </p>
    ),
  },
  {
    id: "firearm-ban",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Permanent Firearm Ban",
    description:
      "A qualifying domestic violence conviction permanently removes federal firearm rights under the Lautenberg Amendment.",
    footerNote: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        This prohibition affects firearm ownership, concealed carry eligibility, hunting privileges, and many law enforcement or security careers.
      </p>
    ),
  },
  {
    id: "court-costs",
    icon: <FaDollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Court Costs & Financial Penalties",
    description: "Beyond fines, defendants are responsible for:",
    bullets: [
      "Court costs",
      "Mandatory program fees",
      "Probation expenses",
      "Additional assessments ordered by the court",
    ],
    footerNote: (
      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 pt-3 border-t border-slate-100">
        Total financial obligations can exceed{" "}
        <span className="font-bold text-amber-600">$5,000</span> even for a first offense.
      </p>
    ),
  },
];

export default function DomesticViolencePenaltiesSection({
  title = "What Penalties Does a Domestic Violence Conviction Carry in Tampa?",
  description1 = "A domestic violence conviction can result in jail, probation, mandatory treatment programs, financial penalties, and permanent loss of important civil rights.",
  description2 = "These consequences often continue long after a sentence has been served.",
  penalties = defaultPenalties,
}: DomesticViolencePenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          {/* Emblem Divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          {/* Header Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            {description1}
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1 max-w-3xl">
            {description2}
          </p>
        </div>

        {/* ==================================================== */}
        {/* PENALTIES STACKED CARD LIST                          */}
        {/* ==================================================== */}
        <div className="max-w-5xl mx-auto space-y-6">
          {penalties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 lg:gap-10 relative overflow-hidden"
            >
              {/* Subtle top border hover highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* LEFT COLUMN: Icon + Title + Short Description */}
              <div className="w-full md:w-5/12 flex flex-col items-start shrink-0">
                <div className="flex items-start gap-4 mb-3">
                  {/* Circular Badge Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Expanding Gold Divider Line */}
                <div className="w-12 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                {/* Left Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* RIGHT COLUMN: Bullets or Details */}
              <div className="w-full md:w-7/12 flex flex-col justify-center md:pl-6 md:border-l md:border-slate-100">
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.footerNote && (
                  <div className={item.bullets ? "mt-2" : ""}>
                    {item.footerNote}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
