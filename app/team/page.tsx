import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import FbReviewSection from "@/components/team/FbReviewSection";
import Instagram from "@/components/team/InstagramSection";
import TeamPage from "@/components/team/TeamPage";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Tampa's Best"
        highlight="Board-Certified "
        title2="Chiropractors & Team"
        items={[
          { label: "Home", href: "/" },
          { label: "Meet The Team" }, // current page (no href)
        ]}
      />
      <TeamPage />
      <Instagram />
      <FbReviewSection />
      <CallToAction />
    </>
  );
};

export default page;
