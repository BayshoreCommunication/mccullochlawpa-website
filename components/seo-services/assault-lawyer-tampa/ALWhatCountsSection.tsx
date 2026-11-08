"use client";

import React from "react";
import Link from "next/link";
import {
  FaBalanceScale,
  FaExclamationCircle,
  FaTimesCircle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

export interface AssaultElement {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface NotAssaultItem {
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface ALWhatCountsSectionProps {
  title?: string;
  subTitle?: string;
  elements?: AssaultElement[];
  notAssaultHeading?: string;
  notAssaultItems?: NotAssaultItem[];
}

const defaultElements: AssaultElement[] = [
  {
    id: "intentional-threat",
    number: "01",
    title: "1. An Intentional, Unlawful Threat",
    description:
      "The defendant will have to intentionally make a threat of violence against the victim. The threat may have been spoken, written or gestured. Casual commentary, vague threats or conflicts without an immediate violence threat are not sufficient.",
  },
  {
    id: "apparent-ability",
    number: "02",
    title: "2. The Apparent Ability to Carry It Out",
    description:
      "The accused must appear capable of executing the threat at the exact moment it is made. A threat made from a distance where physical violence is physically impossible typically does not qualify as an assault.",
  },
  {
    id: "imminent-fear",
    number: "03",
    title: "3. A Well Founded Fear of Imminent Violence",
    description:
      'The victim must experience a real, reasonable fear and the violence is about to happen immediately. Conditional threats (e.g., "If you come back next week, I will hurt you") generally fail this requirement because the danger is not immediate.',
  },
];

const defaultNotAssaultItems: NotAssaultItem[] = [
  {
    title: "Accidental behavior",
    description:
      "Unintentional movement or action does not have the predatory threat needed to be a form of assault.",
  },
  {
    title: "Insults without unlawful threat",
    description:
      "Using bad language, insulting people or shouting in anger do not always amount to assault. The conduct of the individual and the circumstances will also be important factors.",
  },
  {
    title: "Threats involving future events",
    description:
      "An assertion of the threat of violence occurring at a future date may not constitute a threat of immediacy, depending upon how it is made.",
  },
  {
    title: "No apparent ability to cause immediate violence",
    description:
      "The circumstances may undermine the state's claim of an immediate threat.",
  },
  {
    title: "Physical contact alone",
    description:
      "Intentional contact, such as touching or striking, can support a further charge of battery. If the charge relates to physical contact only and not to threats, then you need battery lawyer Tampa.",
    link: {
      text: "battery lawyer Tampa",
      href: "/contact",
    },
  },
];

export default function ALWhatCountsSection({
  title = "What Counts as Assault Under Florida Law?",
  subTitle = "Florida Statutes § 784.011 defines simple assault through three elements.",
  elements = defaultElements,
  notAssaultHeading = "What Does Not Count as Assault?",
  notAssaultItems = defaultNotAssaultItems,
}: ALWhatCountsSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 3 ELEMENTS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-14">
          {elements.map((el) => (
            <div
              key={el.id}
              className="bg-[#0c1a29] rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-primary/40 group-hover:text-primary transition-colors">
                    {el.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {el.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT DOES NOT COUNT AS ASSAULT */}
        <div className="max-w-6xl mx-auto bg-[#081524] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <FaTimesCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {notAssaultHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {notAssaultItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#0c1c2e] border border-slate-800/80 flex items-start gap-3.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-100">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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

