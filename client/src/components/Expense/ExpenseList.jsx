import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

function ExpenseList({ transactions, onDelete, onDownload }) {
  return (
    <div className="card bg-white border border-gray-200 rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h5 className="text-lg font-semibold text-gray-800">All Expenses</h5>
        <button
          className="card-btn flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold transition"
          onClick={onDownload}
        >
          <LuDownload className="text-lg" />
          <span>Download</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {transactions?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("DD MM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
