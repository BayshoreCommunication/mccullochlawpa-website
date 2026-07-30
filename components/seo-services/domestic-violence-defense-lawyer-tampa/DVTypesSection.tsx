"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaUsers,
  FaHeart,
  FaUserShield,
  FaShieldAlt,
  FaGavel,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface CaseTypeItem {
  id: string;
  title: string;
  image: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface DomesticViolenceTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "spousal-battery",
    title: "Spousal Battery",
    image: "/images/hero/hero-bg.png",
    badgeIcon: <FaUsers className="w-5 h-5 text-primary" />,
    description:
      "Domestic violence allegations between legally married partners carry distinct evidence based weight in Hillsborough County courts. Prosecutors pull marital history, prior 911 call logs and incident reports to build a pattern of abuse narrative for the jury. Officers must identify the primary aggressor to arrest after examining injuries of both spouses at scene.",
    linkHref: "/contact",
  },
  {
    id: "dating-violence",
    title: "Dating Violence",
    image: "/images/hero/hero-bg.png",
    badgeIcon: <FaHeart className="w-5 h-5 text-primary" />,
    description:
      "Florida Statute 784.046 defines dating violence as violence between individuals in a current or prior romantic non marriage relationship. Shared housing is not required to meet legal definition. Absence of it does not reduce the severity of available charges. Hillsborough County prosecutors introduce even undocumented prior incidents as pattern evidence at trial.",
    linkHref: "/contact",
  },
  {
    id: "aggravated-assault",
    title: "Aggravated Domestic Assault",
    image: "/images/hero/hero-bg.png",
    badgeIcon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    description:
      "Domestic battery becomes a second to third degree felony if a weapon is used or victim suffers serious injury under Florida law. Aggravated domestic assault carries up to five years in Florida state prison. This case significantly narrows the plea options available to a defense attorney. Florida courts have extended this elevation to household objects as weapons.",
    linkHref: "/contact",
  },
  {
    id: "elderly-abuse",
    title: "Elderly Domestic Abuse",
    image: "/images/hero/hero-bg.png",
    badgeIcon: <FaUserShield className="w-5 h-5 text-primary" />,
    description:
      "Florida's elder abuse statutes apply along with domestic violence charges if alleged victim is 65 years or older. This creates multifaceted sentencing consequences. Higher minimum terms apply across several charge classifications. Adult children, spouses and live in caregivers are most frequently charged defendants in these cases.",
    linkHref: "/contact",
  },
  {
    id: "strangulation",
    title: "Battery by Strangulation",
    image: "/images/hero/hero-bg.png",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Under Florida Statute 784.041, impeding normal breathing or blood circulation of a family member is charged as a third-degree felony. Prosecutors treat strangulation claims with extreme severity, making immediate legal defense crucial.",
    linkHref: "/contact",
  },
  {
    id: "injunction-violation",
    title: "Violation of Injunction",
    image: "/images/hero/hero-bg.png",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Violating a restraining order or temporary injunction in Florida can lead to immediate arrest and first-degree misdemeanor charges. Our attorneys work quickly to challenge injunction validity and protect your rights.",
    linkHref: "/contact",
  },
];

export default function DomesticViolenceTypesSection({
  subTitle = "PRACTICE AREAS",
  title = "Types of Domestic Violence Cases a Tampa Defense Lawyer Handles",
  description = "Florida law broadly defines Domestic Violence. Each charge has its own set of evidence and defense strategies.",
  caseItems = defaultCaseItems,
}: DomesticViolenceTypesSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [paginationEl, setPaginationEl] = React.useState<HTMLDivElement | null>(null);

  return (
    <section className="w-full bg-slate-50/60 py-8 md:pt-16 md:pb-8 text-slate-800 relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
          {/* Subtitle */}
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {subTitle}
          </span>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 ">
            {title}
          </h2>

          {/* Emblem Divider with Scale of Justice */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        
        <div className="relative px-2 sm:px-6">
          
          {/* Custom Navigation Prev Button */}
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="custom-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:bg-primary hover:text-slate-950 hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer -ml-2 sm:-ml-5 focus:outline-none"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* Custom Navigation Next Button */}
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="custom-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:bg-primary hover:text-slate-950 hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer -mr-2 sm:-mr-5 focus:outline-none"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          <Swiper
            key={paginationEl ? "swiper-ready" : "swiper-init"}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: paginationEl,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full pt-4 pb-2 [&_.swiper-wrapper]:items-stretch"
          >
            {caseItems.map((item) => (
              <SwiperSlide key={item.id} className="flex !h-auto">
                
                {/* CASE CARD */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col w-full h-full min-h-[450px] sm:min-h-[470px] group hover:-translate-y-1 relative">
                  
                  {/* Card Image Header */}
                  <div className="relative w-full h-44 sm:h-48">
                    <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>

                    {/* Circular Badge Icon Center Overlay */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#081524] border-2 border-primary flex items-center justify-center shadow-xl z-30">
                      {item.badgeIcon}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="pt-9 px-5 sm:px-6 pb-6 flex flex-col flex-grow text-center">
                    
                    {/* Card Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow text-left sm:text-center">
                      {item.description}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-auto pt-3 border-t border-slate-100 flex justify-center">
                      <Link
                        href={item.linkHref || "/contact"}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-yellow-600 transition-colors group/link cursor-pointer"
                      >
                        <span>Read More</span>
                        <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container placed lower down in marked position */}
          <div
            ref={(node) => setPaginationEl(node)}
            className="swiper-pagination-custom flex items-center justify-center gap-1.5 mt-8 sm:mt-10 min-h-[20px]"
          />

        </div>

      </div>
    </section>
  );
}
