import ServicesPage from "@/components/help/ServicesPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Chiropractic Services for"
        highlight="Pain Relief & Wellness,"
        title2="Tampa, FL"
        items={[
          { label: "Home", href: "/" },
          { label: "Let us help you" }, // current page (no href)
        ]}
      />
      <ServicesPage />
      <CallToAction />
    </>
  );
};

export default page;
