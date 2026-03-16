import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Learn About Alcohol & BAC — Educational Resources",
  description:
    "Learn about blood alcohol content (BAC), how alcohol affects your body, metabolism, and responsible drinking practices. Comprehensive educational resources backed by scientific research.",
  alternates: {
    canonical: "https://alcoholtrackr.com/learn",
  },
  openGraph: {
    title: "Learn About Alcohol & BAC — Educational Resources",
    description:
      "Learn about blood alcohol content (BAC), how alcohol affects your body, metabolism, and responsible drinking practices. Educational resources backed by science.",
    url: "https://alcoholtrackr.com/learn",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn About Alcohol & BAC — Educational Resources",
    description:
      "Learn about blood alcohol content (BAC), how alcohol affects your body, metabolism, and responsible drinking practices.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
];

const topics = [
  {
    title: "BAC Effects",
    href: "/bac-effects",
    icon: "📊",
    description:
      "Understand how different blood alcohol content (BAC) levels affect your body and mind. Learn about the stages of alcohol impairment from mild relaxation to life-threatening alcohol poisoning.",
    highlights: [
      "7 BAC level ranges explained",
      "Physical and mental effects at each stage",
      "Driving safety implications",
      "Factors that influence impairment",
    ],
  },
  {
    title: "Alcohol Metabolism",
    href: "/alcohol-metabolism",
    icon: "⚗️",
    description:
      "Discover how your body absorbs, distributes, metabolizes, and eliminates alcohol. Learn about the Widmark formula, liver enzymes, elimination rates, and why you can't speed up the process.",
    highlights: [
      "4 stages: absorption, distribution, metabolism, elimination",
      "Widmark formula explained",
      "Liver enzyme pathways (ADH, ALDH, CYP2E1)",
      "Common myths debunked",
    ],
  },
  {
    title: "Responsible Drinking",
    href: "/responsible-drinking",
    icon: "🛡️",
    description:
      "Practical tips for safer alcohol consumption. Learn about standard drink sizes, low-risk drinking guidelines, harm reduction strategies, recognizing alcohol poisoning, and when to seek help.",
    highlights: [
      "Standard drink definitions",
      "Low-risk drinking guidelines (US, UK, AU, CA)",
      "Harm reduction tips before/during/after drinking",
      "Emergency alcohol poisoning recognition",
    ],
  },
  {
    title: "Scientific Research",
    href: "/research",
    icon: "🔬",
    description:
      "Explore peer-reviewed scientific papers on blood alcohol content, the Widmark formula, alcohol metabolism, and physiological effects. Each paper includes editorial summaries and links to original publications.",
    highlights: [
      "Widmark's foundational 1932 research",
      "Alcohol elimination rate studies",
      "Gender differences in metabolism",
      "Health effects and impairment research",
    ],
  },
  {
    title: "How Long Alcohol Stays in Your Body",
    href: "/alcohol-duration",
    icon: "⏱️",
    description:
      "Find out how long alcohol remains detectable in your blood, breath, urine, saliva, and hair. Learn about elimination timelines, what affects clearance speed, and how different tests detect alcohol.",
    highlights: [
      "Detection windows for blood, breath, urine & hair",
      "Average BAC elimination rate explained",
      "Factors that slow alcohol clearance",
      "Myths about speeding up sobriety",
    ],
  },
  {
    title: "Legal BAC Limits by Country",
    href: "/legal-bac-limits",
    icon: "⚖️",
    description:
      "Compare drink-driving BAC limits across the world. Understand zero-tolerance laws, penalties for exceeding limits, and how legal thresholds differ for commercial and novice drivers.",
    highlights: [
      "BAC limits for 40+ countries",
      "Zero-tolerance and reduced limits",
      "Commercial & novice driver rules",
      "Penalties overview by region",
    ],
  },
  {
    title: "Hangover Prevention Tips",
    href: "/hangover-prevention",
    icon: "💊",
    description:
      "Learn what actually causes hangovers, which prevention strategies are backed by science, and which popular remedies are myths. Practical tips for before, during, and after drinking.",
    highlights: [
      "The science behind hangovers",
      "Evidence-based prevention strategies",
      "Why congeners matter",
      "Popular myths debunked",
    ],
  },
  {
    title: "Alcohol vs Body Weight",
    href: "/alcohol-body-weight",
    icon: "⚖️",
    description:
      "Understand why body weight is one of the most important factors in BAC calculation. Learn how body composition, water content, and metabolism rate interact with alcohol.",
    highlights: [
      "How body weight affects BAC",
      "Body fat vs lean mass impact",
      "Widmark factor and body water",
      "BAC comparison tables by weight",
    ],
  },
  {
    title: "Alcohol and Sleep",
    href: "/alcohol-and-sleep",
    icon: "😴",
    description:
      "Discover how alcohol disrupts your sleep architecture, reduces REM sleep, and leads to poor sleep quality — even when it seems to help you fall asleep faster.",
    highlights: [
      "How alcohol changes sleep stages",
      "REM sleep suppression explained",
      "Sleep apnea and alcohol risk",
      "Tips for better sleep after drinking",
    ],
  },
  {
    title: "Alcohol and Calories",
    href: "/alcohol-and-calories",
    icon: "🔥",
    description:
      "Learn how many calories are in popular alcoholic drinks, why alcohol calories are 'empty,' and how drinking affects metabolism, appetite, and weight management.",
    highlights: [
      "Calorie counts for common drinks",
      "Why alcohol has 7 calories per gram",
      "Impact on fat metabolism",
      "Lower-calorie alternatives",
    ],
  },
];

