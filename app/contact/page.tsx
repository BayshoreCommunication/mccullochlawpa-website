import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ServicesPage from "@/components/help/ServicesPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Drop us a line!"
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }, // current page (no href)
        ]}
      />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default page;
