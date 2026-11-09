"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaHandRock,
  FaHome,
  FaCar,
  FaBalanceScale,
  FaStore,
} from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface RobberyTypeItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface RDTypesSectionProps {
  title?: string;
  description?: string;
  caseItems?: RobberyTypeItem[];
}

const defaultCaseItems: RobberyTypeItem[] = [
  {
    id: "strong-arm-robbery",
    title: "1. Strong Arm Robbery",
    image: "/images/seo-services/robbery-defense-attorney-tampa/strong-arm-robbery.webp",
    imageAlt: "Strong Arm Robbery Defense Lawyer in Tampa Florida",
    badgeIcon: <FaHandRock className="w-5 h-5 text-primary" />,
    description:
      "Strong arm robbery generally describes a robbery involving physical force, intimidation or threats without an allegation of a firearm or other weapon. Charge reliance on claims of pushing, grabbing, striking, restraining or threatening a person during a property taking. A visible injury does not determine whether the State can establish robbery. Witness testimony, surveillance footage, medical records and the sequence of events may all affect the case.",
    linkHref: "/contact",
  },
  {
    id: "armed-robbery",
    title: "2. Armed Robbery",
    image: "/images/seo-services/robbery-defense-attorney-tampa/armed-robbery.webp",
    imageAlt: "Armed Robbery Defense Lawyer Florida Statutes 812.13 Tampa",
    badgeIcon: <GiPistolGun className="w-5 h-5 text-primary" />,
    description:
      "Armed robbery involves an allegation of a weapon, firearm or deadly weapon during the property taking. Florida Statutes § 812.13 distinguish between a firearm or deadly weapon and another weapon. The type of object and its alleged use can affect the charge classification. Police do not always recover the alleged weapon. However, the State must establish the relevant weapon allegation through admissible evidence.",
    linkHref: "/contact",
  },
  {
    id: "robbery-sudden-snatching",
    title: "3. Robbery by Sudden Snatching",
    image: "/images/seo-services/robbery-defense-attorney-tampa/robbery-sudden-snatching.webp",
    imageAlt: "Robbery by Sudden Snatching Defense Attorney Tampa",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      'Florida Statutes as when "a person takes money or property of any other person from the person or in the presence of such other person when in the course of such taking such other person is actually or apparently in fear of being the victim of a robbery and the defendant has no intent to permanently deprive such person of such property." This type of theft can involve the taking of property if the person thought or was told by the victim that a person snatched the property or money.',
    linkHref: "/contact",
  },
  {
    id: "home-invasion-robbery",
    title: "4. Home Invasion Robbery",
    image: "/images/seo-services/robbery-defense-attorney-tampa/home-invasion-robbery.webp",
    imageAlt: "Home Invasion Robbery Defense Florida Statutes 812.135 Tampa",
    badgeIcon: <FaHome className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 812.135 define home invasion robbery as entering a dwelling with the intent to commit robbery and then committing robbery against an occupant. The allegation involves both entry into a dwelling and a property taking through the legally required force, violence, assault or fear.",
    linkHref: "/contact",
  },
  {
    id: "carjacking",
    title: "5. Carjacking",
    image: "/images/seo-services/robbery-defense-attorney-tampa/carjacking.webp",
    imageAlt: "Carjacking Defense Attorney Florida Statutes 812.133 Tampa",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 812.133 define carjacking as taking a motor vehicle from another person's possession or custody through force, violence, assault or fear, with the intent to deprive the owner temporarily or permanently. Carjacking involves a motor vehicle.",
    linkHref: "/contact",
  },
  {
    id: "federal-level-robbery",
    title: "6. Federal Level Robbery",
    image: "/images/seo-services/robbery-defense-attorney-tampa/federal-level-robbery.webp",
    imageAlt: "Federal Level Robbery Hobbs Act Bank Robbery Defense Tampa",
    badgeIcon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    description:
      "Some acts of robbery are prosecuted under federal criminal law. In some cases, the conduct alleged may be the basis for federal prosecution because the crime charged is made illegal by a federal statute. Under the Hobbs Act, 18 U.S.C. § 1951, robbery or attempted robbery affecting interstate commerce are subject to federal prosecution. Federal bank robbery is prosecuted under the federal bank robbery statutes set out at 18 U.S.C. § 2113. Federal investigations are conducted by the Federal Bureau of Investigation, federal prosecutors or others. The case would be heard in the United States District Court, Middle District of Florida.",
    linkHref: "/contact",
  },
  {
    id: "resisting-a-merchant",
    title: "7. Resisting a Merchant",
    image: "/images/seo-services/robbery-defense-attorney-tampa/resisting-a-merchant.webp",
    imageAlt: "Resisting a Merchant Defense Florida Statutes 812.015 Tampa",
    badgeIcon: <FaStore className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 812.015(6) address resisting a merchant during efforts to recover property after an alleged theft. The statute covers resistance to reasonable efforts by a merchant, merchant's employee, law enforcement officer or another authorized person. For example, a store employee may attempt to recover merchandise after an alleged retail theft. An argument, physical resistance or refusal to cooperate during the recovery attempt may lead to an additional allegation under the statute.",
    linkHref: "/contact",
  },
];

export default function RDTypesSection({
  title = "Types of Robbery Cases We Defend",
  description = "Florida law recognizes several robbery offenses and related allegations involving property, vehicles, weapons and resistance during a theft investigation.",
  caseItems = defaultCaseItems,
}: RDTypesSectionProps) {
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
              1280: { slidesPerView: 3.5, spaceBetween: 24 },
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
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

