import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function CustomBarChart({ data }) {
  // Controls max and min thickness of bars
  const maxBarSize = 70;
  const minBarSize = 30;
  const barCount = data.length;

  // Calculate barSize based on number of bars, with limits
  const barSize =
    barCount <= 10
      ? maxBarSize
      : Math.max(minBarSize, Math.floor(maxBarSize * (10 / barCount)));

  // Alternate colors for bars
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbefb";
  };

  // Custom tooltip content
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-sm font-medium text-purple-800 mb-1">
            {payload[0].payload.category || payload[0].payload.month}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">
              ${payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6 rounded-xl p-4 shadow-sm border border-gray-100">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={barSize}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#4B5563" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#4B5563" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f3f4f6" }} />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart;
