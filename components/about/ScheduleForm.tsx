"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

import Reveal from "../motion/Reveal";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaBalanceScale,
  FaYelp,
  FaTiktok,
} from "react-icons/fa";

/* ---------------- TYPES ---------------- */
interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

/* ---------------- COMPONENT ---------------- */
const ScheduleForm = () => {
  const [loading, setLoading] = useState(false);

  const [emailForm, setEmailForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  /* ---------------- VALIDATION ---------------- */
  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) errors.name = "Full name is required";
    if (!values.phone) errors.phone = "Phone number is required";
    if (!values.email) errors.email = "Email address is required";
    else if (!emailRegex.test(values.email))
      errors.email = "Invalid email format";
    if (!values.message) errors.message = "Message is required";

    return errors;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length !== 0) {
      setLoading(false);
      return;
    }

    const emailData: Record<string, unknown> = {
      name: emailForm.name,
      email: emailForm.email,
      phone: emailForm.phone,
      message: emailForm.message,
    };

    send("service_6x5cpjm", "template_g8p45zg", emailData, "hs3WVDN7AYB4zTkhu")
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Thank you for reaching out. We will contact you shortly.",
          confirmButtonColor: "#BA8E2D",
        });

        setEmailForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Something went wrong. Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="relative w-full">
      {/* Background */}
      <Image
        src="/images/about/ScheduleForm.png"
        alt="Schedule Background"
        fill
        priority
        className="object-cover"
      />

      <div className="relative max-w-[1640px] mx-auto px-8 py-12 lg:py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-evenly">
          {/* LEFT CONTENT */}
          <Reveal y={80} className="w-full md:max-w-xl">
            <div className="text-white space-y-5">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Our initial consultation is absolutely free.
              </h1>

              <p>
                Reach out now for trusted legal advice. Our experienced
                attorneys are ready to protect your rights.
              </p>

              <h3 className="text-xl font-semibold">
                Phone Number <br />
                <Link href="tel:8134442817">(813) 444-2817</Link>
              </h3>

              <div>
                <h3 className="text-xl font-semibold mb-3">Our Social Links</h3>
                <div className="flex gap-2">
                  {[
                    FaFacebookF,
                    FaLinkedinIn,
                    FaInstagram,
                    FaBalanceScale,
                    FaYelp,
                    FaGoogle,
                    FaTiktok,
                  ].map((Icon, i) => (
                    <span
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                    >
                      <Icon />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT FORM */}
          <Reveal y={40} className="w-full max-w-2xl">
            <div className="w-full bg-[#1A1A1A] p-8 md:p-10 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">
                Request a Flexible Schedule
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 w-full">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={emailForm.name}
                      onChange={(e) =>
                        setEmailForm({ ...emailForm, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Phone number"
                      value={emailForm.phone}
                      onChange={(e) =>
                        setEmailForm({ ...emailForm, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={emailForm.email}
                    onChange={(e) =>
                      setEmailForm({ ...emailForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={6}
                    placeholder="Describe your case or ask a question"
                    value={emailForm.message}
                    onChange={(e) =>
                      setEmailForm({ ...emailForm, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400 resize-none"
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#BA8E2D] py-4 text-white font-semibold rounded-md hover:bg-yellow-600 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Book An Appointment"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default memo(ScheduleForm);
