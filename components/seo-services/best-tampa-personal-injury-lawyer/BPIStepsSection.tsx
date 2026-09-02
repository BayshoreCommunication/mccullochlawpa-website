"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaCamera,
  FaIdCard,
  FaUsers,
  FaFileAlt,
  FaMicrophoneSlash,
  FaUserMd,
  FaReceipt,
  FaPhone,
  FaShieldVirus,
} from "react-icons/fa";

export interface StepItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface BPIStepsSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
  items?: StepItem[];
}

const defaultItems: StepItem[] = [
  {
    id: "call-911-medical-care",
    icon: <FaPhoneAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Call 911 and Get Medical Care First",
    description:
      "After accident call 911 and get medical help first. Immediate call brings emergency medical technicians and police officers to your location. Paramedics assess physical trauma quickly. If severely injured, they transport victims to local emergency rooms. Official law enforcement officers control traffic and write detailed formal crash reports. Prompt emergency care creates essential medical records for your personal injury claim.",
  },
  {
    id: "document-scene-photos-video",
    icon: <FaCamera className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Document the Scene With Photos and Video",
    description:
      "Use your cell phone camera to capture clear images of all damaged vehicles. Photograph skid marks on pavement, broken street lights and visible physical injuries clearly. Detailed visual evidence preserves key facts before towing companies clear away the debris. These photos help our legal team reconstruct exact crash events for insurance adjusters.",
  },
  {
    id: "exchange-insurance-contact-info",
    icon: <FaIdCard className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Exchange Insurance and Contact Information",
    description:
      "Collect driver license numbers, contact phone details and insurance policy info from everyone. Remain calm and share basic vehicle details without making comments about crash fault. Write down insurance policy numbers carefully to avoid errors on legal paperwork later. Never argue with other drivers while gathering required contact details at crash sites.",
  },
  {
    id: "get-witness-names-statements",
    icon: <FaUsers className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Get Witness Names and Statements",
    description:
      "Bystanders who observed the crash offer neutral accounts and this can strengthen your legal claim. Ask nearby witnesses for their full names, phone numbers and email addresses quickly. Neutral witness testimony helps overcome conflicting stories told by negligent drivers and adjusters. Our staff contacts these witnesses early before memories fade over coming weeks.",
  },
  {
    id: "file-florida-crash-report",
    icon: <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "File a Florida Crash Report",
    description:
      "Florida law mandates drivers to report crashes especially if there are injuries or significant vehicle damage. Police officers complete formal crash reports containing officer observations and driver statements. You can obtain official copies from local law enforcement agencies within a few days. These reports provide valuable baseline details that support your personal injury action.",
  },
  {
    id: "avoid-recorded-statement",
    icon: <FaMicrophoneSlash className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Avoid Giving a Recorded Statement to Any Insurer",
    description:
      "Insurance adjusters call quickly to request recorded statements about your recent crash. Their main objective involves finding comments that reduce overall company financial payout obligations. Politely decline their request and direct all adjuster inquiries to your legal representative. We handle all insurance conversations to prevent accidental damage to your pending claim.",
  },
  {
    id: "visit-doctor-promptly",
    icon: <FaUserMd className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Visit Doctor Even Without Visible Injuries",
    description:
      "Symptoms from internal bleeding and soft tissue injuries might not show right away. Seeking immediate medical care protects your physical health and meets strict state legal deadlines. Under Florida Statute § 627.736, you must receive formal medical evaluation within 14 days following a motor vehicle collision to qualify for PIP coverage. A complete medical exam documents your physical trauma for future insurance settlement demands.",
  },
  {
    id: "keep-every-bill-receipt",
    icon: <FaReceipt className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Keep Every Bill, Receipt and Record",
    description:
      "Keep all of your prescription bills, auto repair invoices and medical receipts together. Keep records showing missed work hours and lost paychecks caused by your injuries. Detailed records show exact monetary losses when calculating your total personal injury recovery. Our legal team uses these financial records to demand full payment from insurers.",
  },
  {
    id: "call-mcculloch-before-signing",
    icon: <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-slate-950 transition-colors duration-300" />,
    title: "Call McCulloch Law Before You Sign Anything",
    description:
      "Insurance carriers often offer small quick settlements before you understand full injury costs. Signing early release documents waives your right to pursue further money damages later. Contact our Tampa law office at (813) 444-2817 to review settlement papers before signing any documents. We make sure you receive fair financial compensation for long term recovery needs.",
  },
];

export default function BPIStepsSection({
  title = "What to Do After an Accident in Tampa: Step by Step",
  subTitle = "The first few days after an accident can create evidence, medical records and insurance decisions affecting your claim.",
  description = "",
  items = defaultItems,
}: BPIStepsSectionProps) {
  return (
    <section className="w-full bg-slate-50/70 py-12 md:py-16 text-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
              {description}
            </p>
          )}

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 sm:w-16 h-[2px] bg-primary/50 rounded-full" />
            <div className="w-8 h-8 rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
              <FaShieldVirus className="w-4 h-4 text-primary" />
            </div>
            <div className="w-12 sm:w-16 h-[2px] bg-primary/40 rounded-full" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 group flex flex-col items-start relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-primary/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug pt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 group-hover:w-24 h-[2px] bg-primary/70 rounded-full mb-4 ml-1 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
