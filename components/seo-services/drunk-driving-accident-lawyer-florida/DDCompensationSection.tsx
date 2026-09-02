"use client";

import React from "react";
import {
  FaHospitalUser,
  FaMoneyBillWave,
  FaCar,
  FaHeart,
  FaGavel,
  FaWheelchair,
  FaUserInjured,
} from "react-icons/fa";

export interface CompensationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DDCompensationSectionProps {
  title?: string;
  subTitle?: string;
  items?: CompensationItem[];
}

const defaultItems: CompensationItem[] = [
  {
    id: "treatment-costs",
    title: "Past and Future Treatment Costs",
    description:
      "Injury victims recover complete reimbursement for all necessary emergency clinical treatment expenses. Financial recovery covers ambulance transport, surgical care, prescription medications and hospital care. Medical experts project future treatment expenditures covering specialized physical therapy and home care. Detailed economic models ensure settlement demands encompass lifetime medical expenditure requirements fully.",
    icon: <FaHospitalUser className="w-5 h-5 text-primary" />,
  },
  {
    id: "lost-wages-earning-capacity",
    title: "Lost Wages and Earning Capacity",
    description:
      "Victims are compensated for the loss of income that happens as a result of the treatment duration. Evidence of the amount paid by the employer can be given by providing the payroll records, tax files and any other relevant documents. Vocational experts evaluate long term reduced earning capacity caused by permanent physical work restrictions. Compensation addresses lost bonuses, promotional advancement opportunities and retirement benefit contribution losses.",
    icon: <FaMoneyBillWave className="w-5 h-5 text-primary" />,
  },
  {
    id: "vehicle-repair-replacement",
    title: "Vehicle Repair or Replacement",
    description:
      "Victims receive complete financial compensation for vehicle repair expenses or fair market value. Property damage claims encompass damaged personal equipment, child safety seats and personal property. Appraisals establish pre-crash cash value when vehicle repair costs exceed total market value. Insurance coverage provides rental transportation reimbursement while primary vehicle repairs are completed.",
    icon: <FaCar className="w-5 h-5 text-primary" />,
  },
  {
    id: "pain-suffering-compensation",
    title: "Pain and Suffering Compensation",
    description:
      "Noneconomic Damages cover the compensation for the injured victim including pain, suffering and emotional distress. In determining the damages for noneconomic loss, civil juries consider the extent of the collision, treatment and discomfort. In addition, mental trauma, post-traumatic stress and other emotional problems are also compensated by noneconomic damages. Daily pain logs provide personal documentation detailing physical limitations and ongoing daily suffering.",
    icon: <FaHeart className="w-5 h-5 text-primary" />,
  },
  {
    id: "punitive-damages",
    title: "Punitive Damages",
    description:
      "Florida Statute 768.736 removes standard punitive damage caps against intoxicated drivers causing harm. Plaintiffs ask for punitive damages to punish and prevent further reckless behavior by intoxicated drivers. Proving gross negligence requires showing conscious safety indifference through high alcohol impairment. Financial evidence regarding defendant assets supports punitive damage calculations during civil trials.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "permanent-disability",
    title: "Permanent Disability",
    description:
      "Permanent bodily injuries impair a victim's ability to participate in meaningful personal activities. Monetary compensation addresses inability to engage in sports, family hobbies and routine recreation. Medical experts testify regarding permanent physical impairment ratings assigned under official medical guidelines. Juries evaluate age, past lifestyle and permanent physical restrictions when calculating lifestyle loss.",
    icon: <FaWheelchair className="w-5 h-5 text-primary" />,
  },
  {
    id: "disfigurement-settlement",
    title: "Disfigurement Settlement",
    description:
      "Severe collisions cause permanent physical damage, surgical scars and traumatic deformity. Compensation balances scar location, visibility, physical restriction and permanent psychological embarrassment impacts. Plastic surgery experts provide cost projections covering future cosmetic scar revision procedures. Visual photographic evidence documents scar progression from initial physical trauma through long term healing.",
    icon: <FaUserInjured className="w-5 h-5 text-primary" />,
  },
];

export default function DDCompensationSection({
  title = "Damages You Can Recover in a Drunk Driving Accident Claim",
  subTitle = "Florida law allows injured victims to pursue a full range of financial and personal losses. The value of your claim depends on the severity of your injuries and their long term impact.",
  items = defaultItems,
}: DDCompensationSectionProps) {
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
              <FaGavel className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
