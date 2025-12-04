"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Nicholson Gall",
    caseType: "Old Case",
    image: "/images/testimonial/image1.png",
    review:
      "“Drew is attentive, transparent, and highly effective—he delivered excellent results for my case. I highly recommend McCulloch Law P.A.”",
  },
  {
    name: "Erica T.",
    caseType: "Old Case",
    image: "/images/testimonial/image2.png",
    review:
      "“Drew is attentive, transparent, and highly effective—he delivered excellent results for my case. I highly recommend McCulloch Law P.A.”",
  },
  {
    name: "Erica T.",
    caseType: "Old Case",
    image: "/images/testimonial/image1.png",
    review:
      "“Drew is attentive, transparent, and highly effective—he delivered excellent results for my case. I highly recommend McCulloch Law P.A.”",
  },
  {
    name: "Erica T.",
    caseType: "Old Case",
    image: "/images/testimonial/image2.png",
    review:
      "“Drew is attentive, transparent, and highly effective—he delivered excellent results for my case. I highly recommend McCulloch Law P.A.”",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-white">
      <div className="max-w-[1640px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Clients Love Us
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-2">
            We’ve Earned <span className="text-red-600">5 Out of 5 Stars</span>
          </h3>
        </div>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full flex flex-col items-center md:items-start">
                {/* IMAGE */}
                <div className="relative w-full flex justify-center">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={500}
                    height={400}
                    className="object-contain w-[300px] md:w-[400px]"
                  />
                </div>

                {/* FLOATING REVIEW BOX (DESKTOP FLOAT / MOBILE BELOW) */}
                <div
                  className="
                    bg-[#2D2D2D] text-white p-5 rounded-md shadow-lg 
                    w-full md:w-[380px]
                    mt-4 
                    md:absolute md:bottom-10 md:left-[45%] lg:left-[50%] xl:left-[52%]
                  "
                >
                  <p className="text-sm leading-relaxed">{t.review}</p>

                  <div className="flex items-center text-yellow-400 text-lg mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          <button className="prev-btn w-10 h-10 flex items-center justify-center rounded-md bg-white shadow hover:bg-gray-100 transition">
            &#10094;
          </button>

          <button className="next-btn w-10 h-10 flex items-center justify-center rounded-md bg-white shadow hover:bg-gray-100 transition">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
