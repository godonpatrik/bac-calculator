import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Legal BAC Limits by Country — Drink-Driving Laws Worldwide",
  description:
    "Compare legal blood alcohol content (BAC) limits for driving across 40+ countries. Learn about zero-tolerance laws, penalties, and special rules for commercial and novice drivers.",
  alternates: {
    canonical: "https://alcoholtrackr.com/legal-bac-limits",
  },
  openGraph: {
    title: "Legal BAC Limits by Country — Drink-Driving Laws Worldwide",
    description:
      "Compare legal blood alcohol content (BAC) limits for driving across 40+ countries. Learn about zero-tolerance laws, penalties, and special rules.",
    url: "https://alcoholtrackr.com/legal-bac-limits",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal BAC Limits by Country",
    description:
      "Compare legal BAC limits for driving across 40+ countries. Zero-tolerance laws, penalties, and rules for commercial and novice drivers.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "Legal BAC Limits by Country", href: "/legal-bac-limits" },
];

const regions = [
  {
    name: "North America",
    countries: [
      { country: "United States", limit: "0.08%", notes: "0.04% for commercial drivers; zero tolerance (0.00–0.02%) for under-21 in most states. Utah has a 0.05% limit." },
      { country: "Canada", limit: "0.08%", notes: "Criminal Code limit. Most provinces also have administrative penalties starting at 0.05%." },
      { country: "Mexico", limit: "0.08%", notes: "Varies by state. Mexico City has a strict 0.04% limit." },
    ],
  },
  {
    name: "Europe",
    countries: [
      { country: "United Kingdom", limit: "0.08%", notes: "Scotland has a lower limit of 0.05%. One of the highest limits in Europe." },
      { country: "Germany", limit: "0.05%", notes: "0.00% for drivers under 21 and newly licensed drivers (first 2 years)." },
      { country: "France", limit: "0.05%", notes: "0.02% for drivers with less than 3 years of experience." },
      { country: "Sweden", limit: "0.02%", notes: "One of the strictest limits in Europe. Aggravated offence at 0.10%." },
      { country: "Norway", limit: "0.02%", notes: "Strict enforcement with severe penalties including imprisonment." },
      { country: "Poland", limit: "0.02%", notes: "0.02–0.05% is a misdemeanor; above 0.05% is a criminal offence." },
      { country: "Italy", limit: "0.05%", notes: "0.00% for drivers under 21 and professional drivers." },
      { country: "Spain", limit: "0.05%", notes: "0.03% for novice drivers (first 2 years) and commercial drivers." },
      { country: "Czech Republic", limit: "0.00%", notes: "Absolute zero tolerance. Any detectable alcohol is an offence." },
      { country: "Hungary", limit: "0.00%", notes: "Absolute zero tolerance for all drivers." },
      { country: "Romania", limit: "0.00%", notes: "Zero tolerance. Criminal offence above 0.08%." },
    ],
  },
  {
    name: "Asia & Oceania",
    countries: [
      { country: "Australia", limit: "0.05%", notes: "0.00% for learner and provisional drivers. Varies slightly by state." },
      { country: "New Zealand", limit: "0.05%", notes: "0.00% for drivers under 20." },
      { country: "Japan", limit: "0.03%", notes: "Strict penalties. Passengers of drunk drivers can also be penalized." },
      { country: "South Korea", limit: "0.03%", notes: "Lowered from 0.05% in 2019. License revocation at 0.08%." },
      { country: "China", limit: "0.02%", notes: "0.02–0.08% is drink-driving; above 0.08% is drunk-driving (criminal offence)." },
      { country: "India", limit: "0.03%", notes: "Enforced under the Motor Vehicles Act. Penalties vary by state." },
      { country: "Thailand", limit: "0.05%", notes: "0.02% for drivers under 20 and motorcycle riders in some areas." },
    ],
  },
  {
    name: "South America",
    countries: [
      { country: "Brazil", limit: "0.00%", notes: "Zero tolerance since 2012 ('Lei Seca'). Any detectable alcohol is an offence." },
      { country: "Argentina", limit: "0.05%", notes: "0.02% for motorcycle riders and commercial drivers. 0.00% in some provinces." },
      { country: "Chile", limit: "0.03%", notes: "0.03–0.08% is 'under the influence'; above 0.08% is 'drunk driving' (criminal)." },
      { country: "Colombia", limit: "0.04%", notes: "Strictly enforced with vehicle impounding and license suspension." },
    ],
  },
  {
    name: "Africa & Middle East",
    countries: [
      { country: "South Africa", limit: "0.05%", notes: "0.02% for professional drivers. High road fatality rates linked to drink-driving." },
      { country: "UAE", limit: "0.00%", notes: "Zero tolerance. Alcohol-related driving offences can lead to deportation for expats." },
      { country: "Saudi Arabia", limit: "0.00%", notes: "Alcohol consumption is prohibited entirely." },
      { country: "Kenya", limit: "0.08%", notes: "Enforcement varies. Breathalyzer testing is becoming more common." },
    ],
  },
];

