export interface Expense {
  id: number;
  title: string;
  amount: number;
}

export interface Filters {
  search: string;
  minAmount: number;
}
