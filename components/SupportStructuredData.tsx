export default function SupportStructuredData() {
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Alcohol Support & Resources",
    description:
      "Find help for alcohol problems including crisis helplines, AA office finder, and addiction recovery resources worldwide.",
    url: "https://alcoholtrackr.com/support",
    lastReviewed: new Date().toISOString().split("T")[0],
    specialty: "Addiction Medicine",
    about: {
      "@type": "MedicalCondition",
      name: "Alcohol Use Disorder",
      alternateName: ["Alcoholism", "Alcohol Addiction"],
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
  };

  const specialAnnouncementSchema = {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    name: "24/7 Alcohol Crisis Helplines Available",
    text: "Free, confidential alcohol support helplines available 24/7 in multiple countries. Get immediate help for alcohol-related crises.",
    url: "https://alcoholtrackr.com/support",
    category: "https://www.wikidata.org/wiki/Q81068910", // Health
    datePosted: new Date().toISOString(),
    provider: [
      {
        "@type": "Organization",
        name: "SAMHSA National Helpline",
        telephone: "+1-800-662-4357",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "Organization",
        name: "Drug Rehab Services Canada",
        telephone: "+1-877-254-3348",
        areaServed: "CA",
      },
      {
        "@type": "Organization",
        name: "Drinkline UK",
        telephone: "+44-300-123-1110",
        areaServed: "GB",
      },
      {
        "@type": "Organization",
        name: "National Alcohol Helpline Australia",
        telephone: "+61-1800-250-015",
        areaServed: "AU",
      },
    ],
  };

  const aaOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alcoholics Anonymous Office Finder",
    description:
      "Find local Alcoholics Anonymous (AA) General Service Offices and contact information worldwide. Search by country to find AA meetings and support in your area.",
    url: "https://alcoholtrackr.com/support",
    logo: "https://alcoholtrackr.com/icon.png",
    sameAs: ["https://www.aa.org"],
    serviceType: "Support Group Locator",
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://alcoholtrackr.com/support",
      serviceType: "AA Office Directory",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Find AA Meetings and Alcohol Support",
    description:
      "Step-by-step guide to finding Alcoholics Anonymous meetings and alcohol addiction support resources in your area.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Recognize the signs",
        text: "Identify if you or a loved one shows signs of alcohol use disorder such as drinking more than intended, unsuccessful attempts to cut down, or alcohol interfering with daily responsibilities.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Call a crisis helpline",
        text: "If you need immediate help, call a 24/7 crisis helpline like SAMHSA National Helpline at 1-800-662-HELP (4357) for free, confidential support.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Find local AA meetings",
        text: "Use our AA Office Finder to search for Alcoholics Anonymous General Service Offices in your country. Select your country from the dropdown to get local contact information.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Explore treatment options",
        text: "Use resources like SAMHSA Treatment Locator to find professional treatment facilities and programs in your area.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Get ongoing support",
        text: "Join support groups like AA or SMART Recovery for long-term recovery support and community.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://alcoholtrackr.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Support & Resources",
        item: "https://alcoholtrackr.com/support",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(specialAnnouncementSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aaOrganizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
