"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaCar,
  FaSkull,
  FaLayerGroup,
  FaBicycle,
  FaTruck,
  FaTaxi,
  FaRunning,
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

export interface DDTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "bodily-injury-auto",
    title: "Bodily Injury Auto Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/spousal-battery.webp",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Impaired drivers usually see car accidents resulting in serious bodily injury to the people of Florida. The people affected by these crashes are often left with debilitating injuries such as brain damage, spinal cord damage, internal organ damage and other injuries. Detailed medical documentation establishes direct causal links between collision impact forces and physical impairments. Insurance carriers face substantial monetary exposure when impaired driving causes severe personal injuries.",
    linkHref: "/contact",
  },
  {
    id: "fatality-wrongful-death",
    title: "Fatality and Wrongful Death Claims",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/aggravated-domestic.webp",
    badgeIcon: <FaSkull className="w-5 h-5 text-primary" />,
    description:
      "Intoxicated operators cause preventable fatal crashes that devastate surviving family members completely. Florida wrongful death statutes authorize surviving relatives to pursue comprehensive economic recovery claims. Recoverable damages encompass lost financial support, funeral expenses and lost family companionship benefits.",
    linkHref: "/contact",
  },
  {
    id: "multiple-vehicle-collisions",
    title: "Multiple Vehicle Collisions",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/strangulation-domestic.webp",
    badgeIcon: <FaLayerGroup className="w-5 h-5 text-primary" />,
    description:
      "Drunk drivers often lead to multiple vehicle collisions on Florida’s high speed highways and busy city streets. In order to determine fault in a multiple car accident, it is important for accident reconstructionists to perform extensive research and investigation. Identifying every applicable insurance policy remains necessary to cover all injured accident victims. Physical evidence analysis establishes primary collision causation against impaired vehicle operators directly.",
    linkHref: "/contact",
  },
  {
    id: "pedestrian-bicycle-accidents",
    title: "Pedestrian and Bicycle Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/dating-violence.webp",
    badgeIcon: <FaBicycle className="w-5 h-5 text-primary" />,
    description:
      "Pedestrian and bicycle safety are compromised by the lack of physical protection while being hit by large motorized vehicles. Drivers under the influence do not perceive marked crosswalks and bicycle paths. Impacts by large vehicles cause compound fractures, head trauma and loss of physical mobility. Financial recovery encompasses emergency clinical expenditures and projected future earnings capacity loss.",
    linkHref: "/contact",
  },
  {
    id: "commercial-vehicle-accidents",
    title: "Commercial Vehicle Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/violation-of-domestic.webp",
    badgeIcon: <FaTruck className="w-5 h-5 text-primary" />,
    description:
      "Impaired commercial truck operators create massive roadway hazards due to extreme vehicle weight. Commercial motor carriers must enforce strict drug screening protocols and federal safety compliance. Liability extends to trucking corporations under federal regulations and vicarious employer responsibility doctrines. Substantial commercial insurance policy limits provide critical financial resources for severely injured victims.",
    linkHref: "/contact",
  },
  {
    id: "rideshare-taxi-accidents",
    title: "Rideshare and Taxi Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/child-abuse.webp",
    badgeIcon: <FaTaxi className="w-5 h-5 text-primary" />,
    description:
      "Intoxicated rideshare drivers endanger passenger safety through negligent motor vehicle operation decisions. Navigating commercial rideshare insurance coverage requires analyzing cellular application activity logs precisely. Available insurance policy coverage limits vary depending on specific driver application status phases.",
    linkHref: "/contact",
  },
  {
    id: "hit-and-run-cases",
    title: "Hit and Run Cases",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/elderly-domestic-abuse.webp",
    badgeIcon: <FaRunning className="w-5 h-5 text-primary" />,
    description:
      "Impaired motorists frequently flee crash scenes to evade immediate criminal arrest and toxicological testing. Law enforcement agencies gather physical evidence and surveillance video to identify fleeing vehicles. Uninsured motorist insurance coverage provides essential financial recovery channels when fleeing drivers disappear. Civil litigation proceeds against identified fleeing drivers, unlocking potential statutory punitive damage remedies.",
    linkHref: "/contact",
  },
];

export default function DDTypesSection({
  subTitle = "PRACTICE AREAS",
  title = "Types of Drunk Driving Accident Cases We Handle",
  description = "Drunk driving accidents can take many shapes in Florida and each one has a different legal remedy. McCulloch Law develops a unique strategy based on the specifics of your crash.",
  caseItems = defaultCaseItems,
}: DDTypesSectionProps) {
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
