"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import RDHero, { RDHeroSectionProps } from "./RDHero";
import RDContactFormSection, { RDContactFormSectionProps } from "./RDContactFormSection";
import RDWhatIsRobberySection, { RDWhatIsRobberySectionProps } from "./RDWhatIsRobberySection";
import RDRobberyVsTheftSection, { RDRobberyVsTheftSectionProps } from "./RDRobberyVsTheftSection";
import RDTypesSection, { RDTypesSectionProps } from "./RDTypesSection";
import RDPenaltiesSection, { RDPenaltiesSectionProps } from "./RDPenaltiesSection";
import RDEvidenceSection, { RDEvidenceSectionProps } from "./RDEvidenceSection";
import RDDefensesSection, { RDDefensesSectionProps } from "./RDDefensesSection";
import RDCommonMistakesSection, { RDCommonMistakesSectionProps } from "./RDCommonMistakesSection";
import RDWhatToDoAfterArrestSection, { RDWhatToDoAfterArrestSectionProps } from "./RDWhatToDoAfterArrestSection";
import RDHowWeHandleSection, { RDHowWeHandleSectionProps } from "./RDHowWeHandleSection";
import RDWhyChooseSection, { RDWhyChooseSectionProps } from "./RDWhyChooseSection";
import RDApartSection, { RDApartSectionProps } from "./RDApartSection";
import RDServesSection, { RDServesSectionProps } from "./RDServesSection";
import RDCourtsCitiesSection, { RDCourtsCitiesSectionProps } from "./RDCourtsCitiesSection";
import RDTestimonialsSection, { RDTestimonialsSectionProps } from "./RDTestimonialsSection";
import RDFreeCaseReviewSection, { RDFreeCaseReviewSectionProps } from "./RDFreeCaseReviewSection";
import RDFAQSection, { RDFAQSectionProps } from "./RDFAQSection";

export {
  RDHero,
  RDContactFormSection,
  RDWhatIsRobberySection,
  RDRobberyVsTheftSection,
  RDTypesSection,
  RDPenaltiesSection,
  RDEvidenceSection,
  RDDefensesSection,
  RDCommonMistakesSection,
  RDWhatToDoAfterArrestSection,
  RDHowWeHandleSection,
  RDWhyChooseSection,
  RDApartSection,
  RDServesSection,
  RDCourtsCitiesSection,
  RDTestimonialsSection,
  RDFreeCaseReviewSection,
  RDFAQSection,
};

export type {
  RDHeroSectionProps,
  RDContactFormSectionProps,
  RDWhatIsRobberySectionProps,
  RDRobberyVsTheftSectionProps,
  RDTypesSectionProps,
  RDPenaltiesSectionProps,
  RDEvidenceSectionProps,
  RDDefensesSectionProps,
  RDCommonMistakesSectionProps,
  RDWhatToDoAfterArrestSectionProps,
  RDHowWeHandleSectionProps,
  RDWhyChooseSectionProps,
  RDApartSectionProps,
  RDServesSectionProps,
  RDCourtsCitiesSectionProps,
  RDTestimonialsSectionProps,
  RDFreeCaseReviewSectionProps,
  RDFAQSectionProps,
};

export interface RobberyDefenseAttorneyTampaPageProps extends RDHeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function RobberyDefenseAttorneyTampaPage({
  showNavbarFooter = true,
  ...heroProps
}: RobberyDefenseAttorneyTampaPageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <RDHero {...heroProps} />
        <RDContactFormSection />
        <RDWhatIsRobberySection />
        <RDRobberyVsTheftSection />
        <RDTypesSection />
        <RDPenaltiesSection />
        <RDEvidenceSection />
        <RDDefensesSection />
        <RDCommonMistakesSection />
        <RDWhatToDoAfterArrestSection />
        <RDHowWeHandleSection />
        <RDWhyChooseSection />
        <RDApartSection />
        <RDServesSection />
        <RDCourtsCitiesSection />
        <RDTestimonialsSection />
        <RDFreeCaseReviewSection />
        <RDFAQSection />
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white selection:bg-primary selection:text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <RDHero {...heroProps} />
        <RDContactFormSection />
        <RDWhatIsRobberySection />
        <RDRobberyVsTheftSection />
        <RDTypesSection />
        <RDPenaltiesSection />
        <RDEvidenceSection />
        <RDDefensesSection />
        <RDCommonMistakesSection />
        <RDWhatToDoAfterArrestSection />
        <RDHowWeHandleSection />
        <RDWhyChooseSection />
        <RDApartSection />
        <RDServesSection />
        <RDCourtsCitiesSection />
        <RDTestimonialsSection />
        <RDFreeCaseReviewSection />
        <RDFAQSection />
      </main>
      <Footer />
    </div>
  );
}

