# Ad Integration Guide

This guide explains how to enable and configure advertisements on your BAC Tracker application.

## Overview

The application supports Google AdSense ads with three strategic placements:
1. **Top Banner Ad** - Horizontal ad below the header
2. **Middle Content Ad** - Rectangle ad between the tracker and footer
3. **Footer Ad** - Horizontal ad at the bottom of the page

## Setup Instructions

### 1. Get Google AdSense Account

If you don't have one already:
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up for an account
3. Add your website and wait for approval

### 2. Get Your AdSense Client ID

1. Log into your AdSense account
2. Go to **Account** → **Account information**
3. Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)

### 3. Create Ad Units

1. In AdSense, go to **Ads** → **Overview** → **By ad unit**
2. Click **Create new ad unit**
3. Create three ad units:
   - **Banner Ad**: Choose "Display ads" → "Horizontal" or "Responsive"
   - **Content Ad**: Choose "Display ads" → "Square and rectangle" or "Responsive"
   - **Footer Ad**: Choose "Display ads" → "Horizontal" or "Responsive"
4. Copy the ad slot IDs for each unit (format: `XXXXXXXXXX`)

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your AdSense credentials:
   ```env
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
   NEXT_PUBLIC_AD_SLOT_BANNER=1234567890
   NEXT_PUBLIC_AD_SLOT_CONTENT=0987654321
   NEXT_PUBLIC_AD_SLOT_FOOTER=1122334455
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Testing Ads

### Development Mode
- In development, if environment variables are not set, you'll see gray placeholder boxes labeled "Ad Placeholder"
- This helps you visualize where ads will appear

### Production Mode
- Ads will only show if the environment variables are properly configured
- If not configured, no placeholder will be shown (clean experience)
- It may take some time for Google AdSense to approve your ads and start serving them

## Ad Placements

### Top Banner Ad
```jsx
<AdUnit
  slot={process.env.NEXT_PUBLIC_AD_SLOT_BANNER}
  client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
  format="horizontal"
  className="mb-6"
/>
```

### Middle Content Ad
```jsx
<AdUnit
  slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT}
  client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
  format="rectangle"
  className="my-6"
/>
```

### Footer Ad
```jsx
<AdUnit
  slot={process.env.NEXT_PUBLIC_AD_SLOT_FOOTER}
  client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
  format="horizontal"
  className="mt-4"
/>
```

## Customizing Ad Placements

You can customize ad placements by editing `app/page.tsx`:

1. **Remove an ad**: Simply delete or comment out the `<AdUnit />` component
2. **Add more ads**: Copy an existing `<AdUnit />` component and place it where desired
3. **Change ad format**: Modify the `format` prop:
   - `"auto"` - Responsive (recommended)
   - `"horizontal"` - Wide banner
   - `"vertical"` - Tall banner
   - `"rectangle"` - Square/rectangle

## AdUnit Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `client` | string | - | Your AdSense client ID |
| `slot` | string | - | The ad unit slot ID |
| `format` | string | `"auto"` | Ad format: "auto", "horizontal", "vertical", "rectangle" |
| `responsive` | boolean | `true` | Enable responsive ads |
| `className` | string | `""` | Custom CSS classes for styling |

## Troubleshooting

### Ads not showing?

1. **Check environment variables**: Make sure `.env.local` exists and has correct values
2. **Restart dev server**: Environment variables require a server restart
3. **AdSense approval**: New sites may take 1-2 weeks for AdSense approval
4. **Browser ad blocker**: Disable ad blockers for testing
5. **Console errors**: Check browser console for any AdSense errors

### Ads showing blank space?

- This is normal during initial setup
- AdSense needs time to start serving ads to new sites
- Make sure your site is publicly accessible (not localhost) for AdSense to crawl

### Want to use a different ad network?

The `AdUnit` component can be modified to support other ad networks:
1. Edit `components/AdUnit.tsx`
2. Add support for your ad network's script and ad tags
3. Update the component props as needed

## Best Practices

1. **Don't overdo it**: Too many ads can harm user experience
2. **Mobile-friendly**: Use responsive ad formats
3. **Performance**: Ads are loaded asynchronously to not block page rendering
4. **Privacy**: Ads comply with user privacy settings
5. **AdSense policies**: Follow [Google AdSense policies](https://support.google.com/adsense/answer/48182)

## Support

For AdSense-specific issues, visit:
- [Google AdSense Help Center](https://support.google.com/adsense)
- [AdSense Community Forum](https://support.google.com/adsense/community)

For application-specific issues, check the main README.md file.
