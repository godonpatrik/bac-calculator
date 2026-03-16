import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Alcohol and Calories — How Drinking Affects Your Diet & Weight",
  description:
    "Learn how many calories are in popular alcoholic drinks, why alcohol calories are 'empty,' and how drinking affects metabolism, appetite, and weight management.",
  alternates: {
    canonical: "https://alcoholtrackr.com/alcohol-and-calories",
  },
  openGraph: {
    title: "Alcohol and Calories — How Drinking Affects Your Diet & Weight",
    description:
      "Learn how many calories are in popular alcoholic drinks, why alcohol calories are 'empty,' and how drinking affects metabolism and weight.",
    url: "https://alcoholtrackr.com/alcohol-and-calories",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcohol and Calories — How Drinking Affects Your Diet",
    description:
      "Learn how many calories are in popular alcoholic drinks and how alcohol affects metabolism and weight management.",
  },
};

const breadcrumbItems = [
  { label: "Learn", href: "/learn" },
  { label: "Alcohol and Calories", href: "/alcohol-and-calories" },
];

const drinkCalories = [
  { category: "Beer", drinks: [
    { name: "Regular beer (355 ml / 12 oz, 5% ABV)", calories: "~150 kcal" },
    { name: "Light beer (355 ml / 12 oz, 4% ABV)", calories: "~100 kcal" },
    { name: "IPA / craft beer (355 ml / 12 oz, 6–7% ABV)", calories: "~200 kcal" },
    { name: "Stout (355 ml / 12 oz, 5–6% ABV)", calories: "~170 kcal" },
  ]},
  { category: "Wine", drinks: [
    { name: "Red wine (150 ml / 5 oz)", calories: "~125 kcal" },
    { name: "White wine (150 ml / 5 oz)", calories: "~120 kcal" },
    { name: "Rosé (150 ml / 5 oz)", calories: "~110 kcal" },
    { name: "Champagne / sparkling (150 ml / 5 oz)", calories: "~90 kcal" },
    { name: "Sweet dessert wine (90 ml / 3 oz)", calories: "~140 kcal" },
  ]},
  { category: "Spirits (neat or on the rocks)", drinks: [
    { name: "Vodka (45 ml / 1.5 oz, 40% ABV)", calories: "~97 kcal" },
    { name: "Gin (45 ml / 1.5 oz, 40% ABV)", calories: "~97 kcal" },
    { name: "Rum (45 ml / 1.5 oz, 40% ABV)", calories: "~97 kcal" },
    { name: "Whiskey (45 ml / 1.5 oz, 40% ABV)", calories: "~97 kcal" },
    { name: "Tequila (45 ml / 1.5 oz, 40% ABV)", calories: "~97 kcal" },
  ]},
  { category: "Cocktails & Mixed Drinks", drinks: [
    { name: "Margarita", calories: "~275 kcal" },
    { name: "Piña Colada", calories: "~490 kcal" },
    { name: "Long Island Iced Tea", calories: "~290 kcal" },
    { name: "Mojito", calories: "~215 kcal" },
    { name: "Gin & Tonic", calories: "~170 kcal" },
    { name: "Rum & Coke", calories: "~185 kcal" },
    { name: "Vodka Soda", calories: "~97 kcal" },
  ]},
];

