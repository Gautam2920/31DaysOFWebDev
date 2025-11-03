import { useState } from "react";

export default function feedbackForm({ onAdd }) {
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