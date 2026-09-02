"use client";

import React from "react";
import {
  FaHandshake,
  FaFileContract,
  FaHourglassHalf,
  FaMicrophoneSlash,
  FaExclamationTriangle,
  FaVideo,
  FaUserMd,
  FaShieldAlt,
} from "react-icons/fa";

export interface DevalueItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CILDevalueSectionProps {
  title?: string;
  subTitle?: string;
  items?: DevalueItem[];
}

const defaultItems: DevalueItem[] = [
  {
    id: "early-lowball-settlement",
    title: "Early Lowball Settlement",
    description:
      "Insurance adjusters present fast settlement offers before victims understand the total extent of injuries. Early release agreements forever extinguish legal rights to claim necessary future medical funds. Accepting premature cash offers leaves injured victims financially responsible for extensive lifetime care expenses.",
    icon: <FaHandshake className="w-5 h-5 text-red-500" />,
  },
  {
    id: "disputing-injury-severity",
    title: "Disputing Injury Severity",
    description:
      "Defense claims adjusters routinely argue that traumatic brain damage or spinal injuries are minor. Insurers claim subjective pain complaints lack diagnostic proof despite clear radiological imaging evidence. Overcoming insurer minimization requires consistent medical treatment history and detailed expert medical testimony.",
    icon: <FaFileContract className="w-5 h-5 text-red-500" />,
  },
  {
    id: "delaying-claims",
    title: "Delaying Claims",
    description:
      "Commercial insurers deliberately prolong claims processing timelines to inflict personal financial stress on victims. Extended delays pressure vulnerable claimants into accepting reduced settlement offers out of financial desperation. Experienced trial counsel counters insurance delays by filing lawsuits to enforce strict court deadlines.",
    icon: <FaHourglassHalf className="w-5 h-5 text-red-500" />,
  },
  {
    id: "using-statements-against-you",
    title: "Using Your Statements Against You",
    description:
      "Claims adjusters request recorded phone interviews structured to elicit damaging admissions from vulnerable victims. Innocent casual comments regarding personal physical recovery are manipulated to dispute severe injury claims. Claimants should refuse recorded interviews until retaining an experienced catastrophic injury trial lawyer.",
    icon: <FaMicrophoneSlash className="w-5 h-5 text-red-500" />,
  },
  {
    id: "blaming-you-at-fault",
    title: "Blaming You At-Fault",
    description:
      "Defense lawyers exploit Florida's modified comparative fault law by assigning primary accident blame to victims. Assigning over 50 percent fault to an injured victim eliminates insurance liability entirely. Rebutting comparative fault allegations requires immediate physical evidence preservation and expert accident reconstruction.",
    icon: <FaExclamationTriangle className="w-5 h-5 text-red-500" />,
  },
  {
    id: "surveillance-tactics",
    title: "Surveillance Tactics",
    description:
      "Insurance companies hire private investigator teams to record video surveillance of injured claimants continuously. Investigators capture brief video clips of victims performing simple daily tasks completely out of context. Defense attorneys present selective surveillance footage in court to question victim honesty and disability.",
    icon: <FaVideo className="w-5 h-5 text-red-500" />,
  },
  {
    id: "imes-and-their-bias",
    title: "IMEs and Their Bias",
    description:
      "Insurers compel claimants to submit to independent medical examinations conducted by defense-retained physicians. Paid defense doctors frequently generate biased reports claiming victims are fully healed or uninjured. Rigorous cross-examination exposes financial defense conflicts of interest and invalidates biased medical reports.",
    icon: <FaUserMd className="w-5 h-5 text-red-500" />,
  },
];

export default function CILDevalueSection({
  title = "How Insurance Companies Devalue Catastrophic Injury Claims",
  subTitle = "Insurance companies protect their own bottom line first. Recognizing their tactics is the first step toward preventing devaluing claims.",
  items = defaultItems,
}: CILDevalueSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

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
