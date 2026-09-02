import { Metadata } from "next";
import React from "react";
import {
  TDUHero,
  TDUContactFormSection,
  TDUTypesSection,
  TDUAfterAccidentSection,
  TDUPenaltiesSection,
  TDUEvidenceSection,
  TDURestrictionsSection,
  TDULawChangesSection,
  TDUCommonMistakesSection,
  TDUFightBackSection,
  TDUPleaVsTrialSection,
  TDUWhyChooseSection,
  TDUApartSection,
  TDUServesSection,
  TDUCourtsCitiesSection,
  TDUTestimonialsSection,
  TDUFreeCaseReviewSection,
  TDUFAQSection,
} from "@/components/seo-services/tampa-dui-accident-lawyer";

export const metadata: Metadata = {
  title: "Tampa DUI Accident Lawyer | McCulloch Law, P.A.",
  description:
    "Arrested after a crash? Attorney Drew McCulloch fights to protect your license and reduce charges. Call our Tampa DUI defense team 24/7 for a free consultation.",
  alternates: {
    canonical: "/tampa-dui-accident-lawyer",
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

export default function TampaDuiAccidentLawyerPage() {
  return (
    <div className="w-full">
      <TDUHero />
      <TDUContactFormSection />
      <TDUTypesSection />
      <TDUAfterAccidentSection />
      <TDUPenaltiesSection />
      <TDUEvidenceSection />
      <TDURestrictionsSection />
      <TDULawChangesSection />
      <TDUCommonMistakesSection />
      <TDUFightBackSection />
      <TDUPleaVsTrialSection />
      <TDUWhyChooseSection />
      <TDUApartSection />
      <TDUServesSection />
      <TDUCourtsCitiesSection />
      <TDUTestimonialsSection />
      <TDUFreeCaseReviewSection />
      <TDUFAQSection />
    </div>
  );
}
