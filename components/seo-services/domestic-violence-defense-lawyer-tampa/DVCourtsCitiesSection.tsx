"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLandmark,
  FaBalanceScale,
  FaUsers,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export interface CourtItem {
  id: string;
  name: string;
  subText?: string;
  icon: React.ReactNode;
}

export interface DVCourtsCitiesSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  bannerImagePath?: string;
}

const courtsList: CourtItem[] = [
  {
    id: "circuit-court",
    name: "Hillsborough County Circuit Court",
    subText: "(13th Judicial Circuit) George E. Edgecomb Courthouse Tampa",
    icon: <FaLandmark className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "county-court",
    name: "Hillsborough County Court",
    subText: "(Misdemeanor Division)",
    icon: <FaBalanceScale className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "plant-city-courthouse",
    name: "Plant City Courthouse",
    icon: <FaBuilding className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "brandon-courthouse",
    name: "Brandon Courthouse",
    icon: <FaBuilding className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "domestic-relations-court",
    name: "Hillsborough County Domestic Relations Court",
    icon: <FaUsers className="w-4 h-4 text-slate-700" />,
  },
  {
    id: "us-district-court",
    name: "U.S. District Court for Middle District of Florida",
    icon: <FaShieldAlt className="w-4 h-4 text-slate-700" />,
  },
];

const citiesCol1 = [
  "Tampa",
  "Brandon",
  "Riverview",
  "Valrico",
  "Plant City",
  "Temple Terrace",
  "New Tampa",
  "Carrollwood",
  "Westchase",
];

const citiesCol2 = [
  "Town 'n' Country",
  "Lutz",
  "Land O' Lakes",
  "Wesley Chapel",
  "Zephyrhills",
  "Ruskin",
  "Sun City Center",
  "Apollo Beach",
  "Seffner",
];

const citiesCol3 = [
  "Gibsonton",
  "Dover",
  "Balm",
  "St. Petersburg",
  "Clearwater",
  "Largo",
  "Dunedin",
  "Tarpon Springs",
  "Safety Harbor",
  "Oldsmar",
];

export default function DVCourtsCitiesSection({
  title = "Courts and Cities McCulloch Law Serves Across Tampa",
  highlightedText = "Across Tampa",
  subTitle = "McCulloch Law proudly represents clients in courts throughout Hillsborough County and the surrounding Tampa Bay communities.",
  bannerImagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/courts-cities-banner.png",
}: DVCourtsCitiesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ==================================================== */}
        {/* TOP HERO BANNER: TITLE LEFT + PANORAMIC IMAGE RIGHT  */}
        {/* ==================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md mb-8 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Title & Subtitle Left */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight">
                {title.split(highlightedText)[0]}
                <span className="text-primary block mt-1">{highlightedText}</span>
                {title.split(highlightedText)[1]}
              </h2>

              <div className="w-20 h-[3px] bg-primary rounded-full" />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                {subTitle}
              </p>
            </div>

            {/* Panoramic Image Right */}
            <div className="lg:col-span-7 relative w-full h-[200px] sm:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={bannerImagePath}
                alt="Courts and Cities McCulloch Law Serves Across Tampa"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-transparent lg:from-white/40" />
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* BOTTOM AREA: GOOGLE MAP (LEFT) + ADDRESS (RIGHT)     */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

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

            {/* Office Name Badge */}
            <div className="w-full bg-[#0B1B2D] text-white rounded-full py-3.5 px-6 flex items-center justify-center gap-3 shadow-md border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-wide text-slate-100">
                McCulloch Law P.A. — Tampa Office
              </span>
            </div>

            {/* Address Details */}
            <div className="flex flex-col space-y-5 px-2">

              {/* Street Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Office Address</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    238 East Davis Boulevard, Ste 202
                  </p>
                  <p className="text-sm text-slate-600 font-sans">Tampa, FL 33606</p>
                </div>
              </div>

              <div className="h-[1px] bg-slate-100 rounded-full" />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <FaPhone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Phone</p>
                  <a
                    href="tel:8134442817"
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    (813) 444-2817
                  </a>
                  <p className="text-xs text-slate-500 font-sans">Available 24/7</p>
                </div>
              </div>

              <div className="h-[1px] bg-slate-100 rounded-full" />

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <FaEnvelope className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Email</p>
                  <a
                    href="mailto:office@mcfloridalaw.com"
                    className="text-base font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    office@mcfloridalaw.com
                  </a>
                </div>
              </div>

              <div className="h-[1px] bg-slate-100 rounded-full" />

              {/* Get Directions Button */}
              <a
                href="https://maps.google.com/?q=238+East+Davis+Boulevard,+Ste+202,+Tampa,+FL+33606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-[#a87d25] text-slate-950 font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 self-start"
              >
                <FaMapMarkerAlt className="w-4 h-4" />
                Get Directions
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
