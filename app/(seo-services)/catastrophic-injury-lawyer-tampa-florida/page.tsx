import { Metadata } from "next";
import React from "react";
import {
  CILHero,
  CILContactFormSection,
  CILTypesSection,
  CILClaimsWorkSection,
  CILCompensationSection,
  CILEvidenceSection,
  CILDevalueSection,
  CILStatuteSection,
  CILCommonMistakesSection,
  CILFightsTacticsSection,
  CILOwedCostsSection,
  CILWhyChooseSection,
  CILApartSection,
  CILServesSection,
  CILCourtsCitiesSection,
  CILTestimonialsSection,
  CILFreeCaseReviewSection,
  CILFAQSection,
} from "@/components/seo-services/catastrophic-injury-lawyer-tampa-florida";

export const metadata: Metadata = {
  title: "Catastrophic Injury Lawyer Tampa FL",
  description:
    "McCulloch Law fights for maximum compensation in brain, spinal cord and permanent disability claims. Call (813) 444-2817 to get a free consultation.",
  alternates: {
    canonical: "/catastrophic-injury-lawyer-tampa-florida",
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

export default function CatastrophicInjuryLawyerTampaFloridaPage() {
  return (
    <div className="w-full">
      <CILHero />
      <CILContactFormSection />
      <CILTypesSection />
      <CILClaimsWorkSection />
      <CILCompensationSection />
      <CILEvidenceSection />
      <CILDevalueSection />
      <CILStatuteSection />
      <CILCommonMistakesSection />
      <CILFightsTacticsSection />
      <CILOwedCostsSection />
      <CILWhyChooseSection />
      <CILApartSection />
      <CILServesSection />
      <CILCourtsCitiesSection />
      <CILTestimonialsSection />
      <CILFreeCaseReviewSection />
      <CILFAQSection />
    </div>
  );
}
