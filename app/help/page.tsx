import ServicesPage from "@/components/help/ServicesPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Resources | McCulloch Law, P.A.",
  description: "Find helpful resources, guides, and contact support information for your personal injury or criminal defense case.",
  alternates: {
    canonical: "/help",
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Chiropractic Services for"
      />
      <ServicesPage />
    </>
  );
};

export default page;
