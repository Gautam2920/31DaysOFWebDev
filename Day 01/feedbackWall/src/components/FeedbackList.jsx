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