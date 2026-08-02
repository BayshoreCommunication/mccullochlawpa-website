"use client";

import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaBalanceScale,
  FaFileAlt,
  FaGavel,
  FaShieldVirus,
  FaBriefcase,
  FaHospital,
} from "react-icons/fa";

export interface ArrestItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDArrestSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
  items?: ArrestItem[];
}

const defaultArrestItems: ArrestItem[] = [
  {
    id: "fingerprinting-booking",
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Fingerprinting and Photographing For Booking",
    description:
      "Every person arrested in Hillsborough County gets transported to the Orient Road Jail for booking. Officers take fingerprints and a photograph to keep them part of a permanent arrest record. Those prints run through state and federal databases including FDLE and the FBI. This record exists whether or not the state ever files formal charges. Tampa Criminal defense lawyers begin working on sealing eligibility after booking is complete.",
  },
  {
    id: "recording-information",
    icon: <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Recording Personal and Identifying Information",
    description:
      "Booking officers record your name, address, date of birth and physical description into the county's system. Employer information and emergency contacts often get recorded during this same intake process. Hillsborough County shares this information with state and federal databases immediately. Any inaccuracies in this record can create problems later during background checks or license applications.",
  },
  {
    id: "medical-screenings",
    icon: <FaHospital className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Medical Screenings",
    description:
      "Jail staff conduct basic medical screening during booking. This screening is to check for injuries, medications. Moreover jail staff examine for conditions needing immediate attention or withdrawal risk before housing assignment. Medical screening also documents any visible injuries at the time of arrest. Those records can become important evidence if excessive force becomes part of the defense.",
  },
  {
    id: "holding-personal-property",
    icon: <FaBriefcase className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Cataloging And Holding Personal Property",
    description:
      "The arresting officers take away some personal belongings and leave them in the safe place. The items can include your wallet, cellular phone, jewelry, and clothes. Officers return your property upon release unless it is tied to alleged crime as evidence. Phones and vehicles are the most commonly held items in Hillsborough County cases. Missing or damaged property disputes are common and worth raising immediately.",
  },
  {
    id: "first-appearance-hearing",
    icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "First Appearance Hearing",
    description:
      "Florida law requires first appearance hearing within 24 hours of arrest and weekends included. Hillsborough County conducts this hearing in Division O. During this session a judge evaluates probable cause and determines bond or other release conditions. Having criminal defense lawyer tampa fl present can significantly impact reasonable bond and an unaffordable amount.",
  },
  {
    id: "formal-criminal-charging",
    icon: <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Formal Criminal Charging",
    description:
      "The State Attorney's Office in the 13th Judicial Circuit decide on filing formal charges. This decision usually comes within 21 days of arrest if you're still in custody. During this window prosecutors can file same charges, more serious charges or drop the matter entirely. This period is often the best chance to argue against charges.",
  },
  {
    id: "formal-court-hearing",
    icon: <FaBalanceScale className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Formal Court Hearing",
    description:
      "After the charges are filed arraignment formally advises you about charges and plea. Most defense attorneys file a written not guilty plea. It is because their client does not need to appear in person. This hearing also establishes a schedule for any pretrial motions and any future court dates. Failure to appear or failure to manage the hearing properly can result in additional problems to follow for months.",
  },
  {
    id: "pretrial-and-trial",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Pretrial And Trial",
    description:
      "Pretrial conferences and case management hearings track the progress of discovery and depositions. Additionally check for any pending motions before case reaches trial. In the state of Florida you have a constitutional right to a jury trial for most misdemeanors and felonies. Most Hillsborough County cases resolve through negotiation without reaching jury. If no agreement comes together, the case proceeds to trial at the county courthouse. This firm prepares every case as if it's going to trial, which tends to produce better plea offers along the way.",
  },
];

export default function CDArrestSection({
  title = "What Happens When Tampa Police Make Arrest For Criminal Charge",
  subTitle = "In Tampa, a particular protocol is followed when a person is arrested. This protocol is the same whether the individual has been arrested for a minor offense or a serious felony.",
  description = "",
  items = defaultArrestItems,
}: CDArrestSectionProps) {
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
          {description && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
              {description}
            </p>
          )}

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldVirus className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
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
