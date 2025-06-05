import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingUpDown,
  LuTrash2,
} from "react-icons/lu";

function TransactionInfoCard({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) {
  const getAmountStyles = () =>
    type === "income"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";

  return (
    <div
      className="group relative flex items-center gap-4 mt-3 p-4 sm:p-5 
      rounded-xl bg-white shadow-sm hover:shadow-md 
      transition-shadow duration-200"
    >
      <div
        className="min-w-[3rem] h-12 flex items-center justify-center 
        text-xl bg-gray-100 text-gray-800 rounded-full"
      >
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-2 sm:mb-0">
          <p className="text-sm sm:text-base font-medium text-gray-800">
            {title}
          </p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>

        <div className="flex items-center gap-3">
          {!hideDeleteBtn && (
            <button
              className="text-gray-400 hover:text-red-500 
              opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={onDelete}
            >
              <LuTrash2 />
            </button>
          )}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 text-sm 
            font-medium rounded-full ${getAmountStyles()}`}
          >
            <span>{type === "income" ? "+" : "-"}</span>
            <span>{amount}</span>
            {type === "income" ? <LuTrendingUp /> : <LuTrendingUpDown />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionInfoCard;
