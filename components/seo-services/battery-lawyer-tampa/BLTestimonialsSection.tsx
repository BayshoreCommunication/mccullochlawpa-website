"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export interface BLTestimonialsSectionProps {
  title?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "dawn-t",
    name: "Dawn T.",
    rating: 5,
    review:
      "Very professional and informative on the outcome and the steps needed to be taken for my case. They were able to dismiss my ticket and I got no points and to me that’s well worth the money and I would recommend them to anyone. Thank you very much!",
  },
  {
    id: "gelica-s",
    name: "Gelica S.",
    rating: 5,
    review:
      "Honestly very satisfied with the services accomplished. And very grateful to. Had a ticket written down for a accident that I was involved in.And they were able to dismiss my ticket. Which I’m very happy with outstanding service.",
  },
  {
    id: "erica-t",
    name: "Erica T.",
    rating: 5,
    review:
      "This was the absolute best experience I have had under unfortunate circumstances. Drew is the best at what he does and he is very personable. He lead me through the process and the outcome was far greater than I anticipated. I would recommend Drew to anyone in need of his expertise.",
  },
];

export default function BLTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  testimonials = defaultTestimonials,
}: BLTestimonialsSectionProps) {
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

        {/* REVIEWS GRID */}
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

