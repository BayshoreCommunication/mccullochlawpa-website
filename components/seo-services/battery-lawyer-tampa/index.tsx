"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import BLHero, { BLHeroSectionProps } from "./BLHero";
import BLContactFormSection, { BLContactFormSectionProps } from "./BLContactFormSection";
import BLWhatCountsSection, { BLWhatCountsSectionProps } from "./BLWhatCountsSection";
import BLAssaultVsBatterySection, { BLAssaultVsBatterySectionProps } from "./BLAssaultVsBatterySection";
import BLTypesSection, { BLTypesSectionProps } from "./BLTypesSection";
import BLPenaltiesSection, { BLPenaltiesSectionProps } from "./BLPenaltiesSection";
import BLEvidenceSection, { BLEvidenceSectionProps } from "./BLEvidenceSection";
import BLDefensesSection, { BLDefensesSectionProps } from "./BLDefensesSection";
import BLArrestSection, { BLArrestSectionProps } from "./BLArrestSection";
import BLCommonMistakesSection, { BLCommonMistakesSectionProps } from "./BLCommonMistakesSection";
import BLReviewCaseSection, { BLReviewCaseSectionProps } from "./BLReviewCaseSection";
import BLWhyChooseSection, { BLWhyChooseSectionProps } from "./BLWhyChooseSection";
import BLApartSection, { BLApartSectionProps } from "./BLApartSection";
import BLServesSection, { BLServesSectionProps } from "./BLServesSection";
import BLCourtsCitiesSection, { BLCourtsCitiesSectionProps } from "./BLCourtsCitiesSection";
import BLTestimonialsSection, { BLTestimonialsSectionProps } from "./BLTestimonialsSection";
import BLFreeCaseReviewSection, { BLFreeCaseReviewSectionProps } from "./BLFreeCaseReviewSection";
import BLFAQSection, { BLFAQSectionProps } from "./BLFAQSection";

export {
  BLHero,
  BLContactFormSection,
  BLWhatCountsSection,
  BLAssaultVsBatterySection,
  BLTypesSection,
  BLPenaltiesSection,
  BLEvidenceSection,
  BLDefensesSection,
  BLArrestSection,
  BLCommonMistakesSection,
  BLReviewCaseSection,
  BLWhyChooseSection,
  BLApartSection,
  BLServesSection,
  BLCourtsCitiesSection,
  BLTestimonialsSection,
  BLFreeCaseReviewSection,
  BLFAQSection,
};

export type {
  BLHeroSectionProps,
  BLContactFormSectionProps,
  BLWhatCountsSectionProps,
  BLAssaultVsBatterySectionProps,
  BLTypesSectionProps,
  BLPenaltiesSectionProps,
  BLEvidenceSectionProps,
  BLDefensesSectionProps,
  BLArrestSectionProps,
  BLCommonMistakesSectionProps,
  BLReviewCaseSectionProps,
  BLWhyChooseSectionProps,
  BLApartSectionProps,
  BLServesSectionProps,
  BLCourtsCitiesSectionProps,
  BLTestimonialsSectionProps,
  BLFreeCaseReviewSectionProps,
  BLFAQSectionProps,
};

export interface BatteryLawyerTampaPageProps extends BLHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function BatteryLawyerTampaPage({
  showNavbarFooter = true,
  ...heroProps
}: BatteryLawyerTampaPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <BLHero {...heroProps} />
        <BLContactFormSection />
        <BLWhatCountsSection />
        <BLAssaultVsBatterySection />
        <BLTypesSection />
        <BLPenaltiesSection />
        <BLEvidenceSection />
        <BLDefensesSection />
        <BLArrestSection />
        <BLCommonMistakesSection />
        <BLReviewCaseSection />
        <BLWhyChooseSection />
        <BLApartSection />
        <BLServesSection />
        <BLCourtsCitiesSection />
        <BLTestimonialsSection />
        <BLFreeCaseReviewSection />
        <BLFAQSection />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <BLHero {...heroProps} />
        <BLContactFormSection />
        <BLWhatCountsSection />
        <BLAssaultVsBatterySection />
        <BLTypesSection />
        <BLPenaltiesSection />
        <BLEvidenceSection />
        <BLDefensesSection />
        <BLArrestSection />
        <BLCommonMistakesSection />
        <BLReviewCaseSection />
        <BLWhyChooseSection />
        <BLApartSection />
        <BLServesSection />
        <BLCourtsCitiesSection />
        <BLTestimonialsSection />
        <BLFreeCaseReviewSection />
        <BLFAQSection />
      </main>
      <Footer />
    </div>
  );
}

