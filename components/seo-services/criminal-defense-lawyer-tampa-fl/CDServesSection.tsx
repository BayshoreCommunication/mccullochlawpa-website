"use client";

import React from "react";
import { FaUserShield, FaCar, FaGavel, FaCheckCircle } from "react-icons/fa";

export interface CDServesSectionProps {
  title?: string;
  subTitle?: string;
  personalInjuryList?: string[];
  criminalDefenseList?: string[];
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

export default function CDServesSection({
  title = "McCulloch Law Serves Criminal Defense & Personal Injury Cases Across Tampa",
  subTitle = "McCulloch Law represents clients across Tampa in both personal injury and criminal defense.",
  personalInjuryList = defaultPersonalInjury,
  criminalDefenseList = defaultCriminalDefense,
}: CDServesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaUserShield className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#081524] flex items-center justify-center text-primary shrink-0 shadow-md">
                  <FaCar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Personal Injury
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">Tampa Bay Area</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInjuryList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-slate-50/80 p-3 rounded-xl border border-slate-200/60 hover:border-primary/40 hover:bg-white transition-all duration-200"
                  >
                    <FaCheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#081524] flex items-center justify-center text-primary shrink-0 shadow-md">
                  <FaGavel className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Criminal Defense
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">Hillsborough County &amp; Tampa</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {criminalDefenseList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-slate-50/80 p-3 rounded-xl border border-slate-200/60 hover:border-primary/40 hover:bg-white transition-all duration-200"
                  >
                    <FaCheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {item}
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
