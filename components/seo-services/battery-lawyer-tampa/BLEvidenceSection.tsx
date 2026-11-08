"use client";

import React from "react";
import Image from "next/image";
import {
  FaComments,
  FaPhoneVolume,
  FaShareAlt,
  FaMapMarkerAlt,
  FaReceipt,
  FaVideo,
  FaCamera,
  FaFileMedical,
  FaUsers,
  FaFileAlt,
  FaFolderOpen,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BLEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: EvidenceItem[];
}

const defaultEvidenceItems: EvidenceItem[] = [
  {
    id: "text-messages-dms",
    title: "1. Text messages and DM logs",
    description:
      "Save text messages, emails, direct messages and other communications between the parties. Preserve the full conversation, dates, timestamps and available account information. A short message may appear different without the surrounding exchange. Keep original records and avoid selective screenshots when you can preserve the complete conversation lawfully.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "voicemails-calls",
    title: "2. Voicemails and call history",
    description:
      "Keep voicemails, call logs and relevant recordings. The timing and length of calls may help establish the sequence of events or explain communication before and after the incident. Do not secretly record conversations without legal advice about Florida's recording laws. Preserve existing records and provide them to lawyers.",
    icon: <FaPhoneVolume className="w-5 h-5 text-primary" />,
  },
  {
    id: "social-media",
    title: "3. Social media posts by alleged victim or witnesses",
    description:
      "Public posts, photos, comments and timestamps could help in creating a timeline or expose inconsistencies. You should not imitate someone else, hack into a private account or try to persuade someone to delete material. Any such information could be saved through legal means and an attorney can advise you of its relevance to your case.",
    icon: <FaShareAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "gps-data",
    title: "4. GPS data",
    description:
      "Location history, ride-share information, phone records and other data with dates and times can help to establish where a person was at a particular time. Don't alter the location history and preserve original account records. Digital data can contain highly personal information; provide account records to your attorney rather than posting them to the world wide web.",
    icon: <FaMapMarkerAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "financial-receipts",
    title: "5. Financial receipts",
    description:
      "Tickets, restaurant checks, shopping receipts, bank statements and parking lot receipts can provide a firm timeline or location of a person in question. These records can be instrumental where there is a dispute as to what happened or why it happened. Keep the originals or an electronic record of the proof. Your battery attorney will determine if the information is relevant to a material issue.",
    icon: <FaReceipt className="w-5 h-5 text-primary" />,
  },
  {
    id: "security-footage",
    title: "6. Private security footage",
    description:
      "Apartment cameras, business security systems, Ring doorbells and parking lot cameras may capture the incident or the events immediately before it. Some systems overwrite recordings quickly. Tell the attorney about possible footage early so counsel can pursue lawful preservation requests.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "third-party-cameras",
    title: "7. Third party camera locations",
    description:
      "List nearby homes, businesses, garages, traffic cameras or other locations with possible recordings. Include the approximate time window and the direction of travel when relevant. Defense attorneys can assess potential sources and seek available footage through appropriate legal channels.",
    icon: <FaCamera className="w-5 h-5 text-primary" />,
  },
  {
    id: "photos-injuries",
    title: "8. Photos of injuries and daily progression (if self defense)",
    description:
      "If you claim self defense, photographs of your own injuries may help document the physical effects of the confrontation. Take dated photographs when possible and retain the original files. Do not alter images or stage photographs. Preserve medical documentation and explain the timing of each photograph to the attorney.",
    icon: <FaCamera className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-evaluations",
    title: "9. Medical evaluations",
    description:
      "Medical records may document the nature, timing and treatment of an injury. They may also reveal differences between an initial report and later claims. Obtain relevant records through lawful means. Attorneys can review the medical findings and assess their connection to the alleged incident.",
    icon: <FaFileMedical className="w-5 h-5 text-primary" />,
  },
  {
    id: "witness-info",
    title: "10. Witness information",
    description:
      "Record the names and contact details of people who saw or heard the confrontation. Note each person's location and the part of the incident the person may have observed. Do not coordinate stories or pressure witnesses to change their accounts. Give the information to the attorney for lawful follow up.",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
  },
  {
    id: "written-narrative",
    title: "11. Detailed narrative in written form",
    description:
      "Write a private chronological account while your memory remains fresh. Include the location, approximate times, conversations, physical movements, people present and interactions with police. Separate your direct recollection from information you learned later. Keep the account private and share it with an attorney.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
];

export default function BLEvidenceSection({
  title = "Which Evidence You Should Preserve?",
  subTitle = "Evidence can establish the timeline, clarify the circumstances of physical contact or reveal contradictions in witness accounts. Preserve original files and records. Avoid editing, deleting or destroying potential evidence.",
  imagePath = "/images/seo-services/battery-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultEvidenceItems,
}: BLEvidenceSectionProps) {
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
                alt="Preserving critical evidence in Tampa battery defense cases"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* 11 EVIDENCE ITEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:shadow-2xl ${
                idx === 10 ? "md:col-span-2 lg:col-span-1" : ""
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

