"use client";

import React from "react";
import Link from "next/link";
import { FaBalanceScale, FaSchool, FaGlobe, FaShieldAlt, FaFileAlt } from "react-icons/fa";

export interface JDWhatCountsSectionProps {
  topH2Title?: string;
  topParagraph?: string;
  title?: string;
  subTitle?: string;
}

export default function JDWhatCountsSection({
  topH2Title = "Facing Juvenile Criminal Charges in Tampa Florida? Get a Free Confidential Case Review",
  topParagraph = "School investigations and juvenile court cases operate through separate processes. Families should bring arrest documents and school notices to their consultation.",
  title = "What Counts as a Juvenile Offense Under Florida Law?",
  subTitle = "Florida law deems some acts of minors as delinquent acts. The nature of the charges is dependent on the circumstances.",
}: JDWhatCountsSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* TOP H2 BANNER: Facing Juvenile Criminal Charges in Tampa Florida? */}
        <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl mb-12 md:mb-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold w-fit mb-3">
                <FaFileAlt className="w-3.5 h-3.5" />
                CASE REVIEW &amp; CONSULTATION
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white leading-snug mb-3">
                {topH2Title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {topParagraph}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#a87d25] text-slate-950 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Request Free Review
              </Link>
            </div>
          </div>
        </div>

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
