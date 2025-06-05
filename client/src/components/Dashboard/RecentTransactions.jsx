import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

function RecentTransactions({ transactions, onSeeMore }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800">
          Recent Transactions
        </h5>
        <button
          className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium transition"
          onClick={onSeeMore}
        >
          <span>See All</span> <LuArrowRight className="text-base" />
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {transactions?.slice(0, 4)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "expense" ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format("DD MM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
}

export default RecentTransactions;
