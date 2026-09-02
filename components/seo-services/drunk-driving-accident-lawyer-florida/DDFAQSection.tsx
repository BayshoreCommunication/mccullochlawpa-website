"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DDFAQSectionProps {
  title?: string;
  subTitle?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What if the drunk driver doesn't have insurance or isn't insured enough?",
    answer:
      "You pursue your uninsured or underinsured motorist coverage under your own policy. McCulloch Law investigates all available coverage sources.",
  },
  {
    id: "faq-2",
    question: "Do I need to report the accident to police to get compensation?",
    answer:
      "Although not required by law, it is important if you do so. Police reports can contain important information such as witness statements and notes from the officer.",
  },
  {
    id: "faq-3",
    question: "What if drunk driver was from commercial or rideshare?",
    answer:
      "Commercial employers carry higher liability coverage. Rideshare companies such as Uber and Lyft have insurance while using the service. Recovery potential increases significantly.",
  },
  {
    id: "faq-4",
    question: "What happens if drunk driver has minimal insurance coverage?",
    answer:
      "You exhaust their policy first. Then you file under your underinsured motorist coverage. We investigate any additional assets the driver owns.",
  },
  {
    id: "faq-5",
    question: "Can I recover medical bills while my case is still pending?",
    answer:
      "Yes. Health insurance or your own medical payments coverage covers treatment. We recover those paid amounts through the drunk driver's settlement.",
  },
];

export default function DDFAQSection({
  title = "Drunk Driving Accident Lawyer Florida — Frequently Asked Questions",
  subTitle = "Find answers to common questions regarding drunk driving accident claims, insurance coverage, and legal options in Florida.",
  faqs = defaultFAQs,
}: DDFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaQuestionCircle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary/20" : ""
                    }`}
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-4">
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
