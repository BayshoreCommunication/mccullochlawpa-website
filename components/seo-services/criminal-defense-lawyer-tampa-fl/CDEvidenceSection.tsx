"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaComments,
  FaCloud,
  FaUserSecret,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaVideo,
  FaTshirt,
  FaFlask,
  FaUserPlus,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  ctaText?: string;
  ctaButtonText?: string;
  items?: EvidenceItem[];
}

const defaultEvidenceItems: EvidenceItem[] = [
  {
    id: "testimony",
    icon: <FaComments className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Testimony",
    description:
      "Witnesses who saw what happened often remember less accurate detail as weeks pass after an arrest. Getting a written or recorded statement early preserves details that fade with time. This applies to witnesses who support your account and those whose story might change under pressure. Florida criminal defense lawyer locates and interviews witnesses before memories start to shift.",
  },
  {
    id: "digital-cloud-data",
    icon: <FaCloud className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Digital And Cloud Data",
    description:
      "Text messages, location history and app data can confirm or contradict a timeline in a criminal case. Many cloud services only retain certain data for a limited period before automatic deletion. Waiting weeks to request this information can mean it's already gone. Defense lawyer sends preservation letters immediately to lock down digital evidence before it disappears.",
  },
  {
    id: "statement-police-officer",
    icon: <FaUserSecret className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Any Statement To Police Officer",
    description:
      "Anything you say to a Tampa police officer becomes evidence against you later. Officers don't remind you about remaining silent outside of formal interrogation rooms. Casual comments made while being detained always end up inside final arrest reports. Criminal law firm reviews every recorded statement for accuracy and context the report may have left out.",
  },
  {
    id: "alibi-location-history",
    icon: <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Alibi And Location History",
    description:
      "Phone location data and rideshare records establish your location during alleged crimes. People overlook this evidence until finding it becomes impossible for defense teams. Private businesses don't keep tracking records forever, especially for minor financial transactions. The defense team works quickly to gather this evidence before a company purges its system.",
  },
  {
    id: "recordings-911-calls",
    icon: <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Recordings Of 911 Calls",
    description:
      "911 call recordings from the Hillsborough County Sheriff's Office or Tampa Police Department capture the earliest version of events. These recordings often contradict later statements made once someone has had time to reconsider what they said. Public records requests for these recordings can take time to process. Criminal defense attorney files these requests early, since the original call often tells a different story than the arrest report.",
  },
  {
    id: "security-footage",
    icon: <FaVideo className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Security Footage",
    description:
      "Nearby businesses and traffic cameras overwrite security footage within a few days. You can't recover missing footage regardless of how helpful it proves later. This makes early requests to nearby businesses one of the most time sensitive parts of building a defense. Defense team sends preservation requests to nearby properties within days of taking a case.",
  },
  {
    id: "physical-evidence",
    icon: <FaTshirt className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Physical Evidence",
    description:
      "Clothing and weapons connected to alleged crimes must remain completely unchanged after incidents. Poor storage by law enforcement creates legal grounds to challenge how evidence was collected. Chain of custody problems come up more often than most defendants expect. Attorney reviews evidence logs line by line, looking for exactly this kind of gap.",
  },
  {
    id: "photographs-blood-samples",
    icon: <FaFlask className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Any Photographs and Blood Samples",
    description:
      "Photographs taken at the scene and any blood samples collected during an arrest can support or undermine the state's version of events. Blood samples in DUI cases require strict handling procedures under Florida law to remain admissible. A break anywhere in that chain can void the results entirely.",
  },
  {
    id: "eyewitness-information",
    icon: <FaUserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Eyewitness Information",
    description:
      "Eyewitness identifications carry real weight with juries, but they're also one of the least reliable forms of evidence in criminal cases. Stress, distance and lighting at the time of an incident all affect how accurately someone remembers a face. Florida courts have started requiring more careful jury instructions on this exact issue. The defense team cross examines eyewitness identifications with these limitations in mind.",
  },
];

export default function CDEvidenceSection({
  title = "Which Evidence You Should Preserve After Tampa Crime Accusation",
  subTitle = "Evidence disappears fast once an investigation starts and some of it only exists for a short window. Preserving the right material early can decide your case months later.",
  imagePath = "/images/seo-services/criminal-defense-lawyer-tampa-fl/evidence-folder.png",
  ctaText = "Act fast. Evidence disappears quickly. Protect your rights and your future.",
  ctaButtonText = "Get a Free Case Review Today",
  items = defaultEvidenceItems,
}: CDEvidenceSectionProps) {
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

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
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
