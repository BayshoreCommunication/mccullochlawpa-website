"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaCalendarAlt, FaShieldAlt } from "react-icons/fa";

export interface CDFreeCaseReviewSectionProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  phoneNumber?: string;
  phoneHref?: string;
  bgImagePath?: string;
  attorneyImagePath?: string;
}

export default function CDFreeCaseReviewSection({
  title = "Accused of Criminal Activity in Tampa? Contact McCulloch Law Now",
  paragraph1 = "Every day without a criminal defense lawyer tampa fl especially after an arrest state spends building case against you. McCulloch Law is the top criminal defense law firm in whole Florida families trust when stakes are highest. Call (813) 444-2817 now for a free, confidential case review before your next court date arrives. The sooner you reach us, the more options remain on the table.",
  paragraph2 = "",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
  bgImagePath = "/images/seo-services/criminal-defense-lawyer-tampa-fl/hero-bg.png",
  attorneyImagePath = "/images/hero/Attorney.png",
}: CDFreeCaseReviewSectionProps) {
  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={bgImagePath}
          alt="Courtroom background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="bg-gradient-to-br from-[#0d2137] to-[#081524] rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-700/80 shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 px-3.5 py-1.5 rounded-full self-start">
                <FaShieldAlt className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  CONFIDENTIAL LEGAL HELP
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight tracking-tight">
                {title}
              </h2>

              <div className="w-20 h-[3px] bg-primary rounded-full" />

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                <p>{paragraph1}</p>
                {paragraph2 && <p>{paragraph2}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-3.5 bg-primary hover:bg-[#a87d25] text-slate-950 px-7 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <IoIosCall className="w-5 h-5" />
                  <span>Call {phoneNumber}</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-7 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FaCalendarAlt className="w-4 h-4 text-primary" />
                  <span>Schedule Free Consultation</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[280px] h-[340px] sm:h-[400px] flex items-end justify-center">
                <Image
                  src={attorneyImagePath}
                  alt="Drew McCulloch - Criminal Defense Lawyer"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
