import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const removeFavorite = (id) => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    favs = favs.filter((r) => r.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favs));
    setFavorites(favs);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Favorites ❤️</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Go add some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((r) => (
            <div key={r.id} className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <Link to={`/recipe/${r.id}`}>
                <img src={r.image} alt={r.title} className="h-48 w-full object-cover" />
              </Link>
              <div className="p-4">
                <Link to={`/recipe/${r.id}`} className="block">
                  <h2 className="font-semibold text-lg">{r.title}</h2>
                  <p className="text-sm text-gray-600">{r.cuisine} • {r.diet}</p>
                </Link>
                <button
                  onClick={() => removeFavorite(r.id)}
                  className="mt-2 w-full bg-gray-700 text-white py-1 rounded hover:bg-gray-900"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
