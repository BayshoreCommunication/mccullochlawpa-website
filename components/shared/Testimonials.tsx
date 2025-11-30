"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const testimonials = [
  {
    name: "Nicholas Nicol",
    time: "4 months ago",
    review:
      "Amazing service and great staff. Highly recommend for all who have back pain.",
    rating: 5,
    image: "",
  },
  {
    name: "N M",
    time: "4 weeks ago",
    review:
      "I always have the most amazing experience when I'm there. Everyone treats you like family here. They always care about your health and well-being and put your needs first. I highly recommend them!!",
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

const testimonialsTwo = [
  {
    name: "Krista Louttit",
    time: "4 months ago",
    review:
      "The staff were so helpful and welcoming. They made the process easy and explained everything clearly. They really know their stuff about GLP-1 medication. I'm so glad I found this place after being so skeptical of other places that offer this medication and Telehealth companies. Thanks guys",
    rating: 5,
    image: "",
  },
  {
    name: "Xarisalet PerezDeSilva",
    time: "4 months ago",
    review:
      "The team are so friendly make the atmosphere great and relaxing. The 30 minute of treatment make me feel comfortable and trust from the moment step in and with the work is performing.Thank you guys!!",
    rating: 5,
    image: "",
  },
  {
    name: "Paul Martinez",
    time: "4 months ago",
    review:
      "Dr.G is awesome, he listens to your concerns and designs a treatment plan that will work to get you back to normal and pain free.  The staff is very accommodating and friendly, great experience overall.",
    rating: 5,
    image: "",
  },
  {
    name: "Ashley Karpuch",
    time: "4 months ago",
    review:
      "The staff at Jachimek have been nothing but amazing and supportive through my weight loss journey. You feel supported and well guided throughout your whole process! Would highly recommend.",
    rating: 5,
    image: "",
  },
  {
    name: "Frances Paris",
    time: "3 weeks ago",
    review:
      "My first time visiting and it was the best decision that i made. Everyone was so nice and sweet. The dr answered all of my questions and I am excited.",
    rating: 5,
    image: "",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-gray-50">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
            </Reveal>
            <Reveal tag="p" y={12} opacityFrom={0.1}>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Our patients’ success stories speak for themselves. Read how
                personalized chiropractic care has helped them find relief,
                regain mobility, and improve their quality of life.
              </p>
            </Reveal>
            <Reveal y={10} opacityFrom={0}>
              <Link
                href="https://share.google/fr5fqwEAfsaCT7WNX"
                className="inline-block mt-4 text-primary font-medium hover:underline"
              >
                View all Google Reviews here
              </Link>
            </Reveal>
          </Stagger>
        </div>

        {/* First Swiper - Left to Right Marquee */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1} // 👈 default for mobile
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={6000}
          loop={true}
          allowTouchMove={false}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 1 }, // small screens (still 1)
            768: { slidesPerView: 2 }, // tablets
            1024: { slidesPerView: 3 }, // laptops
            1280: { slidesPerView: 3 }, // desktops
          }}
          className="pb-16 mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Reveal y={16} opacityFrom={0}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100 h-full flex flex-col">
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.time}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-orange-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {testimonial.review}
                  </p>
                </div>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper - Right to Left Marquee */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1} // 👈 default for mobile
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={6000}
          loop={true}
          allowTouchMove={false}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 1 }, // small screens (still 1)
            768: { slidesPerView: 2 }, // tablets
            1024: { slidesPerView: 3 }, // laptops
            1280: { slidesPerView: 3 }, // desktops
          }}
          className="pb-16 mb-8"
        >
          {testimonialsTwo.map((testimonial, index) => (
            <SwiperSlide key={`second-${index}`}>
              <Reveal y={16} opacityFrom={0}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100 h-full flex flex-col">
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.time}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-orange-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {testimonial.review}
                  </p>
                </div>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
