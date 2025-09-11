// src/pages/SignUp.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Demo save
    localStorage.setItem("isSignedUp", "true");
    localStorage.setItem("userEmail", email);

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Logo, Tagline, Description, Illustration */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-gradient-to-tr from-blue-600 to-purple-500 text-white p-8">
        {/* Logo */}
        <h1 className="text-4xl font-bold mb-4">VA Connect</h1>

        {/* Tagline */}
        <h2 className="text-center text-xl font-extrabold mb-2">
          Sign up to get started with VA Connect
        </h2>

        {/* Descriptive Paragraph */}
        <p className="text-center text-base mb-8 max-w-sm">
          VA Connect connects Virtual Assistants with people and businesses who
          need their skills. Showcase your talent, find opportunities, and hire
          the right VAs, all in one platform.
        </p>

        {/* Illustration */}
        <img
          src="https://illustrations.popsy.co/amber/digital-nomad.svg"
          alt="Digital Nomad Illustration"
          className="w-3/4 max-w-md"
        />
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-6">
        <div className="w-full max-w-md rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Create Account
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Sign up to get started with VA Connect
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <span>Already have an account? </span>
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
