"use client";

import React from "react";
import {
  FaUserSlash,
  FaHome,
  FaMapMarkerAlt,
  FaPlane,
  FaBriefcase,
  FaClock,
  FaLandmark,
  FaBan,
} from "react-icons/fa";

export interface RestrictionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCRestrictionsSectionProps {
  title?: string;
  subTitle?: string;
  items?: RestrictionItem[];
}

const defaultRestrictionItems: RestrictionItem[] = [
  {
    id: "contact-restrictions",
    icon: (
      <div className="relative">
        <FaUserSlash className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Contact Restrictions",
    description:
      "Tampa judges routinely issue prohibition of contact orders after prosecutors file sex crime charge. These orders can extend to victim's family, roommates, coworkers or anyone named in the police report. Any violation is its own criminal offense and judges can revoke your bond immediately.",
  },
  {
    id: "residency-restrictions",
    icon: (
      <div className="relative">
        <FaHome className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaBan className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Residency Restrictions",
    description:
      "Courts can prohibit you from living near the alleged victim's home even before conviction. Pre trial conditions can force you to vacate your own home or currently pay to lease. Tampa sex criminal defense lawyer files modification motions when conditions are financially devastating or factually disproportionate to charge.",
  },
  {
    id: "location-restrictions",
    icon: (
      <div className="relative">
        <FaMapMarkerAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaBan className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Location Restrictions",
    description:
      "Charges involving alleged minor victims frequently produce bans from schools, parks and childcare facilities. These geographic limits affect your daily commute, your employment and your attendance at community events. Hillsborough County courts enforce these conditions strictly and prosecutors pursue unintentional violations too. Defense lawyer maps every restricted area and explains applicable zones to your specific conditions.",
  },
  {
    id: "travel-restrictions",
    icon: (
      <div className="relative">
        <FaPlane className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaBan className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Travel Restrictions",
    description:
      "Tampa court can require you to surrender your passport and confine travel to Florida entirely. International travel becomes legally impossible during the pre trial period. This period can last months or years. Interstate travel for work or family may require advance court approval through a formal motion.",
  },
  {
    id: "employment-restrictions",
    icon: (
      <div className="relative">
        <FaBriefcase className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Employment Restrictions",
    description:
      "Pre trial conditions can prohibit you from working in roles involving contact with minors or vulnerable populations. You risk your job and professional license before the state proves anything against you. Defense attorney negotiates employment exceptions into bond conditions when your livelihood depends on continued access. Courts grant these exceptions more often when the defense files documented and specific request.",
  },
  {
    id: "mandatory-curfew",
    icon: (
      <div className="relative">
        <FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Mandatory Curfew",
    description:
      "Tampa judges frequently impose nightly curfews as a condition of pre trial release. Most curfews come with electronic monitoring bracelets to transmit your location around the clock. Even arriving home a few minutes late can trigger a bond revocation hearing against you.",
  },
];

export default function SCRestrictionsSection({
  title = "What Restrictions Are Imposed After Being Charged With Sex Crime in Tampa",
  subTitle = "Before any conviction a sex crime charge alone can trigger immediate restrictions. Tampa courts impose these as pre trial release conditions and changing them requires formal motion.",
  items = defaultRestrictionItems,
}: SCRestrictionsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaLandmark className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/70" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
