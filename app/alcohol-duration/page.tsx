import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "How Long Does Alcohol Stay in Your Body? — Detection Times & Elimination",
  description:
    "Learn how long alcohol remains detectable in blood, breath, urine, saliva, and hair. Understand BAC elimination rates, factors that affect clearance, and detection windows for different tests.",
  alternates: {
    canonical: "https://alcoholtrackr.com/alcohol-duration",
  },
  openGraph: {
    title: "How Long Does Alcohol Stay in Your Body? — Detection Times & Elimination",
    description:
      "Learn how long alcohol remains detectable in blood, breath, urine, saliva, and hair. Understand BAC elimination rates and factors that affect clearance.",
    url: "https://alcoholtrackr.com/alcohol-duration",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Long Does Alcohol Stay in Your Body?",
    description:
      "Learn how long alcohol remains detectable in blood, breath, urine, saliva, and hair. Understand BAC elimination rates and factors that affect clearance.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "How Long Alcohol Stays in Your Body", href: "/alcohol-duration" },
];

const detectionMethods = [
  {
    method: "Blood",
    window: "Up to 12 hours",
    icon: "🩸",
    details:
      "Blood tests directly measure the concentration of ethanol in the bloodstream (BAC). Alcohol is typically detectable in blood for 6–12 hours after your last drink, depending on how much you consumed. Blood tests are the most accurate method for measuring current impairment.",
  },
  {
    method: "Breath",
    window: "Up to 24 hours",
    icon: "💨",
    details:
      "Breathalyzer tests measure alcohol in exhaled air, which correlates closely with blood alcohol levels. Alcohol can be detected on the breath for 12–24 hours after heavy drinking. This is the most common field test used by law enforcement.",
  },
  {
    method: "Urine",
    window: "12–80 hours",
    icon: "🧪",
    details:
      "Standard urine tests can detect alcohol for 12–24 hours. However, advanced EtG (ethyl glucuronide) and EtS (ethyl sulfate) tests can detect alcohol metabolites for up to 72–80 hours after the last drink, even after BAC has returned to zero.",
  },
  {
    method: "Saliva",
    window: "Up to 48 hours",
    icon: "💧",
    details:
      "Oral fluid tests can detect alcohol for 12–48 hours after consumption. Saliva tests are increasingly used in workplace and roadside testing because they are non-invasive and difficult to tamper with.",
  },
  {
    method: "Hair",
    window: "Up to 90 days",
    icon: "💇",
    details:
      "Hair follicle tests can detect alcohol metabolites (EtG) for up to 90 days. These tests reveal patterns of heavy drinking over time rather than recent consumption. They are commonly used in legal and custody cases.",
  },
];

export default function AlcoholDurationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        How Long Does Alcohol Stay in Your Body?
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        The time alcohol remains in your system depends on how much you drank,
        your metabolism, body composition, and the type of test used to detect
        it. Here&apos;s what science tells us about alcohol detection windows
        and elimination timelines.
      </p>

      <div className="space-y-6">
        {/* Elimination Rate */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            The Average Elimination Rate
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Your liver metabolizes alcohol at a roughly constant rate. For
              most people, this rate is:
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3">
              <p className="text-white font-mono text-base text-center">
                0.015% – 0.017% BAC per hour
              </p>
              <p className="text-gray-400 text-xs text-center mt-2">
                Approximately one standard drink per hour for an average adult
              </p>
            </div>
            <p>
              This means if your BAC reaches 0.08% (the legal limit in many
              countries), it will take approximately <strong>5–6 hours</strong>{" "}
              for your body to fully eliminate the alcohol from your blood. At a
              BAC of 0.15%, it could take <strong>10 hours or more</strong>.
            </p>
          </div>
        </section>

        {/* Timeline Example */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Example Timeline: 4 Standard Drinks
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              For a 70 kg (154 lb) male consuming 4 standard drinks over 2
              hours on a moderately full stomach:
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">0 hours (peak)</span>
                <span className="text-red-400 font-mono">~0.08% BAC</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">2 hours later</span>
                <span className="text-orange-400 font-mono">~0.05% BAC</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">4 hours later</span>
                <span className="text-yellow-400 font-mono">~0.02% BAC</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">5–6 hours later</span>
                <span className="text-green-400 font-mono">0.00% BAC</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs">
              These estimates are approximate. Individual results vary based on
              body composition, genetics, food intake, and other factors.
            </p>
          </div>
        </section>

        {/* Detection Methods */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Detection Windows by Test Type
          </h2>
          <div className="space-y-4">
            {detectionMethods.map((method) => (
              <div
                key={method.method}
                className="bg-gray-900/50 rounded p-4 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{method.icon}</span>
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      {method.method} Test
                    </h3>
                    <p className="text-blue-400 text-xs">{method.window}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">{method.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Factors */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Factors That Affect How Long Alcohol Stays in Your System
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <ul className="ml-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Amount consumed:</strong> More alcohol means a higher
                  peak BAC and a longer time to return to zero. The liver
                  processes alcohol at a fixed rate regardless of how much is in
                  your system.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Body weight and composition:</strong> Heavier people
                  with more body water will dilute alcohol more, resulting in
                  lower peak BAC — but elimination rate stays the same.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Biological sex:</strong> Women generally have less
                  body water and lower levels of gastric ADH enzyme, leading to
                  higher BAC and slightly longer clearance times.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Food intake:</strong> Drinking on an empty stomach
                  leads to faster absorption and higher peak BAC, potentially
                  extending the total time alcohol is detectable.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Liver health:</strong> Liver disease or damage can
                  significantly slow alcohol metabolism, increasing the time
                  alcohol remains in your body.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Genetics:</strong> Variations in alcohol dehydrogenase
                  (ADH) and aldehyde dehydrogenase (ALDH) enzymes affect
                  individual metabolism rates.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Medications:</strong> Certain medications can inhibit
                  liver enzymes and slow alcohol clearance, including some
                  antibiotics, antifungals, and acid reducers.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Myths */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Myths About Speeding Up Sobriety
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Drinking coffee or energy drinks will sober you up&quot;
              </p>
              <p className="text-gray-400 text-xs">
                Caffeine makes you feel more alert but does not reduce BAC or
                speed up metabolism. You remain equally impaired.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Exercise or a cold shower will help&quot;
              </p>
              <p className="text-gray-400 text-xs">
                Neither exercise nor cold water affects your liver&apos;s
                elimination rate. At most, 2–10% of alcohol leaves through
                sweat and breath.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Drinking water flushes alcohol out faster&quot;
              </p>
              <p className="text-gray-400 text-xs">
                While hydration helps with hangover symptoms, water does not
                increase the rate at which your liver processes alcohol. Only
                time works.
              </p>
            </div>
            <div>
              <p className="text-green-400 font-medium">
                ✓ The only proven method: <strong>time</strong>
              </p>
              <p className="text-gray-400 text-xs">
                Your liver needs time to process alcohol at its fixed rate.
                There are no shortcuts. Plan ahead and allow enough time before
                driving or operating machinery.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-amber-900/30 border border-amber-700 rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-amber-400 mb-2">
          Important Disclaimer
        </h2>
        <p className="text-gray-300 text-sm">
          This information is for educational purposes only and should not be
          used to determine whether you are safe to drive or pass an alcohol
          test. Individual metabolism varies significantly. When in doubt,
          wait longer or use a designated driver.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/research"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Scientific Research
        </Link>
        <Link
          href="/legal-bac-limits"
          className="text-blue-400 hover:text-blue-300"
        >
          Legal BAC Limits by Country →
        </Link>
      </div>
    </div>
  );
}
