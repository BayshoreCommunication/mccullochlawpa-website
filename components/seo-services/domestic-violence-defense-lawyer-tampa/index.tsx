"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import DVHero, { HeroSectionProps } from "./DVHero";
import DVTypesSection, { DomesticViolenceTypesSectionProps } from "./DVTypesSection";
import DVArrestSection, { DomesticViolenceArrestSectionProps } from "./DVArrestSection";
import DVRestrictionsSection, { DomesticViolenceRestrictionsSectionProps } from "./DVRestrictionsSection";
import DVPenaltiesSection, { DomesticViolencePenaltiesSectionProps } from "./DVPenaltiesSection";
import DVEvidenceSection, { DomesticViolenceEvidenceSectionProps } from "./DVEvidenceSection";
import DVLawChangesSection, { DomesticViolenceLawChangesSectionProps } from "./DVLawChangesSection";
import DVFightBackSection, { DomesticViolenceFightBackSectionProps } from "./DVFightBackSection";
import DVInjunctionsSection, { DomesticViolenceInjunctionsSectionProps } from "./DVInjunctionsSection";
import DVWhyChooseSection, { DomesticViolenceWhyChooseSectionProps } from "./DVWhyChooseSection";
import DVServesSection, { DVServesSectionProps } from "./DVServesSection";
import DVCourtsCitiesSection, { DVCourtsCitiesSectionProps } from "./DVCourtsCitiesSection";
import DVTestimonialsSection, { DVTestimonialsSectionProps } from "./DVTestimonialsSection";
import DVFAQSection, { DVFAQSectionProps } from "./DVFAQSection";
import DVFreeCaseReviewSection, { FreeCaseReviewSectionProps } from "./DVFreeCaseReviewSection";

// Short Exports
export {
  DVHero,
  DVTypesSection,
  DVArrestSection,
  DVRestrictionsSection,
  DVPenaltiesSection,
  DVEvidenceSection,
  DVLawChangesSection,
  DVFightBackSection,
  DVInjunctionsSection,
  DVWhyChooseSection,
  DVServesSection,
  DVCourtsCitiesSection,
  DVTestimonialsSection,
  DVFAQSection,
  DVFreeCaseReviewSection,
  // Alias long names for backward compatibility
  DVHero as DomesticViolenceHero,
  DVTypesSection as DomesticViolenceTypesSection,
  DVArrestSection as DomesticViolenceArrestSection,
  DVRestrictionsSection as DomesticViolenceRestrictionsSection,
  DVPenaltiesSection as DomesticViolencePenaltiesSection,
  DVEvidenceSection as DomesticViolenceEvidenceSection,
  DVLawChangesSection as DomesticViolenceLawChangesSection,
  DVFightBackSection as DomesticViolenceFightBackSection,
  DVInjunctionsSection as DomesticViolenceInjunctionsSection,
  DVWhyChooseSection as DomesticViolenceWhyChooseSection,
  DVFreeCaseReviewSection as FreeCaseReviewSection,
};

export type {
  HeroSectionProps,
  DomesticViolenceTypesSectionProps,
  DomesticViolenceArrestSectionProps,
  DomesticViolenceRestrictionsSectionProps,
  DomesticViolencePenaltiesSectionProps,
  DomesticViolenceEvidenceSectionProps,
  DomesticViolenceLawChangesSectionProps,
  DomesticViolenceFightBackSectionProps,
  DomesticViolenceInjunctionsSectionProps,
  DomesticViolenceWhyChooseSectionProps,
  DVServesSectionProps,
  DVCourtsCitiesSectionProps,
  DVTestimonialsSectionProps,
  DVFAQSectionProps,
  FreeCaseReviewSectionProps,
};

export interface DomesticViolencePageProps extends HeroSectionProps {
  showNavbarFooter?: boolean;
}

export default function DomesticViolencePage({
  showNavbarFooter = true,
  ...heroProps
}: DomesticViolencePageProps) {
  if (!showNavbarFooter) {
    return (
      <>
        <DVHero {...heroProps} />
        <DVTypesSection />
        <DVArrestSection />
        <DVRestrictionsSection />
        <DVPenaltiesSection />
        <DVEvidenceSection />
        <DVLawChangesSection />
        <DVFightBackSection />
        <DVInjunctionsSection />
        <DVWhyChooseSection />
        <DVServesSection />
        <DVCourtsCitiesSection />
        <DVTestimonialsSection />
        <DVFAQSection />
        <DVFreeCaseReviewSection />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow font-sans">
        <DVHero {...heroProps} />
        <DVTypesSection />
        <DVArrestSection />
        <DVRestrictionsSection />
        <DVPenaltiesSection />
        <DVEvidenceSection />
        <DVLawChangesSection />
        <DVFightBackSection />
        <DVInjunctionsSection />
        <DVWhyChooseSection />
        <DVServesSection />
        <DVCourtsCitiesSection />
        <DVTestimonialsSection />
        <DVFAQSection />
        <DVFreeCaseReviewSection />
      </main>
      <Footer />
    </div>
  );
}
