"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaLock, FaUser, FaBolt, FaLockOpen } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface DVContactFormSectionProps {
  title?: string;
  highlightedText?: string;
  paragraph?: string;
  phoneNumber?: string;
  phoneHref?: string;
}

const benefits = [
  {
    icon: <FaShieldAlt className="w-4 h-4 text-primary" />,
    title: "Free Consultation",
    desc: "No fees. No obligations.",
  },
  {
    icon: <FaLock className="w-4 h-4 text-primary" />,
    title: "Confidential",
    desc: "Your privacy is 100% protected.",
  },
  {
    icon: <FaUser className="w-4 h-4 text-primary" />,
    title: "Speak Directly to Attorney",
    desc: "No intake reps. Talk to a lawyer.",
  },
  {
    icon: <FaBolt className="w-4 h-4 text-primary" />,
    title: "Same Day Response",
    desc: "We act fast so you can move forward.",
  },
];

export default function DVContactFormSection({
  title = "Get a Free, Confidential Case Review From Domestic Violence Defense Lawyer, Tampa",
  highlightedText = "FREE CASE REVIEW",
  paragraph = "Prosecutors are already building a file on your case. One free call with McCulloch Law can start a defense strategy to clear your name and protect your future.",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
}: DVContactFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    bestTime: "",
    currentlyCharged: "",
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

          {/* ============================================ */}
          {/* LEFT COLUMN: Title, Benefits, Phone CTA      */}
          {/* ============================================ */}
          <div className="lg:col-span-5 flex flex-col space-y-7">

            {/* Gold Label */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {highlightedText}
              </span>
              <div className="flex-1 h-[1.5px] bg-primary/40 rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>

            {/* Benefits List */}
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

            {/* Phone CTA Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-sm">
              <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-[#081524] flex items-center justify-center shrink-0">
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

          {/* ============================================ */}
          {/* RIGHT COLUMN: Dark Navy Form Card            */}
          {/* ============================================ */}
          <div className="lg:col-span-7">
            <div className="bg-[#0d1f30] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/50">

              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Tell Us About Your Case
                </h3>
                <div className="w-10 h-[2px] bg-primary rounded-full mx-auto my-3" />
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Fill out the form below and an experienced defense attorney
                  will review your case and contact you promptly.
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
                    A McCulloch Law attorney will review your case and contact
                    you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name + Phone */}
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

                  {/* Row 2: Email + Best Time */}
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

                  {/* Row 3: Currently facing charges? */}
                  <select
                    name="currentlyCharged"
                    value={formData.currentlyCharged}
                    onChange={handleChange}
                    className="w-full bg-[#162438] border border-slate-600/60 text-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Are you currently facing charges?</option>
                    <option value="yes" className="text-white bg-[#162438]">Yes, I have been charged</option>
                    <option value="arrested" className="text-white bg-[#162438]">I was arrested but not charged yet</option>
                    <option value="no" className="text-white bg-[#162438]">No, but I need legal advice</option>
                    <option value="other" className="text-white bg-[#162438]">Other</option>
                  </select>

                  {/* Row 4: Case Description */}
                  <textarea
                    name="caseDescription"
                    placeholder="Briefly describe your case (optional)"
                    value={formData.caseDescription}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#162438] border border-slate-600/60 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all resize-y"
                  />

                  {/* Secure Note */}
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
                    <FaLockOpen className="w-3 h-3 text-primary" />
                    <span>Your information is secure and will never be shared.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#a87d25] text-slate-950 font-bold uppercase tracking-widest text-sm py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    GET MY FREE CASE REVIEW
                  </button>

                  {/* Trust badges */}
                  <div className="flex items-center justify-center gap-3 text-slate-400 text-xs flex-wrap">
                    <span className="flex items-center gap-1">
                      <FaShieldAlt className="w-3 h-3 text-primary" />
                      100% Confidential
                    </span>
                    <span className="text-slate-600">•</span>
                    <span>No Obligation</span>
                    <span className="text-slate-600">•</span>
                    <span>Trusted Legal Help</span>
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
