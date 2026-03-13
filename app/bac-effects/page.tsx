import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "BAC Effects — How Blood Alcohol Levels Affect Your Body",
  description:
    "Learn how different blood alcohol content (BAC) levels affect your body and mind. Understand the stages of alcohol impairment from mild relaxation to life-threatening alcohol poisoning.",
  alternates: {
    canonical: "https://alcoholtrackr.com/bac-effects",
  },
  openGraph: {
    title: "BAC Effects — How Blood Alcohol Levels Affect Your Body",
    description:
      "Learn how different blood alcohol content (BAC) levels affect your body and mind. Understand the stages of alcohol impairment from mild relaxation to life-threatening alcohol poisoning.",
    url: "https://alcoholtrackr.com/bac-effects",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAC Effects — How Blood Alcohol Levels Affect Your Body",
    description:
      "Learn how different blood alcohol content (BAC) levels affect your body and mind. Understand the stages of alcohol impairment from mild relaxation to life-threatening alcohol poisoning.",
  },
};

const bacLevels = [
  {
    range: "0.01% – 0.03%",
    stage: "Subclinical",
    color: "text-green-400",
    borderColor: "border-green-500",
    effects: [
      "Slight mood elevation and relaxation",
      "Mild sense of warmth and well-being",
      "No apparent impairment in most people",
      "Judgment and inhibition may be very slightly loosened",
    ],
    driving:
      "Generally within legal limits everywhere, but any alcohol can affect individual reaction times.",
  },
  {
    range: "0.03% – 0.06%",
    stage: "Euphoria",
    color: "text-yellow-400",
    borderColor: "border-yellow-500",
    effects: [
      "Feelings of relaxation and mild euphoria",
      "Lowered inhibitions and increased sociability",
      "Slight impairment of judgment and memory",
      "Decreased attention and fine motor control",
      "Feeling of warmth; skin may flush",
    ],
    driving:
      "Some countries set legal limits at 0.05%. Divided attention tasks like driving begin to be affected.",
  },
  {
    range: "0.06% – 0.10%",
    stage: "Excitement",
    color: "text-orange-400",
    borderColor: "border-orange-500",
    effects: [
      "Noticeable impairment of reasoning and judgment",
      "Reduced coordination and balance",
      "Blunted feelings and reduced pain sensitivity",
      "Slowed reaction time",
      "Impaired peripheral vision and depth perception",
      "Difficulty with speech — may become louder or more animated",
    ],
    driving:
      "At 0.08%, you are legally impaired in the US, UK, and many other countries. Driving risk is significantly elevated.",
  },
  {
    range: "0.10% – 0.15%",
    stage: "Confusion",
    color: "text-red-400",
    borderColor: "border-red-500",
    effects: [
      "Significant impairment of motor control",
      "Slurred speech and staggering gait",
      "Poor judgment and loss of self-control",
      "Memory blackouts may begin",
      "Nausea and vomiting may occur",
      "Marked emotional instability — mood swings common",
    ],
    driving:
      "Extremely dangerous to drive. Crash risk is 5–10 times higher than at 0.00%.",
  },
  {
    range: "0.15% – 0.25%",
    stage: "Stupor",
    color: "text-red-500",
    borderColor: "border-red-600",
    effects: [
      "Severe motor impairment — difficulty walking or standing",
      "Major loss of balance and coordination",
      "Significantly impaired mental function",
      "High risk of choking on vomit (aspiration)",
      "Blackouts likely — inability to form new memories",
      "Risk of injury from falls is very high",
    ],
    driving:
      "Driving is virtually impossible. Risk of fatal crash is 25+ times higher than sober.",
  },
  {
    range: "0.25% – 0.35%",
    stage: "Alcohol Poisoning",
    color: "text-red-600",
    borderColor: "border-red-700",
    effects: [
      "Loss of consciousness or semi-consciousness",
      "Severely depressed reflexes, including gag reflex",
      "Body temperature may drop (hypothermia)",
      "Breathing may become slow and irregular",
      "Heart rate may slow dangerously",
      "High risk of coma — medical emergency",
    ],
    driving:
      "This is a life-threatening emergency. Call emergency services immediately.",
  },
  {
    range: "0.35% and above",
    stage: "Life-Threatening / Fatal",
    color: "text-purple-400",
    borderColor: "border-purple-600",
    effects: [
      "Respiratory failure — breathing may stop",
      "Coma is likely",
      "Body functions begin shutting down",
      "Death is possible without immediate medical intervention",
      "Equivalent to surgical levels of anesthesia",
    ],
    driving:
      "Fatal without emergency medical treatment. This level is the median lethal dose (LD50) for alcohol.",
  },
];

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "BAC Effects", href: "/bac-effects" },
];

export default function BACEffectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        How BAC Levels Affect Your Body
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Blood Alcohol Content (BAC) measures the percentage of alcohol in your
        bloodstream. Even small amounts of alcohol can affect your body and
        brain. Below is a detailed breakdown of what happens at each BAC level.
      </p>

      <div className="space-y-6">
        {bacLevels.map((level) => (
          <section
            key={level.range}
            className={`bg-gray-800 rounded-lg p-6 border-l-4 ${level.borderColor}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
              <h2 className={`text-xl font-semibold ${level.color}`}>
                BAC {level.range}
              </h2>
              <span className="text-gray-500 text-sm">— {level.stage}</span>
            </div>
            <ul className="text-gray-300 text-sm space-y-1.5 mb-4">
              {level.effects.map((effect, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-900/50 rounded px-4 py-2.5">
              <p className="text-gray-400 text-xs">
                <strong className="text-gray-300">Driving &amp; Safety:</strong>{" "}
                {level.driving}
              </p>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-gray-800 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          Factors That Influence BAC Effects
        </h2>
        <div className="text-gray-300 text-sm space-y-2">
          <p>
            The effects listed above are general guidelines. Your individual
            experience may vary based on several factors:
          </p>
          <ul className="space-y-1.5 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>
                <strong>Tolerance:</strong> Regular drinkers may appear less
                impaired at a given BAC, but their reaction time and judgment are
                still affected. Tolerance masks impairment — it does not
                eliminate it.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>
                <strong>Body composition:</strong> People with more body fat and
                less water tend to reach higher BAC levels because alcohol
                distributes primarily through body water.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>
                <strong>Food intake:</strong> Drinking on an empty stomach
                causes faster alcohol absorption and higher peak BAC levels.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>
                <strong>Medications:</strong> Many medications interact with
                alcohol and can amplify its effects, including sedatives,
                antihistamines, antidepressants, and pain relievers.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>
                <strong>Rate of consumption:</strong> Drinking quickly raises BAC
                faster than the liver can metabolize alcohol, leading to higher
                peak levels.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>
                <strong>Age:</strong> Older adults are generally more sensitive
                to alcohol&apos;s effects due to changes in body composition and
                metabolism.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-amber-900/30 border border-amber-700 rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-amber-400 mb-2">
          Important Disclaimer
        </h2>
        <p className="text-gray-300 text-sm">
          This information is for educational purposes only and should not be
          used as a substitute for professional medical advice. If you or someone
          you know is experiencing symptoms of alcohol poisoning — such as
          unconsciousness, slow breathing, vomiting while unconscious, or
          seizures — call emergency services immediately. Never leave an
          intoxicated person alone.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/alcohol-metabolism"
          className="text-blue-400 hover:text-blue-300"
        >
          How Your Body Processes Alcohol →
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
