import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Policy & Standards — BAC Calculator",
  description:
    "Our editorial policy explains how BAC Calculator (alcoholtrackr.com) researches, writes, reviews, and updates content about blood alcohol content, alcohol metabolism, and responsible drinking.",
  alternates: {
    canonical: "https://alcoholtrackr.com/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy & Standards — BAC Calculator",
    description:
      "How we research, write, review, and update content on alcoholtrackr.com. Sources, fact-checking process, conflict-of-interest policy, and correction policy.",
    url: "https://alcoholtrackr.com/editorial-policy",
    siteName: "BAC Calculator",
    type: "website",
  },
};

const breadcrumbItems = [
  { label: "Editorial Policy", href: "/editorial-policy" },
];

export default function EditorialPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-white mb-2">
        Editorial Policy &amp; Standards
      </h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: April 5, 2026</p>

      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Our Mission
          </h2>
          <p>
            BAC Calculator (alcoholtrackr.com) exists to provide accurate,
            evidence-based information about blood alcohol content (BAC),
            alcohol metabolism, and the health and legal consequences of
            drinking — presented in a way that supports harm reduction and
            informed decision-making. We do not promote alcohol use. We do not
            accept sponsorships from alcohol producers, distributors, or
            retailers.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            How We Source Information
          </h2>
          <p className="mb-2">
            Every substantive claim on this site is grounded in one or more of
            the following source types, in order of preference:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              <strong>Peer-reviewed research in indexed journals</strong> —
              pharmacokinetic, forensic-toxicology, epidemiological, and
              clinical-medicine literature (PubMed, ScienceDirect, Wiley,
              Springer, Elsevier, BMJ, NEJM, The Lancet, etc.).
            </li>
            <li>
              <strong>Government and intergovernmental health bodies</strong>{" "}
              — National Institute on Alcohol Abuse and Alcoholism (NIAAA),
              Centers for Disease Control and Prevention (CDC), National
              Highway Traffic Safety Administration (NHTSA), World Health
              Organization (WHO), European Monitoring Centre for Drugs and
              Drug Addiction (EMCDDA), UK NHS, Australian Department of Health.
            </li>
            <li>
              <strong>Professional medical society guidance</strong> — American
              Society of Addiction Medicine (ASAM), American Medical
              Association (AMA), European Association for the Study of the
              Liver (EASL).
            </li>
            <li>
              <strong>Established legal and regulatory sources</strong> for
              jurisdiction-specific BAC limits and penalties.
            </li>
          </ol>
          <p className="mt-3">
            Wherever feasible we link directly to the primary source — either
            the original journal article (via DOI or PubMed) or the relevant
            government document. Our{" "}
            <Link
              href="/research"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Research page
            </Link>{" "}
            lists the specific peer-reviewed studies that underpin our
            calculator and educational content.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Writing &amp; Review Process
          </h2>
          <p className="mb-2">
            Each article on this site moves through the following workflow
            before publication:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              <strong>Research brief.</strong> An editor compiles the
              peer-reviewed literature and authoritative guidance that will
              anchor the article.
            </li>
            <li>
              <strong>Drafting.</strong> A writer with background in health,
              science, or safety communication produces the first draft,
              translating the technical material into accessible language.
            </li>
            <li>
              <strong>Fact-check pass.</strong> An editor independently
              verifies every numeric claim (elimination rates, BAC thresholds,
              standard-drink volumes, legal limits, calorie values, etc.)
              against at least one primary source.
            </li>
            <li>
              <strong>Readability and harm-reduction review.</strong> We make
              sure language is clear, non-moralising, and does not encourage
              risky behaviour; safety warnings are placed where they are
              actionable.
            </li>
            <li>
              <strong>Publish and date.</strong> The article is published with
              a visible publication date and a &quot;last reviewed&quot; date.
            </li>
            <li>
              <strong>Scheduled re-review.</strong> Every article is
              re-reviewed at least once every twelve months, or sooner when
              new evidence or legal changes make it necessary.
            </li>
          </ol>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Accuracy &amp; Corrections Policy
          </h2>
          <p className="mb-2">
            We take accuracy seriously because the topic is YMYL (&quot;Your
            Money or Your Life&quot;) — mistakes could influence decisions
            about drinking and driving, medication interactions, or seeking
            treatment.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              If we discover an error, we correct it promptly and note the
              correction on the affected page.
            </li>
            <li>
              Material changes (new legal limit, updated guidance from a
              health authority, new peer-reviewed finding) trigger an update
              of the &quot;last reviewed&quot; date and a change log on the
              page.
            </li>
            <li>
              If you believe we have a factual error, please{" "}
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                contact us
              </Link>
              . We will investigate and respond.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Scope &amp; Limitations — What This Site Is Not
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Not medical advice.</strong> We publish educational
              information. It is not a substitute for advice from a physician,
              pharmacist, or licensed addiction-medicine clinician. If you
              have health concerns, talk to a qualified professional.
            </li>
            <li>
              <strong>Not legal advice.</strong> BAC results from our
              calculator cannot be used as evidence in any legal proceeding.
              Legal BAC limits vary by jurisdiction and change over time — we
              document them for reference, not as legal guidance.
            </li>
            <li>
              <strong>Not a breathalyzer.</strong> The calculator is a
              statistical estimate based on the Widmark formula and average
              pharmacokinetic values. Your actual BAC may differ significantly
              from the estimate due to individual metabolism, food intake,
              medications, liver health, hydration, and other factors.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Advertising &amp; Conflicts of Interest
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              This site may be monetised through third-party display
              advertising (Google AdSense). Editorial content is produced
              independently of any advertising relationship.
            </li>
            <li>
              We do <strong>not</strong> accept sponsored posts, affiliate
              placements, or payments from alcohol producers, distributors,
              retailers, or rehab/treatment centres in exchange for coverage
              or linking.
            </li>
            <li>
              If we ever publish a piece in which any form of compensation is
              involved, it will be clearly labelled as such on the page.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Audience &amp; Age
          </h2>
          <p>
            Our content is intended for adults (age 18+, or the legal drinking
            age in the reader&apos;s jurisdiction) who have already decided
            whether or how to consume alcohol and want accurate information
            about the consequences. We do not publish content that encourages
            minors to drink, glamorises binge drinking, or minimises the risks
            of alcohol use disorder.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Feedback &amp; Contact
          </h2>
          <p>
            We welcome reader feedback, source suggestions, and correction
            requests. Please reach us via the{" "}
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              contact form
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
