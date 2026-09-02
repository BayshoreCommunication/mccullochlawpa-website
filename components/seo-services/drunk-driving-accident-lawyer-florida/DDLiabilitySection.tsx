"use client";

import React from "react";
import {
  FaVial,
  FaVideo,
  FaFileAlt,
  FaUserTie,
  FaExclamationTriangle,
  FaFlask,
  FaHistory,
  FaShieldAlt,
} from "react-icons/fa";

export interface LiabilityItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DDLiabilitySectionProps {
  title?: string;
  subTitle?: string;
  items?: LiabilityItem[];
}

const defaultItems: LiabilityItem[] = [
  {
    id: "proving-bac-exceeded-limit",
    title: "Proving Driver's BAC Exceeded Legal Limit",
    description:
      "We use chemical testing records to confirm blood alcohol concentration at or above statutory limits and establish legal intoxication. We prove elevated blood alcohol levels and establish statutory negligence per se under Florida motor vehicle operation laws. We use official toxicology reports for primary scientific evidence during summary judgment motions regarding liability. Establishing chemical impairment limits defense opportunities to dispute driver fault for collisions.",
    icon: <FaVial className="w-5 h-5 text-primary" />,
  },
  {
    id: "documentation-impaired-driving",
    title: "Documentation of Impaired Driving",
    description:
      "We use reports from law officers' observations of drunk driver’s slurred speech, smell of alcohol and bloodshot eyes as physical impairment. Videos from dashing camera showed driver’s driving condition. Witness statements detailing erratic vehicle operation prior to impacts reinforce officer field observations. We use physical impairment behavior documentation to establish clear gross negligence supporting punitive damage claims.",
    icon: <FaVideo className="w-5 h-5 text-primary" />,
  },
  {
    id: "police-report-dui-arrest-records",
    title: "Police Report and DUI Arrest Records",
    description:
      "We use official crash reports to capture police fault determinations. This report provides foundational evidence supporting civil claims. DUI arrest affidavits document officer field sobriety test administration and subsequent criminal booking details. Criminal court charging documents confirm formal prosecution for impaired motor vehicle operation offenses. Arrest records provide immediate access to law enforcement officer contact details and official evidence logs.",
    icon: <FaFileAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "expert-testimony-impairment",
    title: "Expert Testimony on Driver Impairment",
    description:
      "We hire toxicology experts to explain what alcohol does as it enters the bloodstream and impairs cognitive, vision and response abilities. Our hired experts perform retrograde extrapolation calculations proving exact BAC levels at the moment collisions occurred. Scientific testimony connects specific blood alcohol levels to severe motor skill degradation and crash causation. Expert witness authority counteracts defense claims and we use it to show drivers operated vehicles safely despite alcohol consumption.",
    icon: <FaUserTie className="w-5 h-5 text-primary" />,
  },
  {
    id: "erratic-reckless-driving",
    title: "Evidence of Erratic or Reckless Driving",
    description:
      "Unbiased witness statements provide strong corroboration regarding dangerous driving behavior preceding crashes. Witnesses may testify to a driver’s swerving, driving without headlights, speeding, or failure to yield the right of way before collision. Testimony of neutral witnesses may be of importance to the civil court jury that determines the distribution of liability. Our attorney Drew preserves witness statements early. He ensures reliable testimony remains available throughout litigation and higher chance for damage claims.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "toxicology-lab-results",
    title: "Toxicology and Lab Analysis Results",
    description:
      "State certified laboratory toxicology results provide precise chemical quantification of alcohol or drug concentrations. Laboratory chain of custody records confirm that the sample was properly collected and testing procedures were followed precisely. The toxicology report determines which prescription drugs or illegal drugs are causing the driver to be under the influence of alcohol. We use these lab results for scientific proof to support civil arguments of statutory negligence per se.",
    icon: <FaFlask className="w-5 h-5 text-primary" />,
  },
  {
    id: "previous-drunk-driving-convictions",
    title: "Previous Drunk Driving Convictions",
    description:
      "We use certified criminal background check to reveal any prior DUI convictions, license suspensions or habitual offender status. Prior conviction evidence strongly supports punitive damage motions under Florida civil litigation standards. Juries evaluate prior offense history when determining appropriate punitive damage award amounts. We uncover offender history for immense legal leverage during civil settlement negotiations with carriers.",
    icon: <FaHistory className="w-5 h-5 text-primary" />,
  },
];

export default function DDLiabilitySection({
  title = "Establishing Negligence and Liability in Drunk Driving Claims",
  subTitle = "Proving negligence in a drunk driving case requires connecting impairment directly to the cause of your crash. Florida law makes this connection easier to establish than in many other injury cases.",
  items = defaultItems,
}: DDLiabilitySectionProps) {
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
              <FaShieldAlt className="w-4 h-4 text-primary" />
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
