'use client';

import React from 'react';
import { format } from 'date-fns';

interface BACDisplayProps {
  currentBAC: number;
  soberTime: Date | null;
  hasDrinks: boolean;
}

export default function BACDisplay({ currentBAC, soberTime, hasDrinks }: BACDisplayProps) {
  const getBACLevel = (bac: number) => {
    if (bac === 0) return { level: 'Sober', color: 'text-green-400', bgColor: 'bg-green-900/30', borderColor: 'border-green-700' };
    if (bac < 0.02) return { level: 'Minimal', color: 'text-green-400', bgColor: 'bg-green-900/30', borderColor: 'border-green-700' };
    if (bac < 0.05) return { level: 'Mild', color: 'text-yellow-400', bgColor: 'bg-yellow-900/30', borderColor: 'border-yellow-700' };
    if (bac < 0.08) return { level: 'Moderate', color: 'text-orange-400', bgColor: 'bg-orange-900/30', borderColor: 'border-orange-700' };
    if (bac < 0.15) return { level: 'High', color: 'text-red-400', bgColor: 'bg-red-900/30', borderColor: 'border-red-700' };
    return { level: 'Very High', color: 'text-red-600', bgColor: 'bg-red-900/50', borderColor: 'border-red-600' };
  };

  const bacLevel = getBACLevel(currentBAC);

  if (!hasDrinks) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-base">Add drinks to see your BAC</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-lg shadow-lg p-4 border-2 ${bacLevel.bgColor} ${bacLevel.borderColor} h-full`}>
      <div className="text-center flex flex-col justify-center h-full">
        <h2 className="text-xl font-semibold text-white mb-3">Current BAC</h2>
        <div className={`text-5xl font-bold mb-1 ${bacLevel.color}`}>
          {(currentBAC).toFixed(3)}%
        </div>
        <div className={`text-xl font-semibold mb-3 ${bacLevel.color}`}>
          {bacLevel.level}
        </div>

        {soberTime && currentBAC > 0.001 ? (
          <div className="mt-3 pt-3 border-t border-gray-600">
            <p className="text-gray-300 mb-0.5 text-sm">Estimated sober time:</p>
            <p className="text-base font-semibold text-white">
              {format(soberTime, 'MMM d, h:mm a')}
            </p>
          </div>
        ) : currentBAC <= 0.001 ? (
          <div className="mt-3 pt-3 border-t border-gray-600">
            <p className="text-green-400 text-base font-semibold">You are sober!</p>
          </div>
        ) : null}

        {currentBAC >= 0.08 && (
          <div className="mt-3 p-2 bg-red-900/50 border border-red-700 rounded-lg">
            <p className="text-red-200 font-semibold text-xs">
              ⚠️ Over the legal limit
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

