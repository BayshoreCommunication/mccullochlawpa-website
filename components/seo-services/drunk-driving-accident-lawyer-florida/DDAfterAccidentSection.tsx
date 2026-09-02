"use client";

import React from "react";
import {
  FaShieldAlt,
  FaVial,
  FaFileContract,
  FaHospital,
  FaSearch,
  FaUsers,
  FaShieldVirus,
} from "react-icons/fa";

export interface AfterAccidentItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DDAfterAccidentSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
  items?: AfterAccidentItem[];
}

const defaultItems: AfterAccidentItem[] = [
  {
    id: "police-investigation-process",
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Police Investigation Process",
    description:
      "Responding law enforcement officers conduct standard criminal investigations to determine driver impairment levels. Officers record and document the physical evidence, vehicle position, skid marks and weather. The officers analyze the speech, coordination, smell of the suspects when they are asking for field sobriety tests. Standardized field sobriety tests are performed when officers suspect motor vehicle operation under influence.",
  },
  {
    id: "breath-blood-testing",
    icon: <FaVial className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Breath and Blood Testing Procedures",
    description:
      "Law enforcement requests chemical breath tests or blood draws following suspected drunk driving crashes. Evidentiary breathalyzer devices measure blood alcohol concentration using approved scientific chemical analysis methods. Medical personnel conduct mandatory blood draws when collisions result in severe bodily injuries. Official toxicology reports provide definitive evidence regarding driver alcohol levels during motor collisions.",
  },
  {
    id: "insurance-reporting-requirements",
    icon: <FaFileContract className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Insurance Reporting Requirements",
    description:
      "Florida statutory law requires motorists to report motor vehicle collisions involving personal injury promptly. Insured claimants must notify insurance carriers while avoiding unrepresented recorded liability interviews. Attorneys manage all insurance communications to prevent adjusters from misconstruing statements against victims. Formal written notices trigger mandatory insurer claim investigations and formal file creation procedures.",
  },
  {
    id: "treatment-hospital-records",
    icon: <FaHospital className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Treatment and Hospital Records",
    description:
      "Immediate emergency clinical care provides vital physical evidence linking diagnosed injuries directly to crashes. Hospital emergency charts document physical trauma symptoms, diagnostic imaging and initial treatment plans. Continuous medical treatment records establish detailed chronological evidence of physical recovery progression. Detailed medical records substantiate economic damage calculations covering emergency care and surgeries.",
  },
  {
    id: "evidence-collection-custody",
    icon: <FaSearch className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Evidence Collection and Chain of Custody",
    description:
      "Preserving physical crash evidence requires strict adherence to formal legal preservation standards. Litigation teams send spoliation letters preventing property owners from destroying surveillance video footage. Forensic experts inspect vehicle damage to extract digital electronic control module crash data. Chain of custody protocols ensure scientific evidence remains admissible during civil court proceedings.",
  },
  {
    id: "witness-statement-police-reports",
    icon: <FaUsers className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Witness Statement and Police Reports",
    description:
      "Independent eye witness testimony corroborates erratic vehicle movements prior to motor vehicle collisions. Attorneys interview witnesses quickly to secure detailed sworn statements before memory fade occurs. Police report narratives capture investigating officer impressions and initial party admissions made. Witness affidavits support pre-suit demand packages and strengthen positions during settlement negotiations.",
  },
];

export default function DDAfterAccidentSection({
  title = "What Happens After a Drunk Driving Accident in Florida",
  subTitle = "The hours right after the crash determine the strength of your claim for years to come. You need to know exactly what happens to protect yourself from losing money.",
  description = "",
  items = defaultItems,
}: DDAfterAccidentSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-12 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer"
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
