import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";
import Card_1 from "../../assets/images/card1.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left content area */}
      <div className="w-full md:w-[60vw] h-full px-8 md:px-12 py-8 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Expense Tracker
        </h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-full bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center relative overflow-hidden p-8">

        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />

        <div className="relative z-10 mt-2">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>

        <img
          src={Card_1}
          alt="Transactions"
          className="rounded-3xl absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 lg:w-[90%] shadow-lg shadow-blue-400/15 z-10"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-2xl text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <h6 className="text-xl font-semibold">{value}</h6>
      </div>
    </div>
  );
};
