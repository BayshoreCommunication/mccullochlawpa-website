"use client";

import React from "react";
import Image from "next/image";
import { FaAward, FaHandshake, FaPhoneAlt, FaCoins, FaUserCheck, FaCheckCircle } from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DDWhyChooseSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: WhyChooseItem[];
}

const defaultItems: WhyChooseItem[] = [
  {
    id: "record-successful-settlements",
    title: "Record of Successful Settlements and Verdicts",
    description:
      "McCulloch Law, P.A. delivers assertive civil representation backed by extensive prosecution and litigation experience. Founder Drew McCulloch brings over fifteen years of legal practice, having tried over 100 cases to verdict. Selecting over 75 juries provides unmatched insight into trial dynamics and courtroom strategy execution. Proven case results reflect consistent success securing maximum compensation for injured accident victims. Victims benefit from trial tested legal advocacy that compels insurance carriers to pay full claim value.",
    icon: <FaAward className="w-5 h-5 text-primary" />,
  },
  {
    id: "strong-negotiation-insurers",
    title: "Strong Negotiation With Insurers",
    description:
      "Former prosecutorial experience enables strategic dismantling of insurance defense tactics and settlement delays. Our firm pursues all available liability policies, commercial coverage and third party dram shop sources. Attorney Drew use uncapped punitive damage exposure to force favorable settlement terms from reluctant carriers. Our attorney directly negotiates with adjusters to avoid exploiting uninsured victims through low settlement offers.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "24-7-availability",
    title: "24/7 Availability for Victims",
    description:
      "Accidents occur unexpectedly, requiring immediate legal intervention to preserve physical and digital evidence. McCulloch Law provides round the clock availability, ensuring victims receive immediate legal guidance following crashes. Our fast legal response enables immediate evidence gathering, witness interviews and spoliation notice issuances.",
    icon: <FaPhoneAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "no-upfront-legal-fees",
    title: "No Upfront Legal Fees",
    description:
      "Clients pay zero upfront costs or out of pocket legal fees when retaining McCulloch Law for personal injury claims. Representation operates on a contingent fee structure, where legal fees are paid solely from successful recoveries. Free initial case consultations allow victims to explore legal options without financial obligation or risk.",
    icon: <FaCoins className="w-5 h-5 text-primary" />,
  },
  {
    id: "personalized-case-strategy",
    title: "Personalized Case Strategy",
    description:
      "McCulloch Law maintains a strict limited case intake policy to ensure dedicated attention for every client. Cases are managed directly by licensed Florida attorneys. Customized legal strategies target specific injury medical needs, lost career earnings and long term care plans. Our personalized client communication ensures victims remain fully informed throughout every step of litigation.",
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
  },
];

export default function DDWhyChooseSection({
  title = "Why Florida Accident Victims Choose McCulloch Law",
  subTitle = "Choosing the right attorney after a drunk driving crash affects every dollar you eventually recover. Here's what sets McCulloch Law apart for Florida accident victims.",
  imagePath = "/images/seo-services/domestic-violence-defense-lawyer-tampa/mcculloch.webp",
  items = defaultItems,
}: DDWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-12 md:py-20 text-white font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaCheckCircle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <Image
              src={imagePath}
              alt="Attorney Drew McCulloch - Florida Drunk Driving Accident Lawyer"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#081524]/90 backdrop-blur-md border border-primary/40 text-white">
              <p className="text-sm font-bold text-white">Drew McCulloch, Esq.</p>
              <p className="text-xs text-slate-300">15+ Years Legal Practice in Florida</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-5 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#0c1a29] rounded-2xl p-5 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
