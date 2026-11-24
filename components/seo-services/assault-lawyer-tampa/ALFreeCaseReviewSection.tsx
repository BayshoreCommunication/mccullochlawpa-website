"use client";

import React from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaCalendarAlt, FaShieldAlt } from "react-icons/fa";

export interface ALFreeCaseReviewSectionProps {
  title?: string;
  paragraph?: React.ReactNode;
  phoneNumber?: string;
  phoneCallHref?: string;
  consultationHref?: string;
  consultationText?: string;
}

export default function ALFreeCaseReviewSection({
  title = "Charged With Assault? Contact McCulloch Law Now",
  paragraph = (
    <>
      An assault allegation can move quickly from an argument to a criminal
      case. Early decisions may affect the evidence available to your defense
      and the options you can consider. At McCulloch Law, we review the charge,
      discuss the relevant facts and explain possible next steps. Our{" "}
      <strong className="font-bold text-white">assault lawyer Tampa</strong>,
      Drew McCulloch brings former prosecutorial experience to criminal defense
      matters across Tampa Bay. Call (813) 444-2817 to request a free
      consultation. Our office is available 24/7.
    </>
  ),
  phoneNumber = "(813) 444-2817",
  phoneCallHref = "tel:8134442817",
  consultationHref = "/contact",
  consultationText = "Schedule a Free Consultation",
}: ALFreeCaseReviewSectionProps) {
  return (
    <section className="w-full bg-[#0B1B2D] py-14 md:py-20 text-white font-sans relative overflow-hidden border-t border-b border-primary/20">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
            <FaShieldAlt className="w-3.5 h-3.5" />
            <span>24/7 Immediate Legal Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h2>

          <div className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {paragraph}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6">
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

        </div>
      </div>
    </section>
  );
}
