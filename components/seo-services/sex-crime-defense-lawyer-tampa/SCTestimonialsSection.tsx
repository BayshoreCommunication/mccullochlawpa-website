"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface SCTestimonialsSectionProps {
  title?: string;
  subTitle?: string;
  items?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "michael-m",
    name: "Michael M.",
    rating: 5,
    text: "Drew is very professional and acts intentionally. He provides realistic expectations and follows through on his responsibilities. Recently we hired Drew for a case dealing with both a state criminal defense case, as well as some issues with the Department of Health. Through Drew, I was able to achieve best case scenario, and a significantly reduced sentence compared to similar offenders. I fully recommend and endorse Drew, he’s a class act.",
  },
  {
    id: "brandon",
    name: "Brandon",
    rating: 5,
    text: "Micheal McCullough was the best lawyer I’ve had hands down, and I’ve had a few. Even from the beginning of my case, it was easy to tell he was going to be better then other lawyers I have dealt with. He always made plenty of time for me, making sure I understood everything fully and that I had any and all information I needed or wanted. It was also very clear he was interested in the best possible outcome for me, and not just the quick plea deal. In the end, he got me a felony dropped to a misdemeanor with one day time served. Which all things considered was amazing and I didn’t think would have been even possible. I will use this lawyer every time, let’s hope that’s not necessary. At any rate, if you need a competent lawyer who’s willing to go the extra mile and spend the time you deserve on your case. he is your man.",
  },
  {
    id: "damien-s",
    name: "Damien S.",
    rating: 5,
    text: "Fair, frank, honest and forthright. They under promised and far over delivered. The communication was professional and simple. There was never a moment I didn’t know where I stood or where the case was. My traffic violation was completely dismissed two months after I agreed to have them represent me as I contested my citation. The support staff, administrative assistants and clerks I interacted with were all of the highest class and integrity. I enthusiastically recommend them to anyone seeking legal assistance as the full scope of my interaction was with fantastic individuals tha we’re all part of a high performing and highly professional/proficient legal team.",
  },
];

export default function SCTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  subTitle = "Real reviews from clients we have defended in Tampa, FL.",
  items = defaultTestimonials,
}: SCTestimonialsSectionProps) {
  return (
    <section className="w-full bg-[#081524] text-white py-12 md:py-20 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 text-primary" />
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="w-16 h-[2px] bg-primary rounded-full mb-3" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0e2238] rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all duration-300 relative group"
            >
              <FaQuoteLeft className="w-8 h-8 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-primary" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-sm font-bold text-white tracking-wide">
                  {item.name}
                </span>
                <span className="text-xs text-primary font-semibold">
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
