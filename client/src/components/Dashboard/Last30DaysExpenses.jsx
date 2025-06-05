import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

function Last30DaysExpenses({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);
  }, [data]);

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800">
          Last 30 Days Expenses
        </h5>
      </div>
      <CustomBarChart data={chartData} />
    </div>
  );
}

export default Last30DaysExpenses;
