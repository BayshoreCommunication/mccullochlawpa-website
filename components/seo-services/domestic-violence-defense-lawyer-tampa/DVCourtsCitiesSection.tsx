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
        {/* BOTTOM AREA: 2 CARDS (COURTS LEFT, CITIES RIGHT)     */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD: COURTS MCCULLOCH LAW APPEARS IN (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-md flex flex-col h-full">
            {/* Header Pill */}
            <div className="w-full bg-[#0B1B2D] text-white rounded-full py-3.5 px-6 flex items-center justify-center gap-3 shadow-md mb-6 border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-white border border-primary/40 flex items-center justify-center text-primary shrink-0">
                <FaLandmark className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-wide text-slate-100">
                Courts McCulloch Law Appears In
              </span>
            </div>

            {/* Courts List */}
            <div className="flex flex-col divide-y divide-slate-100">
              {courtsList.map((court) => (
                <div
                  key={court.id}
                  className="flex items-start gap-3.5 py-3.5 px-2 hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all mt-0.5">
                    {court.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      {court.name}
                    </span>
                    {court.subText && (
                      <span className="text-xs text-slate-500 font-sans mt-0.5">
                        {court.subText}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD: CITIES AND COMMUNITIES SERVED (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-5 sm:p-7 border border-amber-200/60 shadow-md flex flex-col h-full">
            {/* Header Pill */}
            <div className="w-full bg-primary text-slate-950 rounded-full py-3.5 px-6 flex items-center justify-center gap-3 shadow-md mb-6">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-950/20 flex items-center justify-center text-slate-950 shrink-0">
                <FaUsers className="w-4 h-4 text-slate-950" />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-wide text-slate-950">
                Cities and Communities Served
              </span>
            </div>

            {/* 3 Sub-Columns Grid of Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1">
              
              {/* Column 1 */}
              <div className="flex flex-col divide-y divide-slate-100">
                {citiesCol1.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-2.5 px-2 hover:bg-amber-50/60 rounded-xl transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all">
                      <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                      {city}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col divide-y divide-slate-100">
                {citiesCol2.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-2.5 px-2 hover:bg-amber-50/60 rounded-xl transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all">
                      <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                      {city}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col divide-y divide-slate-100">
                {citiesCol3.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-2.5 px-2 hover:bg-amber-50/60 rounded-xl transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all">
                      <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                      {city}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
