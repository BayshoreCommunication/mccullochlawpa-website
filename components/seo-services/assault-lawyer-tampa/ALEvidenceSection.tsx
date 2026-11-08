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
  imagePath = "/images/seo-services/assault-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultEvidenceItems,
}: ALEvidenceSectionProps) {
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
                alt="Critical evidence preservation for assault defense in Tampa"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* 10 EVIDENCE ITEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:shadow-2xl"
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

