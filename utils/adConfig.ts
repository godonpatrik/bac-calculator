/**
 * Ad Configuration
 *
 * Centralized configuration for advertisement placements
 * Update these values in your .env.local file
 */

export const adConfig = {
  // Google AdSense client ID
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT,

  // Ad slot IDs for different placements
  slots: {
    banner: process.env.NEXT_PUBLIC_AD_SLOT_BANNER,
    content: process.env.NEXT_PUBLIC_AD_SLOT_CONTENT,
    footer: process.env.NEXT_PUBLIC_AD_SLOT_FOOTER,
    leftSide: process.env.NEXT_PUBLIC_AD_SLOT_LEFTSIDE,
    rightSide: process.env.NEXT_PUBLIC_AD_SLOT_RIGHTSIDE,
  },

  // Check if ads are enabled
  enabled: !!process.env.NEXT_PUBLIC_ADSENSE_CLIENT,
};

/**
 * Helper function to check if a specific ad slot is configured
 */
export function isAdSlotConfigured(
  slotName: keyof typeof adConfig.slots,
): boolean {
  return adConfig.enabled && !!adConfig.slots[slotName];
}
