// client/src/pages/HirePage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVA } from "../context/VAContext";

export default function HirePage() {
  const { id } = useParams();
  const { vas, hireVA } = useVA();
  const navigate = useNavigate();

  const va = vas.find((v) => v.id === parseInt(id));

  const [duration, setDuration] = useState("");
  const [rate, setRate] = useState("");
  const [negotiation, setNegotiation] = useState(false);

  // ✅ Safe: hook always runs, logic inside
  useEffect(() => {
    if (va) {
      setRate(va.rate);
    }
  }, [va]);

  if (!va) return <p className="p-6">VA not found</p>;

  const isAvailable = va.activeClients < 2;

  const handleHire = () => {
    if (!isAvailable) return alert("This VA is fully booked.");
    hireVA(va.id); // ✅ updates activeClients
    alert(`You hired ${va.name} for ${duration || "unspecified"} at ${rate}`);
    navigate(`/chat/${va.id}`); // ✅ move to chat room
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Hire {va.name}</h1>

        {/* Duration */}
        <label className="block mb-2 font-semibold">Set Duration:</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g. 3 months"
          className="w-full border px-3 py-2 rounded-md mb-4"
        />

        {/* Rate */}
        <label className="block mb-2 font-semibold">Rate:</label>
        <input
          type="text"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full border px-3 py-2 rounded-md mb-4"
        />

        {/* Negotiate Option */}
        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={negotiation}
            onChange={() => setNegotiation(!negotiation)}
          />
          Negotiate offer before finalizing
        </label>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleHire}
            disabled={!isAvailable}
            className={`flex-1 py-2 rounded-md text-white ${
              isAvailable
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {negotiation ? "Send Negotiation" : "Confirm Hire"}
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
