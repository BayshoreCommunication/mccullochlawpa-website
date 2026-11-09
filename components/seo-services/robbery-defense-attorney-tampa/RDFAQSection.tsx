"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RDFAQSectionProps {
  title?: string;
  subTitle?: string;
  headerImagePath?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "reduced-to-theft",
    question: "Can a robbery charge be reduced to theft?",
    answer:
      "Yes. A prosecutor may agree to reduce robbery to theft if the evidence fails to establish force, violence, assault or fear during the taking. A jury may also consider theft as a lesser included offense when the evidence supports it.",
  },
  {
    id: "wrong-person-identification",
    question: "What happens if a witness identifies the wrong person?",
    answer:
      "Your attorney can challenge the identification by examining the witness's initial description, viewing conditions, memory and police lineup procedures. The prosecution must still prove your identity beyond a reasonable doubt.",
  },
  {
    id: "armed-robbery-unrecovered-weapon",
    question: "Can I be charged with armed robbery if police never recovered a weapon?",
    answer:
      "Yes. Prosecutors may rely on eyewitness testimony, surveillance footage or circumstantial evidence to prove a weapon allegation. Police do not need to recover the weapon, but the State must establish the required elements beyond a reasonable doubt.",
  },
  {
    id: "robbery-charge-dismissed",
    question: "Can I get a robbery charge dismissed?",
    answer:
      "Yes. A prosecutor may drop the charge or a judge may dismiss it when a valid legal ground exists. For example, a court may dismiss a case if undisputed facts fail to establish a prima facie case. Your attorney may also challenge unlawfully obtained evidence or other legal defects.",
  },
  {
    id: "sealed-or-expunged",
    question: "Can a robbery conviction be sealed or expunged?",
    answer:
      "No. Florida Statutes § 943.0584 specifically makes robbery convictions ineligible for court ordered sealing or expungement, even when the court withholds adjudication. An arrest record without a conviction may qualify under separate eligibility requirements.",
  },
  {
    id: "speak-with-detectives",
    question: "Should I speak with detectives before hiring a lawyer?",
    answer:
      "No. Exercise your right to remain silent and request an attorney. Avoid discussing the alleged incident or giving statements without legal advice.",
  },
];

export default function RDFAQSection({
  title = "Frequently Asked Questions About Robbery Charge",
  subTitle = "Find clear answers to common questions about robbery charges, weapon enhancements, and legal defense options in Tampa.",
  headerImagePath = "/images/seo-services/robbery-defense-attorney-tampa/faq-gavel-scales.png",
  faqs = defaultFAQs,
}: RDFAQSectionProps) {
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
              alt="Robbery Defense FAQs Gavel and Scales"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            {subTitle}
          </p>

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
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-primary text-slate-950 rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <FaChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

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

