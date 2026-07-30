"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGavel,
  FaBalanceScale,
  FaFileSignature,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export interface InjunctionItem {
  number: string;
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DomesticViolenceInjunctionsSectionProps {
  title?: string;
  highlightedText?: string;
  paragraph?: string;
  imagePath?: string;
  items?: InjunctionItem[];
}

const defaultInjunctionItems: InjunctionItem[] = [
  {
    number: "01",
    id: "disputing-allegations",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Disputing Allegations at Hearing",
    description:
      "We dispute petitions for injunctions are filed without opposition and are intentionally biased from outset. We build direct factual rebuttals and present evidence along with witness testimony. This is specifically to counter what the petitioner filed without any challenge.",
  },
  {
    number: "02",
    id: "proving-legal-standard",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Proving Legal Standard for Issuance Not Met",
    description:
      "Petitioners must demonstrate an objectively reasonable fear of future harm as per court requirements. We examine whether that legal threshold was genuinely satisfied. Or whether the petition relies entirely on speculation and uncorroborated allegations.",
  },
  {
    number: "03",
    id: "order-dissolution",
    icon: <FaFileSignature className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Request for Order Change or Dissolution",
    description:
      "An active injunction is not permanent by default and can be challenged after issuance. We seek modification or dissolution when the supporting circumstances have changed. We also pursue dissolution if those circumstances were factually inaccurate from the start.",
  },
  {
    number: "04",
    id: "challenge-violation",
    icon: <FaShieldAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Challenge Injunction Violation Charges",
    description:
      "Violations of domestic violence injunctions are criminal offenses under Florida law. These are prosecuted separately from the underlying case. We independently challenge violation charges and question if the conduct met legal definitions.",
  },
];

export default function DomesticViolenceInjunctionsSection({
  title = "Domestic Violence Injunctions and Restraining Orders — How McCulloch Law Defends Your Case",
  highlightedText = "How McCulloch Law Defends Your Case",
  paragraph = "Domestic violence order restricts your access to your home, forfeits your firearm rights, reduces your parenting time and shows up on background checks. McCulloch Law's criminal defense lawyer for domestic violence in tampa prepares for injunction hearings as thoroughly as for full trials.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/gavel-scales.png",
  items = defaultInjunctionItems,
}: DomesticViolenceInjunctionsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: TITLE, PARAGRAPH, BUTTON & 2x2 GRID     */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 leading-tight tracking-tight">
              {title.split(highlightedText)[0]}
              <span className="text-primary block mt-1">{highlightedText}</span>
              {title.split(highlightedText)[1]}
            </h2>

            {/* Gold Divider Line */}
            <div className="w-20 h-[3px] bg-primary rounded-full" />

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
              Domestic violence order restricts your access to your home, forfeits your firearm rights, reduces your parenting time and shows up on background checks.{" "}
              <span className="font-bold text-primary">McCulloch Law's</span>{" "}
              <span className="font-bold text-slate-900">criminal defense lawyer for domestic violence in tampa</span>{" "}
              prepares for injunction hearings as thoroughly as for full trials.
            </p>

            {/* Get in Touch CTA Pill Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#081524] text-white hover:bg-primary hover:text-slate-950 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all duration-300 group"
              >
                <span>Get in Touch</span>
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 2x2 GRID OF INJUNCTION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer"
                >
                  {/* Top Subtle Hover Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Row: Number Badge + Icon */}
                  <div className="flex items-center gap-3 mb-3 w-full">
                    <div className="w-7 h-7 rounded-full bg-white border border-primary/50 text-slate-900 font-bold text-xs flex items-center justify-center shadow-sm shrink-0">
                      {item.number}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: GAVEL & SCALE IMAGE                     */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 relative w-full min-h-[380px] lg:min-h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
            <Image
              src={imagePath}
              alt="Domestic Violence Injunctions Defense Tampa"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
