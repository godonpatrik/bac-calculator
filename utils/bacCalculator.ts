import { BACDataPoint, Drink, UserData } from "@/types";

// Constants based on medical research
const MALE_BODY_WATER_CONSTANT = 0.68;
const FEMALE_BODY_WATER_CONSTANT = 0.55;
const ALCOHOL_METABOLISM_RATE = 0.015; // g/dL per hour

const ALCOHOL_DENSITY = 0.789; // g/ml

// Validation constants
const MAX_WEIGHT_KG = 500; // ~1100 lbs
const MAX_WEIGHT_LBS = 1100;
const MIN_ALCOHOL_PERCENTAGE = 0;
const MAX_ALCOHOL_PERCENTAGE = 100;
const MIN_VOLUME_ML = 0;
const MAX_VOLUME_ML = 10000; // 10 liters (reasonable max)

/**
 * Validate user data
 */
function validateUserData(userData: UserData): void {
  if (userData.weightUnit === "kg") {
    if (userData.weight > MAX_WEIGHT_KG) {
      throw new Error(`Weight must not exceed ${MAX_WEIGHT_KG} kg`);
    }
  } else if (userData.weightUnit === "lbs") {
    if (userData.weight > MAX_WEIGHT_LBS) {
      throw new Error(`Weight must not exceed ${MAX_WEIGHT_LBS} lbs`);
    }
  } else {
    throw new Error("Invalid weight unit. Must be 'kg' or 'lbs'");
  }

  if (userData.gender !== "male" && userData.gender !== "female") {
    throw new Error("Gender must be 'male' or 'female'");
  }
}

/**
 * Validate drink data
 */
function validateDrink(drink: Drink, index?: number): void {
  const drinkLabel = index !== undefined ? `Drink ${index + 1}` : "Drink";

  if (drink.volume < MIN_VOLUME_ML) {
    throw new Error(
      `${drinkLabel}: Volume must be at least ${MIN_VOLUME_ML} ml`,
    );
  }
  if (drink.volume > MAX_VOLUME_ML) {
    throw new Error(
      `${drinkLabel}: Volume must not exceed ${MAX_VOLUME_ML} ml`,
    );
  }

  if (drink.alcoholPercentage < MIN_ALCOHOL_PERCENTAGE) {
    throw new Error(
      `${drinkLabel}: Alcohol percentage must be at least ${MIN_ALCOHOL_PERCENTAGE}%`,
    );
  }
  if (drink.alcoholPercentage > MAX_ALCOHOL_PERCENTAGE) {
    throw new Error(
      `${drinkLabel}: Alcohol percentage must not exceed ${MAX_ALCOHOL_PERCENTAGE}%`,
    );
  }

  if (isNaN(drink.time.getTime())) {
    throw new Error(`${drinkLabel}: Invalid date`);
  }
}

/**
 * Validate drinks array
 */
function validateDrinks(drinks: Drink[]): void {
  if (!Array.isArray(drinks)) {
    throw new Error("Drinks must be an array");
  }

  drinks.forEach((drink, index) => {
    validateDrink(drink, index);
  });
}

/**
 * Calculate BAC over time
 * All alcohol from all drinks accumulates in the bloodstream and depletes together
 */
