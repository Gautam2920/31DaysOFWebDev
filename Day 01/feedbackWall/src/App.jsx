import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";


export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (text) => {
    setFeedbacks([text, ...feedbacks]);
  };

  const deleteFeedback = (index) => {
    setFeedbacks(feedbacks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
           Feedback Wall
        </h1>
        <FeedbackForm onAdd={addFeedback} />
        <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
      </div>
    </div>
  );
}
