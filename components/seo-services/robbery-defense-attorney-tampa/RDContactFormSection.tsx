"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaLock, FaUser, FaBolt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export interface RDContactFormSectionProps {
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

export default function RDContactFormSection({
  title = "Facing Robbery Charges in Tampa? Get a Free, Confidential Case Review",
  highlightedText = "FREE CASE REVIEW",
  paragraph = "Prosecutors are already building a file on your case. One free call with McCulloch Law can start a defense strategy to clear your name and protect your future.",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
}: RDContactFormSectionProps) {
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
                {benefits.map((b) => (
                  <div
                    key={b.title}
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
                    <span className="text-xs text-slate-300 font-medium uppercase tracking-wider block">
                      Prefer To Speak Now? Call 24/7
                    </span>
                    <span className="text-lg sm:text-xl font-bold tracking-wide text-white">
                      {phoneNumber}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-7 bg-[#081524] rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-slate-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto text-primary">
                    <FaShieldAlt className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You For Reaching Out
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                    Your request for a confidential case review has been received. Attorney Drew McCulloch will review your details promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Request Your Free Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out this quick form or call us directly. All information is confidential.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="(813) 000-0000"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="bestTime" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Best Time to Call
                      </label>
                      <select
                        id="bestTime"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Anytime</option>
                        <option value="Morning">Morning (8am - 12pm)</option>
                        <option value="Afternoon">Afternoon (12pm - 5pm)</option>
                        <option value="Evening">Evening (5pm - 9pm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="currentlyCharged" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Are You or a Loved One Currently Charged?
                    </label>
                    <select
                      id="currentlyCharged"
                      name="currentlyCharged"
                      value={formData.currentlyCharged}
                      onChange={handleChange}
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select Status</option>
                      <option value="Arrested & In Jail">Yes, currently in jail</option>
                      <option value="Released on Bond">Yes, released on bond</option>
                      <option value="Under Investigation">Under investigation / Not yet arrested</option>
                      <option value="Consulting for Loved One">Consulting on behalf of someone else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="caseDescription" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Brief Case Details
                    </label>
                    <textarea
                      id="caseDescription"
                      name="caseDescription"
                      rows={3}
                      value={formData.caseDescription}
                      onChange={handleChange}
                      placeholder="Share what happened or any upcoming court dates (confidential)..."
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#b58f3c] text-slate-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] uppercase tracking-wider text-sm mt-2"
                  >
                    Get Free &amp; Confidential Case Review
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    🔒 All submissions are 100% confidential. Submitting this form does not establish an attorney-client relationship.
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

