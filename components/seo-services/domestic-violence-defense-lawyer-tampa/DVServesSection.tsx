"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserShield,
  FaBalanceScale,
  FaCar,
  FaBicycle,
  FaWalking,
  FaTruck,
  FaMotorcycle,
  FaBuilding,
  FaPlusSquare,
  FaBoxOpen,
  FaExclamationTriangle,
  FaDog,
  FaFistRaised,
  FaShieldAlt,
  FaUserSecret,
  FaFire,
  FaHome,
  FaPills,
  FaGavel,
  FaFileAlt,
  FaFileSignature,
  FaMask,
  FaUsers,
  FaExclamationCircle,
  FaMoneyBillWave,
  FaFolder,
  FaClipboardList,
  FaCrosshairs,
  FaIdCard,
  FaTachometerAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserCheck,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface PracticeAreaItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  href?: string;
}

export interface DVServesSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  imagePath?: string;
}

const personalInjuryItems: PracticeAreaItem[] = [
  { id: "auto-accident", name: "Auto Accident", icon: <FaCar className="w-4 h-4 text-slate-700" />, href: "/best-personal-injury-lawyer-tampa-car-accidents" },
  { id: "bicycle-accident", name: "Bicycle Accident", icon: <FaBicycle className="w-4 h-4 text-slate-700" /> },
  { id: "slip-fall", name: "Slip, Trip and Fall", icon: <FaWalking className="w-4 h-4 text-slate-700" /> },
  { id: "truck-accidents", name: "Truck Accidents", icon: <FaTruck className="w-4 h-4 text-slate-700" /> },
  { id: "motorcycle-accidents", name: "Motorcycle Accidents", icon: <FaMotorcycle className="w-4 h-4 text-slate-700" /> },
  { id: "rideshare-accident", name: "Uber, UberEats and Lyft Accident", icon: <FaCar className="w-4 h-4 text-slate-700" /> },
  { id: "premises-liability", name: "Premises Liability", icon: <FaBuilding className="w-4 h-4 text-slate-700" /> },
  { id: "medical-malpractice", name: "Medical Malpractice", icon: <FaPlusSquare className="w-4 h-4 text-slate-700" /> },
  { id: "products-liability", name: "Products Liability", icon: <FaBoxOpen className="w-4 h-4 text-slate-700" /> },
  { id: "wrongful-death", name: "Wrongful Death", icon: <FaBalanceScale className="w-4 h-4 text-slate-700" /> },
  { id: "fatal-accidents", name: "Fatal Accidents", icon: <FaExclamationTriangle className="w-4 h-4 text-slate-700" /> },
  { id: "dog-bites", name: "Dog Bites", icon: <FaDog className="w-4 h-4 text-slate-700" /> },
];

const criminalDefenseCol1: PracticeAreaItem[] = [
  { id: "assault", name: "Assault", icon: <FaFistRaised className="w-4 h-4 text-slate-700" /> },
  { id: "battery", name: "Battery", icon: <FaShieldAlt className="w-4 h-4 text-slate-700" /> },
  { id: "stalking", name: "Stalking", icon: <FaUserSecret className="w-4 h-4 text-slate-700" /> },
  { id: "arson-mischief", name: "Arson and Criminal Mischief", icon: <FaFire className="w-4 h-4 text-slate-700" /> },
  { id: "domestic-abuse", name: "Domestic Abuse", icon: <FaHome className="w-4 h-4 text-slate-700" />, href: "/domestic-violence-defense-lawyer-tampa" },
  { id: "drug-crimes", name: "Drug Crimes", icon: <FaPills className="w-4 h-4 text-slate-700" /> },
  { id: "dui", name: "DUI", icon: <FaCar className="w-4 h-4 text-slate-700" /> },
  { id: "felonies-probation", name: "Felonies / Probation", icon: <FaGavel className="w-4 h-4 text-slate-700" /> },
  { id: "fraud", name: "Fraud", icon: <FaFileAlt className="w-4 h-4 text-slate-700" />, href: "/fraud-defense-lawyer-tampa" },
  { id: "homicide", name: "Homicide / Attempted Homicide", icon: <FaBalanceScale className="w-4 h-4 text-slate-700" /> },
];

