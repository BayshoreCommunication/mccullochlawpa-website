"use client";

import React from "react";
import {
  FaMicrophone,
  FaDollarSign,
  FaSearch,
  FaUserMd,
  FaShareAlt,
  FaHourglassHalf,
  FaShieldAlt,
} from "react-icons/fa";

export interface AdjusterTacticItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PIAdjustersSectionProps {
  title?: string;
  subTitle?: string;
  items?: AdjusterTacticItem[];
}

const defaultAdjusterItems: AdjusterTacticItem[] = [
  {
    id: "recorded-statement",
    icon: <FaMicrophone className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Requesting a Recorded Statement",
    description:
      "Adjusters eagerly request recorded statements within mere days following your serious vehicle crash. They eagerly twist these captured verbal statements later to damage your injury claim. McCulloch Law completely handles outside communications so you won't provide statements alone.",
  },
  {
    id: "quick-lowball-settlement",
    icon: <FaDollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Quick Lowball Settlement",
    description:
      "Adjusters frequently offer fast cash settlements before doctors analyze your full physical trauma. These initial fast checks cover a tiny fraction of your actual medical worth. Accepting quick checks means you cannot ask for additional recovery funds later on.",
  },
  {
    id: "medical-fishing-expeditions",
    icon: <FaSearch className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Medical Fishing Expeditions",
    description:
      "Company adjusters request your complete medical history hoping to uncover unrelated prior illnesses. They use old physical injuries to argue current pain wasn't caused by crashes. McCulloch Law’s personal injury lawyer strictly limits documentation requests to items directly relevant to your case.",
  },
  {
    id: "independent-medical-exam",
    icon: <FaUserMd className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Independent Medical Exam",
    description:
      "Insurers sometimes force independent medical examinations using physicians of their own specific choice. These hired doctors work directly for insurance corporations instead of your healing process. McCulloch Law fully prepares clients and aggressively challenges biased medical conclusions afterward.",
  },
  {
    id: "social-media-surveillance",
    icon: <FaShareAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Social Media Surveillance",
    description:
      "Adjusters constantly monitor Facebook and Instagram searching for photos undercutting your physical claim. Simple smiling vacation photos get twisted into proof you aren't actually suffering. Our personal injury attorney strongly advises local clients to avoid social platforms until cases resolve.",
  },
  {
    id: "stall-and-starve-tactics",
    icon: <FaHourglassHalf className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Stall and Starve Tactics",
    description:
      "Shrewd insurers delay communication for months hoping financial pressures force cheap settlements. Avoided calls, missing documents, and vague excuses are rarely accidents on their end. McCulloch Law forces real progress through tight deadlines, legal demands, and active litigation.",
  },
];

export default function PIAdjustersSection({
  title = "How Insurance Adjusters Try to Reduce Your Tampa Car Accident Claim",
  subTitle = "Without personal injury lawyer tampa car accidents insurance adjusters often try to reduce claims.",
  items = defaultAdjusterItems,
}: PIAdjustersSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
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
