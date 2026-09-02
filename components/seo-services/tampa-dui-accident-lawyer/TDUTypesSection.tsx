"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaCar,
  FaLayerGroup,
  FaBicycle,
  FaRunning,
  FaShip,
  FaTruck,
  FaSkull,
  FaUserGraduate,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface DUICaseTypeItem {
  id: string;
  title: string;
  image: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface TDUTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: DUICaseTypeItem[];
}

const defaultCaseItems: DUICaseTypeItem[] = [
  {
    id: "single-vehicle-dui",
    title: "Single Vehicle DUI Crashes",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/spousal-battery.webp",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "When your vehicle swerves off the road, police officers usually suspect alcohol impairment. However, sudden tire blowouts, dark roads  or mechanical failures often cause these single car accidents. Our team gathers roadside evidence to show prosecutors that nonalcohol factors caused your crash.",
    linkHref: "/contact",
  },
  {
    id: "multi-car-accidents-injuries",
    title: "Multi Car Accidents With Injuries",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/aggravated-domestic.webp",
    badgeIcon: <FaLayerGroup className="w-5 h-5 text-primary" />,
    description:
      "Multi car collisions involving injuries escalate simple driving charges to severe first degree misdemeanors in Florida. Under FL Statute § 316.193, you face harsh penalties if a crash causes bodily injuries. We investigate crash dynamics to prove you were not responsible for causing the multi vehicle collision.",
    linkHref: "/contact",
  },
  {
    id: "pedestrian-cyclist-accidents",
    title: "Pedestrian and Cyclist Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/dating-violence.webp",
    badgeIcon: <FaBicycle className="w-5 h-5 text-primary" />,
    description:
      "When a pedestrian or cyclist is involved in DUI auto collision, police and media take notice immediately due to their vulnerability. Public pressure and urgency are reasons for prosecutors to pursue these cases. If pedestrian is hurt, the charge may become a felony. Police officers frequently request blood tests when serious bodily harm occurs at crash scenes. We review right of way rules, street lighting and blood testing procedures to challenge state claims.",
    linkHref: "/contact",
  },
  {
    id: "hit-and-run-impaired",
    title: "Hit and Run Accidents While Impaired",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/elderly-domestic-abuse.webp",
    badgeIcon: <FaRunning className="w-5 h-5 text-primary" />,
    description:
      "Leaving a collision site while impaired creates separate felony charges alongside your baseline arrest. State prosecutors enforce stiff penalties when drivers leave crash scenes without providing required information. We examine witness statements, camera footage and driver identity proof to challenge the state's allegations.",
    linkHref: "/contact",
  },
  {
    id: "boating-accidents-tampa-bay",
    title: "Boating Accidents on Tampa Bay",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/child-abuse.webp",
    badgeIcon: <FaShip className="w-5 h-5 text-primary" />,
    description:
      "Boating under the influence incidents across Tampa Bay fall under specialized marine law enforcement supervision. Marine officers apply the same legal alcohol limits to watercraft as highway motor vehicles. We demonstrate how sun exposure, wave impacts and vessel movement alter roadside test results.",
    linkHref: "/contact",
  },
  {
    id: "commercial-vehicle-dui",
    title: "Commercial Vehicle DUI Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/violation-of-domestic.webp",
    badgeIcon: <FaTruck className="w-5 h-5 text-primary" />,
    description:
      "Commercial drivers face a lower legal blood alcohol limit of 0.04. A DUI accident behind the wheel of a work vehicle threatens your CDL directly. Federal and state trucking regulations both apply to a commercial DUI case. Employers often terminate drivers before any conviction ever occurs. We fight to protect your license and your ability to keep working.",
    linkHref: "/contact",
  },
  {
    id: "dui-manslaughter-charges",
    title: "DUI Manslaughter Charges",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/strangulation-domestic.webp",
    badgeIcon: <FaSkull className="w-5 h-5 text-primary" />,
    description:
      "Under current Florida law, the most severe penalties are reserved for fatal DUIs. Trenton's Law reclassifies DUI manslaughter as first degree felony. It’s only for repeat offenders with prior conviction for DUI manslaughter or vehicular homicide. This conviction now carries a sentence of up to thirty years. The law also sets a mandatory minimum term of four years. We work with crash reconstruction experts to challenge toxicology timelines and causation arguments.",
    linkHref: "/contact",
  },
  {
    id: "underage-drunk-driving-accidents",
    title: "Underage Drunk Driving Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/stalking.webp",
    badgeIcon: <FaUserGraduate className="w-5 h-5 text-primary" />,
    description:
      "Florida has a zero tolerance policy of .02 percent blood alcohol for drivers under twenty one. Drivers under age who cause accidents are subject to lengthy license suspensions and are required to take alcohol education courses and serve probation. Our defense work protects your academic standing, job opportunities and clear personal record.",
    linkHref: "/contact",
  },
];

export default function TDUTypesSection({
  subTitle = "CASE TYPES WE HANDLE",
  title = "DUI Accident Cases Tampa Lawyers Handle",
  description = "Florida law treats a DUI accident differently depending on what actually happened at the scene. The details of your crash determine the charge you face.",
  caseItems = defaultCaseItems,
}: TDUTypesSectionProps) {
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
