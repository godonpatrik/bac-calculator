import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "FAQ — BAC Calculator | Frequently Asked Questions",
  description:
    "Frequently asked questions about the BAC Calculator. Learn about blood alcohol content, the Widmark formula, legal BAC limits, standard drinks, and more.",
  alternates: {
    canonical: "https://alcoholtrackr.com/faq",
  },
  openGraph: {
    title: "FAQ — BAC Calculator | Frequently Asked Questions",
    description:
      "Frequently asked questions about the BAC Calculator. Learn about blood alcohol content, the Widmark formula, legal BAC limits, standard drinks, and more.",
    url: "https://alcoholtrackr.com/faq",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — BAC Calculator | Frequently Asked Questions",
    description:
      "Frequently asked questions about the BAC Calculator. Learn about blood alcohol content, the Widmark formula, legal BAC limits, standard drinks, and more.",
  },
};

const breadcrumbItems = [
  { label: "FAQ", href: "/faq" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Blood Alcohol Content (BAC)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blood Alcohol Content (BAC) is a measurement of the amount of alcohol in your bloodstream, expressed as a percentage. A BAC of 0.08% means there are 0.08 grams of alcohol per 100 milliliters of blood. BAC is the standard measure used by law enforcement to determine legal intoxication.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Widmark BAC formula work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Widmark formula calculates BAC by dividing the grams of alcohol consumed by your body weight multiplied by a gender-specific constant (0.68 for men, 0.55 for women), which accounts for differences in body water content. The formula then subtracts the alcohol metabolized over time at approximately 0.015% BAC per hour.",
      },
    },
    {
      "@type": "Question",
      name: "What is the legal BAC limit for driving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on where you live. In most US states the limit is 0.08%, while many European and Asian countries use 0.05%. Some countries like the Czech Republic, Hungary, and Brazil enforce zero tolerance (0.00%). Commercial drivers and novice drivers often face stricter limits.",
      },
    },
    {
      "@type": "Question",
      name: "How long does alcohol stay in your system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your liver eliminates alcohol at roughly 0.015% BAC per hour — about one standard drink per hour. At 0.08% BAC, it takes approximately 5–6 hours to reach 0.00%. Alcohol can be detected much longer depending on the test: up to 12 hours in blood, 24 hours on breath, 80 hours in urine (EtG test), and up to 90 days in hair.",
      },
    },
    {
      "@type": "Question",
      name: "How many drinks does it take to reach 0.08% BAC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This varies significantly by weight, gender, and drinking speed. For a 70 kg (154 lb) male, approximately 3–4 standard drinks in one hour may bring BAC near 0.08%. For a 60 kg (132 lb) female, it may take only 2–3 drinks.",
      },
    },
    {
      "@type": "Question",
      name: "What is a standard drink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard drink contains about 14 grams (0.6 ounces) of pure alcohol. This equals roughly 355 ml (12 oz) of regular 5% beer, 150 ml (5 oz) of 12% wine, or 44 ml (1.5 oz) of 40% distilled spirits like vodka, rum, or whiskey.",
      },
    },
    {
      "@type": "Question",
      name: "Why does body weight affect BAC so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alcohol distributes through your body's water content. Heavier people generally have more body water, so the same amount of alcohol is diluted across a larger volume, resulting in a lower BAC. Fat tissue contains very little water, so body composition matters too.",
      },
    },
    {
      "@type": "Question",
      name: "Does eating food lower your BAC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eating food before or while drinking slows alcohol absorption, which can result in a lower peak BAC. However, food does not prevent intoxication or reduce your total alcohol intake — it only delays and reduces the peak. Fatty and protein-rich foods are most effective at slowing absorption.",
      },
    },
    {
      "@type": "Question",
      name: "How can I prevent a hangover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The only guaranteed way to avoid a hangover is to not drink. Evidence-based strategies that help include: eating a meal before drinking, pacing yourself to one drink per hour, alternating with water, and choosing clear spirits over dark ones because they contain fewer congeners.",
      },
    },
    {
      "@type": "Question",
      name: "How many calories are in alcohol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alcohol contains 7 calories per gram — almost as much as fat (9 cal/g) — and these are empty calories with zero nutritional value. A standard beer has about 150 kcal, a glass of wine about 125 kcal, and a shot of spirits about 97 kcal.",
      },
    },
    {
      "@type": "Question",
      name: "Does alcohol affect sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While alcohol can help you fall asleep faster, it significantly disrupts sleep quality. It suppresses REM sleep, causes fragmented sleep in the second half of the night, and worsens snoring and sleep apnea. Even 2–3 drinks can reduce REM sleep by about 20%.",
      },
    },
    {
      "@type": "Question",
      name: "Is this BAC calculator accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This calculator uses the scientifically-accepted Widmark formula and provides reasonable estimates. However, actual BAC varies due to individual factors like metabolism, food intake, medications, liver health, and hydration levels. Only professional breathalyzer or blood tests can provide exact BAC measurements.",
      },
    },
  ],
};

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-6">
        Frequently Asked Questions
      </h1>

      <FAQSection />

      <section className="bg-gray-800 rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-white mb-3">
          Still Have Questions?
        </h2>
        <div className="text-gray-300 text-sm space-y-2">
          <p>
            If you didn&apos;t find the answer you were looking for, feel free
            to reach out to us directly.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-block px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-lg transition-colors"
            >
              Learn More About BAC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
