"use client";

import React from "react";
import {
  FaHospitalUser,
  FaMoneyBillWave,
  FaHeart,
  FaWheelchair,
  FaUserNurse,
  FaGavel,
  FaRing,
} from "react-icons/fa";

export interface CompensationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILCompensationSectionProps {
  title?: string;
  subTitle?: string;
  items?: CompensationItem[];
}

const defaultItems: CompensationItem[] = [
  {
    id: "past-future-medical-expenses",
    title: "Past & Future Medical Expenses",
    description:
      "The cost is set to compensate for the initial emergency treatment, inpatient hospitalization and rehabilitation services. All damages related to medical care inflation and necessary surgeries in the future. Along with the costs of lifetime medication are taken into consideration. Victims receive funds necessary to cover lifetime specialized medical care without personal financial strain.",
    icon: <FaHospitalUser className="w-5 h-5 text-primary" />,
  },
  {
    id: "lost-earning-capacity",
    title: "Lost Earning Capacity",
    description:
      "Injured victims receive compensation for historical income lost while recovering from initial accident physical trauma. Loss of earning capacity claims account for lost career advancement, pension contributions and salary increases. Forensic economists project lifetime financial losses based on pre-accident career trajectories and work expectancy.",
    icon: <FaMoneyBillWave className="w-5 h-5 text-primary" />,
  },
  {
    id: "pain-suffering-damages",
    title: "Pain and Suffering Damages",
    description:
      "Non-economic damages are provided to the victims for extreme physical pain, mental suffering and depression. Because they create significant restrictions on the ability of people to enjoy and function normally in their daily lives. Compensation amounts reflect physical injury severity, permanent disfigurement and projected lifelong duration of suffering.",
    icon: <FaHeart className="w-5 h-5 text-primary" />,
  },
  {
    id: "permanent-disability-compensation",
    title: "Permanent Disability Compensation",
    description:
      "Permanent disability compensation addresses the total loss of normal bodily functions and physical capabilities. Florida law provides distinct financial remedies when permanent physical impairment restricts daily activities. Physician-assigned permanent impairment ratings serve as vital foundational evidence for calculating monetary damages.",
    icon: <FaWheelchair className="w-5 h-5 text-primary" />,
  },
  {
    id: "lifelong-nursing-care",
    title: "Lifelong Nursing Care",
    description:
      "Adaptations in personal living space such as permanent construction changes are associated with significant costs. Expenditures include installations of wheelchair ramps, doorways, roll-in showers and other equipment is necessary to support a higher level of care at home. Financial awards cover continuous long-term home health care aides and ongoing home assistance needs.",
    icon: <FaUserNurse className="w-5 h-5 text-primary" />,
  },
  {
    id: "punitive-damages",
    title: "Punitive Damages",
    description:
      "Courts assign punitive damages to defendants if they demonstrate willful or grossly negligent behavior of reckless disregard for safety of others. The statutes put a limitation on the punitive damages awarded to commercial fleets or DUI offenders. The punishments are meant to punish and deter serious misconduct by the offenders.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "loss-of-consortium",
    title: "Loss of Consortium",
    description:
      "Spouse of catastrophically injured victim often suffers tremendously from the loss of intimacy, companionship and support. Loss of consortium claims provide direct compensation to the uninjured spouse from the at-fault party. Family members receive compensation for assuming permanent caregiving duties and suffering lost shared experiences.",
    icon: <FaRing className="w-5 h-5 text-primary" />,
  },
];

export default function CILCompensationSection({
  title = "What Compensation Can You Recover for a Catastrophic Injury in Tampa",
  subTitle = "Florida law allows several categories of damages in a catastrophic injury claim. Each one requires its own proof.",
  items = defaultItems,
}: CILCompensationSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaGavel className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
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
    </section>
  );
}
