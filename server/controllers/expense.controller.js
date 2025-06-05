const xlsx = require("xlsx");
const Expense = require("../models/expense.model");

const addExpense = async (req, res) => {
  const userId = req.user._id || req.user.id;
  try {
    const { icon, category, amount, date } = req.body;

    if (!category || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExpense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: new Date(date),
    });

    await newExpense.save();
    return res
      .status(201)
      .json({ message: "Expense added successfully", newExpense });
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({
      message: "Server error while adding expense",
      error: error.message,
    });
  }
};

const getAllExpense = async (req, res) => {
  const userId = req.user._id || req.user.id;
  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });
    res.status(200).json({
      message: "Expense fetched successfully",
      expense,
    });
  } catch (error) {
    console.error("Error fetching Expense:", error);
    res.status(500).json({
      message: "Server error while fetching Expense",
      error: error.message,
    });
  }
};

const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting Expense:", error);
    res.status(500).json({
      message: "Server error while deleting Expense",
      error: error.message,
    });
  }
};

const downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;
  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });

    const data = expense.map((item) => ({
      Category: item.category,
      Amount: item.amount,
      Date: item.date,
    }));

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Expense");
    xlsx.writeFile(workbook, "Expense_Details.xlsx");
    res.download("Expense_Details.xlsx");
  } catch (error) {
    console.error("Error downloading Expense Excel:", error);
    res.status(500).json({
      message: "Server error while downloading Expense Excel",
      error: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
};
