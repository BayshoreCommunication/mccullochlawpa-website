"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronDown,
  FaQuestionCircle,
  FaShieldAlt,
  FaGavel,
  FaFileContract,
  FaSearch,
  FaExclamationCircle,
} from "react-icons/fa";

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

export interface SCFAQSectionProps {
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
    icon: <FaGavel className="w-5 h-5 text-primary" />,
    question: "Can Tampa prosecutors file sex crime charges if alleged victim doesn't want to pursue the case?",
    answer:
      "Yes. Hillsborough County prosecutors make charging decisions based on evidence rather than victim preference.",
  },
  {
    id: "faq-2",
    number: "02",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    question: "Is Florida's sex offender and sexual predator designations different?",
    answer:
      "Yes. Sexual predators face stricter requirements than standard sex offenders in Florida. This may include more frequent reporting and broader residency restrictions.",
  },
  {
    id: "faq-3",
    number: "03",
    icon: <FaFileContract className="w-5 h-5 text-primary" />,
    question: "If I accepted a plea deal years ago in Tampa, is there any way to get off the Florida registry now?",
    answer:
      "Florida generally does not allow removal from the sex offender registry after conviction. Except under specific conditions after 25 years.",
  },
  {
    id: "faq-4",
    number: "04",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
    question: "Will a Tampa sex crime arrest appear on background checks before any charges are officially filed?",
    answer:
      "Florida publicly maintains arrest records and it impacts background checks and potential expungement.",
  },
];

export default function SCFAQSection({
  title = "Tampa Sex Crime Defense Lawyer Frequently Asked Questions",
  highlightedText = "Frequently Asked Questions",
  subTitle = "Answers to common questions about sex crime charges, registry requirements, and defense strategy in Tampa, Florida.",
  headerImagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/faq-gavel-scales.png",
  items = defaultFAQItems,
}: SCFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans text-slate-800 relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {highlightedText}
            </span>
            <div className="w-8 h-[2px] bg-primary rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <div className="w-16 h-[3px] bg-primary rounded-full mb-4" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src={headerImagePath}
                alt="Tampa Legal Scales and Gavel FAQ"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                  Have Questions?
                </span>
                <p className="text-sm font-semibold leading-snug">
                  Get clear answers from a Tampa sex crime defense attorney.
                </p>
              </div>
            </div>

            <div className="bg-[#081524] rounded-3xl p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <FaExclamationCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">
                  Need Immediate Answers?
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Every case is unique. Contact McCulloch Law for a free confidential consultation regarding your specific charges.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md transition-all duration-200 mt-2"
              >
                Contact Attorney Drew McCulloch
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                    isOpen
                      ? "border-primary shadow-lg ring-1 ring-primary/30"
                      : "border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/30 shrink-0 mt-0.5">
                        {item.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-primary text-slate-950 rotate-180"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      <FaChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100">
                      <div className="pt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
