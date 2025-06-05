import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

function ExpenseTransactions({ transactions, onSeeMore }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 md:p-6 w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800">Expenses</h5>
        <button
          className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition-colors font-medium"
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {transactions?.slice(0, 4)?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("DD MM YYYY")}
            amount={expense.amount}
            type="expense"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseTransactions;
