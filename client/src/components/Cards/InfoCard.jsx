import React from "react";

function InfoCard({ icon, label, value, color }) {
  return (
    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-200 hover:scale-[1.02]">
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[22px] sm:text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <h6 className="text-sm sm:text-base text-gray-500 mb-1">{label}</h6>
        <span className="text-xl sm:text-2xl font-semibold text-gray-800">
          ${value}
        </span>
      </div>
    </div>
  );
}

export default InfoCard;
