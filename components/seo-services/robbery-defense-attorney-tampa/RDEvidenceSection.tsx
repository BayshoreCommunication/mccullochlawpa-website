"use client";

import React from "react";
import Image from "next/image";
import {
  FaFolderOpen,
  FaTshirt,
  FaMapMarkerAlt,
  FaFingerprint,
  FaReceipt,
  FaFileContract,
  FaComments,
  FaShieldAlt,
  FaFileMedical,
  FaVideo,
  FaStore,
} from "react-icons/fa";

export interface RobberyEvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RDEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: RobberyEvidenceItem[];
}

const defaultEvidenceItems: RobberyEvidenceItem[] = [
  {
    id: "specific-physical-evidence",
    title: "1. Specific Physical Evidence",
    description:
      "Secure photos, garments, footwear, purses, jewelry and other personal objects related to the accusation. For example, if there is a jacket, shoe, tattoo, backpack or body type used to identify the suspect, investigators may rely on these facts to identify a suspect. Original photographs and receipts can be used to counter descriptions.",
    icon: <FaTshirt className="w-5 h-5 text-primary" />,
  },
  {
    id: "vehicle-location-data",
    title: "2. Vehicle Location Data",
    description:
      "Preserve available records from GPS devices, vehicle navigation systems, phone location services, electronic toll accounts and connected vehicle applications. Records from services such as vehicle telematics, navigation applications and toll systems may provide timestamps or location information. Dashcam recordings may also capture road conditions, occupants and travel times. A location record may challenge the State's timeline or corroborate an alibi.",
    icon: <FaMapMarkerAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "biometric-access-logs",
    title: "3. Biometric & Access Logs",
    description:
      "Biometric and access records may document entry into a building, residence, office or restricted area. Examples include fingerprint entry systems, facial recognition logs, keycard records, electronic door locks, employee access accounts and security system reports. A system may record the time of entry, account identity, access attempt and door activity. These details can help establish whether a person entered a location during the alleged offense.",
    icon: <FaFingerprint className="w-5 h-5 text-primary" />,
  },
  {
    id: "receipts-bills-of-sale",
    title: "4. Receipts and Bills of Sale",
    description:
      "Receipts, invoices, bills of sale, bank records and digital payment confirmations may establish ownership, purchase history or lawful possession of property involved in a robbery allegation. A receipt may also confirm your location or a transaction time. For example, a purchase timestamp can help challenge a claimed timeline or support an alibi.",
    icon: <FaReceipt className="w-5 h-5 text-primary" />,
  },
  {
    id: "title-registration-documents",
    title: "5. Title and Registration Documents",
    description:
      "Vehicle title and registration documents can help establish ownership, possession and the authorized use of a vehicle involved in a carjacking or related allegation. A title identifies the titled owner. Registration records identify the vehicle and its registered details. Transfer documents, insurance records and purchase agreements may explain recent changes in possession.",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
  },
  {
    id: "text-messages-dms-property",
    title: "6. Text Messages/DMs About the Property",
    description:
      "Preserve text messages, emails, social media direct messages and other communications about the disputed property. Conversations may show permission to use an item, a prior sale, a return agreement or a disagreement about ownership. Messages may also establish the timeline between the parties and explain the relationship.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "alleged-weapon-itself",
    title: "7. The Alleged \"Weapon\" Itself",
    description:
      "A robbery case may involve an allegation of a firearm, knife or another object. The identity, condition and classification of the object can affect the charge and potential sentencing exposure.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "medical-physical-injury-records",
    title: "8. Medical and Physical Injury Records",
    description:
      "Medical records may document injuries, treatment dates, physical limitations and statements made during medical visits. Photographs and treatment records can also establish the timing and condition of an injury. Preserve emergency room records, physician notes, diagnostic reports, photographs, prescriptions and follow up treatment documents.",
    icon: <FaFileMedical className="w-5 h-5 text-primary" />,
  },
  {
    id: "continuous-surveillance-audio-video",
    title: "9. Continuous Surveillance Audio/Video",
    description:
      "Home cameras, doorbell systems, dashcams, business cameras and private security recordings may capture relevant activity. Preserve complete recordings. Original audio and video may show movement, conversations, arrival times, departures, vehicle activity and interactions with other individuals.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "complete-store-footage",
    title: "10. Complete Store Footage",
    description:
      "Preserve footage from every available camera, including entrances, exits, checkout areas, aisles, parking areas and exterior walkways. A short clip may omit the events immediately before or after the confrontation. Complete store footage can show the original interaction, the alleged taking, the employee's response and the accused's departure.",
    icon: <FaStore className="w-5 h-5 text-primary" />,
  },
];

export default function RDEvidenceSection({
  title = "Which Evidence You Should Preserve?",
  subTitle = "Evidence can provide proof of where you were, resolve a property argument, disprove an ID or assist in disproving the authorities timeline.",
  imagePath = "/images/seo-services/robbery-defense-attorney-tampa/which-evidence-you-should-preserve.webp",
  items = defaultEvidenceItems,
}: RDEvidenceSectionProps) {
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
                alt="Preserving critical evidence in Tampa robbery defense cases"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* 10 EVIDENCE ITEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:shadow-2xl ${
                idx === 9 ? "md:col-span-2 lg:col-span-1" : ""
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

