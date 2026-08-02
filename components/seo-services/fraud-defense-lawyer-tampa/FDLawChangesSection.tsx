"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaChartLine,
  FaLaptopCode,
  FaUserShield,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface FraudLawChangeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FDLawChangesSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: FraudLawChangeItem[];
}

const defaultLawChangeItems: FraudLawChangeItem[] = [
  {
    id: "updated-felony-threshold-levels",
    icon: <FaChartLine className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Updated Felony Threshold Levels",
    description:
      "Florida considers fraud offenses by assessing the amount of money that was lost in the scam. A charge that previously had one set of consequences can then be bumped up to a higher felony grade by the legislature. There's a huge difference from a third to first-degree felony. It can mean years of additional prison exposure. McCulloch Law applies the current statutory framework to every case we take.",
  },
  {
    id: "digital-wire-fraud-enforcement",
    icon: <FaLaptopCode className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Increased Enforcement on Digital and Wire Fraud",
    description:
      "Florida prosecutors, both state and federal, have intensified their focus on wire fraud and digital financial crimes. Cases involving cryptocurrency, online payment platforms, and electronic communications are receiving more attention from Tampa-area task forces than they were even a few years ago. If your case has any digital component, the evidentiary issues are more involved than a standard financial fraud matter. Our fraud defense lawyer Tampa team knows how that evidence gets built and where it can be challenged.",
  },
  {
    id: "sentencing-enhancements-vulnerable-victims",
    icon: <FaUserShield className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Sentencing Enhancements for Fraud Against Vulnerable Victims",
    description:
      "Florida has expanded the sentencing enhancements for so-called \"elderly\" and \"financial\" victims. Under Florida Statute 775.0844, prosecutors are allowed to request a charge reclassification that automatically increases the charge. The provision is used more by Tampa prosecutors in 2026 than in previous years. We flag these enhancements early and dispute them directly when the underlying facts do not support the classification.",
  },
];

export default function FDLawChangesSection({
  title = "How Florida Fraud Law Changes in 2026 Affect Tampa Cases",
  subTitle = "Florida Fraud Law is not on hold. Crime and sentencing trends change, laws are revised and policies are changed by prosecutors. This is a case filed in 2011 that is not governed by the same rules as this case filed today. An up-to-date fraud defense lawyer Tampa will make a huge difference when building a defense.",
  imagePath = "/images/seo-services/fraud-defense-lawyer-tampa/courthouse-law.png",
  items = defaultLawChangeItems,
}: FDLawChangesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {subTitle}
            </p>

            <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Florida 2026 Fraud Defense Statutory Updates"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaBalanceScale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  <span>Up-to-date legal strategy.</span>
                  <span>Disputing sentence enhancements.</span>
                  <span className="font-bold text-white">Former prosecutor defense.</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-slate-700/60" />

              <a
                href="tel:8134442817"
                className="group flex items-center gap-4 hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-950 shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <IoIosCall className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-primary tracking-wide leading-tight group-hover:text-yellow-400 transition-colors">
                    Get a Free Case Review
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Speak with a Tampa Fraud Defense Attorney.
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="border-l-2 border-primary pl-3.5 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
