"use client";

import React from "react";
import {
  FaUserSlash,
  FaHome,
  FaMapMarkerAlt,
  FaPlane,
  FaBriefcase,
  FaClock,
  FaLandmark,
  FaBan,
  FaVial,
  FaUserCheck,
  FaPassport,
} from "react-icons/fa";

export interface RestrictionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDRestrictionsSectionProps {
  title?: string;
  subTitle?: string;
  items?: RestrictionItem[];
}

const defaultRestrictionItems: RestrictionItem[] = [
  {
    id: "restrict-leaving-jurisdiction",
    icon: (
      <div className="relative">
        <FaPlane className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
        <FaBan className="w-3 h-3 text-amber-600 absolute -bottom-1 -right-1" />
      </div>
    ),
    title: "Restrict Leaving The Jurisdiction",
    description:
      "Many Hillsborough County judges limit travel outside the county or state as a condition of pretrial release. Leaving without court permission, even for work or family reasons, can trigger a bond revocation. Some cases allow travel with advance notice filed through the court. The firm requests travel modifications for clients whose jobs or families require it.",
  },
  {
    id: "court-mandated-testing",
    icon: (
      <div className="relative">
        <FaVial className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Court Mandated Testing",
    description:
      "Drug and alcohol cases often come with mandatory testing as a condition of release, sometimes multiple times per week. A single missed or failed test can lead to an immediate bond revocation, regardless of the underlying charge's eventual outcome. This condition applies even before any conviction has occurred. Criminal defense lawyer in tampa fl helps clients understand exactly what a testing schedule requires before they miss one.",
  },
  {
    id: "curfews-house-arrest",
    icon: (
      <div className="relative">
        <FaHome className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Curfews and House Arrest",
    description:
      "Judges can impose a curfew or full house arrest with electronic monitoring as a release condition in serious cases. Compliance gets tracked constantly and violations can result in immediate re arrest. These conditions are more common in violent crime and repeat offense cases. Defense attorney argues for less restrictive alternatives when the facts of a case support it.",
  },
  {
    id: "prohibited-contacting-victim",
    icon: (
      <div className="relative">
        <FaUserSlash className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Prohibited Contacting Alleged Victim",
    description:
      "A no contact order bars any communication with the alleged victim, directly or through a third party, while a case is pending. This applies even if the alleged victim wants to reconcile or reach out first. Violating a no contact order creates a new criminal charge separate from the original case. Criminal law firm explains these boundaries clearly, since one text message can undo months of progress on a case.",
  },
  {
    id: "no-contact-witnesses-codefendants",
    icon: (
      <div className="relative">
        <FaUserSlash className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "No Contact Witnesses Or Co Defendants",
    description:
      "Courts often extend no contact orders to cover witnesses and co defendants, not just the alleged victim. This prevents anything that could look like witness tampering or coordinated testimony. Even a well meaning conversation can be read as an attempt to influence a case. Defense lawyer reviews every no contact order in detail so clients know exactly who falls under it.",
  },
  {
    id: "firearm-weapon-restrictions",
    icon: (
      <div className="relative">
        <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Firearm And Weapon Restrictions",
    description:
      "Anyone charged with a domestic violence offense loses the right to possess firearms immediately under federal law, before any conviction. This restriction can apply the moment an injunction or no contact order is entered. Surrendering weapons to law enforcement is usually required within a short window. Criminal law firm handles the logistics of firearm surrender to avoid an additional violation.",
  },
  {
    id: "supervised-check-ins",
    icon: (
      <div className="relative">
        <FaUserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Supervised Check Ins",
    description:
      "Hillsborough County's Pretrial Services division supervises many defendants released on bond, requiring regular check ins by phone or in person. Missing a scheduled check in counts as a violation, even without any new criminal conduct. This supervision continues until the case resolves or the court modifies the conditions. Defense team helps clients stay compliant so a missed call doesn't turn into a bigger problem.",
  },
  {
    id: "passport-surrender",
    icon: (
      <div className="relative">
        <FaPassport className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />
      </div>
    ),
    title: "Passport Surrender",
    description:
      "Federal cases and some serious state felonies require surrendering a passport as a condition of pretrial release. This prevents international travel for the duration of the case, sometimes for a year or longer. Courts view passport retention as a strong flight risk indicator when setting bond. Defense lawyer negotiates these conditions when a client has legitimate travel needs tied to work or family.",
  },
];

export default function CDRestrictionsSection({
  title = "What Restrictions Are Imposed After Being Charged With Crime in Tampa",
  subTitle = "A criminal charge changes daily life well before a case ever reaches trial. Bond conditions can restrict where you go, who you speak to and what you own.",
  items = defaultRestrictionItems,
}: CDRestrictionsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaLandmark className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/70" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
