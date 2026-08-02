"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CDFAQSectionProps {
  title?: string;
  subTitle?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    id: "move-out-of-state-probation",
    question: "Can I move out of state while on felony probation in Florida?",
    answer:
      "You cannot move out of state while on felony probation without permission from your probation officer.",
  },
  {
    id: "field-sobriety-exercises",
    question: "Should I perform field sobriety exercises during a Tampa DUI stop?",
    answer:
      "Declining field sobriety exercises is wise, as they are voluntary and carry no penalties. Refusing them can weaken the state's case against you.",
  },
  {
    id: "jail-time-first-offense",
    question: "Will I go to jail for a first time offense in Florida?",
    answer:
      "First time offenders in Florida may receive a withhold of adjudication. This is to avoid a formal conviction except for DUI and certain felonies.",
  },
  {
    id: "jail-time-second-dui",
    question: "Is jail time mandatory for a second DUI in Florida?",
    answer:
      "Yes, a second DUI within five years mandates at least 10 days in jail. A third conviction within 10 years increases the minimum to 30 days and is a felony.",
  },
  {
    id: "withhold-adjudication-job-app",
    question: "Does a withhold of adjudication count as a conviction on a job application?",
    answer:
      "No, a withhold of adjudication is not considered a conviction under Florida law. However, some applications may still require disclosure of the arrest.",
  },
  {
    id: "criminal-case-duration",
    question: "How long does a criminal case take in Hillsborough County?",
    answer:
      "Most Florida misdemeanor cases resolve within about 90 days. Felony cases typically take closer to 180 days.",
  },
  {
    id: "dui-expunged-sealed",
    question: "Can I get a DUI expunged or sealed in Florida?",
    answer:
      "No, if convicted, you cannot expunge a DUI in Florida. However, if dismissed or acquitted, you may qualify for expungement.",
  },
  {
    id: "own-gun-misdemeanor-dv",
    question: "Can I own a gun after a misdemeanor domestic violence conviction?",
    answer:
      "No, firearm possession is banned for life after any misdemeanor domestic violence conviction, even for police and military. A plea to a lesser charge can still trigger this ban.",
  },
];

export default function CDFAQSection({
  title = "Tampa Criminal Defense Lawyer Frequently Asked Questions",
  subTitle = "CLEAR ANSWERS TO COMMON LEGAL QUESTIONS",
  faqs = defaultFaqs,
}: CDFAQSectionProps) {
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
