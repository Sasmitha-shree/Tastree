import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("⚠️ Please fill all fields");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user)); // save as single object

    alert("✅ Account created. Please login.");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 border">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
        <form onSubmit={submit} className="space-y-4">
          <input type="text" placeholder="Full Name" value={name}
            onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-green-600 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}
