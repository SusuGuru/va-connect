import React from "react";
import { Link, useParams } from "react-router-dom";
import { useVA } from "../context/VAContext";

export default function VAProfile() {
  const { id } = useParams();
  const { vas } = useVA();

  // find the VA by id
  const va = vas.find((v) => v.id === parseInt(id));
  if (!va) return <p className="p-6">VA not found</p>;

  const isAvailable = va.activeClients < 2;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-2">{va.name} - Virtual Assistant</h1>
        <p className="text-gray-600 mb-2">Skills: {va.skills}</p>
        <p className="text-gray-800 mb-2">Rate: {va.rate}</p>

        {/* Status Badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
            isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isAvailable ? "Available" : "Fully Booked"}
        </span>

        {/* CV */}
        <a href="/cv.pdf" className="block text-blue-600 underline mb-6">
          Download CV
        </a>

        {/* Actions */}
        <div className="flex gap-4">
          {isAvailable ? (
            <Link
              to={`/hire/${va.id}`}
              className="flex-1 bg-green-600 text-white py-2 rounded-md text-center hover:bg-green-700"
            >
              Hire
            </Link>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-400 text-white py-2 rounded-md cursor-not-allowed"
            >
              Not Available
            </button>
          )}

          <Link
            to={`/chat/${va.id}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700"
          >
            Message
          </Link>
        </div>
      </div>
    </div>
  );
}
