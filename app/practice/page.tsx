import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import PersonalInjury from "@/components/practice/PersonalInjury";
import CriminalDefense from "@/components/practice/CriminalDefense";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | McCulloch Law, P.A.",
  description: "Explore the legal services offered by McCulloch Law, P.A. in personal injury and criminal defense in the Greater Tampa Bay Area.",
  alternates: {
    canonical: "/practice",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSection
        title="Explore the Services We Offer in Personal Injury and Criminal Defense"
        subtitle="McCulloch Law, P.A. offers a focused range of services designed to support clients during some of the most challenging moments of their lives."
      />
      <PersonalInjury  />
      <CriminalDefense />
    </>
  );
}
