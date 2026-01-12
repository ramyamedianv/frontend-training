import { useMemo } from "react";
import type { Expense } from "../types/expense";

interface Props {
  expenses: Expense[];
}
const ExpenseSummary: React.FC<Props> = ({ expenses }) => {
  const total = useMemo<number>(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-medium text-gray-700">
        Total Expenses
      </h3>

      <span className="text-xl font-semibold text-green-600">
        ₹{total}
      </span>
    </div>
  );
};

export default ExpenseSummary;
