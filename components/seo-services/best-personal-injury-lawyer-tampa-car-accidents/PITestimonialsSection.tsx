"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface PITestimonialsSectionProps {
  title?: string;
  subTitle?: string;
  testimonials?: TestimonialItem[];
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

export default function PITestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  subTitle = "REAL REVIEWS FROM TAMPA CLIENTS",
  testimonials = defaultTestimonials,
}: PITestimonialsSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {subTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-[3px] bg-primary rounded-full my-3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-2 sm:px-8">
          
          <button
            ref={prevRef}
            aria-label="Previous Testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/80 border border-slate-700 text-white hover:bg-primary hover:text-slate-950 transition-all duration-300 flex items-center justify-center cursor-pointer -ml-2 sm:-ml-6 focus:outline-none"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <button
            ref={nextRef}
            aria-label="Next Testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/80 border border-slate-700 text-white hover:bg-primary hover:text-slate-950 transition-all duration-300 flex items-center justify-center cursor-pointer -mr-2 sm:-mr-6 focus:outline-none"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full pb-8"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="flex !h-auto">
                <div className="bg-[#0f2238] rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-xl flex flex-col justify-between w-full h-full relative group hover:border-primary/50 transition-all duration-300">
                  <FaQuoteLeft className="w-8 h-8 text-primary/30 mb-4" />

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6 flex-grow">
                    "{item.text}"
                  </p>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-wide">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-sans">Client Review</p>
                    </div>

                    <div className="flex items-center gap-1 text-primary">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}
