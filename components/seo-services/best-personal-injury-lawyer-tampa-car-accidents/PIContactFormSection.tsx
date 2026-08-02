"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaLock, FaUser, FaBolt, FaLockOpen } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface PIContactFormSectionProps {
  title?: string;
  highlightedText?: string;
  paragraph?: string;
  phoneNumber?: string;
  phoneHref?: string;
}

const benefits = [
  {
    icon: <FaShieldAlt className="w-4 h-4 text-primary" />,
    title: "Free Case Review",
    desc: "No upfront fees. Guaranteed total confidentiality.",
  },
  {
    icon: <FaLock className="w-4 h-4 text-primary" />,
    title: "100% Confidential",
    desc: "Protected by attorney-client privilege.",
  },
  {
    icon: <FaUser className="w-4 h-4 text-primary" />,
    title: "Speak Directly to Attorney",
    desc: "Drew McCulloch evaluates your full claim value.",
  },
  {
    icon: <FaBolt className="w-4 h-4 text-primary" />,
    title: "Immediate Action",
    desc: "Stop insurance adjusters from lowballing you.",
  },
];

export default function PIContactFormSection({
  title = "Get a Free, Confidential Case Review From Tampa's Best Personal Injury Lawyer",
  highlightedText = "FREE CASE REVIEW",
  paragraph = "McCulloch Law reviews your Tampa car accident case for free, with total confidentiality guaranteed. Call today and we will tell you exactly what your claim is worth.",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
}: PIContactFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    bestTime: "",
    accidentType: "",
    caseDescription: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col space-y-7">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {highlightedText}
              </span>
              <div className="flex-1 h-[1.5px] bg-primary/40 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {paragraph}
            </p>

            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#081524] border border-primary/40 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-sm">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#081524] flex items-center justify-center shrink-0">
                <IoIosCall className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  CALL NOW – FREE &amp; CONFIDENTIAL
                </span>
                <a
                  href={phoneHref}
                  className="text-2xl sm:text-3xl font-bold text-primary hover:text-[#a87d25] transition-colors tracking-tight leading-none mt-0.5"
                >
                  {phoneNumber}
                </a>
                <span className="text-xs text-slate-500 mt-0.5">Available 24/7</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0d1f30] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/50">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Calculate Your Claim Value
                </h3>
                <div className="w-10 h-[2px] bg-primary rounded-full mx-auto my-3" />
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Fill out the form below and Attorney Drew McCulloch will review your car accident claim confidentially.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <FaShieldAlt className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-white font-bold text-lg text-center">
                    Thank you! We'll be in touch soon.
                  </p>
                  <p className="text-slate-400 text-sm text-center max-w-xs">
                    Our personal injury legal team will review your accident details confidentially.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#162438] border border-slate-600/60 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#162438] border border-slate-600/60 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#162438] border border-slate-600/60 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                    <select
                      name="bestTime"
                      value={formData.bestTime}
                      onChange={handleChange}
                      className="w-full bg-[#162438] border border-slate-600/60 text-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Best Time to Call</option>
                      <option value="morning" className="text-white bg-[#162438]">Morning (8am – 12pm)</option>
                      <option value="afternoon" className="text-white bg-[#162438]">Afternoon (12pm – 5pm)</option>
                      <option value="evening" className="text-white bg-[#162438]">Evening (5pm – 8pm)</option>
                      <option value="anytime" className="text-white bg-[#162438]">Anytime</option>
                    </select>
                  </div>

                  <select
                    name="accidentType"
                    value={formData.accidentType}
                    onChange={handleChange}
                    className="w-full bg-[#162438] border border-slate-600/60 text-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Type of Car Accident</option>
                    <option value="rear-end" className="text-white bg-[#162438]">Rear-End Collision</option>
                    <option value="t-bone" className="text-white bg-[#162438]">Intersection / Side Impact</option>
                    <option value="truck" className="text-white bg-[#162438]">Commercial Truck / Vehicle</option>
                    <option value="rideshare" className="text-white bg-[#162438]">Uber / Lyft / Rental Car</option>
                    <option value="motorcycle" className="text-white bg-[#162438]">Motorcycle / Pedestrian</option>
                    <option value="dui" className="text-white bg-[#162438]">Drunk / Drugged Driver</option>
                    <option value="hit-run" className="text-white bg-[#162438]">Hit and Run</option>
                    <option value="other" className="text-white bg-[#162438]">Other Accident</option>
                  </select>

                  <textarea
                    name="caseDescription"
                    placeholder="Briefly describe your accident and injuries (optional & confidential)"
                    value={formData.caseDescription}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#162438] border border-slate-600/60 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all resize-y"
                  />

                  <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
                    <FaLockOpen className="w-3 h-3 text-primary" />
                    <span>Your information is 100% secure &amp; protected by attorney-client privilege.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#a87d25] text-slate-950 font-bold uppercase tracking-widest text-sm py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    GET MY FREE CASE EVALUATION
                  </button>

                  <div className="flex items-center justify-center gap-3 text-slate-400 text-xs flex-wrap">
                    <span className="flex items-center gap-1">
                      <FaShieldAlt className="w-3 h-3 text-primary" />
                      100% Free
                    </span>
                    <span className="text-slate-600">•</span>
                    <span>No Obligation</span>
                    <span className="text-slate-600">•</span>
                    <span>No Fee Unless We Win</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
