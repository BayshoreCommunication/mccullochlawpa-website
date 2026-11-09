"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export interface RDTestimonialsSectionProps {
  title?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "michael-m",
    name: "Michael M.",
    rating: 5,
    review:
      "Drew is very professional and acts intentionally. He provides realistic expectations and follows through on his responsibilities. Recently we hired Drew for a case dealing with both a state criminal defense case, as well as some issues with the Department of Health. Through Drew, I was able to achieve best case scenario and a significantly reduced sentence compared to similar offenders. I fully recommend and endorse Drew, he’s a class act.",
  },
  {
    id: "haley",
    name: "Haley",
    rating: 5,
    review:
      "Drew is extremely personable, persistent, resilient and reliable. I have never had to speak with no one but him directly at all hours, day or night on his personal cellphone. He has been handling a very unique high conflict family case for me. It’s a highly unique case involving severe mental illness on my behalf. He has never judged or given up on me. He has truly spent the time to listen to my special mental disability and has pushed a very compassionate yet aggressive approach to fight on my behalf. Absolutely highly recommended.",
  },
  {
    id: "angela",
    name: "Angela",
    rating: 5,
    review:
      "While I was ignorant of the criminal process, Drew guided me thoroughly through the entire DUI process making sure that I was fully aware of all my options. He took all of my wishes into consideration as well. I am completely satisfied with the outcome and feel as if I came out of the process “on top”! Drew is highly recommended and trusted by me! “Charges dismissed” and I feel as if I came out with a new friend as well! #winwin",
  },
  {
    id: "tracy-g",
    name: "Tracy G.",
    rating: 5,
    review:
      "If you are looking for an attorney who truly cares about you and the outcome of your case, than you need to hire Attorney Drew McCulloch. He works incredibly hard for you and makes sure you feel comfortable and prepared for your case. I highly recommend Mr. McCulloch to anyone in need of a criminal defense attorney. He really is a 5 star attorney.",
  },
  {
    id: "ariel-j",
    name: "Ariel J.",
    rating: 5,
    review:
      "They were honest from the beginning, did their best and got the job done. I didn’t have to appear to court and take a day off for it. Continued working while they handled it all. Great work and would recommend to anyone in need of their services.",
  },
];

export default function RDTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  testimonials = defaultTestimonials,
}: RDTestimonialsSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-1 text-amber-500 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>

        {/* 5 REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <FaQuoteLeft className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">
                  {t.name}
                </span>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  Verified Client Review
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

