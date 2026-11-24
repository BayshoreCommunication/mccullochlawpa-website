"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface JDFAQSectionProps {
  title?: string;
  subTitle?: string;
  headerImagePath?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "charges-dismissed-florida",
    question: "Can my child's juvenile charges be dismissed in Florida?",
    answer:
      "Dismissals happen when prosecution evidence remains legally weak. Attorneys evaluate every single legal weakness carefully. No lawyer guarantees dismissals under any circumstances ever. A strong defense motion forces the state to reconsider.",
  },
  {
    id: "tried-as-adult-florida",
    question: "Can my child be tried as an adult in Florida?",
    answer:
      "Adult prosecution occurs under specific statutory laws. Age and offense severity dictate court transfer rules. Serious cases require careful legal review immediately. Prosecutors hold the power to direct file charges.",
  },
  {
    id: "juvenile-record-future-impact",
    question: "Will a juvenile record affect my child's future?",
    answer:
      "Records impact future jobs and higher education. Sealing or expunction offers potential relief later on. Eligibility depends entirely on Florida statutory law. A clean record restores future opportunities for the child.",
  },
];

export default function JDFAQSection({
  title = "Frequently Asked Questions About Juvenile Defense Charges",
  subTitle,
  headerImagePath = "/images/seo-services/juvenile-defense-lawyer-tampa/frequently-asked-questions-tampa-juvenile-defense-fl.webp",
  faqs = defaultFAQs,
}: JDFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4">
            <Image
              src={headerImagePath}
              alt="Frequently asked questions regarding Florida juvenile delinquency defense laws and hearings in Tampa"
              title="Frequently Asked Questions Tampa Juvenile Defense Law"
              data-description="Find clear answers to frequently asked questions about juvenile delinquency charges, adult court transfers, record expungement, and defense in Tampa."
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          {subTitle && (
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {subTitle}
            </p>
          )}

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaQuestionCircle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-primary/50"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6516] focus-visible:ring-inset"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                        ? "bg-primary border-primary text-slate-950 rotate-180"
                        : "border-slate-300 text-slate-500"
                        }`}
                    >
                      <FaChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
