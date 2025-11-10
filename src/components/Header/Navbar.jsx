
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "ReadList", path: "/readList" },
  ];

  return (
    <nav className="bg-[#c5aa6a] text-gray-900 shadow-md sticky top-0 z-50 mb-2">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-white transition-colors"
        >
          Book Vibes
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium hover:text-white transition-colors ${
                    isActive ? "text-white" : "text-gray-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <div className="lg:hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost p-2 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[#c5aa6a] text-gray-900 rounded-md shadow-md mt-2 p-3 w-40"
          >
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-2 py-1 rounded hover:bg-gray-900 hover:text-white transition-colors ${
                      isActive ? "bg-gray-900 text-white" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


