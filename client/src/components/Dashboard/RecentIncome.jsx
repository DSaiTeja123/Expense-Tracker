import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

function RecentIncome({ transactions, onSeeMore }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800">Income</h5>
        <button
          className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          onClick={onSeeMore}
          aria-label="See all income transactions"
        >
          See All <LuArrowRight className="ml-1 text-base" />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {transactions?.slice(0, 4)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.source}
            icon={item.icon}
            date={moment(item.date).format("DD MM YYYY")}
            amount={item.amount}
            type="income"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
}

export default RecentIncome;
