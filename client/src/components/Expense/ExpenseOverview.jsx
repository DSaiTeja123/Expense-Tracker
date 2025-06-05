import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareExpenseLineChartData } from "../../utils/helper";
import CustomLineChart from "../Charts/CustomLineChart";

function ExpenseOverview({ transactions, onAddExpense }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result);
    return () => {};
  }, [transactions]);

  return (
    <div className="card bg-white border border-gray-200 rounded-2xl shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        <div>
          <h5 className="text-lg font-semibold text-purple-700">
            Expense Overview
          </h5>
          <p className="text-sm text-gray-500 mt-1 max-w-md">
            Track your spending trends over time and gain insights into where
            your money goes
          </p>
        </div>
        <button
          className="add-btn flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md px-4 py-2 transition"
          onClick={onAddExpense}
          type="button"
        >
          <LuPlus className="text-xl" />
          <span>Add Expense</span>
        </button>
      </div>

      <div className="mt-10">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
}

export default ExpenseOverview;
