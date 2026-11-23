"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserShield,
  FaGraduationCap,
  FaPhoneAlt,
  FaBalanceScale,
  FaShieldAlt,
} from "react-icons/fa";

export interface JuvenileWhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: JuvenileWhyChooseItem[];
}

const defaultWhyChooseItems: JuvenileWhyChooseItem[] = [
  {
    id: "former-prosecutor-courtroom",
    title: "Former Prosecutor With Extensive Florida Courtroom Experience",
    description:
      "Drew McCulloch served previously as a Tampa prosecutor. He brings vast courtroom experience to defense work. He handled thousands of criminal matters since 2010. This background reveals exactly how the state builds cases.",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "legal-education-admissions",
    title: "Florida Legal Education and Court Admissions",
    description:
      "Drew earned his J D from UF in 2010. He completed rigorous trial training programs successfully. He maintains active state and federal court admissions. Strong educational foundations support his aggressive defense process.",
    icon: <FaGraduationCap className="w-5 h-5 text-primary" />,
  },
  {
    id: "direct-communication-availability",
    title: "Direct Communication and 24/7 Availability",
    description:
      "Clients reach the firm around the clock easily. Urgent concerns always receive immediate professional attention. Arrests happen late at night and on weekends. You will never face a crisis completely alone.",
    icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "case-facts-defense-approach",
    title: "A Defense Approach Based on the Facts of Each Case",
    description:
      "Every defense strategy matches unique case facts perfectly. Strategic  preparation maximizes favorable outcomes for every minor. We reject lazy cookie cutter defense methods entirely. Your child deserves individualized legal attention and respect.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
];

export default function JDWhyChooseSection({
  title = "Why Choose Our Juvenile Defense Firm in Tampa?",
  subTitle = "Your choice of legal representation matters deeply. We bring extensive courtroom knowledge to your child defense.",
  imagePath = "/images/seo-services/juvenile-defense-lawyer-tampa/experienced-tampa-juvenile-defense-lawyer-mcculloch.webp",
  items = defaultWhyChooseItems,
}: JDWhyChooseSectionProps) {
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
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* MAIN CONTENT: 2-COLUMN LAYOUT (IMAGE & 4 ITEMS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* IMAGE COLUMN */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 flex flex-col justify-end">
            <Image
              src={imagePath}
              alt="Experienced Tampa juvenile defense lawyer Drew McCulloch offering dedicated criminal defense for minors"
              title="Experienced Tampa Juvenile Defense Lawyer McCulloch Law"
              data-description="Former state prosecutor Drew McCulloch provides comprehensive juvenile defense representation across Tampa, Hillsborough County, and Florida juvenile courts."
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="relative z-10 p-6 bg-[#081524]/90 backdrop-blur-md border-t border-primary/30 m-4 rounded-2xl text-center">
              <span className="text-base font-bold text-white block">Drew McCulloch</span>
              <span className="text-xs text-primary font-medium">McCulloch Law, P.A. | Tampa, FL</span>
            </div>
          </div>

          {/* 4 ITEMS COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-2.5">
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

      </div>
    </section>
  );
}
