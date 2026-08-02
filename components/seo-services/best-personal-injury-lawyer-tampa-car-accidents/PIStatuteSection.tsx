"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaExclamationTriangle, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export interface PIStatuteSectionProps {
  title?: string;
  paragraph?: string;
  imagePath?: string;
}

export default function PIStatuteSection({
  title = "Tampa's Statute of Limitations for Car Accident Lawsuits",
  paragraph = "Florida reduced the four-year injury claim filing deadline to two. The date of your Tampa car accident is when that two-year clock begins. If you miss that deadline, Florida courts will automatically dismiss your case. According to a different Florida statute, property damage claims still have a four-year window. Claims for wrongful death have their own two-year clock, starting on the date of death. Regardless of the outcome of negotiations, filing an insurance claim never delays this deadline. From the moment you become a client, McCulloch Law keeps track of every deadline.",
  imagePath = "/images/seo-services/best-personal-injury-lawyer-tampa-car-accidents/evidence-folder.png",
}: PIStatuteSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaClock className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {paragraph}
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
                <FaExclamationTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Strict 2-Year Deadline</h4>
                <p className="text-xs text-slate-600 font-sans mt-0.5">
                  Filing an insurance claim does NOT pause the 2-year statute clock. Act now to protect your legal claim.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="relative w-full h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Tampa Car Accident Deadline - McCulloch Law"
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
                  <h4 className="text-base font-bold text-white leading-snug">Don't Let Your Deadline Expire</h4>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">McCulloch Law tracks every legal deadline for you.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#a87d25] text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105"
              >
                <span>Call Today</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
