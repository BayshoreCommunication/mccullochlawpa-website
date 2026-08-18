import { Metadata } from "next";
import FDHero from "@/components/seo-services/fraud-defense-lawyer-tampa/FDHero";
import FDContactFormSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDContactFormSection";
import FDTypesSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDTypesSection";
import FDInvestigateSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDInvestigateSection";
import FDPenaltiesSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDPenaltiesSection";
import FDEvidenceSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDEvidenceSection";
import FDRestrictionsSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDRestrictionsSection";
import FDLawChangesSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDLawChangesSection";
import FDCommonMistakesSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDCommonMistakesSection";
import FDFightBackSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDFightBackSection";
import FDWhyChooseSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDWhyChooseSection";
import FDServesSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDServesSection";
import FDCourtsCitiesSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDCourtsCitiesSection";
import FDTestimonialsSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDTestimonialsSection";
import FDFreeCaseReviewSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDFreeCaseReviewSection";
import FDFAQSection from "@/components/seo-services/fraud-defense-lawyer-tampa/FDFAQSection";

export const metadata: Metadata = {
  title: "Fraud Defense Lawyer Tampa | McCulloch Law",
  description:
    "Protect your rights with a fraud defense lawyer in Tampa. Build a strong defense against fraud charges with McCulloch Law.",
  alternates: {
    canonical: "/fraud-defense-lawyer-tampa",
  },
};

export default function FraudDefenseLawyerTampaPage() {
  return (
    <div className="w-full">
      <FDHero />
      <FDContactFormSection />
      <FDTypesSection />
      <FDInvestigateSection />
      <FDPenaltiesSection />
      <FDEvidenceSection />
      <FDRestrictionsSection />
      <FDLawChangesSection />
      <FDCommonMistakesSection />
      <FDFightBackSection />
      <FDWhyChooseSection />
      <FDServesSection />
      <FDCourtsCitiesSection />
      <FDTestimonialsSection />
      <FDFreeCaseReviewSection />
      <FDFAQSection />
    </div>
  );
}
