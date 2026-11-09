"use client";

import React from "react";
import Image from "next/image";
import { FaBalanceScale, FaGavel, FaShieldAlt, FaRunning } from "react-icons/fa";

export interface RDWhatIsRobberySectionProps {
  title?: string;
  statuteDefinition?: string;
  forceFearParagraph?: string;
  courseOfTakingParagraph?: string;
  imagePath?: string;
}

export default function RDWhatIsRobberySection({
  title = "What Is Robbery Under Florida Law?",
  statuteDefinition = 'According to Florida Statutes § 812.13(a), "Robbery" is "the taking of money or other property which may be the subject of larceny from the person or custody of another, with weapon or actual violence, assault or putting in fear, immediate or future, with intent to commit a felony or to make an unlawful disposition of the money or other property."',
  forceFearParagraph = 'The main difference between a "robbery" and a crime of "theft" is whether or not force and the use of the victim\'s fear were involved during the act. One need not hit the victim or cause physical injury, however, a victim needs only to prove there was physical force, a threat or assault or putting them in fear of bodily harm, during the alleged act.',
  courseOfTakingParagraph = 'Florida law also defines the phrase "in the course of the taking" very broadly. This includes any physical force, violence, assault or intimidation used before, during or after the property was taken in a manner which can be viewed as a continuous event. This also applies to attempted robbery and any flight after any attempted or completed attempted take. An example of attempted shoplifting turning into a robbery is when the shoplifter pushes or hits a store clerk while running out of the store.',
  imagePath = "/images/seo-services/robbery-defense-attorney-tampa/courthouse-law.png",
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

        {/* HERO BANNER WITH STATUTORY DEFINITION & COURTHOUSE IMAGE */}
        <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl mb-10 max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold w-fit">
                <FaGavel className="w-3.5 h-3.5" />
                FLORIDA STATUTES § 812.13(a)
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                Florida Statutory Definition of Robbery
              </h3>

              <div className="p-5 rounded-2xl bg-[#081524] border-l-4 border-primary text-slate-200 text-sm sm:text-base leading-relaxed italic shadow-inner">
                {statuteDefinition}
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-lg border border-slate-700/80">
              <Image
                src={imagePath}
                alt="Florida Statutes 812.13 Robbery Law Defense Tampa"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* 2 DETAILED EXPLANATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* CARD 1: FORCE & FEAR */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaShieldAlt className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Force and Fear vs. Theft
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {forceFearParagraph}
              </p>
            </div>
          </div>

          {/* CARD 2: IN THE COURSE OF THE TAKING */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaRunning className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Broad Scope: &ldquo;In the Course of the Taking&rdquo;
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {courseOfTakingParagraph}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

