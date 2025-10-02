import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Have questions or need support? Send us a message and we’ll get back to you soon.
        </p>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
