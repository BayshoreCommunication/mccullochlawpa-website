"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BLFAQSectionProps {
  title?: string;
  subTitle?: string;
  headerImagePath?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "If this is false accusation, will it still be on my record?",
    answer:
      "Yes. If police arrested and fingerprinted you, the arrest may remain in Florida criminal history records even after prosecutors drop the charge or a court acquits you. You may qualify for record sealing or expungement, depending on the case outcome and Florida's eligibility rules.",
  },
  {
    id: "faq-2",
    question: "Will a no contact order keep me out of my house?",
    answer:
      "It can. A no contact order or domestic violence injunction may prohibit contact with another person and require you to leave a shared home.",
  },
  {
    id: "faq-3",
    question: "Can I really be charged if nobody was hurt?",
    answer:
      "Yes. Florida law defines battery to include intentionally touching or striking another person against their will, even without a visible injury. The law also covers intentionally causing bodily harm.",
  },
  {
    id: "faq-4",
    question: "Do I have to talk to the detective who left a card?",
    answer:
      "Generally, you can decline to answer investigative questions and request legal counsel. Clearly state your intention to remain silent and ask for an attorney before discussing the allegations.",
  },
  {
    id: "faq-5",
    question: "The contact was brief, accidental or mutual. Does that matter?",
    answer:
      "Yes. Brief, intentional contact against another person's will may qualify as battery, even without an injury. Truly accidental contact may challenge the intent required by Florida law. Mutual participation in a confrontation does not automatically excuse battery.",
  },
];

export default function BLFAQSection({
  title = "Frequently Asked Questions About Battery Charge",
  subTitle = "Find clear answers to common questions about battery charges, evidence, and defense options in Tampa.",
  headerImagePath = "/images/seo-services/battery-lawyer-tampa/faq-gavel-scales.png",
  faqs = defaultFAQs,
}: BLFAQSectionProps) {
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
              alt="Battery Defense FAQs Gavel and Scales"
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
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-primary/50 shadow-lg"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-primary" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-primary text-slate-950 rotate-180"
                        : "bg-slate-100 text-slate-500"
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

