"use client";

import React from "react";
import Image from "next/image";
import {
  FaFolderOpen,
  FaSchool,
  FaComments,
  FaUsers,
  FaVideo,
  FaFileMedical,
} from "react-icons/fa";

export interface JuvenileEvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JDEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: JuvenileEvidenceItem[];
}

const defaultEvidenceItems: JuvenileEvidenceItem[] = [
  {
    id: "school-records-security-footage",
    title: "School Records Security Footage and Disciplinary Reports",
    description:
      "Security footage and disciplinary reports disappear quickly. Families must preserve original school records immediately after incidents. Schools overwrite camera footage within days of an event. A subpoena forces the school to release hidden videos.",
    icon: <FaSchool className="w-5 h-5 text-primary" />,
  },
  {
    id: "text-messages-group-chats",
    title: "Text Messages Group Chats and Social Media Records",
    description:
      "Digital messages provide crucial timeline context for the defense. A deleted message harms defense efforts severely. Screenshots capture the exact phrasing before someone deletes it. Account metadata proves who sent a specific threat.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "witness-accounts-conflicting-statements",
    title: "Witness Accounts and Conflicting Statements",
    description:
      "The statements of the bystanders expose major inconsistencies in prosecution arguments. Contact information of the witness should not be altered in any way for the defense. Many teens lie to cover up their actions when pressured. The attorney challenges witnesses' biases.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
  {
    id: "police-reports-body-camera",
    title: "Police Reports Body Camera Footage and Interview Records",
    description:
      "Police reports need to be thoroughly investigated from a legal standpoint. Body cam footage can show mistakes made during the arrest process and sometimes officers can forget to give correct Miranda rights. The footage can often show different versions of events to what has been written down in police reports.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-records-mistaken-identity",
    title: "Medical Records and Evidence of Mistaken Identity",
    description:
      "Medical records give you a good understanding of what went on during the incident. They allow you to see how serious the injuries were. Evidence of mistaken identity can be shown due to clear times and evidence.The hospital records will prove if the injury was consistent with the story.",
    icon: <FaFileMedical className="w-5 h-5 text-primary" />,
  },
];

export default function JDEvidenceSection({
  title = "Which Evidence Should Be Preserved for Defense?",
  subTitle = "Fast action saves critical proof from permanent destruction. Parents must secure related documents and digital files immediately.",
  imagePath = "/images/seo-services/juvenile-defense-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultEvidenceItems,
}: JDEvidenceSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* TOP HERO BANNER */}
        <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl mb-12 max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold w-fit">
                <FaFolderOpen className="w-3.5 h-3.5" />
                CRITICAL DEFENSE EVIDENCE
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                {title}
              </h2>

              <div className="w-20 h-[3px] bg-primary rounded-full" />

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {subTitle}
              </p>
            </div>

            <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-lg border border-slate-700/80">
              <Image
                src={imagePath}
                alt="Preserving critical juvenile defense evidence in Tampa Florida"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* 5 EVIDENCE ITEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:shadow-2xl ${
                idx === 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
