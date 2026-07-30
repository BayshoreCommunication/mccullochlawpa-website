import React from "react";
import { Metadata } from "next";
import {
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
  DVFreeCaseReviewSection,
  DVServesSection,
  DVCourtsCitiesSection,
  DVTestimonialsSection,
  DVFAQSection,
} from "@/components/seo-services/domestic-violence-defense-lawyer-tampa";

export const metadata: Metadata = {
  title: "Lawyer SEO Agency Tampa | Choose the Best SEO Team",
  description:
    "Searching for a Lawyer SEO Agency in Tampa? Learn about our services and find the best SEO solution for your law practice.",
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
    <div className="w-full font-sans">
      <DVHero />
      <DVFreeCaseReviewSection />
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
      <DVFreeCaseReviewSection />
      <DVFAQSection />

    </div>
  );
}
