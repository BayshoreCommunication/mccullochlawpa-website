import { Metadata } from "next";
import React from "react";
import {
  TDCHero,
  TDCContactFormSection,
  TDCTypesSection,
  TDCArrestSection,
  TDCPenaltiesSection,
  TDCEvidenceSection,
  TDCRestrictionsSection,
  TDCLawChangesSection,
  TDCCommonMistakesSection,
  TDCFightBackSection,
  TDCTraffickingSection,
  TDCWhyChooseSection,
  TDCApartSection,
  TDCServesSection,
  TDCCourtsCitiesSection,
  TDCTestimonialsSection,
  TDCFreeCaseReviewSection,
  TDCFAQSection,
} from "@/components/seo-services/tampa-drug-crimes-lawyer";

export const metadata: Metadata = {
  title: "Drug Crimes Lawyer in Tampa, FL | McCulloch Law",
  description:
    "Charged with a drug crime in Tampa? McCulloch Law defends possession, trafficking and distribution cases. Call (813) 444-2817 today.",
  alternates: {
    canonical: "/tampa-drug-crimes-lawyer",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function TampaDrugCrimesLawyerPage() {
  return (
    <div className="w-full">
      <TDCHero />
      <TDCContactFormSection />
      <TDCTypesSection />
      <TDCArrestSection />
      <TDCPenaltiesSection />
      <TDCEvidenceSection />
      <TDCRestrictionsSection />
      <TDCLawChangesSection />
      <TDCCommonMistakesSection />
      <TDCFightBackSection />
      <TDCTraffickingSection />
      <TDCWhyChooseSection />
      <TDCApartSection />
      <TDCServesSection />
      <TDCCourtsCitiesSection />
      <TDCTestimonialsSection />
      <TDCFreeCaseReviewSection />
      <TDCFAQSection />
    </div>
  );
}
