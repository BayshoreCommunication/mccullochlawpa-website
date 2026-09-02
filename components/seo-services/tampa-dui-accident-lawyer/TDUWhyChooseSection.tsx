"use client";

import React from "react";
import Image from "next/image";
import {
  FaUserShield,
  FaPhoneAlt,
  FaAward,
  FaGavel,
  FaCoins,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDUWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: WhyChooseItem[];
}

const defaultItems: WhyChooseItem[] = [
  {
    id: "ex-prosecutor-defense-team",
    title: "Ex-Prosecutor on Defense Team",
    description:
      "Before starting our criminal defense firm, founder Drew McCulloch worked as a prosecutor. His prior prosecutorial experience gives him firsthand knowledge about state attorneys' DUI case building tactics. Our legal team can develop strong counterarguments early on by anticipating state strategies.",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "direct-attorney-access",
    title: "Direct Attorney Access",
    description:
      "McCulloch Law, P.A. provides direct attorney communication rather than reassigning you to case managers. You receive regular case updates, clear answers and personal attention from your lawyer. Our attorneys handle every court motion, document filing and legal hearing personally.",
    icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "dui-case-results-hillsborough",
    title: "DUI Case Results in Hillsborough",
    description:
      "Our firm has over 100 jury trials that have resulted in verdicts. Our legal practice is guided by our track record of obtaining favorable verdicts and charge dismissals. Demonstrated trial capability gives us strong bargaining power when negotiating directly with state prosecutors.",
    icon: <FaAward className="w-5 h-5 text-primary" />,
  },
  {
    id: "knowledge-of-local-judges",
    title: "Knowledge of Local Judges",
    description:
      "Years of courtroom practice across Hillsborough County create familiarity with local judicial procedures. Understanding judge expectations and prosecutor tendencies enhances our legal strategy planning in court. Local knowledge helps streamline court hearings and local diversion program applications.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "transparent-flexible-pricing",
    title: "Transparent and Flexible Pricing",
    description:
      "McCulloch Law, P.A. offers transparent flat fee pricing with no surprises or unexpected legal expenses. Clear financial terms allow you to secure experienced legal representation with complete confidence. Our legal coverage includes administrative license hearings and criminal court representation under one agreement.",
    icon: <FaCoins className="w-5 h-5 text-primary" />,
  },
  {
    id: "available-nights-weekends",
    title: "Available Nights and Weekends",
    description:
      "Arrests for DUI crashes occur on the weekends and late at night throughout Tampa Bay. Our company is available 24 hours every week to manage post-arrest crises and defend your rights. Your constitutional rights are protected during crucial early detention windows by prompt legal action.",
    icon: <FaClock className="w-5 h-5 text-primary" />,
  },
];

export default function TDUWhyChooseSection({
  title = "Why Tampa DUI Accused Choose McCulloch Law for Defense",
  subTitle = "Case results, direct attorney access and courtroom preparation carry real weight in Hillsborough County court.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/mcculloch.webp",
  items = defaultItems,
}: TDUWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaCheckCircle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <Image
              src={imagePath}
              alt="Attorney Drew McCulloch - Tampa DUI Defense Lawyer"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-sm font-bold text-white">Drew McCulloch, Esq.</p>
              <p className="text-xs text-slate-300">Former Prosecutor &amp; Tampa DUI Defense Attorney</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-5 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#0c1a29] rounded-2xl p-5 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
