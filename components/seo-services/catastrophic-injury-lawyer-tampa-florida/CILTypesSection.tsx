"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaBrain,
  FaWheelchair,
  FaUserInjured,
  FaFire,
  FaBone,
  FaSkull,
  FaEye,
  FaLungs,
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

export interface CILTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "head-injuries-trauma",
    title: "Head Injuries and Trauma",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/spousal-battery.webp",
    badgeIcon: <FaBrain className="w-5 h-5 text-primary" />,
    description:
      "A brain injury can appear relatively minor after a crash happens. It can turn out bad a few days later. Memory loss, mood changes and seizures often surface after an adjuster has already closed a file. We work with neurologists at Tampa General Hospital and USF Health to document delayed symptoms that develop over weeks or months.",
    linkHref: "/contact",
  },
  {
    id: "paralysis-spine-injury",
    title: "Paralysis and Injury to Spine",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/aggravated-domestic.webp",
    badgeIcon: <FaWheelchair className="w-5 h-5 text-primary" />,
    description:
      "Damage to spinal cord often leads to partial or complete paralysis of victim below injury area. The recovery process involves surgery followed by months of inpatient treatment and rehabilitation. Along with the purchase of wheelchairs, lifts and other equipment. Moreover certified life care planners project costs associated with future replacement of such items. This is because standard settlement formulas underestimate equipment replacement cycles.",
    linkHref: "/contact",
  },
  {
    id: "amputation-limb-loss",
    title: "Amputation and Limb Loss",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/dating-violence.webp",
    badgeIcon: <FaUserInjured className="w-5 h-5 text-primary" />,
    description:
      "Traumatic limb severing in major collisions causes irreversible physical damage and profound physical shock. Prosthetic devices need replacement every three to five years. A fair settlement accounts for every future replacement across a client's expected lifespan.",
    linkHref: "/contact",
  },
  {
    id: "severe-burn-injuries",
    title: "Severe Burn Injuries",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/child-abuse.webp",
    badgeIcon: <FaFire className="w-5 h-5 text-primary" />,
    description:
      "Third and forth degree burns commonly require multiple surgeries including skin grafting. This procedure often leave behind serious complications such as inability to move certain parts of the body or chronic pain. Tampa General operates the region's only dedicated burn center. Its treatment records carry weight in negotiations with an insurer.",
    linkHref: "/contact",
  },
  {
    id: "multiple-fractures",
    title: "Multiple Fractures",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/strangulation-domestic.webp",
    badgeIcon: <FaBone className="w-5 h-5 text-primary" />,
    description:
      "Various fractures often occur as a result of car accidents or on the job injuries. A single fracture can require multiple surgeries using plates, rods or screws over a period of years. We document each procedure and each missed paycheck separately. This is because insurers try to combine these into one lowball figure.",
    linkHref: "/contact",
  },
  {
    id: "wrongful-death",
    title: "Wrongful Death",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/homicide.webp",
    badgeIcon: <FaSkull className="w-5 h-5 text-primary" />,
    description:
      "When a catastrophic injury takes a life, Florida's Wrongful Death Act allows certain family members to file a claim. Spouses, children and dependent parents may recover for lost financial support, funeral costs and loss of companionship. A personal representative, usually a family member or the estate's attorney, files the claim on the family's behalf.",
    linkHref: "/contact",
  },
  {
    id: "vision-hearing-loss",
    title: "Vision or Hearing Loss",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/elderly-domestic-abuse.webp",
    badgeIcon: <FaEye className="w-5 h-5 text-primary" />,
    description:
      "Traumatic vision or hearing loss often follows head trauma, chemical exposure or a workplace accident. These injuries can end careers in driving, construction or any field requiring full sensory function. Vocational experts calculate the earnings gap between a client's prior occupation and the jobs still available afterward.",
    linkHref: "/contact",
  },
  {
    id: "internal-organ-damage",
    title: "Internal Organ Damage",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/violation-of-domestic.webp",
    badgeIcon: <FaLungs className="w-5 h-5 text-primary" />,
    description:
      "Forced impact on body could occur during an accident or a fall. Outcome of such occurrences can be liver, kidney, spleen or lung damage. In some cases, the damage requires immediate surgery. Others cause complications that surface months later including organ failure. We keep a client's file open until treating physicians confirm a final prognosis.",
    linkHref: "/contact",
  },
];

export default function CILTypesSection({
  subTitle = "PRACTICE AREAS",
  title = "Types of Catastrophic Injury Cases We Handle in Tampa",
  description = "Catastrophic injuries change a person’s work life, mobility and day to day life. McCulloch Law represents victims of below common types.",
  caseItems = defaultCaseItems,
}: CILTypesSectionProps) {
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
