"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaBalanceScale,
  FaUsers,
  FaShieldAlt,
  FaGavel,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaGlobe,
  FaMobileAlt,
  FaUserSecret,
  FaExclamationTriangle,
  FaLock,
  FaSearch,
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

export interface SCTypesSectionProps {
  subTitle?: string;
  title?: string;
  description?: string;
  caseItems?: CaseTypeItem[];
}

const defaultCaseItems: CaseTypeItem[] = [
  {
    id: "sexual-battery",
    title: "Sexual Battery or Rape",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/sexual-battery.webp",
    badgeIcon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    description:
      "Sexual battery occurs as oral, anal or vaginal penetration without victim's consent. The charge escalates to life felony when victim is below 12 years old. A deadly weapon involved in the offense produces same elevated classification. Hillsborough County prosecutors build these cases from the moment of arrest. Therefore defense must respond just as quickly.",
    linkHref: "/contact",
  },
  {
    id: "lewd-lascivious",
    title: "Lewd and Lascivious Offenses",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/lewd-lascivious.webp",
    badgeIcon: <FaUsers className="w-5 h-5 text-primary" />,
    description:
      "Florida Law addresses sexual conduct with minors under 16. The law covers four categories such as battery, molestation, conduct and exhibition. Each charged as a separate offense. Multiple counts can stack against one defendant from a single incident. A conviction under this statute requires sex offender registration in Florida. Single misidentification at this charge level produces a lifelong legal consequence.",
    linkHref: "/contact",
  },
  {
    id: "child-pornography",
    title: "Child Pornography and Exploitation",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/child-pornography.webp",
    badgeIcon: <FaLock className="w-5 h-5 text-primary" />,
    description:
      "Florida Statute treats each individual image or video file as a separate criminal count. A single device search can generate dozens of simultaneous charges against the same defendant. Federal prosecutors in Middle District frequently co-charge these cases alongside state prosecution. That doubles the legal exposure a defendant faces from the start.",
    linkHref: "/contact",
  },
  {
    id: "online-enticement",
    title: "Online Enticement and Solicitation",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/online-enticement.webp",
    badgeIcon: <FaGlobe className="w-5 h-5 text-primary" />,
    description:
      "Florida Act criminalizes soliciting minors through electronic communication. Tampa law enforcement runs regular sting operations using undercover officers posing as minors online. Entrapment becomes a viable defense when investigators exceed their lawful operational boundaries.",
    linkHref: "/contact",
  },
  {
    id: "statutory-rape",
    title: "Statutory Rape or Unlawful Sexual Conduct",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/statutory-rape.webp",
    badgeIcon: <FaBalanceScale className="w-5 h-5 text-primary" />,
    description:
      "Florida code prohibits sexual activity with anyone under 18 without exception. The state does not need to prove force or deception to secure a conviction here. The alleged victim's age alone satisfies prosecution's primary burden of proof. Florida's Romeo and Juliet exception applies in narrow age gap situations between teenagers.",
    linkHref: "/contact",
  },
  {
    id: "prostitution-solicitation",
    title: "Prostitution and Solicitation",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/prostitution-solicitation.webp",
    badgeIcon: <FaUserSecret className="w-5 h-5 text-primary" />,
    description:
      "Statute of Florida criminalizes offering or receiving sexual services for anything of value. A first offense is a misdemeanor. However repeat charges escalate quickly into felony territory. Tampa law enforcement uses undercover operations in these cases on a regular basis. Entrapment defenses can be more robust than clients anticipate when supported by facts.",
    linkHref: "/contact",
  },
  {
    id: "indecent-exposure",
    title: "Indecent Exposure",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/indecent-exposure.webp",
    badgeIcon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
    description:
      "State Law hold account when someone exposes their sexual organs against another person's will. Many of these charges come from disputed facts or misidentification in public spaces. Certain aggravating circumstances can still trigger sex offender registration even within this offense classification.",
    linkHref: "/contact",
  },
  {
    id: "digital-harassment",
    title: "Digital Sexual Harassment",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/digital-harassment.webp",
    badgeIcon: <FaMobileAlt className="w-5 h-5 text-primary" />,
    description:
      "Sharing intimate images of another person without their consent is serious crime and illegal in Florida. The charge applies even when the defendant originally received those images with full permission at the time. Digital forensics reveals the process of image transmission, receiver and sender device.",
    linkHref: "/contact",
  },
  {
    id: "sexual-purpose-kidnapping",
    title: "Sexual Purpose Kidnapping",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/sexual-purpose-kidnapping.webp",
    badgeIcon: <FaGavel className="w-5 h-5 text-primary" />,
    description:
      "Prosecutors pursue kidnapping and sex offense charges together in court. Courts often impose sentences consecutively and push total exposure into decades without early release. Removal of stacked charge approach represents greatest impact of targeted motion practice.",
    linkHref: "/contact",
  },
  {
    id: "sex-trafficking",
    title: "Sex Trafficking",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/sex-trafficking.webp",
    badgeIcon: <FaUsers className="w-5 h-5 text-primary" />,
    description:
      "State law targets individuals recruiting, transporting or financially benefiting from another person's exploitation. The law applies to indirect financial involvement. Hillsborough County prosecutors interpret that scope broadly. Federal charges under 18 U.S.C. § 1591 frequently accompany state charges in Tampa trafficking cases.",
    linkHref: "/contact",
  },
  {
    id: "failure-to-register",
    title: "Failure to Register",
    image: "/images/seo-services/sex-crime-defense-lawyer-tampa/failure-to-register.webp",
    badgeIcon: <FaSearch className="w-5 h-5 text-primary" />,
    description:
      "Sex offenders with registration must update their address within 48 hours of moving. Missing that window is a third degree felony regardless of the reason for delay. Tampa law enforcement conducts regular compliance sweeps throughout Hillsborough County each year. Multiple missed periods produce multiple stacked felony charges against the same person.",
    linkHref: "/contact",
  },
];

export default function SCTypesSection({
  subTitle = "PRACTICE AREAS",
  title = "Types of Sex Crime Cases a Tampa Defense Lawyer Handles",
  description = "Tampa prosecutors pursue sex crime charges across a wide range of offense types. Each charge carries specific statutes, mandatory minimums and registration consequences.",
  caseItems = defaultCaseItems,
}: SCTypesSectionProps) {
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
