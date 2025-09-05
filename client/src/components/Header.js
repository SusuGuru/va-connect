import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">VA Connect</h1>
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/find-va" className="text-gray-700 hover:text-blue-600 transition">
            Find a VA
          </Link>
          <Link to="/join-va" className="text-gray-700 hover:text-blue-600 transition">
            Join as a VA
          </Link>
          <Link
            to="/contact"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
