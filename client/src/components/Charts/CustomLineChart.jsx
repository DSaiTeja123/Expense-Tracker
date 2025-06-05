import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

function CustomLineChart({ data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-md shadow-md p-3">
          <p className="text-xs font-semibold text-purple-700 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-gray-800 font-medium">
              ${payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full mt-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl p-4 shadow-sm border border-gray-100">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#875CF5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#875CF5" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f9fafb" }} />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#875CF5"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: "#AB8DF8" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;
