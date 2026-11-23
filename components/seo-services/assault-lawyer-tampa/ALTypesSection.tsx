"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaShieldAlt,
  FaGavel,
  FaChevronLeft,
  FaChevronRight,
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
  imageTitle: string;
  imageDescription: string;
  badgeIcon: React.ReactNode;
  description: string;
}

export interface ALTypesSectionProps {
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "simple-assault",
    title: "Simple Assault",
    image:
      "/images/seo-services/assault-lawyer-tampa/florida-simple-assault-defense-lawyer-tampa-review.webp",
    imageAlt:
      "Defense against Florida simple assault second degree misdemeanor charges under statute 784 011 in Tampa",
    imageTitle: "Florida Simple Assault Defense Lawyer Tampa Case Review",
    imageDescription:
      "Comprehensive defense for misdemeanor simple assault allegations in Tampa, examining unlawful threats and apparent ability under Florida Statute 784.011.",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.011 Generally considers simple assault to be a 2nd degree misdemeanor. In order to prove the crime, the prosecution must show the defendant made an unlawful threat. Also with the apparent means and capacity to commit the threat, with a reasonable fear by the victim that the threat would be carried out.",
  },
  {
    id: "aggravated-assault",
    title: "Aggravated Assault",
    image:
      "/images/seo-services/assault-lawyer-tampa/aggravated-assault-deadly-weapon-defense-in-tampa.webp",
    imageAlt:
      "Aggravated assault defense representation for third degree felony allegations under Florida law in Tampa",
    imageTitle: "Aggravated Assault Deadly Weapon Defense Lawyer Tampa",
    imageDescription:
      "Defending against third-degree felony aggravated assault charges involving deadly weapons or intent to commit a felony in Tampa and Hillsborough County.",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.021, an aggravated assault is a third degree felony. The law refers to an assault with a deadly weapon without the intent to kill or an assault with an intent to commit a felony.",
  },
  {
    id: "assault-special-circumstances",
    title: "Assault Under Special Circumstances",
    image:
      "/images/seo-services/assault-lawyer-tampa/assault-on-law-enforcement-officer-defense-tampa.webp",
    imageAlt:
      "Legal defense for assault charges under special circumstances including public officials in Tampa Florida",
    imageTitle: "Assault Under Special Circumstances Defense Tampa Law",
    imageDescription:
      "Strategic defense against enhanced assault charges involving law enforcement officers, emergency medical personnel, and protected public officials in Florida.",
    badgeIcon: <FaUserShield className="w-5 h-5 text-primary" />,
    description:
      "Florida specifies certain types of assaults on protected class members, including law enforcement officers, some public officials and certain employees of the government. These include factors which could alter the crime classification or the sentence.",
  },
  {
    id: "assault-connected-other-conduct",
    title: "Assault Allegations Connected to Other Conduct",
    image:
      "/images/seo-services/assault-lawyer-tampa/assault-allegations-with-intent-to-commit-felonies.webp",
    imageAlt:
      "Legal defense against assault charges linked to alleged intent to commit other felony offenses in Tampa FL",
    imageTitle: "Assault Allegations Connected To Other Felony Charges",
    imageDescription:
      "Challenging prosecutors' claims of alleged intent to commit independent felonies in connection with assault charges in Tampa Hillsborough County courts.",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "A prosecutor may charge aggravated assault if the state claims a defendant threatened harm in the hope of committing another felony. It is at the prosecutor's discretion to include alleged intent in the charge.",
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
        <div className="relative">
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
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary !w-8 !rounded-full",
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!pb-14"
          >
            {caseItems.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-[#0B1B2D] rounded-3xl overflow-hidden border border-slate-800 h-full flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group">
                  
                  {/* IMAGE */}
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      title={item.imageTitle}
                      data-description={item.imageDescription}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2D] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#081524]/80 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary shadow-lg">
                      {item.badgeIcon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
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
