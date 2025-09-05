import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function JoinVA({ addVA }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    rate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const skills = formData.skills.trim();
    const rate = formData.rate.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const rateRegex = /^\$\d+\/hr$/;
    if (!rateRegex.test(rate)) {
      alert("Please enter rate in the format: $15/hr");
      return;
    }

    addVA({ name, email, skills, rate });
    setFormData({ name: "", email: "", skills: "", rate: "" });
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />

      <div className="max-w-md mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Join as a Virtual Assistant
        </h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Hourly Rate</label>
            <input
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              required
              placeholder="$15/hr"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
