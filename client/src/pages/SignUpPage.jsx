import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";

export default function SignUpPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "client", // default role
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Mock signup: log user in immediately
    login({ email: form.email, role: form.role });

    // Redirect based on role
    if (form.role === "client") {
      navigate("/find-va");
    } else {
      navigate("/profile/me"); // VA goes to their profile page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Role Selector */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="client">I’m a Client</option>
            <option value="va">I’m a Virtual Assistant</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
