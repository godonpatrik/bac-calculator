"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Drink, UserData } from "@/types";
import UserDataForm from "./UserDataForm";
import DrinkInput from "./DrinkInput";
import DrinkList from "./DrinkList";
import BACChart from "./BACChart";
import BACDisplay from "./BACDisplay";
import {
  calculateBAC,
  calculateSoberTime,
  getCurrentBAC,
} from "@/utils/bacCalculator";

export default function BACTracker() {
  const [userData, setUserData] = useState<UserData>({
    weight: 70,
    gender: "male",
    weightUnit: "kg",
    unitSystem: "metric",
  });
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [currentBAC, setCurrentBAC] = useState<number>(0);
  const [soberTime, setSoberTime] = useState<Date | null>(null);
  const [chartKey, setChartKey] = useState<number>(0);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUserData = localStorage.getItem("bacTrackerUserData");
    const savedDrinks = localStorage.getItem("bacTrackerDrinks");

    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }

    if (savedDrinks) {
      const parsedDrinks = JSON.parse(savedDrinks).map((drink: any) => ({
        ...drink,
        time: new Date(drink.time),
      }));
      setDrinks(parsedDrinks);
    }
  }, []);

  // Save to localStorage and recalculate BAC when data changes
  useEffect(() => {
    localStorage.setItem("bacTrackerUserData", JSON.stringify(userData));
    localStorage.setItem("bacTrackerDrinks", JSON.stringify(drinks));

    if (drinks.length > 0) {
      const newBAC = getCurrentBAC(drinks, userData);
      const newSoberTime = calculateSoberTime(drinks, userData);

      setCurrentBAC(newBAC);
      setSoberTime(newSoberTime);
      setChartKey((prev) => prev + 1); // Force chart re-render
    } else {
      setCurrentBAC(0);
      setSoberTime(null);
      setChartKey(0);
    }
  }, [userData, drinks]);

  // Update current BAC and sober time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      if (drinks.length > 0) {
        setCurrentBAC(getCurrentBAC(drinks, userData));
        setSoberTime(calculateSoberTime(drinks, userData));
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [drinks, userData]);

  const handleAddDrink = (drink: Drink) => {
    const newDrinks = [...drinks, drink];
    setDrinks(newDrinks);

    setTimeout(() => {
      const newBAC = getCurrentBAC(newDrinks, userData);
      const newSoberTime = calculateSoberTime(newDrinks, userData);

      setCurrentBAC(newBAC);
      setSoberTime(newSoberTime);
      setChartKey((prev) => prev + 1);
    }, 0);
  };

  const handleRemoveDrink = (id: string) => {
    const newDrinks = drinks.filter((drink) => drink.id !== id);
    setDrinks(newDrinks);

    setTimeout(() => {
      if (newDrinks.length > 0) {
        const newBAC = getCurrentBAC(newDrinks, userData);
        const newSoberTime = calculateSoberTime(newDrinks, userData);

        setCurrentBAC(newBAC);
        setSoberTime(newSoberTime);
      }
      setChartKey((prev) => prev + 1);
    }, 0);
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all drinks?")) {
      setDrinks([]);
    }
  };

  // Memoize BAC data calculation to ensure it updates when drinks or userData changes
  const bacData = useMemo(() => {
    return calculateBAC(drinks, userData);
  }, [drinks, userData, chartKey]); // Add chartKey as dependency

  return (
    <div className="space-y-4">
      {/* User Data Input and Add Drink - Side by Side on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Data Input */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold text-white mb-3">
            Your Information
          </h2>
          <UserDataForm userData={userData} onChange={setUserData} />
        </div>
        {/* Add Drink */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold text-white mb-3">Add Drink</h2>
          <DrinkInput onAddDrink={handleAddDrink} userData={userData} />
        </div>
      </div>

      {/* Current BAC and Your Drinks - Side by Side on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Current BAC Display */}
        <BACDisplay
          currentBAC={currentBAC}
          soberTime={soberTime}
          hasDrinks={drinks.length > 0}
        />

        {/* Drink List */}
        {drinks.length > 0 ? (
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-white">Your Drinks</h2>
              <button
                onClick={handleClearAll}
                className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear All
              </button>
            </div>
            <DrinkList drinks={drinks} onRemoveDrink={handleRemoveDrink} />
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-base">No drinks added yet</p>
            </div>
          </div>
        )}
      </div>

      {/* BAC Chart */}
      {drinks.length > 0 && bacData.length > 0 && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold text-white mb-3">
            BAC Over Time
            <span className="text-xs text-gray-400 ml-2">
              ({drinks.length} drink{drinks.length !== 1 ? "s" : ""}) The chart
              shows your estimated BAC over time. Red line indicates legal
              driving limit (0.08%).
            </span>
          </h2>
          <BACChart key={`chart-${chartKey}`} data={bacData} />
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-3 text-yellow-100">
        <p className="text-xs">
          <strong>Disclaimer:</strong> This calculator provides estimates only
          and should not be used to determine fitness to drive or perform any
          other task. Many factors affect blood alcohol level and metabolism.
          Always drink responsibly and never drink and drive.
        </p>
      </div>
    </div>
  );
}
