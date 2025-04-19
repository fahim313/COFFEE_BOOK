import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/30 shadow">
      <div className="max-w-screen-xl flex justify-between items-center h-16 mx-auto ">
        <NavLink
          to="/"
          className="flex items-center p-2 text-lg font-semibold"
          aria-label="Back to homepage"
        >
          COFFEE_BOOK
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 ${
                isActive ? "font-bold text-warning" : "hover:text-warning"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/coffees"
            className={({ isActive }) =>
              `flex items-center px-4 ${
                isActive ? "font-bold text-warning" : "hover:text-warning"
              }`
            }
          >
            Coffees
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 ${
                isActive ? "font-bold text-warning" : "hover:text-warning"
              }`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Hamburger Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white/30 shadow-md md:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 ${
                    isActive ? "font-bold text-warning" : "hover:text-warning"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/coffees"
                className={({ isActive }) =>
                  `flex items-center px-4 ${
                    isActive ? "font-bold text-warning" : "hover:text-warning"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Coffees
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 ${
                    isActive ? "font-bold text-warning" : "hover:text-warning"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
