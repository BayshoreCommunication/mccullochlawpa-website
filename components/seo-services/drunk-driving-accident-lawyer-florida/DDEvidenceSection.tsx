"use client";

import React from "react";
import Image from "next/image";
import {
  FaFileAlt,
  FaVial,
  FaVideo,
  FaCamera,
  FaHospital,
  FaUserTie,
  FaCameraRetro,
  FaAddressBook,
  FaSearch,
} from "react-icons/fa";

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DDEvidenceSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: EvidenceItem[];
}

const defaultItems: EvidenceItem[] = [
  {
    id: "police-report-analysis",
    title: "Police Report Analysis and Observations",
    description:
      "Official police reports provide critical immediate documentation regarding investigating officer observations. Attorneys review report sections detailing driver speech patterns, physical balance and admissions. Officer field notes capture preliminary crash diagrams, impact analysis and traffic citation listings. Documented law enforcement observations build baseline evidence supporting initial statutory negligence claims.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "bac-toxicology-results",
    title: "Blood Alcohol Content and Toxicology Results",
    description:
      "Official chemical toxicology reports provide scientific proof regarding blood alcohol concentration level measurements. Laboratory analysis reports verify driver intoxication levels exceeded statutory legal limits strictly. Toxicology experts calculate backward extrapolation models establishing driver BAC during precise collision moments. Chemical test results establish the foundation required to access uncapped punitive damage remedies.",
    icon: <FaVial className="w-5 h-5 text-primary" />,
  },
  {
    id: "dashcam-footage",
    title: "Dashboard Camera Footage",
    description:
      "Dash cam video provides objective visual evidence of the position of vehicles just before drunk driving accident. This includes weaving in the lane, speeding, late braking and failures to obey traffic lights. Digital video footage counteracts false driver statements regarding collision mechanics or traffic conditions. Attorneys preserve original video files maintaining digital metadata necessary for civil court admissibility. Also important for settlement negotiations with insurance claim adjusters.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "surveillance-video",
    title: "Surveillance Video",
    description:
      "Commercial surveillance cameras capture crash incidents, pre-collision driving or commercial establishment service. Attorneys issue immediate spoliation demands to businesses preventing automatic digital video overwrite cycles. Traffic camera recordings maintained by municipal agencies provide high angle visual perspectives of crashes. Video documentation establishes clear fault timelines while confirming impaired driver reckless actions.",
    icon: <FaCamera className="w-5 h-5 text-primary" />,
  },
  {
    id: "hospital-treatment-record",
    title: "Hospital and Treatment Record",
    description:
      "Comprehensive clinical records establish direct causal links between crashes and resulting physical injuries. Hospital charts document immediate emergency room evaluations, diagnostic scans and physician treatment plans. Follow up physical therapy notes detail long term rehabilitation progress and permanent functional mobility restrictions. Detailed medical billing statements substantiate past financial expenditures required for complete economic claims.",
    icon: <FaHospital className="w-5 h-5 text-primary" />,
  },
  {
    id: "expert-witness-testimony",
    title: "Expert Witness Testimony",
    description:
      "Medical experts provide authoritative testimony explaining complex physical injuries and necessary future procedures. Vocational specialists analyze injury impacts upon future career earning capabilities and employment options. Economic experts calculate present value projections covering lifelong medical expenditures and lost income. Expert testimony establishes scientific credibility supporting multi million dollar personal injury recovery claims.",
    icon: <FaUserTie className="w-5 h-5 text-primary" />,
  },
  {
    id: "accident-scene-damage-photos",
    title: "Accident Scene and Damage Photos",
    description:
      "High resolution photos should be taken of the skid marks, obstacles on the road, the road surface and the prevailing lighting. It is necessary to capture the positions of the wreckage, the location of the crush, the functioning of the seatbelts and airbags. Visual evidence documents initial physical injury manifestations including cuts, bruising and mobility equipment. Photographs provide forensic foundations enabling accident reconstruction experts to model crash mechanics accurately.",
    icon: <FaCameraRetro className="w-5 h-5 text-primary" />,
  },
  {
    id: "witness-contact-information",
    title: "Witness Contact Information",
    description:
      "Securing contact details for eye witnesses allows legal teams to gather detailed recorded statements quickly. Independent witnesses provide neutral observations regarding erratic driving patterns preceding motor vehicle collisions. Witnesses reporting smell of alcohol or slurred language confirm the field intoxication test by the police officer. Witnesses are important in order to prevent evidence loss in case they move or forget. Having neutral witnesses helps the liability a lot in the pretrial civil court hearings.",
    icon: <FaAddressBook className="w-5 h-5 text-primary" />,
  },
];

export default function DDEvidenceSection({
  title = "Which Evidence You Need to Preserve After a Drunk Driving Accident",
  subTitle = "Evidence disappears fast after a crash and some of it exists for a matter of days only. Acting quickly protects the facts that will decide your settlement.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/which-evidence-you-should-preserve.webp",
  items = defaultItems,
}: DDEvidenceSectionProps) {
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
              alt="Preserve Evidence After Drunk Driving Accident"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                Preserve your crash evidence early before overwrite cycles erase critical video and electronic logs.
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
