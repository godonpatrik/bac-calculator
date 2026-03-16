import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Alcohol and Sleep — How Drinking Affects Your Sleep Quality",
  description:
    "Discover how alcohol disrupts sleep architecture, suppresses REM sleep, worsens sleep apnea, and leads to poor sleep quality — even when it seems to help you fall asleep faster.",
  alternates: {
    canonical: "https://alcoholtrackr.com/alcohol-and-sleep",
  },
  openGraph: {
    title: "Alcohol and Sleep — How Drinking Affects Your Sleep Quality",
    description:
      "Discover how alcohol disrupts sleep architecture, suppresses REM sleep, and leads to poor sleep quality — even when it seems to help you fall asleep faster.",
    url: "https://alcoholtrackr.com/alcohol-and-sleep",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcohol and Sleep — How Drinking Affects Sleep",
    description:
      "Discover how alcohol disrupts sleep architecture, suppresses REM sleep, and leads to poor sleep quality.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "Alcohol and Sleep", href: "/alcohol-and-sleep" },
];

export default function AlcoholAndSleepPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        Alcohol and Sleep
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Many people use alcohol as a sleep aid, but the reality is more
        complex. While alcohol can help you fall asleep faster, it
        significantly disrupts sleep quality, reduces restorative sleep
        stages, and leaves you feeling more tired the next day.
      </p>

      <div className="space-y-6">
        {/* The Paradox */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            The Sleep Paradox: Faster Onset, Worse Quality
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Alcohol is a central nervous system depressant. It enhances the
              effect of the neurotransmitter GABA, which slows brain activity
              and promotes relaxation. This is why alcohol can reduce the
              time it takes to fall asleep (called <strong>sleep onset
              latency</strong>) — sometimes by as much as 10–15 minutes.
            </p>
            <p>
              However, as your body metabolizes the alcohol during the night,
              the sedative effect wears off and a <strong>rebound
              effect</strong> occurs. Your nervous system becomes more
              excitable in the second half of the night, leading to:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Frequent awakenings after 3–4 hours of sleep</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Lighter, more fragmented sleep</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Vivid dreams or nightmares during REM rebound</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Waking up earlier than intended</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Feeling unrefreshed despite adequate time in bed</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sleep Architecture */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            How Alcohol Changes Sleep Architecture
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Normal sleep cycles through several stages approximately every
              90 minutes. Alcohol disrupts this cycle in specific ways:
            </p>

            <div className="space-y-3 my-3">
              <div className="bg-gray-900/50 rounded p-4 border-l-4 border-blue-500">
                <h3 className="text-blue-400 font-medium text-sm mb-1">
                  First Half of the Night
                </h3>
                <p className="text-gray-400 text-xs">
                  Alcohol increases deep sleep (slow-wave sleep / NREM Stage
                  3) in the first half of the night. This sounds positive,
                  but it comes at the expense of REM sleep. You may sleep
                  deeply initially but miss critical restorative sleep
                  phases.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4 border-l-4 border-orange-500">
                <h3 className="text-orange-400 font-medium text-sm mb-1">
                  Second Half of the Night
                </h3>
                <p className="text-gray-400 text-xs">
                  As alcohol is metabolized (BAC drops toward zero), the
                  sedative effect fades and a rebound occurs. Sleep becomes
                  lighter, more fragmented, and you may wake up multiple
                  times. REM sleep may rebound with unusually intense dreams.
                </p>
              </div>
            </div>

            <p>
              The net result: even though you may have been &quot;asleep&quot;
              for 7–8 hours, the quality of that sleep is significantly
              degraded.
            </p>
          </div>
        </section>

        {/* REM Sleep */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            REM Sleep Suppression
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              <strong>REM (Rapid Eye Movement) sleep</strong> is critical for
              memory consolidation, emotional processing, learning, and
              cognitive function. Alcohol suppresses REM sleep, especially in
              the first half of the night.
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3">
              <p className="text-gray-300 text-sm">
                <strong>Research finding:</strong> Even moderate drinking (2
                standard drinks for men, 1 for women) has been shown to reduce
                REM sleep by approximately 20%. Higher consumption can
                suppress REM sleep even further.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Source: Ebrahim et al. (2013), &quot;Alcohol and Sleep I:
                Effects on Normal Sleep,&quot; <em>Alcoholism: Clinical and
                Experimental Research</em>.
              </p>
            </div>
            <p>
              Chronic REM sleep deprivation is associated with:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Impaired memory and learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Increased anxiety and emotional reactivity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Reduced problem-solving ability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>Weakened immune function over time</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sleep Apnea */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Alcohol and Sleep Apnea
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Alcohol relaxes the muscles in the throat and upper airway, which
              can worsen or trigger <strong>obstructive sleep apnea
              (OSA)</strong> — a condition where the airway repeatedly
              collapses during sleep, causing pauses in breathing.
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Alcohol increases the frequency and duration of apnea
                  episodes, even in people without a diagnosed sleep disorder.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  Snoring is significantly worsened by alcohol due to
                  increased upper airway relaxation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  For people with existing OSA, alcohol can make the
                  condition more dangerous by reducing the arousal response
                  that normally wakes you when oxygen levels drop.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Dose-Response */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            How Much Alcohol Disrupts Sleep?
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <div className="space-y-3 my-3">
              <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
                <h3 className="text-yellow-400 font-medium text-sm mb-1">
                  Low dose (1 standard drink)
                </h3>
                <p className="text-gray-400 text-xs">
                  Minimal effect on sleep architecture for most people.
                  May slightly reduce sleep onset latency. REM sleep is
                  largely unaffected.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
                <h3 className="text-orange-400 font-medium text-sm mb-1">
                  Moderate dose (2–3 standard drinks)
                </h3>
                <p className="text-gray-400 text-xs">
                  Noticeable impact on sleep quality. REM sleep is reduced
                  by ~20%. Increased slow-wave sleep early in the night
                  followed by fragmented sleep. You may wake during the
                  night and feel less rested.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
                <h3 className="text-red-400 font-medium text-sm mb-1">
                  High dose (4+ standard drinks)
                </h3>
                <p className="text-gray-400 text-xs">
                  Significant sleep disruption. REM suppression is severe.
                  Second-half awakenings are common. Sleep efficiency drops
                  substantially. Total sleep time may decrease despite
                  feeling sedated. Next-day fatigue and cognitive
                  impairment are likely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Tips for Better Sleep After Drinking
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Stop drinking well before bedtime
              </h3>
              <p className="text-gray-400 text-xs">
                Allow at least 3–4 hours between your last drink and sleep.
                This gives your body time to metabolize most of the alcohol
                before you go to bed, reducing the rebound effect.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Hydrate before sleep
              </h3>
              <p className="text-gray-400 text-xs">
                Drink water alongside and after your alcoholic drinks.
                Dehydration worsens sleep quality and contributes to early
                morning wakefulness. Keep water by your bed.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Limit total consumption
              </h3>
              <p className="text-gray-400 text-xs">
                The less you drink, the less sleep disruption you&apos;ll
                experience. Keeping consumption to 1–2 standard drinks
                minimizes the impact on sleep architecture.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Don&apos;t rely on alcohol as a sleep aid
              </h3>
              <p className="text-gray-400 text-xs">
                If you regularly use alcohol to fall asleep, you may develop
                tolerance (needing more for the same effect) and
                dependence. Speak with a healthcare provider about
                evidence-based alternatives for insomnia.
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
          This information is for educational purposes only and does not
          constitute medical advice. If you are experiencing chronic sleep
          problems, whether or not related to alcohol use, please consult a
          healthcare professional or sleep specialist.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/alcohol-body-weight"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Alcohol vs Body Weight
        </Link>
        <Link
          href="/alcohol-and-calories"
          className="text-blue-400 hover:text-blue-300"
        >
          Alcohol and Calories →
        </Link>
      </div>
    </div>
  );
}
