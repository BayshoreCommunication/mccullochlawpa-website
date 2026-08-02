"use client";

import React from "react";
import {
  FaGavel,
  FaCalendarCheck,
  FaClipboardCheck,
  FaBan,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock,
  FaVoteYea,
  FaIdCard,
  FaCar,
  FaGlobe,
} from "react-icons/fa";

export interface PenaltyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CDPenaltiesSectionProps {
  title?: string;
  description1?: string;
  description2?: string;
  penalties?: PenaltyItem[];
}

const defaultPenalties: PenaltyItem[] = [
  {
    id: "second-degree-misdemeanor",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Second Degree Misdemeanor",
    description:
      "A second degree misdemeanor brings sixty days in the Hillsborough County jail. Florida defendants will also face a maximum fine of five hundred dollars. Petit theft under one hundred dollars and disorderly conduct fall into this category. These arrests don't leave background checks unless a judge agrees to seal them. Our defense team treats these charges seriously because convictions create lasting criminal records.",
  },
  {
    id: "first-degree-misdemeanor",
    icon: <FaCalendarCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "First Degree Misdemeanor",
    description:
      "Charges for first degree offenses can carry up to 364 days in jail. The state also imposes a maximum fine of one thousand dollars here. Lawmakers lowered the maximum sentence from a full year to protect immigrants. Sentences over 365 days trigger automatic federal deportation proceedings for non citizens. Battery charges and first offense DUI convictions commonly fill this specific classification.",
  },
  {
    id: "third-degree-felony",
    icon: <FaExclamationTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Third Degree Felony",
    description:
      "Third degree felonies carry up to five years inside a Florida state prison. The court can also impose a steep fine reaching five thousand dollars instead. Drug possession, grand theft and aggravated assault frequently trigger these felony charges. This category remains the lowest felony degree eligible for a withhold of adjudication.",
  },
  {
    id: "second-degree-felony",
    icon: <FaGavel className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Second Degree Felony",
    description:
      "Second degree felonies bring up to fifteen years directly inside a state prison. Judges can also order a massive fine of ten thousand dollars maximum. These penalties can be imposed for crimes such as aggravated assault, battery with a weapon, armed burglary. Under state sentencing guidelines judges have some discretion in deciding punishment for crime. A Criminal defense lawyer tampa fl builds mitigation packages to secure minimum sentences.",
  },
  {
    id: "first-degree-felony",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "First Degree Felony",
    description:
      "First degree felonies carry harsh penalties up to thirty years in state prison. Some specific criminal offenses at this high level are punishable by life sentences. Armed robbery and certain sexual battery charges commonly reach this specific legal classification. Prosecutors must prove specific facts to bridge the gap toward a life sentence.",
  },
  {
    id: "life-capital-felony",
    icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Life Felony Or Capital Felony",
    description:
      "Life felonies bring life sentences and fifteen thousand dollar fines without death penalties. Capital felonies like premeditated first degree murder can bring the Florida death penalty. These complex capital cases require defense resources far beyond a standard felony case. The defense team brings in forensic and mitigation experts immediately for these charges.",
  },
  {
    id: "loss-voting-rights",
    icon: <FaVoteYea className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Loss Of Voting Rights",
    description:
      "A felony conviction disables you from voting until you finish serving your sentence. This includes finishing your prison term, probation and restitution or payment of any court ordered fines. Restoring your voting rights afterwards requires a formal application through the clemency process. The firm advises clients on this process when planning beyond the case itself.",
  },
  {
    id: "inability-possess-firearms",
    icon: <FaBan className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Inability To Possess Firearms",
    description:
      "Florida and federal laws bar convicted felons from possessing firearms for their lifetime. This restriction applies even to hunting rifles or firearms kept for home protection. Violating this firearm ban after a conviction creates a brand new felony charge.",
  },
  {
    id: "suspension-professional-licenses",
    icon: <FaIdCard className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Suspension Of Professional Licenses",
    description:
      "Florida licensing boards regularly suspend or revoke professional licenses following related criminal convictions. Nurses, real estate agents and contractors face board reviews for unrelated criminal charges. Some disciplinary boards take immediate action on an arrest before any conviction occurs.",
  },
  {
    id: "revoke-driving-privileges",
    icon: <FaCar className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Revoke Driving Privileges",
    description:
      "Certain Florida convictions trigger automatic driver's license suspensions even for totally unrelated offenses. Drug convictions carry a mandatory license suspension under Florida Statute 322.055 automatically. DUI convictions add their own separate suspension periods on top of criminal penalties. Lawyers look for ways to preserve driving privileges whenever underlying charges allow it.",
  },
  {
    id: "potential-deportation",
    icon: <FaGlobe className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Potential Deportation",
    description:
      "Non citizens convicted of aggravated felonies or moral turpitude crimes face federal removal. Even a withhold of adjudication counts as a conviction for federal immigration purposes. This reality makes plea negotiations far more complicated for any non citizen defendant. McCulloch Law P.A. works alongside immigration counsel to limit total exposure whenever possible.",
  },
  {
    id: "denial-of-citizenship",
    icon: <FaGlobe className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Denial Of Citizenship For Non Citizens",
    description:
      "Certain criminal convictions prevent applicants from meeting good moral character requirements for naturalization. Some offenses create temporary bars, while more serious convictions block your citizenship permanently. This consequence surprises clients who assumed their cases were fully resolved years earlier. Our firm won't ignore these serious risks before a plea gets entered.",
  },
];

export default function CDPenaltiesSection({
  title = "What Penalties Does Criminal Charge Carry in Tampa?",
  description1 = "Florida ranks criminal offenses by degree. Each degree carries a specific maximum sentence and fine.",
  description2 = "",
  penalties = defaultPenalties,
}: CDPenaltiesSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-8 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            {description1}
          </p>
          {description2 && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1 max-w-3xl font-sans">
              {description2}
            </p>
          )}
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {penalties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 lg:gap-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-full flex flex-col items-start shrink-0">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 group-hover:w-20 h-[2px] bg-primary/70 rounded-full mb-3 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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
