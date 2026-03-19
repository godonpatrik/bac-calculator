export default function StructuredData() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BAC Calculator - Blood Alcohol Content Tracker",
    description:
      "Free online BAC calculator and blood alcohol content tracker. Calculate your BAC in real-time, track drinks, and estimate when you'll be sober.",
    url: "https://alcoholtrackr.com",
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Real-time BAC calculation",
      "Drink tracking with timestamps",
      "BAC over time visualization chart",
      "Sobriety time estimation",
      "Support for metric and imperial units",
      "Predefined drink templates",
      "Custom drink input",
      "Privacy-focused local storage",
      "Worldwide AA office finder",
      "24/7 alcohol crisis helpline directory",
      "Alcohol support resources and treatment locator",
    ],
    screenshot: "https://alcoholtrackr.com/opengraph-image",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BAC Calculator",
        item: "https://alcoholtrackr.com",
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Calculate Your Blood Alcohol Content (BAC)",
    description:
      "Use our free online BAC calculator to estimate your blood alcohol content based on your weight, gender, and drinks consumed.",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter your details",
        text: "Input your body weight and select your gender. The calculator supports both metric (kg) and imperial (lbs) units.",
      },
      {
        "@type": "HowToStep",
        name: "Add your drinks",
        text: "Select from predefined drink types (beer, wine, spirits) or enter a custom drink with its volume and alcohol percentage.",
      },
      {
        "@type": "HowToStep",
        name: "View your BAC",
        text: "Your estimated blood alcohol content updates in real-time as you add drinks.",
      },
      {
        "@type": "HowToStep",
        name: "Check the chart",
        text: "The BAC over time chart shows how your BAC will change over time, including when you'll return to 0.00%.",
      },
      {
        "@type": "HowToStep",
        name: "See your sober time",
        text: "The calculator estimates when your BAC will reach zero based on average alcohol metabolism rates of 0.015% per hour.",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BAC Calculator - Blood Alcohol Content Tracker",
    url: "https://alcoholtrackr.com",
    description:
      "Free BAC calculator with worldwide AA office finder and alcohol support resources. Calculate blood alcohol content, find AA meetings, and access 24/7 helplines.",
    about: [
      {
        "@type": "Thing",
        name: "Blood Alcohol Content",
        description:
          "Blood alcohol content (BAC) calculation and tracking for responsible drinking awareness.",
      },
      {
        "@type": "MedicalCondition",
        name: "Alcohol Use Disorder",
        description:
          "Support resources and AA meeting finder for individuals seeking help with alcohol problems.",
      },
    ],
    hasPart: [
      {
        "@type": "WebPage",
        name: "BAC Calculator",
        url: "https://alcoholtrackr.com",
        description:
          "Calculate your blood alcohol content in real-time based on drinks consumed, weight, and gender.",
      },
      {
        "@type": "MedicalWebPage",
        name: "Alcohol Support & Resources",
        url: "https://alcoholtrackr.com/support",
        description:
          "Find AA meetings worldwide, access 24/7 crisis helplines, and discover alcohol treatment resources.",
        specialty: "Addiction Medicine",
      },
      {
        "@type": "WebPage",
        name: "BAC Calculator FAQ",
        url: "https://alcoholtrackr.com/faq",
        description:
          "Frequently asked questions about blood alcohol content calculation and the Widmark formula.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
