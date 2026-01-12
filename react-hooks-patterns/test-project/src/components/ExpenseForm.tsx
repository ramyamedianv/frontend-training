import { useState, type JSX } from "react";
import type { Expense } from "../types/expense";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm= ({ onAddExpense }:Props) :JSX.Element=> {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    onAddExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-4 sm:flex-row sm:items-end"
    >
      <div className="flex-1">
        <label className="mb-1 block text-sm font-medium text-gray-600">
          Expense Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Groceries"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex-1">
        <label className="mb-1 block text-sm font-medium text-gray-600">
          Amount (₹)
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="e.g. 500"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-blue-500 px-5 py-2 text-sm font-medium text-white
                   hover:bg-blue-600 transition"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
