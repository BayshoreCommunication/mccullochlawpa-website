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
  FaExclamationTriangle,
  FaLock,
  FaCapsules,
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

export interface TDCTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "drug-possession",
    title: "Drug Possession",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/spousal-battery.webp",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "A possession charge under Florida Statute 893.13 can follow you for years without the right defense. This statute covers both actual and constructive possession in Tampa cases. Actual possession means drugs sit in your pocket or hand directly.",
    linkHref: "/contact",
  },
  {
    id: "constructive-possession",
    title: "Constructive Possession Charges",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/dating-violence.webp",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "Constructive possession means drugs turn up in a car or home you control. Hillsborough County deputies file constructive possession charges often after traffic stops on shared vehicles. Prosecutors still have to prove you were aware of the drugs' presence.",
    linkHref: "/contact",
  },
  {
    id: "manufacturing-sale-distribution",
    title: "Manufacturing, Sale & Distribution Intent",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/aggravated-domestic.webp",
    badgeIcon: <FaLock className="w-5 h-5 text-primary" />,
    description:
      "Intent to distribute charge under Florida Statute 893.13 carries far heavier penalties than simple possession. Tampa Police drug crime detectives build their cases solely on circumstantial evidence. Baggies, digital scales and small cash bills often anchor the charge. None of these items proves intent to sell by itself. A Tampa defense lawyer can challenge each piece of evidence individually.",
    linkHref: "/contact",
  },
  {
    id: "drug-trafficking",
    title: "Drug Trafficking",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/strangulation-domestic.webp",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "A trafficking charge under Florida Statute 893.135 can result in prison time without having made a single sale. Twenty eight grams of cocaine or four grams of fentanyl trigger trafficking exposure. Trafficking in oxycodone begins at seven grams, while trafficking in cannabis begins at twenty five pounds. Hillsborough County judges rarely reduce these charges down to simple possession. A personal stash in Hillsborough County can carry a dealer's full trafficking exposure.",
    linkHref: "/contact",
  },
  {
    id: "prescription-paraphernalia",
    title: "Prescription Drug and Paraphernalia Charges",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/violation-of-domestic.webp",
    badgeIcon: <FaCapsules className="w-5 h-5 text-primary" />,
    description:
      "An old prescription rarely defends you against a felony charge under Florida Statute 893.13. Possession of oxycodone or Xanax without a valid prescription still carries the risk of felony charges. Pipes, syringes and digital scales are all included in the paraphernalia charges under Section 893.147. Florida expanded its paraphernalia exemption for 2026 to include fentanyl and xylazine test strips. Tampa police now treat these test strips as harm reduction tools instead of contraband.",
    linkHref: "/contact",
  },
];

export default function TDCTypesSection({
  subTitle = "PRACTICE AREAS",
  title = "Types of Drug Crimes Cases a Tampa Defense Lawyer Handles",
  description = "Hillsborough County prosecutors file four drug charges most often inside the Edgecomb Courthouse Annex.",
  caseItems = defaultCaseItems,
}: TDCTypesSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [paginationEl, setPaginationEl] = React.useState<HTMLDivElement | null>(null);

  return (
    <section className="w-full bg-slate-50/60 py-8 md:pt-16 md:pb-8 text-slate-800 relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {subTitle}
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        <div className="relative px-2 sm:px-6">
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="custom-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:bg-primary hover:text-slate-950 hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer -ml-2 sm:-ml-5 focus:outline-none"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

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
              el: paginationEl,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full pt-4 pb-2 [&_.swiper-wrapper]:items-stretch"
          >
            {caseItems.map((item) => (
              <SwiperSlide key={item.id} className="flex !h-auto">
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col w-full h-full min-h-[450px] sm:min-h-[470px] group hover:-translate-y-1 relative">
                  <div className="relative w-full h-44 sm:h-48">
                    <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>

                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#081524] border-2 border-primary flex items-center justify-center shadow-xl z-30">
                      {item.badgeIcon}
                    </div>
                  </div>

                  <div className="pt-9 px-5 sm:px-6 pb-6 flex flex-col flex-grow text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow text-left sm:text-center">
                      {item.description}
                    </p>

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

          <div
            ref={(node) => setPaginationEl(node)}
            className="swiper-pagination-custom flex items-center justify-center gap-1.5 mt-8 sm:mt-10 min-h-[20px]"
          />
        </div>
      </div>
    </section>
  );
}
