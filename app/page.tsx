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
            Blood Alcohol Content (BAC) Calculator & Tracker
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
