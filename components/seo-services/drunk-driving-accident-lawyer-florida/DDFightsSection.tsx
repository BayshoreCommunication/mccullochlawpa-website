"use client";

import React from "react";
import {
  FaEnvelopeOpenText,
  FaHandshake,
  FaUserTie,
  FaSearch,
  FaCarCrash,
  FaHistory,
  FaGavel,
  FaBalanceScale,
} from "react-icons/fa";

export interface FightItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DDFightsSectionProps {
  title?: string;
  subTitle?: string;
  items?: FightItem[];
}

const defaultItems: FightItem[] = [
  {
    id: "demand-letter-strategy",
    title: "Demand Letter and Initial Settlement Strategy",
    description:
      "We prepare a comprehensive formal demand packages detailing complete liability proof and damages. Demand letters incorporate medical billings, expert projections, police reports and chemical intoxication evidence. Our strategic demands establish strict insurance response timelines, creating statutory bad faith exposure for unreasonable denials. Comprehensive pre-suit demand packages demonstrate trial readiness, compelling insurers to evaluate claims seriously.",
    icon: <FaEnvelopeOpenText className="w-5 h-5 text-primary" />,
  },
  {
    id: "direct-negotiation",
    title: "Direct Negotiation With Policyholders and Counsel",
    description:
      "Our former state prosecutor Drew McCulloch leverages extensive trial experience during aggressive settlement negotiations with insurance representatives. He analyzed carrier defense arguments utilizing crash scene evidence, medical documentation and precedent case law. Direct communication ensures adjusters understand the severe financial exposure posed by uncapped punitive damages. Our attorney rejects low settlement offers, advocating firmly for full financial recovery across all damage categories.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "expert-witness-coordination",
    title: "Expert Witness Coordination",
    description:
      "We retain leading medical, economic and vocational experts to calculate precise financial damage valuations. Medical specialists testify regarding long term physical impairment, ongoing pain and required future surgical care. Economists perform detailed present value calculations quantifying lifetime lost earning capacity and inflation impacts. Our comprehensive expert reports provide objective scientific support for total compensation demands presented to insurers.",
    icon: <FaUserTie className="w-5 h-5 text-primary" />,
  },
  {
    id: "discovery-process-handling",
    title: "Discovery Process Handling",
    description:
      "We manage formal court discovery, issuing subpoenas for electronic logs, personnel files and toxicological data. Attorney Drew prepares precise interrogatories and requests for production forcing defendants to disclose crucial evidence. Deposition questioning exposes inconsistencies in driver testimony while confirming reckless driving behaviors. His thorough discovery handling ensures all relevant corporate, medical and law enforcement records are secured.",
    icon: <FaSearch className="w-5 h-5 text-primary" />,
  },
  {
    id: "accident-reconstruction-analysis",
    title: "Accident Reconstruction and Expert Analysis",
    description:
      "Our engineering experts inspect vehicle damage, skid marks, road conditions and electronic module telemetry records. Accident reconstruction specialists create three dimensional computerized simulations illustrating precise collision mechanics. Technical reports establish vehicle impact speeds, driver reaction failures and point of impact locations accurately. Our objective reconstruction analysis eliminates factual disputes regarding how intoxicated drivers caused crashes.",
    icon: <FaCarCrash className="w-5 h-5 text-primary" />,
  },
  {
    id: "timeline-documentation",
    title: "Timeline Documentation",
    description:
      "We maintain chronological timelines tracking every aspect of injury recovery and financial loss. Timelines integrate police responses, medical treatments, rehabilitation milestones and employment absence records. We document treatment continuity to prove injury severity while refuting carrier claims of condition resolution. Detailed visual timelines present clear factual narratives illustrating total crash impact upon victim lives.",
    icon: <FaHistory className="w-5 h-5 text-primary" />,
  },
  {
    id: "trial-preparation",
    title: "Trial Preparation For Unjust Compensation",
    description:
      "Our attorney Drew Mcculloch with his extensive jury trial experience prepares every case for formal court presentation. Trial preparation involves exhibit curation, witness mock examinations, jury selection strategy and motion drafting. He demonstrates complete courtroom readiness to insurance carriers that trial avoidance requires maximum settlement payouts. He presents compelling trial arguments to maximize jury awards across compensatory and punitive damage categories.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
];

export default function DDFightsSection({
  title = "How McCulloch Law Builds Your Drunk Driving Accident Case",
  subTitle = "McCulloch Law treats every drunk driving claim as a case that deserves full investigation, not a quick file to close. Here's how that work happens from intake through resolution.",
  items = defaultItems,
}: DDFightsSectionProps) {
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
              <FaBalanceScale className="w-4 h-4 text-primary" />
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
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
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
