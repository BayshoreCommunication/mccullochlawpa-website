"use client";

import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaBalanceScale,
  FaFileAlt,
  FaShieldVirus,
} from "react-icons/fa";

export interface ArrestItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TDCArrestSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
  items?: ArrestItem[];
}

const defaultArrestItems: ArrestItem[] = [
  {
    id: "booking-detention",
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Booking and Detention",
    description:
      "The location of your booking impacts the speed at which your family can reach you. Tampa Police and Hillsborough County deputies book most arrests at Orient Road Jail. Overflow cases move to the Falkenburg Road facility instead. Booking includes fingerprints, a mugshot and a full property inventory. The process runs anywhere from one hour to nearly two days.",
  },
  {
    id: "first-appearance",
    icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "First Appearance in Court",
    description:
      "Your bond amount often depends on the attorney standing beside you. Florida law requires a first appearance within 24 hours of arrest. Hillsborough County runs this hearing as PP Court, under Administrative Order S-2024-030. A judge reviews probable cause and sets bond during this hearing. Having your attorney present at PP Court changes the entire argument.",
  },
  {
    id: "bond-schedule",
    icon: <FaBalanceScale className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Bond Schedule for Drug Charges",
    description:
      "Missing a standard bond schedule can mean days behind bars unnecessarily. Simple possession often follows the Thirteenth Judicial Circuit's standard bond schedule. Trafficking charges usually skip the schedule and require a separate bond hearing. The judge considers drug weight, criminal history and community ties. An attorney at PP Court can argue for release on recognizance.",
  },
  {
    id: "classification-charges",
    icon: <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Classification of charges",
    description:
      "The arrest record and police reports are forwarded to the Hillsborough County State Attorney’s Office. Based on the records and reports, a formal criminal charge will be filed. Possession of small amounts of cannabis (less than 20 grams) is usually a misdemeanor. In comparison, harder drugs or larger quantities result in third degree felonies. Even larger quantities can lead to serious trafficking counts with mandatory minimum prison sentences.",
  },
];

export default function TDCArrestSection({
  title = "What Happens When Tampa Police Make a Drug Arrest",
  subTitle = "An arrest moves through three fast stops inside Hillsborough County's justice system.",
  description = "",
  items = defaultArrestItems,
}: TDCArrestSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-12 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
              {description}
            </p>
          )}

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldVirus className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* GRID CONTAINER */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer"
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
