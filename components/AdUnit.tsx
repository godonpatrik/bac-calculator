"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  /**
   * Ad slot ID from your ad provider (e.g., Google AdSense slot ID)
   */
  slot?: string;
  /**
   * Format of the ad unit
   */
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  /**
   * Enable responsive ads
   */
  responsive?: boolean;
  /**
   * Custom class name for styling
   */
  className?: string;
  /**
   * Ad client ID (e.g., ca-pub-XXXXXXXXXXXXXXXX for Google AdSense)
   */
  client?: string;
}

/**
 * AdUnit component for displaying advertisements
 * Supports Google AdSense and can be extended for other ad networks
 */
export default function AdUnit({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  client,
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Push ad to adsbygoogle array when component mounts
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("Ad loading error:", error);
    }
  }, []);

  // If no client or slot provided, show placeholder in development
  if (!client || !slot) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div
          className={`bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-4 text-center ${className}`}
        >
          <p className="text-gray-400 text-sm">
            Ad Placeholder
            <br />
            <span className="text-xs">
              Configure client and slot props to show ads
            </span>
          </p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle: Array<{}>;
  }
}
