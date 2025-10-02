// client/src/pages/LoginPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login → in real app call API
    login({ email: form.email, role: "client" });
    navigate("/find-va");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-white p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to VA Connect</h1>
          <p className="text-lg mb-6">
            Connect with skilled Virtual Assistants to grow your business and manage tasks smarter.
          </p>
          <img
            src="/illustrations/login.svg"
            alt="Login Illustration"
            className="w-64 mx-auto"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">
            Log In
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
