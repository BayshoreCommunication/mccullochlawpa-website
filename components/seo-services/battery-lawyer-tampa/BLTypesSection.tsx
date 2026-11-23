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
  imageTitle: string;
  imageDescription: string;
  badgeIcon: React.ReactNode;
  description: React.ReactNode;
  linkHref?: string;
}

const INLINE_LINK_CLASS =
  "font-semibold text-primary underline hover:text-[#d4a843] transition-colors";

export interface BLTypesSectionProps {
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "simple-battery",
    title: "1. Simple Battery (Misdemeanor Battery)",
    image:
      "/images/seo-services/battery-lawyer-tampa/florida-simple-battery-defense-lawyer-tampa-review.webp",
    imageAlt:
      "Simple battery defense lawyer reviewing misdemeanor bodily contact evidence and police report details in Tampa",
    imageTitle: "Florida Simple Battery Defense Lawyer Tampa Evidence",
    imageDescription:
      "Florida simple battery defense lawyer examining unwanted bodily contact allegations, witness statements, and evidence in Tampa misdemeanor proceedings.",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Simple battery involves harming, touching or hitting another individual on purpose or without consent. For example, punching, pushing, kicking or any unwanted body contact in an argument. Simple battery, can, but not always, include injuries. The circumstances surrounding the contact and the available evidence remain central to the defense.",
    linkHref: "/contact",
  },
  {
    id: "felony-battery",
    title: "2. Felony Battery",
    image:
      "/images/seo-services/battery-lawyer-tampa/florida-felony-battery-defense-attorney-tampa-law.webp",
    imageAlt:
      "Felony battery defense attorney analyzing Florida statutory bodily harm claims and medical evidence in Tampa court",
    imageTitle: "Florida Felony Battery Defense Attorney Tampa Law Firm",
    imageDescription:
      "Experienced Tampa felony battery defense attorney evaluating Florida statutory bodily harm claims, medical evaluations, and court evidence.",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.041 defines felony battery separately from aggravated battery. The state must establish an intentional touch or strike against another person's will, along with great bodily harm, permanent disability or permanent disfigurement. This charge requires careful examination of the alleged contact and the claimed injury. Medical records, photographs, witness statements and other evidence may affect the prosecution's case.",
    linkHref: "/contact",
  },
  {
    id: "aggravated-battery",
    title: "3. Aggravated Battery",
    image:
      "/images/seo-services/battery-lawyer-tampa/aggravated-battery-deadly-weapon-defense-in-tampa.webp",
    imageAlt:
      "Aggravated battery defense lawyer evaluating deadly weapon claims and severe bodily injury evidence in Tampa Florida",
    imageTitle: "Aggravated Battery Deadly Weapon Defense Tampa Florida",
    imageDescription:
      "Tampa aggravated battery defense lawyer analyzing serious bodily injury claims, alleged weapon use, and Florida statutory elements.",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "Florida Statutes § 784.045, Aggravated battery. An offense may be committed by inflicting great bodily harm, permanent disability or permanent disfigurement; using a deadly weapon; or committing battery against a pregnant individual per the statutory definitions. Before just looking at the charging document, the defendant must analyze allegations of the conduct, object, injury and elements involved in this charge and examine the evidence behind them.",
    linkHref: "/contact",
  },
  {
    id: "domestic-battery",
    title: "4. Domestic Battery",
    image:
      "/images/seo-services/battery-lawyer-tampa/domestic-battery-violence-defense-attorney-tampa.webp",
    imageAlt:
      "Domestic battery defense attorney reviewing household relationship allegations and evidence in Tampa Florida courtroom",
    imageTitle: "Domestic Battery Violence Defense Attorney Tampa Court",
    imageDescription:
      "Tampa domestic battery violence defense lawyer evaluating relationship context, police bodycam footage, and domestic violence allegations.",
    badgeIcon: <FaHeartBroken className="w-5 h-5 text-primary" />,
    description: (
      <>
        Florida law defines &ldquo;
        <Link
          href="/domestic-violence-defense-lawyer-tampa"
          className={INLINE_LINK_CLASS}
        >
          domestic violence
        </Link>
        &rdquo; as any assault, battery, kidnapping or other criminal offense
        resulting in bodily harm or death inflicted upon a person against whom
        the defendant has or had a specified domestic relationship. The
        relationship needs to be one of family or household members including
        spouses, former spouses, family members, persons living as a family or
        parents of a child; this may determine terms of release, court orders
        and sentences. Florida also recognizes a separate crime of domestic
        battery by strangulation under § 784.041.
      </>
    ),
    linkHref: "/contact",
  },
  {
    id: "sexual-battery",
    title: "5. Sexual Battery",
    image:
      "/images/seo-services/battery-lawyer-tampa/sexual-battery-felony-defense-attorney-in-tampa-fl.webp",
    imageAlt:
      "Sexual battery felony defense attorney reviewing forensic records, witness testimony, and digital evidence in Tampa",
    imageTitle: "Sexual Battery Felony Defense Attorney in Tampa Florida",
    imageDescription:
      "Skilled sexual battery defense attorney examining forensic records, medical documentation, digital communications, and Florida Chapter 794 charges.",
    badgeIcon: <FaLock className="w-5 h-5 text-primary" />,
    description: (
      <>
        Florida prosecutes the crime of sexual battery under the heading of
        Chapter 794, which addresses specific types of sexual penetration or
        union and defines consent and other legally relevant scenarios. Sexual
        battery is a serious{" "}
        <Link
          href="/sex-crime-defense-lawyer-tampa"
          className={INLINE_LINK_CLASS}
        >
          sex crime
        </Link>
        . Upon investigating a sexual battery case, the police may need to
        review written communication, forensics, medical reports, DNA evidence,
        statements of eyewitnesses and computer data. Sexual battery is a
        specific statutory crime and is not considered a variation of simple
        battery under §794.03.
      </>
    ),
    linkHref: "/contact",
  },
  {
    id: "battery-protected-person",
    title: "6. Battery of a Protected Person",
    image:
      "/images/seo-services/battery-lawyer-tampa/battery-on-law-enforcement-officer-defense-tampa.webp",
    imageAlt:
      "Battery on law enforcement officer defense attorney evaluating protected public servant statutory claims in Tampa",
    imageTitle: "Battery on Law Enforcement Officer Defense Tampa Firm",
    imageDescription:
      "Defense attorney challenging battery charges involving law enforcement officers and protected emergency personnel in Tampa Florida courts.",
    badgeIcon: <FaUserShield className="w-5 h-5 text-primary" />,
    description:
      "Florida law provides enhanced classifications for certain battery allegations involving protected individuals. Under § 784.07, battery against specified personnel performing official duties may qualify for reclassification. Covered personnel include law enforcement officers, firefighters, emergency medical care providers, certain hospital personnel and other listed workers. Section 784.08 also addresses battery against people aged 65 or older. The alleged victim's status, the circumstances of the incident and the applicable statute can affect the charge.",
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
                      title={item.imageTitle}
                      data-description={item.imageDescription}
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
                      <div className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </div>
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
