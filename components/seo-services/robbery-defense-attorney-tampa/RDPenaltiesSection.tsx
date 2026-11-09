"use client";

import React from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaExclamationTriangle,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaLayerGroup,
  FaVoteYea,
  FaBan,
  FaBriefcase,
  FaHome,
  FaPassport,
  FaHandHoldingHeart,
} from "react-icons/fa";

export interface RobberyPenaltyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RDPenaltiesSectionProps {
  title?: string;
  subTitle?: string;
  items?: RobberyPenaltyItem[];
}

const defaultPenalties: RobberyPenaltyItem[] = [
  {
    id: "substantial-prison-time",
    title: "Substantial Prison Time",
    description:
      "Robbery does not involve the use of a firearm, deadly weapon or other instrument qualifies as a second degree felony and is punishable by up to 15 years. Home invasion robbery and carjacking are separately defined by statute. Convictions for these crimes are subject to the sentencing scheme of Florida's Criminal Punishment Code, where the nature of the current offense, the offender's criminal history, injury to the victim and other legally relevant factors are used to determine the appropriate sentence.",
    icon: <FaGavel className="w-5 h-5 text-primary" />,
  },
  {
    id: "10-20-life-law",
    title: "10/20 Life law",
    description:
      "Florida's 10/20 Life law, outlined under § 775.087(2), establishes the minimum prison sentence for certain class of felony crimes which committed a crime using a firearm. A ten year sentence applies if the person had a firearm when committing a qualifying felony. A 20 year sentence applies if the firearm was discharged during the offense. A 25 year to life sentence applies if the discharge of the firearm causes death or great bodily harm. The allegation of a firearm must satisfy all the requirements of the statute. The use of a knife, common object or other weapon than a firearm does not trigger the 10/20 Life firearm minimums.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-primary" />,
  },
  {
    id: "extensive-probation-parole",
    title: "Extensive Probation or Parole",
    description:
      "A robbery conviction may result in probation, prison followed by probation or other post release supervision, depending on the sentence and applicable law. Probation can impose strict conditions. A judge may require regular reporting, employment, travel restrictions, drug testing, restitution payments and compliance with “no contact” orders. Some older offenses and specific statutory categories retain parole eligibility. Most modern robbery cases do not follow an ordinary parole process. A violation of probation can lead to a separate court hearing and possible revocation. The judge may impose additional penalties within the limits of the law.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "heavy-financial-fines",
    title: "Heavy Financial Fines",
    description:
      "Florida courts in addition to incarceration or probation. For first degree or second degree felonies, the fine is $10,000 and for a life felony, the fine is $15,000. The statute also allows a higher fine if appropriate, which may equal twice the gain derived from the crime or twice the loss to the victim. Depending on the nature of the crime and the applicable sentencing statutes, the courts will decide the appropriate fine for each crime. Financial impact may be greater if the court orders restitution.",
    icon: <FaFileInvoiceDollar className="w-5 h-5 text-primary" />,
  },
  {
    id: "mandatory-restitution",
    title: "Mandatory Restitution",
    description:
      "Florida Statutes § 775.089 requires courts routinely award restitution for damages directly or indirectly inflicted by the crime or in the course of the criminal episode. The court can only deny restitution for clear and compelling reasons. Stolen property, damaged items, medical expenses, rehab costs, lost wages and other identifiable damages may be included in the restitution order. If the crime results in bodily injury, the court can also include necessary medical costs and related professional fees. Restitution can be ordered to be paid in an installment schedule or by a certain deadline. If not paid, restitution may be enforced as a civil judgment and the defendant may face more serious penalties.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
  {
    id: "risk-of-stacking-sentences",
    title: "Risk of Stacking Sentences",
    description:
      "Multiple convictions can expose you to separate prison terms. Florida Statutes § 921.16 generally provides for concurrent sentences when the court charges multiple offenses in the same charging document. Unless the judge directs consecutive sentences. The court may therefore order consecutive terms in appropriate circumstances. For example, fraud and robbery generally involve different statutory elements. Fraud related offenses require proof of deception or a fraudulent scheme, along with the applicable intent.",
    icon: <FaLayerGroup className="w-5 h-5 text-primary" />,
  },
  {
    id: "loss-of-constitutional-rights",
    title: "Loss of Constitutional Rights",
    description:
      "A felony conviction in Florida could lead to the loss of many of your civil rights. Generally, someone convicted of a felony in Florida loses the right to vote until the completion of his or her sentence, pursuant to Florida restoration laws. The right to vote can be restored after someone completes his or her sentence, including incarceration, probation, and any other factors that are court-ordered. If you are convicted of a murder or a felony sexual offense, then your rights to vote can be restored through clemency. A felon may be disqualified from sitting on a jury or holding elected office.",
    icon: <FaVoteYea className="w-5 h-5 text-primary" />,
  },
  {
    id: "permanent-loss-firearm-rights",
    title: "Permanent Loss of Firearm Rights",
    description:
      "Florida Statutes § 790.23 generally prohibit convicted felons from possessing, owning or controlling firearms or ammunition. A robbery felony conviction can therefore create a long term firearm restriction. The restriction may continue after release from prison. A person cannot assume probation completion or sentence completion automatically restores firearm rights. Some individuals may qualify for formal restoration under Florida law. Federal firearm restrictions may apply separately.",
    icon: <FaBan className="w-5 h-5 text-primary" />,
  },
  {
    id: "severe-employment-barriers",
    title: "Severe Employment Barriers",
    description:
      "Conviction may impact you when applying for a new job, when obtaining employment screening or when seeking a professional license: Nature of the conviction, when it happened, types of job duties, hiring rules. The consequences can be more severe if the job involves handling money, public safety, public trust or caring for a fragile group or requires a license. Some licensing agencies look at felony convictions when they approve, disapprove or renew licenses.",
    icon: <FaBriefcase className="w-5 h-5 text-primary" />,
  },
  {
    id: "housing-rejections",
    title: "Housing Rejections",
    description:
      "Landlords and property managers commonly look at a person's criminal history when screening rental applications. Someone who has been convicted of robbery may not fare as well in housing screenings, particularly for units with restrictive criminal history policies. Different federal housing and public housing programs have their own rental standards. Not all programs automatically reject everyone with a robbery conviction, but the nature of the conviction and program requirements could have an impact.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "immigration-deportation",
    title: "Immigration Deportation",
    description:
      "A non-citizen with a conviction for robbery can face a lot of immigration trouble. It will depend on the statute of conviction, the sentence and the record of the conviction. The federal statute could look at the crime as a crime of moral turpitude or an aggravated felony. Aggravated felonies could trigger removal as well as deny future immigration benefits. As violent crimes can be aggravated felonies when the sentence is at least one year in prison, the federal law looks at the elements and the sentence. Also, the plea agreement may be significant for the non citizen's immigration status.",
    icon: <FaPassport className="w-5 h-5 text-primary" />,
  },
  {
    id: "loss-of-government-benefits",
    title: "Loss of Government Benefits",
    description:
      "Robbery convictions may not lead to complete loss of all government benefits. However, incarceration, supervision conditions and program eligibility limitations may impact availability of particular benefits. Public housing assistance, employment related programs and other government services may apply separate criminal history or incarceration rules. Financial obligations from the criminal case may also affect your ability to meet program requirements.",
    icon: <FaHandHoldingHeart className="w-5 h-5 text-primary" />,
  },
];

export default function RDPenaltiesSection({
  title = "What Penalties and Consequences Does Robbery Conviction Have?",
  subTitle = "A robbery conviction can carry heavy sentences of imprisonment, mandatory minimum sentences, fines, reparation and long term restrictions. However, a prosecutor can charge a person with fraud, robbery and battery or assault all in the same criminal case if these offenses were committed during the same transaction, event or act. Florida Rule of Criminal Procedure 3.150 sets out when a prosecutor can merge multiple crimes into two or more \"offense counts.\"",
  items = defaultPenalties,
}: RDPenaltiesSectionProps) {
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
              <FaBalanceScale className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* 12 PENALTIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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

