import { Metadata } from "next";
import React from "react";
import {
  SCHero,
  SCContactFormSection,
  SCTypesSection,
  SCArrestSection,
  SCRestrictionsSection,
  SCPenaltiesSection,
  SCEvidenceSection,
  SCLawChangesSection,
  SCCommonMistakesSection,
  SCFightBackSection,
  SCInjunctionsSection,
  SCWhyChooseSection,
  SCServesSection,
  SCCourtsCitiesSection,
  SCTestimonialsSection,
  SCFreeCaseReviewSection,
  SCFAQSection,
} from "@/components/seo-services/sex-crime-defense-lawyer-tampa";

export const metadata: Metadata = {
  title: "Sex Crime Defense Lawyer in Tampa, FL",
  description:
    "Accused of a sex crime in Tampa? McCulloch Law defends clients against serious charges. Call (813) 444-2817 for a confidential consultation.",
  alternates: {
    canonical: "/sex-crime-defense-lawyer-tampa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function SexCrimePage() {
  return (
    <div className="w-full">
      <SCHero />
      <SCContactFormSection />
      <SCTypesSection />
      <SCArrestSection />
      <SCRestrictionsSection />
      <SCPenaltiesSection />
      <SCEvidenceSection />
      <SCLawChangesSection />
      <SCCommonMistakesSection />
      <SCFightBackSection />
      <SCInjunctionsSection />
      <SCWhyChooseSection />
      <SCServesSection />
      <SCCourtsCitiesSection />
      <SCTestimonialsSection />
      <SCFreeCaseReviewSection />
      <SCFAQSection />
    </div>
  );
}
