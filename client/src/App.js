// client/src/App.js
import React, { createContext, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FindVA from "./pages/FindVA";
import VAProfile from "./pages/VAProfile";
import HirePage from "./pages/HirePage";
import ChatRoom from "./pages/ChatRoom";
import JoinVA from "./pages/JoinVA";
import Contact from "./pages/Contact";

// ✅ import VAProvider properly
import { VAProvider } from "./context/VAContext";

// Auth context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Protected route wrapper
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  const [user, setUser] = useState(null);

  const login = (userInfo) => setUser(userInfo);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <VAProvider>
        <Router>
          <Header />
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<LandingPage />} />

            {/* Auth pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/joinva" element={<JoinVA />} />

            {/* Protected pages */}
            <Route
              path="/find-va"
              element={
                <ProtectedRoute>
                  <FindVA />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/:id"
              element={
                <ProtectedRoute>
                  <VAProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hire/:id"
              element={
                <ProtectedRoute>
                  <HirePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/:id"
              element={
                <ProtectedRoute>
                  <ChatRoom />
                </ProtectedRoute>
              }
            />

            {/* Contact (not protected) */}
            <Route path="/contact" element={<Contact />} />

            {/* Fallback → landing */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </VAProvider>
    </AuthContext.Provider>
  );
}

export default App;
