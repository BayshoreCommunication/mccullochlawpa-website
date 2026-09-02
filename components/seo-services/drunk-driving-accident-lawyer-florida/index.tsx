"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import DDHero, { DDHeroSectionProps } from "./DDHero";
import DDContactFormSection, { DDContactFormSectionProps } from "./DDContactFormSection";
import DDTypesSection, { DDTypesSectionProps } from "./DDTypesSection";
import DDAfterAccidentSection, { DDAfterAccidentSectionProps } from "./DDAfterAccidentSection";
import DDCompensationSection, { DDCompensationSectionProps } from "./DDCompensationSection";
import DDEvidenceSection, { DDEvidenceSectionProps } from "./DDEvidenceSection";
import DDAdjustersSection, { DDAdjustersSectionProps } from "./DDAdjustersSection";
import DDLawChangesSection, { DDLawChangesSectionProps } from "./DDLawChangesSection";
import DDCommonMistakesSection, { DDCommonMistakesSectionProps } from "./DDCommonMistakesSection";
import DDFightsSection, { DDFightsSectionProps } from "./DDFightsSection";
import DDLiabilitySection, { DDLiabilitySectionProps } from "./DDLiabilitySection";
import DDWhyChooseSection, { DDWhyChooseSectionProps } from "./DDWhyChooseSection";
import DDApartSection, { DDApartSectionProps } from "./DDApartSection";
import DDServesSection, { DDServesSectionProps } from "./DDServesSection";
import DDCourtsCitiesSection, { DDCourtsCitiesSectionProps } from "./DDCourtsCitiesSection";
import DDTestimonialsSection, { DDTestimonialsSectionProps } from "./DDTestimonialsSection";
import DDFreeCaseReviewSection, { DDFreeCaseReviewSectionProps } from "./DDFreeCaseReviewSection";
import DDFAQSection, { DDFAQSectionProps } from "./DDFAQSection";

export {
  DDHero,
  DDContactFormSection,
  DDTypesSection,
  DDAfterAccidentSection,
  DDCompensationSection,
  DDEvidenceSection,
  DDAdjustersSection,
  DDLawChangesSection,
  DDCommonMistakesSection,
  DDFightsSection,
  DDLiabilitySection,
  DDWhyChooseSection,
  DDApartSection,
  DDServesSection,
  DDCourtsCitiesSection,
  DDTestimonialsSection,
  DDFreeCaseReviewSection,
  DDFAQSection,
};

export type {
  DDHeroSectionProps,
  DDContactFormSectionProps,
  DDTypesSectionProps,
  DDAfterAccidentSectionProps,
  DDCompensationSectionProps,
  DDEvidenceSectionProps,
  DDAdjustersSectionProps,
  DDLawChangesSectionProps,
  DDCommonMistakesSectionProps,
  DDFightsSectionProps,
  DDLiabilitySectionProps,
  DDWhyChooseSectionProps,
  DDApartSectionProps,
  DDServesSectionProps,
  DDCourtsCitiesSectionProps,
  DDTestimonialsSectionProps,
  DDFreeCaseReviewSectionProps,
  DDFAQSectionProps,
};

export interface DrunkDrivingAccidentPageProps extends DDHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function DrunkDrivingAccidentPage({
  showNavbarFooter = true,
  ...heroProps
}: DrunkDrivingAccidentPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <DDHero {...heroProps} />
        <DDContactFormSection />
        <DDTypesSection />
        <DDAfterAccidentSection />
        <DDCompensationSection />
        <DDEvidenceSection />
        <DDAdjustersSection />
        <DDLawChangesSection />
        <DDCommonMistakesSection />
        <DDFightsSection />
        <DDLiabilitySection />
        <DDWhyChooseSection />
        <DDApartSection />
        <DDServesSection />
        <DDCourtsCitiesSection />
        <DDTestimonialsSection />
        <DDFreeCaseReviewSection />
        <DDFAQSection />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <DDHero {...heroProps} />
        <DDContactFormSection />
        <DDTypesSection />
        <DDAfterAccidentSection />
        <DDCompensationSection />
        <DDEvidenceSection />
        <DDAdjustersSection />
        <DDLawChangesSection />
        <DDCommonMistakesSection />
        <DDFightsSection />
        <DDLiabilitySection />
        <DDWhyChooseSection />
        <DDApartSection />
        <DDServesSection />
        <DDCourtsCitiesSection />
        <DDTestimonialsSection />
        <DDFreeCaseReviewSection />
        <DDFAQSection />
      </main>
      <Footer />
    </div>
  );
}