const criminalDefenseCol2: PracticeAreaItem[] = [
  { id: "injunctions", name: "Injunctions", icon: <FaFileSignature className="w-4 h-4 text-slate-700" /> },
  { id: "burglary-trespass", name: "Burglary and Trespass", icon: <FaMask className="w-4 h-4 text-slate-700" /> },
  { id: "juvenile-crimes", name: "Juvenile Crimes", icon: <FaUsers className="w-4 h-4 text-slate-700" /> },
  { id: "misdemeanors", name: "Misdemeanors", icon: <FaExclamationCircle className="w-4 h-4 text-slate-700" /> },
  { id: "robbery", name: "Robbery", icon: <FaMoneyBillWave className="w-4 h-4 text-slate-700" /> },
  { id: "theft-crimes", name: "Theft Crimes", icon: <FaFolder className="w-4 h-4 text-slate-700" /> },
  { id: "seal-expunge", name: "Seal / Expunge", icon: <FaFolder className="w-4 h-4 text-slate-700" /> },
  { id: "sex-crimes", name: "Sex Crimes", icon: <FaShieldAlt className="w-4 h-4 text-slate-700" />, href: "/sex-crime-defense-lawyer-tampa" },
  { id: "violation-probation", name: "Violation of Probation", icon: <FaClipboardList className="w-4 h-4 text-slate-700" /> },
  { id: "weapons-firearms", name: "Weapons & Firearms Charges", icon: <FaCrosshairs className="w-4 h-4 text-slate-700" /> },
  { id: "suspended-license", name: "Driving with a Suspended or Revoked License", icon: <FaIdCard className="w-4 h-4 text-slate-700" /> },
  { id: "vehicular-manslaughter", name: "Vehicular Manslaughter", icon: <FaCar className="w-4 h-4 text-slate-700" /> },
  { id: "speeding-violations", name: "Speeding and High Speed Violations", icon: <FaTachometerAlt className="w-4 h-4 text-slate-700" /> },
];

