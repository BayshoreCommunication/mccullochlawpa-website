"use client";

import React from "react";
import Image from "next/image";
import {
  FaHospital,
  FaCamera,
  FaAddressBook,
  FaFileAlt,
  FaUserTie,
  FaReceipt,
  FaVideo,
  FaSearch,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: EvidenceItem[];
}

const defaultItems: EvidenceItem[] = [
  {
    id: "medical-records-diagnostic-imaging",
    title: "Medical Records and Diagnostic Imaging",
    description:
      "Objective medical documentation forms the foundational framework for proving severe physical disability claims. High resolution MRI scans, CT images and nerve conduction studies confirm precise anatomical structural damage. Continuous treatment notes document initial physical trauma progression and permanent physical impairment ratings.",
    icon: <FaHospital className="w-5 h-5 text-primary" />,
  },
  {
    id: "accident-scene-photos-videos",
    title: "Accident Scene Photos and Videos",
    description:
      "Immediate photographic evidence preserves critical crash scene details before environmental conditions alter physical evidence. Visual evidence captures road surface gouges, skid marks, traffic signal setups and sightline obstructions. Vehicle damage photos demonstrate the extreme kinetic energy impact forces involved during collisions.",
    icon: <FaCamera className="w-5 h-5 text-primary" />,
  },
  {
    id: "witness-statements",
    title: "Witness Statements",
    description:
      "Independent third-party witness testimony provides unbiased corroboration regarding collision event sequences and fault. Neutral accounts help establish specific traffic violations, reckless vehicle speeds and driver distraction factors. Timely recorded witness interviews prevent memory fading and defeat manufactured insurance defense claims.",
    icon: <FaAddressBook className="w-5 h-5 text-primary" />,
  },
  {
    id: "police-incident-reports",
    title: "Police or Incident Reports",
    description:
      "Official police crash reports record crucial investigative observations compiled by responding law enforcement officers. Reports list involved parties, insurance carrier data, initial fault assessments and issued traffic citations. Narratives compiled by officers establish foundational facts for subsequent independent private crash investigations.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "expert-medical-vocational-testimony",
    title: "Expert Medical and Vocational Testimony",
    description:
      "Retained medical specialists explain complex surgical procedures and lifetime disability prognoses to trial juries. Vocational rehabilitation experts evaluate residual physical capabilities to establish realistic future employment limitations. Credible expert testimony translates complex medical physical harm into clear monetary compensation demands.",
    icon: <FaUserTie className="w-5 h-5 text-primary" />,
  },
  {
    id: "employment-income-records",
    title: "Employment and Income Records",
    description:
      "Historical tax documents, W-2 forms, wage stubs and corporate financial statements verify past income. Payroll records confirm lost work time, exhausted sick leave and lost profit distributions. Comprehensive earnings documentation validates economic models projecting complete loss of future earning capacity.",
    icon: <FaReceipt className="w-5 h-5 text-primary" />,
  },
  {
    id: "surveillance-traffic-camera-footage",
    title: "Surveillance and Traffic Camera Footage",
    description:
      "Video footage from traffic management cameras or commercial property security systems provides objective proof. Recordings document precise collision timing, driver braking attempts and traffic signal indications accurately. Formal legal spoliation notices must be served quickly to prevent electronic video overwriting.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
];

export default function CILEvidenceSection({
  title = "What Evidence Strengthens Your Catastrophic Injury Case",
  subTitle = "Florida law allows several categories of damages in a catastrophic injury claim. Each one requires its own proof.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultItems,
}: CILEvidenceSectionProps) {
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
              <FaSearch className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <Image
              src={imagePath}
              alt="What Evidence Strengthens Your Catastrophic Injury Case"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                Preserve critical medical, video and vocational proof to maximize claim value.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-4 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#0c1a29] rounded-2xl p-5 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