export function calculateBAC(
  drinks: Drink[],
  userData: UserData,
): BACDataPoint[] {
  // Validate inputs
  validateUserData(userData);
  validateDrinks(drinks);

  if (drinks.length === 0) {
    return [];
  }

  const sortedDrinks = [...drinks].sort(
    (a, b) => a.time.getTime() - b.time.getTime(),
  );
  const firstDrinkTime = sortedDrinks[0].time;

  const weightInKg = getWeightInKg(userData);

  const bodyWaterConstant = getBodyWaterConstant(userData.gender);

  const dataPoints: BACDataPoint[] = [];
  const intervalMinutes = 10;

  // Calculate up to 24 hours from first drink
  let currentTime = new Date(firstDrinkTime);
  const maxTime = new Date(firstDrinkTime.getTime() + 24 * 60 * 60 * 1000);

  while (currentTime <= maxTime) {
    const hoursSinceFirstDrink =
      (currentTime.getTime() - firstDrinkTime.getTime()) / (1000 * 60 * 60);

    // Calculate total alcohol consumed up to this point
    let totalAlcoholConsumed = 0;
    for (const drink of sortedDrinks) {
      if (drink.time <= currentTime) {
        const alcoholGrams = calculateAlcoholGrams(drink);
        totalAlcoholConsumed += alcoholGrams;
      }
    }

    // Calculate BAC from total alcohol, minus metabolism from first drink
    const peakBAC =
      totalAlcoholConsumed / (weightInKg * bodyWaterConstant * 10);
    const metabolizedBAC = ALCOHOL_METABOLISM_RATE * hoursSinceFirstDrink;
    const currentBAC = Math.max(0, peakBAC - metabolizedBAC);

    dataPoints.push({
      time: new Date(currentTime),
      bac: currentBAC,
      timeLabel: currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    });

    // Stop if BAC has been zero for 1 hour
    if (currentBAC < 0.0001) {
      const recentPoints = dataPoints.slice(-6);
      if (
        recentPoints.length >= 6 &&
        recentPoints.every((dp) => dp.bac < 0.0001)
      ) {
        break;
      }
    }

    currentTime = new Date(currentTime.getTime() + intervalMinutes * 60 * 1000);
  }

  return dataPoints;
}

/**
 * Calculate when you'll be sober
 */
export function calculateSoberTime(
  drinks: Drink[],
  userData: UserData,
): Date | null {
  // Validate inputs
  validateUserData(userData);
  validateDrinks(drinks);

  if (drinks.length === 0) {
    return null;
  }

  const sortedDrinks = [...drinks].sort(
    (a, b) => a.time.getTime() - b.time.getTime(),
  );
  const firstDrinkTime = sortedDrinks[0].time;

  const weightInKg = getWeightInKg(userData);

  const bodyWaterConstant = getBodyWaterConstant(userData.gender);

  // Calculate total alcohol
  let totalAlcohol = 0;
  for (const drink of drinks) {
    const alcoholGrams = calculateAlcoholGrams(drink);
    totalAlcohol += alcoholGrams;
  }

  // Calculate total peak BAC
  const totalPeakBAC = totalAlcohol / (weightInKg * bodyWaterConstant * 10);

  // Time to metabolize all alcohol from first drink
  const hoursToSober = totalPeakBAC / ALCOHOL_METABOLISM_RATE;

  return new Date(firstDrinkTime.getTime() + hoursToSober * 60 * 60 * 1000);
}

/**
 * Get current BAC
 */
export function getCurrentBAC(drinks: Drink[], userData: UserData): number {
  // Validate inputs
  validateUserData(userData);
  validateDrinks(drinks);

  if (drinks.length === 0) {
    return 0;
  }

  const sortedDrinks = [...drinks].sort(
    (a, b) => a.time.getTime() - b.time.getTime(),
  );
  const firstDrinkTime = sortedDrinks[0].time;
  const now = new Date();

  const hoursSinceFirstDrink =
    (now.getTime() - firstDrinkTime.getTime()) / (1000 * 60 * 60);

  const weightInKg = getWeightInKg(userData);

  const bodyWaterConstant = getBodyWaterConstant(userData.gender);

  // Calculate total alcohol consumed so far
  let totalAlcoholConsumed = 0;
  for (const drink of sortedDrinks) {
    if (drink.time <= now) {
      const alcoholGrams = calculateAlcoholGrams(drink);
      totalAlcoholConsumed += alcoholGrams;
    }
  }

  // Calculate BAC from total alcohol, minus metabolism
  const peakBAC = totalAlcoholConsumed / (weightInKg * bodyWaterConstant * 10);
  const metabolizedBAC = ALCOHOL_METABOLISM_RATE * hoursSinceFirstDrink;

  return Math.max(0, peakBAC - metabolizedBAC);
}

function getWeightInKg(userData: UserData): number {
  return userData.weightUnit === "lbs"
    ? userData.weight * 0.453592
    : userData.weight;
}

function getBodyWaterConstant(gender: UserData["gender"]): number {
  return gender === "male"
    ? MALE_BODY_WATER_CONSTANT
    : FEMALE_BODY_WATER_CONSTANT;
}

function calculateAlcoholGrams(drink: Drink): number {
  return ((drink.volume * drink.alcoholPercentage) / 100) * ALCOHOL_DENSITY;
}
