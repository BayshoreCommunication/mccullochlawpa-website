"use client";

import React from "react";
import Image from "next/image";
import { FaShieldAlt, FaBriefcaseMedical, FaCheckCircle } from "react-icons/fa";

export interface ALServesSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
}

const criminalDefenseItems = [
  "Assault",
  "Battery",
  "Stalking",
  "Arson and Criminal Mischief",
  "Domestic Abuse",
  "Drug Crimes",
  "DUI",
  "Felonies / Probation",
  "Fraud",
  "Homicide / Attempted Homicide",
  "Injunctions",
  "Burglary and Trespass",
  "Juvenile Crimes",
  "Misdemeanors",
  "Robbery",
  "Theft Crimes",
  "Seal / Expunge",
  "Sex Crimes",
  "Violation of Probation",
  "Weapons & Firearms Charges",
  "Driving with a Suspended or Revoked License",
  "Vehicular Manslaughter",
  "Speeding and High Speed Violations",
];

const personalInjuryItems = [
  "Auto Accident",
  "Bicycle Accident",
  "Slip, Trip and Fall",
  "Truck Accidents",
  "Motorcycle Accidents",
  "Uber, UberEats and Lyft Accident",
  "Premises Liability",
  "Medical Malpractice",
  "Products Liability",
  "Wrongful Death",
  "Fatal Accidents",
  "Dog Bites",
];

export default function ALServesSection({
  title = "Cases McCulloch Law Handles Across Tampa, FLorida",
  subTitle = "McCulloch Law represents clients across Tampa in both personal injury and criminal defense.",
  imagePath = "/images/seo-services/assault-lawyer-tampa/tampa-bay-skyline-legal-defense-services-coverage.webp",
}: ALServesSectionProps) {
  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src={imagePath}
          alt="Tampa Bay Florida skyline representing criminal defense legal services provided across Hillsborough County"
          title="Tampa Bay Legal Defense Services Coverage McCulloch Law"
          data-description="McCulloch Law PA provides aggressive criminal defense representation throughout Tampa, Brandon, Plant City, and all communities across Hillsborough County Florida."
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#081524]/90" />
      </div>

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* TWO BOXES: CRIMINAL DEFENSE & PERSONAL INJURY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* CRIMINAL DEFENSE BOX */}
          <div className="bg-[#0c1a29]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
              <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <FaShieldAlt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Criminal Defense
                </h3>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  Charges We Defend
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-grow">
              {criminalDefenseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-sm text-slate-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PERSONAL INJURY BOX */}
          <div className="bg-[#0c1a29]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
              <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <FaBriefcaseMedical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Personal Injury
                </h3>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  Injury Claims We Handle
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-grow">
              {personalInjuryItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-sm text-slate-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
