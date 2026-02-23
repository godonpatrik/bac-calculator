"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function updateConsent(granted: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: "denied",
    });
  }
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    } else if (consent === "accepted") {
      updateConsent(true);
    }
    // if declined, the default "denied" from the initial gtag config remains
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    updateConsent(true);
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    updateConsent(false);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-800 border-t border-gray-700 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-300 text-sm text-center sm:text-left">
          This site uses cookies for advertising via Google AdSense.{" "}
          <Link
            href="/privacy-policy"
            className="underline text-blue-400 hover:text-blue-300"
          >
            Learn more
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
