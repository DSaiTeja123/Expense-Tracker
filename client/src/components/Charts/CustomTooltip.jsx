import React from "react";

function CustomTooltip({ active, payload }) {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-md shadow-md p-3 max-w-xs">
        <p className="text-xs font-semibold text-purple-800 mb-1 truncate">
          {payload[0].name}
        </p>
        <p className="text-sm text-gray-600">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900">
            ${payload[0].value}
          </span>
        </p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
