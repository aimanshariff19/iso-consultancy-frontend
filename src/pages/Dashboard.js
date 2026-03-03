import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);

  const fetchClients = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/admin-login");
        return;
      }

      const res = await axios.get(
        "https://iso-consultancy-backend.onrender.com/api/clients/all",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setClients(res.data);

    } catch (error) {
      localStorage.removeItem("token");
      navigate("/admin-login");
    }
  }, [navigate]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-md">

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-100 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-200 transition"
          >
            ← Back to Home
          </button>

          <h2 className="text-2xl font-bold text-gray-800">
            Admin Dashboard
          </h2>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Clients List */}
      <div className="grid gap-6">

        {clients.length === 0 && (
          <div className="text-center text-gray-500">
            No client applications found.
          </div>
        )}

        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800">
              {client.companyName}
            </h3>

            <div className="mt-3 space-y-1 text-gray-600">
              <p><strong>Contact:</strong> {client.contactPerson}</p>
              <p><strong>Email:</strong> {client.email}</p>
            </div>

            <div className="mt-4">
              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(client.status)}`}
              >
                {client.status}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Dashboard;