"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaCalculator,
  FaBuilding,
  FaGavel,
  FaIdCard,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface FraudTypeItem {
  id: string;
  title: string;
  image: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface FDTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: FraudTypeItem[];
}

const defaultCaseItems: FraudTypeItem[] = [
  {
    id: "tax-fraud-allegations",
    title: "Tax Fraud Allegations",
    image: "/images/practice/fraud.png",
    badgeIcon: <FaCalculator className="w-5 h-5 text-primary" />,
    description:
      "Tax fraud allegations often stem from simple clerical oversights or honest disagreements over deductions rather than actual criminal intent. You may find yourself under investigation because the government misread your financial history or flagged a reporting mistake as a deliberate act. Prosecutors are required to prove you acted with specific intent to deceive which is a high bar for them to clear. As your fraud defense lawyer Tampa, McCulloch Law challenges these claims by demanding concrete evidence of your state of mind. We strip away the prosecution's assumptions to determine if their case holds any real weight or if they are misinterpreting your actions.",
    linkHref: "/contact",
  },
  {
    id: "corporate-fraud-allegations",
    title: "Corporate Fraud Allegations",
    image: "/images/practice/theft-crimes.png",
    badgeIcon: <FaBuilding className="w-5 h-5 text-primary" />,
    description:
      "Cases involving corporate fraud require a deep dive into complex financial landscapes. These situations often involve mountains of data, intricate transaction histories, and interactions between various stakeholders. It is easy for the government to paint an incomplete picture based on a select group of records that lack proper context. We refuse to accept their narrative at face value. Our approach involves auditing the same financial documents they present to ensure we understand the full story before we begin shaping your defense.",
    linkHref: "/contact",
  },
  {
    id: "federal-fraud-allegations",
    title: "Federal Fraud Allegations",
    image: "/images/practice/misdemeanors.png",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Federal fraud charges exist in a completely different world than state level offenses. The penalties are significantly more severe and the courtroom procedures are much stricter. Federal prosecutors have immense resources and specific mandates that make these cases particularly high stakes for anyone involved. McCulloch Law handles the unique pressures of federal court by structuring defenses that account for these rigid rules and the aggressive nature of federal investigations to ensure you are protected at every stage.",
    linkHref: "/contact",
  },
  {
    id: "identity-document-fraud",
    title: "Identity and Document Fraud",
    image: "/images/practice/fraud.png",
    badgeIcon: <FaIdCard className="w-5 h-5 text-primary" />,
    description:
      "This category includes a wide range of accusations involving falsified records and the unauthorized use of personal credentials. Charges can arise from anything from an alleged signature forgery to complex identity theft schemes. Even seemingly minor misrepresentations on legal forms can result in charges that escalate quickly from simple misdemeanors to serious felonies. Document fraud covers falsified documents and the misuse of someone else's identity. Even the wrongful use of a city name can lead to charges. Whatever the allegation, our fraud defense lawyer Tampa builds your defense around the facts.",
    linkHref: "/contact",
  },
];

export default function FDTypesSection({
  subTitle = "TYPES OF FRAUD DEFENSE CASES",
  title = "Types of Fraud Cases a Tampa Defense Lawyer Handles",
  description = "Fraud covers many distinct offenses under Florida law. The State defines it as knowingly falsifying information with intent to deceive. A skilled fraud defense lawyer Tampa learns how each version differs.",
  caseItems = defaultCaseItems,
}: FDTypesSectionProps) {
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
              <FaGavel className="w-4 h-4" />
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
              1024: { slidesPerView: 2, spaceBetween: 24 },
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
