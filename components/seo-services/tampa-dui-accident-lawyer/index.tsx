"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import TDUHero, { TDUHeroSectionProps } from "./TDUHero";
import TDUContactFormSection, { TDUContactFormSectionProps } from "./TDUContactFormSection";
import TDUTypesSection, { TDUTypesSectionProps } from "./TDUTypesSection";
import TDUAfterAccidentSection, { TDUAfterAccidentSectionProps } from "./TDUAfterAccidentSection";
import TDUPenaltiesSection, { TDUPenaltiesSectionProps } from "./TDUPenaltiesSection";
import TDUEvidenceSection, { TDUEvidenceSectionProps } from "./TDUEvidenceSection";
import TDURestrictionsSection, { TDURestrictionsSectionProps } from "./TDURestrictionsSection";
import TDULawChangesSection, { TDULawChangesSectionProps } from "./TDULawChangesSection";
import TDUCommonMistakesSection, { TDUCommonMistakesSectionProps } from "./TDUCommonMistakesSection";
import TDUFightBackSection, { TDUFightBackSectionProps } from "./TDUFightBackSection";
import TDUPleaVsTrialSection, { TDUPleaVsTrialSectionProps } from "./TDUPleaVsTrialSection";
import TDUWhyChooseSection, { TDUWhyChooseSectionProps } from "./TDUWhyChooseSection";
import TDUApartSection, { TDUApartSectionProps } from "./TDUApartSection";
import TDUServesSection, { TDUServesSectionProps } from "./TDUServesSection";
import TDUCourtsCitiesSection, { TDUCourtsCitiesSectionProps } from "./TDUCourtsCitiesSection";
import TDUTestimonialsSection, { TDUTestimonialsSectionProps } from "./TDUTestimonialsSection";
import TDUFreeCaseReviewSection, { TDUFreeCaseReviewSectionProps } from "./TDUFreeCaseReviewSection";
import TDUFAQSection, { TDUFAQSectionProps } from "./TDUFAQSection";

export {
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
};

export type {
  TDUHeroSectionProps,
  TDUContactFormSectionProps,
  TDUTypesSectionProps,
  TDUAfterAccidentSectionProps,
  TDUPenaltiesSectionProps,
  TDUEvidenceSectionProps,
  TDURestrictionsSectionProps,
  TDULawChangesSectionProps,
  TDUCommonMistakesSectionProps,
  TDUFightBackSectionProps,
  TDUPleaVsTrialSectionProps,
  TDUWhyChooseSectionProps,
  TDUApartSectionProps,
  TDUServesSectionProps,
  TDUCourtsCitiesSectionProps,
  TDUTestimonialsSectionProps,
  TDUFreeCaseReviewSectionProps,
  TDUFAQSectionProps,
};

export interface TampaDuiAccidentPageProps extends TDUHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function TampaDuiAccidentPage({
  showNavbarFooter = true,
  ...heroProps
}: TampaDuiAccidentPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <TDUHero {...heroProps} />
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
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <TDUHero {...heroProps} />
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
      </main>
      <Footer />
    </div>
  );
}
