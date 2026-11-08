"use client";

import React from "react";
import {
  FaGavel,
  FaBriefcase,
  FaHome,
  FaPassport,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ALPenaltiesSectionProps {
  title?: string;
  subTitle?: string;
  items?: PenaltyItem[];
}

const defaultPenaltyItems: PenaltyItem[] = [
  {
    id: "imprisonment-fines",
    title: "Imprisonment and Fines",
    description:
      "For Simple Assault the punishment can be up to 60 days in the county jail, a fine of no more than $500 and court costs. Probation can be possible but a first time charge may not be dismissed.\n\nFor Aggravated Assault the punishment can be up to five years in prison and a fine of no more than $5,000 with other potential sentencing guidelines. It depends on additional facts such as a firearm allegation. The court considers the applicable statutes based on the charge and available facts.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "employment-licensing",
    title: "Employment and Professional Licensing",
    description:
      "Many employers will review a job applicant's criminal history before making a hiring decision and a criminal record can show up on a background check years after the arrest. In addition, licensing authorities in professions like healthcare, education and finance may use an assault conviction as a reason to deny, suspend or discipline an applicant.",
    icon: <FaBriefcase className="w-5 h-5 text-primary" />,
  },
  {
    id: "housing-education",
    title: "Housing and Education",
    description:
      "Landlords, educational establishments and certain support schemes may consider the fact of a criminal record in their recruitment decision. A conviction will not automatically disqualify you. But it gives the decision makers flexibility that they would not have had otherwise and depends on the specific policy of that organisation.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "immigration-concerns",
    title: "Immigration Concerns",
    description:
      "Noncitizens face specific perils that a criminal defense cannot resolve. A conviction for an assault may affect your visa, your green card or your removal case. So you should have immigration counsel work with your criminal defense attorney.",
    icon: <FaPassport className="w-5 h-5 text-primary" />,
  },
  {
    id: "future-criminal-cases",
    title: "Future Criminal Cases",
    description:
      "A prior assault conviction follows a defendant into any later case. Florida’s sentencing guidelines score prior offenses and a judge weighing bond, probation or a plea offer in a future matter will see this record on file.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
];

export default function ALPenaltiesSection({
  title = "What Penalties Does an Assault Conviction Carry in Tampa?",
  subTitle = "Sentence for assault will vary depending on if it is a misdemeanor or felony offense. The case itself can make a difference in the sentence and so can the statutes regarding sentencing for assault.",
  items = defaultPenaltyItems,
}: ALPenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaGavel className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* PENALTY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-amber-500/5" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

