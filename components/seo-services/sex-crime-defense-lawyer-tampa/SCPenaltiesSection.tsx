"use client";

import React from "react";
import {
  FaGavel,
  FaCalendarCheck,
  FaClipboardCheck,
  FaBan,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCPenaltiesSectionProps {
  title?: string;
  description1?: string;
  description2?: string;
  penalties?: PenaltyItem[];
}

const defaultPenalties: PenaltyItem[] = [
  {
    id: "incarceration",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Incarceration",
    description:
      "Florida classifies sex offenses across multiple tiers and each requires different custody exposure. Second degree misdemeanor carries maximum of 60 days in county jail and $500 fine. Although it is lowest tier the criminal record is permanent and publicly searchable. In contrast first degree misdemeanor leads to one year in county jail and $1000 fines. Repeat misdemeanor convictions can trigger felony changes with increasing penalties.",
  },
  {
    id: "mandatory-registration",
    icon: <FaCalendarCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Mandatory Registration",
    description:
      "Most sex crime convictions in Florida require registration under Florida Statute § 943.0435. This includes some misdemeanor offenses. Registered offenders must appear in person at the Hillsborough County Sheriff's Office to fulfill their reporting cycle. Reporting frequency ranges from annually to every 90 days. This frequency depends on specific offense classification. Failing to comply is itself a third degree felony.",
  },
  {
    id: "probation",
    icon: <FaClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Probation",
    description:
      "Sex crime probation in Florida is not standard supervised release. Conditions include GPS monitoring, mandatory polygraph testing and enrollment in sex offender treatment programs. Hillsborough County courts impose computer and internet restrictions as standard probation conditions. One violation sends you back to serve remainder of your original sentence without new trial.",
  },
  {
    id: "civil-commitment",
    icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Civil Commitment",
    description:
      "Florida's Jimmy Ryce Act allows the state to petition for civil commitment after a prison sentence ends. The petition argues you remain a public danger and require continued confinement in a treatment facility. It is technically civil. Yet it functions as continued imprisonment with no fixed release date attached.",
  },
  {
    id: "strict-supervision",
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Strict Supervision",
    description:
      "Florida's supervision system gives probation officers extensive control over a registrant's life. They conduct unannounced home and workplace checks. They can even cite violations for minor infractions. Supervision conditions govern your living place, work, travel and technology uses. These conditions can last for decades after release in serious felonies.",
  },
  {
    id: "third-degree-felony",
    icon: <FaExclamationTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Third Degree Felony",
    description:
      "In Florida maximum penalty for third degree felony is five years in state prison and up to $5,000 fines. Failure to register, certain lewd charges and unlawful sexual activity with specific minors fall here. A prior conviction can elevate third degree charge to second degree. The Florida Criminal Punishment Code scoresheet influences the judge's sentence.",
  },
  {
    id: "second-degree-felony",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Second Degree Felony",
    description:
      "Maximum fine for second degree felony is $10,000. Along with it 15 years in Florida prison. Sexual battery without aggravating factors and lewd and lascivious battery commonly fall within this tier. Florida's Prison Releasee Reoffender law can mandate the full 15 year maximum for qualifying defendants.",
  },
  {
    id: "first-degree-felony",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "First Degree Felony",
    description:
      "First degree felony is serious compare than second and third felony. Every single felony count requires $10,000 fine and 30 years in prison. Two convictions are common at this level. One is aggravated sexual battery and other is sex trafficking. Habitual felony offender status pushes available sentencing toward life imprisonment within this classification.",
  },
  {
    id: "life-capital-felony",
    icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Life or Capital Felony",
    description:
      "Life felony in Florida carries mandatory life imprisonment with no parole eligibility in most scenarios. Capital sexual battery involving victims under 12 results in a mandatory life sentence without parole. Florida can not apply death penalty for non homicide sex offenses following Kennedy v. Louisiana.",
  },
];

export default function SCPenaltiesSection({
  title = "What Penalties Does a Sex Crime Conviction Carry in Tampa?",
  description1 = "A sex crime conviction in Tampa produces interlocking stacked consequences and continues long after you finish any prison sentence.",
  description2 = "",
  penalties = defaultPenalties,
}: SCPenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {description1}
          </p>
          {description2 && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1 max-w-3xl font-sans">
              {description2}
            </p>
          )}
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {penalties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 lg:gap-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-full flex flex-col items-start shrink-0">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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
