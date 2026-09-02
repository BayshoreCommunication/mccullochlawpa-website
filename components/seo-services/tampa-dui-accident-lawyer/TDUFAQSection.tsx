"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TDUFAQSectionProps {
  title?: string;
  subTitle?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Will I lose my job if convicted of a DUI accident in Tampa?",
    answer:
      "A DUI conviction results in a lasting criminal record and can jeopardize employment. Especially for corporate drivers and licensed professionals. Taking diversion programs or charge reductions can help secure your job.",
  },
  {
    id: "faq-2",
    question: "Does my auto insurance still cover damages if I was driving drunk?",
    answer:
      "Auto insurance usually covers third-party claims but may deny coverage for the driver's own vehicle. Premiums can rise or policies may be canceled after a DUI conviction.",
  },
  {
    id: "faq-3",
    question: "Can I be charged with DUI if the other driver caused the crash?",
    answer:
      "Florida law permits DUI charges for impairment regardless of who caused the crash.",
  },
  {
    id: "faq-4",
    question: "Can a passenger face DUI charges after a Tampa accident?",
    answer:
      "Passengers without physical control of a vehicle cannot be charged with DUI in Florida. However, they may face arrest for constructive possession if illegal drugs are found nearby.",
  },
  {
    id: "faq-5",
    question: "What happens if I left the scene of a DUI accident before police arrived?",
    answer:
      "Leaving the scene of a DUI accident escalates charges to felonies in Florida.",
  },
  {
    id: "faq-6",
    question: "Will a DUI accident conviction affect my immigration status?",
    answer:
      "DUI convictions with serious injuries or suspended licenses can lead to deportation for non citizens.",
  },
  {
    id: "faq-7",
    question: "Do I still need a lawyer if no one was hurt in the accident?",
    answer:
      "DUI accidents causing only property damage are first degree misdemeanors with penalties up to twelve months in jail. License suspensions begin immediately.",
  },
  {
    id: "faq-8",
    question: "Can I get my car back after it's impounded following a DUI accident?",
    answer:
      "Impounded vehicles incur daily fees and are held for ten days post DUI conviction with hardship release options for dependents.",
  },
];

export default function TDUFAQSection({
  title = "Tampa DUI Accident Lawyer — Frequently Asked Questions",
  subTitle = "Find answers to common questions regarding Tampa DUI accident defense, license suspension, insurance, and court procedures.",
  faqs = defaultFAQs,
}: TDUFAQSectionProps) {
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
