import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

/* 🔒 Protected Route */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin-login" />;
  }

  return children;
}

/* 👀 Hide Navbar on Admin Pages */
function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/admin-login" ||
    location.pathname === "/dashboard";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;