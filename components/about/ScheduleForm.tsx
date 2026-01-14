"use client";

import { memo, useEffect, useState } from "react";
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
  const [showTitleOne, setShowTitleOne] = useState(true);
  const [loading, setLoading] = useState(false);

  const [emailForm, setEmailForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  /* ---------------- EFFECT ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- VALIDATION ---------------- */
  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) errors.name = "Name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email))
      errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.message) errors.message = "Message is required!";

    return errors;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_6x5cpjm",
        "template_g8p45zg",
        emailForm,
        "hs3WVDN7AYB4zTkhu"
      )
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. We will respond shortly.",
            confirmButtonColor: "#131b2a",
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
            text: "Something went wrong! Please try again.",
          });
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="relative w-full">
      <Image
        src="/images/about/ScheduleForm.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative max-w-[1640px] mx-auto px-8 py-10 lg:py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* LEFT */}
          <Reveal y={80}>
            <div className="max-w-xl text-white space-y-5">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Contact Us Today.{" "}
                <span className="underline">
                  Our initial consultation is absolutely free.
                </span>
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
          <Reveal y={40}>
            <div className="w-full flex-1">
              <div className="w-full bg-[#1A1A1A] p-10 rounded-md">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Request a Flexible Schedule
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {["name", "phone", "email"].map((field) => (
                    <div key={field}>
                      <input
                        type={field === "email" ? "email" : "text"}
                        placeholder={
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        value={(emailForm as any)[field]}
                        onChange={(e) =>
                          setEmailForm({
                            ...emailForm,
                            [field]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded bg-white text-black"
                      />
                      {formErrors[field as keyof ContactFormErrors] && (
                        <p className="text-red-500 text-sm">
                          {formErrors[field as keyof ContactFormErrors]}
                        </p>
                      )}
                    </div>
                  ))}

                  <textarea
                    rows={4}
                    placeholder="Describe your case"
                    value={emailForm.message}
                    onChange={(e) =>
                      setEmailForm({
                        ...emailForm,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded bg-white text-black"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#BA8E2D] py-4 text-white font-semibold rounded hover:bg-yellow-500 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Book An Appointment"}
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default memo(ScheduleForm);
