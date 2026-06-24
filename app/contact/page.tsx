import ContactForm from "@/components/contact/ContactForm";
import ContactVideo from "@/components/contact/ContactVideo";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | McCulloch Law, P.A.",
  description: "Get in touch with McCulloch Law, P.A. for a consultation regarding your personal injury or criminal defense matter.",
  alternates: {
    canonical: "/contact",
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Contact Us"
        subtitle="Connect with an attorney who’s ready to guide you, answer your questions, and help you understand the best path forward."
      />
      <ContactForm />
      <ContactVideo />
    </>
  );
};

export default page;
