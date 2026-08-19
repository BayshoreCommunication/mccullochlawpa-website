"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaComments,
  FaCamera,
  FaVideo,
  FaUserPlus,
  FaMedkit,
  FaEnvelopeOpenText,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  ctaText?: string;
  ctaButtonText?: string;
  items?: EvidenceItem[];
}

const defaultEvidenceItems: EvidenceItem[] = [
  {
    id: "text-call-logs",
    icon: <FaComments className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Text Messages and Call Logs",
    description:
      "Screenshot all voicemails, missed calls and direct messages with alleged victim from before, during and after the incident. These records reveal communication patterns, prior agreements and victim's account of events. Preserve the entire conversation thread intact as prosecutors may selectively use parts to fit their narrative.",
  },
  {
    id: "dated-photos",
    icon: <FaCamera className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Dated Photographs of Your Own Injuries",
    description:
      "Record every visible injury on your body immediately after the incident with date and time stamp in image file. Defensive injuries on forearms, hands and upper body directly challenge the prosecution's aggressor claim. A defense attorney uses these photos to challenge the arresting officer's primary aggressor determination.",
  },
  {
    id: "surveillance-footage",
    icon: <FaVideo className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Surveillance and Security Camera Footage",
    description:
      "Identify every camera for capturing incident or the surrounding period. For instance doorbell cameras, parking lot cameras, nearby business security cameras and neighbors' exterior cameras. After 48 to 72 hours of incident security footage is usually overwritten. It makes preservation requests urgent from the moment of the accusation. McCulloch Law files formal legal holds on applicable footage immediately upon being retained.",
  },
  {
    id: "witness-info",
    icon: <FaUserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Witness Contact Information",
    description:
      "Write down the full name, phone number and relationship of every witness of that incident or its immediate aftermath before anyone else contacts them. If neighbors, visitors and family members observed anything relevant, it needs to be documented before prosecution shapes them differently.",
  },
  {
    id: "medical-records",
    icon: <FaMedkit className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Medical Records and Treatment Documentation",
    description:
      "If you sought medical treatment after the incident, request those records immediately. This might include emergency room notes, discharge paperwork and any injury photographs taken by treating medical staff. Medical records establish the nature and pattern of your injuries. This directly contradicts the alleged victim's account when injuries are inconsistent with police report's description of events. Your defense attorney uses these records to challenge the prosecution's physical injury narrative in court.",
  },
  {
    id: "prior-communication",
    icon: <FaEnvelopeOpenText className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Prior Communication Showing Relationship History",
    description:
      "Preserve emails, social media messages and any written communication of the relationship's nature and prior conflicts. Keep record of any history of the alleged victim threatening or previously filing false accusations. Context about the relationship carries evidentiary weight in domestic violence cases. In particular when the accusation surfaces during an active divorce or contested custody proceeding. This communication can establish a clear motive and credibility problems to support defense strategy.",
  },
];

export default function DomesticViolenceEvidenceSection({
  title = "Which Evidence You Should Preserve After Tampa Domestic Violence Accusation",
  subTitle = "Preserving evidence is mandatory in first 24 hours after domestic violence. These can help your Tampa domestic violence defense lawyer to build your case.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/which-evidence-you-should-preserve.webp",
  ctaText = "Act fast. Evidence disappears quickly. Protect your rights and your future.",
  ctaButtonText = "Get a Free Case Review Today",
  items = defaultEvidenceItems,
}: DomesticViolenceEvidenceSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-8 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: TITLE, EMBLEM, IMAGE & DARK CTA CARD     */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            {/* Shield Emblem Divider */}
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subTitle.split("first 24 hours")[0]}
              <span className="font-bold text-amber-600">first 24 hours</span>
              {subTitle.split("first 24 hours")[1]}
            </p>

            {/* Image */}
            <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Preserve Legal Evidence - McCulloch Law"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Dark Navy Callout CTA Box */}
            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  {ctaText}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-yellow-400 transition-colors group cursor-pointer"
                >
                  <span>{ctaButtonText}</span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: 6 EVIDENCE CARDS (2-COLUMN GRID)        */}
          {/* ==================================================== */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col relative overflow-hidden cursor-pointer"
                >
                  {/* Subtle top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Row: Icon + Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      {item.icon}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Expanding Gold Accent Line */}
                  <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

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
