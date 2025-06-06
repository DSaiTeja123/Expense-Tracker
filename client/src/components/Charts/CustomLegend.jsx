import React from "react";

function CustomLegend({ payload }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4">
      {payload?.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center space-x-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-sm text-gray-700 font-medium">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CustomLegend;
