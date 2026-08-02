"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaBalanceScale,
  FaUser,
  FaUsers,
  FaCommentDots,
  FaShieldAlt,
  FaExclamationCircle,
  FaUserFriends,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface FAQItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
}

export interface DVFAQSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  headerImagePath?: string;
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    question: "Is domestic violence charged as a felony or a misdemeanor in Florida?",
    answer:
      "Domestic violence charges in Florida vary based on the offense and prior record. First offense is usually a misdemeanor. Subsequent offenses or certain circumstances can elevate it to a felony.",
  },
  {
    id: "faq-2",
    number: "02",
    icon: <FaUser className="w-5 h-5 text-primary" />,
    question: "Can the alleged victim drop domestic violence charges in Tampa?",
    answer:
      "Only the prosecutor has the authority to drop charges. The state can continue the case and use evidence without the victim's cooperation.",
  },
  {
    id: "faq-3",
    number: "03",
    icon: <FaUsers className="w-5 h-5 text-primary" />,
    question: "Can my spouse or partner request prosecutors to drop my domestic violence charge?",
    answer:
      "No. A defense lawyer can leverage the victim's stance, but it doesn't ensure case dismissal.",
  },
  {
    id: "faq-4",
    number: "04",
    icon: <FaCommentDots className="w-5 h-5 text-primary" />,
    question: "What happens if I respond to a message from the alleged victim while a no-contact order is active?",
    answer:
      "Even if alleged victim reaches out first or asks you to respond, the restriction applies strictly to you. Responding to that can result in your arrest, revoked bond or new criminal charges.",
  },
  {
    id: "faq-5",
    number: "05",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    question: "Can a domestic violence charge in Tampa be sealed or expunged from my record once the case is over?",
    answer:
      "Record sealing or expungement for domestic violence depends on case outcomes. Consult Mcculloch Law's defense lawyer for eligibility assessment.",
  },
  {
    id: "faq-6",
    number: "06",
    icon: <FaExclamationCircle className="w-5 h-5 text-primary" />,
    question: "What happens when both people have injuries and police can't determine who started it?",
    answer:
      "Florida's law mandates officers to identify primary aggressor in domestic violence cases with injuries. If this determination is incorrect, the arrested individual may face prosecution despite acting in self defense.",
  },
  {
    id: "faq-7",
    number: "07",
    icon: <FaUserFriends className="w-5 h-5 text-primary" />,
    question: "Can I still see my children after a domestic violence arrest in Tampa before the case goes to trial?",
    answer:
      "An arrest can lead to temporary restrictions on parenting time in Hillsborough County. A domestic violence charge may trigger ban on contact affecting your children.",
  },
];

