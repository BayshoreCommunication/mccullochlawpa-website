"use client";

import React from "react";
import Image from "next/image";
import {
  FaFileAlt,
  FaVial,
  FaVideo,
  FaAddressBook,
  FaHospital,
  FaCameraRetro,
  FaSearch,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDUEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: EvidenceItem[];
}

const defaultItems: EvidenceItem[] = [
  {
    id: "police-crash-report-notes",
    title: "Police Crash Report and Officer Notes",
    description:
      "Police crash reports contain initial officer impressions, weather notes and driver statement records. Unredacted field notes often show direct contradictions between verbal remarks and formal police filings. Reviewing these documents can uncover investigative mistakes and help your legal defense.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "breathalyzer-calibration-records",
    title: "Breathalyzer Calibration and Maintenance Records",
    description:
      "Evidentiary breath machines require routine monthly maintenance and periodic official agency inspection records. Uncalibrated testing devices produce inaccurate alcohol readings that fail scientific reliability standards in court. Criminal defense lawyer requests equipment maintenance logs to challenge breath test results brought against you.",
    icon: <FaVial className="w-5 h-5 text-primary" />,
  },
  {
    id: "body-dash-camera-footage",
    title: "Body Camera and Dash Camera Footage",
    description:
      "Police video recordings capture actual roadside interactions, physical movements and officer conversations during arrests. Video footage frequently disproves officer claims about slurred speech or unsteady physical balance. Issuing immediate evidence preservation demands to stop police agencies from deleting key recordings.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "witness-statements-contact-info",
    title: "Witness Statements and Contact Information",
    description:
      "Bystander testimony provides objective accounts about vehicle operation, crash timing and your personal behavior. Unbiased witnesses often confirm about another driver or dangerous road condition caused your collision. You need to contact eyewitnesses quickly to preserve accurate details before they forget.",
    icon: <FaAddressBook className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-records-scene",
    title: "Medical Records From the Scene",
    description:
      "Emergency medical technicians record vital signs, physical trauma and head injury symptoms after collisions. Crash shock and airbag deployments produce physical reactions that officers mistakenly attribute to alcohol. Using hospital records to prove your injuries caused your roadside physical difficulties.",
    icon: <FaHospital className="w-5 h-5 text-primary" />,
  },
  {
    id: "vehicle-damage-scene-photos",
    title: "Vehicle Damage and Accident Scene Photos",
    description:
      "Detailed scene photographs record vehicle impact areas, tire skid marks and dangerous road obstructions. Physical evidence allows crash reconstruction specialists to establish actual collision causes using scientific principles. Preserving vehicle damage photos to challenge exaggerated loss claims made by state prosecutors.",
    icon: <FaCameraRetro className="w-5 h-5 text-primary" />,
  },
];

export default function TDUEvidenceSection({
  title = "Which Critical Evidence to Obtain After a DUI Accident",
  subTitle = "Evidence disappears fast after a DUI accident and timing shapes every defense option. Acting early protects details that support your case later.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultItems,
}: TDUEvidenceSectionProps) {
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
              <FaSearch className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={imagePath}
              alt="Critical Evidence to Obtain After a DUI Accident"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                Preserve your arrest and crash evidence early before video recordings or maintenance logs are lost.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-4 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
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
