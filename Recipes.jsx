// src/pages/Recipes.jsx
import { Link } from "react-router-dom";
import recipes from "../data/recipes";

export default function Recipes() {
  const addToFavorites = (recipe) => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favs.find((r) => r.id === recipe.id)) {
      favs.push({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        cuisine: recipe.cuisine,
        diet: recipe.diet,
      });
      localStorage.setItem("favorites", JSON.stringify(favs));
      alert(`${recipe.title} ❤️ added to favorites!`);
    } else {
      alert("Already in favorites!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">All Recipes 🍽️</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <div
            key={r.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* ✅ Card image clickable → opens RecipeDetail */}
            <Link to={`/recipes/${r.id}`}>
              <img
                src={r.image}
                alt={r.title}
                className="h-48 w-full object-cover"
              />
            </Link>

            <div className="p-4">
              <h2 className="font-semibold text-lg">{r.title}</h2>
              <p className="text-sm text-gray-600">
                {r.cuisine} • {r.diet}
              </p>
              <p className="text-xs mt-1 text-gray-500">
                ⏱ {r.cookTime} mins • ⚡ {r.difficulty}
              </p>

              <div className="mt-3 flex gap-2">
                {/* ✅ View Button → goes to RecipeDetail */}
                <Link
                  to={`/recipes/${r.id}`}
                  className="flex-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-center"
                >
                  👀 View
                </Link>

                {/* ❤️ Favorites Button */}
                <button
                  onClick={() => addToFavorites(r)}
                  className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  ❤️ Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
