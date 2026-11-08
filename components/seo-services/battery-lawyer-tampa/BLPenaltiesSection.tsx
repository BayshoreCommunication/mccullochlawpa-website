"use client";

import React from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHeartBroken,
  FaLock,
  FaUserShield,
  FaBan,
  FaVoteYea,
  FaChild,
  FaBriefcase,
  FaFileArchive,
  FaHome,
  FaClock,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BLPenaltiesSectionProps {
  title?: string;
  items?: PenaltyItem[];
}

const defaultPenalties: PenaltyItem[] = [
  {
    id: "simple-battery-penalty",
    title: "Simple Battery (Misdemeanor Battery)",
    description:
      "Under Florida Statutes § 784.03, misdemeanor battery carries up to one year in county jail, 12 months of probation and up to a $1,000 fine.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "felony-battery-penalty",
    title: "Felony Battery",
    description:
      "A third degree felony under Florida Statutes § 784.041 carries up to five years in state prison, five years of probation and up to a $5,000 fine.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "aggravated-battery-penalty",
    title: "Aggravated Battery",
    description:
      "Aggravated battery under Florida Statutes § 784.045 is a second degree felony punishable by up to 15 years in state prison, 15 years of probation and up to a $10,000 fine. If a firearm was discharged, Florida's 10-20-Life statute (§ 775.087) may impose mandatory minimum prison terms of 10, 20 or 25 years to life.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "domestic-battery-penalty",
    title: "Domestic Battery",
    description:
      "Requires a mandatory minimum of 26 weeks in a Batterers' Intervention Program (BIP), a minimum of five days in county jail if bodily injury occurred (§ 741.283) and permanent loss of firearm rights under federal law (18 U.S.C. § 922(g)(9)).",
    icon: <FaHeartBroken className="w-5 h-5 text-primary" />,
  },
  {
    id: "sexual-battery-penalty",
    title: "Sexual Battery",
    description:
      "Depending on the degree and circumstances (§ 794.011), penalties range from a second degree felony (up to 15 years) to a capital or life felony (life without parole), alongside mandatory lifetime sex offender registration.",
    icon: <FaLock className="w-5 h-5 text-primary" />,
  },
  {
    id: "protected-person-penalty",
    title: "Battery of a Protected Person",
    description:
      "Battery on law enforcement, emergency medical personnel or other protected officers under § 784.07 is reclassified to the next higher offense category (e.g., misdemeanor battery becomes a third degree felony, aggravated battery becomes a first degree felony with mandatory minimum prison).",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "firearm-ban",
    title: "Federal Firearm Ban",
    description:
      "A conviction for misdemeanor domestic violence or any felony triggers a federal firearm prohibition under 18 U.S.C. § 922(g).",
    icon: <FaBan className="w-5 h-5 text-primary" />,
  },
  {
    id: "civil-rights",
    title: "Loss of Civil Rights",
    description:
      "A felony conviction in Florida results in the loss of your right to vote, hold public office and serve on a jury until civil rights are restored.",
    icon: <FaVoteYea className="w-5 h-5 text-primary" />,
  },
  {
    id: "child-custody",
    title: "Limiting Child Custody",
    description:
      "Family court judges consider battery and domestic violence convictions when making child custody and timesharing determinations under Florida Statutes § 61.13.",
    icon: <FaChild className="w-5 h-5 text-primary" />,
  },
  {
    id: "employment-restrictions",
    title: "Employment Restrictions",
    description:
      "A battery conviction appears on background checks and can bar you from employment in healthcare, education, law enforcement, security and professional licensing boards.",
    icon: <FaBriefcase className="w-5 h-5 text-primary" />,
  },
  {
    id: "seal-expunge-ban",
    title: "Seal or Expunge Ban",
    description:
      "Under Florida Statutes § 943.0584, certain battery convictions—particularly domestic battery—are statutorily ineligible for court-ordered sealing or expungement, even if adjudication was withheld.",
    icon: <FaFileArchive className="w-5 h-5 text-primary" />,
  },
  {
    id: "residency-restrictions",
    title: "Residency Restrictions",
    description:
      "Injunctions and sexual battery convictions can impose strict geographic residency limits prohibiting you from living near schools, parks or shared family homes.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "lifetime-supervision",
    title: "Lifetime Supervision",
    description:
      "Certain aggravated and sexual battery offenses qualify for sex offender probation, electronic monitoring or lifetime supervision requirements.",
    icon: <FaClock className="w-5 h-5 text-primary" />,
  },
];

export default function BLPenaltiesSection({
  title = "What Penalties and Consequences Does Battery Conviction Have?",
  items = defaultPenalties,
}: BLPenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaGavel className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* PENALTIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 2 ? "md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white via-white to-amber-500/5" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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

