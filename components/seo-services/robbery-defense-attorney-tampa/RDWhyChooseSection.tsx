"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserShield,
  FaGavel,
  FaCalendarAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

export interface RobberyWhyChooseItem {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export interface RDWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: RobberyWhyChooseItem[];
}

const defaultWhyChooseItems: RobberyWhyChooseItem[] = [
  {
    id: "inside-knowledge-prosecution",
    title: "Inside Knowledge of the Prosecution",
    description: (
      <>
        <Link
          href="/about"
          className="font-semibold text-[#8A6516] underline hover:text-[#6D4E0D] transition-colors"
        >
          Attorney Drew McCulloch
        </Link>{" "}
        previously served as an Assistant State Attorney with the Hillsborough
        County State Attorney&apos;s Office in Tampa from 2010 to 2014. During
        his prosecution career, he selected more than 75 juries and tried over
        100 cases to verdict. His experience gives him direct knowledge of
        prosecution preparation, witness examination, evidence presentation and
        jury trial procedures.
      </>
    ),
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "local-trial-courtroom-experience",
    title: "Extensive Local Trial Courtroom Experience",
    description:
      "Drew McCulloch has more than 15 years of courtroom experience in Florida. He has handled thousands of criminal matters and hundreds of trials, according to the firm's attorney biography. Our Tampa office serves people facing criminal charges throughout Hillsborough County and the Greater Tampa Bay Area. You receive representation from an attorney familiar with the local court system and criminal procedure.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "immediate-21-day-pre-file",
    title: "Immediate 21 Day Pre File Strategy",
    description:
      "Our immediate 21 day pre file strategy focuses on early case review and timely action while the matter remains under investigation. During the available pre-file period, we can examine police reports, identify witnesses, preserve surveillance recordings, review electronic records and assess the allegations. We may also communicate appropriate legal and factual information to the prosecutor. A documented defense position can help the State Attorney evaluate disputed evidence and charging options.",
    icon: <FaCalendarAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "direct-access-licensed-attorney",
    title: "Direct Access to Your Licensed Attorney",
    description:
      "You deserve direct communication with the attorney handling your criminal case. At McCulloch Law, we explain the allegations, review your options and answer questions about the defense strategy. You can discuss evidence, hearing dates, plea proposals and legal decisions with counsel familiar with your file. We keep communication focused on your case.",
    icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
  },
];

export default function RDWhyChooseSection({
  title = "Why Choose Our Robbery Defense Firm in Tampa?",
  subTitle = "Our robbery defense attorney tampa approaches criminal defense through case specific evidence review and a clear explanation of your legal options at McCulloch Law.",
  imagePath = "/images/seo-services/robbery-defense-attorney-tampa/experienced-tampa-robbery-defense-lawyer-mcculloch.webp",
  items = defaultWhyChooseItems,
}: RDWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* TOP PROFILE & CREDENTIALS CARD */}
        <div className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl mb-12 max-w-6xl mx-auto overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-primary/40 bg-slate-900">
              <Image
                src={imagePath}
                alt="Experienced Tampa robbery defense lawyer Drew McCulloch offering strategic criminal defense in Florida"
                title="Experienced Tampa Robbery Defense Lawyer McCulloch Law"
                data-description="Former prosecutor Drew McCulloch brings over 15 years of courtroom experience and 100+ jury trials to defend robbery charges across Tampa Bay."
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a29] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#081524]/90 backdrop-blur-md border border-primary/30 text-center">
                <span className="text-sm font-bold text-white block">Drew McCulloch</span>
                <span className="text-xs text-primary font-medium">Managing Attorney | Former State Prosecutor</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Proven Courtroom Defense with Former State Prosecutor
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Attorney Drew McCulloch brings unmatched insight into Hillsborough County criminal prosecutions. With over 100 cases tried to verdict, we build defense strategies that aggressively scrutinize physical evidence, witness credibility, and police procedure.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="tel:8134442817"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-[#a87d25] text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  <span>Call (813) 444 2817</span>
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>Learn More About Drew</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 4 VALUE PROPOSITIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <div className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
