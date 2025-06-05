import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

function IncomeOverview({ transactions, onAddIncome }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
    return () => {};
  }, [transactions]);

  return (
    <div className="card p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h5 className="text-lg font-semibold text-purple-700">
            Income Overview
          </h5>
          <p className="text-xs text-gray-500 mt-1 max-w-xs">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>
        <button
          className="add-btn flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
          onClick={onAddIncome}
          type="button"
          aria-label="Add Income"
        >
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>
      <div className="mt-6">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
}

export default IncomeOverview;
