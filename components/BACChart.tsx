"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { BACDataPoint } from "@/types";
import { format } from "date-fns";

interface BACChartProps {
  data: BACDataPoint[];
}

export default function BACChart({ data }: BACChartProps) {
  const chartData = data.map((point) => ({
    time: format(point.time, "MMM d HH:mm"),
    bac: parseFloat(point.bac.toFixed(3)), // Convert to percentage
    fullTime: format(point.time, "MMM d, yyyy h:mm a"),
  }));

  // Find current time index
  const now = new Date();
  const currentIndex = data.findIndex((point, index) => {
    if (index === data.length - 1) return false;
    return point.time <= now && data[index + 1].time > now;
  });

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 20, left: 10, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="time"
            stroke="#9CA3AF"
            angle={-45}
            textAnchor="end"
            height={70}
            interval="preserveStartEnd"
            tick={{ fill: "#9CA3AF", fontSize: 11 }}
          />
          <YAxis
            stroke="#9CA3AF"
            label={{
              value: "BAC (%)",
              angle: -90,
              position: "insideLeft",
              fill: "#9CA3AF",
              fontSize: 11,
            }}
            tick={{ fill: "#9CA3AF", fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#F3F4F6",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#9CA3AF", fontSize: "11px" }}
            formatter={(value: number | undefined) =>
              value !== undefined ? [`${value.toFixed(3)}%`, "BAC"] : ["", ""]
            }
          />

          {/* Legal limit reference line (0.08%) */}
          <ReferenceLine
            y={0.08}
            stroke="#EF4444"
            strokeDasharray="5 5"
            label={{
              value: "Legal Limit",
              fill: "#EF4444",
              position: "right",
              fontSize: 11,
            }}
          />

          {/* Current time reference line */}
          {currentIndex >= 0 && (
            <ReferenceLine
              x={chartData[currentIndex].time}
              stroke="#3B82F6"
              strokeDasharray="3 3"
              label={{
                value: "Now",
                fill: "#3B82F6",
                position: "top",
                fontSize: 11,
              }}
            />
          )}

          <Line
            type="monotone"
            dataKey="bac"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ fill: "#10B981", r: 2 }}
            activeDot={{ r: 5 }}
            animationDuration={300}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
