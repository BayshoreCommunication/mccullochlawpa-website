"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export interface TDUTestimonialsSectionProps {
  title?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "tracy-g",
    name: "Tracy G.",
    rating: 5,
    review:
      "If you are looking for an attorney who truly cares about you and the outcome of your case, than you need to hire Attorney Drew McCulloch. He works incredibly hard for you and makes sure you feel comfortable and prepared for your case. I highly recommend Mr. McCulloch to anyone in need of a criminal defense attorney. He really is a 5 star attorney.",
  },
  {
    id: "erica-t",
    name: "Erica T.",
    rating: 5,
    review:
      "This was the absolute best experience I have had under unfortunate circumstances. Drew is the best at what he does and he is very personable. He lead me through the process and the outcome was far greater than I anticipated. I would recommend Drew to anyone in need of his expertise",
  },
  {
    id: "damien-s",
    name: "Damien S.",
    rating: 5,
    review:
      "Fair, frank, honest and forthright. They under promised and far over delivered. The communication was professional and simple. There was never a moment I didn’t know where I stood or where the case was. My traffic violation was completely dismissed two months after I agreed to have them represent me as I contested my citation. The support staff, administrative assistants and clerks I interacted with were all of the highest class and integrity. I enthusiastically recommend them to anyone seeking legal assistance as the full scope of my interaction was with fantastic individuals that we’re all part of a high performing and highly professional/proficient legal team.",
  },
  {
    id: "angela",
    name: "Angela",
    rating: 5,
    review:
      "While I was ignorant of the criminal process, Drew guided me thoroughly through the entire DUI process making sure that I was fully aware of all my options. He took all of my wishes into consideration as well. I am completely satisfied with the outcome and feel as if I came out of the process “on top”! Drew is highly recommended and trusted by me! “Charges dismissed” and I feel as if I came out with a new friend as well! #winwin",
  },
];

export default function TDUTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  testimonials = defaultTestimonials,
}: TDUTestimonialsSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaQuoteLeft className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-slate-900 text-lg sm:text-xl">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="w-10 h-[2px] bg-primary/60 rounded-full mb-4" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans italic">
                  "{item.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
