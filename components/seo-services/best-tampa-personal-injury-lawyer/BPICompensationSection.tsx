"use client";

import React from "react";
import {
  FaHospitalUser,
  FaMoneyBillWave,
  FaHeart,
  FaCar,
  FaWheelchair,
  FaRing,
  FaSkull,
  FaGavel,
} from "react-icons/fa";

export interface CompensationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BPICompensationSectionProps {
  title?: string;
  subTitle?: string;
  items?: CompensationItem[];
}

const defaultItems: CompensationItem[] = [
  {
    id: "medical-bills-treatment",
    title: "Medical Bills and Future Treatment Costs",
    description:
      "Hospitalization, surgery, medication and physiotherapy are all included in the compensation for personal injury. Serious accidents often require an ongoing medical treatment and rehabilitation and/or further surgical interventions. We work with medical professionals to calculate lifetime medical costs accurately for claims. Our attorneys demand full reimbursement for all past and future medical treatments.",
    icon: <FaHospitalUser className="w-5 h-5 text-primary" />,
  },
  {
    id: "lost-wages-earning-capacity",
    title: "Lost Wages and Loss of Earning Capacity",
    description:
      "Missing work during physical injury recovery leads to immediate income reduction for your household. Permanent injuries may prevent you from returning to your prior job or working full time. We calculate lost earnings alongside reduced future earning capacity caused by permanent physical limits. Our goal involves recovering every dollar of income you lost due to negligence.",
    icon: <FaMoneyBillWave className="w-5 h-5 text-primary" />,
  },
  {
    id: "pain-and-suffering",
    title: "Pain and Suffering",
    description:
      "Non economic damages compensate injured victims for ongoing physical discomfort and emotional turmoil. Severe physical pain alters your daily life, sleep quality and overall mental wellness. Florida law allows financial recovery for mental anguish and reduced enjoyment of daily life. We document your daily struggles to demand fair payment for pain and suffering.",
    icon: <FaHeart className="w-5 h-5 text-primary" />,
  },
  {
    id: "property-damage",
    title: "Property Damage",
    description:
      "Collisions cause severe physical damage to motor vehicles and personal items inside cars. Property damage claims pay for vehicle repair costs or fair market value replacement. Insurers must also cover rental car costs while your primary vehicle undergoes repairs. We help you process property damage claims efficiently so you return to driving.",
    icon: <FaCar className="w-5 h-5 text-primary" />,
  },
  {
    id: "permanent-disability",
    title: "Permanent Disability",
    description:
      "Catastrophic injuries can leave permanent physical scars, mobility limits or severe loss of limb. Lifelong disfigurement impacts personal self esteem and limits your physical abilities for life. Juries award substantial financial compensation to account for lifelong physical impairments and scarring. Our firm highlights permanent life changes to secure maximum financial awards for you.",
    icon: <FaWheelchair className="w-5 h-5 text-primary" />,
  },
  {
    id: "loss-of-consortium",
    title: "Loss of Consortium for Spouses",
    description:
      "Spouses of severely injured victims suffer emotional disruption, lost companionship and marital strains. Florida law permits uninjured spouses to file loss of consortium claims alongside primary lawsuits. Compensation accounts for lost emotional intimacy, domestic help and marital support during recovery. We represent spouses to ensure families receive full legal recognition for their losses.",
    icon: <FaRing className="w-5 h-5 text-primary" />,
  },
  {
    id: "wrongful-death-damages",
    title: "Wrongful Death Damages for Families",
    description:
      "Families with negligible death face funeral expenses, loss of protection and mental pain. Under Florida wrongful death law, Chapter 768 allow surviving family members to seek financial compensation from negligent parties. Claims cover lost economic support, lost companionship and pre-death medical expenses. We seek full justice for grieving families during difficult loss periods.",
    icon: <FaSkull className="w-5 h-5 text-primary" />,
  },
  {
    id: "punitive-damages-absolute-negligence",
    title: "Punitive Damages for Absolute Negligence",
    description:
      "To punish wrongdoers for extreme recklessness or intentional misconduct Florida courts award punitive damages. Drunk drivers with high alcohol levels often face punitive damage claims. These financial awards exceed standard compensatory damages to deter dangerous behavior across communities. We pursue punitive damages whenever reckless actions cause severe physical injuries to clients.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
];

export default function BPICompensationSection({
  title = "Compensation You May Recover After a Tampa Personal Injury",
  subTitle = "Recoverable damages depend on the claim, injury, evidence, applicable law  and facts surrounding the accident.",
  items = defaultItems,
}: BPICompensationSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1a29] rounded-2xl p-6 border border-slate-800 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
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
