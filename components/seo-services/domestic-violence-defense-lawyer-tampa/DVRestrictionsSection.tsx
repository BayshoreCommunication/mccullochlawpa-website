"use client";

import React from "react";
import {
  FaHome,
  FaCrosshairs,
  FaUserFriends,
  FaPlane,
  FaIdCard,
  FaLandmark,
  FaExclamationTriangle,
  FaBan,
} from "react-icons/fa";

export interface RestrictionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceRestrictionsSectionProps {
  title?: string;
  subTitle?: string;
  items?: RestrictionItem[];
}

const defaultRestrictionItems: RestrictionItem[] = [
  {
    id: "residence-removal",
    icon: (
      <div className="relative">
        <FaHome className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaBan className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Removal From Your Residence on Arrest Night",
    description:
      "After the alleged victim shares your home address no contact order removes you from your residence the same night of your arrest. Returning to collect clothing, medication or personal documents requires explicit written court authorization or direct law enforcement supervision. This removal applies even when you are sole leaseholder or only name on the mortgage for the property.",
  },
  {
    id: "firearm-surrender",
    icon: (
      <div className="relative">
        <FaCrosshairs className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaExclamationTriangle className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Surrender of All Firearms and Ammunition",
    description:
      "Florida Statute 790.233 requires defendants to surrender every firearm and all ammunition to law enforcement. This occurs immediately after domestic violence charges are formally filed against them. Possessing any firearm or ammunition during an active domestic violence charge constitutes a separate criminal offense. This obligation applies to all lawfully owned firearms regardless of license status or charge type.",
  },
  {
    id: "child-visitation",
    icon: (
      <div className="relative">
        <FaUserFriends className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaBan className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Restricted or Fully Suspended Child Visitation",
    description:
      "Hillsborough County family courts routinely limit or fully suspend parenting time. This action is based solely on the pending charge, without awaiting a verdict. The non contact order may also extend to cover your children if they were present during the incident. Even if the alleged victim holds primary custody by existing order. Restoring parenting time during criminal case requires separate family court motion with evidence.",
  },
  {
    id: "travel-restrictions",
    icon: (
      <div className="relative">
        <FaPlane className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaBan className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Interstate and International Travel Restrictions",
    description:
      "Courts routinely prohibit all travel outside Florida as a standard pretrial release condition in domestic violence cases. Defendants with employment or family ties outside the state must petition the court for travel authorization before any departure date. Traveling without that authorization even briefly results in a bond violation and a potential arrest warrant.",
  },
  {
    id: "professional-licensing",
    icon: (
      <div className="relative">
        <FaIdCard className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Disclosure to Florida Professional Licensing Boards",
    description:
      "Florida licensed attorneys, nurses, physicians, educators and contractors must disclose pending domestic violence charges. This disclosure must be made to their respective licensing boards upon the formal charge being filed. Failure to disclose constitutes a separate licensing violation subject to independent professional discipline proceedings. Some boards impose practice restrictions during the criminal case pending.",
  },
];

export default function DomesticViolenceRestrictionsSection({
  title = "What Restrictions Are Imposed After Being Charged With Domestic Violence in Tampa",
  subTitle = "Tampa courts imposed restrictions impacting your housing, firearms, parental rights and your employment standing.",
  items = defaultRestrictionItems,
}: DomesticViolenceRestrictionsSectionProps) {
  const topThreeItems = items.slice(0, 3);
  const bottomTwoItems = items.slice(3, 5);

  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-8 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          
          {/* Emblem Divider Top */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaLandmark className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          {/* 3 Gold Dots Divider */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/70" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>
        </div>

        {/* ==================================================== */}
        {/* GRID CARD CONTAINER                                  */}
        {/* ==================================================== */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          
          {/* ROW 1: 3 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {topThreeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                {/* Top Subtle Border Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header Row: Icon + Title */}
                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Expanding Gold Accent Line */}
                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ROW 2: 2 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:max-w-4xl lg:mx-auto">
            {bottomTwoItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                {/* Top Subtle Border Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header Row: Icon + Title */}
                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Expanding Gold Accent Line */}
                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

                {/* Description */}
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
