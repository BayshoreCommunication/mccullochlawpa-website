"use client";

import React from "react";
import {
  FaMoneyBillWave,
  FaFileContract,
  FaHourglassHalf,
  FaFileMedical,
  FaMicrophoneSlash,
  FaChartLine,
  FaExclamationTriangle,
  FaSignature,
} from "react-icons/fa";

export interface AdjusterItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DDAdjustersSectionProps {
  title?: string;
  subTitle?: string;
  items?: AdjusterItem[];
}

const defaultItems: AdjusterItem[] = [
  {
    id: "quick-low-settlements",
    title: "Offering Quick Low Settlements",
    description:
      "Insurance adjusters offer fast cash settlements before victims understand total physical injury extent. Early settlement offers contain full liability releases barring future claims for medical complications. Adjusters target vulnerable victims facing immediate missed paychecks and mounting emergency medical billings. Accepting early settlement offers leaves victims personally responsible for ongoing long term medical costs.",
    icon: <FaMoneyBillWave className="w-5 h-5 text-red-500" />,
  },
  {
    id: "unnecessary-information",
    title: "Requesting Unnecessary Information",
    description:
      "Insurance carriers request broad medical history releases attempting to locate preexisting physical injury conditions. Adjusters inspect past medical history searching for old injuries to blame for current crash pain. Requests for personal financial information target victim vulnerability to force lower claim settlement acceptance. Attorneys restrict insurance medical releases strictly to treatment documentation related to current crash injuries.",
    icon: <FaFileContract className="w-5 h-5 text-red-500" />,
  },
  {
    id: "delaying-claim-processing",
    title: "Delaying Claim Processing",
    description:
      "Insurance representatives employ deliberate communication delays hoping desperate claimants accept lower compensation. Adjusters delay liability decisions, medical record evaluations  and settlement offer response communications repeatedly. Unreasonable administrative delays aim to exhaust victim financial reserves while approaching statutory filing deadlines. Attorneys establish strict negotiation timelines and file formal civil lawsuits when insurers delay arbitrarily.",
    icon: <FaHourglassHalf className="w-5 h-5 text-red-500" />,
  },
  {
    id: "disputing-treatment-costs",
    title: "Disputing Medical Treatment Costs",
    description:
      "Insurers utilize internal medical auditors to challenge physician treatment choices and clinical billings. Adjusters argue chiropractic care, MRI diagnostic scans  or surgeries were unnecessary following crashes. Insurance medical reviewers claim injury treatments exceed regional pricing guidelines to reduce reimbursement amounts. Attorneys present strong treating physician affidavits confirming medical necessity for all rendered clinical care.",
    icon: <FaFileMedical className="w-5 h-5 text-red-500" />,
  },
  {
    id: "using-recorded-statements",
    title: "Using Recorded Statements Against You",
    description:
      "Insurance adjusters request early recorded statements while victims remain shaken or taking pain medication. Adjusters ask leading questions designed to elicit damaging admissions regarding crash mechanics or injuries. Out of context statements regarding physical improvement are used later to minimize claim damage valuations. Victims have no legal obligation to provide recorded statements to third party liability insurance adjusters.",
    icon: <FaMicrophoneSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "offering-structured-settlements",
    title: "Offering Structured Settlements",
    description:
      "Carriers propose structured annuity payouts designed to lower present day cash payout commitments significantly. Structured proposals often fail to account for future inflation and immediate catastrophic care financial requirements. Insurers market structured settlements as convenient options while retaining interest income earnings potential internally. Financial experts analyze proposed payout structures to confirm present value calculations match true settlement worth.",
    icon: <FaChartLine className="w-5 h-5 text-red-500" />,
  },
  {
    id: "blaming-you-for-accident",
    title: "Blaming You for Accident and Claims",
    description:
      "Carriers allege victim comparative negligence under Florida Statute 768.81 to reduce payout percentages. Adjusters argue minor speeding or delayed reaction times contributed directly to crash mechanics. Establishing plaintiff fault above fifty percent completely bars financial recovery under current Florida law. Attorneys gather crash scene evidence proving impaired drivers were completely responsible for causing collisions.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-red-500" />,
  },
  {
    id: "liability-waivers-earlier",
    title: "Requesting You Sign Liability Waivers Earlier",
    description:
      "Adjusters include broad legal waivers within routine property damage reimbursement paperwork or initial checks. Unwary victims signing liability waivers inadvertently surrender rights to pursue bodily injury financial compensation. Carriers draft ambiguous release language attempting to discharge all potential corporate and individual defendants. Attorneys review every legal document thoroughly before authorizing client signatures on settlement releases.",
    icon: <FaSignature className="w-5 h-5 text-red-500" />,
  },
];

export default function DDAdjustersSection({
  title = "Common Insurance Company Tactics That Reduce Your Settlement",
  subTitle = "Insurance companies exist to protect their profits as opposed to your recovery. Hiring a drunk driving accident lawyer florida assist you in keeping your claim on track toward fair value.",
  items = defaultItems,
}: DDAdjustersSectionProps) {
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
              <FaExclamationTriangle className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mb-4 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <div className="w-10 h-[2px] bg-red-400 rounded-full mb-3" />

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
