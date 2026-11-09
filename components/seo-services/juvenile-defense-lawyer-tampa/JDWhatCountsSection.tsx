"use client";

import React from "react";
import Image from "next/image";
import { FaBalanceScale, FaSchool, FaGlobe, FaShieldAlt } from "react-icons/fa";

export interface JDWhatCountsSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
}

export default function JDWhatCountsSection({
  title = "What Counts as a Juvenile Offense Under Florida Law?",
  subTitle = "Florida law deems some acts of minors as delinquent acts. The nature of the charges is dependent on the circumstances.",
  imagePath = "/images/seo-services/juvenile-defense-lawyer-tampa/courthouse-law.png",
}: JDWhatCountsSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* TOP HERO BANNER */}
        <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl mb-10 max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold w-fit">
                <FaShieldAlt className="w-3.5 h-3.5" />
                FLORIDA JUVENILE JUSTICE SYSTEM
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                Conduct That Can Lead to a Juvenile Delinquency Case
              </h3>

              <div className="p-5 rounded-2xl bg-[#081524] border-l-4 border-primary text-slate-200 text-sm sm:text-base leading-relaxed italic shadow-inner">
                Juvenile delinquency allegations refer to the violation of a law by someone under the age of 18. An accusation is quite different from an adjudication of delinquency. The behavior and the child&apos;s age will determine legal consequences. Florida laws provide guidelines for minor crimes. The state aims to correct behavior early.
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-lg border border-slate-700/80">
              <Image
                src={imagePath}
                alt="Florida Juvenile Justice Court and Law in Tampa"
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
          
          {/* CARD 1: SCHOOL INCIDENTS */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaSchool className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                Criminal Allegations Arising From School Incidents
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Threats and fights at school can result in formal criminal charges. Theft and other prohibited items also involve the police. There are very different rules for school discipline and court proceedings. The documentation of the records and identities of witnesses is still critical. A suspension does not pause the criminal investigation.
              </p>
            </div>
          </div>

          {/* CARD 2: ONLINE CONDUCT */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaGlobe className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                When Online Conduct Leads to Criminal Allegations
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Online threats and cyberbullying can violate Florida statutes. Message history and account ownership shape the available evidence. Not every school dispute constitutes a criminal offense. Legal classifications depend on facts rather than assumptions. Context changes how authorities view digital communications entirely.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
