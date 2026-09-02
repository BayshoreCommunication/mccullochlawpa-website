"use client";

import React from "react";
import Image from "next/image";
import { FaUserCheck, FaPhoneAlt, FaBuilding, FaAward, FaCheckCircle } from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: WhyChooseItem[];
}

const defaultWhyChooseItems: WhyChooseItem[] = [
  {
    id: "former-assistant-state-attorney",
    title: "Former Assistant State Attorney",
    description:
      "Drew McCulloch was an Assistant State Attorney in Tampa for than four years. He picked the people for juries more than 75 and he was in charge of over 100 cases to verdict. This experience means Drew McCulloch knows how the prosecutors in Hillsborough County work on a drug case. It also means he knows exactly where those cases tend to fall apart under real scrutiny.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "direct-access",
    title: "Direct Access to Drew McCulloch",
    description:
      "McCulloch Law only takes a cases at a time. Clients get to work directly with Drew McCulloch. They do not have to talk to paralegal fielding calls. That access matters most in the first 48 hours after an arrest, when early decisions carry lasting weight. Clients get a phone number that reaches their actual attorney, day or night. High volume firms built around advertising spend rarely offer that kind of direct line.",
    icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "judicial-circuit-familiarity",
    title: "Familiar With Judicial Circuit and Courts",
    description:
      "Every drug case in Tampa moves through the Thirteenth Judicial Circuit's Criminal Division. McCulloch Law knows which judges favor diversion and which prosecutors negotiate in good faith. That local knowledge covers DETRR, drug court  and Hillsborough County's pretrial intervention program. Treatment providers like ACTS, DACCO  and Tampa Crossroads come up often in these conversations.",
    icon: <FaBuilding className="w-5 h-5 text-primary" />,
  },
  {
    id: "recognition-trial-lawyers",
    title: "Recognition From National Trial Lawyers",
    description:
      "Drew McCulloch earned Super Lawyers Rising Stars recognition, reserved for a small share of attorneys statewide. The National Trial Lawyers has recognized his trial work as well. Peer review and courtroom results drive both selection processes, unlike paid advertising rankings. These distinctions come from other lawyers watching the work, case by case.",
    icon: <FaAward className="w-5 h-5 text-primary" />,
  },
];

export default function TDCWhyChooseSection({
  title = "Why Tampa Residents Choose McCulloch Law for Drug Crime Defense",
  subTitle = "When choosing tampa drug crimes lawyer, Drew McCulloch built his reputation trying cases to verdict rather than routing clients through a system.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/mcculloch.webp",
  items = defaultWhyChooseItems,
}: TDCWhyChooseSectionProps) {
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
              <FaCheckCircle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <Image
              src={imagePath}
              alt="Attorney Drew McCulloch - Tampa Drug Crimes Lawyer"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-sm font-bold text-white">Drew McCulloch, Esq.</p>
              <p className="text-xs text-slate-300">Former Assistant State Attorney in Tampa</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
