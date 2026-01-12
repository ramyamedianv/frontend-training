import { useState, useMemo, useCallback, useEffect, type JSX } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilters from "./ExpenseFilters";
import ExpenseSummary from "./ExpenseSummary";
import type { Expense, Filters } from "../types/expense";
import { ExpenseList } from "./ExpenseList";

const LOCAL_STORAGE_KEY = "expenses";

const ExpenseDashboard= () :JSX.Element=> {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    minAmount: 0,
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedExpenses = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = useCallback((expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
    setShowForm(false);
  }, []);

  const deleteExpense = useCallback((id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const filteredExpenses = useMemo(() => {
    return expenses.filter(
      (e) =>
        e.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        e.amount >= filters.minAmount
    );
  }, [expenses, filters]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="w-full bg-blue-500 py-4 shadow-md">
        <h2 className="text-center text-2xl font-semibold text-white">
          Expense Tracker
        </h2>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-end">
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition
              ${
                showForm
                  ? "bg-gray-300 text-gray-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
          >
            {showForm ? "Close" : "Add Expense"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-4 rounded-lg shadow">
            <ExpenseForm onAddExpense={addExpense} />
          </div>
        )}

        <div className="bg-white p-4 rounded-lg shadow">
          <ExpenseFilters filters={filters} onChange={setFilters} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <ExpenseSummary expenses={filteredExpenses} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <ExpenseList
            expenses={filteredExpenses}
            onDelete={deleteExpense}
          />
        </div>
      </main>
    </div>
  );
};

export default ExpenseDashboard;
