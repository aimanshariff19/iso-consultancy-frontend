import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://iso-consultancy-backend.onrender.com/api/admin/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");

    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">

      {/* Back to Home Button */}
      <div className="w-full max-w-md mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-white px-4 py-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-200 transition text-gray-700"
        >
          ← Back to Home
        </button>
      </div>

      <form
        onSubmit={handleLogin}
        className={`bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5 ${error ? "shake" : ""}`}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition"
        >
          Login
        </button>
      </form>

    </div>
  );
}

export default AdminLogin;