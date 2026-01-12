import  { type JSX } from "react";
import type { Expense } from "../types/expense";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

export const ExpenseList = ({ expenses, onDelete }: Props): JSX.Element => {
  if (expenses.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500">
        No expenses found 
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
