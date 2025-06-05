import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

function AddExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setExpense({ ...expense, [key]: value });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 max-w-md mx-auto">
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />
      <div className="mt-6 space-y-5">
        <Input
          value={expense.category}
          onChange={({ target }) => handleChange("category", target.value)}
          label="Category"
          placeholder="Rent, Groceries, etc."
          type="text"
          className="rounded-md border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />
        <Input
          value={expense.amount}
          onChange={({ target }) => handleChange("amount", target.value)}
          label="Amount"
          placeholder=""
          type="number"
          className="rounded-md border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />
        <Input
          value={expense.date}
          onChange={({ target }) => handleChange("date", target.value)}
          label="Date"
          placeholder=""
          type="date"
          className="rounded-md border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />
      </div>
      <div className="flex justify-end mt-8">
        <button
          type="button"
          className="add-btn add-btn-fill px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          onClick={() => onAddExpense(expense)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpenseForm;
