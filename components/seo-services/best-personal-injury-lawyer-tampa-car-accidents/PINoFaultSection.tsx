"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt, FaFileMedical, FaDollarSign, FaArrowRight } from "react-icons/fa";

export interface PINoFaultSectionProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  imagePath?: string;
}

export default function PINoFaultSection({
  title = "Florida's ‘No Fault' Insurance and PIP Coverage for Car Accidents",
  paragraph1 = "Florida requires every driver to carry ten thousand dollars in personal injury protection. This PIP coverage pays your bills first, regardless of who caused the crash. It covers eighty percent of medical costs and sixty percent of lost wages. You must see a doctor within fourteen days, or the insurer denies everything. A provider must find an emergency medical condition to unlock the full ten thousand. Without it, medical benefits cap at twenty-five hundred dollars regardless of your bills.",
  paragraph2 = "PIP runs out quickly, and it does not pay for pain, suffering, or future surgery costs. You can step outside the no‑fault system if your injury meets the serious injury threshold under Florida law. McCulloch Law reviews your medical records to prove permanent injury, significant scarring, or lasting loss of function. Once we satisfy that threshold, we pursue the at‑fault driver’s bodily injury coverage for full damages.",
  imagePath = "/images/seo-services/best-personal-injury-lawyer-tampa-car-accidents/courthouse-law.png",
}: PINoFaultSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center text-primary shrink-0 shadow-md">
                  <FaDollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    10,000 PIP Coverage Limits
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">Mandatory Florida Coverage</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {paragraph1}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center text-primary shrink-0 shadow-md">
                  <FaFileMedical className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Serious Injury Threshold Exemption
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">Full Bodily Injury Recovery</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {paragraph2}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Florida PIP Insurance Coverage"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-primary">Need Legal Help After a Tampa Crash?</h4>
                <p className="text-xs text-slate-300 font-sans mt-0.5">McCulloch Law reviews your medical files for PIP &amp; BI claims.</p>
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
