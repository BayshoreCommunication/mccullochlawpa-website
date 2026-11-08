"use client";

import React from "react";
import Image from "next/image";
import {
  FaUserCheck,
  FaAward,
  FaBuilding,
  FaBalanceScale,
  FaShieldAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BLWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: WhyChooseItem[];
}

const defaultWhyChooseItems: WhyChooseItem[] = [
  {
    id: "prosecutor-background",
    title: "Experience on Both Sides of a Criminal Case",
    description:
      "Attorney Drew McCulloch previously served as a state prosecutor. His background gives him firsthand insight into criminal charging decisions, evidence review and prosecution strategies. He now represents people facing criminal allegations across the Tampa Bay area.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: "legal-experience",
    title: "More Than 15 Years of Legal Experience",
    description:
      "McCulloch Law reports more than 15 years of experience in personal injury and criminal defense. Our work includes cases requiring careful review of police reports, witness accounts, digital communications and disputed events. We assess each case individually and explain the legal options available.",
    icon: <FaAward className="w-5 h-5 text-primary" />,
  },
  {
    id: "local-courtroom-experience",
    title: "Deep Local Courtroom Experience",
    description:
      "Our practice serves clients across Tampa and Hillsborough County. We understand the importance of local court procedures, filing requirements, hearing schedules and compliance with judicial orders. We prepare each case according to its charge, procedural status and court requirements.",
    icon: <FaBuilding className="w-5 h-5 text-primary" />,
  },
  {
    id: "trial-ready-strategy",
    title: "Trial Ready Strategy",
    description:
      "We prepare for trial when necessary while evaluating lawful ways to resolve a case. Our review may include witness credibility, recordings, police reports, prior convictions and questions about the state's evidence. We explain the potential risks and consequences of available options. We do not promise a particular result.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "strong-defense",
    title: "Strong Defense Against Accusations",
    description:
      "An accusation alone does not establish guilt. We examine the alleged contact, the circumstances of the incident and the reliability of the available evidence. We also assess potential defenses such as self defense, accidental contact, consent related issues, mistaken identity and insufficient evidence. The appropriate strategy depends on the facts and applicable law.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "direct-communication",
    title: "Direct Communication and 24/7 Availability",
    description:
      "We explain legal terms in plain English, discuss case developments and answer questions about the process. You deserve clear information before making decisions about your defense. Call (813) 444 2817 to request a free consultation. Our office accepts inquiries 24/7.",
    icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
  },
];

export default function BLWhyChooseSection({
  title = "Why Choose Our Battery Defense Firm in Tampa?",
  subTitle = "A battery accusation can affect your criminal record, employment, family relationships and freedom. You need clear legal advice and a defense strategy based on the facts of your case.",
  imagePath = "/images/seo-services/battery-lawyer-tampa/mcculloch.webp",
  items = defaultWhyChooseItems,
}: BLWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* CONTENT GRID: IMAGE COLUMN + ITEMS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* LEFT: ATTORNEY IMAGE */}
          <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[500px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={imagePath}
              alt="Attorney Drew McCulloch - Tampa Battery Defense Lawyer"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl">
              <h4 className="text-base font-bold text-slate-900">
                Attorney Drew McCulloch
              </h4>
              <p className="text-xs text-primary font-semibold">
                Former State Prosecutor • 15+ Years Legal Experience
              </p>
            </div>
          </div>

          {/* RIGHT: WHY CHOOSE ITEMS */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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

