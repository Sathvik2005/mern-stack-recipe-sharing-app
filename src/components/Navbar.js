import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaPlus, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Importing icons
import "./Navbar.css"; // Import styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/recipes">
            <FaBook className="nav-icon" /> Recipes
          </Link>
        </li>
        <li>
          <Link to="/create">
            <FaPlus className="nav-icon" /> Create Recipe
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt className="nav-icon" /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUserPlus className="nav-icon" /> Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
