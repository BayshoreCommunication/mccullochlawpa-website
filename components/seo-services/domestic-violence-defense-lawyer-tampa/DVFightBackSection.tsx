"use client";

import React from "react";
import Image from "next/image";
import {
  FaSearch,
  FaFileAlt,
  FaUsers,
  FaVideo,
  FaClipboardList,
  FaHandshake,
  FaBalanceScale,
  FaFolder,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface FightBackItem {
  number: string;
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceFightBackSectionProps {
  title?: string;
  highlightedText?: string;
  paragraph?: string;
  imagePath?: string;
  items?: FightBackItem[];
}

const defaultFightBackItems: FightBackItem[] = [
  {
    number: "01",
    id: "trace-accusations",
    icon: <FaFolder className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Trace Accusations to Custody or Financial Motives",
    description:
      "Allegations made simultaneously with custody or divorce filings hold evidentiary significance. We examine the chronological sequence of events, financial records and communication history. We show precisely the accusation triggers and when it was filed.",
  },
  {
    number: "02",
    id: "compare-affidavit",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Compare Affidavit Language to Evidence",
    description:
      "Police affidavits reflect one officer's interpretation of events rather than verified facts. We measure affidavit language against medical records, photographs and scene documentation. Then we identify exact contradictions the prosecution has quietly built its case around.",
  },
  {
    number: "03",
    id: "witness-accounts",
    icon: <FaUsers className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Obtain Witness Accounts Early",
    description:
      "Witness accounts are clearest in the first 48 hours after an incident. We contact independent witnesses early in the process. We lock in detailed and consistent timelines before the prosecution shapes witness statements.",
  },
  {
    number: "04",
    id: "footage-preservation",
    icon: <FaVideo className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Request Immediate Footage Preservation",
    description:
      "Tampa officers are required to document their responses on body cameras. We filed formal preservation requests within hours of retention. We then target footage that frequently contradicts official police narrative written into charging document.",
  },
  {
    number: "05",
    id: "client-statement",
    icon: <FaClipboardList className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Assess Client Statement for Defense Support",
    description:
      "What a defendant says matters far less than when it is introduced and how it is framed. We decide whether a client statement helps the defense before investigators dominate the record.",
  },
];

export default function DomesticViolenceFightBackSection({
  title = "How McCulloch Law Fights Back Against False Accusation of Domestic Violence in Tampa",
  highlightedText = "Domestic Violence in Tampa",
  paragraph = "False accusations in Tampa domestic violence cases often arise during divorce and custody disputes. Our domestic violence defense lawyer tampa at McCulloch Law is well familiar with these accusations. We build defenses designed to dismantle them.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/attorney-office.png",
  items = defaultFightBackItems,
}: DomesticViolenceFightBackSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: TITLE, PARAGRAPH, IMAGE & DARK CTA      */}
          {/* ==================================================== */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Top Accent Line */}
            <div className="w-16 h-[3px] bg-primary rounded-full" />

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {paragraph}
            </p>

            {/* Courthouse / Building Image */}
            <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="McCulloch Law Fight Back Against False Accusation"
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
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaBalanceScale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-slate-200 leading-snug font-medium uppercase tracking-wider">
                  <span>STRATEGIC DEFENSE.</span>
                  <span>RELENTLESS ADVOCACY.</span>
                  <span className="font-bold text-white">PROTECTING YOUR FUTURE.</span>
                </div>
              </div>

              {/* Gold Divider Line */}
              <div className="h-[1px] w-full bg-slate-700/60" />

              {/* Phone CTA Link */}
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
                    Speak with a Tampa DV Defense Lawyer Today.
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: 6 NUMBERED FIGHT BACK CARDS (3x2 GRID) */}
          {/* ==================================================== */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
                >
                  {/* Top Subtle Hover Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Row: Number Badge Left & Decorative Dot Pattern Right */}
                  <div className="w-full flex items-center justify-between mb-4">
                    {/* Number Badge */}
                    <div className="w-8 h-8 rounded-lg bg-primary text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center shadow-md">
                      {item.number}
                    </div>

                    {/* Decorative 6 Dots Pattern */}
                    <div className="grid grid-cols-3 gap-1 opacity-25">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    </div>
                  </div>

                  {/* Circular Badge Icon Center (White Background + Gold Border + Primary Icon) */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 my-2">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mt-3 mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Gold Accent Divider Line */}
                  <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 transition-all duration-300" />

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
