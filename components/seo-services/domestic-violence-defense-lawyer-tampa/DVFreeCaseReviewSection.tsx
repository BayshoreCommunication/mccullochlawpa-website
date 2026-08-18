"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBalanceScale,
  FaCalendarAlt,
  FaClock,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface FreeCaseReviewSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  paragraph?: string;
  phoneNumber?: string;
  phoneHref?: string;
  consultationHref?: string;
  backgroundImagePath?: string;
  attorneyImagePath?: string;
  personImagePath?: string;
}

export default function FreeCaseReviewSection({
  title = "Charged With Domestic Violence in Tampa? Contact McCulloch Law Now",
  highlightedText = "Contact McCulloch Law Now",
  subTitle = "",
  paragraph = "Evidence disappears, no contact orders go uncontested and prosecutors begin building their case from the moment you are arrested. Every hour without legal counsel is time they are working against you. Call McCulloch Law today and put out domestic violence defense lawyer tampa on your side before that window closes.",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
  consultationHref = "/contact",
  backgroundImagePath,
  attorneyImagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/mcculloch.webp",
  personImagePath,
}: FreeCaseReviewSectionProps) {
  const bgImg = backgroundImagePath || attorneyImagePath;

  return (
    <section className="w-full bg-[#081524] text-white py-12 md:py-20 font-sans relative overflow-hidden">
      
      {/* BACKGROUND ATTORNEY IMAGE (RIGHT SIDE DESKTOP OVERLAY) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full max-w-[1640px] mx-auto">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-80">
            <Image
              src={bgImg}
              alt="Tampa Domestic Violence Defense Office"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Optional Person cutout overlay if provided separately */}
            {personImagePath && (
              <div className="absolute inset-0 z-10">
                <Image
                  src={personImagePath}
                  alt="Attorney Portrait"
                  fill
                  className="object-contain object-right-bottom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
            {/* Left to Right Gradient Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081524] via-[#081524]/80 to-transparent z-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#081524]/60 via-transparent to-[#081524]/90 z-20" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: TITLE, PARAGRAPHS, CTA BUTTONS          */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Top Shield Emblem Divider */}
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-9 h-9 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                <FaBalanceScale className="w-5 h-5 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-white leading-tight tracking-tight">
              {title}
            </h2>

            {/* Subtitle */}
            {subTitle && (
              <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-wide">
                {subTitle}
              </h3>
            )}

            {/* Diamond Dot Divider */}
            <div className="flex items-center gap-2 my-1">
              <div className="w-16 h-[1px] bg-primary/50" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
              <div className="w-16 h-[1px] bg-primary/50" />
            </div>

            {/* Paragraph Text */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              <p>{paragraph}</p>
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              {/* Call Now Button */}
              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 bg-primary hover:bg-[#a87d25] text-slate-950 px-6 py-3.5 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full bg-slate-950/15 flex items-center justify-center text-slate-950">
                  <IoIosCall className="w-5 h-5 text-slate-950" />
                </div>
                <span>CALL NOW</span>
              </a>

              {/* Free Consultation Button */}
              <Link
                href={consultationHref}
                className="inline-flex items-center gap-3 border-2 border-primary/80 hover:bg-primary hover:text-slate-950 text-white px-6 py-3.5 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 group"
              >
                <FaCalendarAlt className="w-4 h-4 text-primary group-hover:text-slate-950 transition-colors" />
                <span>FREE CONSULTATION</span>
              </Link>
            </div>

          </div>

          
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:items-end h-full">
            <div className="w-full max-w-[380px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 text-slate-900 flex flex-col items-center text-center lg:mt-12 transition-transform hover:scale-[1.02] duration-300">
              
              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col items-center w-full">
                
                {/* Gold Circle Call Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary shadow-md mb-3">
                  <IoIosCall className="w-7 h-7 text-primary" />
                </div>

                {/* Subtitle & Title */}
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-900">
                  FREE CONFIDENTIAL
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                  CASE REVIEW
                </h4>

                {/* Accent Line */}
                <div className="w-12 h-[2px] bg-primary/70 rounded-full mb-3" />

                {/* Phone Number */}
                <a
                  href={phoneHref}
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight hover:text-primary transition-colors my-0.5"
                >
                  {phoneNumber}
                </a>

                {/* Subtext */}
                <p className="text-xs text-slate-600 font-sans mt-1 max-w-[280px]">
                  Speak directly with a Tampa domestic violence defense attorney.
                </p>

              </div>

              {/* Bottom Feature Strip (Dark Navy) */}
              <div className="w-full bg-[#06121E] py-3.5 px-2 border-t border-slate-800 text-white">
                <div className="grid grid-cols-3 gap-1 text-center divide-x divide-slate-800">
                  
                  {/* Item 1 */}
                  <div className="flex flex-col items-center px-1">
                    <FaClock className="w-3.5 h-3.5 text-primary mb-1" />
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-200 leading-tight">
                      AVAILABLE 24/7
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col items-center px-1">
                    <FaShieldAlt className="w-3.5 h-3.5 text-primary mb-1" />
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-200 leading-tight">
                      CONFIDENTIAL CONSULTATION
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col items-center px-1">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary mb-1" />
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-200 leading-tight">
                      LOCAL TAMPA DEFENSE LAWYER
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
