"use client";

import React from "react";
import {
  FaHospital,
  FaMoneyBillWave,
  FaHome,
  FaReceipt,
  FaChartLine,
  FaCar,
  FaHeartbeat,
  FaBrain,
  FaUserInjured,
  FaSmile,
  FaRunning,
  FaShieldAlt,
} from "react-icons/fa";

export interface CompensationItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PICompensationSectionProps {
  title?: string;
  subTitle?: string;
  items?: CompensationItem[];
}

const defaultCompensationItems: CompensationItem[] = [
  {
    id: "medical-bills",
    icon: <FaHospital className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Medical Bills",
    description:
      "Recoverable medical expenses include surgeries, emergency room treatments, physical therapy or specialist consultations. Payments for the first ten thousand dollars of private treatment are usually included in personal injury protection coverage. However, serious crash injuries regularly exceed that initial ten thousand dollar limit fast.",
  },
  {
    id: "lost-wages",
    icon: <FaMoneyBillWave className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Lost Wages",
    description:
      "Lost wage compensation covers every single paycheck missed while you recover from injuries. Personal injury protection only pays sixty percent of your total lost household income. This leaves an unexpected financial gap that most local families do not anticipate.",
  },
  {
    id: "replacement-services",
    icon: <FaHome className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Replacement Services",
    description:
      "Replacement services handle daily tasks you cannot perform while healing from your accident. These services include essential everyday assistance like local childcare or routine yard work. Many victims don't realize PIP reimburses these specific costs at daily rates.",
  },
  {
    id: "out-of-pocket-costs",
    icon: <FaReceipt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Out Of Pocket Medical Costs",
    description:
      "Out of pocket expenses include prescriptions, medical equipment, copays, and appointment driving mileage. These combined items add up quickly during your ongoing physical recovery process. Your personal injury protection insurance won't cover the full twenty percent gap. Save every receipt because personal injury lawyer includes these exact totals in demands.",
  },
  {
    id: "lost-earning-capacity",
    icon: <FaChartLine className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Lost Earning Capacity",
    description:
      "Lost earning capacity claims apply when physical injuries limit your long term earnings. This damage category accounts for your entire professional future career path going forward. The law firm brings in qualified vocational experts to calculate this loss accurately.",
  },
  {
    id: "property-damage",
    icon: <FaCar className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Property Damage",
    description:
      "Property damage options cover the repair or total replacement of your damaged vehicle. Florida's ten thousand dollar property damage liability minimum often fails real repair costs. Law firm pursues that financial difference through collision coverage or liability claims.",
  },
  {
    id: "pain-and-suffering",
    icon: <FaHeartbeat className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Physical & Emotional Pain and Suffering",
    description:
      "Pain and suffering damages cover physical discomfort and the emotional toll of wrecks. Florida statutes require a serious injury before you can claim these damages. Lawyer carefully documents your daily struggles to prove these subjective losses.",
  },
  {
    id: "psychological-distress-trauma",
    icon: <FaBrain className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Psychological Distress & Trauma",
    description:
      "Serious automobile accidents often lead to post traumatic stress, depression and other emotional damages. These damages are compensable when a professional therapist can document your diagnosis. Injury law firms connect clients with medical providers who properly document psychological trauma.",
  },
  {
    id: "scarring-disfigurement",
    icon: <FaUserInjured className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Scarring Or Permanent Disfigurement",
    description:
      "Visible scarring and permanent disfigurement qualify automatically under Florida's serious injury threshold rules. Consistent photo documentation taken over time gives insurance adjusters fewer ways to dispute. Personal injury lawyer often works alongside local plastic surgeons to project future surgical revision costs.",
  },
  {
    id: "loss-enjoyment-life",
    icon: <FaSmile className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Loss Of Enjoyment Of Life",
    description:
      "Loss of life enjoyment covers hobbies, relationships, and daily pleasures your injury stole. Insurers often blur this damage category with standard physical pain and suffering claims. Attorneys keep this specific category completely distinct to maximize your total case value.",
  },
  {
    id: "inability-participate-activities",
    icon: <FaRunning className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Inability To Participate In Activities You Once Loved",
    description:
      "Some severe injuries end favorite activities like running, fishing, or playing with grandchildren. Courts and adjusters take this loss seriously when tied to solid physical evidence. Law firm team gathers detailed testimony from family and friends to prove your loss.",
  },
];

export default function PICompensationSection({
  title = "What Compensation Can You Recover After a Tampa Car Accident?",
  subTitle = "Tampa car accident claims can include far more than your medical bills. When you hire personal injury lawyer for auto accidents, they pursue every category of loss you suffered without leaving money behind.",
  items = defaultCompensationItems,
}: PICompensationSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