export default function LearnPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        Learn About Alcohol & Blood Alcohol Content
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Evidence-based educational resources to help you understand how alcohol
        affects your body, how BAC is calculated, and how to drink more safely.
        All content is backed by peer-reviewed scientific research.
      </p>

      <div className="space-y-6">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="block bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg group"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{topic.icon}</div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {topic.title}
                  <span className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </h2>
                <p className="text-gray-300 text-sm mb-3">
                  {topic.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topic.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-gray-400 text-xs flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="bg-gray-800 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          Why This Information Matters
        </h2>
        <div className="text-gray-300 text-sm space-y-2">
          <p>
            Understanding how alcohol affects your body and how blood alcohol
            content (BAC) works is essential for making informed decisions about
            drinking. Whether you&apos;re curious about the science behind BAC
            calculation, want to know what happens to your body at different BAC
            levels, or need practical safety tips, these resources provide
            evidence-based information.
          </p>
          <p>
            All of our educational content is grounded in peer-reviewed
            scientific research, including the foundational work by Swedish
            scientist Erik Widmark on alcohol metabolism and pharmacokinetics.
            We cite authoritative sources like the National Institute on Alcohol
            Abuse and Alcoholism (NIAAA), World Health Organization (WHO), and
            leading addiction medicine researchers.
          </p>
          <p>
            <strong>Remember:</strong> This information is for educational
            purposes only and does not substitute for medical advice. If you
            have concerns about your alcohol consumption, please consult a
            healthcare professional.
          </p>
        </div>
      </section>

      <section className="bg-amber-900/30 border border-amber-700 rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-amber-400 mb-2">
          Need Help with Alcohol?
        </h2>
        <p className="text-gray-300 text-sm mb-3">
          If you&apos;re struggling with alcohol use, help is available. You
          are not alone, and recovery is possible.
        </p>
        <Link
          href="/support"
          className="inline-block px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Find Support Resources →
        </Link>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Calculator
        </Link>
        <Link href="/faq" className="text-blue-400 hover:text-blue-300">
          Frequently Asked Questions
        </Link>
        <Link href="/about" className="text-blue-400 hover:text-blue-300">
          About BAC Calculator
        </Link>
      </div>
    </div>
  );
}
