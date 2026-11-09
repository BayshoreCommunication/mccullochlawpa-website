import { Metadata } from "next";
import React from "react";
import Script from "next/script";
import {
  RDHero,
  RDContactFormSection,
  RDWhatIsRobberySection,
  RDRobberyVsTheftSection,
  RDTypesSection,
  RDPenaltiesSection,
  RDEvidenceSection,
  RDDefensesSection,
  RDCommonMistakesSection,
  RDWhatToDoAfterArrestSection,
  RDHowWeHandleSection,
  RDWhyChooseSection,
  RDApartSection,
  RDServesSection,
  RDCourtsCitiesSection,
  RDTestimonialsSection,
  RDFreeCaseReviewSection,
  RDFAQSection,
} from "@/components/seo-services/robbery-defense-attorney-tampa";

export const metadata: Metadata = {
  title: "Tampa Robbery Defense Attorney | McCulloch Law",
  description:
    "Robbery charges in Tampa can carry serious prison penalties. Understand the accusations and your defense options. Request for free review.",
  alternates: {
    canonical: "/robbery-defense-attorney-tampa",
  },
  openGraph: {
    title: "Tampa Robbery Defense Attorney | McCulloch Law",
    description:
      "Robbery charges in Tampa can carry serious prison penalties. Understand the accusations and your defense options. Request for free review.",
    url: "https://mcfloridalaw.com/robbery-defense-attorney-tampa",
    siteName: "McCulloch Law P.A.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/seo-services/robbery-defense-attorney-tampa/strong-arm-robbery.webp",
        width: 1200,
        height: 675,
        alt: "Tampa Robbery Defense Attorney - Strong Arm Robbery Defense",
        type: "image/webp",
      },
      {
        url: "/images/seo-services/robbery-defense-attorney-tampa/armed-robbery.webp",
        width: 1200,
        height: 675,
        alt: "Armed Robbery Defense Lawyer Florida Statutes 812.13 Tampa",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tampa Robbery Defense Attorney | McCulloch Law",
    description:
      "Robbery charges in Tampa can carry serious prison penalties. Understand the accusations and your defense options. Request for free review.",
    images: ["/images/seo-services/robbery-defense-attorney-tampa/strong-arm-robbery.webp"],
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
      name: "McCulloch Law, P.A. - Tampa Robbery Defense Attorney",
      url: "https://mcfloridalaw.com/robbery-defense-attorney-tampa",
      telephone: "(813) 444-2817",
      priceRange: "$$",
      image: {
        "@type": "ImageObject",
        url: "https://mcfloridalaw.com/images/seo-services/robbery-defense-attorney-tampa/strong-arm-robbery.webp",
        caption: "Tampa Robbery Defense Attorney - Proven Defense Against Criminal Charges",
        width: 1200,
        height: 675,
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
          name: "Can a robbery charge be reduced to theft?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A prosecutor may agree to reduce robbery to theft if the evidence fails to establish force, violence, assault or fear during the taking. A jury may also consider theft as a lesser included offense when the evidence supports it.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if a witness identifies the wrong person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your attorney can challenge the identification by examining the witness's initial description, viewing conditions, memory and police lineup procedures. The prosecution must still prove your identity beyond a reasonable doubt.",
          },
        },
        {
          "@type": "Question",
          name: "Can I be charged with armed robbery if police never recovered a weapon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Prosecutors may rely on eyewitness testimony, surveillance footage or circumstantial evidence to prove a weapon allegation. Police do not need to recover the weapon, but the State must establish the required elements beyond a reasonable doubt.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a robbery charge dismissed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A prosecutor may drop the charge or a judge may dismiss it when a valid legal ground exists. For example, a court may dismiss a case if undisputed facts fail to establish a prima facie case. Your attorney may also challenge unlawfully obtained evidence or other legal defects.",
          },
        },
        {
          "@type": "Question",
          name: "Can a robbery conviction be sealed or expunged?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Florida Statutes § 943.0584 specifically makes robbery convictions ineligible for court ordered sealing or expungement, even when the court withholds adjudication. An arrest record without a conviction may qualify under separate eligibility requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Should I speak with detectives before hiring a lawyer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Exercise your right to remain silent and request an attorney. Avoid discussing the alleged incident or giving statements without legal advice.",
          },
        },
      ],
    },
  ],
};

export default function RobberyDefenseAttorneyTampaPage() {
  return (
    <>
      <Script
        id="robbery-defense-attorney-tampa-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <div className="w-full">
        <RDHero />
        <RDContactFormSection />
        <RDWhatIsRobberySection />
        <RDRobberyVsTheftSection />
        <RDTypesSection />
        <RDPenaltiesSection />
        <RDEvidenceSection />
        <RDDefensesSection />
        <RDCommonMistakesSection />
        <RDWhatToDoAfterArrestSection />
        <RDHowWeHandleSection />
        <RDWhyChooseSection />
        <RDApartSection />
        <RDServesSection />
        <RDCourtsCitiesSection />
        <RDTestimonialsSection />
        <RDFreeCaseReviewSection />
        <RDFAQSection />
      </div>
    </>
  );
}

