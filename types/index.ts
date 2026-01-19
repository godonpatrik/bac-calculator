export interface UserData {
  weight: number;
  gender: "male" | "female";
  weightUnit: "kg" | "lbs";
  unitSystem: "metric" | "imperial";
}

export interface Drink {
  id: string;
  name: string;
  alcoholPercentage: number;
  volume: number; // in ml
  time: Date;
}

export interface PredefinedDrink {
  name: string;
  alcoholPercentage: number;
  volume: number;
}

export interface BACDataPoint {
  time: Date;
  bac: number;
  timeLabel: string;
}
