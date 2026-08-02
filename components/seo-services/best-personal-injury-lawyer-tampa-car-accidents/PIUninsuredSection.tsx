"use client";

import React from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaFileContract,
  FaHandshake,
  FaGavel,
  FaBalanceScale,
  FaCalculator,
} from "react-icons/fa";

export interface UninsuredItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PIUninsuredSectionProps {
  title?: string;
  subTitle?: string;
  imagePath?: string;
  items?: UninsuredItem[];
}

const defaultUninsuredItems: UninsuredItem[] = [
  {
    id: "exhausting-policy-limits",
    icon: <FaShieldAlt className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Exhausting Policy Limits",
    description:
      "McCulloch Law first confirms the at-fault driver's policy limits through formal discovery. Once that policy pays out fully, your own UM coverage covers the rest. This step is required before most UM insurers will even discuss your claim.",
  },
  {
    id: "establishing-liability-damages",
    icon: <FaFileContract className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Establishing Liability and Damages",
    description:
      "Your own insurer still requires proof the other driver caused the crash. Our expert tampa personal injury lawyer for auto accidents builds that proof exactly as it would against any outside insurer. Full medical documentation matters just as much in a UM claim as any other.",
  },
  {
    id: "negotiating-lean-liens",
    icon: <FaHandshake className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Negotiating with Lean Liens",
    description:
      "Hospitals and health insurers often place liens against any settlement you receive. Those liens can eat a large chunk of your total compensation if unchallenged. McCulloch Law negotiates those liens down before any money reaches your pocket.",
  },
  {
    id: "leveraging-bad-faith-laws",
    icon: <FaBalanceScale className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Leveraging Bad Faith Laws",
    description:
      "Florida law requires UM insurers to handle claims honestly and in good faith. When an insurer stalls or lowballs without cause, that conduct can violate this duty. Our personal injury lawyer tampa car accidents presses that bad faith exposure to push UM insurers toward fair settlements.",
  },
  {
    id: "filing-a-lawsuit",
    icon: <FaGavel className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Filing a Lawsuit",
    description:
      "If your own insurer won't pay fairly, our personal injury attorney sues them directly. Yes, you can sue your own insurance company under a UM policy. Many insurers change their tone completely once a lawsuit actually gets filed.",
  },
  {
    id: "understanding-payout-costs",
    icon: <FaCalculator className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Understanding Payout and Costs",
    description:
      "UM settlements get reduced by attorney fees, case costs, and any outstanding liens. McCulloch Law explains every deduction clearly before you decide to accept an offer. You'll know your exact take-home number before you sign a single document.",
  },
];

export default function PIUninsuredSection({
  title = "Uninsured and Underinsured Motorist Claims — How McCulloch Law Gets You Paid",
  subTitle = "Roughly one in every five Tampa drivers carries no auto insurance coverage today. Many other local motorists maintain only the absolute minimum liability limits required. These small state minimum policies rarely cover your severe physical accident injuries properly.",
  imagePath = "/images/seo-services/best-personal-injury-lawyer-tampa-car-accidents/courthouse-law.png",
  items = defaultUninsuredItems,
}: PIUninsuredSectionProps) {
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

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src={imagePath}
                alt="Uninsured Motorist Claim Representation"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="bg-[#081524] rounded-2xl p-6 text-white shadow-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <FaShieldAlt className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-snug">
                  Uninsured Motorist Claim?
                </span>
                <span className="text-xs text-slate-300 mt-1 font-sans">
                  McCulloch Law recovers money from your own UM policy &amp; handles lien negotiations.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
