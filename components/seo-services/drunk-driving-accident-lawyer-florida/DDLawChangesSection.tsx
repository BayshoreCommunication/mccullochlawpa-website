"use client";

import React from "react";
import {
  FaVial,
  FaIdCard,
  FaGavel,
  FaCoins,
  FaBalanceScale,
  FaGlassMartiniAlt,
  FaKey,
  FaExclamationTriangle,
} from "react-icons/fa";

export interface LawChangeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DDLawChangesSectionProps {
  title?: string;
  subTitle?: string;
  items?: LawChangeItem[];
}

const defaultItems: LawChangeItem[] = [
  {
    id: "implied-consent-testing",
    title: "Implied Consent and Blood Alcohol Testing",
    description:
      "Florida’s Implied Consent Laws are laws that require drivers to submit to a lawful chemical test if there is an issue of driving under the influence. Refusing to take the test may lead to the driver’s license being suspended. Civil courts allow jury inferences regarding driver consciousness of guilt when testing is refused. Toxicology evidence gathered under implied consent statutes provides foundational proof of legal intoxication levels.",
    icon: <FaVial className="w-5 h-5 text-primary" />,
  },
  {
    id: "license-suspension-hearings",
    title: "License Suspension and Hearings",
    description:
      "DUI arrests trigger swift administrative license suspensions independent of formal criminal court proceedings. Impaired drivers face immediate driving privilege revocation affecting personal mobility and commercial driver status. Administrative hearing records capture early law enforcement officer testimony regarding driver impairment signs. Civil attorneys subpoena administrative hearing transcripts to secure sworn testimony before criminal trial proceedings begin.",
    icon: <FaIdCard className="w-5 h-5 text-primary" />,
  },
  {
    id: "mandatory-minimum-penalties",
    title: "Mandatory Minimum Penalties",
    description:
      "Statutes of Florida require imposition of the mandatory criminal penalties such as fines, probation, community service and jail time. In addition courts usually order DUI school and alcohol counseling for those convicted. Mandatory penalties create official public records establishing clear driver culpability and reckless conduct history. Civil legal counsel utilizes criminal sentencing records to prove driver conscious disregard for public safety.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "increased-damages-illegal-behavior",
    title: "Increased Damages for Illegal Driver Behavior",
    description:
      "Operating motor vehicles while heavily intoxicated constitutes willful and wanton misconduct under Florida law. Proving illegal driver behavior unlocks enhanced damage remedies beyond standard auto liability coverage limits. Uncapped punitive damage claims penalize drivers while creating direct financial exposure against personal assets. Insurance carriers face heightened pressure to settle within policy limits to shield insureds from personal judgments.",
    icon: <FaCoins className="w-5 h-5 text-primary" />,
  },
  {
    id: "criminal-conviction-negligence-proof",
    title: "Criminal Conviction as Negligence Proof",
    description:
      "A criminal DUI conviction establishes statutory negligence per se within civil court compensation lawsuits. Convictions eliminate the legal necessity of proving breach of duty during civil liability determinations. Civil proceedings focus primarily upon establishing total damage extent rather than disputing driver liability. Certified criminal court disposition judgments are introduced as conclusive evidence of defendant negligence.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "dram-shop-liability-third-party",
    title: "Dram Shop Liability and Third Party Roles",
    description:
      "Florida dram shop statutes limit establishment liability except when serving minors or habitually addicted persons. Proving commercial venues knowingly served habitually addicted patrons unlocks third party commercial insurance policies. Attorneys gather credit card receipts, bar surveillance footage  and witness testimony confirming vendor over service. Pursuing dram shop claims provides vital additional insurance coverage when drunk drivers carry minimal liability limits.",
    icon: <FaGlassMartiniAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "ignition-interlock-tampering",
    title: "Ignition Interlock and Tampering Charges",
    description:
      "Convicted DUI drivers must install mandatory ignition interlock devices preventing vehicle operation during alcohol impairment. Driving without required interlock devices or tampering with equipment constitutes additional criminal statutory violations. Violating interlock mandates establishes continuous reckless patterns of behavior supporting punitive damage claims. Attorneys review interlock data logs to verify whether drivers operated vehicles in violation of restrictions.",
    icon: <FaKey className="w-5 h-5 text-primary" />,
  },
  {
    id: "dui-repeat-offender-insurance",
    title: "DUI Repeat Offender and Insurance Effects",
    description:
      "Repeat DUI convictions expose drivers to severe felony charges, extended prison sentences  and permanent license revocations. Multiple offenses demonstrate established behavioral patterns supporting higher punitive damage jury awards. Insurance carriers reclassify repeat offenders into high risk categories or cancel coverage policies entirely. Identifying repeat offender status increases legal leverage during civil settlement negotiations with insurance carriers.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
];

export default function DDLawChangesSection({
  title = "How Florida's DUI Laws Impact Your Accident Claim",
  subTitle = "Florida's DUI statutes changed meaningfully over the past two years and those changes directly affect civil claims tied to impaired driving.",
  items = defaultItems,
}: DDLawChangesSectionProps) {
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
