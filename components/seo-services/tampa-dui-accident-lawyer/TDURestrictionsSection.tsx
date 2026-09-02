"use client";

import React from "react";
import {
  FaHourglassHalf,
  FaFileContract,
  FaIdCard,
  FaKey,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface RestrictionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDURestrictionsSectionProps {
  title?: string;
  subTitle?: string;
  items?: RestrictionItem[];
}

const defaultItems: RestrictionItem[] = [
  {
    id: "admin-suspension-timeline",
    title: "Administrative License Suspension Timeline",
    description:
      "The state licensing agency automatically suspends your license following an unlawful blood alcohol arrest. Your suspension takes effect on your arrest date, though your citation permits driving for ten days. Failing to act within ten days results in immediate, full license loss.",
    icon: <FaHourglassHalf className="w-5 h-5 text-red-500" />,
  },
  {
    id: "formal-review-hearing",
    title: "Requesting a Formal Review Hearing",
    description:
      "You must submit a formal review request within ten calendar days to challenge your suspension. Formal review hearings allow our legal team to question officers and challenge license revocations. Requesting this hearing secures a temporary driving permit so you can continue working.",
    icon: <FaFileContract className="w-5 h-5 text-red-500" />,
  },
  {
    id: "hardship-license-eligibility",
    title: "Hardship License Eligibility in Hillsborough County",
    description:
      "First offense drivers can apply for business purpose hardship licenses after fulfilling specific state requirements. Eligibility requires registering for approved state DUI school and passing a formal administrative hearing. A hardship permit allows driving solely for work, school and necessary medical appointments.",
    icon: <FaIdCard className="w-5 h-5 text-red-500" />,
  },
  {
    id: "interlock-device-requirements",
    title: "Ignition Interlock Device Requirements",
    description:
      "Courts mandate installing approved ignition interlock devices on your vehicle before reinstating driving privileges. You must blow into the device before starting your engine and during periodic rolling retests. Drivers cover installation costs, monthly device monitoring fees and removal expenses out of pocket.",
    icon: <FaKey className="w-5 h-5 text-red-500" />,
  },
  {
    id: "license-reinstatement-conviction",
    title: "License Reinstatement After Conviction",
    description:
      "Restoring full driving privileges requires paying administrative fees and providing official DUI school certificates. You must also file Form SR-22 high risk insurance coverage proof with the state. Missing any state requirements leads to indefinite driver's license cancellations and legal trouble.",
    icon: <FaCheckCircle className="w-5 h-5 text-red-500" />,
  },
];

export default function TDURestrictionsSection({
  title = "What Restrictions Are Imposed After Being Charged With DUI in Tampa",
  subTitle = "A DUI accident charge brings immediate restrictions long before any conviction happens.",
  items = defaultItems,
}: TDURestrictionsSectionProps) {
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
              <FaExclamationTriangle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mb-4 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <div className="w-10 h-[2px] bg-red-400 rounded-full mb-3" />

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
