"use client";

import React from "react";
import {
  FaBalanceScale,
  FaUserShield,
  FaBuilding,
  FaHandsHelping,
  FaGraduationCap,
  FaFileContract,
} from "react-icons/fa";

export interface JuvenilePenaltyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDPenaltiesSectionProps {
  title?: string;
  subTitle?: string;
  items?: JuvenilePenaltyItem[];
}

const defaultPenalties: JuvenilePenaltyItem[] = [
  {
    id: "probation-supervision",
    title: "Probation Supervision and Court Ordered Conditions",
    description:
      "The court often imposes supervision and compulsory attendance at school. Minor court requirements include curfews and counselling. A child is closely supervised by the probation officer for compliance. Single violation is more severe than secondary penalties.",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "detention-residential-commitment",
    title: "Detention and Residential Commitment",
    description:
      "Harsh allegations can result in detention or commitment to a residential program. Decisions of judges rely on the strict legal risk thresholds. The state places high risk youth in secure facilities. Defense attorneys argue for community based alternatives instead.",
    icon: <FaBuilding className="w-5 h-5 text-primary" />,
  },
  {
    id: "restitution-community-service",
    title: "Restitution Community Service and Rehabilitation Programs",
    description:
      "Financial restitution is a way to alleviate harm to the community and damage of property. The treatment and support programs assist local rehabilitation of teens. Drug related offences will require them to attend counselling for drug abuse in court. They are also required to complete community service hours, giving them a safe learning environment to take responsibility.",
    icon: <FaHandsHelping className="w-5 h-5 text-primary" />,
  },
  {
    id: "education-future-opportunities",
    title: "Potential Effects on Education and Future Opportunities",
    description:
      "Sanctions have a lifelong effect on future learning objectives. Background screening is a long term barrier to employment. Juvenile adjudications may be requested on college applications. Military enlistment requires waivers for past delinquency records.",
    icon: <FaGraduationCap className="w-5 h-5 text-primary" />,
  },
  {
    id: "juvenile-records-confidentiality",
    title: "Juvenile Records Confidentiality and Future Background Checks",
    description:
      "Florida confidentiality rules govern all juvenile court records. Confidentiality does not ensure automatic record erasure later. Families need  advice for sealing specific records. Law enforcement always retains access to past criminal files.",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
  },
];

export default function JDPenaltiesSection({
  title = "What Penalties Can a Juvenile Delinquency Adjudication Carry in Tampa?",
  subTitle = "Courts may make many different orders following a delinquency finding. The precise measure of the penalties shall depend upon the gravity of the offence.",
  items = defaultPenalties,
}: JDPenaltiesSectionProps) {
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
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 5 PENALTIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
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
