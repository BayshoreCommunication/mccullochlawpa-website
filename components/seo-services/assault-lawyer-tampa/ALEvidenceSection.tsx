"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaVideo,
  FaCamera,
  FaFileMedical,
  FaTshirt,
  FaComments,
  FaShareAlt,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaFolderOpen,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ALEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: EvidenceItem[];
}

const defaultEvidenceItems: EvidenceItem[] = [
  {
    id: "surveillance-footage",
    title: "Surveillance or Security Footage",
    description:
      "CCTV cameras may also be used at companies, residential buildings, parking lots and nearby residences. CCTVs can record the confrontation as well as the distance between the parties involved, their movements and occurrences leading up to and following the encounter. Some systems overwrite recordings after a short period. Do not access another person's account or recording system without permission.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "body-dash-cam",
    title: "Body Camera and Dash Camera Footage",
    description:
      "Police body camera footage and dash camera footage could record the police's observations and statements, as well as where and what happened during the investigation. These recordings might also reveal inconsistencies in statements given to the police, along with what the witness initially said and what they said afterward. The attorney should obtain any available recordings through the legal process. All recordings in police custody should be preserved intact.",
    icon: <FaCamera className="w-5 h-5 text-primary" />,
  },
  {
    id: "scene-photos",
    title: "Scene Photos",
    description:
      "Take photos of the scene showing position, light sources, doors/exits, obstacles and position to position if you may do so safely. Save the images intact with the original time stamps. No changes should be made to the original photos with no captions to avoid altering the entire context. Photographs of the scene may help clarify whether a person could apparently carry out an alleged assault.",
    icon: <FaCamera className="w-5 h-5 text-primary" />,
  },
  {
    id: "injury-records",
    title: "Injury Records",
    description:
      "Pictures of the visible injury may help piece together the events. The absence of injury may not necessarily refute the presence of an assault as simple assault doesn't require physical contact. It is recommended to keep copies of any photographs and medical records. Do not ask another person to change a statement or alter a medical record.",
    icon: <FaFileMedical className="w-5 h-5 text-primary" />,
  },
  {
    id: "clothing-items",
    title: "Clothing and Other Items",
    description:
      "Clothing or other property that may be relevant to the incident should generally be kept in the condition that it was found. These materials may be useful in reconstructing the positions of the occupants or a sequence of events. Do not wash, repair, discard or otherwise alter these items before consulting a lawyer.",
    icon: <FaTshirt className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-records",
    title: "Medical Records",
    description:
      "Injuries, treatment dates and notes in medical files may be helpful to establish a quick record of what happened soon after the injury occurs. The records may provide time line assistance or support some aspect of a claim. Obtain pertinent records through legal channels. Legal assistance can advise how to obtain and use confidential medical records.",
    icon: <FaFileMedical className="w-5 h-5 text-primary" />,
  },
  {
    id: "messages-calls",
    title: "Messages and Calls",
    description:
      "Keep copies of texts, emails, call logs, voice mails and other forms of communication about the problem. When a conversation is recorded and the entire context of a text is involved may matter more than a single text message. Don't delete messages just because they're bad or confusing.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "social-media",
    title: "Social Media",
    description:
      "Posts, photos, comments, direct messages and Timestamps may be relevant to a case. One should not post about the case or what happened, make posts on one's behalf relating to one's defense or ask others to make posts on one's behalf. Do not edit or delete existing posts. We recommend you speak to your Attorney about how to handle your accounts in the meantime.",
    icon: <FaShareAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "witness-list",
    title: "Witness List",
    description:
      "Write down the names and contact details of people who saw or heard the incident. Include individuals near the scene before or after the confrontation. Record what you remember about each person's location and potential observations. Do not coach witnesses, pressure them or coordinate accounts.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
  {
    id: "timeline-log",
    title: "Timeline Log",
    description:
      "Write a private chronological account while your memory remains fresh. Include approximate times, locations, conversations, movements, calls and interactions with police. Separate your own recollection from details you learned from other people. Share the account with your attorney rather than posting it online.",
    icon: <FaClock className="w-5 h-5 text-primary" />,
  },
];

export default function ALEvidenceSection({
  title = "Which Evidence Should Be Preserved For Defense?",
  subTitle = "Evidence can help to reveal the order of events, support your version of events or disprove an element of the allegation. It is important that original records and files are not altered or deleted immediately.",
  imagePath = "/images/seo-services/assault-lawyer-tampa/criminal-court-evidence-preservation-assault-case.webp",
  items = defaultEvidenceItems,
}: ALEvidenceSectionProps) {
  const [activeTab, setActiveTab] = useState<string>(items[0].id);

  const selectedItem = items.find((i) => i.id === activeTab) || items[0];

  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaFolderOpen className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* INTERACTIVE EVIDENCE VIEWER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT: LIST OF ITEMS */}
          <div className="lg:col-span-6 space-y-2.5 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
            {items.map((item, index) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#0B1B2D] border-primary shadow-xl"
                      : "bg-[#0B1B2D]/40 border-slate-800 hover:border-slate-700 hover:bg-[#0B1B2D]/80"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold text-slate-500 w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-primary text-slate-950 font-bold"
                          : "bg-slate-800 text-slate-300 group-hover:text-primary"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`text-sm sm:text-base font-semibold transition-colors ${
                        isActive ? "text-primary" : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                      isActive
                        ? "bg-primary/20 text-primary border border-primary/40"
                        : "text-slate-500 group-hover:text-slate-400"
                    }`}
                  >
                    {isActive ? "Viewing" : "Select"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: SELECTED ITEM DETAIL CARD WITH IMAGE */}
          <div className="lg:col-span-6 bg-[#0B1B2D] rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* IMAGE */}
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 border border-slate-700/80">
              <Image
                src={imagePath}
                alt="Preserving critical video footage, communications, and scene evidence for assault defense in Tampa courts"
                title="Critical Evidence Preservation For Assault Defense Law"
                data-description="Guidelines on securing surveillance video, body cam footage, witness statements, and electronic records to protect your criminal assault defense case in Tampa."
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2D] via-transparent to-transparent" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                  {selectedItem.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedItem.description}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-primary" />
                <span>Defense Preservation Strategy</span>
              </div>
              <span className="font-mono text-primary font-semibold">McCulloch Law P.A.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
