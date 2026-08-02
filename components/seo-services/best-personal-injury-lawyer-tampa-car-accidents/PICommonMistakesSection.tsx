"use client";

import React from "react";
import {
  FaMicrophone,
  FaDollarSign,
  FaHospital,
  FaShareAlt,
  FaPhoneSlash,
  FaNotesMedical,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface CommonMistakeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PICommonMistakesSectionProps {
  title?: string;
  subTitle?: string;
  items?: CommonMistakeItem[];
}

const defaultMistakeItems: CommonMistakeItem[] = [
  {
    id: "giving-recorded-statement",
    icon: <FaMicrophone className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Giving a Recorded Statement",
    description:
      "A recorded statement feels routine, but adjusters use it to trap you later. One casual phrase like \"I'm fine\" can undercut your entire injury claim. Politely decline, and refer the adjuster directly to your attorney instead.",
  },
  {
    id: "settling-too-quickly",
    icon: <FaDollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Settling Too Quickly",
    description:
      "Insurers dangle fast cash before you even know your full medical prognosis. Once you sign a release you forfeit your right to seek additional compensation. Wait until your doctor confirms maximum medical improvement before signing any settlement papers.",
  },
  {
    id: "gaps-in-medical-treatment",
    icon: <FaHospital className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Having Gaps in Medical Treatment",
    description:
      "Skipping your medical appointments gives adjusters easy arguments that you weren't actually injured. Even a tiny two week gap triggers accusations that you healed completely alone. Attend every scheduled clinic appointment and document any reasons you must reschedule things.",
  },
  {
    id: "posting-on-social-media",
    icon: <FaShareAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Posting on Social Media",
    description:
      "A single photo of you smiling can undercut months of documented pain. Adjusters and defense attorneys screenshot everything, even posts you mark as private. Stay off social media entirely until your case reaches a final resolution.",
  },
  {
    id: "falling-for-runner-calls",
    icon: <FaPhoneSlash className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Falling for Unsolicited \"Runner\" Calls",
    description:
      "Some callers pose as legal help right after your crash gets reported publicly. These \"runners\" often push you toward specific clinics or attorneys for a fee. Florida law actually makes this practice illegal, so treat these calls with suspicion.",
  },
  {
    id: "hiding-medical-history",
    icon: <FaNotesMedical className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Hiding Your Medical History",
    description:
      "Insurers eventually find prior injuries anyway, through medical records and past claims. Hiding history looks like fraud, even when your current injury is completely real. Tell McCulloch Law everything upfront, so the firm can control that narrative first.",
  },
];

export default function PICommonMistakesSection({
  title = "Common Mistakes That Cost You Money Before You Hire a Tampa Car Accident Lawyer",
  subTitle = "Small missteps in the first few weeks quietly minimize your entire auto accident settlement. All these common mistakes happen often without personal injury lawyer tampa car accidents.",
  items = defaultMistakeItems,
}: PICommonMistakesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-10 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-sans">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaExclamationTriangle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
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
