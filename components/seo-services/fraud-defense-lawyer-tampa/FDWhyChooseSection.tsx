"use client";

import React from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaComments,
  FaPhoneAlt,
  FaAward,
  FaTrophy,
  FaUserShield,
} from "react-icons/fa";

export interface WhyChooseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FDWhyChooseSectionProps {
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  row1Items?: WhyChooseItem[];
  row2Items?: WhyChooseItem[];
}

const defaultRow1Items: WhyChooseItem[] = [
  {
    id: "prosecutorial-insight",
    icon: <FaGavel className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Former Prosecutorial Insight on the Other Side of the Aisle",
    description:
      "Drew McCulloch spent years prosecuting complex financial and white-collar fraud crimes for the State of Florida. This background gives our firm a distinct edge when evaluating the evidence brought against you. We know exactly how state investigators build cases and where they fail to establish intent.",
  },
  {
    id: "personalized-defense-strategies",
    icon: <FaShieldAlt className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Personalized Defense Strategies for Complex Financial Allegations",
    description:
      "Our firm builds a customized defense around the specific facts of your unique situation. We conduct an independent evaluation of the state’s evidence, reconstructing records to expose hidden gaps. This meticulous approach ensures that alternative explanations for your transactions are clearly presented to judges.",
  },
  {
    id: "absolute-transparency",
    icon: <FaComments className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Absolute Transparency Throughout the Entire Legal Process",
    description:
      "The legal process following a fraud accusation can feel incredibly overwhelming and entirely unpredictable. We believe that an informed client is always better positioned to make sound legal choices. McCulloch Law maintains a strict standard of honest, direct communication throughout every phase of your case. You will receive a realistic assessment of your options, completely free of empty promises.",
  },
];

const defaultRow2Items: WhyChooseItem[] = [
  {
    id: "urgent-access-counsel",
    icon: <FaPhoneAlt className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Urgent Access to Experienced Counsel Day and Night",
    description:
      "A critical development or a sudden search warrant can occur at any hour of the day. To protect your constitutional rights, our legal defense team remains accessible to clients around the clock. Immediate access to your attorney ensures that you never face high-pressure law enforcement encounters alone.",
  },
  {
    id: "legal-recognition-trust",
    icon: <FaAward className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "High Legal Recognition and Earned Regional Trust",
    description:
      "Our professional standing in the Tampa legal community reflects our excellent courtroom results and advocacy. Recognized by elite peer organizations like The National Trial Lawyers, Drew McCulloch has earned respect. This local recognition ensures that your defense is led by an attorney trusted within the system.",
  },
  {
    id: "reputation-tangible-results",
    icon: <FaTrophy className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "A Courtroom Reputation Formed by Tangible Results",
    description:
      "Much of our caseload comes directly from referrals by past clients who successfully secured their liberty. Fellow local defense attorneys also trust us with their most complex financial fraud cases and clients. This level of community trust is earned through daily preparation, unyielding advocacy, and documented success.",
  },
];

export default function FDWhyChooseSection({
  title = "Why Tampa Residents Choose McCulloch Law for Fraud Defense",
  highlightedText = "McCulloch Law",
  subTitle = "Facing fraud allegations means confronting a complex legal system where your freedom is immediately at risk. In these high-stakes situations, you need a local team that understands how the opposition thinks. McCulloch Law provides that vital perspective, combining sharp courtroom experience with an uncompromising commitment to you.",
  row1Items = defaultRow1Items,
  row2Items = defaultRow2Items,
}: FDWhyChooseSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {title.split(highlightedText)[0]}
            <span className="text-primary">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaUserShield className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>
        </div>

        {/* FEATURES GRID WITH DIVIDERS */}
        <div className="max-w-6xl mx-auto">
          
          {/* ROW 1: 3 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {row1Items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* HORIZONTAL SEPARATOR WITH CENTER CIRCLE RING */}
          <div className="relative my-8 sm:my-10 flex items-center justify-center">
            <div className="w-full h-[1px] bg-slate-200/80" />
            <div className="absolute w-4 h-4 rounded-full border-2 border-primary bg-white" />
          </div>

          {/* ROW 2: 3 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {row2Items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#081524] border-2 border-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="w-10 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 transition-all duration-300" />

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
