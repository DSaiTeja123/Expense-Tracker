import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

function IncomeList({ transactions, onDelete, onDownload }) {
  return (
    <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Income Sources
        </h5>
        <button
          className="card-btn flex items-center gap-2 text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 transition"
          onClick={onDownload}
          aria-label="Download Income Data"
          type="button"
        >
          <LuDownload className="text-xl" />
          <span className="hidden sm:inline">Download</span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {transactions?.map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.title || income.source}
            icon={income.icon}
            date={moment(income.date).format("DD MM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default IncomeList;
