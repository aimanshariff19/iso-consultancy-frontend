console.log("UPDATED VERSION LOADED");

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Apply() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    isoType: "",
    serviceType: "",
    companySize: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");
    setLoading(true);

    try {
      await axios.post(
        "https://iso-consultancy-backend.onrender.com/api/clients/apply",
        formData
      );

      setSuccess("Application Submitted Successfully ✅");

      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        isoType: "",
        serviceType: "",
        companySize: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* Back Button */}
      <div className="max-w-2xl mx-auto mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-white px-4 py-2 rounded-lg shadow-sm text-gray-600 hover:bg-gray-200 transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Apply for ISO Certification
        </h2>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="isoType"
            value={formData.isoType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="">Select ISO Certification</option>
            <option value="ISO 9001">ISO 9001 – Quality Management</option>
            <option value="ISO 14001">ISO 14001 – Environmental</option>
            <option value="ISO 27001">ISO 27001 – Information Security</option>
            <option value="ISO 45001">ISO 45001 – Occupational Health</option>
            <option value="ISO 22000">ISO 22000 – Food Safety</option>
            <option value="ISO 13485">ISO 13485 – Medical Devices</option>
          </select>

          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="">Select Service Type</option>
            <option value="New Certification">New Certification</option>
            <option value="Renewal">Renewal</option>
            <option value="Internal Audit">Internal Audit</option>
            <option value="Consultation Only">Consultation Only</option>
          </select>

          <input
            type="text"
            name="companySize"
            placeholder="Company Size (e.g., 50 Employees)"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Additional Information"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition font-semibold disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Apply;