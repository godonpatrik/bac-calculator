"use client";

import { useState } from "react";
import BACTracker from "@/components/BACTracker";
import AdUnit from "@/components/AdUnit";
import { adConfig } from "@/utils/adConfig";

export default function Home() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
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
            <button
              onClick={() => setIsTermsOpen(!isTermsOpen)}
              className="w-full flex items-center justify-between text-xl font-semibold text-white mb-3 hover:text-gray-300 transition-colors"
              aria-expanded={isTermsOpen}
            >
              <span>Terms and Conditions</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  isTermsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isTermsOpen && (
              <div className="text-gray-300 text-sm space-y-2 text-left">
                <p>The Website is provided free of charge.</p>
                <p>
                  Users may optionally choose to support the Website by sending
                  a voluntary Bitcoin (BTC) donation to the address published on
                  the Website.
                </p>
                <p>Such donations:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>are made entirely at the donor's own discretion,</li>
                  <li>
                    are not required to access or use any part of the Website,
                  </li>
                  <li>do not constitute payment for any product or service,</li>
                  <li>
                    do not grant the donor any special rights, features,
                    content, or benefits.
                  </li>
                </ul>
                <p>
                  Donations are not linked to any contractual obligation or
                  consideration.
                </p>
                <p>All donations are final and non-refundable.</p>
                <p>
                  The Website operator does not provide financial, investment,
                  or tax advice and is not responsible for transaction errors,
                  incorrect addresses, or network fees associated with Bitcoin
                  transfers.
                </p>
              </div>
            )}
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
