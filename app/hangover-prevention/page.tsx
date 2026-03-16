import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hangover Prevention Tips — Science-Based Strategies",
  description:
    "Learn what actually causes hangovers, which prevention strategies are backed by science, and which popular remedies are myths. Practical tips for before, during, and after drinking.",
  alternates: {
    canonical: "https://alcoholtrackr.com/hangover-prevention",
  },
  openGraph: {
    title: "Hangover Prevention Tips — Science-Based Strategies",
    description:
      "Learn what actually causes hangovers, which prevention strategies are backed by science, and which popular remedies are myths.",
    url: "https://alcoholtrackr.com/hangover-prevention",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hangover Prevention Tips — Science-Based Strategies",
    description:
      "Learn what actually causes hangovers, which prevention strategies are backed by science, and which popular remedies are myths.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "Hangover Prevention Tips", href: "/hangover-prevention" },
];

export default function HangoverPreventionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        Hangover Prevention Tips
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Hangovers are your body&apos;s reaction to drinking too much alcohol.
        While the only guaranteed way to avoid a hangover is to not drink, there
        are evidence-based strategies that can significantly reduce the severity
        of symptoms.
      </p>

      <div className="space-y-6">
        {/* What Causes a Hangover */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            What Actually Causes a Hangover?
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Hangovers are not caused by a single factor — they result from
              multiple physiological effects of alcohol and its metabolites:
            </p>
            <ul className="ml-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Acetaldehyde toxicity:</strong> Your liver converts
                  alcohol to acetaldehyde, a toxic compound 10–30× more toxic
                  than alcohol itself. It causes nausea, headaches, and
                  sweating before being broken down into harmless acetate.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Dehydration:</strong> Alcohol suppresses the
                  antidiuretic hormone (ADH/vasopressin), causing you to
                  urinate more frequently. This leads to fluid loss,
                  electrolyte imbalance, and symptoms like thirst, dizziness,
                  and fatigue.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Inflammation:</strong> Alcohol triggers an immune
                  system response that increases inflammatory cytokines. This
                  contributes to brain fog, muscle aches, and general malaise.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Stomach irritation:</strong> Alcohol increases
                  gastric acid production and inflames the stomach lining,
                  leading to nausea, vomiting, and abdominal pain.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Sleep disruption:</strong> While alcohol may help you
                  fall asleep, it disrupts sleep architecture — reducing REM
                  sleep and causing frequent awakenings in the second half of
                  the night.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Congeners:</strong> Byproducts of fermentation
                  (especially in dark liquors like whiskey, bourbon, and red
                  wine) can worsen hangover symptoms.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Before Drinking */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Before Drinking
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Eat a substantial meal
              </h3>
              <p className="text-gray-400 text-xs">
                Food in your stomach — especially foods rich in fat, protein,
                and complex carbohydrates — slows alcohol absorption, lowers
                peak BAC, and reduces the load on your liver. This is one of
                the most effective hangover prevention strategies.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Hydrate well beforehand
              </h3>
              <p className="text-gray-400 text-xs">
                Starting your evening well-hydrated gives you a buffer against
                the dehydrating effects of alcohol. Drink 1–2 glasses of water
                before your first alcoholic drink.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Set a drink limit in advance
              </h3>
              <p className="text-gray-400 text-xs">
                Deciding your maximum number of drinks before you start —
                and tracking them — is the most reliable way to stay within
                a range that minimizes hangover risk.
              </p>
            </div>
          </div>
        </section>

        {/* During Drinking */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            During Drinking
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Pace yourself — one drink per hour
              </h3>
              <p className="text-gray-400 text-xs">
                Your liver metabolizes roughly one standard drink per hour.
                Staying near this rate keeps BAC lower and gives your body time
                to process alcohol and its byproducts.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Alternate with water
              </h3>
              <p className="text-gray-400 text-xs">
                Having a glass of water between alcoholic drinks helps maintain
                hydration, slows your drinking pace, and reduces total alcohol
                consumption over the evening.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Choose lighter-colored drinks
              </h3>
              <p className="text-gray-400 text-xs">
                Clear spirits (vodka, gin, white rum) contain fewer congeners
                than dark spirits (whiskey, bourbon, brandy). A 2010 study in
                <em> Alcoholism: Clinical and Experimental Research</em> found
                that bourbon (high congeners) produced worse hangover severity
                than vodka (low congeners) at the same BAC.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Avoid carbonated mixers if possible
              </h3>
              <p className="text-gray-400 text-xs">
                Carbonation speeds up gastric emptying and can increase the
                rate of alcohol absorption. If you prefer fizzy drinks, be
                aware they may lead to faster intoxication.
              </p>
            </div>
          </div>
        </section>

        {/* After Drinking */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            After Drinking
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Drink water before bed
              </h3>
              <p className="text-gray-400 text-xs">
                Rehydrating before sleep helps counteract fluid loss. Aim for
                at least 500 ml (2 cups) of water. Adding an electrolyte
                supplement or eating a salty snack can help replenish lost
                sodium and potassium.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Eat a light meal in the morning
              </h3>
              <p className="text-gray-400 text-xs">
                Bland, easy-to-digest foods like toast, bananas, eggs, and
                oatmeal can help settle your stomach, replenish blood sugar,
                and provide vitamins depleted by alcohol (especially B
                vitamins and zinc).
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Rest and allow time to recover
              </h3>
              <p className="text-gray-400 text-xs">
                Sleep is disrupted by alcohol, so extra rest the next day
                lets your body repair. Hangover symptoms typically peak when
                BAC returns to zero and resolve within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Why Congeners Matter */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Why Congeners Matter
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              <strong>Congeners</strong> are chemical byproducts of
              fermentation and aging. They contribute to the flavor, color,
              and aroma of alcoholic beverages — but they also contribute to
              hangover severity.
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-red-400 font-medium text-sm mb-2">
                    High Congeners (worse hangovers)
                  </h3>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Bourbon & whiskey</li>
                    <li>• Brandy & cognac</li>
                    <li>• Red wine</li>
                    <li>• Dark rum</li>
                    <li>• Tequila (gold/aged)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-400 font-medium text-sm mb-2">
                    Low Congeners (milder hangovers)
                  </h3>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Vodka</li>
                    <li>• Gin</li>
                    <li>• White rum</li>
                    <li>• White wine</li>
                    <li>• Light beer</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              Key congeners include methanol, acetone, tannins, and fusel
              alcohols. Methanol in particular is metabolized into
              formaldehyde and formic acid, which can intensify headaches and
              nausea.
            </p>
          </div>
        </section>

        {/* Myths */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Popular Myths Debunked
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Hair of the dog&quot; — drink more alcohol to cure a hangover
              </p>
              <p className="text-gray-400 text-xs">
                Drinking more alcohol may temporarily ease symptoms by
                delaying the metabolism of methanol, but it only postpones
                and often worsens the inevitable hangover. It also increases
                the risk of developing alcohol dependence.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Beer before liquor, never sicker&quot;
              </p>
              <p className="text-gray-400 text-xs">
                The order of drinks has no scientific basis for affecting
                hangover severity. What matters is the total amount of
                alcohol consumed and the congener content of what you drink.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Greasy food the morning after absorbs the alcohol&quot;
              </p>
              <p className="text-gray-400 text-xs">
                By morning, the alcohol has already been absorbed and
                metabolized. Heavy, greasy food may even irritate an already
                inflamed stomach. Bland food is a better choice.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ Hangover cure supplements and pills
              </p>
              <p className="text-gray-400 text-xs">
                No commercially available supplement has been proven in
                rigorous clinical trials to prevent or cure hangovers.
                Some may help with individual symptoms (e.g., electrolytes
                for dehydration), but none address the root causes.
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
          This information is for educational purposes only.
          The most effective way to prevent a hangover is to drink moderately or
          not at all. If you experience frequent severe hangovers, it may be a
          sign you are drinking too much. Consider speaking with a healthcare
          professional.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/legal-bac-limits"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Legal BAC Limits by Country
        </Link>
        <Link
          href="/alcohol-body-weight"
          className="text-blue-400 hover:text-blue-300"
        >
          Alcohol vs Body Weight →
        </Link>
      </div>
    </div>
  );
}
