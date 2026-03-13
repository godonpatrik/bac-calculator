import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Alcohol Metabolism — How Your Body Processes Alcohol",
  description:
    "Understand how the human body absorbs, distributes, metabolizes, and eliminates alcohol. Learn about the Widmark formula, liver enzymes, elimination rates, and factors that affect alcohol metabolism.",
  alternates: {
    canonical: "https://alcoholtrackr.com/alcohol-metabolism",
  },
  openGraph: {
    title: "Alcohol Metabolism — How Your Body Processes Alcohol",
    description:
      "Understand how the human body absorbs, distributes, metabolizes, and eliminates alcohol. Learn about the Widmark formula, liver enzymes, elimination rates, and factors that affect alcohol metabolism.",
    url: "https://alcoholtrackr.com/alcohol-metabolism",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcohol Metabolism — How Your Body Processes Alcohol",
    description:
      "Understand how the human body absorbs, distributes, metabolizes, and eliminates alcohol. Learn about the Widmark formula, liver enzymes, and elimination rates.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "Alcohol Metabolism", href: "/alcohol-metabolism" },
];

export default function AlcoholMetabolismPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        How Your Body Processes Alcohol
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        When you drink alcohol, your body begins a complex process of
        absorption, distribution, metabolism, and elimination. Understanding
        this process helps explain why BAC levels rise and fall the way they do.
      </p>

      <div className="space-y-6">
        {/* Step 1: Absorption */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Absorption — Alcohol Enters the Bloodstream
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              After you swallow an alcoholic drink, alcohol is absorbed into
              your bloodstream primarily through the lining of the small
              intestine (about 80%) and the stomach (about 20%). Unlike most
              nutrients, alcohol requires no digestion and passes directly
              through cell membranes into the blood.
            </p>
            <p>
              <strong>Speed of absorption</strong> depends on several factors:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Stomach contents:</strong> Food slows gastric
                  emptying, delaying alcohol&apos;s arrival in the small intestine.
                  Drinking on an empty stomach leads to faster absorption and
                  higher peak BAC.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Drink concentration:</strong> Moderately concentrated
                  drinks (around 20–30% ABV) are absorbed fastest. Very high
                  concentrations can irritate the stomach lining and slow
                  absorption.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Carbonation:</strong> Carbonated mixers (like tonic
                  water or champagne) speed up gastric emptying and increase the
                  rate of absorption.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Rate of drinking:</strong> Consuming multiple drinks
                  quickly overwhelms the body&apos;s ability to metabolize alcohol,
                  leading to rapid BAC increases.
                </span>
              </li>
            </ul>
            <p>
              Absorption is typically complete within 30–90 minutes after your
              last drink, though this varies based on the factors above.
            </p>
          </div>
        </section>

        {/* Step 2: Distribution */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Distribution — Alcohol Spreads Through the Body
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Once in the bloodstream, alcohol is distributed throughout the
              body via the circulatory system. Alcohol is water-soluble, so it
              distributes primarily into body water. Organs with a rich blood
              supply — the brain, liver, kidneys, and lungs — are exposed to
              alcohol quickly.
            </p>
            <p>
              This is why BAC calculators use body weight and the{" "}
              <strong>Widmark factor</strong> (also called the distribution
              ratio): it estimates the proportion of your body in which alcohol
              distributes. The Widmark factor is approximately:
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3">
              <p className="text-gray-300 font-mono text-sm">
                <strong>Men:</strong> r = 0.68 (68% of body weight is water)
              </p>
              <p className="text-gray-300 font-mono text-sm">
                <strong>Women:</strong> r = 0.55 (55% of body weight is water)
              </p>
            </div>
            <p>
              Women generally have a higher proportion of body fat and a lower
              proportion of body water than men, which means alcohol
              concentrates in a smaller volume and produces a higher BAC for the
              same amount consumed per kilogram of body weight.
            </p>
          </div>
        </section>

        {/* Step 3: Metabolism */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Metabolism — The Liver Breaks Down Alcohol
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              The liver is responsible for metabolizing approximately 90–98% of
              all alcohol consumed. The remaining 2–10% is eliminated unchanged
              through breath, sweat, and urine — which is why breathalyzer
              tests work.
            </p>
            <p>
              Alcohol metabolism occurs primarily through two enzyme systems:
            </p>

            <div className="bg-gray-900/50 rounded p-4 my-3 space-y-3">
              <div>
                <h3 className="text-white font-medium text-sm mb-1">
                  Primary Pathway: ADH → ALDH
                </h3>
                <p className="text-gray-400 text-xs">
                  <strong>Step 1:</strong> Alcohol dehydrogenase (ADH) converts ethanol
                  into acetaldehyde, a highly toxic compound.
                </p>
                <p className="text-gray-400 text-xs">
                  <strong>Step 2:</strong> Aldehyde dehydrogenase (ALDH) rapidly converts
                  acetaldehyde into acetate (a harmless substance similar to
                  vinegar).
                </p>
                <p className="text-gray-400 text-xs">
                  <strong>Step 3:</strong> Acetate is further broken down into
                  carbon dioxide and water, which are eliminated from the body.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm mb-1">
                  Secondary Pathway: MEOS (CYP2E1)
                </h3>
                <p className="text-gray-400 text-xs">
                  The Microsomal Ethanol-Oxidizing System (MEOS), involving the
                  enzyme CYP2E1, becomes more active at higher BAC levels and in
                  chronic drinkers. This pathway generates more free radicals
                  and is associated with greater liver damage over time.
                </p>
              </div>
            </div>

            <p>
              The intermediate product, <strong>acetaldehyde</strong>, is
              responsible for many of the unpleasant effects of drinking,
              including nausea, headaches, and facial flushing. People with
              genetic variations that slow ALDH activity (common in East Asian
              populations) accumulate more acetaldehyde, leading to the
              &quot;alcohol flush reaction.&quot;
            </p>
          </div>
        </section>

        {/* Step 4: Elimination */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Elimination — BAC Returns to Zero
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              The liver metabolizes alcohol at a relatively constant rate,
              regardless of the amount consumed. This is called{" "}
              <strong>zero-order kinetics</strong> — unlike most substances,
              alcohol is not eliminated faster when there is more of it in your
              system.
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3">
              <p className="text-gray-300 text-sm">
                <strong>Average elimination rate:</strong> 0.015% – 0.017% BAC
                per hour
              </p>
              <p className="text-gray-400 text-xs mt-1">
                This is roughly equivalent to metabolizing one standard drink
                per hour for an average-sized person.
              </p>
            </div>
            <p>
              <strong>Nothing can speed up this process.</strong> Coffee, cold
              showers, exercise, and eating food after drinking do not increase
              the rate of alcohol elimination. Only time allows your liver to
              process the alcohol in your system.
            </p>
            <p>
              Individual elimination rates vary based on:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Genetics:</strong> Variations in ADH and ALDH enzyme
                  activity affect how quickly alcohol is broken down.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Liver health:</strong> Liver disease or damage reduces
                  metabolic capacity.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Chronic drinking:</strong> Regular heavy drinking can
                  increase elimination rate through CYP2E1 induction, but at the
                  cost of increased liver damage.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Sex:</strong> Women generally have lower gastric ADH
                  activity, resulting in less first-pass metabolism and higher
                  effective BAC.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Widmark Formula */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            The Widmark Formula
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Developed by Swedish scientist Erik Widmark in 1932, the Widmark
              formula remains the standard method for estimating BAC. It
              combines alcohol dose, body weight, gender-based distribution, and
              time-based elimination into a single equation:
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3 text-center">
              <p className="text-white font-mono text-base">
                BAC = (A ÷ (r × W)) − (β × t)
              </p>
              <div className="text-gray-400 text-xs mt-3 text-left max-w-md mx-auto space-y-0.5">
                <p>
                  <strong>A</strong> = mass of alcohol consumed (in grams)
                </p>
                <p>
                  <strong>r</strong> = Widmark factor (0.68 men / 0.55 women)
                </p>
                <p>
                  <strong>W</strong> = body weight (in grams)
                </p>
                <p>
                  <strong>β</strong> = elimination rate (≈ 0.015% per hour)
                </p>
                <p>
                  <strong>t</strong> = time since drinking began (in hours)
                </p>
              </div>
            </div>
            <p>
              Our BAC calculator applies this formula for each drink you add,
              accounting for the specific time each drink was consumed. This
              allows it to model BAC changes over time and estimate when
              you&apos;ll return to 0.00%.
            </p>
          </div>
        </section>

        {/* Common Myths */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Common Myths About Alcohol Metabolism
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Coffee sobers you up&quot;
              </p>
              <p className="text-gray-400 text-xs">
                Caffeine may make you feel more alert, but it does not reduce
                BAC or improve coordination. You become a &quot;wide-awake
                drunk&quot; — still impaired, but less aware of it.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;A cold shower will sober you up&quot;
              </p>
              <p className="text-gray-400 text-xs">
                Cold water may increase alertness temporarily, but has no effect
                on BAC or the liver&apos;s metabolic rate.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Eating after drinking lowers your BAC&quot;
              </p>
              <p className="text-gray-400 text-xs">
                Eating before or during drinking slows absorption, but eating
                after alcohol has been absorbed does not reduce your BAC.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;You can &apos;sweat out&apos; alcohol by exercising&quot;
              </p>
              <p className="text-gray-400 text-xs">
                Only 2–10% of alcohol leaves through sweat, breath, and urine.
                Exercise does not meaningfully increase elimination rate and can
                be dangerous while intoxicated.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Bigger people can always drink more&quot;
              </p>
              <p className="text-gray-400 text-xs">
                While higher body weight dilutes alcohol across more body water,
                liver metabolism rate stays roughly constant regardless of size.
                Larger people reach lower peak BAC but don&apos;t eliminate
                alcohol faster.
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
          This information is for educational purposes only and does not
          constitute medical advice. Individual metabolism varies significantly.
          Never rely solely on BAC estimates to make decisions about driving or
          operating machinery. If you have concerns about your alcohol
          consumption, please consult a healthcare professional.
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
          href="/responsible-drinking"
          className="text-blue-400 hover:text-blue-300"
        >
          Responsible Drinking Guide →
        </Link>
      </div>
    </div>
  );
}
