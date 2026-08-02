"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaMapMarkerAlt,
  FaFileAlt,
  FaLandmark,
  FaUsers,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface LawChangeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceLawChangesSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  imagePath?: string;
  items?: LawChangeItem[];
}

const defaultLawChangeItems: LawChangeItem[] = [
  {
    id: "repeat-offender-def",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Updated Repeat Offender Definition",
    description:
      "Florida now applies enhanced sentencing to defendants with prior domestic violence history along with formal convictions on their criminal record. Prior diversion completion, dismissed charge or prior injunction can now impact defendant classification sentencing. Defendants who thought their record was clear now face much higher sentencing exposure. This change is due to revised definition.",
  },
  {
    id: "gps-monitoring",
    icon: <FaMapMarkerAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "GPS Monitoring for Prior Domestic Violence History",
    description:
      "Tampa judges are increasingly ordering GPS ankle monitoring during the pretrial period for domestic violence defendants. In particular, those with any prior arrest history in the system. The monitoring device restricts movement outside court approved zones. It alerts pretrial services to any proximity violations near the protected party's location. Tampering with the device or failing to keep it charged constitutes an independent violation of pretrial release conditions.",
  },
  {
    id: "contact-prohibition-consequences",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Legal Consequences for Violating Contact Prohibition Order",
    description:
      "Updated statutes mandate automatic contempt charges for each documented non contact order violation. There is no judicial discretion to overlook the breach or issue a warning. Each violation is treated as an independent criminal event rather than a condition breach subject to informal correction. Hillsborough County prosecutors must file violations within 48 hours of documentation.",
  },
  {
    id: "extended-minimum-sentences",
    icon: <FaLandmark className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Extended Minimum Sentences for Aggravated Domestic Cases",
    description:
      "Aggravated domestic battery convictions in Tampa now carry extended mandatory minimum terms under the revised 2025 statute. This change reduces judicial flexibility in cases where mitigating factors might otherwise lead to a lighter outcome. The revision specifically targets strangulation cases and incidents involving serious bodily injury. Both cases now carry long sentences. This change emphasizes the need for early resolution before trial exposure is set.",
  },
  {
    id: "victim-advocate-access",
    icon: <FaUsers className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Expanded Victim Advocate Access in Court",
    description:
      "Prosecutors now hold statutory authority to include certified victim advocates at every stage of court proceedings. This includes bond hearings, arraignments and direct plea discussions with the defense. These advocates influence the victim's appearance to the judge and the state's acceptable plea terms. Domestic violence defense lawyer tamapa with Hillsborough courtroom experience understand how to strategically address this advocacy role for the defendant.",
  },
];

export default function DomesticViolenceLawChangesSection({
  title = "How Florida's Domestic Violence Laws Changes Affect Cases in 2026",
  highlightedText = "Laws Changes",
  subTitle = "Florida's legislature updated several domestic violence related statutes before 2026. These changes are active right now inside Tampa courtrooms. They carry direct weight on cases moving through Hillsborough County.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/courthouse-law.png",
  items = defaultLawChangeItems,
}: DomesticViolenceLawChangesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: TITLE, EMBLEM, COURTHOUSE IMAGE & CTA   */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Top Emblem Divider */}
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title.split(highlightedText)[0]}
              <span className="text-primary">{highlightedText}</span>
              {title.split(highlightedText)[1]}
            </h2>

            {/* Bottom Emblem Divider */}
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subTitle.split("right now")[0]}
              <span className="font-bold text-amber-600">right now</span>
              {subTitle.split("right now")[1]}
            </p>

            {/* Courthouse / Building Image */}
            <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Tampa Courthouse Legal Changes 2026"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Dark Navy CTA Card */}
            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-4">
              {/* Feature Text */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaBalanceScale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  <span>Legal changes.</span>
                  <span>Real consequences.</span>
                  <span className="font-bold text-white">Strong defense matters.</span>
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
          {/* RIGHT COLUMN: 5 STACKED LAW CHANGE CARDS             */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                {/* Top subtle hover line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Circular Badge Icon (White Background + Gold Border + Primary Icon) */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Content Block */}
                <div className="flex flex-col flex-grow">
                  {/* Title with Vertical Gold Accent Line */}
                  <div className="border-l-2 border-primary pl-3.5 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
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
