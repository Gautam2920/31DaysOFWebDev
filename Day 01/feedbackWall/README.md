# Day 1 – Feedback Wall (Frontend Project)

### 📅 31 DaysOfWebDev – Day 1

---

## 🚀 Project Overview
Today marks the beginning of the **Feedback Wall** project — a simple yet scalable web app where users can share and display feedback interactively.

We started by building the **core input component**: a `FeedbackForm` that collects text input and passes it to its parent for rendering or storage.

---

## ⚙️ What Was Built

### 🔹 Component: `FeedbackForm.jsx`
A **controlled React component** that allows users to enter feedback and submit it.  
It maintains local input state and communicates new feedback upward via a callback.

```jsx
import { useState } from "react";

export default function FeedbackForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your feedback..."
        className="flex-1 border border-gray-300 rounded-xl p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
}
```
### 🔹 Component: `FeedbackList.jsx`
```jsx
export default function feedbackList({ feedbacks, onDelete }) {
    if (feedbacks.length === 0) return <p className="text-gray-500">No feedback yet...</p>;

    return (
        <ul className="space-y-2">
            {feedbacks.map((fb, i) => (
                <li
                    key={i}
                    className="flex justify-between items-center bg-white shadow p-3 rounded-xl"
                >
                    <span>{fb}</span>
                    <button
                        onClick={() => onDelete(i)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
```

---

## 🧠 Key Learnings
- How to build **controlled input forms** in React using `useState`.
- Handling **form submission** with validation and resetting input state.
- Passing **callback props** to communicate from child → parent.
- Basic **Tailwind CSS** layout and styling (flex, spacing, hover effects).

---

## 🧩 Example Integration
```jsx
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleAddFeedback = (text) => {
    setFeedbacks([...feedbacks, text]);
  };

  return (
    <>
      <FeedbackForm onAdd={handleAddFeedback} />
      <ul>
        {feedbacks.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </>
  );
}
```
**Author:** Gautam Bhargava
