"use client";

import React from "react";
import { FaWeightHanging, FaLandmark, FaUsers, FaGavel, FaShieldAlt } from "react-icons/fa";

export interface TraffickingItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCTraffickingSectionProps {
  title?: string;
  subTitle?: string;
  items?: TraffickingItem[];
}

const defaultTraffickingItems: TraffickingItem[] = [
  {
    id: "florida-trafficking-weights",
    title: "Florida Trafficking Weights",
    description:
      "Four grams of fentanyl brings a mandatory minimum  and 28 grams brings 25 years. Oxycodone triggers trafficking at just seven grams, including the weight of pill fillers and coatings. Prosecutors need proof of weight alone. McCulloch Law challenges lab weight reports, packaging assumptions and the methods used to measure substances in the first place.",
    icon: <FaWeightHanging className="w-5 h-5 text-primary" />,
  },
  {
    id: "federal-charges-defense",
    title: "Federal Charges and Defense",
    description:
      "State charges turn federal fast once quantity, interstate travel  or wiretaps are involved. The DEA, FBI  and Homeland Security investigate these cases for months or sometimes years. Federal sentencing guidelines limit state judges' discretion. McCulloch Law monitors how a case progresses from Hillsborough County to Middle District of Florida. And prepares for this shift in advance.",
    icon: <FaLandmark className="w-5 h-5 text-primary" />,
  },
  {
    id: "conspiracy-multi-defendant",
    title: "Conspiracy and Multi Defendant Charges",
    description:
      "Federal prosecutors favor conspiracy charges because the net widens around everyone connected to a case. An agreement alone can create liability, even without a single completed drug transaction. Multi defendant indictments often group minor participants alongside organizers facing decades. McCulloch Law separates your role from co-defendants' conduct early, before a joint narrative forms in front of a jury. A minor role, once proven, can mean years instead of decades.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
  {
    id: "mandatory-minimums-trafficking",
    title: "Mandatory Minimums",
    description:
      "A clean record still leaves someone exposed once a trafficking weight gets proven at trial. Judges lose discretion entirely once that threshold is established under Section 893.135. A narrow departure exists under Section 893.135(3) for a minor role and no violence. Substantial assistance under the safety valve provision offers another path, one controlled by prosecutors, not judges. McCulloch Law works these openings early, often before charges get formally filed with the State Attorney's Office.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
];

export default function TDCTraffickingSection({
  title = "Drug Trafficking and Federal Drug Charges — How McCulloch Law Defends Your Case",
  subTitle = "Trafficking charges in Florida turn on weight. McCulloch Law treats legal weight thresholds as the core focus of every drug trafficking case.",
  items = defaultTraffickingItems,
}: TDCTraffickingSectionProps) {
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
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="w-10 h-[2px] bg-primary rounded-full mb-3" />

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
