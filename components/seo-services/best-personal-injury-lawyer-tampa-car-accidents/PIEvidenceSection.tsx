"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCamera,
  FaUsers,
  FaVideo,
  FaBuilding,
  FaFileMedical,
  FaIdCard,
  FaCar,
  FaFileAlt,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PIEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  ctaText?: string;
  ctaButtonText?: string;
  items?: EvidenceItem[];
}

const defaultEvidenceItems: EvidenceItem[] = [
  {
    id: "scene-photographs-videos",
    icon: <FaCamera className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Scene Photographs & Videos",
    description:
      "Take pictures of vehicle positions, skid marks, road debris and traffic signals. Wide scene photographs establish clear context while close shots capture valuable damage details. Adjusters look for specific damage patterns that regular people might easily miss. These visual records often contradict the story the other driver tells their insurer.",
  },
  {
    id: "witness-information",
    icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Witness Information",
    description:
      "Collect witness names and phone numbers quickly because people rarely stick around scenes. A neutral witness account carries far more weight than either driver's personal version. Personal injury lawyer follows up with witnesses immediately before their memories start to fade.",
  },
  {
    id: "dashcam-footage",
    icon: <FaVideo className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Dashcam Footage",
    description:
      "Dashcam footage from your own vehicle can settle a fault dispute instantly. Save the file immediately, since many cameras overwrite old footage within days. Personal injury attorney can also request footage from the other driver's dashcam early.",
  },
  {
    id: "local-business-traffic-footage",
    icon: <FaBuilding className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Local Business & Traffic Footage",
    description:
      "Nearby gas stations, storefronts, and local traffic cameras often capture collisions directly. Most private businesses only retain video footage for seven to thirty days maximum. Attorney sends legal preservation letters fast to stop footage from vanishing completely.",
  },
  {
    id: "medical-documentation",
    icon: <FaFileMedical className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Medical Documentation",
    description:
      "Every visit, diagnosis, and treatment note builds the medical record behind your claim. Gaps in treatment give adjusters an opening to argue you weren't really hurt. Personal injury lawyer requests complete records from every provider you've ever seen for this injury.",
  },
  {
    id: "driver-information",
    icon: <FaIdCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Driver Information",
    description:
      "Collect other driver's license, insurance card, license plate, and phone number. Photograph these physical documents directly instead of copying down information. Handwritten mistakes on names or policy numbers can delay your claim for weeks.",
  },
  {
    id: "damage-of-vehicle",
    icon: <FaCar className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Damage Of Vehicle",
    description:
      "Photograph every small or big wreckage of your vehicle from every angle before towing or repairs begin. Specific damage patterns reveal impact speed and direction better than personal memory does. Keep your car completely available for inspection.",
  },
  {
    id: "official-reports",
    icon: <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Official Reports",
    description:
      "Request your official accident report through Florida's crash portal or responding agencies. Tampa Police, Hillsborough County Sheriff, or Florida Highway Patrol handled your crash. These reports become public after sixty days but involved parties can request them. You shouldn't wait to gather these vital crash records for your legal team.",
  },
];

export default function PIEvidenceSection({
  title = "Which Evidence You Should Preserve After a Tampa Car Accident",
  subTitle = "Evidence disappears fast, and adjusters use gaps to deny your story credibly. Secure these items immediately to build an airtight case for full damages.",
  imagePath = "/images/seo-services/best-personal-injury-lawyer-tampa-car-accidents/evidence-folder.png",
  ctaText = "Act fast. Evidence vanishes quickly. Secure crash proof with McCulloch Law.",
  ctaButtonText = "Get a Free Case Evaluation",
  items = defaultEvidenceItems,
}: PIEvidenceSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {subTitle}
            </p>

            <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Preserve Crash Evidence - McCulloch Law"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

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

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      {item.icon}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

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
