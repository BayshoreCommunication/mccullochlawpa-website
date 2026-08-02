"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaCalendarAlt, FaBalanceScale, FaShieldAlt } from "react-icons/fa";

export interface SCFreeCaseReviewSectionProps {
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

export default function SCFreeCaseReviewSection({
  title = "Charged With Sex Crime in Tampa? Contact McCulloch Law Now",
  highlightedText = "Contact McCulloch Law Now",
  subTitle = "",
  paragraph = "The time between accusation and formal charges is your most valuable period in defense. McCulloch Law takes calls from Tampa defendants at every stage and earlier calls produce more options. Don't face this without a sex crime defense lawyer tampa defendants specifically seek out when the stakes are real. Call McCulloch Law and speak directly with an attorney focused on these cases every day.",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
  consultationHref = "/contact",
  backgroundImagePath,
  attorneyImagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/attorney-office.png",
  personImagePath,
}: SCFreeCaseReviewSectionProps) {
  const bgImg = backgroundImagePath || attorneyImagePath;

  return (
    <section className="w-full bg-[#081524] text-white py-12 md:py-20 font-sans relative overflow-hidden">
      
      {/* BACKGROUND ATTORNEY IMAGE (RIGHT SIDE DESKTOP OVERLAY) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full max-w-[1640px] mx-auto">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-80">
            <Image
              src={bgImg}
              alt="Tampa Sex Crime Defense Lawyer Office"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#081524] via-[#081524]/80 to-transparent z-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#081524]/60 via-transparent to-[#081524]/90 z-20" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-9 h-9 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                <FaBalanceScale className="w-5 h-5 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-white leading-tight tracking-tight">
              {title}
            </h2>

            {subTitle && (
              <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-wide">
                {subTitle}
              </h3>
            )}

            <div className="flex items-center gap-2 my-1">
              <div className="w-16 h-[1px] bg-primary/50" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
              <div className="w-16 h-[1px] bg-primary/50" />
            </div>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              <p>{paragraph}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <a
                href={phoneHref}
                className="group inline-flex items-center gap-4 bg-primary hover:bg-yellow-500 text-slate-950 px-7 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-slate-950/15 flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform">
                  <IoIosCall className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base sm:text-lg font-bold tracking-tight leading-none">
                    {phoneNumber}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mt-1">
                    Call 24/7 – Free Confidential Review
                  </span>
                </div>
              </a>

              <Link
                href={consultationHref}
                className="group inline-flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-900 text-white border-2 border-primary/60 hover:border-primary px-7 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:rotate-6 transition-transform">
                  <FaCalendarAlt className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-bold text-white leading-tight">
                  Schedule Free Case Review
                </span>
              </Link>
            </div>

            <div className="pt-2 flex items-center gap-6 text-slate-400 text-xs sm:text-sm font-sans flex-wrap">
              <span className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-primary" />
                100% Confidential
              </span>
              <span className="text-slate-600">•</span>
              <span>No Obligation</span>
              <span className="text-slate-600">•</span>
              <span>Hillsborough County Defense</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
