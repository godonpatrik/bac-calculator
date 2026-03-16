export default function FAQSection() {
  const faqs = [
    {
      question: "What is Blood Alcohol Content (BAC)?",
      answer:
        "Blood Alcohol Content (BAC) is a measurement of the amount of alcohol in your bloodstream, expressed as a percentage. A BAC of 0.08% means there are 0.08 grams of alcohol per 100 milliliters of blood. BAC is the standard measure used by law enforcement to determine legal intoxication. Learn more about how different levels affect you on our BAC Effects page.",
    },
    {
      question: "How does the Widmark BAC formula work?",
      answer:
        "The Widmark formula calculates BAC by dividing the grams of alcohol consumed by your body weight multiplied by a gender-specific constant (0.68 for men, 0.55 for women), which accounts for differences in body water content. The formula then subtracts the alcohol metabolized over time at approximately 0.015% BAC per hour. See our Alcohol Metabolism page for a full breakdown of each step.",
    },
    {
      question: "What is the legal BAC limit for driving?",
      answer:
        "It depends on where you live. In most US states the limit is 0.08%, while many European and Asian countries use 0.05%. Some countries like the Czech Republic, Hungary, and Brazil enforce zero tolerance (0.00%). Commercial drivers and novice drivers often face stricter limits. See our Legal BAC Limits by Country page for a full comparison of 40+ countries.",
    },
    {
      question: "How long does alcohol stay in your system?",
      answer:
        "Your liver eliminates alcohol at roughly 0.015% BAC per hour — about one standard drink per hour. At 0.08% BAC, it takes approximately 5–6 hours to reach 0.00%. However, alcohol can be detected much longer depending on the test: up to 12 hours in blood, 24 hours on breath, 80 hours in urine (EtG test), and up to 90 days in hair. Nothing speeds up elimination — coffee, cold showers, and exercise do not help. See our full guide on How Long Alcohol Stays in Your Body.",
    },
    {
      question: "How many drinks does it take to reach 0.08% BAC?",
      answer:
        "This varies significantly by weight, gender, and drinking speed. For a 70 kg (154 lb) male, approximately 3–4 standard drinks in one hour may bring BAC near 0.08%. For a 60 kg (132 lb) female, it may take only 2–3 drinks. Body composition matters too — people with more body fat reach higher BAC than people of the same weight with more muscle. See our Alcohol vs Body Weight page for detailed comparison tables.",
    },
    {
      question: "What is a standard drink?",
      answer:
        "A standard drink contains about 14 grams (0.6 ounces) of pure alcohol. This equals roughly 355 ml (12 oz) of regular 5% beer, 150 ml (5 oz) of 12% wine, or 44 ml (1.5 oz) of 40% distilled spirits like vodka, rum, or whiskey. Cocktails often contain 2–3 standard drinks worth of alcohol in a single glass.",
    },
    {
      question: "Why does body weight affect BAC so much?",
      answer:
        "Alcohol distributes through your body's water content. Heavier people generally have more body water, so the same amount of alcohol is diluted across a larger volume, resulting in a lower BAC. However, body composition matters too: fat tissue contains very little water, so two people of the same weight but different body fat percentages will reach different BAC levels. Women typically reach higher BAC than men of the same weight due to differences in body water and enzyme activity. See our Alcohol vs Body Weight page for details.",
    },
    {
      question: "Does eating food lower your BAC?",
      answer:
        "Eating food before or while drinking slows alcohol absorption, which can result in a lower peak BAC. However, food does not prevent intoxication or reduce your total alcohol intake — it only delays and reduces the peak. Eating after alcohol is already absorbed has no effect on BAC. Fatty and protein-rich foods are most effective at slowing absorption.",
    },
    {
      question: "How can I prevent a hangover?",
      answer:
        "The only guaranteed way to avoid a hangover is to not drink. But evidence-based strategies that help include: eating a meal before drinking, pacing yourself to one drink per hour, alternating with water, and choosing clear spirits (vodka, gin) over dark ones (bourbon, whiskey) because they contain fewer congeners — byproducts of fermentation that worsen hangovers. 'Hair of the dog' and greasy food the morning after are myths. See our Hangover Prevention Tips page for the full science.",
    },
    {
      question: "How many calories are in alcohol?",
      answer:
        "Alcohol contains 7 calories per gram — almost as much as fat (9 cal/g) — and these are 'empty' calories with zero nutritional value. A standard beer has ~150 kcal, a glass of wine ~125 kcal, a shot of spirits ~97 kcal, and cocktails like a Piña Colada can reach ~490 kcal. Alcohol also pauses fat metabolism, increases appetite, and promotes belly fat storage. See our Alcohol and Calories page for a full calorie comparison chart.",
    },
    {
      question: "Does alcohol affect sleep?",
      answer:
        "Yes. While alcohol can help you fall asleep faster, it significantly disrupts sleep quality. It suppresses REM sleep (critical for memory and mood), causes fragmented sleep in the second half of the night, and worsens snoring and sleep apnea. Even 2–3 drinks can reduce REM sleep by about 20%. The result is feeling tired and unrefreshed despite spending enough time in bed. See our Alcohol and Sleep page for the full breakdown.",
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
