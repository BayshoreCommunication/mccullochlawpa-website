import React from "react";
import { Metadata } from "next";
import {
  DVHero,
  DVContactFormSection,
  DVTypesSection,
  DVArrestSection,
  DVRestrictionsSection,
  DVPenaltiesSection,
  DVEvidenceSection,
  DVLawChangesSection,
  DVCommonMistakesSection,
  DVFightBackSection,
  DVInjunctionsSection,
  DVWhyChooseSection,
  DVFreeCaseReviewSection,
  DVServesSection,
  DVCourtsCitiesSection,
  DVTestimonialsSection,
  DVFAQSection,
} from "@/components/seo-services/domestic-violence-defense-lawyer-tampa";

export const metadata: Metadata = {
  title: "Domestic Violence Defense Lawyer in Tampa, FL",
  description:
    "Charged with domestic violence in Tampa? McCulloch Law defends against false claims, injunctions, and criminal charges. Call (813) 444-2817 today.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function DomesticViolencePage() {
  return (
    <div className="w-full">
      <DVHero />
      <DVContactFormSection />
      <DVTypesSection />
      <DVArrestSection />
      <DVRestrictionsSection />
      <DVPenaltiesSection />
      <DVEvidenceSection />
      <DVLawChangesSection />
      <DVCommonMistakesSection />
      <DVFightBackSection />
      <DVInjunctionsSection />
      <DVWhyChooseSection />
      <DVServesSection />
      <DVCourtsCitiesSection />
      <DVTestimonialsSection />
      <DVFreeCaseReviewSection />
      <DVFAQSection />
    </div>
  );
}