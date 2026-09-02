import { Metadata } from "next";
import React from "react";
import {
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
  DDTestimonialsSection,
  DDFreeCaseReviewSection,
  DDFAQSection,
} from "@/components/seo-services/drunk-driving-accident-lawyer-florida";

export const metadata: Metadata = {
  title: "Drunk Driving Accident Lawyer in Florida | Free Consultation",
  description:
    "Injured in drunk driving accident in Florida? McCulloch Law builds cases to recover compensation for injuries. Call (813) 444-2817 today for free case review.",
  alternates: {
    canonical: "/drunk-driving-accident-lawyer-florida",
  },
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

export default function DrunkDrivingAccidentLawyerFloridaPage() {
  return (
    <div className="w-full">
      <DDHero />
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
      <DDTestimonialsSection />
      <DDFreeCaseReviewSection />
      <DDFAQSection />
    </div>
  );
}
