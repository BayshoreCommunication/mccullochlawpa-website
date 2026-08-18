import { Metadata } from "next";
import PIHero from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIHero";
import PIContactFormSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIContactFormSection";
import PITypesSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PITypesSection";
import PIAfterAccidentSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIAfterAccidentSection";
import PINoFaultSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PINoFaultSection";
import PICompensationSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PICompensationSection";
import PIEvidenceSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIEvidenceSection";
import PIAdjustersSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIAdjustersSection";
import PIComparativeNegligenceSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIComparativeNegligenceSection";
import PIWrongfulDeathSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIWrongfulDeathSection";
import PILawChangesSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PILawChangesSection";
import PIStatuteSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIStatuteSection";
import PICommonMistakesSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PICommonMistakesSection";
import PIFightsSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIFightsSection";
import PIUninsuredSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIUninsuredSection";
import PIWhyChooseSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIWhyChooseSection";
import PIServesSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIServesSection";
import PICourtsCitiesSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PICourtsCitiesSection";
import PITestimonialsSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PITestimonialsSection";
import PIFreeCaseReviewSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIFreeCaseReviewSection";
import PIFAQSection from "@/components/seo-services/best-personal-injury-lawyer-tampa-car-accidents/PIFAQSection";

export const metadata: Metadata = {
  title: "Personal Injury Lawyer in Tampa for Car Accidents",
  description:
    "Injured in a Tampa car accident? McCulloch Law fights for the compensation you deserve. Call (813) 444-2817 for a free consultation.",
  alternates: {
    canonical: "/best-personal-injury-lawyer-tampa-car-accidents",
  },
};

export default function BestPersonalInjuryLawyerTampaCarAccidentsPage() {
  return (
    <div className="w-full">
      <PIHero />
      <PIContactFormSection />
      <PITypesSection />
      <PIAfterAccidentSection />
      <PINoFaultSection />
      <PICompensationSection />
      <PIEvidenceSection />
      <PIAdjustersSection />
      <PIComparativeNegligenceSection />
      <PIWrongfulDeathSection />
      <PILawChangesSection />
      <PIStatuteSection />
      <PICommonMistakesSection />
      <PIFightsSection />
      <PIUninsuredSection />
      <PIWhyChooseSection />
      <PIServesSection />
      <PICourtsCitiesSection />
      <PITestimonialsSection />
      <PIFreeCaseReviewSection />
      <PIFAQSection />
    </div>
  );
}
