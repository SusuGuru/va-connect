import { useState } from "react";
import Header from "../components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual email submission logic or backend API
    console.log("Message submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />

      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Have questions or need assistance? Send us a message or reach us on social media.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Other Ways to Reach Us</h3>
          <p className="mb-2">
            Email: <a href="mailto:info@vaconnect.com" className="text-blue-600 hover:underline">info@vaconnect.com</a>
          </p>
          <p className="mb-2">
            WhatsApp: <a href="https://wa.me/YOURNUMBER" className="text-blue-600 hover:underline">+233XXXXXXXXX</a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 font-bold">
              Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 font-bold">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
