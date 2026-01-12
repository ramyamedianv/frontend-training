import { type JSX } from "react";
import type { Filters } from "../types/expense";

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}
const ExpenseFilters = ({ filters, onChange }: Props): JSX.Element => {
  const clearFilters = () => {
    onChange({ search: "", minAmount: 0 });
  };
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <input
        type="text"
        placeholder="Search expense"
        value={filters.search}
        onChange={(e) =>
          onChange({ ...filters, search: e.target.value })
        }
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Min amount"
        value={filters.minAmount}
        onChange={(e) =>
          onChange({ ...filters, minAmount: Number(e.target.value) })
        }
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={clearFilters}
        className="rounded-md border border-gray-300 px-4 py-2 text-sm
                   text-gray-700 hover:bg-gray-100 transition"
      >
        Clear
      </button>
    </div>
  );
};

export default ExpenseFilters;
