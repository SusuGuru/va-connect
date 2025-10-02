// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAuthenticated, children }) {
  // If not authenticated, redirect to /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
