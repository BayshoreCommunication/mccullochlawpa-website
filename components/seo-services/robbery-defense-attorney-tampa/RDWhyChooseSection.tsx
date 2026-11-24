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
  subTitle?: React.ReactNode;
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
  subTitle = (
    <>
      Our{" "}
      <strong className="font-bold text-slate-900">
        robbery defense attorney tampa
      </strong>{" "}
      approaches criminal defense through case specific evidence review and a
      clear explanation of your legal options at McCulloch Law.
    </>
  ),
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

          <div className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 2 COLUMNS: IMAGE & 4 VALUE PROPOSITIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={imagePath}
              alt="Experienced Tampa robbery defense lawyer Drew McCulloch offering strategic criminal defense in Florida"
              title="Experienced Tampa Robbery Defense Lawyer McCulloch Law"
              data-description="Former prosecutor Drew McCulloch brings over 15 years of courtroom experience and 100+ jury trials to defend robbery charges across Tampa Bay."
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#8A6516] transition-colors mb-2.5 leading-snug">
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

      </div>
    </section>
  );
}
