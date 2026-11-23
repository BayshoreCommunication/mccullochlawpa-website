"use client";

import React from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHeartBroken,
  FaLock,
  FaUserShield,
  FaBan,
  FaVoteYea,
  FaChild,
  FaBriefcase,
  FaFileArchive,
  FaHome,
  FaClock,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BLPenaltiesSectionProps {
  title?: string;
  subTitle?: string;
  items?: PenaltyItem[];
}

const defaultPenalties: PenaltyItem[] = [
  {
    id: "simple-battery",
    title: "Simple Battery (Misdemeanor Battery)",
    description:
      "Florida generally treats this offense as a first degree misdemeanor under § 784.03, which might include jail time in a county jail for up to one year, a maximum fine of $1,000 or both. The court can order probation, community service, restitution or anything else permissible under the law. A misdemeanor conviction could remain on a person's criminal record and perhaps hinder employment or background screening. Florida typically restricts sealing or expunging records after a guilty plea or verdict, unless otherwise instructed by law.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "felony-battery",
    title: "Felony Battery",
    description:
      "Felony battery under § 784.041 is usually a third degree felony. The longest term of imprisonment is five years and the longest term of fine is $5,000. Probation, restitution and other conditions may be considered by the court depending on the circumstances of the case. The injury is a key part of this charge. The information can be examined by the defense: medical history, location and timing of symptoms, expert opinions where necessary and any evidence tying the injury to the incident.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "aggravated-battery",
    title: "Aggravated Battery",
    description:
      "Aggravated battery is a second degree felony under the Florida laws described in § 784.045. A conviction for this offense can result in up to 15 years in prison and a fine of up to $10,000. The court can order restitution and other penalty considerations under the law. The law also applies other consequences to aggravated battery cases that deal with certain circumstances, such as § 784.08 dealing with an aggravated battery with a person 65 or older.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "domestic-battery",
    title: "Domestic Battery",
    description:
      "A battery offense involving a qualifying family or household relationship may trigger additional sentencing requirements. If the court finds the defendant committed a predicate offense and committed bodily injury, section 741.283 requires, for a first offense, a minimum 10 days in jail for a first offense, 15 days for a second and 20 days for a third or subsequent if the act was willful, with statutory exceptions. (All cases must have at least one year of probation and batterers' intervention program under section 741.281.) The court retains authority under the statute to decide whether the program requirement is inappropriate in a particular case and must state its reasons on the record.",
    icon: <FaHeartBroken className="w-5 h-5 text-primary" />,
  },
  {
    id: "sexual-battery",
    title: "Sexual Battery",
    description:
      "The penalty for sexual battery varies depending on which subsection of § 794.011 the prosecution alleges you committed, the act you are accused of committing, the age of the parties involved and other legal factors. For some offenses, the penalties include up to life in prison and you may be required to register as a sex offender or sex predator, which includes reporting restrictions and other limitations. This means not every claim of sexual battery has the same penalties and registration requirements.",
    icon: <FaLock className="w-5 h-5 text-primary" />,
  },
  {
    id: "battery-protected-person",
    title: "Battery of a Protected Person",
    description:
      "A battery charge involving a protected person may carry enhanced penalties under §§ 784.07 or 784.08. For example, certain battery allegations involving a law enforcement officer or specified personnel performing official duties can become third degree felonies. Battery against a person age 65 or older can also receive felony reclassification under the statutory conditions. The applicable penalty depends on the alleged victim's status, the accused's conduct and the specific statute. Some aggravated battery cases involving older victims carry mandatory prison terms and additional financial obligations.",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "federal-firearm-ban",
    title: "Federal Firearm Ban",
    description:
      "A qualifying domestic violence related misdemeanor conviction can trigger federal firearm prohibitions. In addition, statutory law in Florida prohibits a person subject to certain, final domestic violence related injunctions from possessing a firearm under section § 790.233. It is important to understand that not every domestic battery arrest requires the imposition of firearm prohibitions but rather depends on the conviction, relationship, the statutory elements and any court ordered injunction.",
    icon: <FaBan className="w-5 h-5 text-primary" />,
  },
  {
    id: "loss-of-civil-rights",
    title: "Loss of Civil Rights",
    description:
      "Certain felony convictions can affect civil rights and firearm eligibility. Florida's rights restoration rules depend on the offense, sentence and completion of applicable obligations. A battery arrest alone does not automatically remove all civil rights. The final disposition and any separate legal restrictions matter.",
    icon: <FaVoteYea className="w-5 h-5 text-primary" />,
  },
  {
    id: "limiting-child-custody",
    title: "Limiting Child Custody",
    description:
      "Child custody decisions and parenting plans are governed by the best interests of the child standard, which family courts decide using all relevant evidence of domestic violence. A charge alone does not determine custody. The court will look at the evidence and relevant Florida law in the custody case.",
    icon: <FaChild className="w-5 h-5 text-primary" />,
  },
  {
    id: "employment-restrictions",
    title: "Employment Restrictions",
    description:
      "An employer can review an applicant's criminal record as part of the hiring process. Being convicted of battery can also impact licensing in a job that requires some type of criminal background check. The effect can vary depending upon the profession, the convicted individual's specific history, the licensing requirements and the employer's policies. Not every applicant who is convicted can be disqualified.",
    icon: <FaBriefcase className="w-5 h-5 text-primary" />,
  },
  {
    id: "seal-or-expunge-ban",
    title: "Seal or Expunge Ban",
    description:
      "In Florida, the general rule is that a record cannot be sealed or expunged once a person has been found guilty. Specific statutorily defined crimes are the exception to this rule and there are specific statutory limitations for record relief after a withheld adjudication depending on the crime and other statutory qualifications. An attorney can look at the disposition of the case and the applicable statutory requirements to advise on record relief.",
    icon: <FaFileArchive className="w-5 h-5 text-primary" />,
  },
  {
    id: "residency-restrictions",
    title: "Residency Restrictions",
    description:
      "Residency restrictions may apply to people subject to qualifying sex offender or sexual predator laws. These restrictions do not follow every battery conviction. The specific offense, registration status and applicable state or local rules determine any restrictions.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "lifetime-supervision",
    title: "Lifetime Supervision",
    description:
      "Some qualifying sexual offenses require an additional period of probation, post release supervision or registration. Others have a permanent requirement when specific conditions are met. Not all convictions for simple battery are automatically subject to lifetime supervision.",
    icon: <FaClock className="w-5 h-5 text-primary" />,
  },
];

export default function BLPenaltiesSection({
  title = "What Penalties and Consequences Does Battery Conviction Have?",
  subTitle = "Florida sets different penalties for misdemeanor battery, felony battery, aggravated battery and related offenses. The sentence depends on the charge, the facts, prior convictions and applicable sentencing laws.",
  items = defaultPenalties,
}: BLPenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {subTitle}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaGavel className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 13 PENALTIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((penalty, idx) => (
            <div
              key={penalty.id}
              className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 12 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    {penalty.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {penalty.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {penalty.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
