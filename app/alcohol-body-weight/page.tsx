import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Alcohol vs Body Weight — How Weight Affects Your BAC",
  description:
    "Understand why body weight is one of the most important factors in BAC calculation. Learn how body composition, water content, and the Widmark factor interact with alcohol.",
  alternates: {
    canonical: "https://alcoholtrackr.com/alcohol-body-weight",
  },
  openGraph: {
    title: "Alcohol vs Body Weight — How Weight Affects Your BAC",
    description:
      "Understand why body weight is one of the most important factors in BAC calculation. Learn how body composition, water content, and the Widmark factor interact with alcohol.",
    url: "https://alcoholtrackr.com/alcohol-body-weight",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcohol vs Body Weight — How Weight Affects Your BAC",
    description:
      "Understand why body weight is a key factor in BAC calculation. Learn how body composition and the Widmark factor interact with alcohol.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "Alcohol vs Body Weight", href: "/alcohol-body-weight" },
];

const bacTable = [
  { weight: "50 kg (110 lb)", drinks1: "0.04%", drinks2: "0.08%", drinks3: "0.12%", drinks4: "0.16%" },
  { weight: "60 kg (132 lb)", drinks1: "0.03%", drinks2: "0.07%", drinks3: "0.10%", drinks4: "0.13%" },
  { weight: "70 kg (154 lb)", drinks1: "0.03%", drinks2: "0.06%", drinks3: "0.08%", drinks4: "0.11%" },
  { weight: "80 kg (176 lb)", drinks1: "0.02%", drinks2: "0.05%", drinks3: "0.07%", drinks4: "0.10%" },
  { weight: "90 kg (198 lb)", drinks1: "0.02%", drinks2: "0.04%", drinks3: "0.07%", drinks4: "0.09%" },
  { weight: "100 kg (220 lb)", drinks1: "0.02%", drinks2: "0.04%", drinks3: "0.06%", drinks4: "0.08%" },
  { weight: "110 kg (243 lb)", drinks1: "0.02%", drinks2: "0.03%", drinks3: "0.05%", drinks4: "0.07%" },
];

