"use client";

import React from "react";
import Image from "next/image";
import {
  FaFileAlt,
  FaHospital,
  FaCamera,
  FaAddressBook,
  FaVideo,
  FaMobileAlt,
  FaUserTie,
  FaReceipt,
  FaSearch,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPIEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: EvidenceItem[];
}

const defaultItems: EvidenceItem[] = [
  {
    id: "police-crash-reports",
    title: "Police and Crash Reports",
    description:
      "Official crash reports from police officers include crucial facts about traffic accidents. Officers document vehicle positions, weather conditions, driver statements and cited traffic violations. These official documents establish initial fault determinations made by independent law enforcement personnel. We request crash reports immediately to build a strong foundation for your case.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-records-timelines",
    title: "Medical Records and Treatment Timelines",
    description:
      "Detailed medical charts from Tampa area hospitals connect your physical injuries directly to the recent motor vehicle crash. Physicians document diagnostic imaging tests, treatment schedules, physical therapy  and required surgical procedures. Clear treatment timelines show insurance adjusters the true physical severity of your injuries. We organize medical records systematically to demand appropriate reimbursement for all care.",
    icon: <FaHospital className="w-5 h-5 text-primary" />,
  },
  {
    id: "photos-video-scene",
    title: "Photos and Video From the Scene",
    description:
      "High resolution photos captured at crash scenes provide irrefutable proof of physical impact force. Skid marks on roads reveal vehicle speeds and driver braking actions before impact occurred. Visual proof showing crushed auto body panels helps prove severity to insurance adjusters. Our firm collects photographic evidence to show exactly how the accident took place.",
    icon: <FaCamera className="w-5 h-5 text-primary" />,
  },
  {
    id: "eyewitness-statements",
    title: "Eyewitness Statements",
    description:
      "Unbiased statements from bystanders strengthen claims by confirming how motor vehicle collisions occurred. Neutral witnesses have no financial interest in whether insurance companies pay out claims. Written and audio statements captured early preserve vital facts before people forget details. We locate and interview witnesses quickly to support your version of crash events.",
    icon: <FaAddressBook className="w-5 h-5 text-primary" />,
  },
  {
    id: "traffic-surveillance-footage",
    title: "Traffic and Surveillance Camera Footage",
    description:
      "Intersection traffic cameras and nearby business security video often record auto crashes clearly. Video footage shows traffic light signals, vehicle speeds  and dangerous driver actions in real time. Obtaining security video requires quick legal action before property owners delete recorded data. We send legal spoliation preservation letters immediately to secure video evidence for your injury claim.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "cellphone-blackbox-data",
    title: "Cell Phone and Vehicle Black Box Data",
    description:
      "Commercial trucks and modern passenger cars record driving speeds inside event data recorders. Black box data reveals exact braking timing, steering inputs  and vehicle velocity before impacts. Cell phone records can prove driver distraction, texting  or phone calls during crashes. We issue legal spoliation letters to preserve vital digital data before deletion under Florida Evidence Code.",
    icon: <FaMobileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "accident-reconstruction-testimony",
    title: "Accident Reconstruction Expert Testimony",
    description:
      "Engineering experts analyze physical evidence to recreate crash physics and vehicle impact speeds. Specialists examine road conditions, crush measurements  and momentum calculations to prove fault clearly. Expert testimony translates complex physical dynamics into clear facts for judges and juries at the George Edgecomb Courthouse in downtown Tampa. We partner with top reconstruction specialists to strengthen complicated motor vehicle claims.",
    icon: <FaUserTie className="w-5 h-5 text-primary" />,
  },
  {
    id: "lost-wage-employment-records",
    title: "Lost Wage and Employment Records",
    description:
      "Pay stubs and tax documents verify lost earnings while recovering from severe physical injuries. Employers provide official statements detailing missed work days, lost bonuses  and unused sick leave. Medical records linking work absences to physical limitations support your lost earning capacity claim. We calculate total past and future wage losses to maximize overall financial recovery.",
    icon: <FaReceipt className="w-5 h-5 text-primary" />,
  },
];

export default function BPIEvidenceSection({
  title = "Evidence McCulloch Law Uses to Build Your Tampa Injury Claim",
  subTitle = "The strongest claims usually have a clear connection between fault, injury, causation  and financial loss.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultItems,
}: BPIEvidenceSectionProps) {
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
              alt="Evidence McCulloch Law Uses to Build Your Injury Claim"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                Preserve critical crash, medical and financial evidence to demand full compensation.
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
