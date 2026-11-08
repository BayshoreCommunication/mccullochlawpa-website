"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ALFAQSectionProps {
  title?: string;
  subTitle?: string;
  headerImagePath?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Can assault charges be dropped in Florida?",
    answer:
      "Yes, a prosecutor can dismiss or reduce an assault charge based on evidence or circumstances. The defense can challenge the charge legally. The alleged victim cannot unilaterally stop the prosecution; the state attorney decides.",
  },
  {
    id: "faq-2",
    question: "Does the alleged victim have to press charges for an assault case?",
    answer:
      "No. A person can report an incident, but the state attorney decides on criminal charges. The alleged victim's wishes may influence the case but do not terminate it. Prosecutors review evidence like police reports and witness statements to determine how to proceed.",
  },
  {
    id: "faq-3",
    question: "Can I get a first time assault charge dismissed?",
    answer:
      "A first time assault charge may qualify for dismissal or another resolution in some circumstances, but a clean record does not guarantee a particular outcome.",
  },
  {
    id: "faq-4",
    question: "Do I need a lawyer for a misdemeanor assault charge?",
    answer:
      "Yes you should. Because misdemeanor convictions still show up on background checks for jobs, housing and professional licensing. An attorney can often negotiate a withhold of adjudication, which preserves your eligibility for record sealing later.",
  },
  {
    id: "faq-5",
    question: "Can police pursue an assault charge without video or physical evidence?",
    answer:
      "Yes. A prosecutor may pursue an assault case using witness testimony, statements, police observations, messages or other admissible evidence. Simple assault does not require physical contact or an injury.",
  },
  {
    id: "faq-6",
    question: "Is it still assault if no one got hurt?",
    answer:
      "Yes. Florida’s assault statute does not require injury or contact. A credible threat, paired with the apparent ability to act on it, satisfies the charge on its own.",
  },
  {
    id: "faq-7",
    question: "Can an assault charge be sealed or expunged from my record?",
    answer:
      "Florida permits sealing when a case ends in dismissal, a withhold of adjudication or acquittal. A conviction with formal adjudication generally blocks expunction, which makes the outcome of your case matter well beyond the courtroom.",
  },
];

export default function ALFAQSection({
  title = "Frequently Asked Questions About Assault Charge",
  subTitle = "Find clear answers to common questions about assault charges, evidence, and defense options in Tampa.",
  headerImagePath = "/images/seo-services/assault-lawyer-tampa/faq-gavel-scales.png",
  faqs = defaultFAQs,
}: ALFAQSectionProps) {
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
              alt="Assault Defense FAQs Gavel and Scales"
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

