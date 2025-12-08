import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/tastree-logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    alert("👋 Logged out!");
    navigate("/"); // home ku send pannidum
  };

  return (
    <header className="bg-gradient-to-r from-green-500 to-orange-400 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo + App Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Tastree Logo"
            className="h-12 w-12 rounded shadow-md"
          />
          <h1 className="text-white text-2xl font-bold tracking-wide">
            Tastree
          </h1>
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-white font-medium text-lg">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/completed">Completed</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>

        {/* ✅ Right Side (Login / Welcome + Logout) */}
        {currentUser ? (
          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold">
              Welcome, {currentUser.name}!
            </span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white text-green-600 px-6 py-2 rounded-md font-semibold shadow hover:bg-green-100"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
