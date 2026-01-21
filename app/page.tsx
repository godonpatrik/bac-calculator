"use client";

import BACTracker from "@/components/BACTracker";
import AdUnit from "@/components/AdUnit";
import { adConfig } from "@/utils/adConfig";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-6">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Blood Alcohol Content (BAC) Calculator – Online Alcohol Tracker
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Free online BAC calculator to monitor your blood alcohol content in
            real-time. Track drinks, calculate BAC levels, and estimate when
            you'll be sober. Supports both metric and imperial measurements.
          </p>
        </header>

        {/* Top Banner Ad */}
        <AdUnit
          slot={adConfig.slots.banner}
          client={adConfig.client}
          format="horizontal"
          className="mb-6"
        />

        <BACTracker />

        {/* Middle Content Ad */}
        <AdUnit
          slot={adConfig.slots.content}
          client={adConfig.client}
          format="horizontal"
          className="my-6"
        />

        <footer className="mt-8 text-center">
          <section className="bg-gray-800 rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-white mb-3">Support</h2>
            <div className="text-gray-300 text-sm space-y-2 text-left">
              <p>This website is completely free to use.</p>
              <p>
                If you find it useful and would like to support its development
                or say thank you, you may do so by sending a voluntary Bitcoin
                donation to the address below.
              </p>
              <p>
                <b>bc1qslnkhfxp7cr6qpcs5mrq0353vhdlfzzpdgksjm</b>
              </p>
              <p>
                Donations are entirely optional and do not provide any goods,
                services, or special access in return.
              </p>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-white mb-3">
              About BAC Calculator
            </h2>
            <div className="text-gray-300 text-sm space-y-2 text-left">
              <p>
                Our Blood Alcohol Content (BAC) calculator helps you estimate
                your blood alcohol level based on the drinks you've consumed,
                your weight, and gender. The calculator uses the Widmark formula
                to provide accurate BAC estimations and shows you when you'll
                likely be sober.
              </p>
              <p>
                <strong>Key Features:</strong> Real-time BAC monitoring, drink
                tracking with timestamps, BAC visualization over time, sobriety
                time estimation, support for both metric (kg, ml) and imperial
                (lbs, oz) units, and privacy-focused local storage.
              </p>
              <p>
                <strong>Remember:</strong> This calculator provides estimates
                only. Many factors affect blood alcohol levels including
                metabolism, food consumption, medications, and individual
                physiology. Always drink responsibly and never drive under the
                influence.
              </p>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-white mb-3">
              What is Blood Alcohol Content (BAC)?
            </h2>
            <div className="text-gray-300 text-sm space-y-2 text-left">
              <p>
                Blood Alcohol Content (BAC) is a measurement of the amount of
                alcohol present in your bloodstream. It is expressed as a
                percentage, representing the weight of alcohol per volume of
                blood. For example, a BAC of 0.08% means there are 0.08 grams of
                alcohol per 100 milliliters of blood.
              </p>
              <p>
                <strong>How BAC Affects You:</strong> Different BAC levels
                produce different effects. At 0.02-0.03%, you may feel relaxed
                with slightly impaired judgment. At 0.05-0.08%, coordination and
                reaction time are noticeably affected. At 0.08% and above (the
                legal limit in most jurisdictions), driving ability is
                significantly impaired. Higher levels can lead to severe
                intoxication, loss of consciousness, and even life-threatening
                alcohol poisoning.
              </p>
              <p>
                <strong>Factors Affecting BAC:</strong> Your BAC is influenced
                by multiple factors including the amount and type of alcohol
                consumed, your body weight, gender (women typically have higher
                BAC than men after consuming the same amount), rate of
                consumption, food in your stomach, metabolism, and individual
                tolerance levels.
              </p>
              <p>
                <strong>BAC Elimination:</strong> The human body metabolizes
                alcohol at a relatively constant rate of approximately
                0.015-0.017% per hour. This means it takes time for your BAC to
                return to zero - you cannot speed up this process with coffee,
                cold showers, or exercise.
              </p>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-white mb-3">
              How the BAC Calculation Works
            </h2>
            <div className="text-gray-300 text-sm space-y-2 text-left">
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
                'r' is the gender constant (0.68 for men, 0.55 for women),
                reflecting differences in body water content and alcohol
                distribution.
              </p>
              <p>
                <strong>Calculation Steps:</strong>
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>
                  <strong>Alcohol Consumed:</strong> We calculate the pure
                  alcohol content by multiplying the drink volume by its alcohol
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
                  approximately 0.015% per hour as your liver metabolizes
                  alcohol. We subtract this elimination rate based on time
                  elapsed since each drink.
                </li>
              </ol>
              <p>
                <strong>Important Limitations:</strong> This calculation
                provides an estimate based on average values. Individual results
                vary due to metabolism differences, food consumption,
                medications, liver health, hydration levels, and drinking
                patterns. The calculator cannot account for these personal
                factors, so actual BAC may differ from calculated values.
              </p>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-white mb-3">
              Why Use a BAC Calculator? Benefits, Limitations & Safe Practices
            </h2>
            <div className="text-gray-300 text-sm space-y-2 text-left">
              <p>
                <strong>Why This Calculator is Useful:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Awareness:</strong> Helps you understand how alcohol
                  affects your body and provides a reality check on your
                  consumption levels.
                </li>
                <li>
                  <strong>Planning:</strong> Allows you to estimate when you'll
                  be sober again, helping you plan safe transportation or when
                  it's safe to drive.
                </li>
                <li>
                  <strong>Education:</strong> Teaches you about alcohol
                  metabolism and how different factors affect your BAC levels.
                </li>
                <li>
                  <strong>Responsibility:</strong> Encourages conscious drinking
                  decisions and helps you stay within safe limits.
                </li>
                <li>
                  <strong>Prevention:</strong> May prevent dangerous situations
                  by showing you when you're approaching or exceeding legal
                  limits.
                </li>
              </ul>

              <p className="pt-2">
                <strong>Important Limitations:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Estimates Only:</strong> This calculator provides
                  approximations based on average values, not precise
                  measurements. Your actual BAC may vary significantly.
                </li>
                <li>
                  <strong>Individual Variation:</strong> Factors like
                  metabolism, liver function, medications, health conditions,
                  food intake, hydration, and fatigue levels are not accounted
                  for.
                </li>
                <li>
                  <strong>Not a Breathalyzer:</strong> Only professional BAC
                  testing equipment (breathalyzers or blood tests) can provide
                  accurate BAC measurements.
                </li>
                <li>
                  <strong>No Legal Defense:</strong> This calculator's results
                  cannot be used as evidence or defense in legal proceedings.
                </li>
              </ul>

              <p className="pt-2">
                <strong>When NOT to Drive:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Any BAC Above 0.00%:</strong> The safest policy is to
                  never drive after consuming any alcohol, even if below the
                  legal limit.
                </li>
                <li>
                  <strong>Legal Limits:</strong> In most jurisdictions, the
                  legal limit is 0.08% (0.05% in many countries). However,
                  impairment begins well before these levels.
                </li>
                <li>
                  <strong>Zero Tolerance:</strong> Some drivers (commercial
                  drivers, those under 21, probationary license holders) face
                  zero tolerance laws with 0.00-0.02% limits.
                </li>
                <li>
                  <strong>Feeling Impaired:</strong> If you feel dizzy, have
                  slurred speech, impaired coordination, or altered judgment,
                  you are NOT safe to drive regardless of calculated BAC.
                </li>
                <li>
                  <strong>Medications:</strong> Alcohol combined with
                  medications (prescription, over-the-counter, or recreational)
                  can cause unexpected impairment.
                </li>
              </ul>

              <p className="pt-2">
                <strong>Good Practices for Responsible Drinking:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Plan Ahead:</strong> Arrange designated drivers, use
                  ride-sharing services, public transportation, or stay
                  overnight before drinking.
                </li>
                <li>
                  <strong>Pace Yourself:</strong> Limit yourself to one standard
                  drink per hour to allow your body time to metabolize alcohol.
                </li>
                <li>
                  <strong>Eat Food:</strong> Consume food before and while
                  drinking to slow alcohol absorption.
                </li>
                <li>
                  <strong>Stay Hydrated:</strong> Alternate alcoholic drinks
                  with water to reduce dehydration and slow consumption.
                </li>
                <li>
                  <strong>Know Your Limits:</strong> Understand how alcohol
                  affects you personally and respect your body's signals.
                </li>
                <li>
                  <strong>Wait It Out:</strong> Remember that only time
                  eliminates alcohol from your system - coffee, exercise, and
                  cold showers don't help.
                </li>
                <li>
                  <strong>When in Doubt:</strong> If you're unsure whether
                  you're safe to drive, you're not. Find alternative
                  transportation.
                </li>
              </ul>

              <p className="pt-2 font-semibold text-yellow-400">
                ⚠️ CRITICAL REMINDER: Never rely solely on this calculator to
                decide if you can drive. The only safe choice after drinking is
                to not drive at all. Drunk driving kills - choose alternative
                transportation every time.
              </p>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-white mb-3">
              Terms and Conditions
            </h2>
            <div className="text-gray-300 text-sm space-y-2 text-left">
              <p>The Website is provided free of charge.</p>
              <p>
                Users may optionally choose to support the Website by sending a
                voluntary Bitcoin (BTC) donation to the address published on the
                Website.
              </p>
              <p>Such donations:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>are made entirely at the donor's own discretion,</li>
                <li>
                  are not required to access or use any part of the Website,
                </li>
                <li>do not constitute payment for any product or service,</li>
                <li>
                  do not grant the donor any special rights, features, content,
                  or benefits.
                </li>
              </ul>
              <p>
                Donations are not linked to any contractual obligation or
                consideration.
              </p>
              <p>All donations are final and non-refundable.</p>
              <p>
                The Website operator does not provide financial, investment, or
                tax advice and is not responsible for transaction errors,
                incorrect addresses, or network fees associated with Bitcoin
                transfers.
              </p>
            </div>
          </section>

          {/* Bottom Ad */}
          <AdUnit
            slot={adConfig.slots.footer}
            client={adConfig.client}
            format="horizontal"
            className="mt-4"
          />
        </footer>
      </main>
    </div>
  );
}
