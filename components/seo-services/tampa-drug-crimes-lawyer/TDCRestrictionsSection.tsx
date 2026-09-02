"use client";

import React from "react";
import {
  FaVial,
  FaIdCard,
  FaCar,
  FaPlaneDeparture,
  FaVoteYea,
  FaBriefcase,
  FaGraduationCap,
  FaPassport,
  FaExclamationCircle,
} from "react-icons/fa";

export interface RestrictionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TDCRestrictionsSectionProps {
  title?: string;
  subTitle?: string;
  items?: RestrictionItem[];
}

const defaultRestrictionItems: RestrictionItem[] = [
  {
    id: "pretrial-testing",
    title: "Pretrial Release Conditions and Drug Testing",
    description:
      "One missed drug test can send you straight back to jail. Hillsborough County judges commonly order random drug testing as a release condition. No contact orders with co-defendants get added in most Tampa drug cases. Violating any single condition can send you back to Orient Road Jail.",
    icon: <FaVial className="w-5 h-5 text-primary" />,
  },
  {
    id: "license-suspension",
    title: "Driver's License Suspension",
    description:
      "Your ability to drive to work can end the same day as sentencing. Violation of the Florida Statute triggers an automatic six month license suspension. This suspension runs separately from any sentence a judge later imposes. Tampa commuters feel this consequence harder than almost any court fine.",
    icon: <FaIdCard className="w-5 h-5 text-primary" />,
  },
  {
    id: "asset-forfeiture",
    title: "Asset Forfeiture",
    description:
      "Police can take your car before a judge ever hears your case. Hillsborough County deputies can seize your car or cash on arrest alone. Florida Statutes 932.701 through 932.706 allow this seizure before any conviction. The seizing agency has ten business days to establish probable cause. Property owners may request a hearing to challenge the seizure directly. Losing a car to forfeiture before trial happens often across Tampa.",
    icon: <FaCar className="w-5 h-5 text-primary" />,
  },
  {
    id: "travel-firearm-limits",
    title: "Travel & Firearm Limits (Before Trial)",
    description:
      "Step over county lines without a judge’s permission and you’ll end up back in a cell. While fighting your case in Hillsborough County, pretrial conditions generally lock you into the Tampa Bay area. You’re also banned from owning, carrying or buying firearms while the charges are open. Something as routine as driving across the Howard Frankland Bridge into Pinellas County for a quick weekend trip can get your bond revoked on the spot.",
    icon: <FaPlaneDeparture className="w-5 h-5 text-primary" />,
  },
  {
    id: "loss-civil-rights",
    title: "Loss of Civil Rights",
    description:
      "A felony drug conviction strips away basic legal rights the second the judge signs the order. You lose your right to vote in Florida elections, sit on a local jury or run for public office. On top of that, state law imposes a lifetime ban on owning or carrying a gun. Getting those rights back means fighting through Florida’s notoriously slow executive clemency process long after probation ends.",
    icon: <FaVoteYea className="w-5 h-5 text-primary" />,
  },
  {
    id: "job-license-loss",
    title: "Job & Professional License Loss",
    description:
      "For licensed professionals in Tampa, the courtroom penalty is often just the beginning. The Florida Department of Health, the Florida Real Estate Commission and the Florida Bar will automatically start disciplinary proceedings over a drug offense. Whether you’re a nurse at Tampa General Hospital, a realtor or a licensed plumber, a guilty or no contest plea usually means an immediate suspension or total loss of your state license.",
    icon: <FaBriefcase className="w-5 h-5 text-primary" />,
  },
  {
    id: "blocked-housing-student-aid",
    title: "Blocked Housing & Student Aid",
    description:
      "A drug record cuts off access to basic federal support systems right away. Under federal law, a conviction removes your eligibility for FAFSA student loans, grants and federal work-study programs. Local organizations like the Tampa Housing Authority and private apartment complexes routinely reject applicants with recent drug records.",
    icon: <FaGraduationCap className="w-5 h-5 text-primary" />,
  },
  {
    id: "ice-deportation-risks",
    title: "ICE & Deportation Risks",
    description:
      "For non U.S. citizens, local drug charges carry brutal federal consequences. Under federal immigration law, almost any drug offense, even simple possession counts as a deportable offense. Even if you hold a Green Card or valid work visa, taking a plea deal in a Hillsborough County courtroom to avoid local jail time can trigger immediate ICE detention, block naturalization or lead straight to deportation.",
    icon: <FaPassport className="w-5 h-5 text-primary" />,
  },
];

export default function TDCRestrictionsSection({
  title = "What Restrictions Are Imposed After Being Charged With Drug Crime in Tampa",
  subTitle = "An arrest brings restrictions long before any Hillsborough County conviction happens.",
  items = defaultRestrictionItems,
}: TDCRestrictionsSectionProps) {
  return (
    <section className="w-full bg-slate-50/80 py-12 md:py-20 text-slate-800 font-sans relative overflow-hidden">
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
              <FaExclamationCircle className="w-4 h-4 text-primary" />
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
              <div className="w-12 h-12 rounded-2xl bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 mb-4 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <div className="w-10 h-[2px] bg-primary/60 rounded-full mb-3" />

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
