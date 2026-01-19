"use client";

import React, { useState } from "react";
import { Drink, UserData } from "@/types";
import { METRIC_DRINKS, IMPERIAL_DRINKS } from "@/utils/predefinedDrinks";
import { format } from "date-fns";

interface DrinkInputProps {
  onAddDrink: (drink: Drink) => void;
  userData: UserData;
}

export default function DrinkInput({ onAddDrink, userData }: DrinkInputProps) {
  const [drinkType, setDrinkType] = useState<"predefined" | "custom">(
    "predefined",
  );
  const [selectedPredefined, setSelectedPredefined] = useState(0);
  const [customName, setCustomName] = useState("");
  const [alcoholPercentage, setAlcoholPercentage] = useState(5);
  const [volume, setVolume] = useState(355);
  const [time, setTime] = useState(format(new Date(), "yyyy-MM-dd'T'HH:mm"));

  // Select drinks based on unit system
  const PREDEFINED_DRINKS =
    userData.unitSystem === "metric" ? METRIC_DRINKS : IMPERIAL_DRINKS;

  const handleSetTime = (dateTime: string) => {
    if (new Date(dateTime) > new Date()) {
      alert("Time cannot be in the future.");
      return;
    }
    setTime(dateTime);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const drinkData =
      drinkType === "predefined"
        ? PREDEFINED_DRINKS[selectedPredefined]
        : { name: customName, alcoholPercentage, volume };

    const newDrink: Drink = {
      id: `${Date.now()}-${Math.random()}`,
      name: drinkData.name,
      alcoholPercentage: drinkData.alcoholPercentage,
      volume: drinkData.volume,
      time: new Date(time),
    };

    onAddDrink(newDrink);

    // Reset time to current
    setTime(format(new Date(), "yyyy-MM-dd'T'HH:mm"));

    // Reset custom fields if custom
    if (drinkType === "custom") {
      setCustomName("");
      setAlcoholPercentage(5);
      setVolume(355);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Drink Type Toggle */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setDrinkType("predefined")}
          className={`flex-1 py-1.5 px-3 text-sm rounded-lg font-medium transition-colors ${
            drinkType === "predefined"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Predefined
        </button>
        <button
          type="button"
          onClick={() => setDrinkType("custom")}
          className={`flex-1 py-1.5 px-3 text-sm rounded-lg font-medium transition-colors ${
            drinkType === "custom"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Custom
        </button>
      </div>

      {/* Predefined Drink Selection */}
      {drinkType === "predefined" ? (
        <div>
          <label
            htmlFor="predefined-drink"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Select Drink
          </label>
          <select
            id="predefined-drink"
            value={selectedPredefined}
            onChange={(e) => setSelectedPredefined(parseInt(e.target.value))}
            className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {PREDEFINED_DRINKS.map((drink, index) => (
              <option key={index} value={index}>
                {drink.name} - {drink.alcoholPercentage}% - {drink.volume}ml
              </option>
            ))}
          </select>
        </div>
      ) : (
        /* Custom Drink Inputs */
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label
              htmlFor="custom-name"
              className="block text-xs font-medium text-gray-300 mb-1.5"
            >
              Name
            </label>
            <input
              type="text"
              id="custom-name"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="e.g., Cocktail"
              required
              className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="alcohol-percentage"
              className="block text-xs font-medium text-gray-300 mb-1.5"
            >
              ABV %
            </label>
            <input
              type="number"
              id="alcohol-percentage"
              min="0"
              max="100"
              step="0.1"
              value={alcoholPercentage}
              onChange={(e) =>
                setAlcoholPercentage(parseFloat(e.target.value) || 0)
              }
              required
              className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="volume"
              className="block text-xs font-medium text-gray-300 mb-1.5"
            >
              ml
            </label>
            <input
              type="number"
              id="volume"
              min="1"
              step="1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value) || 0)}
              required
              className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Time Input */}
      <div>
        <label
          htmlFor="time"
          className="block text-xs font-medium text-gray-300 mb-1.5"
        >
          Time Consumed
        </label>
        <input
          type="datetime-local"
          id="time"
          value={time}
          onChange={(e) => handleSetTime(e.target.value)}
          required
          className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 text-sm bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add Drink
      </button>
    </form>
  );
}
