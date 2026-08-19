import { Metadata } from "next";
import CDHero from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDHero";
import CDContactFormSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDContactFormSection";
import CDTypesSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDTypesSection";
import CDArrestSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDArrestSection";
import CDPenaltiesSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDPenaltiesSection";
import CDEvidenceSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDEvidenceSection";
import CDRestrictionsSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDRestrictionsSection";
import CDLawChangesSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDLawChangesSection";
import CDCommonMistakesSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDCommonMistakesSection";
import CDFightBackSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDFightBackSection";
import CDInjunctionsSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDInjunctionsSection";
import CDWhyChooseSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDWhyChooseSection";
import CDServesSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDServesSection";
import CDCourtsCitiesSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDCourtsCitiesSection";
import CDTestimonialsSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDTestimonialsSection";
import CDFreeCaseReviewSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDFreeCaseReviewSection";
import CDFAQSection from "@/components/seo-services/criminal-defense-lawyer-tampa-fl/CDFAQSection";

export const metadata: Metadata = {
  title: "Criminal Defense Lawyer in Tampa, FL",
  description:
    "Facing criminal charges in Tampa? McCulloch Law provides experienced felony and misdemeanor defense. Call (813) 444-2817 today.",
  alternates: {
    canonical: "/criminal-defense-lawyer-tampa-fl",
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

export default function CriminalDefenseLawyerTampaFLPage() {
  return (
    <div className="w-full">
      <CDHero />
      <CDContactFormSection />
      <CDTypesSection />
      <CDArrestSection />
      <CDPenaltiesSection />
      <CDEvidenceSection />
      <CDRestrictionsSection />
      <CDLawChangesSection />
      <CDCommonMistakesSection />
      <CDFightBackSection />
      <CDInjunctionsSection />
      <CDWhyChooseSection />
      <CDServesSection />
      <CDCourtsCitiesSection />
      <CDTestimonialsSection />
      <CDFreeCaseReviewSection />
      <CDFAQSection />
    </div>
  );
}
