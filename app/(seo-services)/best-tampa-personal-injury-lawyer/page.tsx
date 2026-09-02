import { Metadata } from "next";
import React from "react";
import {
  BPIHero,
  BPIContactFormSection,
  BPITypesSection,
  BPIStepsSection,
  BPINoFaultSection,
  BPIEvidenceSection,
  BPICompensationSection,
  BPIBuildsSection,
  BPICommonMistakesSection,
  BPILowballSection,
  BPISettlementVsTrialSection,
  BPIWhyChooseSection,
  BPIApartSection,
  BPIServesSection,
  BPICourtsCitiesSection,
  BPITestimonialsSection,
  BPIFreeCaseReviewSection,
  BPIFAQSection,
} from "@/components/seo-services/best-tampa-personal-injury-lawyer";

export const metadata: Metadata = {
  title: "Best Tampa Personal Injury Lawyer | Free Case Evaluation",
  description:
    "Injured in Tampa? McCulloch Law helps accident victims pursue medical costs, lost income, pain and suffering and other damages. Free consultation.",
  alternates: {
    canonical: "/best-tampa-personal-injury-lawyer",
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

export default function BestTampaPersonalInjuryLawyerPage() {
  return (
    <div className="w-full">
      <BPIHero />
      <BPIContactFormSection />
      <BPITypesSection />
      <BPIStepsSection />
      <BPINoFaultSection />
      <BPIEvidenceSection />
      <BPICompensationSection />
      <BPIBuildsSection />
      <BPICommonMistakesSection />
      <BPILowballSection />
      <BPISettlementVsTrialSection />
      <BPIWhyChooseSection />
      <BPIApartSection />
      <BPIServesSection />
      <BPICourtsCitiesSection />
      <BPITestimonialsSection />
      <BPIFreeCaseReviewSection />
      <BPIFAQSection />
    </div>
  );
}
