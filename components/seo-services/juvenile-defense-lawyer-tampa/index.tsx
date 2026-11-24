"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ServiceCtaBanner from "../shared/ServiceCtaBanner";

import JDHero, { JDHeroSectionProps } from "./JDHero";
import JDContactFormSection, { JDContactFormSectionProps } from "./JDContactFormSection";
import JDWhatCountsSection, { JDWhatCountsSectionProps } from "./JDWhatCountsSection";
import JDJuvenileVsAdultSection, { JDJuvenileVsAdultSectionProps } from "./JDJuvenileVsAdultSection";
import JDTypesSection, { JDTypesSectionProps } from "./JDTypesSection";
import JDPenaltiesSection, { JDPenaltiesSectionProps } from "./JDPenaltiesSection";
import JDEvidenceSection, { JDEvidenceSectionProps } from "./JDEvidenceSection";
import JDDefensesSection, { JDDefensesSectionProps } from "./JDDefensesSection";
import JDWhatHappensAfterArrestSection, { JDWhatHappensAfterArrestSectionProps } from "./JDWhatHappensAfterArrestSection";
import JDChildRightsSection, { JDChildRightsSectionProps } from "./JDChildRightsSection";
import JDCommonMistakesSection, { JDCommonMistakesSectionProps } from "./JDCommonMistakesSection";
import JDHowWeHandleSection, { JDHowWeHandleSectionProps } from "./JDHowWeHandleSection";
import JDResolvedWithoutTrialSection, { JDResolvedWithoutTrialSectionProps } from "./JDResolvedWithoutTrialSection";
import JDWhyChooseSection, { JDWhyChooseSectionProps } from "./JDWhyChooseSection";
import JDApartSection, { JDApartSectionProps } from "./JDApartSection";
import JDServesSection, { JDServesSectionProps } from "./JDServesSection";
import JDCourtsCitiesSection, { JDCourtsCitiesSectionProps } from "./JDCourtsCitiesSection";
import JDTestimonialsSection, { JDTestimonialsSectionProps } from "./JDTestimonialsSection";
import JDFreeCaseReviewSection, { JDFreeCaseReviewSectionProps } from "./JDFreeCaseReviewSection";
import JDFAQSection, { JDFAQSectionProps } from "./JDFAQSection";

export {
  JDHero,
  JDContactFormSection,
  JDWhatCountsSection,
  JDJuvenileVsAdultSection,
  JDTypesSection,
  JDPenaltiesSection,
  JDEvidenceSection,
  JDDefensesSection,
  JDWhatHappensAfterArrestSection,
  JDChildRightsSection,
  JDCommonMistakesSection,
  JDHowWeHandleSection,
  JDResolvedWithoutTrialSection,
  JDWhyChooseSection,
  JDApartSection,
  JDServesSection,
  JDCourtsCitiesSection,
  JDTestimonialsSection,
  JDFreeCaseReviewSection,
  JDFAQSection,
};

export type {
  JDHeroSectionProps,
  JDContactFormSectionProps,
  JDWhatCountsSectionProps,
  JDJuvenileVsAdultSectionProps,
  JDTypesSectionProps,
  JDPenaltiesSectionProps,
  JDEvidenceSectionProps,
  JDDefensesSectionProps,
  JDWhatHappensAfterArrestSectionProps,
  JDChildRightsSectionProps,
  JDCommonMistakesSectionProps,
  JDHowWeHandleSectionProps,
  JDResolvedWithoutTrialSectionProps,
  JDWhyChooseSectionProps,
  JDApartSectionProps,
  JDServesSectionProps,
  JDCourtsCitiesSectionProps,
  JDTestimonialsSectionProps,
  JDFreeCaseReviewSectionProps,
  JDFAQSectionProps,
};

export interface JuvenileDefenseLawyerTampaPageProps extends JDHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function JuvenileDefenseLawyerTampaPage({
  showNavbarFooter = true,
  ...heroProps
}: JuvenileDefenseLawyerTampaPageProps) {
  const sections = (
    <>
      <JDHero {...heroProps} />
      <JDContactFormSection />
      <JDWhatCountsSection />
      <JDJuvenileVsAdultSection />
      <JDTypesSection />
      <ServiceCtaBanner />
      <JDPenaltiesSection />
      <JDEvidenceSection />
      <JDDefensesSection />
      <ServiceCtaBanner />
      <JDWhatHappensAfterArrestSection />
      <JDChildRightsSection />
      <JDCommonMistakesSection />
      <ServiceCtaBanner />
      <JDHowWeHandleSection />
      <JDResolvedWithoutTrialSection />
      <JDWhyChooseSection />
      <ServiceCtaBanner />
      <JDApartSection />
      <JDServesSection />
      <JDCourtsCitiesSection />
      <ServiceCtaBanner />
      <JDTestimonialsSection />
      <JDFreeCaseReviewSection />
      <JDFAQSection />
    </>
  );

  if (!showNavbarFooter) {
    return sections;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white selection:bg-primary selection:text-slate-900">
      <Navbar />
      <main className="flex-grow">{sections}</main>
      <Footer />
    </div>
  );
}

