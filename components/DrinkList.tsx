'use client';

import React from 'react';
import { Drink } from '@/types';
import { format } from 'date-fns';

interface DrinkListProps {
  drinks: Drink[];
  onRemoveDrink: (id: string) => void;
}

export default function DrinkList({ drinks, onRemoveDrink }: DrinkListProps) {
  const sortedDrinks = [...drinks].sort((a, b) => b.time.getTime() - a.time.getTime());

  return (
    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
      {sortedDrinks.map((drink) => (
        <div
          key={drink.id}
          className="flex items-center justify-between bg-gray-700 rounded-lg p-3 hover:bg-gray-650 transition-colors"
        >
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-white truncate">{drink.name}</h3>
            <div className="flex flex-wrap gap-2 mt-0.5 text-xs text-gray-300">
              <span>{drink.alcoholPercentage}% ABV</span>
              <span>•</span>
              <span>{drink.volume}ml</span>
              <span>•</span>
              <span>{format(drink.time, 'MMM d, h:mm a')}</span>
            </div>
          </div>
          <button
            onClick={() => onRemoveDrink(drink.id)}
            className="ml-3 px-3 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 flex-shrink-0"
            aria-label="Remove drink"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

