"use client";

import React from "react";
import { FaBalanceScale, FaGavel, FaShieldAlt } from "react-icons/fa";

export interface RDWhatIsRobberySectionProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

export default function RDWhatIsRobberySection({
  title = "What Is Robbery Under Florida Law?",
  paragraph1 = 'According to Florida Statutes § 812.13(a), "Robbery" is "the taking of money or other property which may be the subject of larceny from the person or custody of another, with weapon or actual violence, assault or putting in fear, immediate or future, with intent to commit a felony or to make an unlawful disposition of the money or other property."',
  paragraph2 = 'The main difference between a "robbery" and a crime of "theft" is whether or not force and the use of the victim\'s fear were involved during the act. One need not hit the victim or cause physical injury, however, a victim needs only to prove there was physical force, a threat or assault or putting them in fear of bodily harm, during the alleged act.',
  paragraph3 = 'Florida law also defines the phrase "in the course of the taking" very broadly. This includes any physical force, violence, assault or intimidation used before, during or after the property was taken in a manner which can be viewed as a continuous event. This also applies to attempted robbery and any flight after any attempted or completed attempted take. An example of attempted shoplifting turning into a robbery is when the shoplifter pushes or hits a store clerk while running out of the store.',
}: RDWhatIsRobberySectionProps) {
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
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <FaGavel className="w-5 h-5" />
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph1}
              </p>
            </div>
          </div>

          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <FaShieldAlt className="w-5 h-5" />
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph2}
              </p>
            </div>
          </div>

          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <FaBalanceScale className="w-5 h-5" />
              </div>
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
