"use client";
import Link from "next/link";
import AAOfficesFinder from "@/components/AAOfficesFinder";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm mb-6 inline-block"
      >
        ← Back to Calculator
      </Link>

      <h1 className="text-3xl font-bold text-white mb-3">
        Alcohol Support & Resources
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        If you or someone you know is struggling with alcohol use, help is
        available. You are not alone, and recovery is possible.
      </p>

      {/* Immediate Help Section */}
      <section className="bg-red-900/30 border border-red-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-red-300 mb-3 flex items-center gap-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Need Immediate Help?
        </h2>
        <div className="text-red-200 text-sm space-y-3">
          <div className="rounded p-4">
            <h3 className="font-semibold text-base mb-2">United States</h3>
            <p className="mb-2">
              <strong>SAMHSA National Helpline:</strong>{" "}
              <a
                href="tel:1-800-662-4357"
                className="text-red-300 hover:text-red-200 underline font-bold text-lg"
              >
                1-800-662-HELP (4357)
              </a>
            </p>
            <p className="text-xs text-red-300">
              Free, confidential, 24/7, 365-day-a-year treatment referral and
              information service (in English and Spanish)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="rounded p-3">
              <h4 className="font-semibold text-sm mb-1">Canada</h4>
              <p className="text-xs">
                <strong>Drug Rehab Services:</strong>{" "}
                <a
                  href="tel:1-877-254-3348"
                  className="text-red-300 hover:text-red-200 underline"
                >
                  1-877-254-3348
                </a>
              </p>
            </div>

            <div className="rounded p-3">
              <h4 className="font-semibold text-sm mb-1">United Kingdom</h4>
              <p className="text-xs">
                <strong>Drinkline:</strong>{" "}
                <a
                  href="tel:0300-123-1110"
                  className="text-red-300 hover:text-red-200 underline"
                >
                  0300 123 1110
                </a>
              </p>
            </div>

            <div className="rounded p-3">
              <h4 className="font-semibold text-sm mb-1">Australia</h4>
              <p className="text-xs">
                <strong>National Alcohol Helpline:</strong>{" "}
                <a
                  href="tel:1800-250-015"
                  className="text-red-300 hover:text-red-200 underline"
                >
                  1800 250 015
                </a>
              </p>
            </div>

            <div className="rounded p-3">
              <h4 className="font-semibold text-sm mb-1">International</h4>
              <p className="text-xs">
                <a
                  href="https://www.aa.org/find-aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-300 hover:text-red-200 underline"
                >
                  Find AA Worldwide
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Resources */}
      <section className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          Additional Support Resources
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-white font-semibold mb-1">
              Alcoholics Anonymous (AA)
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              A fellowship of people who share their experience, strength, and
              hope to solve their common problem and help others recover from
              alcoholism.
            </p>
            <a
              href="https://www.aa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Visit AA.org →
            </a>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-white font-semibold mb-1">SMART Recovery</h3>
            <p className="text-gray-300 text-sm mb-2">
              Science-based, self-empowering addiction recovery support groups
              with both in-person and online meetings worldwide.
            </p>
            <a
              href="https://www.smartrecovery.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Visit SMART Recovery →
            </a>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-white font-semibold mb-1">
              SAMHSA Treatment Locator
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              Find treatment facilities and programs in your area. Confidential
              and available 24/7.
            </p>
            <a
              href="https://findtreatment.samhsa.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Find Treatment →
            </a>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-white font-semibold mb-1">Al-Anon & Alateen</h3>
            <p className="text-gray-300 text-sm mb-2">
              Support for families and friends of people with alcohol problems.
              Helps you understand and cope with the effects of someone else's
              drinking.
            </p>
            <a
              href="https://al-anon.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Visit Al-Anon →
            </a>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-white font-semibold mb-1">
              National Institute on Alcohol Abuse and Alcoholism (NIAAA)
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              Research-based information on alcohol use disorder, treatment
              options, and resources.
            </p>
            <a
              href="https://www.niaaa.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Visit NIAAA →
            </a>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-white font-semibold mb-1">
              Rethinking Drinking
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              NIAAA's interactive website with tools to help you examine your
              drinking patterns and decide if you want to make a change.
            </p>
            <a
              href="https://www.rethinkingdrinking.niaaa.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Visit Rethinking Drinking →
            </a>
          </div>
        </div>
      </section>

      {/* Signs You May Need Help */}
      <section className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          Signs You May Need Help
        </h2>
        <div className="text-gray-300 text-sm space-y-2">
          <p className="mb-3">
            If you're wondering whether you or someone you care about has a
            problem with alcohol, here are some warning signs:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1.5">
            <li>Drinking more or longer than intended</li>
            <li>Unsuccessful attempts to cut down or stop drinking</li>
            <li>Spending a lot of time drinking or recovering from drinking</li>
            <li>Craving or strong urge to drink</li>
            <li>
              Drinking interfering with work, school, or family responsibilities
            </li>
            <li>
              Continuing to drink despite causing problems in relationships
            </li>
            <li>Giving up activities you enjoyed to drink instead</li>
            <li>Drinking in situations where it's physically dangerous</li>
            <li>
              Continuing to drink despite physical or psychological problems
            </li>
            <li>Needing more alcohol to feel the same effects (tolerance)</li>
            <li>Experiencing withdrawal symptoms when not drinking</li>
          </ul>
          <p className="mt-3 text-gray-400 text-xs">
            If you identify with several of these signs, consider reaching out
            for help. Early intervention can make recovery easier.
          </p>
        </div>
      </section>

      {/* AA Offices Finder */}
      <AAOfficesFinder />
    </div>
  );
}
