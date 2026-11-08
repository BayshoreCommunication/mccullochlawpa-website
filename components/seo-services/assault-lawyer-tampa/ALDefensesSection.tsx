"use client";

import React from "react";
import {
  FaShieldAlt,
  FaUserShield,
  FaHome,
  FaHandshake,
  FaBrain,
  FaEyeSlash,
  FaClock,
  FaUserTimes,
  FaComments,
  FaExclamationCircle,
  FaBalanceScale,
} from "react-icons/fa";

export interface DefenseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ALDefensesSectionProps {
  title?: string;
  subTitle?: string;
  items?: DefenseItem[];
}

const defaultDefenses: DefenseItem[] = [
  {
    id: "stand-your-ground",
    title: "Florida's Stand Your Ground Law or Self Defense",
    description:
      "Stand your Ground under Florida law applies to the use of defensive force in the context of the facts described in the statute. It does not license any and all acts of threat and use of force in a confrontation. The facts and statute requirements control.\n\nFlorida law permits someone to use or threaten to use nondeadly force if the person reasonably believes that such force is necessary to prevent an unlawful force from another person. Use of deadly force involves stricter conditions under Florida Statutes § 776.012. A self defense claim may involve the other person's actions, the timing of the threat, the danger and the defendant's reasonableness at the time.",
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
  },
  {
    id: "defense-of-others",
    title: "Defense of Others",
    description:
      "The person may also, from time to time, protect another person from unlawful force using lawful defensive force. The legal requirements depend upon the situation and the degree of force used. This will analyze the nature of the threat and the actions taken by each of the persons, the timing of the intervention and the evidence that would support that intervention.",
    icon: <FaUserShield className="w-5 h-5 text-primary" />,
  },
  {
    id: "defense-of-property",
    title: "Defense of Property",
    description:
      "Florida law permits certain uses or threats of nondeadly force to prevent or stop unlawful interference with property, subject to statutory requirements. Deadly force carries much stricter limits. A property dispute does not automatically justify a threat of violence. We examine the conduct, the alleged danger and the relevant statutory provisions before assessing this defense.",
    icon: <FaHome className="w-5 h-5 text-primary" />,
  },
  {
    id: "consent-mutual-confrontation",
    title: "Consent or Mutual Confrontation",
    description:
      "Evidence of a mutual confrontation may affect the accounts of the people involved. However, an agreement to fight does not automatically excuse an unlawful threat. We examine the sequence of events, each person's actions and the credibility of the available accounts.",
    icon: <FaHandshake className="w-5 h-5 text-primary" />,
  },
  {
    id: "lack-of-required-intent",
    title: "Lack of Required Intent",
    description:
      "Simple assault requires an intentional, unlawful threat of violence. An accidental movement or an argument without the required threat may fail to meet the statutory elements. We compare the alleged conduct with the legal definition of assault. The state must prove the required intent and other elements beyond a reasonable doubt.",
    icon: <FaBrain className="w-5 h-5 text-primary" />,
  },
  {
    id: "disputing-threat-or-fear",
    title: "Disputing the Alleged Threat or Immediate Fear",
    description:
      "A defense may challenge the claim of an immediate threat, the apparent ability to carry it out or the alleged victim's reasonable fear of imminent violence. For example, video may show significant distance between the people involved. However messages may place a threatening statement in a different context. The full evidence matters; no single detail decides every case.",
    icon: <FaEyeSlash className="w-5 h-5 text-primary" />,
  },
  {
    id: "alibi",
    title: "Alibi",
    description:
      "A valid alibi can challenge the state's claim as to the subject's location at the time of the incident. For example, receipts, employment records, cell phone or vehicle GPS data, security cam footage and direct eyewitness accounts all support an alibi that can take into consideration whether or not the evidence was gathered quickly.",
    icon: <FaClock className="w-5 h-5 text-primary" />,
  },
  {
    id: "mistaken-identity",
    title: "Mistaken Identity",
    description:
      "The offence could occur in an overcrowded or dark place leaving it open for an error of identification. By attacking these factors, for example, the circumstances of viewing, distance, period of viewing, previous familiarity with the individual and differences in between first descriptions and later descriptions, the defense has the chance to weaken the identification evidence.",
    icon: <FaUserTimes className="w-5 h-5 text-primary" />,
  },
  {
    id: "challenging-witness-testimony",
    title: "Challenging Witness Testimony",
    description:
      "The witness's words, his position relative to the accused, his proximity to the accused, the order of actions, what the witness is said to have seen and/or the nature of the threat may not agree. The comparison of the statement to the recording, message, time stamp and evidence is made. It is material whether the contradiction matters.",
    icon: <FaComments className="w-5 h-5 text-primary" />,
  },
  {
    id: "duress-or-necessity",
    title: "Duress or Necessity",
    description:
      "Duress or necessity might be used for limited cases in which there is a substantial risk or immediate need to prevent an undesirable result. Both duress and necessity require particular legal conditions and not all struggles demand such. Both arguments are analyzed to determine whether any or all of them is applicable to the case.",
    icon: <FaExclamationCircle className="w-5 h-5 text-primary" />,
  },
  {
    id: "unlawful-police-procedures",
    title: "Unlawful Police Procedures",
    description:
      "The police are subject to the legal regulations concerning stops, searches, interviews and collection of evidence. If a person's constitutional rights have been violated, this may be the basis of a motion to suppress certain evidence. When police are involved in any type of contact, information, searches and searches to obtain evidence are reviewed carefully. Although an error of procedure does not automatically eliminate the case, it may impact on what the prosecutor is able to present.",
    icon: <FaBalanceScale className="w-5 h-5 text-primary" />,
  },
];

export default function ALDefensesSection({
  title = "Possible Defenses Against Assault Charges",
  subTitle = "The defense depends on the specifics of the accusation, the evidence at hand and the law. The state of the state's accusations are carefully looked at and the appropriate legal arguments are applied to the case.",
  items = defaultDefenses,
}: ALDefensesSectionProps) {
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
              <FaShieldAlt className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        {/* DEFENSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-amber-500/5" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

