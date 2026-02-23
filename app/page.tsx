import BACTracker from "@/components/BACTracker";
import AdUnit from "@/components/AdUnit";
import { adConfig } from "@/utils/adConfig";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <StructuredData />

      {/* 3-column layout: left ad | main content | right ad */}
      <div className="flex justify-center gap-4">
        {/* Left Sidebar Ad — visible on large screens, sticky while scrolling */}
        {/*<aside*/}
        {/*  className="hidden lg:block w-[160px] shrink-0"*/}
        {/*  aria-label="Advertisement"*/}
        {/*>*/}
        {/*  <div className="sticky top-4 pt-6 h-fit">*/}
        {/*    <AdUnit*/}
        {/*      slot={adConfig.slots.leftSide}*/}
        {/*      client={adConfig.client}*/}
        {/*      format="vertical"*/}
        {/*      responsive={false}*/}
        {/*      className="w-[160px] min-h-[600px]"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</aside>*/}

        <main className="max-w-4xl w-full px-4 py-6 min-w-0">
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              BAC Calculator — Free Blood Alcohol Content Calculator & Tracker
            </h1>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Calculate your estimated blood alcohol content (BAC) in real-time.
              Add your drinks, track your BAC level over time, and find out when
              you&apos;ll be sober. Free, private, and based on the Widmark
              formula.
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
              <h2 className="text-xl font-semibold text-white mb-3">
                About BAC Calculator
              </h2>
              <div className="text-gray-300 text-sm space-y-2 text-left">
                <p>
                  Our Blood Alcohol Content (BAC) calculator helps you estimate
                  your blood alcohol level based on the drinks you&apos;ve
                  consumed, your weight, and gender. The calculator uses the
                  Widmark formula to provide accurate BAC estimations and shows
                  you when you&apos;ll likely be sober.
                </p>
                <p>
                  <strong>Key Features:</strong> Real-time BAC monitoring, drink
                  tracking with timestamps, BAC visualization over time,
                  sobriety time estimation, support for both metric (kg, ml) and
                  imperial (lbs, oz) units, and privacy-focused local storage.
                </p>
                <p>
                  <strong>Remember:</strong> This calculator provides estimates
                  only. Many factors affect blood alcohol levels including
                  metabolism, food consumption, medications, and individual
                  physiology. Always drink responsibly and never drive under the
                  influence.
                </p>
                <p className="pt-2">
                  <Link
                    href="/about"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Learn more about how BAC calculation works →
                  </Link>
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-lg p-6 mb-4">
              <h2 className="text-xl font-semibold text-white mb-3">
                Important Disclaimer
              </h2>
              <div className="text-gray-300 text-sm space-y-2 text-left">
                <p>
                  This calculator provides <strong>estimates only</strong> based
                  on the Widmark formula and average values. Your actual BAC may
                  vary due to individual metabolism, food consumption,
                  medications, and other factors. Only professional BAC testing
                  equipment can provide accurate measurements.
                </p>
                <p className="font-semibold text-yellow-400">
                  ⚠️ Never rely solely on this calculator to decide if you can
                  drive. The only safe choice after drinking is to not drive at
                  all.
                </p>
                <p className="pt-1">
                  <Link
                    href="/disclaimer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Read full disclaimer & terms →
                  </Link>
                </p>
              </div>
            </section>

            {/* FAQ Summary with link to full FAQ page */}
            <section className="bg-gray-800 rounded-lg p-6 mb-4">
              <h2 className="text-xl font-semibold text-white mb-3">
                Frequently Asked Questions
              </h2>
              <div className="text-gray-300 text-sm space-y-2 text-left">
                <p>
                  Have questions about blood alcohol content, the Widmark
                  formula, legal BAC limits, or how long it takes to sober up?
                  Check out our comprehensive FAQ page.
                </p>
                <p className="pt-2">
                  <Link
                    href="/faq"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    View all frequently asked questions →
                  </Link>
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

        {/* Right Sidebar Ad — visible on large screens, sticky while scrolling */}
        {/*<aside*/}
        {/*  className="hidden lg:block w-[160px] shrink-0"*/}
        {/*  aria-label="Advertisement"*/}
        {/*>*/}
        {/*  <div className="sticky top-4 pt-6 h-fit">*/}
        {/*    <AdUnit*/}
        {/*      slot={adConfig.slots.rightSide}*/}
        {/*      client={adConfig.client}*/}
        {/*      format="vertical"*/}
        {/*      responsive={false}*/}
        {/*      className="w-[160px] min-h-[600px]"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</aside>*/}
      </div>
    </div>
  );
}
