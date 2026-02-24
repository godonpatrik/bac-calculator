import type { Metadata } from "next";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm mb-6 inline-block"
      >
        ← Back to Calculator
      </Link>

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
              <strong>never sent to any server</strong>. Your privacy is our
              priority.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
