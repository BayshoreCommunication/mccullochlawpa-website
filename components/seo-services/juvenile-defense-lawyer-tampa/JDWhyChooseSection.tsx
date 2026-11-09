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
  FaAward,
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
  imagePath = "/images/seo-services/juvenile-defense-lawyer-tampa/mcculloch.webp",
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

        {/* TOP PROFILE & CREDENTIALS CARD */}
        <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl mb-12 max-w-6xl mx-auto overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-primary/40 bg-slate-900">
              <Image
                src={imagePath}
                alt="Drew McCulloch - Former Prosecutor & Tampa Juvenile Defense Lawyer"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a29] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#081524]/90 backdrop-blur-md border border-primary/30 text-center">
                <span className="text-sm font-bold text-white block">Drew McCulloch</span>
                <span className="text-xs text-primary font-medium">Managing Attorney | Former State Prosecutor</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold w-fit">
                <FaAward className="w-3.5 h-3.5" />
                DEDICATED JUVENILE DEFENSE IN TAMPA
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Protecting Your Child’s Rights and Future with Former Prosecutorial Insight
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At McCulloch Law, P.A., our team brings firsthand knowledge of the Florida court system and prosecutor strategies to every juvenile case. We work urgently to explore diversion opportunities, challenge improper police conduct, prevent direct file transfers to adult court, and keep your child&apos;s record clean.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center gap-2.5 bg-primary hover:bg-[#a87d25] text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>Call (813) 444-2817</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-all text-sm"
                >
                  <span>Free Case Review</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 4 REASONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
