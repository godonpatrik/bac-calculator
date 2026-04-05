import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Calculator Methodology — How We Estimate BAC",
  description:
    "A detailed explanation of the calculation method used by our BAC calculator — the Widmark formula, the constants we use for alcohol density, Widmark factor, and elimination rate, and the limitations of the model.",
  alternates: {
    canonical: "https://alcoholtrackr.com/methodology",
  },
  openGraph: {
    title: "Calculator Methodology — How We Estimate BAC",
    description:
      "The Widmark formula, constants, assumptions, and limitations behind our blood alcohol content calculator.",
    url: "https://alcoholtrackr.com/methodology",
    siteName: "BAC Calculator",
    type: "website",
  },
};

const breadcrumbItems = [
  { label: "Methodology", href: "/methodology" },
];

export default function MethodologyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-2">
        Calculator Methodology
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        How we estimate blood alcohol content — the formula, constants,
        assumptions, and limitations.
      </p>

      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            The Widmark Equation
          </h2>
          <p className="mb-3">
            Our calculator is built on the Widmark equation, a pharmacokinetic
            model introduced by Swedish scientist Erik M. P. Widmark in 1932
            and still the de-facto standard in forensic toxicology for
            estimating blood alcohol concentration from a known alcohol dose:
          </p>
          <div className="bg-gray-900/60 rounded p-4 my-3 text-center">
            <p className="text-white font-mono text-base">
              BAC (%) = (A / (r × W)) × 100 − (β × t)
            </p>
            <div className="text-gray-400 text-xs mt-3 text-left max-w-md mx-auto space-y-0.5">
              <p><strong>A</strong> = mass of pure ethanol consumed (grams)</p>
              <p><strong>r</strong> = Widmark distribution factor (dimensionless)</p>
              <p><strong>W</strong> = body weight (grams)</p>
              <p><strong>β</strong> = ethanol elimination rate (% BAC / hour)</p>
              <p><strong>t</strong> = time elapsed since drinking began (hours)</p>
            </div>
          </div>
          <p>
            For each individual drink, we compute its contribution to BAC and
            apply time-based elimination from the moment the drink was
            consumed. The live chart sums these per-drink contributions at
            one-minute resolution.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Constants We Use
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="py-2 pr-4 text-gray-400 font-medium">Constant</th>
                  <th className="py-2 pr-4 text-gray-400 font-medium">Value</th>
                  <th className="py-2 text-gray-400 font-medium">Justification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="py-3 pr-4 align-top">Ethanol density</td>
                  <td className="py-3 pr-4 align-top font-mono text-xs">0.789 g/mL</td>
                  <td className="py-3 text-gray-400 text-xs align-top">
                    Standard density of ethanol at 20 °C used in
                    pharmacology and beverage-alcohol calculations.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 align-top">Widmark factor — men</td>
                  <td className="py-3 pr-4 align-top font-mono text-xs">r = 0.68</td>
                  <td className="py-3 text-gray-400 text-xs align-top">
                    Widely cited adult-male mean from Widmark (1932) and
                    replicated in later forensic literature. Reflects that
                    ~68% of body mass is water in a reference adult male.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 align-top">Widmark factor — women</td>
                  <td className="py-3 pr-4 align-top font-mono text-xs">r = 0.55</td>
                  <td className="py-3 text-gray-400 text-xs align-top">
                    Widely cited adult-female mean. Reflects lower body-water
                    fraction and reduced gastric ADH activity (see Frezza et
                    al., 1990, NEJM).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 align-top">Elimination rate (β)</td>
                  <td className="py-3 pr-4 align-top font-mono text-xs">0.015 %/h</td>
                  <td className="py-3 text-gray-400 text-xs align-top">
                    Mean of the range (0.010–0.025 %/h) established in
                    Jones (2010) across thousands of controlled subjects,
                    assuming zero-order kinetics at moderate BAC.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Assumptions the Model Makes
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Zero-order elimination.</strong> The liver metabolises
              ethanol at a roughly constant rate across the moderate-to-high
              BAC range. This is the standard assumption of the Widmark
              model.
            </li>
            <li>
              <strong>Instant absorption approximation.</strong> The basic
              Widmark formula treats each drink as if it enters the
              bloodstream at the moment it is consumed. Real absorption takes
              15–90 minutes depending on food and drink concentration, so the
              model can slightly over-estimate BAC in the first hour and
              under-estimate the true peak if drinks are spaced.
            </li>
            <li>
              <strong>Average body composition.</strong> A single r value per
              sex ignores variation in body fat percentage, age, and ethnic
              background that influence body-water distribution.
            </li>
            <li>
              <strong>Healthy liver function.</strong> Elimination rates are
              altered by liver disease, chronic heavy drinking, fasting
              state, and certain medications.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Known Limitations
          </h2>
          <p className="mb-2">
            Because of the assumptions above, the calculator should be read
            as a <strong>population-average estimate</strong>, not a personal
            measurement. Evidence shows that:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Individual BAC can differ from the Widmark estimate by ±30% or more.</li>
            <li>Food substantially reduces peak BAC; the basic formula does not model this.</li>
            <li>Carbonated mixers, drink temperature, and drinking pace all shift absorption rates.</li>
            <li>Chronic heavy drinkers develop metabolic tolerance that may raise β.</li>
          </ul>
          <p className="mt-3">
            The only way to measure BAC accurately is with a calibrated
            evidential breath-testing device or a venous blood draw analysed
            in a certified laboratory.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Primary References
          </h2>
          <ol className="list-decimal list-inside ml-4 space-y-2 text-xs text-gray-400">
            <li>
              Widmark, E. M. P. (1932). <em>Die theoretischen Grundlagen und
              die praktische Verwendbarkeit der gerichtlich-medizinischen
              Alkoholbestimmung.</em> Urban &amp; Schwarzenberg, Berlin.
            </li>
            <li>
              Jones, A. W. (2010). Evidence-based survey of the elimination
              rates of ethanol from blood with applications in forensic
              casework. <em>Forensic Science International</em>, 200(1–3),
              1–20.{" "}
              <a
                href="https://doi.org/10.1016/j.forsciint.2010.02.021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                doi.org/10.1016/j.forsciint.2010.02.021
              </a>
            </li>
            <li>
              Frezza, M., di Padova, C., Pozzato, G., Terpin, M., Baraona,
              E., &amp; Lieber, C. S. (1990). High blood alcohol levels in
              women: the role of decreased gastric alcohol dehydrogenase
              activity and first-pass metabolism. <em>New England Journal of
              Medicine</em>, 322(2), 95–99.{" "}
              <a
                href="https://doi.org/10.1056/NEJM199001113220205"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                doi.org/10.1056/NEJM199001113220205
              </a>
            </li>
            <li>
              Cederbaum, A. I. (2012). Alcohol metabolism. <em>Clinics in
              Liver Disease</em>, 16(4), 667–685.{" "}
              <a
                href="https://doi.org/10.1016/j.cld.2012.08.002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                doi.org/10.1016/j.cld.2012.08.002
              </a>
            </li>
          </ol>
          <p className="mt-4 text-xs">
            Additional peer-reviewed sources are catalogued on our{" "}
            <Link
              href="/research"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Research page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
