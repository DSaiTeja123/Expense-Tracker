import React, { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4F39F6"];

function RecentIncomeWithChart({ data, totalIncome }) {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));
    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
    return () => {};
  }, [data]);

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800">
          Last 60 Days Income
        </h5>
      </div>
      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`${totalIncome}`}
        showTextAuthor
        colors={COLORS}
      />
    </div>
  );
}

export default RecentIncomeWithChart;
