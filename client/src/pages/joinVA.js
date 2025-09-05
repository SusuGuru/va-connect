// src/pages/JoinVA.js
import { useState } from "react";

function JoinVA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Application submitted! We’ll get back to you soon.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Join as a Virtual Assistant
      </h2>
      <p className="mb-6 text-gray-600">
        Fill out the form below to apply and join our network of skilled
        Virtual Assistants.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <textarea
          name="skills"
          placeholder="List your skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        ></textarea>
        <input
          type="number"
          name="rate"
          placeholder="Hourly Rate (USD)"
          value={formData.rate}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default JoinVA;