export default function AlcoholAndCaloriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-3">
        Alcohol and Calories
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Alcohol is often an overlooked source of calories. At 7 calories per
        gram, ethanol is the second most energy-dense macronutrient after fat
        (9 cal/g) — and those calories come with zero nutritional value. Here&apos;s
        what you need to know about alcohol&apos;s impact on your diet and weight.
      </p>

      <div className="space-y-6">
        {/* Why Alcohol Has Calories */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Why Alcohol Has So Many Calories
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Ethanol (the type of alcohol in drinks) is an organic molecule
              that your body can oxidize for energy. It provides:
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div>
                  <p className="text-2xl font-bold text-orange-400">7</p>
                  <p className="text-gray-400 text-xs">kcal/gram</p>
                  <p className="text-gray-500 text-xs">Alcohol</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-400">9</p>
                  <p className="text-gray-400 text-xs">kcal/gram</p>
                  <p className="text-gray-500 text-xs">Fat</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-400">4</p>
                  <p className="text-gray-400 text-xs">kcal/gram</p>
                  <p className="text-gray-500 text-xs">Carbohydrates</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400">4</p>
                  <p className="text-gray-400 text-xs">kcal/gram</p>
                  <p className="text-gray-500 text-xs">Protein</p>
                </div>
              </div>
            </div>
            <p>
              A single standard drink (14 grams of pure alcohol) contains
              approximately <strong>98 calories from alcohol alone</strong> —
              before accounting for sugars, mixers, or other ingredients.
              Cocktails with sugary mixers, cream, or fruit juice can easily
              exceed 300–500 calories each.
            </p>
          </div>
        </section>

        {/* Empty Calories */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            What Makes Alcohol Calories &quot;Empty&quot;?
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Unlike food-based calories, alcohol provides:
            </p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span>No protein for muscle repair and growth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span>No essential fats for cell function</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span>No complex carbohydrates for sustained energy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span>No vitamins or minerals (and actually depletes some, like B vitamins and zinc)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span>No fiber for digestive health</span>
              </li>
            </ul>
            <p>
              This means alcohol calories add to your daily total without
              contributing to nutrition, making it easy to exceed your caloric
              needs without feeling full or nourished.
            </p>
          </div>
        </section>

        {/* Calorie Counts */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Calorie Counts for Common Drinks
          </h2>
          <div className="space-y-5">
            {drinkCalories.map((category) => (
              <div key={category.category}>
                <h3 className="text-white font-medium text-sm mb-2">
                  {category.category}
                </h3>
                <div className="space-y-1">
                  {category.drinks.map((drink) => (
                    <div
                      key={drink.name}
                      className="flex items-center justify-between bg-gray-900/50 rounded px-4 py-2 border border-gray-700/50"
                    >
                      <span className="text-gray-300 text-xs">
                        {drink.name}
                      </span>
                      <span className="text-orange-400 font-mono text-xs font-medium ml-4 whitespace-nowrap">
                        {drink.calories}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact on Metabolism */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            How Alcohol Affects Fat Metabolism
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              When you drink alcohol, your liver prioritizes metabolizing
              ethanol over everything else — including fat. This has several
              important consequences:
            </p>
            <ul className="ml-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Fat burning pauses:</strong> Your body shifts its
                  metabolic priority to processing alcohol. Fat oxidation
                  can decrease by up to 73% for several hours after
                  drinking.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Excess calories are stored as fat:</strong> Since
                  your body is busy metabolizing alcohol, calories from food
                  consumed alongside drinks are more likely to be stored
                  rather than burned.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Increased appetite:</strong> Alcohol lowers
                  inhibitions and stimulates appetite. Studies show people
                  consistently eat more when drinking, often choosing
                  calorie-dense foods late at night.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-0.5">•</span>
                <span>
                  <strong>Belly fat accumulation:</strong> Regular drinking
                  is associated with increased visceral fat (the
                  &quot;beer belly&quot;), which is linked to higher risks
                  of metabolic disease, type 2 diabetes, and cardiovascular
                  problems.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Lower-Calorie Alternatives */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Lower-Calorie Drinking Strategies
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Choose spirits with zero-calorie mixers
              </h3>
              <p className="text-gray-400 text-xs">
                Vodka soda, gin with soda water, or whiskey on the rocks
                contain only the calories from the alcohol itself (~97 kcal
                per standard shot). Avoid sugary mixers like cola, juice, or
                tonic water (which has sugar).
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Opt for light beer or dry wine
              </h3>
              <p className="text-gray-400 text-xs">
                Light beers save 30–50 calories per serving compared to
                regular. Dry wines (white, rosé, champagne) have less
                residual sugar than sweet wines.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Watch your portion sizes
              </h3>
              <p className="text-gray-400 text-xs">
                Home-poured drinks are often 2–3× the size of a standard
                serving. A &quot;glass of wine&quot; at home may be 250 ml
                vs the standard 150 ml — adding 60+ extra calories per glass.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Skip the cocktails
              </h3>
              <p className="text-gray-400 text-xs">
                Cocktails with cream, coconut milk, or fruit juice are
                calorie bombs. A single Piña Colada (~490 kcal) has as many
                calories as a full meal. Margaritas, daiquiris, and other
                sweet cocktails are similarly high.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4 border border-gray-700">
              <h3 className="text-green-400 font-medium text-sm mb-1">
                ✓ Alternate with water
              </h3>
              <p className="text-gray-400 text-xs">
                Having a glass of water between drinks cuts your total
                caloric intake in half while also keeping you hydrated and
                slowing your drinking pace.
              </p>
            </div>
          </div>
        </section>

        {/* Weekly Impact */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            The Weekly Impact: How Drinking Adds Up
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              Casual drinking can add a surprising number of calories over
              time:
            </p>
            <div className="bg-gray-900/50 rounded p-4 my-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">2 glasses of wine per night (5 nights/week)</span>
                <span className="text-orange-400 font-mono">~1,250 kcal/week</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">3 beers on Friday + 3 on Saturday</span>
                <span className="text-orange-400 font-mono">~900 kcal/week</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">2 cocktails on a night out</span>
                <span className="text-orange-400 font-mono">~550 kcal/occasion</span>
              </div>
            </div>
            <p>
              Since roughly 3,500 excess calories leads to gaining about 0.5
              kg (1 lb) of body fat, regular drinking can contribute to
              significant weight gain over months and years — even without
              any other dietary changes.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-amber-900/30 border border-amber-700 rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-amber-400 mb-2">
          Important Disclaimer
        </h2>
        <p className="text-gray-300 text-sm">
          This information is for educational purposes only and does not
          constitute nutritional or medical advice. Calorie values are
          approximate and vary by brand and preparation. If you have
          concerns about alcohol&apos;s impact on your weight or health,
          please consult a healthcare professional or registered dietitian.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/alcohol-and-sleep"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Alcohol and Sleep
        </Link>
        <Link
          href="/learn"
          className="text-blue-400 hover:text-blue-300"
        >
          Back to Learn →
        </Link>
      </div>
    </div>
  );
}
