"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaLock, FaUser, FaBolt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface ALContactFormSectionProps {
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
    title: "100% Confidential",
    desc: "Your privacy is fully protected.",
  },
  {
    icon: <FaUser className="w-4 h-4 text-primary" />,
    title: "Speak Directly to Attorney",
    desc: "No intake reps. Talk to Drew McCulloch directly.",
  },
  {
    icon: <FaBolt className="w-4 h-4 text-primary" />,
    title: "Immediate Response",
    desc: "Available 24/7 before formal charges land.",
  },
];

export default function ALContactFormSection({
  title = "Facing Assault Charges in Tampa, Florida? Get a Free, Confidential Case Review",
  highlightedText = "FREE CASE REVIEW",
  paragraph = "Prosecutors are already building a file on your case. One free call with McCulloch Law can start a defense strategy to clear your name and protect your future. Our office is available 24/7.",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
}: ALContactFormSectionProps) {
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
    <section className="w-full bg-slate-50 py-12 md:py-20 font-sans border-b border-slate-200">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-xl max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: TEXT & VALUE PROPS */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold w-fit">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {highlightedText}
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>

              {/* BENEFITS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-primary/15 border border-primary/30 shrink-0 mt-0.5">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {b.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CALL DIRECT BOX */}
              <div className="pt-2">
                <a
                  href={phoneHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1B2D] text-white hover:bg-[#06121E] transition-all duration-300 border border-slate-800 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <IoIosCall className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                      Call 24/7 Free &amp; Confidential
                    </span>
                    <p className="text-lg sm:text-xl font-extrabold text-white">
                      {phoneNumber}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 text-green-600 flex items-center justify-center mx-auto">
                    <FaShieldAlt className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been received. Attorney Drew McCulloch or our legal team will contact you shortly. For immediate assistance, please call {phoneNumber}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="(813) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Best Time to Contact
                      </label>
                      <select
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      >
                        <option value="">Select best time...</option>
                        <option value="Immediately">Immediately (24/7)</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Have You or a Loved One Been Charged?
                    </label>
                    <select
                      name="currentlyCharged"
                      value={formData.currentlyCharged}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Please select status...</option>
                      <option value="Charged with Assault">Yes - Charged with Assault</option>
                      <option value="Charged with Aggravated Assault">Yes - Charged with Aggravated Assault</option>
                      <option value="Arrested / In Custody">Arrested / Currently in Custody</option>
                      <option value="Under Investigation / Questioned">Under Investigation / Contacted by Police</option>
                      <option value="Other Criminal Matter">Other Criminal Defense Matter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Brief Description of the Incident
                    </label>
                    <textarea
                      name="caseDescription"
                      rows={3}
                      value={formData.caseDescription}
                      onChange={handleChange}
                      placeholder="Share details safely. All communications are confidential and protected by attorney-client privilege."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-[#a87d25] text-slate-950 font-extrabold text-base tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.01]"
                  >
                    Request Free Confidential Consultation
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Submitting this form does not create an attorney-client relationship. Your information remains 100% confidential.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

