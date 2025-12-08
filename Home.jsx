import React, { useState, useEffect } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [recipeOfDay, setRecipeOfDay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        const today = new Date().getDate();
        const index = today % data.length;
        setRecipeOfDay(data[index]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Find tasty recipes for any mood — quick, healthy, homemade.
        </h2>
        <p className="text-gray-600 mb-6">
          Search by ingredient, cuisine or time. Save favorites to view later.
        </p>
        <div className="flex space-x-2 mb-8">
          <input
            type="text"
            placeholder="Search recipes (eg: pancake, pulao...)"
            className="flex-1 p-3 border rounded-md"
          />
          <button className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-600">
            Browse
          </button>
        </div>
        <h3 className="text-lg font-semibold mb-4">Popular categories</h3>
        <div className="flex flex-wrap gap-3">
          {["Vegetarian", "Vegan", "Seafood", "Desserts"].map((cat) => (
            <span
              key={cat}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-green-600"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2 text-green-600">🍲 Recipe of the Day</h3>
        {loading ? (
          <p>Loading...</p>
        ) : recipeOfDay ? (
          <>
            <p className="text-gray-800 font-medium">{recipeOfDay.name}</p>
            <p className="text-gray-500 text-sm mt-2">{recipeOfDay.desc}</p>
          </>
        ) : (
          <p>No recipe found.</p>
        )}
      </div>
    </main>
  );
}
