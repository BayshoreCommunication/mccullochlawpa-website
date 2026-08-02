"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaMapMarkerAlt,
  FaFileAlt,
  FaLandmark,
  FaUsers,
  FaBan,
  FaExclamationTriangle,
  FaMobileAlt,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface LawChangeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SCLawChangesSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: LawChangeItem[];
}

const defaultLawChangeItems: LawChangeItem[] = [
  {
    id: "prolonged-incarceration",
    icon: <FaLandmark className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Prolonged incarceration (if convicted)",
    description:
      "Recent amendments extended mandatory minimum prison terms for several sex offense categories in Florida. Judges now have less discretion to sentence below those minimums. This applies even with documented mitigating circumstances. This sentencing makes pre trial motions even more critical. Because losing at trial now costs substantially more. Tampa sex crime defense lawyer factors in new sentencing floors from the very first defense consultation forward.",
  },
  {
    id: "elimination-pretrial-release",
    icon: <FaBan className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Elimination of Pretrial Release",
    description:
      "House Bills 445 and 1159 ended bail eligibility for defendants facing certain aggravated sex offense charges. Courts may now hold defendants facing charges with no bail involving victims under 12. This makes first appearance hearing the most consequential early event in any Tampa sex crime case.",
  },
  {
    id: "harsher-mandatory-sentencing",
    icon: <FaExclamationTriangle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Harsher Mandatory Sentencing",
    description:
      "House Bill 1159 imposed higher mandatory minimums for sex crimes. This applies especially if children are involved and for repeat offenders. Courts must apply these minimums even when prosecutors recommend something lower in a plea negotiation. This eliminated plea flexibility previously available in certain Tampa sex crime resolutions. Criminal defense team factors these new minimums into every defense decision from arraignment forward.",
  },
  {
    id: "prohibited-swimming-pools",
    icon: <FaBan className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Prohibited Public Swimming Pools",
    description:
      "Senate Bill 212 prohibits registered sex offenders from entering public swimming pools anywhere in Florida. Florida applies it to everyone including recent convictions now on the registry. Violations carry felony exposure with no grace period for adjustment built into the statute. Defense lawyer advises registered clients on which specific facilities trigger the prohibition under the current statutory language.",
  },
  {
    id: "strict-buffer-zones",
    icon: <FaMapMarkerAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Strict Buffer Zones",
    description:
      "Senate Bill 212 expanded the buffer zones limiting legal presence of registered sex offenders. Updated distances exceed required prior statutes around schools, parks and recreation areas statewide. These expanded zones affect offenders living place, work and travel in Hillsborough County.",
  },
  {
    id: "prohibited-communication-minors",
    icon: <FaMobileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Prohibited Communication with Minors",
    description:
      "Senate Bill 212 restricts sex offenders with registration from contacting minors through any possible ways. The ban applies to social media, gaming apps, messaging services and email without exception. Any digital contact with a minor even casual now carries criminal exposure under the law.",
  },
  {
    id: "enhanced-reporting",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Enhanced Reporting Obligations",
    description:
      "Florida rule mandates sex offenders to report internet usernames, email addresses and social media accounts. You must submit any created new account, username or handle within 48 hours. Missing a username update carries same felony exposure as a missed address change. Defense attorney usually helps registered clients understand this expanded scope to avoid new charge.",
  },
  {
    id: "address-verification",
    icon: <FaUsers className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Annual Address Verification",
    description:
      "Some high risk registrants must now verify their address in person every 90 days rather than annually. Verification must occur at Hillsborough County Sheriff's Office instead of online or via mail. Missing one 90 day check-in is a third degree felony under Florida Statute § 943.0435.",
  },
  {
    id: "terminology-updates",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Terminology Updates",
    description:
      "Florida revised the statutory definitions classifying certain sex offenses across registry system. Some defendants registered under prior language now fall into harsher categories with stricter supervision. If your conviction predates these changes, your legal obligations may have shifted without direct notice from the state. Sex crime defense lawyer reviews prior convictions against updated terminology and challenges incorrect reclassifications.",
  },
];

export default function SCLawChangesSection({
  title = "How Florida's Sex Crime Laws Changes Affect Cases in 2026",
  subTitle = "Florida enacted important changes to sex crime laws effective in 2025 and 2026. These changes influence the actions of prosecutors in Hillsborough County cases currently.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/courthouse-law.png",
  items = defaultLawChangeItems,
}: SCLawChangesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
              <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm shrink-0">
                <FaShieldAlt className="w-4 h-4 text-primary" />
              </div>
              <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subTitle}
            </p>

            <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Tampa Courthouse Legal Changes 2026"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaBalanceScale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  <span>Legal changes.</span>
                  <span>Real consequences.</span>
                  <span className="font-bold text-white">Strong defense matters.</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-slate-700/60" />

              <a
                href="tel:8134442817"
                className="group flex items-center gap-4 hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-950 shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <IoIosCall className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-primary tracking-wide leading-tight group-hover:text-yellow-400 transition-colors">
                    Get a Free Case Review
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Speak with a Tampa Sex Crime Lawyer Today.
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="border-l-2 border-primary pl-3.5 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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
