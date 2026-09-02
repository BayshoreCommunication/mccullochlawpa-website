"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BPIFAQSectionProps {
  title?: string;
  subTitle?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What happens if the person who caused my accident has no insurance?",
    answer:
      "You can file claims under your uninsured motorist coverage. If you lack uninsured motorist coverage, PIP covers basic medical bills up to policy caps.",
  },
  {
    id: "faq-2",
    question: "Can I file a personal injury claim if the accident happened on private property?",
    answer:
      "You can file claims for crashes or falls occurring on private property. Property insurance or commercial liability policies cover injuries caused by unsafe private property conditions.",
  },
  {
    id: "faq-3",
    question: "Can I sue a business if I was injured because of unsafe conditions?",
    answer:
      "Failing to repair broken stairs or mop liquid spills creates legal liability for injuries. You can file premises liability claims against business owners to recover your medical costs.",
  },
  {
    id: "faq-4",
    question: "Can I file claim if my injury aggravated an existing condition?",
    answer:
      "Florida law permits financial recovery when accidents worsen preexisting medical conditions or injuries. Negligent drivers remain liable for additional pain and extra medical care caused by collisions.",
  },
  {
    id: "faq-5",
    question: "Can multiple people or businesses be responsible for the same injury?",
    answer:
      "Multiple parties can share legal fault for causing single motor vehicle or property accidents. For example, driver negligence and defective auto parts both contribute to complex highway crashes.",
  },
  {
    id: "faq-6",
    question: "What happens to a personal injury claim if the injured person dies before settlement?",
    answer:
      "If victims die from accident injuries, personal injury claims convert into wrongful death actions under Florida Statute Chapter 768. Personal representatives of the deceased person's estate file claims for surviving family members.",
  },
];

export default function BPIFAQSection({
  title = "Frequently Asked Questions About Tampa Personal Injury Claims",
  subTitle = "Find answers to common questions regarding Tampa personal injury claims, insurance coverage, property damage, and legal rights.",
  faqs = defaultFAQs,
}: BPIFAQSectionProps) {
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
