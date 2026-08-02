"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaCalendarAlt, FaShieldAlt, FaSearch, FaUserShield, FaUsers, FaBalanceScale } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";

export interface HeroSectionProps {
  /** Next.js image path for the hero background */
  bgImagePath?: string;
  /** Next.js image path for the person image on the right */
  personImagePath?: string;
  /** Main heading line 1 */
  titleLine1?: string;
  /** Main heading line 2 */
  titleLine2?: string;
  /** Highlight subtitle / headline in primary gold color */
  highlightTitle?: string;
  /** Paragraph 1 text */
  paragraph1?: string;
  /** Paragraph 2 text or ReactNode */
  paragraph2?: React.ReactNode;
  /** Phone number string */
  phoneNumber?: string;
  /** Phone call href link */
  phoneCallHref?: string;
  /** Consultation button href link */
  consultationHref?: string;
  /** Consultation button text */
  consultationText?: string;
}

export default function DomesticViolenceHero({
  bgImagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/hero-bg.png",
  personImagePath = "/images/hero/Attorney.png",
  titleLine1 = "Tampa Domestic Violence Defense Lawyer —",
  titleLine2 = "",
  highlightTitle = "Fight Against False Allegation and Protect Your Future",
  paragraph1 = "Explaining what really happens after being charged with domestic violence is never enough. Local prosecutors rarely drop charges without early legal pressure applied and they do not wait for you to find representation. McCulloch Law is your domestic violence defense lawyer tampa, and we apply that pressure from day one. We identify every gap in affidavit inconsistencies, missing body cam footage and witness credibility to use in your defense and protect your reputation.",
  paragraph2,
  phoneNumber = "(813) 444-2817",
  phoneCallHref = "tel:8134442817",
  consultationHref = "/contact",
  consultationText = "Schedule a Free Consultation",
}: HeroSectionProps) {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden font-sans text-slate-800">
      {/* 1. BACKGROUND IMAGE WITH OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImagePath}
          alt="Tampa City Skyline Background"
          fill
          priority
          className="object-cover object-center opacity-40 lg:opacity-100"
          sizes="100vw"
        />
        {/* Soft Left-to-Right Light Gradient Overlay for text readability on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent z-10" />
        {/* Subtle Radial & Top Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-slate-950/80 z-10 lg:hidden" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-20 max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10 pt-6 md:pt-10 pb-0">
        {/* FLEX / GRID LAYOUT: Mobile Person Top, Desktop Text Left & Person Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
          
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center justify-end relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px]">
            {/* Person Image Container */}
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] flex items-end justify-center lg:justify-start lg:pl-2 xl:pl-6">
              <Image
                src={personImagePath}
                alt="Domestic Violence Defense Lawyer"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl hover:scale-[1.01] transition-transform duration-300 lg:max-w-[82%] xl:max-w-[80%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />

              {/* FLOATING GLASS CARD OVERLAY (Positioned safely below face on mobile/tab & to the right on laptop/desktop) */}
              <div className="absolute right-2 sm:right-4 lg:right-0 xl:right-2 bottom-3 sm:bottom-6 md:bottom-8 lg:top-[34%] xl:top-[36%] lg:bottom-auto w-[210px] sm:w-[250px] md:w-[270px] lg:w-[270px] bg-[#0A1828]/90 backdrop-blur-md border border-primary/40 rounded-2xl p-3.5 sm:p-4 md:p-5 shadow-2xl text-white z-30 space-y-3 sm:space-y-4 transition-all duration-300 hover:border-primary/70">
                {/* Feature 1 */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-primary shrink-0 mt-0.5">
                    <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      Aggressive Defense.
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-normal">
                      Proven Results.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-slate-700/60" />

                {/* Feature 2 */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-primary shrink-0 mt-0.5">
                    <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      Thorough Case
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-normal">
                      Investigation.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-slate-700/60" />

                {/* Feature 3 */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-primary shrink-0 mt-0.5">
                    <FaUserShield className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      Protecting Your
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-normal">
                      Freedom &amp; Future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center py-4 lg:py-6 pb-8 lg:pb-12">
            
            {/* Main Title Block */}
            <h1 className=" tracking-tight text-slate-900 font-bold">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] leading-snug">
                {titleLine1}
              </span>
              {titleLine2 && (
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] leading-snug mt-1">
                  {titleLine2}
                </span>
              )}
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] text-primary leading-snug mt-3 ">
                {highlightTitle}
              </span>
            </h1>

            {/* Accent Line Underneath Heading */}
            <div className="w-28 sm:w-36 h-[4px] bg-primary my-5 rounded-full" />

            {/* Paragraph Content */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>{paragraph1}</p>
              {paragraph2 && (typeof paragraph2 === "string" ? <p>{paragraph2}</p> : paragraph2)}
            </div>

            {/* CTA BUTTONS SECTION */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
              
              {/* Phone Call Button (Dark Pill) */}
              <a
                href={phoneCallHref}
                className="group inline-flex items-center gap-3.5 bg-[#0B1B2D] hover:bg-[#06121E] text-white px-6 py-3.5 rounded-2xl shadow-xl transition-all duration-300 border border-slate-800 hover:border-primary/50 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <IoIosCall className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base sm:text-lg font-bold tracking-wide text-white leading-tight">
                    {phoneNumber}
                  </span>
                  <span className="text-xs text-slate-300 font-medium tracking-wider uppercase mt-0.5">
                    Call Now
                  </span>
                </div>
              </a>

              {/* Schedule Free Consultation Button (White/Gold Border Pill) */}
              <Link
                href={consultationHref}
                className="group inline-flex items-center gap-3.5 bg-white/90 hover:bg-white text-slate-900 border-2 border-primary px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center text-primary group-hover:rotate-6 transition-transform">
                  <FaCalendarAlt className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  {consultationText}
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* ==================================================== */}
      {/* 2. BOTTOM FEATURE HIGHLIGHTS BAR (FULL WIDTH DARK NAVY) */}
      {/* ==================================================== */}
      <div className="relative z-20 w-full bg-[#06121E] border-t border-primary/30 py-6 text-white shadow-2xl">
        <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            {/* Feature Item 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 first:pl-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                Local Tampa <br className="hidden sm:inline" /> Defense Team
              </span>
            </div>

            {/* Feature Item 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                Aggressive &amp; Strategic <br className="hidden sm:inline" /> Legal Defense
              </span>
            </div>

            {/* Feature Item 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaFileCircleCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                Thorough Case <br className="hidden sm:inline" /> Investigation
              </span>
            </div>

            {/* Feature Item 4 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaBalanceScale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                Protecting Your Rights, <br className="hidden sm:inline" /> Reputation &amp; Future
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
