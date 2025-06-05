import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

function AddIncomeForm({ onAddIncome }) {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  return (
    <div className="space-y-6">
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc."
        type="text"
      />

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />

      <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="add-btn add-btn-fill bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md transition"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
}

export default AddIncomeForm;
