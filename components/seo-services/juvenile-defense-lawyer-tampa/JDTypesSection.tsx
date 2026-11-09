"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaHandRock,
  FaStore,
  FaCapsules,
  FaGlobe,
  FaCar,
} from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface JuvenileChargeTypeItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  badgeIcon: React.ReactNode;
  description: string;
  linkHref?: string;
}

export interface JDTypesSectionProps {
  title?: string;
  description?: string;
  caseItems?: JuvenileChargeTypeItem[];
}

const defaultCaseItems: JuvenileChargeTypeItem[] = [
  {
    id: "assault-battery-school-fight",
    title: "Assault Battery and School Fight Allegations",
    image: "/images/seo-services/juvenile-defense-lawyer-tampa/assault-battery-school-fight.webp",
    imageAlt: "Assault Battery and School Fight Allegations Defense Tampa",
    badgeIcon: <FaHandRock className="w-5 h-5 text-primary" />,
    description:
      "Physical altercations and threats bring swift community scrutiny. School disputes can quickly escalate into formal criminal charges. Simple fights sometimes lead to felony battery accusations. A clear defense strategy examines who started the conflict.School disputes and physical altercations can lead to formal criminal charges, particularly when allegations involve threats or violence. Families facing related allegations can also learn more about our Tampa domestic violence defense Lawyer services.",
    linkHref: "/contact",
  },
  {
    id: "theft-shoplifting-property",
    title: "Theft Shoplifting and Property Offenses",
    image: "/images/seo-services/juvenile-defense-lawyer-tampa/theft-shoplifting-property.webp",
    imageAlt: "Juvenile Theft Shoplifting and Property Offenses Defense Tampa",
    badgeIcon: <FaStore className="w-5 h-5 text-primary" />,
    description:
      "Shoplifting and trespass are commonly charged as acts of delinquency. Cases involving damage to property will need to be carefully considered looking at all the evidence. Retailers will push hard to prosecute anyone suspected of being a minor. These cases often result in compensation being paid.",
    linkHref: "/contact",
  },
  {
    id: "drug-possession-minors",
    title: "Drug Possession and Related Allegations",
    image: "/images/seo-services/juvenile-defense-lawyer-tampa/drug-possession-minors.webp",
    imageAlt: "Minor Drug Possession and Related Allegations Defense Tampa",
    badgeIcon: <FaCapsules className="w-5 h-5 text-primary" />,
    description:
      "Allegations of controlled substances have a devastating impact on minors. Defense strategies need to be customized to the child and the offense. Marijuana or prescription drug possession are treated with severity. Diversion programs may be a way to avoid records for first time offenders.Drug possession allegations can have serious consequences for adults as well. Those facing similar allegations can find information about defending drug-related charges.",
    linkHref: "/contact",
  },
  {
    id: "weapons-possession-violent",
    title: "Weapons Possession and Serious Violent Offenses",
    image: "/images/seo-services/juvenile-defense-lawyer-tampa/weapons-possession-violent.webp",
    imageAlt: "Juvenile Weapons Possession and Violent Offenses Defense Tampa",
    badgeIcon: <GiPistolGun className="w-5 h-5 text-primary" />,
    description:
      "Any allegation of weapons is treated seriously and will not be tolerated. The exact legal definition is determined by statutory definitions. Students are expelled from school right away when they are carrying a knife or a gun. Direct file to adult court is a common occurrence with these charges.",
    linkHref: "/contact",
  },
  {
    id: "cyberbullying-online-misconduct",
    title: "Cyberbullying Threats and Online Misconduct",
    image: "/images/seo-services/juvenile-defense-lawyer-tampa/cyberbullying-online-misconduct.webp",
    imageAlt: "Cyberbullying Threats and Online Misconduct Defense Tampa",
    badgeIcon: <FaGlobe className="w-5 h-5 text-primary" />,
    description:
      "Digital misconduct requires preserving the full communication context. This context explains online statements accurately to a judge. False accounts sometimes mask the true sender identity. An attorney traces the digital footprint to protect innocence.",
    linkHref: "/contact",
  },
  {
    id: "underage-dui-alcohol",
    title: "DUI and Other Alcohol Related Allegations Involving Minors",
    image: "/images/seo-services/juvenile-defense-lawyer-tampa/underage-dui-alcohol.webp",
    imageAlt: "Underage DUI and Minor Alcohol Related Offenses Defense Tampa",
    badgeIcon: <FaCar className="w-5 h-5 text-primary" />,
    description:
      "Alcohol related incidents involving minors must be carefully considered. Not all alcohol related incidents involving minors are criminal. Florida has strict zero tolerance laws regarding underage drivers.",
    linkHref: "/contact",
  },
];

export default function JDTypesSection({
  title = "Types of Juvenile Charges We Defend",
  description = "Minors can face a wide variety of criminal allegations. Our skilled juvenile defense lawyer Tampa prepares specific strategies to defend Juvenile charges.",
  caseItems = defaultCaseItems,
}: JDTypesSectionProps) {
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
