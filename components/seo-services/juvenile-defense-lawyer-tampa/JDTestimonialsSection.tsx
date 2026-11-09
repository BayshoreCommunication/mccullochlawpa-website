"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export interface JDTestimonialsSectionProps {
  title?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "chennel-a",
    name: "Chennel A.",
    rating: 5,
    review:
      "They handled everything from start to finish and got my ticket dismissed. I didn’t have to call even once. Thank you so much!",
  },
  {
    id: "erica-t",
    name: "Erica T.",
    rating: 5,
    review:
      "This was the absolute best experience I could have hoped for under such unfortunate circumstances. Drew is the best at what he does.",
  },
  {
    id: "gelica-s",
    name: "Gelica S.",
    rating: 5,
    review:
      "I’m very satisfied with the service I received and truly grateful for their help. I had received a ticket related to an accident, and I appreciate the way they handled it.",
  },
];

export default function JDTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  testimonials = defaultTestimonials,
}: JDTestimonialsSectionProps) {
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

        {/* 3 REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
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
                  —{t.name}
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

