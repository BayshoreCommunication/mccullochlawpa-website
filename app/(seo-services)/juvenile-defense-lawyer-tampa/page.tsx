import { Metadata } from "next";
import React from "react";
import Script from "next/script";
import {
  JDHero,
  JDContactFormSection,
  JDWhatCountsSection,
  JDJuvenileVsAdultSection,
  JDTypesSection,
  JDPenaltiesSection,
  JDEvidenceSection,
  JDDefensesSection,
  JDWhatHappensAfterArrestSection,
  JDChildRightsSection,
  JDCommonMistakesSection,
  JDHowWeHandleSection,
  JDResolvedWithoutTrialSection,
  JDWhyChooseSection,
  JDApartSection,
  JDServesSection,
  JDCourtsCitiesSection,
  JDTestimonialsSection,
  JDFreeCaseReviewSection,
  JDFAQSection,
} from "@/components/seo-services/juvenile-defense-lawyer-tampa";

export const metadata: Metadata = {
  title: "Juvenile Defense Lawyer Tampa | Free Case Review",
  description:
    "Parents face juvenile criminal charges in Tampa frequently. McCulloch Law helps families understand defense options and protect your child's future.",
  alternates: {
    canonical: "/juvenile-defense-lawyer-tampa",
  },
  openGraph: {
    title: "Juvenile Defense Lawyer Tampa | Free Case Review",
    description:
      "Parents face juvenile criminal charges in Tampa frequently. McCulloch Law helps families understand defense options and protect your child's future.",
    url: "https://mcfloridalaw.com/juvenile-defense-lawyer-tampa",
    siteName: "McCulloch Law P.A.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/seo-services/juvenile-defense-lawyer-tampa/assault-battery-school-fight.webp",
        width: 1152,
        height: 923,
        alt: "Juvenile Defense Lawyer Tampa - Protect Your Child Rights and Future",
        type: "image/webp",
      },
      {
        url: "/images/seo-services/juvenile-defense-lawyer-tampa/theft-shoplifting-property.webp",
        width: 1402,
        height: 1122,
        alt: "Juvenile Delinquency and Theft Defense Tampa",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juvenile Defense Lawyer Tampa | Free Case Review",
    description:
      "Parents face juvenile criminal charges in Tampa frequently. McCulloch Law helps families understand defense options and protect your child's future.",
    images: ["/images/seo-services/juvenile-defense-lawyer-tampa/assault-battery-school-fight.webp"],
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

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://mcfloridalaw.com/#legalService",
      name: "McCulloch Law, P.A. - Tampa Juvenile Defense Lawyer",
      url: "https://mcfloridalaw.com/juvenile-defense-lawyer-tampa",
      telephone: "(813) 444-2817",
      priceRange: "$$",
      image: {
        "@type": "ImageObject",
        url: "https://mcfloridalaw.com/images/seo-services/juvenile-defense-lawyer-tampa/assault-battery-school-fight.webp",
        caption: "Juvenile Defense Lawyer Tampa - Protect Your Child Rights and Future",
        width: 1152,
        height: 923,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "238 East Davis Boulevard, Ste 202",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33606",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.9333,
        longitude: -82.4578,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can my child's juvenile charges be dismissed in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dismissals happen when prosecution evidence remains legally weak. Attorneys evaluate every single legal weakness carefully. No lawyer guarantees dismissals under any circumstances ever. A strong defense motion forces the state to reconsider.",
          },
        },
        {
          "@type": "Question",
          name: "Can my child be tried as an adult in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adult prosecution occurs under specific statutory laws. Age and offense severity dictate court transfer rules. Serious cases require careful legal review immediately. Prosecutors hold the power to direct file charges.",
          },
        },
        {
          "@type": "Question",
          name: "Will a juvenile record affect my child's future?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Records impact future jobs and higher education. Sealing or expunction offers potential relief later on. Eligibility depends entirely on Florida statutory law. A clean record restores future opportunities for the child.",
          },
        },
      ],
    },
  ],
};

export default function JuvenileDefenseLawyerTampaPage() {
  return (
    <>
      <Script
        id="juvenile-defense-lawyer-tampa-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <div className="w-full">
        <JDHero />
        <JDContactFormSection />
        <JDWhatCountsSection />
        <JDJuvenileVsAdultSection />
        <JDTypesSection />
        <JDPenaltiesSection />
        <JDEvidenceSection />
        <JDDefensesSection />
        <JDWhatHappensAfterArrestSection />
        <JDChildRightsSection />
        <JDCommonMistakesSection />
        <JDHowWeHandleSection />
        <JDResolvedWithoutTrialSection />
        <JDWhyChooseSection />
        <JDApartSection />
        <JDServesSection />
        <JDCourtsCitiesSection />
        <JDTestimonialsSection />
        <JDFreeCaseReviewSection />
        <JDFAQSection />
      </div>
    </>
  );
}

