import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-teal-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logocare1.png"
            alt="GlyCare Logo"
            className="w-14 sm:w-16 object-cover"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            GlyCare
          </h2>
        </div>

        {/* Desktop Menu (md+) */}
        <nav className="hidden md:flex items-center gap-8">
          {["/", "/about", "/recipes", "/store"].map((path, index) => {
            const labels = ["Home", "About", "Recipes", "Store"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `font-semibold transition ${
                    isActive
                      ? "text-teal-800"
                      : "text-white hover:text-gray-200"
                  }`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (sm) */}
      {menuOpen && (
        <div className="md:hidden bg-teal-700 px-6 py-4 flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to="/recipes"
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold"
          >
            Recipes
          </NavLink>
          <NavLink
            to="/store"
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold"
          >
            Store
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
