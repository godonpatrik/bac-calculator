export default function FAQSection() {
  const faqs = [
    {
      question: "What is Blood Alcohol Content (BAC)?",
      answer:
        "Blood Alcohol Content (BAC) is a measurement of the amount of alcohol in your bloodstream, expressed as a percentage. A BAC of 0.08% means there are 0.08 grams of alcohol per 100 milliliters of blood. BAC is the standard measure used by law enforcement to determine legal intoxication.",
    },
    {
      question: "How does the Widmark BAC formula work?",
      answer:
        "The Widmark formula calculates BAC by dividing the grams of alcohol consumed by your body weight multiplied by a gender-specific constant (0.68 for men, 0.55 for women), which accounts for differences in body water content. The formula then subtracts the alcohol metabolized over time at approximately 0.015% BAC per hour.",
    },
    {
      question: "What is the legal BAC limit for driving?",
      answer:
        "In most US states, the legal BAC limit for driving is 0.08%. Many European and Asian countries have adopted a stricter 0.05% limit. Commercial drivers in the US face a 0.04% limit, and drivers under 21 face zero-tolerance laws (0.00%–0.02%). Impairment can start at levels well below the legal limit.",
    },
    {
      question: "How long does it take to sober up?",
      answer:
        "On average, the body metabolizes alcohol at a rate of about 0.015% BAC per hour. If your BAC is 0.08%, it would take roughly 5–6 hours to return to 0.00%. Nothing speeds up this process — coffee, food, cold showers, and exercise do not accelerate alcohol metabolism.",
    },
    {
      question: "How many drinks does it take to reach 0.08% BAC?",
      answer:
        "This varies significantly by weight, gender, and drinking speed. For a 70kg (154lb) male, approximately 3–4 standard drinks in one hour may bring BAC near 0.08%. For a 60kg (132lb) female, it may take only 2–3 drinks. Use our BAC calculator above for a personalized estimate.",
    },
    {
      question: "What is a standard drink?",
      answer:
        "A standard drink contains about 14 grams (0.6 ounces) of pure alcohol. This equals roughly 355ml (12oz) of regular 5% beer, 150ml (5oz) of 12% wine, or 44ml (1.5oz) of 40% distilled spirits like vodka, rum, or whiskey.",
    },
    {
      question: "Does eating food lower your BAC?",
      answer:
        "Eating food before or while drinking slows alcohol absorption, which can result in a lower peak BAC. However, food does not prevent intoxication or reduce your total alcohol intake — it only delays and reduces the peak. Fatty and protein-rich foods are most effective at slowing absorption.",
    },
    {
      question: "Is this BAC calculator accurate?",
      answer:
        "This calculator uses the scientifically-accepted Widmark formula and provides reasonable estimates. However, actual BAC varies due to individual factors like metabolism, food intake, medications, liver health, and hydration levels. Only professional breathalyzer or blood tests can provide exact BAC measurements. Never rely solely on this calculator to decide if you are safe to drive.",
    },
  ];

  return (
    <section
      className="bg-gray-800 rounded-lg shadow-lg p-6"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        BAC Calculator — Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="border-b border-gray-700 pb-4 last:border-0 last:pb-0"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
