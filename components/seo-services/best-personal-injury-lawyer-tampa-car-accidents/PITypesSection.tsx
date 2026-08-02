"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaCar,
  FaTruck,
  FaMotorcycle,
  FaWineGlassAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaTools,
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

export interface PITypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "commercial-truck-accidents",
    title: "Commercial Vehicle & Truck Accidents",
    image: "/images/practice/truck-accidents.png",
    badgeIcon: <FaTruck className="w-5 h-5 text-primary" />,
    description:
      "Truck crashes on local highways involve federal rules that typical car accidents don't. Federal Motor Carrier Safety Administration rules mandate strict driving hours and maintenance logs. These rules also establish specific commercial driver qualifications for all trucking companies. Large trucking operations carry insurance policies worth up to one million dollars. Corporate legal teams protect these massive insurance funds very aggressively from claims.",
    linkHref: "/contact",
  },
  {
    id: "rideshare-rental-accidents",
    title: "Rideshare & Rental Car Accidents",
    image: "/images/practice/uber-ubereats-lyft-accident.png",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Uber and Lyft provide one million dollars in liability coverage during trips. This commercial protection drops sharply if drivers keep their apps turned off. Rental car companies legally avoid accident liability under current federal statutory laws. Personal policies from the individual renter usually apply after these rental crashes.",
    linkHref: "/contact",
  },
  {
    id: "motorcycle-bicycle-pedestrian",
    title: "Motorcycle, Bicycle, & Pedestrian Accidents",
    image: "/images/practice/motorcycle-accidents.png",
    badgeIcon: <FaMotorcycle className="w-5 h-5 text-primary" />,
    description:
      "Florida statutes explicitly exclude motorcycles from standard personal injury protection coverage limits. This specific exclusion leaves local riders exposed financially following major highway crashes. Injured bicyclists and pedestrians face this same coverage gap after local accidents. Personal injury protection insurance only applies directly to standard motorized vehicles instead.",
    linkHref: "/contact",
  },
  {
    id: "drunk-drugged-driving",
    title: "Drunk or Drugged Driving",
    image: "/images/practice/dui.png",
    badgeIcon: <FaWineGlassAlt className="w-5 h-5 text-primary" />,
    description:
      "Official DUI citations give your injury claims strong evidence of clear fault. This proof helps immensely before you begin informal negotiations with insurance adjusters. Florida laws allow punitive damages in drunk driving cases besides standard compensation. The state's criminal case runs alongside your personal civil injury claim simultaneously. These separate legal actions rarely finish at the exact same time together.",
    linkHref: "/contact",
  },
  {
    id: "distracted-driving",
    image: "/images/practice/auto-accident.png",
    title: "Distracted Driving",
    badgeIcon: <FaMobileAlt className="w-5 h-5 text-primary" />,
    description:
      "Texting behind the wheel represents a primary traffic offense under Florida law. This specific distracted driving statute has remained active throughout the state since 2019. Successfully proving driver distraction usually requires obtaining detailed cell phone logs quickly. Insurance companies rarely hand over these cell phone records willingly without fights.",
    linkHref: "/contact",
  },
  {
    id: "uninsured-underinsured-motorist",
    title: "Uninsured or Underinsured Motorist Claims",
    image: "/images/practice/auto-accident.png",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Roughly one in five Tampa drivers carries no automobile liability insurance whatsoever. Florida laws don't require local drivers to maintain uninsured motorist protection plans. Many standard insurance policies skip this optional coverage element entirely during purchase. If your current policy includes it, that protection becomes your primary recovery.",
    linkHref: "/contact",
  },
  {
    id: "hit-and-run",
    title: "Hit and Run",
    image: "/images/practice/auto-accident.png",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "Leaving crash scenes involving severe injuries constitutes a major felony in Florida. When local police never identify the driver, uninsured motorist coverage typically applies. Some policies require actual physical contact for these specific phantom vehicle claims. Detailed accident scene documentation matters early for your final insurance claim process. Finding that fleeing individual determines whether you recover any financial compensation at all.",
    linkHref: "/contact",
  },
  {
    id: "fatal-accidents-wrongful-death",
    title: "Fatal Accidents or Wrongful Death",
    image: "/images/practice/wrongful-death.png",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Florida statutes allow surviving family members to file wrongful death legal claims. The appointed personal representative of the estate brings claims for all survivors. Personal injury attorney guides grieving local families through this emotional process with patience.",
    linkHref: "/contact",
  },
  {
    id: "intersection-side-impact",
    title: "Intersection & Side Impact Accidents",
    image: "/images/practice/auto-accident.png",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "T-bone crashes at busy Tampa intersections often become disputes regarding red lights. Side impact collisions cause severe injuries because doors offer minimal physical protection. Traffic camera footage from nearby local businesses settles right of way arguments.",
    linkHref: "/contact",
  },
  {
    id: "rear-end-collisions",
    title: "Rear End Collisions",
    image: "/images/practice/auto-accident.png",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Florida law preserves the rear vehicle driver was negligent during rear collisions. Insurance adjusters still argue low speed impacts cannot cause real physical injuries. Soft tissue injuries from these common accidents worsen over several passing weeks. Attorney  documents this medical progression to counter minimal impact defense arguments.",
    linkHref: "/contact",
  },
  {
    id: "rollover-head-on",
    title: "Rollover & Head On Collisions",
    image: "/images/practice/fatal-accidents.png",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "Rollovers and head on collisions across Tampa highways cause catastrophic physical injuries. Wrong way drivers on Interstate 275 cause a massive portion of wrecks. Sudden tire failures or broken suspension components trigger severe rollover accidents occasionally.",
    linkHref: "/contact",
  },
  {
    id: "dangerous-road-conditions",
    title: "Dangerous Road Conditions",
    image: "/images/practice/premises-liability.png",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "Deep potholes and broken traffic signals cause more crashes than people realize. Claims against local government agencies follow unique statutory rules and notice regulations. Florida caps total damages against government defendants below normal private policy limits.",
    linkHref: "/contact",
  },
  {
    id: "defective-auto-parts",
    title: "Defective Auto Parts",
    image: "/images/practice/products-liability.png",
    badgeIcon: <FaTools className="w-5 h-5 text-primary" />,
    description:
      "Defective commercial airbags or broken vehicle seatbelts can quickly turn survivable accidents deadly. Florida allows strict product liability claims against part manufacturers besides driver negligence. Injured crash victims can pursue the at fault driver and manufacturer together. Team from personal injury law firm brings in specialized engineers to prove parts failed before impacts.",
    linkHref: "/contact",
  },
];

export default function PITypesSection({
  subTitle = "TYPES OF CAR ACCIDENT CLAIMS",
  title = "Types of Car Accident Cases a Tampa Personal Injury Lawyer Handles",
  description = "Car accidents in Tampa come in many forms and each with its own legal complexities.",
  caseItems = defaultCaseItems,
}: PITypesSectionProps) {
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
              <FaCar className="w-4 h-4" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
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
              1280: { slidesPerView: 4, spaceBetween: 24 },
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow text-left sm:text-center font-sans">
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
