"use client";

import React from "react";
import {
  FaHospitalUser,
  FaMoneyBillWave,
  FaGraduationCap,
  FaHome,
  FaUserNurse,
  FaClipboardList,
  FaBalanceScale,
} from "react-icons/fa";

export interface OwedCostItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILOwedCostsSectionProps {
  title?: string;
  subTitle?: string;
  items?: OwedCostItem[];
}

const defaultItems: OwedCostItem[] = [
  {
    id: "lifetime-medical-care-costs",
    title: "Lifetime Medical Care Costs",
    description:
      "Lifetime medical calculations evaluate every treatment intervention required throughout the victim's remaining life. The number includes payments for doctors’ services, hospitalizaion, diagnostic tests, specialized medical procedures and prescriptions.. Retained medical experts apply actuarial life tables and healthcare cost indexes to establish concrete totals.",
    icon: <FaHospitalUser className="w-5 h-5 text-primary" />,
  },
  {
    id: "loss-future-earning-capacity",
    title: "Loss of Future Earning Capacity",
    description:
      "Loss of future earning capacity calculates the difference between pre-accident earning potential and post-injury capabilities. Functional evaluations establish specific physical work restrictions resulting from permanent impairments. Forensic economists project lifetime financial losses incorporating career advancements, employer benefits and inflation.",
    icon: <FaMoneyBillWave className="w-5 h-5 text-primary" />,
  },
  {
    id: "rehabilitation-retraining-costs",
    title: "Rehabilitation and Retraining Costs",
    description:
      "Permanently disabled victims retaining partial physical capacity require specialized vocational rehabilitation support services. Retraining funding covers educational tuition, adaptive computer technologies and job placement assistance programs. Compensation covers total vocational expenses necessary to transition victims into viable alternative employment positions.",
    icon: <FaGraduationCap className="w-5 h-5 text-primary" />,
  },
  {
    id: "property-modification-expenses",
    title: "Property Modification Expenses",
    description:
      "Severe mobility loss requires major modifications to home and transportation vehicles. Contractors install roll-in showers, widen doorways and build ramps at the points of entry. Meanwhile vehicle specialists can retrofit a van with hand controls, install lowered to the ground seats and create a power-operated ramp for entering and exiting the vehicle.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "inhome-care-nursing-costs",
    title: "In-Home Care and Nursing Costs",
    description:
      "Traumatic brain or spinal cord trauma requires continuous home health care support or nursing supervision. Financial claims incorporate costs for round-the-clock shift nursing, physical therapy assistants and personal care aides. Dedicated nursing funding allows severely injured victims to reside safely within personal family residences.",
    icon: <FaUserNurse className="w-5 h-5 text-primary" />,
  },
  {
    id: "life-care-planning-permanent-injuries",
    title: "Life Care Planning for Permanent Injuries",
    description:
      "A formal Life Care Plan establishes an exhaustive blueprint detailing lifetime care obligations. Certified Life Care Planners review medical charts, consult specialists, evaluate home settings and project costs. Objective life care plans serve as authoritative evidence during settlement conferences and trial proceedings.",
    icon: <FaClipboardList className="w-5 h-5 text-primary" />,
  },
];

export default function CILOwedCostsSection({
  title = "Permanent Disability, Lost Income & Future Care Costs — What You're Actually Owed",
  subTitle = "A catastrophic injury settlement needs to cover decades, not months. These are the categories most often underestimated.",
  items = defaultItems,
}: CILOwedCostsSectionProps) {
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
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="w-10 h-[2px] bg-primary rounded-full mb-3" />

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
