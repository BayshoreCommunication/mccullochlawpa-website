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
  FaHeartBroken,
  FaExclamationTriangle,
  FaLock,
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

export interface BLTypesSectionProps {
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "simple-battery",
    title: "1. Simple Battery (Misdemeanor Battery)",
    image: "/images/seo-services/battery-lawyer-tampa/simple-battery.webp",
    imageAlt: "Simple Battery Misdemeanor Defense in Tampa Florida",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Simple battery involves harming, touching or hitting another individual on purpose or without consent. For example, punching, pushing, kicking or any unwanted body contact in an argument. Simple battery, can, but not always, include injuries. The circumstances surrounding the contact and the available evidence remain central to the defense.",
    linkHref: "/contact",
  },
  {
    id: "felony-battery",
    title: "2. Felony Battery",
    image: "/images/seo-services/battery-lawyer-tampa/felony-battery.webp",
    imageAlt: "Felony Battery Florida Statutes 784.041 Defense Tampa",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.041 defines felony battery separately from aggravated battery. The state must establish an intentional touch or strike against another person's will, along with great bodily harm, permanent disability or permanent disfigurement. This charge requires careful examination of the alleged contact and the claimed injury. Medical records, photographs, witness statements and other evidence may affect the prosecution's case.",
    linkHref: "/contact",
  },
  {
    id: "aggravated-battery",
    title: "3. Aggravated Battery",
    image: "/images/seo-services/battery-lawyer-tampa/aggravated-battery.webp",
    imageAlt: "Aggravated Battery Defense Florida Statutes 784.045 Tampa",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.045, Aggravated battery. An offense may be committed by inflicting great bodily harm, permanent disability or permanent disfigurement; using a deadly weapon; or committing battery against a pregnant individual per the statutory definitions. Before just looking at the charging document, the defendant must analyze allegations of the conduct, object, injury and elements involved in this charge and examine the evidence behind them.",
    linkHref: "/contact",
  },
  {
    id: "domestic-battery",
    title: "4. Domestic Battery",
    image: "/images/seo-services/battery-lawyer-tampa/domestic-battery.webp",
    imageAlt: "Domestic Battery Defense in Tampa Florida",
    badgeIcon: <FaHeartBroken className="w-5 h-5 text-primary" />,
    description:
      'Florida law defines "domestic violence" as any assault, battery, kidnapping or other criminal offense resulting in bodily harm or death inflicted upon a person against whom the defendant has or had a specified domestic relationship. The relationship needs to be one of family or household members including spouses, former spouses, family members related by blood or marriage, people who live or lived together as a family and co parents of a shared child.',
    linkHref: "/contact",
  },
  {
    id: "sexual-battery",
    title: "5. Sexual Battery",
    image: "/images/seo-services/battery-lawyer-tampa/sexual-battery.webp",
    imageAlt: "Sexual Battery Criminal Defense in Tampa Florida",
    badgeIcon: <FaLock className="w-5 h-5 text-primary" />,
    description:
      "Sexual battery in Florida refers to nonconsensual sexual activity and carries penalties that far exceed other battery charges. These cases involve separate evidence rules, unique procedures and potential consequences including lifetime sex offender registration. An allegation of sexual battery requires defense representation experienced in addressing both the evidentiary issues and the serious collateral consequences.",
    linkHref: "/contact",
  },
  {
    id: "battery-protected-person",
    title: "6. Battery of a Protected Person",
    image: "/images/seo-services/battery-lawyer-tampa/battery-protected-person.webp",
    imageAlt: "Battery of a Protected Person Law Enforcement Defense Florida",
    badgeIcon: <FaUserShield className="w-5 h-5 text-primary" />,
    description:
      "Florida statutes elevate the penalties for battery committed against specified categories of people performing lawful duties, including law enforcement officers, firefighters, emergency medical personnel, public transit workers, code inspectors, security officers and certain other public servants. The state must prove the defendant knew or had reason to know of the person's status and that the person was actively engaged in the lawful performance of duty.",
    linkHref: "/contact",
  },
];

export default function BLTypesSection({
  title = "Types of Battery Charges We Defend",
  description = "Types of battery offenses & related charges in Florida The appropriate offense or allegation depends on the level of the act, injuries involved, evidence of previous qualifying batteries and other factors set by the law.",
  caseItems = defaultCaseItems,
}: BLTypesSectionProps) {
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

