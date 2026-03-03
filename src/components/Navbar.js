import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyle = (section) =>
    `cursor-pointer transition ${
      active === section
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 hover:scale-105 transition"
        >
          Certiq consulting group
        </Link>

        <div className="flex items-center space-x-8 font-medium">

          <a href="#about" className={linkStyle("about")}>
            About
          </a>

          <a href="#services" className={linkStyle("services")}>
            Services
          </a>

          <a href="#contact" className={linkStyle("contact")}>
            Contact
          </a>

          <Link
            to="/apply"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Apply
          </Link>

          <Link
            to="/admin-login"
            className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Admin
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;