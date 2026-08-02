"use client";

import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaUserSlash,
  FaBalanceScale,
  FaFileAlt,
  FaUsers,
  FaShieldVirus,
} from "react-icons/fa";

export interface ArrestItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceArrestSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
  items?: ArrestItem[];
}

const defaultArrestItems: ArrestItem[] = [
  {
    id: "mandatory-arrest",
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Mandatory Arrest Without Alleged Victim's Consent",
    description:
      "Florida Statute 741.2901 removes all officer discretion when probable cause for a domestic violence charge exists. Arrest happens whether alleged victim requests it, objects to it or recants their statement at the scene. Officers fail to make this mandatory arrest might face departmental discipline under Florida law. This makes the arrest effectively guaranteed when probable cause is established.",
  },
  {
    id: "no-bond-hold",
    icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "No Bond Hold Until Judge Reviews Case",
    description:
      "Tampa domestic violence arrest suspends standard bond eligibility until judge reviews pretrial release conditions at first appearance. This happens usually within 24 hours of booking. The no-bond hold keeps you in custody regardless of charge level or prior criminal record. The judge then determines bond amount or denies it entirely. It is based on charge severity, history and your relationship to alleged victim.",
  },
  {
    id: "no-contact-order",
    icon: <FaUserSlash className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Immediate No Contact Order Issued",
    description:
      "Courts issue a no communication order at first appearance. This happens before an attorney can present your case. The order prohibits all direct and indirect communication with the alleged victim. This includes contact routed through mutual friends or family members. Violating this order carries an independent criminal charge.",
  },
  {
    id: "prosecution-without-consent",
    icon: <FaBalanceScale className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Prosecution Without Victim's Consent",
    description:
      "Florida's no-drop policy authorizes the Hillsborough County State Attorney's office. This allows them to pursue domestic violence charges regardless of alleged victim's cooperation level. Prosecutors proceed even if alleged victim refuses to testify, recants their original statement or formally submits a request for dismissal to the court.",
  },
  {
    id: "background-check-record",
    icon: <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Arrest Record Visible on Background Checks",
    description:
      "Domestic violence charge appears on your Florida criminal history record upon booking. This happens before any court proceeding or guilty finding is entered against you. Employers, landlords and professional licensing boards running background checks will see the arrest regardless of case outcome. Only dismissal and successful expungement can clear the arrest record.",
  },
  {
    id: "batterer-program",
    icon: <FaUsers className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Batterer's Intervention Program Required Pretrial",
    description:
      "Tampa judges frequently order enrollment in a state certified batterer's intervention program. This requirement is imposed as a condition of pretrial release at the bond hearing. This 29 week program is mandatory upon conviction. However it is increasingly used as a pretrial release condition in Hillsborough County. Missing sessions or failing to enroll within the court's stated timeline results in bond revocation and return to custody.",
  },
];

export default function DomesticViolenceArrestSection({
  title = "What Happens When Tampa Police Make Domestic Violence Arrest",
  subTitle = "Next 48 hours after charges are crucial in determining your defense options. Florida law mandates arrest when probable cause exists.",
  description = "",
  items = defaultArrestItems,
}: DomesticViolenceArrestSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-0 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          
          {/* Main Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          {/* Subtitle Lines */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
              {description}
            </p>
          )}

          {/* Emblem Divider with Shield Icon */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldVirus className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* ==================================================== */}
        {/* GRID CARD CONTAINER WITH INDIVIDUAL HOVER CARDS       */}
        {/* ==================================================== */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer"
              >
                {/* Top Subtle Border Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header Row: Icon + Title */}
                <div className="flex items-start gap-4 mb-4 w-full">
                  {/* Circle Icon Container with Primary Color & Hover Effect */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Expanding Gold Divider Line */}
                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

                {/* Description */}
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
