"use client";

import React from "react";
import { FaShieldAlt, FaBriefcaseMedical, FaGavel } from "react-icons/fa";

export interface TDCServesSectionProps {
  title?: string;
  subTitle?: string;
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

export default function TDCServesSection({
  title = "McCulloch Law Handles Criminal Defense & Personal Injury Cases Across Tampa",
  subTitle = "McCulloch Law represents clients across Tampa in both personal injury and criminal defense.",
}: TDCServesSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Personal Injury Box */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                <FaBriefcaseMedical className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Personal Injury
              </h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInjuryItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Criminal Defense Box */}
          <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                <FaGavel className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Criminal Defense
              </h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {criminalDefenseItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
