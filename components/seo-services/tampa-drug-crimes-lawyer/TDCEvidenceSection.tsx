"use client";

import React from "react";
import Image from "next/image";
import { FaVideo, FaComments, FaFileMedical, FaSearch } from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: EvidenceItem[];
}

const defaultEvidenceItems: EvidenceItem[] = [
  {
    id: "body-dashcam-footage",
    title: "Body Camera and Dashcam Footage",
    description:
      "Footage from the stop can prove your search was never lawful. Tampa Police and Hillsborough County deputies record most traffic stops on camera. This footage can show whether officers had a lawful reason to search. Most agencies overwrite footage on a rolling schedule within weeks. A preservation request needs to go out immediately after your arrest.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "texts-calls-receipts",
    title: "Text Messages, Call Logs and Receipts",
    description:
      "A single text thread can place you far from the alleged scene. Phone records and receipts establish where you were and why. Screenshot everything now, before a routine deletion erases your proof.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-prescription-records",
    title: "Medical Records and Prescription Documentation",
    description:
      "A pharmacy record can end a possession charge in one page. Physician and pharmacy records can shut down a possession charge fast. Most Tampa pharmacies keep prescription records on file for several years. Requesting them early avoids delay once your case reaches a deadline.",
    icon: <FaFileMedical className="w-5 h-5 text-primary" />,
  },
];

export default function TDCEvidenceSection({
  title = "Which Evidence You Should Preserve After Tampa Drug Arrest",
  subTitle = "Winning evidence in a Tampa drug case rarely comes from the police report itself.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultEvidenceItems,
}: TDCEvidenceSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaSearch className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={imagePath}
              alt="Preserve Evidence After Tampa Drug Arrest"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                Preserve your evidence early before law enforcement schedules erase critical proof.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
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
