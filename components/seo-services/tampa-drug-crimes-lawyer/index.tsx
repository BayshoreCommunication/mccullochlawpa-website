"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import TDCHero, { TDCHeroSectionProps } from "./TDCHero";
import TDCContactFormSection, { TDCContactFormSectionProps } from "./TDCContactFormSection";
import TDCTypesSection, { TDCTypesSectionProps } from "./TDCTypesSection";
import TDCArrestSection, { TDCArrestSectionProps } from "./TDCArrestSection";
import TDCPenaltiesSection, { TDCPenaltiesSectionProps } from "./TDCPenaltiesSection";
import TDCEvidenceSection, { TDCEvidenceSectionProps } from "./TDCEvidenceSection";
import TDCRestrictionsSection, { TDCRestrictionsSectionProps } from "./TDCRestrictionsSection";
import TDCLawChangesSection, { TDCLawChangesSectionProps } from "./TDCLawChangesSection";
import TDCCommonMistakesSection, { TDCCommonMistakesSectionProps } from "./TDCCommonMistakesSection";
import TDCFightBackSection, { TDCFightBackSectionProps } from "./TDCFightBackSection";
import TDCTraffickingSection, { TDCTraffickingSectionProps } from "./TDCTraffickingSection";
import TDCWhyChooseSection, { TDCWhyChooseSectionProps } from "./TDCWhyChooseSection";
import TDCApartSection, { TDCApartSectionProps } from "./TDCApartSection";
import TDCServesSection, { TDCServesSectionProps } from "./TDCServesSection";
import TDCCourtsCitiesSection, { TDCCourtsCitiesSectionProps } from "./TDCCourtsCitiesSection";
import TDCTestimonialsSection, { TDCTestimonialsSectionProps } from "./TDCTestimonialsSection";
import TDCFreeCaseReviewSection, { TDCFreeCaseReviewSectionProps } from "./TDCFreeCaseReviewSection";
import TDCFAQSection, { TDCFAQSectionProps } from "./TDCFAQSection";

export {
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
};

export type {
  TDCHeroSectionProps,
  TDCContactFormSectionProps,
  TDCTypesSectionProps,
  TDCArrestSectionProps,
  TDCPenaltiesSectionProps,
  TDCEvidenceSectionProps,
  TDCRestrictionsSectionProps,
  TDCLawChangesSectionProps,
  TDCCommonMistakesSectionProps,
  TDCFightBackSectionProps,
  TDCTraffickingSectionProps,
  TDCWhyChooseSectionProps,
  TDCApartSectionProps,
  TDCServesSectionProps,
  TDCCourtsCitiesSectionProps,
  TDCTestimonialsSectionProps,
  TDCFreeCaseReviewSectionProps,
  TDCFAQSectionProps,
};

export interface TampaDrugCrimesPageProps extends TDCHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function TampaDrugCrimesPage({
  showNavbarFooter = true,
  ...heroProps
}: TampaDrugCrimesPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <TDCHero {...heroProps} />
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
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <TDCHero {...heroProps} />
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
      </main>
      <Footer />
    </div>
  );
}
