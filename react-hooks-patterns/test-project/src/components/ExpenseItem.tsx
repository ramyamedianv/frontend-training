import React, { type JSX } from "react";
import type { Expense } from "../types/expense";

interface Props {
  expense: Expense;
  onDelete: (id: number) => void;
}
const ExpenseItem= ({ expense, onDelete }: Props): JSX.Element=> {
  return (
    <li className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 transition">
      <div>
        <p className="text-sm font-medium text-gray-800">
          {expense.title}
        </p>
        <p className="text-xs text-gray-500">
          ₹{expense.amount}
        </p>
      </div>

      <button
        onClick={() => onDelete(expense.id)}
        className="text-sm text-red-500 hover:text-red-600 font-medium"
      >
        Delete
      </button>
    </li>
  );
};

export default React.memo(ExpenseItem);
