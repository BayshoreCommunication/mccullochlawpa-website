import { Metadata } from "next";
import React from "react";
import Script from "next/script";
import {
  ALHero,
  ALContactFormSection,
  ALWhatCountsSection,
  ALAssaultVsBatterySection,
  ALTypesSection,
  ALPenaltiesSection,
  ALEvidenceSection,
  ALDefensesSection,
  ALArrestSection,
  ALCommonMistakesSection,
  ALHowWeHandleSection,
  ALWhyChooseSection,
  ALApartSection,
  ALServesSection,
  ALCourtsCitiesSection,
  ALTestimonialsSection,
  ALFreeCaseReviewSection,
  ALFAQSection,
} from "@/components/seo-services/assault-lawyer-tampa";

export const metadata: Metadata = {
  title: "Assault Lawyer Tampa | Get Free Case Review",
  description:
    "An assault charge in Tampa can affect your criminal record and future. Discuss your defense options with our tampa assault lawyer.",
  alternates: {
    canonical: "/assault-lawyer-tampa",
  },
  openGraph: {
    title: "Assault Lawyer Tampa | Get Free Case Review",
    description:
      "An assault charge in Tampa can affect your criminal record and future. Discuss your defense options with our tampa assault lawyer.",
    url: "https://mcfloridalaw.com/assault-lawyer-tampa",
    siteName: "McCulloch Law P.A.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/seo-services/assault-lawyer-tampa/simple-assault.webp",
        width: 1200,
        height: 630,
        alt: "Tampa Assault Lawyer Defense Against Criminal Charges",
        type: "image/webp",
      },
      {
        url: "/images/seo-services/assault-lawyer-tampa/aggravated-assault.webp",
        width: 1200,
        height: 630,
        alt: "Aggravated Assault Defense Florida Statutes 784.021 Tampa",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assault Lawyer Tampa | Get Free Case Review",
    description:
      "An assault charge in Tampa can affect your criminal record and future. Discuss your defense options with our tampa assault lawyer.",
    images: ["/images/seo-services/assault-lawyer-tampa/simple-assault.webp"],
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
      name: "McCulloch Law, P.A. - Tampa Assault Lawyer",
      url: "https://mcfloridalaw.com/assault-lawyer-tampa",
      telephone: "(813) 444-2817",
      priceRange: "$$",
      image: {
        "@type": "ImageObject",
        url: "https://mcfloridalaw.com/images/seo-services/assault-lawyer-tampa/simple-assault.webp",
        caption: "Tampa Assault Lawyer Defense Against Criminal Charges",
        width: 1200,
        height: 630,
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
          name: "Can assault charges be dropped in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a prosecutor can dismiss or reduce an assault charge based on evidence or circumstances. The defense can challenge the charge legally. The alleged victim cannot unilaterally stop the prosecution; the state attorney decides.",
          },
        },
        {
          "@type": "Question",
          name: "Does the alleged victim have to press charges for an assault case?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A person can report an incident, but the state attorney decides on criminal charges. The alleged victim's wishes may influence the case but do not terminate it. Prosecutors review evidence like police reports and witness statements to determine how to proceed.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a first time assault charge dismissed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A first time assault charge may qualify for dismissal or another resolution in some circumstances, but a clean record does not guarantee a particular outcome.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a lawyer for a misdemeanor assault charge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes you should. Because misdemeanor convictions still show up on background checks for jobs, housing and professional licensing. An attorney can often negotiate a withhold of adjudication, which preserves your eligibility for record sealing later.",
          },
        },
        {
          "@type": "Question",
          name: "Can police pursue an assault charge without video or physical evidence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A prosecutor may pursue an assault case using witness testimony, statements, police observations, messages or other admissible evidence. Simple assault does not require physical contact or an injury.",
          },
        },
        {
          "@type": "Question",
          name: "Is it still assault if no one got hurt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Florida’s assault statute does not require injury or contact. A credible threat, paired with the apparent ability to act on it, satisfies the charge on its own.",
          },
        },
        {
          "@type": "Question",
          name: "Can an assault charge be sealed or expunged from my record?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida permits sealing when a case ends in dismissal, a withhold of adjudication or acquittal. A conviction with formal adjudication generally blocks expunction, which makes the outcome of your case matter well beyond the courtroom.",
          },
        },
      ],
    },
  ],
};

export default function AssaultLawyerTampaPage() {
  return (
    <>
      <Script
        id="assault-lawyer-tampa-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <div className="w-full">
        <ALHero />
        <ALContactFormSection />
        <ALWhatCountsSection />
        <ALAssaultVsBatterySection />
        <ALTypesSection />
        <ALPenaltiesSection />
        <ALEvidenceSection />
        <ALDefensesSection />
        <ALArrestSection />
        <ALCommonMistakesSection />
        <ALHowWeHandleSection />
        <ALWhyChooseSection />
        <ALApartSection />
        <ALServesSection />
        <ALCourtsCitiesSection />
        <ALTestimonialsSection />
        <ALFreeCaseReviewSection />
        <ALFAQSection />
      </div>
    </>
  );
}

