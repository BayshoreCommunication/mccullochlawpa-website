"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaComments,
  FaShareAlt,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCar,
  FaCreditCard,
  FaClock,
  FaTshirt,
  FaMobileAlt,
  FaUserPlus,
  FaFileAlt,
  FaVideo,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  ctaText?: string;
  ctaButtonText?: string;
  items?: EvidenceItem[];
}

const defaultEvidenceItems: EvidenceItem[] = [
  {
    id: "text-call-logs",
    icon: <FaComments className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Text Messages and Call Logs",
    description:
      "Save every text thread and call log connected to alleged victim. Screenshot full conversations and back them up to secure cloud account. Officers can seize your phone and original records may not survive damage or replacement. It is best to share all unedited records with the defense team including unfavorable ones.",
  },
  {
    id: "social-media",
    icon: <FaShareAlt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Social Media and DMs",
    description:
      "Download your full message history with alleged person from every social media platform. Many platforms auto delete inactive conversations after 30 to 90 days. Timestamped messages give your defense lawyer specific documented context about your prior relationship. Request full data export through each platform's privacy settings immediately after charges.",
  },
  {
    id: "dating-apps",
    icon: <FaHeart className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Dating Apps",
    description:
      "Do not delete the conversation or account in Tinder, Bumble, Hinge or similar app you met with alleged person. Chat histories often show consent, intent and actual sequence of events. Request data export through the app's settings and share unedited file with your tampa sex crime defense lawyer. These records often capture pre meeting agreements between both parties.",
  },
  {
    id: "emails-voicemails",
    icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Emails and Voicemails",
    description:
      "Email chains include metadata showing when messages were sent, received or opened. Voicemails capture tone and word choice that often directly contradict prosecution's narrative. Archive relevant emails to an external drive and save voicemails before deletion cycles. Give your criminal defense attorney full, unedited access, including minor or unrelated messages to the charge.",
  },
  {
    id: "gps-location",
    icon: <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "GPS and Location History",
    description:
      "Check your Google Maps timeline or iPhone Location Services history immediately. These records place you at specific locations with timestamps. Location data is among strongest alibi evidence available in Tampa sex crime cases. Criminal defense lawyer uses GPS history regularly to challenge prosecution's claimed timeline of alleged events.",
  },
  {
    id: "rideshare-records",
    icon: <FaCar className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Ride Share Records",
    description:
      "Request your Uber or Lyft trip history from alleged incident date right away. Records include pickup coordinates, drop off points, exact timestamps and driver identification details. A receipt can definitively place you somewhere other than alleged crime scene. Sex criminal defense lawyer in tampa obtains these through formal discovery when clients no longer have account access.",
  },
  {
    id: "card-transactions",
    icon: <FaCreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Card Transactions",
    description:
      "Pull bank and credit card records for all transactions near incident date. Purchases at restaurants, ATMs, or stores provide timestamped location evidence. This evidence is especially useful when accusation lacks a precise or verifiable location. Yourcriminal defense attorney cross references these records to find gaps in the prosecution's claim.",
  },
  {
    id: "digital-timestamps",
    icon: <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Digital Timestamps",
    description:
      "Photos, documents and app activity all carry embedded metadata with precise creation timestamps. Photos from relevant period can confirm your exact location and activity at that moment. Do not crop, filter or edit any files because doing so destroys the underlying metadata.",
  },
  {
    id: "clothing-bedding",
    icon: <FaTshirt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Clothing and Bedding",
    description:
      "If physical contact occurred, clothing or bedding may contain forensic material to supports your defense. Store these items in paper bag rather than plastic to avoid degrading biological samples. Avoid wash, alter or discard anything before your attorney arranges independent forensic testing. Hillsborough County courts rule incorrectly handled evidence inadmissible in sex crime cases.",
  },
  {
    id: "electronic-devices",
    icon: <FaMobileAlt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Unmodified and Electronic Devices",
    description:
      "Hand your attorney every relevant phone, laptop, tablet or smart device exactly as it currently sits. Do not factory reset, delete files or run cleanup software. Forensic examiners can recover deleted data from preserved devices. Sex crime defense lawyers in tampa often work with certified forensic investigators to document recovered evidence for admissibility.",
  },
  {
    id: "witness-info",
    icon: <FaUserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Witness Information",
    description:
      "Note name, phone number and relationship of everyone present near the incident. Neighbors, coworkers or friends can be any eyewitness to verify your timeline. After few days it become harder ot locate all those witnesses and less reliable in memory. Hiring lawyer can reach them immediately and prepare witnesses for trial date.",
  },
  {
    id: "written-timelines",
    icon: <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Written Timelines",
    description:
      "Create detailed written account of alleged incident. Include exact times, specific locations, conversations and every person you interacted with. Your defense team uses this to identify inconsistencies in prosecution's version of events. Write it once and do not edit it afterward. Then share it only with your defense attorney.",
  },
  {
    id: "dashcam-footage",
    icon: <FaVideo className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Security and Dashcam Footage",
    description:
      "Identify every security camera near alleged location. This includes ATMs, parking structures and businesses. Most commercial systems in Tampa overwrite footage within 30 to 72 hours of capture. Your attorney files an emergency preservation demand only if you identify the cameras quickly enough.",
  },
];

export default function SCEvidenceSection({
  title = "Which Evidence You Should Preserve After Tampa Sex Crime Accusation",
  subTitle = "Every piece of proof you preserve in first 48 hours impacts your defense case. It is obvious evidence disappears quickly and courts will not allow reconstruction.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/evidence-folder.png",
  ctaText = "Act fast. Evidence disappears quickly. Protect your rights and your future.",
  ctaButtonText = "Get a Free Case Review Today",
  items = defaultEvidenceItems,
}: SCEvidenceSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subTitle}
            </p>

            <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Preserve Legal Evidence - McCulloch Law"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  {ctaText}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-yellow-400 transition-colors group cursor-pointer"
                >
                  <span>{ctaButtonText}</span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      {item.icon}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
