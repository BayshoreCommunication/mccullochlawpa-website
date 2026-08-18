"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaFileContract,
  FaUserCheck,
  FaLock,
  FaLaptopCode,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: WhyChooseItem[];
}

const defaultWhyChooseItems: WhyChooseItem[] = [
  {
    id: "pre-charge-intervention",
    icon: <FaShieldAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Pre Charge Intervention",
    description:
      "Most firms engage after charges land, once the prosecution has already set its theory. Our tampa defense lawyer for sex crime contacts the Hillsborough County State Attorney's Office before finalizing decision. However that window is narrow and closes once prosecution finalizes the charging paperwork. Pre charge advocacy has led to dismissals in Tampa cases involving clients calling immediately after the arrest.",
  },
  {
    id: "established-court-knowledge",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Established Knowledge of State Courts",
    description:
      "McCulloch Law has worked with Hillsborough County prosecutors and judges across years of active sex crime litigation. Our familiarity enhances the defense's efficiency in navigating complex procedures. We have knowledge of specific prosecutors’ specific evaluation process for evidence and arguments around it.",
  },
  {
    id: "registry-consequences-strategy",
    icon: <FaLock className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Defense Strategy For Registry Consequences",
    description:
      "Firms without focused sex crime experience treat registration as an afterthought addressed after conviction. We incorporate registry exposure into every plea decision, motion and trial strategy from day one. Avoiding a conviction matters and avoiding lifetime registration matters with equal weight.",
  },
  {
    id: "digital-forensics-expert-witness",
    icon: <FaLaptopCode className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Digital Forensics and Expert Witness",
    description:
      "Sex crime cases in Tampa increasingly turn on electronic evidence rather than testimony alone. General criminal attorneys rarely have established relationships with qualified digital forensic examiners. McCulloch Law retains forensic investigators and technical experts regularly working on Florida sex crime cases. These experts challenge the prosecution's technical conclusions rather than accepting them.",
  },
  {
    id: "strategy-built-from-actual-facts",
    icon: <FaFileContract className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Case Strategy Built From Actual Facts",
    description:
      "McCulloch Law avoids using a reused template for cases sharing a charge category. Every client has different evidence, relationship context and different vulnerabilities in the prosecution's specific approach. The defense strategy is built around actual occurrences in your case. That distinction between specificity and templates determines outcomes in Tampa sex crime courts.",
  },
];

export default function SCWhyChooseSection({
  title = "Why Tampa Residents Choose McCulloch Law for Sex Crime Defense",
  subTitle = "Certain Tampa firms address sex crime cases as they appear alongside other matters on the docket. McCulloch Law handles them as a primary practice focus.",
  imagePath = "/images/seo-services/sex-crime-defense-lawyer-tampa/mcculloch.webp",
  items = defaultWhyChooseItems,
}: SCWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaUserCheck className="w-4 h-4 text-primary" />
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
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="McCulloch Law Office Client Consultation"
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
                <span className="text-base font-bold text-white leading-snug">
                  McCulloch Law – Dedicated Sex Crime Defense
                </span>
                <span className="text-xs text-slate-300 mt-0.5">
                  Direct attorney access. Local Hillsborough courtroom experience.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="border-l-2 border-primary pl-3.5 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
