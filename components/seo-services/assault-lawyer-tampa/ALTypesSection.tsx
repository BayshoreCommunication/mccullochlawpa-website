"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaGavel,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaUserShield,
  FaExclamationTriangle,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface CaseTypeItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface ALTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "simple-assault",
    title: "Simple Assault",
    image: "/images/seo-services/assault-lawyer-tampa/simple-assault.webp",
    imageAlt: "Simple Assault Defense under Florida Statutes 784.011 in Tampa",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.011 Generally considers simple assault to be a 2nd degree misdemeanor. In order to prove the crime, the prosecution must show the defendant made an unlawful threat. Also with the apparent means and capacity to commit the threat, with a reasonable fear by the victim that the threat would be carried out.",
    linkHref: "/contact",
  },
  {
    id: "aggravated-assault",
    title: "Aggravated Assault",
    image: "/images/seo-services/assault-lawyer-tampa/aggravated-assault.webp",
    imageAlt: "Aggravated Assault Defense Florida Statutes 784.021 third degree felony Tampa",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.021, an aggravated assault is a third degree felony. The law refers to an assault with a deadly weapon without the intent to kill or an assault with an intent to commit a felony.",
    linkHref: "/contact",
  },
  {
    id: "assault-special-circumstances",
    title: "Assault Under Special Circumstances",
    image: "/images/seo-services/assault-lawyer-tampa/assault-special-circumstances.webp",
    imageAlt: "Assault under special circumstances against protected persons in Florida",
    badgeIcon: <FaUserShield className="w-5 h-5 text-primary" />,
    description:
      "Florida specifies certain types of assaults on protected class members, including law enforcement officers, some public officials and certain employees of the government. These include factors which could alter the crime classification or the sentence.",
    linkHref: "/contact",
  },
  {
    id: "assault-connected-other-conduct",
    title: "Assault Allegations Connected to Other Conduct",
    image: "/images/seo-services/assault-lawyer-tampa/assault-connected-other-conduct.webp",
    imageAlt: "Assault allegations connected to other alleged conduct and felony charges in Tampa",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "A prosecutor may charge aggravated assault if the state claims a defendant threatened harm in the hope of committing another felony. It is at the prosecutor's discretion to include alleged intent in the charge.",
    linkHref: "/contact",
  },
];

export default function ALTypesSection({
  title = "Types of Assault Charges We Defend",
  description = "Florida recognizes aggravated assault as a different offense from simple assault. There are specific factors that may determine whether the charge should be different or whether the sentence should be more severe.",
  caseItems = defaultCaseItems,
}: ALTypesSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full bg-[#081524] py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
              {title}
            </h2>
            <div className="w-16 h-[3px] bg-primary rounded-full mb-4" />
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* SWIPER CONTROLS */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              ref={prevRef}
              aria-label="Previous slide"
              className="w-11 h-11 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-primary hover:border-primary text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-primary hover:border-primary text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SWIPER CAROUSEL */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary !w-8",
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-14"
          >
            {caseItems.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-[#0c1a29] rounded-3xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col h-full group hover:shadow-2xl">
                  {/* CARD IMAGE HEADER */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a29] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#081524]/80 backdrop-blur-md border border-primary/40 shadow-lg">
                      {item.badgeIcon}
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-800">
                      <Link
                        href={item.linkHref || "/contact"}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary group-hover:text-[#dbb462] transition-colors"
                      >
                        <span>Discuss Case Defense</span>
                        <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
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

