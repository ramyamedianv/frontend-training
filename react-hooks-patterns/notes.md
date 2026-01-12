
## 1. Common React Hooks

### useMemo

**Purpose:** Memoizes an expensive computation result so it only recalculates when dependencies change.

**When to use:**

* Heavy calculations (filtering, sorting large lists)
* Prevent unnecessary recalculations on re-render

**Example:**

```tsx
const filteredExpenses = useMemo(() => {
  return expenses.filter(e => e.amount > minAmount);
}, [expenses, minAmount]);
```

**Key Point:** `useMemo` memoizes a **value**.

---

### useCallback

**Purpose:** Memoizes a function reference to prevent re-creation on every render.

**When to use:**

* Passing functions to child components
* Preventing unnecessary child re-renders (with `React.memo`)

**Example:**

```tsx
const deleteExpense = useCallback((id: number) => {
  setExpenses(prev => prev.filter(e => e.id !== id));
}, []);
```

**Key Point:** `useCallback` memoizes a **function**.

---

### useRef

**Purpose:** Stores mutable values that persist across renders without causing re-renders.

**Common use cases:**

* Accessing DOM elements
* Storing previous values
* Managing focus

**Example:**

```tsx
const inputRef = useRef<HTMLInputElement>(null);

<input ref={inputRef} />;
```

**Key Point:** Changing `ref.current` does **not** trigger a re-render.

---

## 2. Lifting State Up

**Definition:** Moving shared state to the closest common parent so multiple components can access and modify it.

**Why it’s needed:**

* To keep data in sync
* To avoid duplicate state

**Example:**

* Parent holds `expenses` state
* Child components receive data via props

```tsx
<ExpenseForm onAddExpense={addExpense} />
<ExpenseList expenses={expenses} />
```

**Rule of Thumb:**

> If two components need the same state → lift it up.

---

## 3. Passing Data Between Components

### Parent → Child (Props)

```tsx
<ExpenseItem title={expense.title} />
```

### Child → Parent (Callback Props)

```tsx
const onDelete = (id: number) => { ... };
<ExpenseItem onDelete={onDelete} />
```

**Pattern:**

* Parent defines function
* Child calls it

---

## 4. Conditional Rendering Patterns

### Using &&

```tsx
{expenses.length > 0 && <ExpenseList />}
```

### Using Ternary Operator

```tsx
{expenses.length === 0 ? <p>No expenses</p> : <ExpenseList />}
```

### Early Return

```tsx
if (isLoading) return <Spinner />;
```

**Best Practice:**

* Keep JSX readable
* Avoid deeply nested conditions

---

## 5. Basic Performance Awareness in React

### Avoid Unnecessary Re-renders

* Use `React.memo` for pure components
* Use `useCallback` for functions passed as props
* Use `useMemo` for derived data

### Keys in Lists

```tsx
{items.map(item => (
  <Item key={item.id} />
))}
```

### State Design

* Keep state minimal
* Avoid derived state when possible

---

## Summary

* `useMemo` → memoizes values
* `useCallback` → memoizes functions
* `useRef` → persistent mutable values
* Lift state when sharing data
* Use conditional rendering wisely
* Optimize only when necessary

---
