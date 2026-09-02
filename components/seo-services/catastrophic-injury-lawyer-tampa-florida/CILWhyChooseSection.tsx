"use client";

import React from "react";
import Image from "next/image";
import {
  FaUserCheck,
  FaGavel,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: WhyChooseItem[];
}

const defaultItems: WhyChooseItem[] = [
  {
    id: "direct-attorney-handling",
    title: "Direct Attorney Handling Case",
    description:
      "Unlike large settlement mill firms that assign files to case managers, McCulloch Law ensures direct attorney handling. Attorney Drew McCulloch directly manages every legal strategy aspect, diagnostic review and defense negotiation. Direct legal oversight delivers clear personal communication, tailored representation and consistent client support.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "exceptional-trial-credentials",
    title: "Exceptional Trial Credentials",
    description:
      "Insurance companies evaluate law firm trial willingness when calculating settlement values during pre-suit negotiations. Attorney Drew McCulloch brings over 15 years of courtroom experience, including over 100 jury trials tried. Prosecutorial trial background provides clients with unmatched litigation leverage when facing stubborn insurance defense teams.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "selective-high-valued-caseload",
    title: "Selective High Valued Caseload",
    description:
      "High-volume personal injury firms process thousands of files simultaneously, often settling claims prematurely for reduced values. McCulloch Law intentionally restricts overall caseload numbers to dedicate extensive resources to complex catastrophic cases. Selective intake enables exhaustive forensic investigations, specialized expert retention and meticulous trial preparation.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "deep-local-legal-community",
    title: "Deep Local Legal Community",
    description:
      "Attorney Drew McCulloch is a Tampa local, having been born and raised there, and attended local schools. Attorney McCulloch serves on the Board of Directors for Hillsborough County Bar Association YLD. Mr. McCulloch has extensive knowledge of the Hillsborough county court system as well as its jury demographics due to his strong community ties.",
    icon: <FaMapMarkerAlt className="w-5 h-5 text-primary" />,
  },
];

export default function CILWhyChooseSection({
  title = "Why Tampa Accident Victims Choose McCulloch Law",
  subTitle = "People choose us as their catastrophic injury lawyer tampa florida because we handle with investigation, expert coordination and trial preparation.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/mcculloch.webp",
  items = defaultItems,
}: CILWhyChooseSectionProps) {
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
              alt="Attorney Drew McCulloch - Catastrophic Injury Lawyer Tampa Florida"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-sm font-bold text-white">Drew McCulloch, Esq.</p>
              <p className="text-xs text-slate-300">Over $2 Billion Recovered for Clients</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-5 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#0c1a29] rounded-2xl p-5 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
