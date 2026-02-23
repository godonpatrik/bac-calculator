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
    ],
    screenshot: "https://alcoholtrackr.com/og-image.png",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is BAC (Blood Alcohol Content) calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BAC is calculated using the Widmark formula. It divides the grams of alcohol consumed by your body weight multiplied by a gender-specific constant (0.68 for men, 0.55 for women), then subtracts the alcohol metabolized over time at approximately 0.015% per hour.",
        },
      },
      {
        "@type": "Question",
        name: "What is the legal BAC limit for driving?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most US states, the legal BAC limit for driving is 0.08%. Many countries use 0.05%. Commercial drivers and those under 21 often face stricter limits of 0.02% or 0.00%. Impairment can begin at much lower levels than the legal limit.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to sober up after drinking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The body metabolizes alcohol at approximately 0.015% BAC per hour. For example, if your BAC is 0.08%, it would take roughly 5-6 hours to return to 0.00%. Nothing can speed up this process — not coffee, cold showers, or exercise.",
        },
      },
      {
        "@type": "Question",
        name: "How many drinks does it take to reach 0.08% BAC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This varies based on weight, gender, and drinking speed. Generally, for a 70kg (154lb) male, approximately 3-4 standard drinks consumed within one hour may bring BAC near 0.08%. Women typically reach higher BAC levels with fewer drinks due to body composition differences.",
        },
      },
      {
        "@type": "Question",
        name: "What is a standard drink?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard drink contains about 14 grams of pure alcohol. This equals approximately 355ml (12oz) of 5% beer, 150ml (5oz) of 12% wine, or 44ml (1.5oz) of 40% distilled spirits. Different countries may define standard drinks differently.",
        },
      },
      {
        "@type": "Question",
        name: "Is this BAC calculator accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This calculator provides estimates based on the scientifically-accepted Widmark formula. However, actual BAC can vary due to individual factors like metabolism, food consumption, medications, liver health, and hydration. Only professional breathalyzers or blood tests can measure BAC precisely.",
        },
      },
      {
        "@type": "Question",
        name: "Does food affect BAC levels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, eating food before or while drinking slows alcohol absorption into the bloodstream, which can result in a lower peak BAC. However, food does not prevent intoxication — it only delays and reduces the peak. Fatty and protein-rich foods are most effective at slowing absorption.",
        },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
