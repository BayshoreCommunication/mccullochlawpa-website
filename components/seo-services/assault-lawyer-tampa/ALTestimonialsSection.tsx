"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export interface ALTestimonialsSectionProps {
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
    id: "brandon",
    name: "Brandon",
    rating: 5,
    review:
      "Micheal McCullough was the best lawyer I’ve had hands down and I’ve had a few. Even from the beginning of my case, it was easy to tell he was going to be better then other lawyers I have dealt with. He always made plenty of time for me, making sure I understood everything fully and that I had any and all information I needed or wanted. It was also very clear he was interested in the best possible outcome for me and not just the quick plea deal. In the end, he got me a felony dropped to a misdemeanor with one day time served. Which all things considered was amazing and I didn’t think would have been even possible. I will use this lawyer every time, let’s hope that’s not necessary. At any rate, if you need a competent lawyer who’s willing to go the extra mile and spend the time you deserve on your case. he is your man.",
  },
  {
    id: "haley",
    name: "Haley",
    rating: 5,
    review:
      "Drew is extremely personable, persistent, resilient and reliable. I have never had to speak with no one but him directly at all hours, day or night on his personal cellphone. He has been handling a very unique high conflict family case for me. It’s a highly unique case involving severe mental illness on my behalf. He has never judged or given up on me. He has truly spent the time to listen to my special mental disability and has pushed a very compassionate yet aggressive approach to fight on my behalf. Absolutely highly recommended.",
  },
  {
    id: "tracy-c",
    name: "Tracy C",
    rating: 5,
    review:
      "I called and made arrangements for a lawyer to represent me for a traffic ticket. I did not have to appear in court and they got all the charges dismissed. I was very happy with their service and the representative I spoke with on the phone was very helpful. I would highly recommend this law office to anyone in need of legal representation.",
  },
];

export default function ALTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  testimonials = defaultTestimonials,
}: ALTestimonialsSectionProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
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

