import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("⚠️ No account found. Please sign up first.");
      return;
    }

    // Compare email & password correctly
    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("currentUser", JSON.stringify(storedUser)); // store session
      alert(`✅ Welcome back, ${storedUser.name}!`);
      navigate("/recipes");
    } else {
      alert("❌ Incorrect email or password"); // exact error
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 border">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={submit} className="space-y-4">
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="text-green-600 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
}