export default function AlcoholBodyWeightPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        Alcohol vs Body Weight
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Body weight is one of the most significant factors determining your
        blood alcohol content (BAC) after drinking. But it&apos;s not just about
        how much you weigh — body composition, water content, and biological
        sex all play important roles.
      </p>

      <div className="space-y-6">
        {/* Why Weight Matters */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Why Body Weight Affects BAC
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Alcohol distributes throughout your body&apos;s water content.
              When you drink, ethanol enters the bloodstream and spreads into
              all water-containing tissues. The more body water you have, the
              more the alcohol is diluted — resulting in a lower BAC.
            </p>
            <p>
              This is reflected in the <strong>Widmark formula</strong>, used
              by our BAC calculator:
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3 text-center">
              <p className="text-white font-mono text-base">
                BAC = (A ÷ (r × W)) − (β × t)
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Where <strong>W</strong> = body weight and <strong>r</strong> =
                Widmark factor (proportion of body water)
              </p>
            </div>
            <p>
              A heavier person has more body water (assuming similar body
              composition), so the same amount of alcohol produces a lower
              concentration. This is why a 100 kg person will typically reach
              a lower BAC than a 60 kg person after the same number of drinks.
            </p>
          </div>
        </section>

        {/* Body Fat vs Lean Mass */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Body Fat vs Lean Mass
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Not all body weight is equal when it comes to alcohol
              distribution. The key distinction is between:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
              <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
                <h3 className="text-blue-400 font-medium text-sm mb-2">
                  Lean Mass (muscle, organs)
                </h3>
                <p className="text-gray-400 text-xs">
                  Contains ~75% water. Alcohol distributes freely into lean
                  tissue, diluting it more effectively. People with more
                  muscle mass tend to have lower BAC for the same alcohol
                  intake.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
                <h3 className="text-orange-400 font-medium text-sm mb-2">
                  Fat Mass (adipose tissue)
                </h3>
                <p className="text-gray-400 text-xs">
                  Contains only ~10% water. Alcohol does not readily
                  distribute into fat tissue. Two people of the same weight
                  but different body fat percentages will have different BAC
                  levels — the person with more body fat will have a higher
                  BAC.
                </p>
              </div>
            </div>
            <p>
              This is why the Widmark factor differs between men and women:
              on average, men have a higher proportion of body water (r =
              0.68) compared to women (r = 0.55), largely due to differences
              in body fat percentage.
            </p>
          </div>
        </section>

        {/* BAC Comparison Table */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Estimated BAC by Body Weight
          </h2>
          <p className="text-gray-400 text-xs mb-4">
            Approximate peak BAC for a male after drinking standard drinks
            within one hour on a moderately full stomach. Values use the
            Widmark formula with r = 0.68 and β = 0.015/hr. Female values
            would be approximately 20–25% higher.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 py-2 pr-4 text-xs font-medium">
                    Body Weight
                  </th>
                  <th className="text-center text-gray-400 py-2 px-2 text-xs font-medium">
                    1 drink
                  </th>
                  <th className="text-center text-gray-400 py-2 px-2 text-xs font-medium">
                    2 drinks
                  </th>
                  <th className="text-center text-gray-400 py-2 px-2 text-xs font-medium">
                    3 drinks
                  </th>
                  <th className="text-center text-gray-400 py-2 px-2 text-xs font-medium">
                    4 drinks
                  </th>
                </tr>
              </thead>
              <tbody>
                {bacTable.map((row) => (
                  <tr key={row.weight} className="border-b border-gray-700/50">
                    <td className="text-gray-300 py-2 pr-4 text-xs">
                      {row.weight}
                    </td>
                    <td className="text-center text-green-400 py-2 px-2 font-mono text-xs">
                      {row.drinks1}
                    </td>
                    <td
                      className={`text-center py-2 px-2 font-mono text-xs ${
                        parseFloat(row.drinks2) >= 0.08
                          ? "text-red-400"
                          : parseFloat(row.drinks2) >= 0.05
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {row.drinks2}
                    </td>
                    <td
                      className={`text-center py-2 px-2 font-mono text-xs ${
                        parseFloat(row.drinks3) >= 0.08
                          ? "text-red-400"
                          : parseFloat(row.drinks3) >= 0.05
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {row.drinks3}
                    </td>
                    <td
                      className={`text-center py-2 px-2 font-mono text-xs ${
                        parseFloat(row.drinks4) >= 0.08
                          ? "text-red-400"
                          : parseFloat(row.drinks4) >= 0.05
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {row.drinks4}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Below 0.05%
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              0.05–0.079%
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              0.08%+
            </span>
          </div>
        </section>

        {/* Sex Differences */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Why Biological Sex Matters
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Even at the same body weight, women typically reach a higher BAC
              than men after consuming the same amount of alcohol. This is due
              to multiple factors:
            </p>
            <ul className="ml-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Lower body water percentage:</strong> Women average
                  ~52% body water vs ~60% for men, meaning alcohol
                  concentrates in less volume.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Higher body fat percentage:</strong> Because fat
                  tissue contains very little water, the same weight with
                  more fat means less dilution of alcohol.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Lower gastric ADH activity:</strong> Women produce
                  less of the stomach enzyme that begins breaking down
                  alcohol before it enters the bloodstream (first-pass
                  metabolism).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Hormonal fluctuations:</strong> The menstrual cycle
                  can affect alcohol metabolism, with some research
                  suggesting higher BAC during certain phases.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Common Misconceptions */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Common Misconceptions
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Heavy people can always handle more alcohol&quot;
              </p>
              <p className="text-gray-400 text-xs">
                While higher weight dilutes alcohol more (lower peak BAC),
                it does not speed up elimination. A heavier person and a
                lighter person who both reach 0.08% BAC will take roughly
                the same time to sober up — about 5–6 hours.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;Muscle helps you metabolize alcohol faster&quot;
              </p>
              <p className="text-gray-400 text-xs">
                More muscle means more body water, which dilutes alcohol and
                leads to a lower peak BAC. But muscle does not increase
                liver enzyme activity — the elimination rate stays the same
                regardless of how muscular you are.
              </p>
            </div>
            <div>
              <p className="text-red-400 font-medium">
                ✗ &quot;BMI is a good predictor of BAC&quot;
              </p>
              <p className="text-gray-400 text-xs">
                BMI does not differentiate between fat and lean mass. A
                muscular person and a person with high body fat at the same
                BMI will have very different BAC responses to the same
                amount of alcohol.
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
          BAC estimates based on body weight are approximations. Individual
          variation in metabolism, genetics, health, and other factors means
          actual BAC may differ from calculated values. Never use BAC
          estimates to decide whether you are safe to drive.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/hangover-prevention"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Hangover Prevention Tips
        </Link>
        <Link
          href="/alcohol-and-sleep"
          className="text-blue-400 hover:text-blue-300"
        >
          Alcohol and Sleep →
        </Link>
      </div>
    </div>
  );
}
