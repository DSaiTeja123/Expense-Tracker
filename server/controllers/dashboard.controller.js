const Income = require("../models/income.model");
const Expense = require("../models/expense.model");
const { Types } = require("mongoose");

const getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const userObjectId = new Types.ObjectId(String(userId));

    const totalIncome = await Income.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalExpense = await Expense.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const last60DaysIncomeTransactions = await Income.find({
      userId: userObjectId,
      date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    const incomeLast60Days = last60DaysIncomeTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    const last30DaysExpenseTransactions = await Expense.find({
      userId: userObjectId,
      date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    const expenseLast30Days = last30DaysExpenseTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    const recentIncome = await Income.find({ userId: userObjectId })
      .sort({ date: -1 })
      .limit(5);
    const recentExpense = await Expense.find({ userId: userObjectId })
      .sort({ date: -1 })
      .limit(5);

    const lastTransactions = [
      ...recentIncome.map((txn) => ({ ...txn.toObject(), type: "income" })),
      ...recentExpense.map((txn) => ({ ...txn.toObject(), type: "expense" })),
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    res.status(200).json({
      totalBalance:
        (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
      totalIncome: totalIncome[0]?.total || 0,
      totalExpense: totalExpense[0]?.total || 0,
      last30DaysExpenses: {
        total: expenseLast30Days,
        transactions: last30DaysExpenseTransactions,
      },
      last60DaysIncome: {
        total: incomeLast60Days,
        transactions: last60DaysIncomeTransactions,
      },
      recentTransactions: lastTransactions,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getDashboardData };