export default function DVServesSection({
  title = "McCulloch Law Serves Criminal Defense & Personal Injury Cases Across Tampa",
  highlightedText = "Personal Injury Cases Across Tampa",
  subTitle = "McCulloch Law represents clients across Tampa in both personal injury and criminal defense.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/tampa-skyline-palms.png",
}: DVServesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* TOP SECTION: GRID LAYOUT FOR LEFT COLUMN AND RIGHT PRACTICE AREAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: TITLE, PARAGRAPH, IMAGE & CTA          */}
          {/* ==================================================== */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 leading-tight tracking-tight">
              {title.split(highlightedText)[0]}
              <span className="text-primary block mt-1">{highlightedText}</span>
              {title.split(highlightedText)[1]}
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {subTitle}
            </p>

            {/* City Skyline Image */}
            <div className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="McCulloch Law Serves Tampa Criminal Defense & Personal Injury"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Dark Navy Callout CTA Box */}
            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-4">
              {/* Feature Text */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaUserShield className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  <span>Aggressive Defense.</span>
                  <span>Proven Results.</span>
                  <span className="font-bold text-primary">Your Future Matters.</span>
                </div>
              </div>

              {/* Gold Divider Line */}
              <div className="h-[1px] w-full bg-slate-700/60" />

              {/* Phone CTA Link */}
              <a
                href="tel:8134442817"
                className="group flex items-center gap-4 hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-primary/50 flex items-center justify-center text-slate-950 shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <IoIosCall className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-primary tracking-wide leading-tight group-hover:text-yellow-400 transition-colors">
                    Get a Free Case Review
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Speak with a Tampa Defense Lawyer Today.
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* ==================================================== */}
          {/* RIGHT AREA: 2 PRACTICE AREA COLUMNS                 */}
          {/* ==================================================== */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* COLUMN 1: PERSONAL INJURY (4 cols on md) */}
            <div className="md:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md flex flex-col h-full">
              {/* Header Pill */}
              <div className="w-full bg-[#0B1B2D] text-white rounded-full py-3 px-5 flex items-center justify-center gap-3 shadow-md mb-6 border border-slate-800">
                <div className="w-7 h-7 rounded-full bg-white border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <FaUserShield className="w-4 h-4 text-primary" />
                </div>
                <span className="font-bold text-sm tracking-wider uppercase text-slate-100">
                  PERSONAL INJURY
                </span>
              </div>

              {/* List of Personal Injury Items */}
              <div className="flex flex-col divide-y divide-slate-100">
                {personalInjuryItems.map((item) =>
                  item.href ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="flex items-center gap-3.5 py-2.5 px-2 hover:bg-slate-50 rounded-xl transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all">
                        {item.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <div
                      key={item.id}
                      className="flex items-center gap-3.5 py-2.5 px-2 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {item.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* COLUMN 2: CRIMINAL DEFENSE (7 cols on md) */}
            <div className="md:col-span-7 bg-[#FFFDF9] rounded-3xl p-5 sm:p-6 border border-amber-200/60 shadow-md flex flex-col h-full">
              {/* Header Pill */}
              <Link
                href="/criminal-defense-lawyer-tampa-fl"
                className="w-full bg-primary text-slate-950 rounded-full py-3 px-5 flex items-center justify-center gap-3 shadow-md mb-6 hover:opacity-90 transition-opacity"
              >
                <div className="w-7 h-7 rounded-full bg-white border border-slate-950/20 flex items-center justify-center text-slate-950 shrink-0">
                  <FaBalanceScale className="w-4 h-4 text-slate-950" />
                </div>
                <span className="font-bold text-sm tracking-wider uppercase text-slate-950">
                  CRIMINAL DEFENSE
                </span>
              </Link>

              {/* 2 Sub-Columns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {/* Sub-Column 1 */}
                <div className="flex flex-col divide-y divide-slate-100">
                  {criminalDefenseCol1.map((item) =>
                    item.href ? (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="flex items-center gap-3 py-2.5 px-1.5 hover:bg-amber-50/60 rounded-xl transition-colors group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all">
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ) : (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 py-2.5 px-1.5 rounded-xl"
                      >
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm">
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {item.name}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Sub-Column 2 */}
                <div className="flex flex-col divide-y divide-slate-100">
                  {criminalDefenseCol2.map((item) =>
                    item.href ? (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="flex items-center gap-3 py-2.5 px-1.5 hover:bg-amber-50/60 rounded-xl transition-colors group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all">
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ) : (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 py-2.5 px-1.5 rounded-xl"
                      >
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm">
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {item.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ==================================================== */}
        {/* BOTTOM FEATURE BAR (DARK NAVY FULL WIDTH)            */}
        {/* ==================================================== */}
        <div className="mt-12 bg-[#06121E] rounded-2xl p-6 text-white shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3 first:pl-0">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-sm">
                <FaMapMarkerAlt className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col text-xs sm:text-sm">
                <span className="font-bold text-white leading-tight">Local Tampa Attorneys</span>
                <span className="text-slate-300 text-xs mt-0.5">We know the courts, the judges, and the local system.</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-sm">
                <FaShieldAlt className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col text-xs sm:text-sm">
                <span className="font-bold text-white leading-tight">Aggressive Defense</span>
                <span className="text-slate-300 text-xs mt-0.5">We fight for your rights and your future.</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-sm">
                <FaUserCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col text-xs sm:text-sm">
                <span className="font-bold text-white leading-tight">Client-Focused Representation</span>
                <span className="text-slate-300 text-xs mt-0.5">You're not just a case number. You're our priority.</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-slate-950 shrink-0 shadow-sm">
                <IoIosCall className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col text-xs sm:text-sm">
                <span className="font-bold text-primary leading-tight">Get a Free Case Review</span>
                <span className="text-slate-300 text-xs mt-0.5">Confidential. Experienced. Here for You.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
