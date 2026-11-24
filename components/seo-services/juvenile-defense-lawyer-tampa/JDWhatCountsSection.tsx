"use client";

import React from "react";
import { FaBalanceScale, FaSchool, FaGlobe, FaShieldAlt } from "react-icons/fa";

export interface JDWhatCountsSectionProps {
  title?: string;
  subTitle?: string;
}

export default function JDWhatCountsSection({
  title = "What Counts as a Juvenile Offense Under Florida Law?",
  subTitle = "Florida law deems some acts of minors as delinquent acts. The nature of the charges is dependent on the circumstances.",
}: JDWhatCountsSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        {/* SECTION HEADER: What Counts as a Juvenile Offense Under Florida Law? */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
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

        {/* 3 H3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* H3 CARD 1: Conduct That Can Lead to a Juvenile Delinquency Case */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaShieldAlt className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                Conduct That Can Lead to a Juvenile Delinquency Case
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Juvenile delinquency allegations refer to the violation of a law by someone under the age of 18. An accusation is quite different from an adjudication of delinquency. The behavior and the child&apos;s age will determine legal consequences. Florida laws provide guidelines for minor crimes. The state aims to correct behavior early.
              </p>
            </div>
          </div>

          {/* H3 CARD 2: Criminal Allegations Arising From School Incidents */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaSchool className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                Criminal Allegations Arising From School Incidents
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Threats and fights at school can result in formal criminal charges. Theft and other prohibited items also involve the police. There are very different rules for school discipline and court proceedings. The documentation of the records and identities of witnesses is still critical. A suspension does not pause the criminal investigation.
              </p>
            </div>
          </div>

          {/* H3 CARD 3: When Online Conduct Leads to Criminal Allegations */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                <FaGlobe className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
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