export default function DVFAQSection({
  title = "Tampa Domestic Violence Defense Lawyer Frequently Asked Questions",
  highlightedText = "Frequently Asked Questions",
  subTitle = "Answers to the most common questions about domestic violence charges in Tampa, Florida.",
  headerImagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/faq-gavel-scales.png",
  items = defaultFAQItems,
}: DVFAQSectionProps) {
  // All items closed by default — click to expand
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">

        {/* ==================================================== */}
        {/* HEADER SECTION WITH TITLE & GAVEL SCALES PHOTO       */}
        {/* ==================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md mb-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Title & Description Left */}
            <div className="lg:col-span-7 flex flex-col space-y-3">

              {/* Logo / Brand Accent */}
              <div className="flex flex-col items-start gap-0 mb-1">
                <span className="text-3xl font-bold text-primary tracking-widest leading-none">M</span>
                <span className="text-[10px] uppercase font-bold text-slate-700 tracking-[0.25em] leading-none">McCulloch Law</span>
              </div>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight">
                {title}
              </h2>

              {/* Sub-heading in Gold with Divider lines */}
              <div className="flex items-center gap-3 py-1">
                <div className="w-12 sm:w-16 h-[2px] bg-primary/60 rounded-full" />
                <span className="text-sm sm:text-base md:text-lg font-bold text-primary tracking-wider uppercase">
                  {highlightedText}
                </span>
                <div className="w-12 sm:w-16 h-[2px] bg-primary/60 rounded-full" />
              </div>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                {subTitle}
              </p>
            </div>

            {/* Gavel & Scales Photo Right */}
            <div className="lg:col-span-5 relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src={headerImagePath}
                alt="Frequently Asked Questions - Tampa Domestic Violence Defense Lawyer"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent lg:from-white/10" />
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* FAQ ACCORDION LIST (01 to 07)                        */}
        {/* ==================================================== */}
        <div className="max-w-6xl mx-auto space-y-3 mb-12">
          {items.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-row items-stretch"
              >
                {/* LEFT BADGE: Dark navy block with clipped right side, icon + number */}
                <div
                  className="bg-[#081524] text-white shrink-0 flex flex-col items-center justify-center gap-2 py-5 px-4"
                  style={{ minWidth: "110px", clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)" }}
                >
                  {/* White Circle Icon */}
                  <div className="w-10 h-10 rounded-full bg-white border border-primary/60 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  {/* Gold Number */}
                  <span className="text-xl font-bold text-primary tracking-wider font-sans leading-none">
                    {item.number}
                  </span>
                </div>

                {/* RIGHT BODY: Question row + expandable answer */}
                <div
                  onClick={() => toggleItem(item.id)}
                  className="flex-grow px-5 sm:px-7 py-4 sm:py-5 flex flex-col justify-center cursor-pointer select-none"
                >
                  {/* Question Row */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm sm:text-base lg:text-[17px] font-bold text-slate-900 leading-snug flex-grow hover:text-primary transition-colors">
                      {item.question}
                    </h3>
                    <div className="text-slate-400 shrink-0 mt-0.5 transition-colors">
                      {isOpen ? (
                        <FaChevronUp className="w-4 h-4 text-primary" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-3 pt-3 border-t border-slate-100">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================== */}
        {/* BOTTOM FEATURE CTA BAR (DARK NAVY)                   */}
        {/* ==================================================== */}
        <div className="max-w-6xl mx-auto bg-[#06121E] rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">

            {/* Left Title & Call (5 cols) */}
            <div className="md:col-span-5 flex items-center gap-4 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 pr-0 md:pr-4">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-sm">
                <IoIosCall className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-primary leading-tight">Need Legal Help?</span>
                <span className="text-base font-bold text-white leading-tight">Call McCulloch Law Today.</span>
              </div>
            </div>

            {/* Middle Features (4 cols) */}
            <div className="md:col-span-4 grid grid-cols-3 gap-2 text-center divide-x divide-slate-800 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 px-0 md:px-2">
              <div className="flex flex-col items-center px-1">
                <FaShieldAlt className="w-4 h-4 text-primary mb-1" />
                <span className="text-[10px] font-bold text-white">Aggressive Defense</span>
                <span className="text-[9px] text-slate-400">Protecting Your Rights</span>
              </div>
              <div className="flex flex-col items-center px-1">
                <FaClock className="w-4 h-4 text-primary mb-1" />
                <span className="text-[10px] font-bold text-white">Available 24/7</span>
                <span className="text-[9px] text-slate-400">When You Need Us</span>
              </div>
              <div className="flex flex-col items-center px-1">
                <FaMapMarkerAlt className="w-4 h-4 text-primary mb-1" />
                <span className="text-[10px] font-bold text-white">Tampa, FL</span>
                <span className="text-[9px] text-slate-400">Local Representation</span>
              </div>
            </div>

            {/* Right Gold Call Card (3 cols) */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <a
                href="tel:8134442817"
                className="w-full bg-primary hover:bg-[#a87d25] text-slate-950 rounded-xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full bg-slate-950/15 flex items-center justify-center text-slate-950 shrink-0">
                  <IoIosCall className="w-5 h-5 text-slate-950" />
                </div>
                <div className="flex flex-col text-left flex-grow">
                  <span className="text-sm font-bold text-slate-950 leading-tight">(813) 444-2817</span>
                  <span className="text-[10px] font-bold text-slate-900 uppercase">Free Confidential Case Review</span>
                </div>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
