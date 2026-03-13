import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsible Drinking — Safety Tips & Harm Reduction Guide",
  description:
    "Practical tips for responsible alcohol consumption. Learn about standard drink sizes, harm reduction strategies, recognizing alcohol poisoning, and when to seek help.",
  alternates: {
    canonical: "https://alcoholtrackr.com/responsible-drinking",
  },
  openGraph: {
    title: "Responsible Drinking — Safety Tips & Harm Reduction Guide",
    description:
      "Practical tips for responsible alcohol consumption. Learn about standard drink sizes, harm reduction strategies, recognizing alcohol poisoning, and when to seek help.",
    url: "https://alcoholtrackr.com/responsible-drinking",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible Drinking — Safety Tips & Harm Reduction Guide",
    description:
      "Practical tips for responsible alcohol consumption. Learn about standard drink sizes, harm reduction strategies, and when to seek help.",
  },
};

export default function ResponsibleDrinkingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm mb-6 inline-block"
      >
        ← Back to Calculator
      </Link>

      <h1 className="text-3xl font-bold text-white mb-3">
        Responsible Drinking Guide
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        If you choose to drink, understanding how to do so more safely can
        reduce the risk of harm to yourself and others. This guide provides
        practical, evidence-based strategies for harm reduction.
      </p>

      <div className="space-y-6">
        {/* Standard Drinks */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Know What a Standard Drink Is
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Many people underestimate how much they drink because they
              don&apos;t know what counts as one &quot;standard drink.&quot;
              Definitions vary by country, but in the United States, one
              standard drink contains approximately 14 grams (0.6 fluid ounces)
              of pure alcohol:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
              <div className="bg-gray-900/50 rounded p-4 text-center">
                <p className="text-2xl mb-1">🍺</p>
                <p className="text-white font-medium text-sm">Regular Beer</p>
                <p className="text-gray-400 text-xs">
                  12 oz (355 ml) at 5% ABV
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4 text-center">
                <p className="text-2xl mb-1">🍷</p>
                <p className="text-white font-medium text-sm">Wine</p>
                <p className="text-gray-400 text-xs">
                  5 oz (148 ml) at 12% ABV
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4 text-center">
                <p className="text-2xl mb-1">🥃</p>
                <p className="text-white font-medium text-sm">Spirits</p>
                <p className="text-gray-400 text-xs">
                  1.5 oz (44 ml) at 40% ABV
                </p>
              </div>
            </div>
            <p>
              Be aware that many drinks served at bars, restaurants, and at home
              are larger than one standard drink. A large glass of wine may be
              two standard drinks. A strong cocktail can contain two or three.
              Craft beers and high-ABV drinks can represent significantly more
              alcohol than expected.
            </p>
          </div>
        </section>

        {/* Low-Risk Drinking Guidelines */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Low-Risk Drinking Guidelines
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Health organizations around the world publish guidelines for
              lower-risk alcohol consumption. While no level of alcohol is
              completely risk-free, staying within these limits significantly
              reduces health risks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              <div className="bg-gray-900/50 rounded p-4">
                <p className="text-white font-medium text-sm mb-1">
                  US (NIAAA / Dietary Guidelines)
                </p>
                <p className="text-gray-400 text-xs">
                  Men: Up to 2 standard drinks per day
                </p>
                <p className="text-gray-400 text-xs">
                  Women: Up to 1 standard drink per day
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4">
                <p className="text-white font-medium text-sm mb-1">
                  UK (NHS)
                </p>
                <p className="text-gray-400 text-xs">
                  No more than 14 units per week for both men and women
                </p>
                <p className="text-gray-400 text-xs">
                  Spread over 3+ days with alcohol-free days
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4">
                <p className="text-white font-medium text-sm mb-1">
                  Australia (NHMRC)
                </p>
                <p className="text-gray-400 text-xs">
                  No more than 10 standard drinks per week
                </p>
                <p className="text-gray-400 text-xs">
                  No more than 4 standard drinks on any single occasion
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4">
                <p className="text-white font-medium text-sm mb-1">
                  Canada (CCSA 2023)
                </p>
                <p className="text-gray-400 text-xs">
                  0 drinks: No risk
                </p>
                <p className="text-gray-400 text-xs">
                  1–2 drinks/week: Low risk
                </p>
                <p className="text-gray-400 text-xs">
                  3–6 drinks/week: Moderate risk
                </p>
              </div>
            </div>
            <p>
              <strong>Binge drinking</strong> is defined as consuming 5 or more
              drinks (men) or 4 or more drinks (women) within about 2 hours.
              Binge drinking poses significant acute health risks even in
              otherwise moderate drinkers.
            </p>
          </div>
        </section>

        {/* Harm Reduction Strategies */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Harm Reduction Strategies
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div>
              <h3 className="text-white font-medium mb-1">Before Drinking</h3>
              <ul className="ml-4 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Eat a substantial meal before drinking. Food slows alcohol
                    absorption and reduces peak BAC.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Set a limit for yourself before you start and stick to it.
                    Use our BAC calculator to understand how many drinks will
                    keep you within your desired range.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Plan your transportation home in advance. Designate a sober
                    driver, book a taxi, or arrange a ride-share.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Check your medications for alcohol interactions. Many common
                    medications (including antihistamines, antidepressants, pain
                    relievers, and antibiotics) can interact dangerously with
                    alcohol.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">While Drinking</h3>
              <ul className="ml-4 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Pace yourself — no more than one standard drink per hour.
                    This roughly matches your liver&apos;s metabolic rate.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Alternate alcoholic drinks with water or non-alcoholic
                    beverages. This slows consumption and helps prevent
                    dehydration.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Choose lower-ABV drinks when possible. A light beer (3–4%
                    ABV) delivers less alcohol per serving than a craft IPA
                    (6–9% ABV).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Avoid drinking games and rounds that pressure rapid
                    consumption.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Never leave your drink unattended and do not accept drinks
                    from strangers.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">After Drinking</h3>
              <ul className="ml-4 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Allow enough time for your BAC to return to zero before
                    driving. Remember: you eliminate roughly 0.015% BAC per
                    hour.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Drink water and eat food to help with recovery, though
                    neither speeds up alcohol elimination.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    Be aware that you can still be impaired the morning after
                    heavy drinking. &quot;Morning after&quot; BAC levels can
                    still be above the legal limit.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Never Drink If */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            When You Should Not Drink at All
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>Avoid alcohol entirely if you:</p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Are under the legal drinking age</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Are pregnant or trying to become pregnant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Are taking medications that interact with alcohol
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Have a medical condition worsened by alcohol (liver disease,
                  pancreatitis, certain heart conditions)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Are planning to drive, operate machinery, or perform tasks
                  requiring full alertness
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Are in recovery from alcohol use disorder
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Recognizing Alcohol Poisoning */}
        <section className="bg-red-900/30 border border-red-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-3">
            Recognizing Alcohol Poisoning — A Medical Emergency
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Alcohol poisoning is a life-threatening condition that requires
              immediate medical attention. Call emergency services immediately
              if someone shows any of these signs:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">⚠</span>
                <span>Unconscious or semi-conscious and cannot be awakened</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">⚠</span>
                <span>Slow or irregular breathing (fewer than 8 breaths per minute)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">⚠</span>
                <span>Vomiting while unconscious or semi-conscious</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">⚠</span>
                <span>Cold, clammy, pale, or bluish skin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">⚠</span>
                <span>Seizures</span>
              </li>
            </ul>
            <div className="bg-gray-900/50 rounded p-4 mt-3">
              <p className="text-white font-medium text-sm mb-1">
                What to do while waiting for help:
              </p>
              <ol className="list-decimal list-inside ml-2 text-gray-400 text-xs space-y-1">
                <li>
                  Turn the person on their side (recovery position) to prevent
                  choking on vomit
                </li>
                <li>Stay with them — do not leave them alone</li>
                <li>Keep them warm with a blanket or coat</li>
                <li>
                  Do not give them coffee, food, or more alcohol
                </li>
                <li>
                  Do not try to make them vomit or put them in a cold shower
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            When Drinking Becomes a Problem
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              If you&apos;re concerned about your drinking or someone
              else&apos;s, there are signs that alcohol use may be becoming
              problematic:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Drinking more or longer than you intended</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Unsuccessful attempts to cut down or control drinking
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Spending a lot of time drinking or recovering from drinking
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Neglecting responsibilities at work, school, or home
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Continuing to drink despite relationship or health problems
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Needing more alcohol to feel the same effects (tolerance)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Experiencing withdrawal symptoms when not drinking (anxiety,
                  shaking, sweating, nausea)
                </span>
              </li>
            </ul>
            <p className="mt-3">
              If any of these apply, help is available. Reach out to:
            </p>
            <div className="bg-gray-900/50 rounded p-4 mt-2 space-y-2">
              <p className="text-gray-300 text-xs">
                <strong className="text-white">
                  SAMHSA National Helpline (US):
                </strong>{" "}
                1-800-662-4357 — Free, confidential, 24/7
              </p>
              <p className="text-gray-300 text-xs">
                <strong className="text-white">Drinkline (UK):</strong>{" "}
                0300 123 1110 — Weekdays 9am–8pm, weekends 11am–4pm
              </p>
              <p className="text-gray-300 text-xs">
                <strong className="text-white">
                  Alcoholics Anonymous:
                </strong>{" "}
                <Link href="/support" className="text-blue-400 hover:text-blue-300">
                  Find AA meetings and support resources
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Driving */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Alcohol and Driving
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Impaired driving is one of the leading preventable causes of death
              worldwide. Even small amounts of alcohol can impair driving
              ability:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  At <strong>0.02% BAC</strong>: Decline in visual functions and
                  ability to multitask
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  At <strong>0.05% BAC</strong>: Reduced coordination, difficulty
                  steering, and reduced response to emergency situations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  At <strong>0.08% BAC</strong>: Poor muscle coordination,
                  impaired judgment, and reduced ability to detect danger
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  At <strong>0.10% BAC</strong>: Clear deterioration of reaction
                  time and control
                </span>
              </li>
            </ul>
            <p className="mt-2">
              <strong>The safest option is always to not drive after any
              amount of alcohol.</strong> Use a designated driver, taxi,
              ride-share service, or public transportation.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-amber-900/30 border border-amber-700 rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-amber-400 mb-2">
          Important Disclaimer
        </h2>
        <p className="text-gray-300 text-sm">
          This guide is for educational purposes only and is not a substitute
          for professional medical advice. If you are struggling with alcohol
          use, please contact a healthcare provider or one of the helplines
          listed above. In an emergency, call your local emergency number
          immediately.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/bac-effects"
          className="text-blue-400 hover:text-blue-300"
        >
          ← BAC Effects on the Body
        </Link>
        <Link
          href="/alcohol-metabolism"
          className="text-blue-400 hover:text-blue-300"
        >
          How Your Body Processes Alcohol
        </Link>
        <Link
          href="/support"
          className="text-blue-400 hover:text-blue-300"
        >
          Support Resources →
        </Link>
      </div>
    </div>
  );
}
