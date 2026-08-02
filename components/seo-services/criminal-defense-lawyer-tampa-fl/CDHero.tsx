"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaCalendarAlt, FaShieldAlt, FaSearch, FaUserShield, FaBalanceScale } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";

export interface CDHeroSectionProps {
  bgImagePath?: string;
  personImagePath?: string;
  titleLine1?: string;
  titleLine2?: string;
  highlightTitle?: string;
  paragraph1?: string;
  paragraph2?: React.ReactNode;
  phoneNumber?: string;
  phoneCallHref?: string;
  consultationHref?: string;
  consultationText?: string;
}

export default function CDHero({
  bgImagePath = "/images/seo-services/criminal-defense-lawyer-tampa-fl/hero-bg.png",
  personImagePath = "/images/hero/Attorney.png",
  titleLine1 = "Facing Criminal Charges in Tampa, FL?",
  titleLine2 = "",
  highlightTitle = "Hire Criminal Defense Lawyer Before Your 24 Hour Window Closes",
  paragraph1 = "Isn't 24 hours a short window to find a criminal defense lawyer? Florida schedules a judge for you within that time, arrest to hearing. Bond, charges and defense strategy all take shape at that hearing. Hiring McCulloch Law within that hour ensures you have criminal defense lawyer tampa fl to defend you from first appearance to trial. Drew McCulloch spent years as a Hillsborough County prosecutor before he switched sides. He knows exactly how much ground a defendant loses in those first hours. Searching for a criminal defense lawyer tampa fl tonight? Call McCulloch Law before that hearing happens.",
  paragraph2,
  phoneNumber = "(813) 444-2817",
  phoneCallHref = "tel:8134442817",
  consultationHref = "/contact",
  consultationText = "Schedule a Free Consultation",
}: CDHeroSectionProps) {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden font-sans text-slate-800">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImagePath}
          alt="Tampa City Skyline Background"
          fill
          priority
          className="object-cover object-center opacity-40 lg:opacity-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-slate-950/80 z-10 lg:hidden" />
      </div>

      <div className="relative z-20 max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10 pt-6 md:pt-10 pb-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center justify-end relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px]">
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] flex items-end justify-center lg:justify-start lg:pl-2 xl:pl-6">
              <Image
                src={personImagePath}
                alt="Criminal Defense Lawyer Tampa"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl hover:scale-[1.01] transition-transform duration-300 lg:max-w-[82%] xl:max-w-[80%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />

              <div className="absolute right-2 sm:right-4 lg:right-0 xl:right-2 bottom-3 sm:bottom-6 md:bottom-8 lg:top-[34%] xl:top-[36%] lg:bottom-auto w-[210px] sm:w-[250px] md:w-[270px] lg:w-[270px] bg-[#0A1828]/90 backdrop-blur-md border border-primary/40 rounded-2xl p-3.5 sm:p-4 md:p-5 shadow-2xl text-white z-30 space-y-3 sm:space-y-4 transition-all duration-300 hover:border-primary/70">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-primary shrink-0 mt-0.5">
                    <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      Former Prosecutor
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-normal">
                      Aggressive Defense.
                    </p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-slate-700/60" />

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-primary shrink-0 mt-0.5">
                    <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      24-Hour Hearing
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-normal">
                      Representation.
                    </p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-slate-700/60" />

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-primary shrink-0 mt-0.5">
                    <FaUserShield className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      Protecting Your
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-normal">
                      Rights &amp; Freedom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center py-4 lg:py-6 pb-8 lg:pb-12">
            <h1 className="tracking-tight text-slate-900 font-bold">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] leading-snug">
                {titleLine1}
              </span>
              {titleLine2 && (
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] leading-snug mt-1">
                  {titleLine2}
                </span>
              )}
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] text-primary leading-snug mt-3">
                {highlightTitle}
              </span>
            </h1>

            <div className="w-28 sm:w-36 h-[4px] bg-primary my-5 rounded-full" />

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              <p>{paragraph1}</p>
              {paragraph2 && (typeof paragraph2 === "string" ? <p>{paragraph2}</p> : paragraph2)}
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
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

      <div className="relative z-20 w-full bg-[#06121E] border-t border-primary/30 py-6 text-white shadow-2xl">
        <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 first:pl-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaUserShield className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                Former Hillsborough <br className="hidden sm:inline" /> Prosecutor
              </span>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                24-Hour First Appearance <br className="hidden sm:inline" /> Defense
              </span>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaFileCircleCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                Felony &amp; Misdemeanor <br className="hidden sm:inline" /> Trial Experience
              </span>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaBalanceScale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                Protecting Rights, <br className="hidden sm:inline" /> Record &amp; Freedom
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
