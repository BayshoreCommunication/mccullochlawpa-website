"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export interface BLCourtsCitiesSectionProps {
  title?: string;
  subTitle?: string;
  bannerImagePath?: string;
}

export default function BLCourtsCitiesSection({
  title = "Courts and Cities McCulloch Law Serves Across Tampa",
  subTitle = "McCulloch Law proudly represents clients in courts throughout Hillsborough County and the surrounding Tampa Bay communities.",
  bannerImagePath = "/images/seo-services/battery-lawyer-tampa/tampa-hillsborough-county-criminal-court-hearings-fl.webp",
}: BLCourtsCitiesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* TOP HERO BANNER */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md mb-8 overflow-hidden relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight">
                {title}
              </h2>

              <div className="w-20 h-[3px] bg-primary rounded-full" />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                {subTitle}
              </p>
            </div>

            <div className="lg:col-span-7 relative w-full h-[200px] sm:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={bannerImagePath}
                alt="Tampa Hillsborough County criminal court hearings and legal representation for battery defense cases"
                title="Tampa Hillsborough County Criminal Court Hearings Law"
                data-description="McCulloch Law provides experienced courtroom defense for battery charges across Tampa, Hillsborough County, and surrounding communities."
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-transparent lg:from-white/40" />
            </div>

          </div>
        </div>

        {/* BOTTOM AREA: GOOGLE MAP + ADDRESS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">

          {/* LEFT: Google Maps Embed */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200/80 min-h-[380px]">
            <iframe
              src="https://maps.google.com/maps?q=238+East+Davis+Boulevard,+Ste+202,+Tampa,+FL+33606&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "380px", border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="McCulloch Law Office Location"
            />
          </div>

          {/* RIGHT: Address Info Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-center space-y-6">

            <div className="w-full bg-[#0B1B2D] text-white rounded-2xl py-3.5 px-6 flex items-center justify-center gap-3 shadow-md border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-wide text-slate-100">
                McCulloch Law P.A. Tampa Office
              </span>
            </div>

            <div className="space-y-4 text-slate-700">
              
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-[#8A6516] shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Office Address
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    238 East Davis Boulevard, Ste 202
                  </p>
                  <p className="text-sm sm:text-base text-slate-700">
                    Tampa, FL 33606
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-[#8A6516] shrink-0 mt-0.5">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Phone
                  </h3>
                  <a
                    href="tel:8134442817"
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#8A6516] transition-colors block leading-snug"
                  >
                    (813) 444 2817
                  </a>
                  <p className="text-xs text-[#8A6516] font-semibold mt-0.5">
                    Available 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-[#8A6516] shrink-0 mt-0.5">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Email
                  </h3>
                  <a
                    href="mailto:office@mcfloridalaw.com"
                    className="text-sm sm:text-base font-semibold text-slate-900 hover:text-[#8A6516] transition-colors block leading-snug"
                  >
                    office@mcfloridalaw.com
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
