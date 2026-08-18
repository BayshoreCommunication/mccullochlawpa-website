"use client";

import React from "react";
import Image from "next/image";
import {
  FaSearch,
  FaFileAlt,
  FaHandshake,
  FaBalanceScale,
  FaGavel,
  FaArrowRight,
} from "react-icons/fa";

export interface FightItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PIFightsSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: FightItem[];
}

const defaultFightItems: FightItem[] = [
  {
    number: "01",
    id: "collecting-evidence-analyze",
    icon: <FaSearch className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Collecting Evidence and Analyze",
    description:
      "Our law firm gathers police reports, photos, medical records, and witness statements immediately. Every piece gets analyzed for gaps the insurer might later try to exploit. This groundwork happens before a single call goes out to the insurance company.",
  },
  {
    number: "02",
    id: "demand-letter-insurance",
    icon: <FaFileAlt className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Demand Letter to Insurance Company",
    description:
      "We send a detailed demand letter once your treatment fully stabilizes. That official letter outlines clear liability, personal damages, and specific financial figures owed. Strong demand letters successfully set the right tone for all subsequent injury negotiations.",
  },
  {
    number: "03",
    id: "handle-negotiations",
    icon: <FaHandshake className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Handle Negotiations",
    description:
      "Negotiations often stretch across several rounds of offers, back and forth for weeks. We know which insurers stall and which respond to firm pressure. The firm negotiates from prepared strength, never from a rushed or desperate position.",
  },
  {
    number: "04",
    id: "convince-insurer-settlement",
    icon: <FaBalanceScale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Strategies to Convince Insurer for Fair Settlement",
    description:
      "Our experienced personal injury lawyer for tampa car accidents backs your financial demands with medical records, expert opinions, and case law. Showing trial readiness often convinces insurers a lowball offer won't hold up. Insurers pay more when they believe the firm across the table means it.",
  },
  {
    number: "05",
    id: "file-lawsuit-prepare-case",
    icon: <FaGavel className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "File Lawsuit and Prepare Case",
    description:
      "If negotiations stall, McCulloch Law files suit before your deadline gets close. Litigation often unlocks discovery tools that force insurers to reveal their full file. Most cases still settle, but only once the insurer sees a real trial coming.",
  },
];

export default function PIFightsSection({
  title = "How McCulloch Law Fights Insurance Companies After a Tampa Car Accident",
  subTitle = "McCulloch Law follows a clear process on every single car accident case.",
  imagePath = "/images/seo-services/best-personal-injury-lawyer-tampa-car-accidents/mcculloch.webp",
  items = defaultFightItems,
}: PIFightsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="McCulloch Law Fighting Insurance Adjusters"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex flex-col space-y-3">
              <h3 className="text-lg font-bold text-primary">
                Uncompromising Insurance Defense Negotiation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                We analyze evidence, issue demand letters, and prepare for trial litigation to ensure full financial recovery.
              </p>
              <a
                href="tel:8134442817"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-yellow-400 transition-colors pt-2 group"
              >
                <span>Call (813) 444-2817 for Legal Action</span>
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex items-start gap-5 relative overflow-hidden cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/30">
                      Step {item.number}
                    </span>
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

        </div>
      </div>
    </section>
  );
}
