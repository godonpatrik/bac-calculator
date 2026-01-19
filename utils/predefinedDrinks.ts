import { PredefinedDrink } from "@/types";

// Metric (European) measurements
export const METRIC_DRINKS: PredefinedDrink[] = [
  { name: "Beer", alcoholPercentage: 5, volume: 500 },
  { name: "Beer", alcoholPercentage: 5, volume: 330 },
  { name: "Light Beer", alcoholPercentage: 4.2, volume: 500 },
  { name: "IPA", alcoholPercentage: 7, volume: 330 },
  { name: "Wine", alcoholPercentage: 12, volume: 100 },
  { name: "Champagne", alcoholPercentage: 12, volume: 100 },
  { name: "Shot", alcoholPercentage: 40, volume: 40 },
  { name: "Vodka Shot", alcoholPercentage: 40, volume: 40 },
  { name: "Whiskey Shot", alcoholPercentage: 40, volume: 40 },
  { name: "Tequila Shot", alcoholPercentage: 40, volume: 40 },
  { name: "Rum Shot", alcoholPercentage: 40, volume: 40 },
  { name: "Gin & Tonic", alcoholPercentage: 10, volume: 250 },
  { name: "Margarita", alcoholPercentage: 15, volume: 200 },
  { name: "Mojito", alcoholPercentage: 12, volume: 250 },
  { name: "Long Island Iced Tea", alcoholPercentage: 22, volume: 250 },
  { name: "Cosmopolitan", alcoholPercentage: 20, volume: 120 },
];

// Imperial (US) measurements
export const IMPERIAL_DRINKS: PredefinedDrink[] = [
  { name: "Beer (12 oz)", alcoholPercentage: 5, volume: 355 },
  { name: "Light Beer (12 oz)", alcoholPercentage: 4.2, volume: 355 },
  { name: "IPA (12 oz)", alcoholPercentage: 7, volume: 355 },
  { name: "Wine (5 oz)", alcoholPercentage: 12, volume: 148 },
  { name: "Champagne (5 oz)", alcoholPercentage: 12, volume: 148 },
  { name: "Shot (1.5 oz)", alcoholPercentage: 40, volume: 44 },
  { name: "Vodka Shot (1.5 oz)", alcoholPercentage: 40, volume: 44 },
  { name: "Whiskey Shot (1.5 oz)", alcoholPercentage: 40, volume: 44 },
  { name: "Tequila Shot (1.5 oz)", alcoholPercentage: 40, volume: 44 },
  { name: "Rum Shot (1.5 oz)", alcoholPercentage: 40, volume: 44 },
  { name: "Gin & Tonic (8 oz)", alcoholPercentage: 10, volume: 240 },
  { name: "Margarita (6 oz)", alcoholPercentage: 15, volume: 180 },
  { name: "Mojito (8 oz)", alcoholPercentage: 12, volume: 240 },
  { name: "Long Island Iced Tea (8 oz)", alcoholPercentage: 22, volume: 240 },
  { name: "Cosmopolitan (4 oz)", alcoholPercentage: 20, volume: 120 },
];
