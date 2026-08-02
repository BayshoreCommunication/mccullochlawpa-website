"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaFileAlt,
  FaGavel,
  FaClock,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface LawChangeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PILawChangesSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: LawChangeItem[];
}

const defaultLawChangeItems: LawChangeItem[] = [
  {
    id: "no-fault-pip-survive",
    icon: <FaShieldAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "No-Fault System and PIP Survive Repeal Attempt",
    description:
      "Lawmakers actively proposed eliminating personal injury protection plans during the recent legislative term. Senate Bill 522 intended to replace no fault coverage with mandatory bodily injury limits. That specific insurance bill quickly died inside a legislative committee earlier this spring. Your ten thousand dollar insurance coverage won't change from how it worked previously. Injured drivers must still utilize their own automotive coverage regardless of accident blame.",
  },
  {
    id: "civil-procedure-timelines",
    icon: <FaClock className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "New Civil Procedure Rules Faster Case Timelines",
    description:
      "Newly amended Florida civil procedure rules quickly accelerate judicial litigation timelines for accident lawsuits. State judges now force much quicker disclosure of physical evidence and witness lists. Active lawsuits must adhere to strict sixty day clocks regarding mandatory initial disclosures. You don't want to delay gathering documents because extensions are rarely granted anymore.",
  },
  {
    id: "bad-faith-insurance-bar",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Bad Faith Insurance Claims Face Higher Bar",
    description:
      "Recent tort reform legislation raised requirements for proving bad faith insurance company actions. Corporate insurance adjusters operate under clear rules outlining exactly when claims require payment. Claimants face tighter statutory standards if they sue companies for unfair settlement practices. They won't easily escape accountability if our lawyers actively monitor your negotiation files.",
  },
];

export default function PILawChangesSection({
  title = "How Florida's 2026 Car Accident Laws Affect Your Claim",
  subTitle = "Recent Florida law updates in car accident regulations affect how Tampa auto collision claims are processed. The no-fault insurance system remains intact after a repeal attempt.",
  imagePath = "/images/seo-services/best-personal-injury-lawyer-tampa-car-accidents/courthouse-law.png",
  items = defaultLawChangeItems,
}: PILawChangesSectionProps) {
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

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {subTitle}
            </p>

            <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Florida 2026 Car Accident Legal Updates"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="bg-[#081524] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <FaBalanceScale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  <span>Legal updates.</span>
                  <span>Strict timelines.</span>
                  <span className="font-bold text-white">Aggressive representation.</span>
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
                    Speak with a Tampa Personal Injury Lawyer Today.
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
