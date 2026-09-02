"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import CILHero, { CILHeroSectionProps } from "./CILHero";
import CILContactFormSection, { CILContactFormSectionProps } from "./CILContactFormSection";
import CILTypesSection, { CILTypesSectionProps } from "./CILTypesSection";
import CILClaimsWorkSection, { CILClaimsWorkSectionProps } from "./CILClaimsWorkSection";
import CILCompensationSection, { CILCompensationSectionProps } from "./CILCompensationSection";
import CILEvidenceSection, { CILEvidenceSectionProps } from "./CILEvidenceSection";
import CILDevalueSection, { CILDevalueSectionProps } from "./CILDevalueSection";
import CILStatuteSection, { CILStatuteSectionProps } from "./CILStatuteSection";
import CILCommonMistakesSection, { CILCommonMistakesSectionProps } from "./CILCommonMistakesSection";
import CILFightsTacticsSection, { CILFightsTacticsSectionProps } from "./CILFightsTacticsSection";
import CILOwedCostsSection, { CILOwedCostsSectionProps } from "./CILOwedCostsSection";
import CILWhyChooseSection, { CILWhyChooseSectionProps } from "./CILWhyChooseSection";
import CILApartSection, { CILApartSectionProps } from "./CILApartSection";
import CILServesSection, { CILServesSectionProps } from "./CILServesSection";
import CILCourtsCitiesSection, { CILCourtsCitiesSectionProps } from "./CILCourtsCitiesSection";
import CILTestimonialsSection, { CILTestimonialsSectionProps } from "./CILTestimonialsSection";
import CILFreeCaseReviewSection, { CILFreeCaseReviewSectionProps } from "./CILFreeCaseReviewSection";
import CILFAQSection, { CILFAQSectionProps } from "./CILFAQSection";

export {
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
};

export type {
  CILHeroSectionProps,
  CILContactFormSectionProps,
  CILTypesSectionProps,
  CILClaimsWorkSectionProps,
  CILCompensationSectionProps,
  CILEvidenceSectionProps,
  CILDevalueSectionProps,
  CILStatuteSectionProps,
  CILCommonMistakesSectionProps,
  CILFightsTacticsSectionProps,
  CILOwedCostsSectionProps,
  CILWhyChooseSectionProps,
  CILApartSectionProps,
  CILServesSectionProps,
  CILCourtsCitiesSectionProps,
  CILTestimonialsSectionProps,
  CILFreeCaseReviewSectionProps,
  CILFAQSectionProps,
};

export interface CatastrophicInjuryPageProps extends CILHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function CatastrophicInjuryPage({
  showNavbarFooter = true,
  ...heroProps
}: CatastrophicInjuryPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <CILHero {...heroProps} />
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
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <CILHero {...heroProps} />
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
      </main>
      <Footer />
    </div>
  );
}
