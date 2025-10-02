// client/src/pages/ChatRoom.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../App";

export default function ChatRoom() {
  const { id } = useParams(); // VA ID
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    { sender: "system", text: "Offer pending: $40/hr for 3 months." },
  ]);
  const [input, setInput] = useState("");
  const [offerStatus, setOfferStatus] = useState("pending"); // pending, accepted, declined

  // Dummy VA recommendations
  const recommendedVAs = [
    {
      id: 2,
      name: "James Lee",
      skills: "Customer Support, Email Management",
      rate: "$40/hr",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      skills: "Data Entry, Admin",
      rate: "$50/hr",
    },
  ];

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: user?.name || "You", text: input }]);
    setInput("");
  };

  const handleOfferDecision = (decision) => {
    if (decision === "accept") {
      setOfferStatus("accepted");
      setMessages([
        ...messages,
        { sender: "system", text: "✅ Offer has been accepted! Chat is now open." },
      ]);
    } else {
      setOfferStatus("declined");
      setMessages([
        ...messages,
        { sender: "system", text: "❌ Offer has been declined. Please try another VA." },
      ]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold">Chat Room with VA #{id}</h1>
        <span>{offerStatus === "pending" ? "Negotiating..." : offerStatus}</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-md ${
              msg.sender === user?.name || msg.sender === "You"
                ? "ml-auto bg-blue-100 text-right"
                : msg.sender === "system"
                ? "mx-auto bg-gray-200 text-center"
                : "mr-auto bg-green-100 text-left"
            }`}
          >
            {msg.sender !== "system" && (
              <p className="text-xs text-gray-500 mb-1">{msg.sender}</p>
            )}
            <p>{msg.text}</p>
          </div>
        ))}

        {/* If offer declined → show recommendations */}
        {offerStatus === "declined" && (
          <div className="mt-10">
            <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
              Recommended Virtual Assistants
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recommendedVAs.map((va) => (
                <div
                  key={va.id}
                  className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold">{va.name}</h3>
                  <p className="text-sm text-gray-600">{va.skills}</p>
                  <p className="font-bold text-blue-600">{va.rate}</p>
                  <Link
                    to={`/profile/${va.id}`}
                    className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Offer Buttons for VA */}
      {offerStatus === "pending" && user?.role === "VA" && (
        <div className="p-4 border-t flex gap-4 justify-center bg-white">
          <button
            onClick={() => handleOfferDecision("accept")}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Accept Offer
          </button>
          <button
            onClick={() => handleOfferDecision("decline")}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Decline Offer
          </button>
        </div>
      )}

      {/* Message Input (only enabled if offer accepted) */}
      <form
        onSubmit={sendMessage}
        className="p-4 border-t bg-white flex items-center gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={offerStatus !== "accepted"}
          placeholder={
            offerStatus === "accepted"
              ? "Type your message..."
              : "Waiting for offer response..."
          }
          className="flex-1 border rounded-lg px-4 py-2 disabled:bg-gray-100"
        />
        <button
          type="submit"
          disabled={offerStatus !== "accepted"}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Send
        </button>
      </form>
    </div>
  );
}
