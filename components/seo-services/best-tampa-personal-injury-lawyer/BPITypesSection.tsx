"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaCar,
  FaMotorcycle,
  FaBicycle,
  FaTaxi,
  FaWalking,
  FaDog,
  FaHospitalUser,
  FaUserNurse,
  FaShip,
  FaSkull,
  FaBoxOpen,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface PICaseTypeItem {
  id: string;
  title: string;
  image: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface BPITypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: PICaseTypeItem[];
}

const defaultCaseItems: PICaseTypeItem[] = [
  {
    id: "car-truck-accidents",
    title: "Car and Truck Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/spousal-battery.webp",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Interstate 4's heavy traffic causes severe collisions and can disrupt lives completely. Collisions involving commercial trucks often cause complex liability claims for corporate transportation providers. We gather vehicle black box data quickly before trucking firms erase vital proof. Our legal team fights large insurance corporations to secure maximum injury payouts.",
    linkHref: "/contact",
  },
  {
    id: "motorcycle-collisions",
    title: "Motorcycle Collisions",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/aggravated-domestic.webp",
    badgeIcon: <FaMotorcycle className="w-5 h-5 text-primary" />,
    description:
      "Almost every day bike riders or cyclists face serious dangers on busy roads like Dale Mabry Highway. Auto drivers often neglect to give way to cyclists especially near intersections. We prove liability through collecting traffic camera footage and interviewing nearby eyewitnesses. You can trust our team to demand full coverage for your medical bills.",
    linkHref: "/contact",
  },
  {
    id: "pedestrian-bicycle-injury",
    title: "Pedestrian and Bicycle Injury",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/dating-violence.webp",
    badgeIcon: <FaBicycle className="w-5 h-5 text-primary" />,
    description:
      "Safety while walking or biking near waterfront roads should be danger free. Yet distracted drivers often hit pedestrians crossing busy streets in downtown especially Tampa areas. These tragic incidents often cause walkers catastrophic harm and requiring long hospital stays and rehab. We hold negligent motorists responsible once their careless driving hurts vulnerable pedestrians.",
    linkHref: "/contact",
  },
  {
    id: "rideshare-accidents",
    title: "Rideshare Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/child-abuse.webp",
    badgeIcon: <FaTaxi className="w-5 h-5 text-primary" />,
    description:
      "Shared ride collisions involve multiple insurance policies with strict coverage rules and limits. Uber and Lyft provide higher policy limits only during active passenger trips. Determining whether the driver app was active requires fast legal action and subpoenaed records. Our firm identifies all available insurance policies to recover your lost wages.",
    linkHref: "/contact",
  },
  {
    id: "slip-fall-premises-liability",
    title: "Slip and Fall and Premises Liability",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/strangulation-domestic.webp",
    badgeIcon: <FaWalking className="w-5 h-5 text-primary" />,
    description:
      "Property owners must maintain safe grounds for customers in stores and commercial buildings. Liquid spills or broken stairs frequently lead to painful falls and spinal damage. We prove the property manager knew about hazards but failed to fix them. You can claim full money damages for injuries caused by property owner neglect.",
    linkHref: "/contact",
  },
  {
    id: "dog-bites",
    title: "Dog Bites",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/elderly-domestic-abuse.webp",
    badgeIcon: <FaDog className="w-5 h-5 text-primary" />,
    description:
      "Florida law strictly holds liable dog owners for their pets causing harm or biting other people. Serious pet attacks leave permanent scars and cause long term emotional trauma. We file claims directly against homeowner insurance policies to recover your medical costs. Our team fights to ensure you receive compensation for your physical suffering.",
    linkHref: "/contact",
  },
  {
    id: "medical-malpractice",
    title: "Medical Malpractice",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/violation-of-domestic.webp",
    badgeIcon: <FaHospitalUser className="w-5 h-5 text-primary" />,
    description:
      "Surgical errors or delayed diagnoses at local medical facilities such as Tampa General Hospital or St. Joseph's Hospital result in life altering physical injuries. Healthcare providers must follow professional standards of care in all procedures. We consult top medical specialists to review treatment records and prove clinical error. Our attorneys demand full accountability when medical personnel cause avoidable patient harm.",
    linkHref: "/contact",
  },
  {
    id: "nursing-home-abuse",
    title: "Nursing Home Abuse and Neglect",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/stalking.webp",
    badgeIcon: <FaUserNurse className="w-5 h-5 text-primary" />,
    description:
      "Every care home is obliged to provide adequate medical care and respectful treatment to all elderly people. However neglect of care and treatment often causes sudden weight loss, severe bedsores and unexplained falls among vulnerable seniors. We investigate facility staffing logs to expose systemic corporate neglect across local homes. Our team fights to protect senior citizens from harmful elder abuse conditions.",
    linkHref: "/contact",
  },
  {
    id: "boating-accidents",
    title: "Boating Accidents",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/injunctions.webp",
    badgeIcon: <FaShip className="w-5 h-5 text-primary" />,
    description:
      "Busy waterways around Tampa Bay experience dangerous boating crashes due to reckless operators. Intoxicated boaters and inexperienced captains frequently cause high speed vessel impacts on water. Maritime cases involve unique rules that differ from standard road crash laws. We investigate vessel mechanics and operator actions to establish liability for your harm.",
    linkHref: "/contact",
  },
  {
    id: "wrongful-death",
    title: "Wrongful Death",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/homicide.webp",
    badgeIcon: <FaSkull className="w-5 h-5 text-primary" />,
    description:
      "The loss of a loved one due to avoidable carelessness is extremely upsetting. Children and surviving spouses must deal with unforeseen funeral costs in addition to lost family income. We file wrongful death claims to help families secure essential long term financial support. Our compassionate attorneys fight respectfully to deliver legal justice for your lost relative.",
    linkHref: "/contact",
  },
  {
    id: "product-liability",
    title: "Product Liability",
    image: "/images/seo-services/domestic-violence-defense-lawyer-tampa/felonies.webp",
    badgeIcon: <FaBoxOpen className="w-5 h-5 text-primary" />,
    description:
      "Defective auto parts and unsafe consumer products cause sudden injuries to unsuspecting users. Manufacturers must test consumer products thoroughly before releasing items to retail markets. We preserve faulty products and consult engineering experts to prove design defects clearly. Our law firm holds big corporations accountable for distributing hazardous consumer goods.",
    linkHref: "/contact",
  },
];

export default function BPITypesSection({
  subTitle = "PRACTICE AREAS",
  title = "Personal Injury Cases McCulloch Law Handles in Tampa",
  description = "Personal injury claims can arise from traffic crashes, unsafe property, defective products, medical negligence, animal attacks and other forms of negligence.",
  caseItems = defaultCaseItems,
}: BPITypesSectionProps) {
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
