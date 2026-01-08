````md
# 🌐 Web Fundamentals Notes

## 🧠 Basic UI Building Mindset
Build UI in this order:
1. **Layout** – structure of the page
2. **Spacing** – margin, padding, alignment
3. **Typography** – font size, weight, hierarchy

---

# 📘 HTML5

## 1️⃣ Semantic Elements
Semantic elements describe the meaning of content clearly.

### Common Semantic Tags
- `<header>` – page or section header  
- `<nav>` – navigation links  
- `<main>` – main content  
- `<section>` – grouped content  
- `<article>` – independent content  
- `<aside>` – side content  
- `<footer>` – footer area  

### Example
```html
<header>
  <h1>Website Title</h1>
</header>

<main>
  <section>
    <h2>About</h2>
    <p>Information here</p>
  </section>
</main>
````

---

## 2️⃣ Accessibility Basics

### Screen Reader Support

Screen readers convert content into speech or Braille for visually impaired users.

### aria-label

Used when no visible label exists.

```html
<button aria-label="Close menu">✖</button>
```

Prefer native HTML labels whenever possible.

### alt Text (Images)

Describes images for screen readers.

```html
<img src="image.jpg" alt="Technician repairing an appliance">
```

---

## 3️⃣ Forms and Inputs

### Label vs aria-label

Best practice:

```html
<label for="email">Email</label>
<input type="email" id="email">
```

### Common Form Elements

* `<input>`
* `<textarea>`
* `<select>`
* `<button>`

---

# 🎨 CSS3

## 1️⃣ Box Model

Every element consists of:
**Content → Padding → Border → Margin**

```css
.box {
  padding: 16px;
  border: 2px solid black;
  margin: 12px;
}
```

Use:

```css
* {
  box-sizing: border-box;
}
```

---

## 2️⃣ Positioning

| Type     | Description                   |
| -------- | ----------------------------- |
| static   | Default                       |
| relative | Positioned relative to itself |
| absolute | Positioned relative to parent |
| fixed    | Fixed to viewport             |
| sticky   | Scroll-based positioning      |

---

## 3️⃣ Flexbox

One-dimensional layout (row or column).

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Common properties:

* `flex-direction`
* `justify-content`
* `align-items`
* `gap`

---

## 4️⃣ Grid

Two-dimensional layout (rows and columns).

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

---

## 5️⃣ Responsive Layouts

Design that adapts to different screen sizes.

Use flexible units:

* `%`
* `vw`, `vh`
* `fr`

---

## 6️⃣ Media Queries

Apply styles based on screen size.

```css
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
}
```

### Common Breakpoints

* Mobile: ≤ 480px
* Tablet: ≤ 768px
* Desktop: ≥ 1024px

---

# ✅ Best Practices

* Use semantic HTML
* Prefer `<label>` over `aria-label`
* Use Flexbox for alignment
* Use Grid for layout structure
* Design mobile-first
* Accessibility is essential
