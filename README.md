# Blood Alcohol Content (BAC) Tracker

A Next.js application that helps users track their blood alcohol content over time based on drinks consumed.

## Features

- **User Information Input**: Enter your weight (kg or lbs) and gender for accurate BAC calculations
- **Predefined Drinks**: Quick selection from common drinks like beer, wine, shots, and cocktails
- **Custom Drinks**: Add your own drinks with custom alcohol percentage and volume
- **Time-Based Tracking**: Add drinks at specific times (default is current time)
- **Real-Time BAC Display**: See your current BAC level with color-coded warnings
- **BAC Chart**: Visual representation of BAC levels over time showing when alcohol will be eliminated from your body
- **Legal Limit Indicator**: Chart shows the 0.08% legal driving limit
- **Sober Time Estimate**: Shows when you'll be sober again
- **Dark Theme**: Comfortable dark-ish theme for the interface
- **Advertisement Support**: Optional Google AdSense integration for monetization

## Technology Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first styling
- **Recharts**: Interactive charts
- **date-fns**: Date manipulation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd D:\projects\bac-new
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Optional: Configure Advertisements

To enable Google AdSense ads on your site, see the detailed guide in [AD_SETUP.md](./AD_SETUP.md).

Quick setup:
1. Copy `.env.example` to `.env.local`
2. Add your Google AdSense client ID and ad slot IDs
3. Restart the development server

### Build for Production

```bash
npm run build
npm start
```

## How It Works

The application uses the **Widmark formula** to calculate Blood Alcohol Content:

```
BAC = (Alcohol consumed in grams / (Body weight in grams × Body water constant)) × 100
```

- **Body water constant**: 0.68 for males, 0.55 for females
- **Metabolism rate**: ~0.015% BAC per hour

The app tracks multiple drinks and calculates the combined BAC over time, showing when alcohol will be fully metabolized.

## Usage

1. **Enter Your Information**: Input your weight and select your gender
2. **Add Drinks**: 
   - Select from predefined drinks or create custom ones
   - Specify when you consumed each drink
3. **View Your BAC**: 
   - See current BAC level with warnings
   - Check the chart to see BAC over time
   - Find out when you'll be sober
4. **Manage Drinks**: Remove individual drinks or clear all at once

## Important Disclaimer

⚠️ **This calculator provides estimates only and should NOT be used to determine fitness to drive or perform any other task.** 

Many factors affect blood alcohol level including:
- Metabolism rate
- Food consumption
- Medications
- Health conditions
- Individual variations

**Always drink responsibly and NEVER drink and drive.**

## BAC Level Reference

- **0.00-0.02%**: Minimal effects
- **0.02-0.05%**: Mild impairment
- **0.05-0.08%**: Moderate impairment
- **0.08%+**: Legally intoxicated in most countries
- **0.15%+**: Severe impairment

## License

This is a personal project for educational purposes.

## Contributing

This is a demonstration project, but feel free to fork and modify it for your own use.

