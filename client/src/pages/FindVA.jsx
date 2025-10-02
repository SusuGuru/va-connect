// client/src/pages/FindVA.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useVA } from "../context/VAContext";

export default function FindVA() {
  const { vas } = useVA();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700">
        Find Your Perfect Virtual Assistant
      </h2>

      {/* VA Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {vas.map((va) => {
          const isAvailable = va.activeClients < 2;

          return (
            <div
              key={va.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              {/* Name + Status */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">{va.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {isAvailable ? "Available" : "Fully Booked"}
                </span>
              </div>

              {/* Skills */}
              <p className="text-gray-600 mt-2">{va.skills}</p>

              {/* Rate */}
              <p className="text-blue-600 font-semibold mt-3">{va.rate}</p>

              {/* Action Buttons */}
              <div className="mt-5 flex gap-3">
                <Link
                  to={`/profile/${va.id}`}
                  className="flex-1 px-4 py-2 text-center bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  View Profile
                </Link>
                <Link
                  to={`/chat/${va.id}`}
                  className={`flex-1 px-4 py-2 text-center rounded-md text-white ${
                    isAvailable
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isAvailable ? "Chat Now" : "Unavailable"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
