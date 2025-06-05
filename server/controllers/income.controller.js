const xlsx = require("xlsx");
const Income = require("../models/income.model");

const addIncome = async (req, res) => {
  const userId = req.user._id || req.user.id;
  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    return res
      .status(201)
      .json({ message: "Income added successfully", newIncome });
  } catch (error) {
    console.error("Error adding income:", error);
    res.status(500).json({
      message: "Server error while adding income",
      error: error.message,
    });
  }
};

const getAllIncome = async (req, res) => {
  const userId = req.user._id || req.user.id;
  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.status(200).json({
      message: "Income fetched successfully",
      income,
    });
  } catch (error) {
    console.error("Error fetching income:", error);
    res.status(500).json({
      message: "Server error while fetching income",
      error: error.message,
    });
  }
};

const deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Income deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting income:", error);
    res.status(500).json({
      message: "Server error while deleting income",
      error: error.message,
    });
  }
};

const downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;
  try {
    const income = await Income.find({ userId }).sort({ date: -1 });

    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date,
    }));

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Income");
    xlsx.writeFile(workbook, "Income_Details.xlsx");
    res.download("Income_Details.xlsx");
  } catch (error) {
    console.error("Error downloading income Excel:", error);
    res.status(500).json({
      message: "Server error while downloading income Excel",
      error: error.message,
    });
  }
};

module.exports = {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
};
