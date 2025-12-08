// src/pages/RecipeDetail.jsx
import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import recipes from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useMemo(() => recipes.find(r => r.id === id), [id]);
  const storageKey = `progress_${id}`;
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem(storageKey));
    if (!Number.isNaN(saved)) setStepIdx(saved);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(stepIdx));
  }, [storageKey, stepIdx]);

  if (!recipe) return <p>Recipe not found</p>;

  const total = recipe.steps.length;
  const progress = Math.round(((stepIdx + 1) / total) * 100);

  // ✅ Mark as completed when last step is done
  useEffect(() => {
    if (stepIdx === total - 1) {
      let completed = JSON.parse(localStorage.getItem("completedRecipes")) || [];
      if (!completed.find(r => r.id === recipe.id)) {
        completed.push({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image
        });
        localStorage.setItem("completedRecipes", JSON.stringify(completed));
      }
    }
  }, [stepIdx, total, recipe]);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mt-2" />

      <h2 className="mt-4 font-semibold">Ingredients</h2>
      <ul className="list-disc ml-5">
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>

      <div className="mt-6 border p-4 rounded">
        <p>{recipe.steps[stepIdx]}</p>
        <div className="flex gap-3 mt-4">
          <button
            disabled={stepIdx === 0}
            onClick={() => setStepIdx(s => s - 1)}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Prev
          </button>
          <button
            disabled={stepIdx === total - 1}
            onClick={() => setStepIdx(s => s + 1)}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Next
          </button>
          <span className="ml-auto">{progress}% done</span>
        </div>
      </div>
    </div>
  );
}
