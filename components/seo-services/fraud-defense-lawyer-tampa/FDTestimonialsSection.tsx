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

export interface FDTestimonialsSectionProps {
  title?: string;
  subTitle?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "michael",
    name: "Michael",
    rating: 5,
    text: "Drew is professional and acts with actual intention behind every decision. He gave me realistic expectations from the start and followed through on each one. My case involved both criminal charges and a licensing issue, and he handled both with skill. I fully recommend him to anyone who needs a serious defense.",
  },
  {
    id: "haley",
    name: "Haley",
    rating: 5,
    text: "McCulloch Law never judged me and always treated my situation with patience and respect. Their approach balanced compassion with an aggressive defense strategy. I recommend them without hesitation.",
  },
  {
    id: "angela",
    name: "Angela",
    rating: 5,
    text: "I knew very little about the criminal process before my case began. He walked me through every option and made sure I understood each decision along the way. My charges were ultimately dismissed, and I came away feeling like I had gained a true ally.",
  },
];

export default function FDTestimonialsSection({
  title = "What Clients Say About McCulloch Law's Criminal Defense Representation",
  subTitle = "REAL REVIEWS FROM TAMPA DEFENSE CLIENTS",
  testimonials = defaultTestimonials,
}: FDTestimonialsSectionProps) {
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
