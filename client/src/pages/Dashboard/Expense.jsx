import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useUserAuth } from "../../hooks/useUserAuth";
import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import { toast } from "react-hot-toast";
import Modal from "../../components/Modal";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";
import ExpenseList from "../../components/Expense/ExpenseList";
import DeleteAlert from "../../components/DeleteAlert";

function Expense() {
  useUserAuth();

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddExpenseModalOpen, setAddExpenseModalOpen] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState({ show: false, id: null });

  // Fetch all expense details
  const fetchExpenses = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        API_PATHS.EXPENSE.GET_ALL_EXPENSE
      );
      setExpenses(response?.data?.expense || []);
    } catch (error) {
      console.error("Error fetching expenses:", error);
      toast.error("Failed to load expenses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a new expense
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    if (!category.trim()) {
      toast.error("Category is required.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });
      toast.success("Expense added successfully.");
      setAddExpenseModalOpen(false);
      fetchExpenses();
    } catch (error) {
      console.error("Error adding expense:", error);
      toast.error(error?.response?.data?.message || "Failed to add expense.");
    }
  };

  // Handle deleting an expense by id
  const deleteExpense = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
      toast.success("Expense deleted successfully.");
      setDeleteAlert({ show: false, id: null });
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
      toast.error(
        error?.response?.data?.message || "Failed to delete expense."
      );
    }
  };

  // Download expense details as Excel file
  const handleDownloadExpenseDetails = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.EXPENSE.DOWNLOAD_EXPENSE,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "expense_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading expense details:", error);
      toast.error("Failed to download expense details. Please try again.");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto max-w-7xl px-4">
        <div className="grid gap-6 grid-cols-1">
          <ExpenseOverview
            transactions={expenses}
            onAddExpense={() => setAddExpenseModalOpen(true)}
          />

          <ExpenseList
            transactions={expenses}
            onDelete={(id) => setDeleteAlert({ show: true, id })}
            onDownload={handleDownloadExpenseDetails}
          />
        </div>

        <Modal
          isOpen={isAddExpenseModalOpen}
          onClose={() => setAddExpenseModalOpen(false)}
          title="Add Expense"
        >
          <AddExpenseForm onAddExpense={handleAddExpense} />
        </Modal>

        <Modal
          isOpen={deleteAlert.show}
          onClose={() => setDeleteAlert({ show: false, id: null })}
          title="Delete Expense"
        >
          <DeleteAlert
            content="Are you sure you want to delete this expense?"
            onDelete={() => deleteExpense(deleteAlert.id)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
}

export default Expense;