export default function LegalBACLimitsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        Legal BAC Limits by Country
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Drink-driving laws vary significantly around the world. While 0.08% BAC
        is the legal limit in several countries, many nations have adopted
        stricter thresholds — some with complete zero-tolerance policies. Here
        is a comprehensive overview of BAC limits across regions.
      </p>

      <div className="space-y-6">
        {/* Overview */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Understanding BAC Limits
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              A legal BAC limit defines the maximum blood alcohol concentration
              at which a person is permitted to operate a motor vehicle. Driving
              at or above this limit is a criminal or administrative offence in
              most jurisdictions.
            </p>
            <p>
              Many countries apply <strong>reduced limits</strong> for specific
              groups:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span><strong>Novice/young drivers:</strong> Often 0.00–0.02% to reduce risk among inexperienced drivers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span><strong>Commercial drivers:</strong> Typically 0.02–0.04% for buses, trucks, and taxis due to greater responsibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span><strong>Motorcycle riders:</strong> Some countries impose lower limits due to higher crash risk.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Regions */}
        {regions.map((region) => (
          <section key={region.name} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              {region.name}
            </h2>
            <div className="space-y-3">
              {region.countries.map((c) => (
                <div
                  key={c.country}
                  className="bg-gray-900/50 rounded p-4 border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-medium text-sm">
                      {c.country}
                    </h3>
                    <span
                      className={`font-mono text-sm font-semibold ${
                        c.limit === "0.00%"
                          ? "text-red-400"
                          : c.limit === "0.02%" || c.limit === "0.03%"
                          ? "text-orange-400"
                          : c.limit === "0.05%"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {c.limit}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">{c.notes}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Global Trends */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Global Trends
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              The World Health Organization (WHO) recommends a BAC limit of
              0.05% or lower for all drivers. The global trend is clearly
              toward stricter limits:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>More countries are adopting 0.05% or lower as the standard limit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Zero-tolerance laws for young and novice drivers are becoming the norm.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Penalties are increasing, including mandatory interlocks, license revocation, and imprisonment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Random breath testing (RBT) is expanding to more countries as an effective deterrent.</span>
              </li>
            </ul>
            <p>
              Research consistently shows that lowering BAC limits reduces
              alcohol-related road fatalities. Countries that moved from 0.08%
              to 0.05% have seen reductions of 5–10% in fatal crashes.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-amber-900/30 border border-amber-700 rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-amber-400 mb-2">
          Important Disclaimer
        </h2>
        <p className="text-gray-300 text-sm">
          Legal BAC limits are subject to change and may vary by jurisdiction
          within a country. Always check current local laws before driving.
          This page is for educational purposes only and does not constitute
          legal advice. The safest option is always to not drive after drinking.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/alcohol-duration"
          className="text-blue-400 hover:text-blue-300"
        >
          ← How Long Alcohol Stays in Your Body
        </Link>
        <Link
          href="/hangover-prevention"
          className="text-blue-400 hover:text-blue-300"
        >
          Hangover Prevention Tips →
        </Link>
      </div>
    </div>
  );
}
