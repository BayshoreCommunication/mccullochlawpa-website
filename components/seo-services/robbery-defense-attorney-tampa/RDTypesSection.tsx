"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
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
  imageTitle: string;
  imageDescription: string;
  badgeIcon: React.ReactNode;
  description: string;
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
    image:
      "/images/seo-services/robbery-defense-attorney-tampa/florida-strong-arm-robbery-defense-lawyer-tampa-fl.webp",
    imageAlt:
      "Florida strong-arm robbery defense lawyer evaluating force and intimidation claims in Tampa criminal court",
    imageTitle: "Florida Strong Arm Robbery Defense Lawyer Tampa Florida",
    imageDescription:
      "Experienced Tampa robbery defense lawyer examining claims of pushing, striking, and physical force in second-degree felony robbery allegations across Florida.",
    badgeIcon: <FaHandRock className="w-5 h-5 text-primary" />,
    description:
      "Strong arm robbery generally describes a robbery involving physical force, intimidation or threats without an allegation of a firearm or other weapon. Charge reliance on claims of pushing, grabbing, striking, restraining or threatening a person during a property taking. A visible injury does not determine whether the State can establish robbery. Witness testimony, surveillance footage, medical records and the sequence of events may all affect the case.",
  },
  {
    id: "armed-robbery",
    title: "2. Armed Robbery",
    image:
      "/images/seo-services/robbery-defense-attorney-tampa/florida-armed-robbery-defense-attorney-tampa-court.webp",
    imageAlt:
      "Florida armed robbery defense attorney examining deadly weapon claims and firearm allegations in Tampa court",
    imageTitle: "Florida Armed Robbery Defense Attorney Tampa Court Law",
    imageDescription:
      "Defense attorney challenging firearm allegations, 10-20-Life mandatory prison penalties, and weapon evidence in Tampa armed robbery felony cases.",
    badgeIcon: <GiPistolGun className="w-5 h-5 text-primary" />,
    description:
      "Armed robbery involves an allegation of a weapon, firearm or deadly weapon during the property taking. Florida Statutes § 812.13 distinguish between a firearm or deadly weapon and another weapon. The type of object and its alleged use can affect the charge classification. Police do not always recover the alleged weapon. However, the State must establish the relevant weapon allegation through admissible evidence.",
  },
  {
    id: "robbery-sudden-snatching",
    title: "3. Robbery by Sudden Snatching",
    image:
      "/images/seo-services/robbery-defense-attorney-tampa/robbery-by-sudden-snatching-defense-lawyer-in-tampa.webp",
    imageAlt:
      "Defense lawyer representing clients accused of robbery by sudden snatching under Florida law in Tampa",
    imageTitle: "Robbery By Sudden Snatching Defense Lawyer in Tampa FL",
    imageDescription:
      "Defending robbery by sudden snatching charges under Florida Statutes, assessing victim fear, physical resistance, and evidence in Tampa criminal proceedings.",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      'Florida Statutes as when "a person takes money or property of any other person from the person or in the presence of such other person when in the course of such taking such other person is actually or apparently in fear of being the victim of a robbery and the defendant has no intent to permanently deprive such person of such property." This type of theft can involve the taking of property if the person thought or was told by the victim that a person snatched the property or money.',
  },
  {
    id: "home-invasion-robbery",
    title: "4. Home Invasion Robbery",
    image:
      "/images/seo-services/robbery-defense-attorney-tampa/florida-home-invasion-robbery-defense-attorney-law.webp",
    imageAlt:
      "Home invasion robbery defense attorney analyzing dwelling entry and force allegations in Tampa Florida",
    imageTitle: "Florida Home Invasion Robbery Defense Attorney Law Firm",
    imageDescription:
      "Challenging first-degree felony home invasion robbery accusations, entering occupied dwellings, and identification evidence in Hillsborough County courts.",
    badgeIcon: <FaHome className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 812.135 define home invasion robbery as entering a dwelling with the intent to commit robbery and then committing robbery against an occupant. The allegation involves both entry into a dwelling and a property taking through the legally required force, violence, assault or fear.",
  },
  {
    id: "carjacking",
    title: "5. Carjacking",
    image:
      "/images/seo-services/robbery-defense-attorney-tampa/florida-carjacking-felony-defense-attorney-in-tampa.webp",
    imageAlt:
      "Florida carjacking felony defense attorney challenging motor vehicle robbery and firearm claims in Tampa",
    imageTitle: "Florida Carjacking Felony Defense Attorney in Tampa FL",
    imageDescription:
      "Defending felony carjacking allegations in Tampa Florida, examining vehicle custody, alleged physical force, witness reliability, and statutory elements.",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 812.133 define carjacking as taking a motor vehicle from another person's possession or custody through force, violence, assault or fear, with the intent to deprive the owner temporarily or permanently. Carjacking involves a motor vehicle.",
  },
  {
    id: "federal-level-robbery",
    title: "6. Federal Level Robbery",
    image:
      "/images/seo-services/robbery-defense-attorney-tampa/federal-level-robbery-criminal-defense-lawyer-tampa.webp",
    imageAlt:
      "Federal level robbery criminal defense lawyer defending Hobbs Act and bank robbery allegations in Tampa",
    imageTitle: "Federal Level Robbery Criminal Defense Lawyer Tampa FL",
    imageDescription:
      "Representing clients facing federal robbery allegations, Hobbs Act charges, and interstate commerce claims in Tampa and Middle District of Florida courts.",
    badgeIcon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    description:
      "Some acts of robbery are prosecuted under federal criminal law. In some cases, the conduct alleged may be the basis for federal prosecution because the crime charged is made illegal by a federal statute. Under the Hobbs Act, 18 U.S.C. § 1951, robbery or attempted robbery affecting interstate commerce are subject to federal prosecution. Federal bank robbery is prosecuted under the federal bank robbery statutes set out at 18 U.S.C. § 2113. Federal investigations are conducted by the Federal Bureau of Investigation, federal prosecutors or others. The case would be heard in the United States District Court, Middle District of Florida.",
  },
  {
    id: "resisting-a-merchant",
    title: "7. Resisting a Merchant",
    image:
      "/images/seo-services/robbery-defense-attorney-tampa/resisting-a-merchant-theft-defense-attorney-tampa-fl.webp",
    imageAlt:
      "Defense attorney evaluating resisting a merchant and elevated retail theft robbery allegations in Tampa",
    imageTitle: "Resisting a Merchant Theft Defense Attorney Tampa Law",
    imageDescription:
      "Challenging retail theft escalation to robbery charges based on merchant detention, alleged physical resistance, and store security claims in Tampa Florida.",
    badgeIcon: <FaStore className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 812.015(6) address resisting a merchant during efforts to recover property after an alleged theft. The statute covers resistance to reasonable efforts by a merchant, merchant's employee, law enforcement officer or another authorized person.\n\nFor example, a store employee may attempt to recover merchandise after an alleged retail theft. An argument, physical resistance or refusal to cooperate during the recovery attempt may lead to an additional allegation under the statute.",
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
                      title={item.imageTitle}
                      data-description={item.imageDescription}
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
                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
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
