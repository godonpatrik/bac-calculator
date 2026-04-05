import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About — BAC Calculator",
  description:
    "Learn about BAC Calculator, how it works, the Widmark formula, and how to use this free blood alcohol content calculator responsibly.",
  alternates: {
    canonical: "https://alcoholtrackr.com/about",
  },
  openGraph: {
    title: "About — BAC Calculator",
    description:
      "Learn about BAC Calculator, how it works, the Widmark formula, and how to use this free blood alcohol content calculator responsibly.",
    url: "https://alcoholtrackr.com/about",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — BAC Calculator",
    description:
      "Learn about BAC Calculator, how it works, the Widmark formula, and how to use this free blood alcohol content calculator responsibly.",
  },
};

const breadcrumbItems = [
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-6">
        About BAC Calculator
      </h1>

      <div className="space-y-6">
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            What is BAC Calculator?
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Our Blood Alcohol Content (BAC) calculator helps you estimate your
              blood alcohol level based on the drinks you&apos;ve consumed, your
              weight, and gender. The calculator uses the Widmark formula to
              provide accurate BAC estimations and shows you when you&apos;ll
              likely be sober.
            </p>
            <p>
              <strong>Key Features:</strong> Real-time BAC monitoring, drink
              tracking with timestamps, BAC visualization over time, sobriety
              time estimation, support for both metric (kg, ml) and imperial
              (lbs, oz) units, and privacy-focused local storage.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            What is Blood Alcohol Content (BAC)?
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Blood Alcohol Content (BAC) is a measurement of the amount of
              alcohol present in your bloodstream. It is expressed as a
              percentage, representing the weight of alcohol per volume of
              blood. For example, a BAC of 0.08% means there are 0.08 grams of
              alcohol per 100 milliliters of blood.
            </p>
            <p>
              <strong>How BAC Affects You:</strong> Different BAC levels produce
              different effects. At 0.02-0.03%, you may feel relaxed with
              slightly impaired judgment. At 0.05-0.08%, coordination and
              reaction time are noticeably affected. At 0.08% and above (the
              legal limit in most jurisdictions), driving ability is
              significantly impaired. Higher levels can lead to severe
              intoxication, loss of consciousness, and even life-threatening
              alcohol poisoning.
            </p>
            <p>
              <strong>Factors Affecting BAC:</strong> Your BAC is influenced by
              multiple factors including the amount and type of alcohol
              consumed, your body weight, gender (women typically have higher
              BAC than men after consuming the same amount), rate of
              consumption, food in your stomach, metabolism, and individual
              tolerance levels.
            </p>
            <p>
              <strong>BAC Elimination:</strong> The human body metabolizes
              alcohol at a relatively constant rate of approximately
              0.015-0.017% per hour. This means it takes time for your BAC to
              return to zero — you cannot speed up this process with coffee,
              cold showers, or exercise.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            How the BAC Calculation Works
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              This calculator uses the <strong>Widmark formula</strong>, a
              widely-accepted scientific method for estimating blood alcohol
              content. The formula was developed by Swedish scientist Erik
              Widmark in the 1930s and remains the standard approach for BAC
              estimation.
            </p>
            <p>
              <strong>The Formula:</strong> BAC = (Alcohol consumed in grams /
              (Body weight in grams × r)) - (Metabolism rate × Time). Where
              &apos;r&apos; is the gender constant (0.68 for men, 0.55 for
              women), reflecting differences in body water content and alcohol
              distribution.
            </p>
            <p>
              <strong>Calculation Steps:</strong>
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>
                <strong>Alcohol Consumed:</strong> We calculate the pure alcohol
                content by multiplying the drink volume by its alcohol
                percentage and the density of alcohol (0.789 g/ml).
              </li>
              <li>
                <strong>Total Body Water:</strong> Your body weight is
                multiplied by the gender constant to estimate total body water
                where alcohol distributes.
              </li>
              <li>
                <strong>Initial BAC:</strong> The total alcohol consumed is
                divided by your total body water to get the peak BAC.
              </li>
              <li>
                <strong>Time-Based Reduction:</strong> BAC decreases at
                approximately 0.015% per hour as your liver metabolizes alcohol.
                We subtract this elimination rate based on time elapsed since
                each drink.
              </li>
            </ol>
            <p>
              <strong>Important Limitations:</strong> This calculation provides
              an estimate based on average values. Individual results vary due
              to metabolism differences, food consumption, medications, liver
              health, hydration levels, and drinking patterns. The calculator
              cannot account for these personal factors, so actual BAC may
              differ from calculated values.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            How to Use This BAC Calculator
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>
                <strong>Enter your details:</strong> Input your weight and
                select your gender. The calculator supports both metric (kg) and
                imperial (lbs) units.
              </li>
              <li>
                <strong>Add your drinks:</strong> Select from predefined drink
                types (beer, wine, spirits) or enter a custom drink with its
                volume and alcohol percentage.
              </li>
              <li>
                <strong>View your BAC:</strong> Your estimated blood alcohol
                content updates in real-time as you add drinks.
              </li>
              <li>
                <strong>Check the chart:</strong> The BAC over time chart shows
                how your BAC will change, including when you&apos;ll return to
                0.00%.
              </li>
              <li>
                <strong>See your sober time:</strong> The calculator estimates
                when your BAC will reach zero based on average metabolism rates.
              </li>
            </ol>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              We built BAC Calculator to promote responsible drinking and help
              people make informed decisions about alcohol consumption. Our goal
              is to provide a free, easy-to-use, and privacy-respecting tool
              that educates users about how alcohol affects their body.
            </p>
            <p>
              All calculations happen directly in your browser. Your personal
              data (weight, gender, drinks) is stored only in your
              browser&apos;s local storage and is{" "}
              <strong>never sent to any server</strong>.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Who Writes the Content
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              All articles on this site are produced by the{" "}
              <strong>BAC Calculator Editorial Team</strong> — a small group of
              writers and editors with backgrounds in health communication,
              science journalism, and safety education. Every long-form
              article is built from peer-reviewed research and guidance
              published by national and international health authorities
              (NIAAA, CDC, NHTSA, WHO, NHS, EMCDDA and others).
            </p>
            <p>
              Each article goes through a structured research, drafting,
              fact-check and readability review before publication, and is
              re-reviewed at least once every twelve months. You can read the
              full workflow, our sourcing standards, and our corrections policy
              on the{" "}
              <Link
                href="/editorial-policy"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Editorial Policy
              </Link>{" "}
              page.
            </p>
            <p>
              We do not publish sponsored content, accept affiliate deals from
              alcohol producers or rehab centres, or adjust editorial
              decisions based on advertising relationships.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            How the Calculator Works Under the Hood
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              The calculator implements the Widmark pharmacokinetic equation
              — the same model used in forensic toxicology worldwide — using
              the 0.015% per-hour ethanol elimination rate established by
              Jones (2010) from thousands of controlled subjects, and the
              body-water distribution factors (0.68 for men, 0.55 for women)
              from the original Widmark (1932) monograph and subsequent
              literature.
            </p>
            <p>
              A full list of the constants we use, the assumptions the model
              makes, and its known limitations lives on the{" "}
              <Link
                href="/methodology"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Methodology
              </Link>{" "}
              page. The peer-reviewed papers that back each constant are
              catalogued on the{" "}
              <Link
                href="/research"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Research
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Who This Site Is For
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              This site is written for adults of legal drinking age who want
              accurate, plain-language information about blood alcohol
              content, alcohol metabolism, and the health and legal
              consequences of drinking. We assume readers are making their
              own informed choices and want the evidence to guide them.
            </p>
            <p>
              If you are concerned about your own or someone else&apos;s
              drinking, please visit our{" "}
              <Link
                href="/support"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Support &amp; Resources
              </Link>{" "}
              page for helplines, treatment locators, and peer-support
              organisations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
