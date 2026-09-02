"use client";

import React from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaCalendarAlt, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

export interface BPIFreeCaseReviewSectionProps {
  title?: string;
  paragraph?: string;
  phoneNumber?: string;
  phoneCallHref?: string;
  consultationHref?: string;
  consultationText?: string;
}

export default function BPIFreeCaseReviewSection({
  title = "Injured in Tampa? Talk to a Personal Injury Lawyer Today",
  paragraph = "Severe physical injuries require immediate legal action to protect your financial and medical future. Contact McCulloch Law today to schedule your free, confidential personal injury case consultation. Speak directly with our dedicated attorneys to learn how we fight for full value. Call our Tampa office now at (813) 444-2817 or complete our online form to get started. We answer calls 24 hours a day, 7 days a week, because accidents don't wait for business hours.",
  phoneNumber = "(813) 444-2817",
  phoneCallHref = "tel:8134442817",
  consultationHref = "/contact",
  consultationText = "Get Free Consultation",
}: BPIFreeCaseReviewSectionProps) {
  return (
    <section className="w-full bg-[#081524] py-14 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="bg-gradient-to-r from-[#0d1f30] via-[#091827] to-[#0d1f30] rounded-3xl p-8 sm:p-12 border border-primary/30 shadow-2xl max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/40 flex items-center justify-center text-primary mb-6 shadow-inner">
            <FaShieldAlt className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <div className="w-16 h-[3px] bg-primary rounded-full mb-6" />

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-8">
            {paragraph}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={phoneCallHref}
              className="group inline-flex items-center gap-3.5 bg-primary hover:bg-[#a87d25] text-slate-950 px-7 py-4 rounded-2xl shadow-xl transition-all duration-300 font-bold hover:scale-[1.02]"
            >
              <div className="w-9 h-9 rounded-full bg-slate-950/10 flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform">
                <IoIosCall className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base sm:text-lg font-extrabold tracking-wide leading-tight">
                  {phoneNumber}
                </span>
                <span className="text-[11px] text-slate-900 uppercase font-semibold tracking-wider">
                  Call 24/7 Free &amp; Confidential
                </span>
              </div>
            </a>

            <Link
              href={consultationHref}
              className="group inline-flex items-center gap-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:rotate-6 transition-transform">
                <FaCalendarAlt className="w-4 h-4" />
              </div>
              <span className="text-base sm:text-lg font-bold leading-tight">
                {consultationText}
              </span>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary" />
            <span>238 E Davis Blvd, Suite 202 Tampa, FL 33606</span>
          </div>
        </div>
      </div>
    </section>
  );
}
