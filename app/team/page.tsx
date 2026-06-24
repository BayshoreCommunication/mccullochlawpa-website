import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import FbReviewSection from "@/components/team/FbReviewSection";
import Instagram from "@/components/team/InstagramSection";
import TeamPage from "@/components/team/TeamPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | McCulloch Law, P.A.",
  description: "Meet the team at McCulloch Law, P.A. dedicated to protecting your rights in personal injury and criminal defense matters.",
  alternates: {
    canonical: "/team",
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Tampa's Best"
      />
      <TeamPage />
      <Instagram />
      <FbReviewSection />
    </>
  );
};

export default page;
