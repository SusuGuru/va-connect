import { useState } from "react";
import Header from "../components/Header";

export default function FindVA({ vas }) {
  const [query, setQuery] = useState("");

  const filteredVAs = (vas || []).filter(
    (va) =>
      va.name.toLowerCase().includes(query.toLowerCase()) ||
      va.skills.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Find a Virtual Assistant
        </h2>

        <input
          type="text"
          placeholder="Search by name or skill..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {filteredVAs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVAs.map((va) => (
              <div
                key={va.id}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600">{va.name}</h3>
                <p className="text-gray-600 mt-2">{va.skills}</p>
                <p className="text-blue-600 font-bold mt-2">{va.rate}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Contact
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8 text-lg">
            No VAs found.
          </p>
        )}
      </div>
    </div>
  );
}
