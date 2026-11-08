"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import ALHero, { ALHeroSectionProps } from "./ALHero";
import ALContactFormSection, { ALContactFormSectionProps } from "./ALContactFormSection";
import ALWhatCountsSection, { ALWhatCountsSectionProps } from "./ALWhatCountsSection";
import ALAssaultVsBatterySection, { ALAssaultVsBatterySectionProps } from "./ALAssaultVsBatterySection";
import ALTypesSection, { ALTypesSectionProps } from "./ALTypesSection";
import ALPenaltiesSection, { ALPenaltiesSectionProps } from "./ALPenaltiesSection";
import ALEvidenceSection, { ALEvidenceSectionProps } from "./ALEvidenceSection";
import ALDefensesSection, { ALDefensesSectionProps } from "./ALDefensesSection";
import ALArrestSection, { ALArrestSectionProps } from "./ALArrestSection";
import ALCommonMistakesSection, { ALCommonMistakesSectionProps } from "./ALCommonMistakesSection";
import ALHowWeHandleSection, { ALHowWeHandleSectionProps } from "./ALHowWeHandleSection";
import ALWhyChooseSection, { ALWhyChooseSectionProps } from "./ALWhyChooseSection";
import ALApartSection, { ALApartSectionProps } from "./ALApartSection";
import ALServesSection, { ALServesSectionProps } from "./ALServesSection";
import ALCourtsCitiesSection, { ALCourtsCitiesSectionProps } from "./ALCourtsCitiesSection";
import ALTestimonialsSection, { ALTestimonialsSectionProps } from "./ALTestimonialsSection";
import ALFreeCaseReviewSection, { ALFreeCaseReviewSectionProps } from "./ALFreeCaseReviewSection";
import ALFAQSection, { ALFAQSectionProps } from "./ALFAQSection";

export {
  ALHero,
  ALContactFormSection,
  ALWhatCountsSection,
  ALAssaultVsBatterySection,
  ALTypesSection,
  ALPenaltiesSection,
  ALEvidenceSection,
  ALDefensesSection,
  ALArrestSection,
  ALCommonMistakesSection,
  ALHowWeHandleSection,
  ALWhyChooseSection,
  ALApartSection,
  ALServesSection,
  ALCourtsCitiesSection,
  ALTestimonialsSection,
  ALFreeCaseReviewSection,
  ALFAQSection,
};

export type {
  ALHeroSectionProps,
  ALContactFormSectionProps,
  ALWhatCountsSectionProps,
  ALAssaultVsBatterySectionProps,
  ALTypesSectionProps,
  ALPenaltiesSectionProps,
  ALEvidenceSectionProps,
  ALDefensesSectionProps,
  ALArrestSectionProps,
  ALCommonMistakesSectionProps,
  ALHowWeHandleSectionProps,
  ALWhyChooseSectionProps,
  ALApartSectionProps,
  ALServesSectionProps,
  ALCourtsCitiesSectionProps,
  ALTestimonialsSectionProps,
  ALFreeCaseReviewSectionProps,
  ALFAQSectionProps,
};

export interface AssaultLawyerTampaPageProps extends ALHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function AssaultLawyerTampaPage({
  showNavbarFooter = true,
  ...heroProps
}: AssaultLawyerTampaPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <ALHero {...heroProps} />
        <ALContactFormSection />
        <ALWhatCountsSection />
        <ALAssaultVsBatterySection />
        <ALTypesSection />
        <ALPenaltiesSection />
        <ALEvidenceSection />
        <ALDefensesSection />
        <ALArrestSection />
        <ALCommonMistakesSection />
        <ALHowWeHandleSection />
        <ALWhyChooseSection />
        <ALApartSection />
        <ALServesSection />
        <ALCourtsCitiesSection />
        <ALTestimonialsSection />
        <ALFreeCaseReviewSection />
        <ALFAQSection />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <ALHero {...heroProps} />
        <ALContactFormSection />
        <ALWhatCountsSection />
        <ALAssaultVsBatterySection />
        <ALTypesSection />
        <ALPenaltiesSection />
        <ALEvidenceSection />
        <ALDefensesSection />
        <ALArrestSection />
        <ALCommonMistakesSection />
        <ALHowWeHandleSection />
        <ALWhyChooseSection />
        <ALApartSection />
        <ALServesSection />
        <ALCourtsCitiesSection />
        <ALTestimonialsSection />
        <ALFreeCaseReviewSection />
        <ALFAQSection />
      </main>
      <Footer />
    </div>
  );
}

