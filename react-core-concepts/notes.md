# React Core Concepts — Notes

## 1. What is React?

React is a **JavaScript library** for building user interfaces, especially **single-page applications (SPAs)**. It focuses on the **view layer** and encourages building UIs using **reusable components**.

### Key Characteristics

* **Component-based architecture**
* **Declarative UI** (describe *what* the UI should look like)
* **Virtual DOM** for efficient updates
* **Unidirectional data flow** (parent → child)

---

## 2. Functional Components

Functional components are **plain JavaScript/TypeScript functions** that return JSX.

### Example

```tsx
const Greeting = () => {
  return <h1>Hello, React!</h1>;
};
```

### Why Functional Components?

* Simple and readable
* Easier to test
* Support **Hooks** (useState, useEffect, etc.)
* Recommended over class components

---

## 3. JSX (JavaScript XML)

JSX allows writing HTML-like syntax inside JavaScript.

### Example

```tsx
const name = "Ramya";
return <h2>Welcome, {name}</h2>;
```

### Rules of JSX

* Must return **one parent element**
* Use **camelCase** for attributes (`onClick`, `className`)
* JavaScript expressions go inside `{}`

---

## 4. Props vs State

### Props (Properties)

* Used to **pass data from parent to child**
* **Read-only** (cannot be modified by child)
* Makes components **reusable**

#### Example

```tsx
type UserProps = {
  name: string;
};

const User = ({ name }: UserProps) => {
  return <p>User Name: {name}</p>;
};
```

### State

* Used to manage **component-specific data**
* **Mutable** (can change over time)
* Managed inside the component

#### Example

```tsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return <p>Count: {count}</p>;
};
```

### Props vs State (Comparison)

| Props                  | State                    |
| ---------------------- | ------------------------ |
| Passed from parent     | Managed within component |
| Immutable              | Mutable                  |
| Used for configuration | Used for dynamic data    |

---

## 5. useState Hook

`useState` allows functional components to have **state**.

### Syntax

```tsx
const [state, setState] = useState(initialValue);
```

### Example

```tsx
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
```

### Important Points

* State updates are **asynchronous**
* Updating state causes **re-render**
* Never mutate state directly

---

## 6. useEffect Hook

`useEffect` is used to perform **side effects** in components.

### Common Use Cases

* API calls
* Subscriptions
* Timers
* DOM updates

### Syntax

```tsx
useEffect(() => {
  // side effect
  return () => {
    // cleanup (optional)
  };
}, [dependencies]);
```

### Examples

#### Run on Every Render

```tsx
useEffect(() => {
  console.log("Component rendered");
});
```

#### Run Once (ComponentDidMount)

```tsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

#### Run When Dependency Changes

```tsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

---

## 7. Component Re-rendering

A component re-renders when:

* Its **state changes**
* Its **props change**
* Its **parent re-renders**

React updates only the **changed parts** using the Virtual DOM.

---

## 8. Controlled vs Uncontrolled Components

### Controlled Component

* Form data handled by **React state**

```tsx
const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
```

### Uncontrolled Component

* Form data handled by the **DOM** using `ref`

```tsx
const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    alert(inputRef.current?.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Show</button>
    </>
  );
};
```

---

## 9. Data Flow in React

* Data flows **one-way** (top → down)
* Parent controls the data
* Child communicates via **callbacks**

---

## 10. Summary

* React is component-based and declarative
* Functional components are the standard
* Props are for external data, state is for internal data
* `useState` manages state
* `useEffect` handles side effects
* Understanding these concepts is the foundation of React

---
