"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import BPIHero, { BPIHeroSectionProps } from "./BPIHero";
import BPIContactFormSection, { BPIContactFormSectionProps } from "./BPIContactFormSection";
import BPITypesSection, { BPITypesSectionProps } from "./BPITypesSection";
import BPIStepsSection, { BPIStepsSectionProps } from "./BPIStepsSection";
import BPINoFaultSection, { BPINoFaultSectionProps } from "./BPINoFaultSection";
import BPIEvidenceSection, { BPIEvidenceSectionProps } from "./BPIEvidenceSection";
import BPICompensationSection, { BPICompensationSectionProps } from "./BPICompensationSection";
import BPIBuildsSection, { BPIBuildsSectionProps } from "./BPIBuildsSection";
import BPICommonMistakesSection, { BPICommonMistakesSectionProps } from "./BPICommonMistakesSection";
import BPILowballSection, { BPILowballSectionProps } from "./BPILowballSection";
import BPISettlementVsTrialSection, { BPISettlementVsTrialSectionProps } from "./BPISettlementVsTrialSection";
import BPIWhyChooseSection, { BPIWhyChooseSectionProps } from "./BPIWhyChooseSection";
import BPIApartSection, { BPIApartSectionProps } from "./BPIApartSection";
import BPIServesSection, { BPIServesSectionProps } from "./BPIServesSection";
import BPICourtsCitiesSection, { BPICourtsCitiesSectionProps } from "./BPICourtsCitiesSection";
import BPITestimonialsSection, { BPITestimonialsSectionProps } from "./BPITestimonialsSection";
import BPIFreeCaseReviewSection, { BPIFreeCaseReviewSectionProps } from "./BPIFreeCaseReviewSection";
import BPIFAQSection, { BPIFAQSectionProps } from "./BPIFAQSection";

export {
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
};

export type {
  BPIHeroSectionProps,
  BPIContactFormSectionProps,
  BPITypesSectionProps,
  BPIStepsSectionProps,
  BPINoFaultSectionProps,
  BPIEvidenceSectionProps,
  BPICompensationSectionProps,
  BPIBuildsSectionProps,
  BPICommonMistakesSectionProps,
  BPILowballSectionProps,
  BPISettlementVsTrialSectionProps,
  BPIWhyChooseSectionProps,
  BPIApartSectionProps,
  BPIServesSectionProps,
  BPICourtsCitiesSectionProps,
  BPITestimonialsSectionProps,
  BPIFreeCaseReviewSectionProps,
  BPIFAQSectionProps,
};

export interface BestTampaPersonalInjuryPageProps extends BPIHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function BestTampaPersonalInjuryPage({
  showNavbarFooter = true,
  ...heroProps
}: BestTampaPersonalInjuryPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <BPIHero {...heroProps} />
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
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <BPIHero {...heroProps} />
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
      </main>
      <Footer />
    </div>
  );
}
