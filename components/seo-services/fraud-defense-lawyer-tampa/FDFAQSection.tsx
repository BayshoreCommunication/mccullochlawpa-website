"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FDFAQSectionProps {
  title?: string;
  subTitle?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    id: "fraud-lawyer-cost",
    question: "How much does a fraud defense lawyer in Tampa cost?",
    answer:
      "Fees depend on the complexity of your case and the severity of the charges. We break down all costs clearly during your free consultation before any legal work begins.",
  },
  {
    id: "jail-for-fraud-charge",
    question: "Will I have to go to jail for a fraud charge?",
    answer:
      "Not necessarily. Jail sentences depend entirely on the strength of the evidence, the level of your charge, and your prior record. A strong defense can often result in minimized charges or a complete dismissal.",
  },
  {
    id: "fraud-case-duration",
    question: "How long does a typical fraud case take to resolve?",
    answer:
      "Simple state cases can resolve in a few months. Complex corporate or federal investigations can take a year or longer.",
  },
];

export default function FDFAQSection({
  title = "Tampa Fraud Defense Lawyer Frequently Asked Questions",
  subTitle = "CLEAR ANSWERS TO COMMON LEGAL QUESTIONS",
  faqs = defaultFaqs,
}: FDFAQSectionProps) {
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
