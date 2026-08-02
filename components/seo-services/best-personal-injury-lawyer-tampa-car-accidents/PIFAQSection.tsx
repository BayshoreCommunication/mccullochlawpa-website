"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PIFAQSectionProps {
  title?: string;
  subTitle?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    id: "talk-to-own-insurance",
    question: "Do I have to talk to my own insurance company after a crash that wasn't my fault?",
    answer:
      "Yes, you must notify your insurer promptly even if not at fault. This activates your PIP benefits and share only basic details.",
  },
  {
    id: "medical-treatment-no-upfront-money",
    question: "Can I get medical treatment if I don't have insurance or money upfront?",
    answer:
      "Numerous Tampa doctors accept accident victims with a letter of protection. This ensures payment from your settlement rather than upfront cash.",
  },
  {
    id: "settle-claim-duration",
    question: "How long does it take to settle a car accident claim in Tampa?",
    answer:
      "Simple claims may settle in a few months, while serious injuries can take over a year. Rushing often leads to higher costs.",
  },
];

export default function PIFAQSection({
  title = "Tampa Car Accident Lawyer Frequently Asked Questions",
  subTitle = "CLEAR ANSWERS TO COMMON LEGAL QUESTIONS",
  faqs = defaultFaqs,
}: PIFAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans text-slate-800">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {subTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-[3px] bg-primary rounded-full my-3" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <FaQuestionCircle className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary/20 text-primary" : ""
                    }`}
                  >
                    <FaChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-sans">
                    {faq.answer}
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
