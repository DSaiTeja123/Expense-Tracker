import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

function FinanceOverview({ totalBalance, totalIncome, totalExpense }) {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expense", amount: totalExpense },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 md:p-6 w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800">
          Financial Overview
        </h5>
      </div>
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`${totalBalance}`}
        colors={COLORS}
        showTextAuthor
      />
    </div>
  );
}

export default FinanceOverview;
