// src/pages/Completed.jsx
import { Link } from "react-router-dom";

export default function Completed() {
  const completed = JSON.parse(localStorage.getItem("completedRecipes")) || [];

  if (completed.length === 0) {
    return <p className="text-center mt-10">No recipes completed yet 🚀</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">✅ Completed Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {completed.map(r => (
          <div key={r.id} className="border rounded-lg p-4 bg-white shadow">
            <img src={r.image} alt={r.title} className="h-40 w-full object-cover rounded" />
            <h2 className="font-semibold mt-2">{r.title}</h2>
            <Link
              to={`/recipes/${r.id}`}
              className="mt-2 inline-block px-3 py-1 bg-green-600 text-white rounded"
            >
              View Again
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
