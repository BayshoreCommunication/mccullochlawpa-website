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
  title: "Tampa Domestic Violence Defense Lawyer | McCulloch Law P.A.",
  description:
    "Charged with domestic violence in Tampa? Fight against false allegations and protect your future with experienced defense lawyer McCulloch Law P.A.",
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
