"use client";

import React, { useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaBalanceScale,
  FaShieldAlt,
  FaUsers,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface DVTestimonialsSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  items?: TestimonialItem[];
}

const defaultTestimonialItems: TestimonialItem[] = [
  {
    id: "tracy-g",
    name: "Tracy G.",
    rating: 5,
    text: "If you are looking for an attorney who truly cares about you and the outcome of your case, than you need to hire Attorney Drew McCulloch. He works incredibly hard for you and makes sure you feel comfortable and prepared for your case. I highly recommend Mr. McCulloch to anyone in need of a criminal defense attorney. He really is a 5 star attorney.",
  },
  {
    id: "erica-t",
    name: "Erica T.",
    rating: 5,
    text: "This was the absolute best experience I have had under unfortunate circumstances. Drew is the best at what he does and he is very personable. He lead me through the process and the outcome was far greater than recticipated. I would recommend Drew to anyone in need of his expertise.",
  },
  {
    id: "damien-s",
    name: "Damien S.",
    rating: 5,
    text: "Fair, frank, honest and forthright. They under promised and far over delivered. The communication was professional and simple. There was never a moment I didn't know where I stood or where the case was. My traffic violation was completely dismissed two months after I agreed to have them represent me as I contested my citation. The support staff, administrative assistants and clerks I interacted with were all of the highest class and integrity. I enthusiastically recommend them to anyone seeking legal assistance as the full scope of my interaction was with fantastic individuals that we're all part of a high performing and highly professional/proficient legal team.",
  },
  {
    id: "angela",
    name: "Angela",
    rating: 5,
    text: "While I was ignorant of the criminal process, Drew guided me thoroughly through the entire DUI process making sure that I was fully aware of all my options. He took all of my wishes into consideration as well. I am completely satisfied with the outcome and feel as if I came out of the process 'on top'! Drew is highly recommended and trusted by me! 'Charges dismissed' and I feel as if I came out with a new friend as well! #winwin",
  },
];

export default function DVTestimonialsSection({
  title = "What Clients Say About McCulloch Law",
  highlightedText = "About McCulloch Law",
  subTitle = "Real stories from real clients. Proven results you can trust.",
  items = defaultTestimonialItems,
}: DVTestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* ==================================================== */}
        {/* HEADER SECTION WITH TITLE & SHIELD EMBLEM            */}
        {/* ==================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title.split(highlightedText)[0]}
            <span className="text-primary">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </h2>

          {/* Shield Emblem Divider */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        {/* ==================================================== */}
        {/* TESTIMONIAL CARDS CONTAINER & CAROUSEL NAV BUTTONS   */}
        {/* ==================================================== */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12">
          
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#081524] text-white flex items-center justify-center shadow-lg hover:bg-primary hover:text-slate-950 transition-all z-10"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer h-full"
              >
                {/* Top Subtle Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Row: Quote Mark + Avatar Icon */}
                <div className="w-full flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-primary opacity-80">
                    “
                  </span>
                  {/* Avatar Circle Badge */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-slate-800 shadow-md group-hover:scale-105 transition-transform">
                    <FaUser className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="w-6" /> {/* Placeholder spacer */}
                </div>

                {/* Client Name */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.text}
                </p>

                {/* Bottom Gold Line */}
                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/60 rounded-full mt-4 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#081524] text-white flex items-center justify-center shadow-lg hover:bg-primary hover:text-slate-950 transition-all z-10"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#081524] w-6"
                  : "bg-slate-300 hover:bg-primary"
              }`}
            />
          ))}
        </div>

        {/* ==================================================== */}
        {/* BOTTOM FEATURE BAR                                   */}
        {/* ==================================================== */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Section (4 cols) */}
            <div className="md:col-span-4 flex items-center gap-4 border-b md:border-b-0 md:border-r border-slate-200/80 pb-4 md:pb-0 pr-0 md:pr-4">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-sm">
                <FaBalanceScale className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 leading-tight">
                  Proven Results.
                </span>
                <span className="text-sm font-bold text-primary">
                  Trusted Representation.
                </span>
              </div>
            </div>

            {/* Middle Section (4 cols) */}
            <div className="md:col-span-4 flex items-center gap-4 border-b md:border-b-0 md:border-r border-slate-200/80 pb-4 md:pb-0 px-0 md:px-4">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                <FaUsers className="w-5 h-5 text-slate-700" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-snug font-sans">
                Thousands of clients across Tampa trust McCulloch Law to protect their rights and their future.
              </p>
            </div>

            {/* Right Section / Pill Button (4 cols) */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <a
                href="tel:8134442817"
                className="w-full bg-[#081524] text-white hover:bg-primary hover:text-slate-950 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-primary/50 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <IoIosCall className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col text-left flex-grow">
                  <span className="text-sm sm:text-base font-bold text-white leading-tight group-hover:text-slate-950 transition-colors">
                    Get a Free Consultation
                  </span>
                  <span className="text-xs text-slate-300 font-medium group-hover:text-slate-900 transition-colors">
                    Confidential. Experienced. Here for You.
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
