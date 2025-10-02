// client/src/components/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clears user
    navigate("/"); // send back to landing page
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">VA Platform</Link>
      </h1>
      <nav className="space-x-4">
        {!user && (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
            <Link to="/joinva" className="hover:underline">Join as VA</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/find-va" className="hover:underline">Find a VA</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
