import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — BAC Calculator",
  description:
    "Get in touch with the BAC Calculator team. Questions, feedback, or concerns about our blood alcohol content calculator.",
  alternates: {
    canonical: "https://alcoholtrackr.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm mb-6 inline-block"
      >
        ← Back to Calculator
      </Link>

      <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

      <div className="space-y-6">
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Get in Touch
          </h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              We&apos;d love to hear from you! Whether you have a question about
              the BAC calculator, feedback on our tool, or a concern about your
              privacy, feel free to reach out.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Send Us a Message
          </h2>
          <form
            action="https://formsubmit.co/gpatrik92@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* Honeypot for spam protection */}
            <input type="text" name="_honey" className="hidden" />
            {/* Disable captcha page */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Redirect back after submission */}
            <input
              type="hidden"
              name="_next"
              value="https://alcoholtrackr.com/contact?submitted=true"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Bug Report</option>
                <option value="privacy">Privacy Concern</option>
                <option value="advertising">Advertising</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <div className="text-gray-300 text-sm space-y-3">
            <p>
              Before reaching out, you might find your answer in our{" "}
              <Link
                href="/faq"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                FAQ section
              </Link>{" "}
              on the calculator page.
            </p>
            <p>
              For privacy-related questions, please review our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
