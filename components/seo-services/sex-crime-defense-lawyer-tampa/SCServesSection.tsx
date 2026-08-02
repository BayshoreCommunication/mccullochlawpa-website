"use client";

import React from "react";
import { FaShieldAlt, FaCar, FaGavel, FaCheckCircle } from "react-icons/fa";

export interface SCServesSectionProps {
  title?: string;
  subTitle?: string;
  personalInjuryItems?: string[];
  criminalDefenseItems?: string[];
}

const defaultPersonalInjury = [
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

const defaultCriminalDefense = [
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

export default function SCServesSection({
  title = "McCulloch Law Serves Criminal Defense & Personal Injury Cases Across Tampa",
  subTitle = "McCulloch Law represents clients across Tampa in both personal injury and criminal defense.",
  personalInjuryItems = defaultPersonalInjury,
  criminalDefenseItems = defaultCriminalDefense,
}: SCServesSectionProps) {
  return (
    <section className="w-full bg-[#081524] text-white py-12 md:py-20 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* PERSONAL INJURY CARD */}
          <div className="bg-[#0e2238] rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700/60 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                <FaCar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Personal Injury
                </h3>
                <p className="text-xs text-slate-400">
                  Representation for victims of accidents and negligence
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInjuryItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 bg-[#162a42] px-3.5 py-2.5 rounded-xl border border-slate-700/40 text-slate-200 text-xs sm:text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CRIMINAL DEFENSE CARD */}
          <div className="bg-[#0e2238] rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700/60 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                <FaGavel className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Criminal Defense
                </h3>
                <p className="text-xs text-slate-400">
                  Aggressive legal defense against misdemeanor and felony charges
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {criminalDefenseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 bg-[#162a42] px-3.5 py-2.5 rounded-xl border border-slate-700/40 text-slate-200 text-xs sm:text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
