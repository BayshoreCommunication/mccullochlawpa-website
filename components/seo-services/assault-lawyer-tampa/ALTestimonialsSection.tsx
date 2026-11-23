"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  name: string;
  stars: number;
  review: string;
}

export interface ALTestimonialsSectionProps {
  title?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Michael M.",
    stars: 5,
    review:
      "Drew is very professional and acts intentionally. He provides realistic expectations and follows through on his responsibilities. Recently we hired Drew for a case dealing with both a state criminal defense case, as well as some issues with the Department of Health. Through Drew, I was able to achieve best case scenario and a significantly reduced sentence compared to similar offenders. I fully recommend and endorse Drew, he's a class act.",
  },
  {
    id: "testimonial-2",
    name: "Brandon",
    stars: 5,
    review:
      "Micheal McCullough was the best lawyer I've had hands down and I've had a few. Even from the beginning of my case, it was easy to tell he was going to be better then other lawyers I have dealt with. He always made plenty of time for me, making sure I understood everything fully and that I had any and all information I needed or wanted. It was also very clear he was interested in the best possible outcome for me and not just the quick plea deal. In the end, he got me a felony dropped to a misdemeanor with one day time served. Which all things considered was amazing and I didn't think would have been even possible. I will use this lawyer every time, let's hope that's not necessary. At any rate, if you need a competent lawyer who's willing to go the extra mile and spend the time you deserve on your case. he is your man.",
  },
  {
    id: "testimonial-3",
    name: "Haley",
    stars: 5,
    review:
      "Drew is extremely personable, persistent, resilient and reliable. I have never had to speak with no one but him directly at all hours, day or night on his personal cellphone. He has been handling a very unique high conflict family case for me. It's a highly unique case involving severe mental illness on my behalf. He has never judged or given up on me. He has truly spent the time to listen to my special mental disability and has pushed a very compassionate yet aggressive approach to fight on my behalf. Absolutely highly recommended.",
  },
  {
    id: "testimonial-4",
    name: "Tracy C",
    stars: 5,
    review:
      "I called and made arrangements for a lawyer to represent me for a traffic ticket. I did not have to appear in court and they got all the charges dismissed. I was very happy with their service and the representative I spoke with on the phone was very helpful. I would highly recommend this law office to anyone in need of legal representation.",
  },
];

export default function ALTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  testimonials = defaultTestimonials,
}: ALTestimonialsSectionProps) {
  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaStar className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0B1B2D] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-2xl relative group"
            >
              <div className="absolute top-6 right-6 text-slate-800 group-hover:text-primary/10 transition-colors">
                <FaQuoteLeft className="w-10 h-10" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between relative z-10">
                <span className="font-bold text-white text-base">
                  {item.name}
                </span>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
