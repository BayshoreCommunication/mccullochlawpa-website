"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaDollarSign,
  FaIdBadge,
  FaPassport,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FDPenaltiesSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: PenaltyItem[];
}

const defaultPenaltyItems: PenaltyItem[] = [
  {
    id: "financial-criminal-penalties",
    icon: <FaDollarSign className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Financial and Criminal Penalties",
    description:
      "Fines often increase dramatically based on the financial value of the alleged fraud. Depending on the severity of the charge, you could face anything from local jail time to multi-year sentences in state prison. If the case moves to the federal level, the guidelines carry even stricter mandatory minimum confinement terms. Beyond incarceration, Florida courts regularly order full financial restitution to repay any disputed funds.",
  },
  {
    id: "professional-licensing-risks",
    icon: <FaIdBadge className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Professional Licensing Risks",
    description:
      "A felony conviction carries consequences that extend far beyond the courtroom, putting your career and professional license at immediate risk. Many local industries maintain strict background check requirements, and state regulatory boards actively review criminal records during disciplinary evaluations. Protecting your future means addressing these career threats early in the legal process.",
  },
  {
    id: "collateral-immigration-consequences",
    icon: <FaPassport className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Collateral Immigration Consequences",
    description:
      "For non-citizens, a fraud case can completely alter your future in the United States. Certain convictions carry a high risk of mandatory deportation or an immediate denial of legal status. Because your immigration standing depends entirely on how your criminal case is resolved, our team evaluates these collateral risks from the very beginning of our representation.",
  },
];

export default function FDPenaltiesSection({
  title = "What Penalties Follow a Fraud Conviction in Tampa",
  subTitle = "In Florida, fraud is a high-stakes charge with statutory penalties that scale directly alongside the alleged dollar amount. Because a conviction can permanently disrupt your life, handling this system requires a fraud defense lawyer Tampa residents trust.",
  imagePath = "/images/seo-services/fraud-defense-lawyer-tampa/courthouse-law.png",
  items = defaultPenaltyItems,
}: FDPenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="border-l-2 border-primary pl-3.5 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Florida Fraud Statutory Penalties"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-primary">Facing High-Stakes Fraud Penalties?</h4>
                <p className="text-xs text-slate-300 font-sans mt-0.5">Former Prosecutor Drew McCulloch defends your freedom &amp; future.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#a87d25] text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105"
              >
                <span>Free Review</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
