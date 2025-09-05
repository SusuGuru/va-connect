import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <div className="flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Thank You!</h2>
          <p className="text-gray-700 mb-4">
            Your application has been submitted successfully.
          </p>
          <p className="text-gray-500 mb-6">Redirecting to Home...</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
