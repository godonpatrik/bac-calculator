"use client";

import React from "react";
import { UserData } from "@/types";

interface UserDataFormProps {
  userData: UserData;
  onChange: (data: UserData) => void;
}

export default function UserDataForm({
  userData,
  onChange,
}: UserDataFormProps) {
  const handleUnitSystemChange = (system: "metric" | "imperial") => {
    let convertedWeight = userData.weight;

    // Convert weight if switching systems
    if (system === "imperial" && userData.weightUnit === "kg") {
      // Convert kg to lbs (1 kg = 2.20462 lbs)
      convertedWeight = Math.round(userData.weight * 2.20462 * 10) / 10;
    } else if (system === "metric" && userData.weightUnit === "lbs") {
      // Convert lbs to kg (1 lbs = 0.453592 kg)
      convertedWeight = Math.round(userData.weight * 0.453592 * 10) / 10;
    }

    onChange({
      ...userData,
      weight: convertedWeight,
      unitSystem: system,
      weightUnit: system === "metric" ? "kg" : "lbs",
    });
  };

  return (
    <div className="space-y-3">
      {/* Unit System Toggle */}
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1.5">
          Unit System
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleUnitSystemChange("metric")}
            className={`flex-1 py-1.5 px-3 text-sm rounded-lg font-medium transition-colors ${
              userData.unitSystem === "metric"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Metric
          </button>
          <button
            type="button"
            onClick={() => handleUnitSystemChange("imperial")}
            className={`flex-1 py-1.5 px-3 text-sm rounded-lg font-medium transition-colors ${
              userData.unitSystem === "imperial"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Imperial
          </button>
        </div>
      </div>

      {/* Weight Input */}
      <div>
        <label
          htmlFor="weight"
          className="block text-xs font-medium text-gray-300 mb-1.5"
        >
          Weight
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            id="weight"
            min="1"
            step="0.1"
            value={userData.weight}
            onChange={(e) =>
              onChange({ ...userData, weight: parseFloat(e.target.value) || 0 })
            }
            className="flex-1 px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={userData.weightUnit}
            onChange={(e) =>
              onChange({
                ...userData,
                weightUnit: e.target.value as "kg" | "lbs",
              })
            }
            className="px-2 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
      </div>

      {/* Gender Selection */}
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1.5">
          Gender
        </label>
        <div className="flex gap-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={userData.gender === "male"}
              onChange={(e) =>
                onChange({
                  ...userData,
                  gender: e.target.value as "male" | "female",
                })
              }
              className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-white">Male</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={userData.gender === "female"}
              onChange={(e) =>
                onChange({
                  ...userData,
                  gender: e.target.value as "male" | "female",
                })
              }
              className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-white">Female</span>
          </label>
        </div>
      </div>
    </div>
  );
}
