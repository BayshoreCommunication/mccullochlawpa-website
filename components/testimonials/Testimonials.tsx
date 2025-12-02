"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const testimonials = [
  {
    name: "Julian V.",
    time: "4 months ago",
    review:
      "“I recently had the pleasure working with McCulloch Law P.A. Drew demonstrated a deep understanding of the law providing comprehensive advice on legal matters. The firm was patient and dedicated to addressing all my concerns, making the legal process smooth and stress-free.”",
    rating: 5,
    image: "",
  },
  {
    name: "Erica T.",
    time: "4 weeks ago",
    review:
      "“This was the absolute best experience I have had under unfortunate circumstances. Drew is the best at what he does and he is very personable. He lead me through the process and the outcome was far greater than I anticipated. I would recommend Drew to anyone in need of his expertise.”",
    rating: 5,
    image: "",
  },
  {
    name: "Alicia Perez",
    time: "3 months ago",
    review:
      "Words can’t even express how grateful I am. The whole staff is amazing! I don’t think anyone can really understand how much peace I feel. The Wellness Center gave me so much more reason to wake up everyday and put my best self forward. You are all hero’s in my personal book. Thank you for all you do.",
    rating: 5,
    image: "",
  },
  {
    name: "JAY S",
    time: "a month ago",
    review:
      "I love everyone there! They're so kind and always willing to help you matter what.  They REALLY care about me getting better.  If you have pain, give them a call ASAP. The biggest mistake you could tell yourself, is it'll go away. They have really great hours that meet the needs before and after work. Don't wait give them a call.",
    rating: 5,
    image: "",
  },
  {
    name: "Paul Martinez",
    time: "4 months ago",
    review:
      "Definitely five stars, the staff becomes family from the moment you walk in the door. from the doctors to the assistance, it is a wonderful experience. I come in with pain and leave with less pain and happy to visit this location. Would recommend it to everyone I know.",
    rating: 5,
    image: "",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-8 py-8 md:py-16 ">
      <div className="max-w-[1640px] mx-auto ">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <p className="text-base font-normal text-[#666666] mb-4">
                Testimonials
              </p>
            </Reveal>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Our Clients Love Us We’ve Earned{" "}
                <span className="text-[#E72020]">5 Out of 5 Stars</span>
              </h2>
            </Reveal>
          </Stagger>
        </div>

        {/* Testimonials Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1} // default for mobile
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
          loop={true}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16 mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Reveal y={16} opacityFrom={0}>
                <div className="bg-[#373333] rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100 h-full flex flex-col">
                  {/* Review */}
                  <p className="text-sm text-white leading-relaxed">
                    {testimonial.review}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-white/80">
                        {testimonial.time}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mt-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-orange-400 text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
