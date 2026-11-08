"use client";

import React from "react";
import { FaBalanceScale, FaGavel, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";

export interface BLWhatCountsSectionProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

export default function BLWhatCountsSection({
  title = "What Counts as Battery Charges Under Florida Law?",
  paragraph1 = "Under Florida Statutes § 784.03, a battery is an assault. The legal definition of battery in Florida state law is any intentional touching or striking of another person against that person's will or the intentional infliction of bodily harm. A push, slap, punch or other unwanted physical contact can be grounds for battery depending on the facts of the situation, like it was when you accidentally bumped into someone at a crowded party versus when you punch someone in the face during a fight.",
  paragraph2 = "Most cases of battery in Florida will be charged as a first degree misdemeanor battery under the provisions of § 784.03. If you are convicted of a second or subsequent battery, the charge can be enhanced to a third degree felony if you have a qualifying prior conviction of battery, felony battery, aggravated battery or resisting arrest with violence under § 843.01.",
  paragraph3 = "Most assault attorneys handle cases involving accusations of an intentional, unlawful threat of immediate violence accompanied by an apparent ability to commit the threat and a reasonable fear of imminent violence.",
}: BLWhatCountsSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 3 CONTENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaShieldAlt className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Statutory Definition &amp; Unwanted Contact
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph1}
              </p>
            </div>
          </div>

          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaGavel className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Misdemeanor to Felony Enhancements
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph2}
              </p>
            </div>
          </div>

          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaExclamationTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Unlawful Threat vs. Physical Contact
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph3}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

