"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShieldAlt, FaClock, FaUsers, FaArrowRight } from "react-icons/fa";

export interface PIWrongfulDeathSectionProps {
  title?: string;
  paragraph?: string;
  imagePath?: string;
}

export default function PIWrongfulDeathSection({
  title = "Claim Wrongful Death After Fatal Tampa Car Accidents",
  paragraph = "Florida's Wrongful Death Act allows specific surviving family members to seek financial recovery. The estate's personal representative files the lawsuit to help the surviving family. Surviving spouses and children recover money for lost companionship, guidance, and mental pain. The estate can also recover funeral costs and lost future earnings of the deceased. Florida gives families only two years from the date of death to file suit. McCulloch Law’s personal injury lawyer tampa car accidents handles these cases with the sensitivity that families deserve most. The firm also brings the aggression these insurers respect and fear most.",
  imagePath = "/images/seo-services/best-personal-injury-lawyer-tampa-car-accidents/attorney-office.png",
}: PIWrongfulDeathSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaHeart className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {paragraph}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
                <FaClock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">2-Year Statute of Limitations</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
                <FaUsers className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">For Surviving Spouses &amp; Family</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="relative w-full h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Wrongful Death Representation - McCulloch Law"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaShieldAlt className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-snug">Compassionate &amp; Aggressive Defense</h4>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">Protecting your family's financial future.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#a87d25] text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105"
              >
                <span>Free Review</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
