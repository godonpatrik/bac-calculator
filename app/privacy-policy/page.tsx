import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — BAC Calculator",
  description:
    "Privacy Policy for BAC Calculator (alcoholtrackr.com). Learn how we handle your data, cookies, and third-party services.",
  alternates: {
    canonical: "https://alcoholtrackr.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm mb-6 inline-block"
      >
        ← Back to Calculator
      </Link>

      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: Feb 23, 2026</p>

      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            1. Introduction
          </h2>
          <p>
            Welcome to BAC Calculator (&quot;alcoholtrackr.com&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            2. Information We Collect
          </h2>
          <h3 className="text-lg font-medium text-white mt-3 mb-1">
            2.1 Data You Provide
          </h3>
          <p>
            When using our BAC calculator, you may input personal data such as
            your weight, gender, and drink information. We do not collect or
            store this data.
          </p>

          <h3 className="text-lg font-medium text-white mt-3 mb-1">
            2.2 Automatically Collected Data
          </h3>
          <p>
            We do not actively collect any personal data on our servers.
            However, our third-party advertising partner (Google AdSense) and
            our hosting provider (Vercel) may automatically collect certain
            technical information such as your IP address, browser type, and
            device type as part of their standard operations. Please refer to
            their respective privacy policies for details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            3. Cookies and Tracking Technologies
          </h2>
          <p>Our website uses cookies and similar technologies for:</p>
          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
            <li>
              <strong>Essential cookies:</strong> Required for the website to
              function properly (e.g., remembering your cookie consent choice).
            </li>
            <li>
              <strong>Advertising cookies:</strong> Used by our advertising
              partner (Google AdSense) to serve relevant ads and measure ad
              performance.
            </li>
          </ul>
          <p className="mt-2">
            You can manage your cookie preferences through your browser settings
            or by using the cookie consent banner when you first visit the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            4. Google AdSense
          </h2>
          <p>
            We use Google AdSense to display advertisements on our website.
            Google AdSense may use cookies and web beacons to collect data about
            your visits to this and other websites in order to provide targeted
            advertisements about goods and services that may interest you.
          </p>
          <p className="mt-2">
            Google&apos;s use of advertising cookies enables it and its partners
            to serve ads based on your visit to our site and/or other sites on
            the Internet. You may opt out of personalized advertising by
            visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <p className="mt-2">
            For more information about how Google uses your data, please visit{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            5. Third-Party Services
          </h2>
          <p>
            We use the following third-party services that may collect data as
            part of their operations:
          </p>
          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
            <li>
              <strong>Google AdSense</strong> — Advertising
            </li>
            <li>
              <strong>Vercel</strong> — Website hosting
            </li>
          </ul>
          <p className="mt-2">
            These services have their own privacy policies governing how they
            handle data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            6. Data Security
          </h2>
          <p>
            We are committed to protecting your information. Our website is
            served over HTTPS (SSL/TLS encryption) to ensure secure data
            transmission. Since your calculator data is stored locally on your
            device, we have no access to it and cannot be held responsible for
            its security on your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            7. Your Rights (GDPR / CCPA)
          </h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
            <li>
              <strong>Right to Access:</strong> Request information about the
              data we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> Request correction of
              inaccurate data.
            </li>
            <li>
              <strong>Right to Erasure:</strong> Request deletion of your data.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> Request limitation
              of data processing.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> Request a copy of your
              data in a structured format.
            </li>
            <li>
              <strong>Right to Object:</strong> Object to certain types of
              processing, including direct marketing.
            </li>
          </ul>
          <p className="mt-2">
            Since we do not collect personal data on our servers, most of these
            rights apply to data collected by third-party services (Google
            AdSense). You can manage your Google ad preferences at{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google Ads Settings
            </a>
            . For any other requests, please{" "}
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              contact us
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our website is not intended for children under the age of 18. We do
            not knowingly collect personal data from children. If you believe
            that a child has provided us with personal data, please contact us
            so we can take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            10. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please{" "}
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
