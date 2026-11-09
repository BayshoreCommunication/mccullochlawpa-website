"use client";

import React from "react";
import Image from "next/image";
import { FaShieldAlt, FaBriefcaseMedical, FaGavel, FaCheckCircle } from "react-icons/fa";

export interface RDServesSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
}

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

export default function RDServesSection({
  title = "Cases McCulloch Law Handles Across Tampa, FLorida",
  subTitle = "McCulloch Law represents clients across Tampa in both personal injury and criminal defense.",
  imagePath = "/images/seo-services/robbery-defense-attorney-tampa/tampa-skyline-palms.png",
}: RDServesSectionProps) {
  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src={imagePath}
          alt="Tampa Florida Skyline Palms Background"
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

        {/* TWO BOXES: PERSONAL INJURY & CRIMINAL DEFENSE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* PERSONAL INJURY BOX */}
          <div className="bg-[#0c1a29]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
              <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <FaBriefcaseMedical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Personal Injury
                </h3>
                <span className="text-xs text-slate-400">
                  Comprehensive representation for injury victims
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInjuryItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 transition-colors"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CRIMINAL DEFENSE BOX */}
          <div className="bg-[#0c1a29]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
              <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <FaGavel className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Criminal Defense
                </h3>
                <span className="text-xs text-slate-400">
                  Aggressive defense against misdemeanor and felony charges
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {criminalDefenseItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 transition-colors"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
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

