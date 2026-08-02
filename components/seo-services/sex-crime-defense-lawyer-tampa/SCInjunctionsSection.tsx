"use client";

import React from "react";
import Image from "next/image";
import {
  FaBalanceScale,
  FaGavel,
  FaFileInvoice,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

export interface InjunctionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCInjunctionsSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: InjunctionItem[];
}

const defaultInjunctionItems: InjunctionItem[] = [
  {
    id: "responding-emergency-injunctions",
    icon: <FaFileInvoice className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Responding to Emergency Injunctions",
    description:
      "Florida courts issue temporary injunctions based solely on petitioner's statement. This often happens without notifying you first. McCulloch Law challenges the factual basis at every emergency hearing. Missing first court date concedes the temporary order without any contest from the defense. Fail to contest it and the petitioner gets foundation for a permanent order.",
  },
  {
    id: "contesting-permanent-hearing",
    icon: <FaGavel className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Contesting Permanent Injunction Hearing",
    description:
      "Both parties present evidence, call witnesses and cross examine testimony in court’s formal hearing. McCulloch Law prepares a specific response to each allegation using records, digital evidence and witness testimony. Permanent sexual violence injunction in Florida triggers sex offender registration consequences formally. Our defense team treats these hearings with full trial level preparation.",
  },
  {
    id: "challenging-overbroad-injunction",
    icon: <FaBalanceScale className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Challenging Vague or Overbroad Injunction",
    description:
      "Tampa courts occasionally issue injunction terms with geographic restrictions. McCulloch Law files motions to narrow any conditions extending beyond actual evidence supported. Our defense attorney files post hearing motions to narrow overbroad terms and courts often agree to narrow them. Restrictions left unchallenged become permanent constraints on your movement and your ability to work.",
  },
  {
    id: "coordinating-injunction-criminal-defense",
    icon: <FaUserShield className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Coordinating Injunction and Criminal Defense",
    description:
      "Prosecutors can use statements from an injunction hearing as evidence in your criminal trial. McCulloch Law coordinates both proceedings to prevent civil concessions from damaging criminal defense strategy. Most attorneys overlook this dual track need. This dual track requires a firm handling both simultaneously.",
  },
];

export default function SCInjunctionsSection({
  title = "Sex Crime Injunctions and Restraining Orders — How McCulloch Law Defends Your Case",
  subTitle = "A petitioner can file an injunction alongside criminal charges or separately. Each carries its own legal consequences. Our tampa defense lawyer for sex crime defends injunctions from emergency hearings to final judgment.",
  imagePath = "/images/seo-services/sex-crime-defense-lawyer-tampa/courthouse-law.png",
  items = defaultInjunctionItems,
}: SCInjunctionsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Tampa Injunction Court Hearing"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-snug">
                  Injunction Hearing Pending?
                </span>
                <span className="text-xs text-slate-300 mt-1 font-sans">
                  McCulloch Law defends sexual violence injunctions in Hillsborough County courts.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
