import { Metadata } from "next";
import React from "react";
import ServiceCtaBanner from "@/components/seo-services/shared/ServiceCtaBanner";
import {
  BLHero,
  BLContactFormSection,
  BLWhatCountsSection,
  BLAssaultVsBatterySection,
  BLTypesSection,
  BLPenaltiesSection,
  BLEvidenceSection,
  BLDefensesSection,
  BLArrestSection,
  BLCommonMistakesSection,
  BLReviewCaseSection,
  BLWhyChooseSection,
  BLApartSection,
  BLServesSection,
  BLCourtsCitiesSection,
  BLTestimonialsSection,
  BLFreeCaseReviewSection,
  BLFAQSection,
} from "@/components/seo-services/battery-lawyer-tampa";

export const metadata: Metadata = {
  title: "Battery Lawyer Tampa | McCulloch Law",
  description:
    "Accused of unwanted physical contact in Tampa? Challenge the allegations and examine the evidence. See how a tampa battery lawyer can help.",
  alternates: {
    canonical: "/battery-lawyer-tampa",
  },
  openGraph: {
    title: "Battery Lawyer Tampa | McCulloch Law",
    description:
      "Accused of unwanted physical contact in Tampa? Challenge the allegations and examine the evidence. See how a tampa battery lawyer can help.",
    url: "https://www.mcfloridalaw.com/battery-lawyer-tampa",
    siteName: "McCulloch Law P.A.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/seo-services/battery-lawyer-tampa/tampa-battery-defense-lawyer-criminal-charges-hero.webp",
        width: 1920,
        height: 1133,
        alt: "Strategic defense against criminal battery charges by experienced Tampa battery lawyer Drew McCulloch",
        type: "image/webp",
      },
      {
        url: "/images/seo-services/battery-lawyer-tampa/florida-simple-battery-defense-lawyer-tampa-review.webp",
        width: 800,
        height: 641,
        alt: "Simple battery defense lawyer reviewing misdemeanor bodily contact evidence and police report details in Tampa",
        type: "image/webp",
      },
      {
        url: "/images/seo-services/battery-lawyer-tampa/florida-felony-battery-defense-attorney-in-tampa-fl.webp",
        width: 800,
        height: 408,
        alt: "Felony battery defense attorney analyzing Florida statutory bodily harm claims and medical evidence in Tampa court",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Battery Lawyer Tampa | McCulloch Law",
    description:
      "Accused of unwanted physical contact in Tampa? Challenge the allegations and examine the evidence. See how a tampa battery lawyer can help.",
    images: [
      "/images/seo-services/battery-lawyer-tampa/tampa-battery-defense-lawyer-criminal-charges-hero.webp",
    ],
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
      "@type": ["LegalService", "Attorney"],
      "@id": "https://www.mcfloridalaw.com/battery-lawyer-tampa/#legalService",
      name: "McCulloch Law, P.A. - Tampa Battery Lawyer",
      description:
        "Accused of unwanted physical contact in Tampa? Challenge the allegations and examine the evidence. See how a tampa battery lawyer can help.",
      url: "https://www.mcfloridalaw.com/battery-lawyer-tampa",
      telephone: "(813) 444-2817",
      email: "office@mcfloridalaw.com",
      priceRange: "$$",
      image: {
        "@type": "ImageObject",
        url: "https://www.mcfloridalaw.com/images/seo-services/battery-lawyer-tampa/tampa-battery-defense-lawyer-criminal-charges-hero.webp",
        caption: "Tampa Battery Defense Lawyer Criminal Charges Overview",
        description:
          "McCulloch Law PA provides strategic criminal defense representation for individuals facing misdemeanor and felony battery charges in Tampa Florida.",
        width: 1920,
        height: 1133,
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
      areaServed: [
        {
          "@type": "City",
          name: "Tampa",
        },
        {
          "@type": "AdministrativeArea",
          name: "Hillsborough County",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tampa Bay",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.mcfloridalaw.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tampa Battery Lawyer",
          item: "https://www.mcfloridalaw.com/battery-lawyer-tampa",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "If this is false accusation, will it still be on my record?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If police arrested and fingerprinted you, the arrest may remain in Florida criminal history records even after prosecutors drop the charge or a court acquits you. You may qualify for record sealing or expungement, depending on the case outcome and Florida's eligibility rules.",
          },
        },
        {
          "@type": "Question",
          name: "Will a no contact order keep me out of my house?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can. A no contact order or domestic violence injunction may prohibit contact with another person and require you to leave a shared home.",
          },
        },
        {
          "@type": "Question",
          name: "Can I really be charged if nobody was hurt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Florida law defines battery to include intentionally touching or striking another person against their will, even without a visible injury. The law also covers intentionally causing bodily harm.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to talk to the detective who left a card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, you can decline to answer investigative questions and request legal counsel. Clearly state your intention to remain silent and ask for an attorney before discussing the allegations.",
          },
        },
        {
          "@type": "Question",
          name: "The contact was brief, accidental or mutual. Does that matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Brief, intentional contact against another person's will may qualify as battery, even without an injury. Truly accidental contact may challenge the intent required by Florida law. Mutual participation in a confrontation does not automatically excuse battery.",
          },
        },
      ],
    },
  ],
};

export default function BatteryLawyerTampaPage() {
  return (
    <>
      <script
        id="battery-lawyer-tampa-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="w-full">
        <BLHero />
        <BLContactFormSection />
        <BLWhatCountsSection />
        <BLAssaultVsBatterySection />
        <BLTypesSection />
        <ServiceCtaBanner />
        <BLPenaltiesSection />
        <BLEvidenceSection />
        <BLDefensesSection />
        <ServiceCtaBanner />
        <BLArrestSection />
        <BLCommonMistakesSection />
        <BLReviewCaseSection />
        <ServiceCtaBanner />
        <BLWhyChooseSection />
        <BLApartSection />
        <BLServesSection />
        <ServiceCtaBanner />
        <BLCourtsCitiesSection />
        <BLTestimonialsSection />
        <BLFreeCaseReviewSection />
        <BLFAQSection />
      </div>
    </>
  );
}
