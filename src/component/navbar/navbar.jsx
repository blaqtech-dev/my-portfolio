import { FaSun, FaMoon } from "react-icons/fa";
import {
  FaUser,
  FaHome,
  FaCode,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export function NavBar({ toggleTheme, theme }) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <header className="coverall-nav">
      <nav className="main-nav">

        {/* LEFT LINKS */}
        <div className="left-nav">

          <Link
            to="/"
            className={`nav-link ${
              isActive("/") ? "active" : ""
            }`}
          >
            <FaHome className="icon" />
            <span>Home</span>
          </Link>

          <Link
            to="/about"
            className={`nav-link ${
              isActive("/about") ? "active" : ""
            }`}
          >
            <FaUser className="icon" />
            <span>About</span>
          </Link>

          <Link
            to="/project"
            className={`nav-link ${
              isActive("/project") ? "active" : ""
            }`}
          >
            <FaCode className="icon" />
            <span>Projects</span>
          </Link>

        </div>

        {/* RIGHT ACTIONS */}
        <div className="right-nav">

          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun />
            )}
          </button>

<button>
             <a href="/cv.pdf" download
                   className="cv-download-btn cv-btn">
            Download CV
          </a>
          </button>

        </div>

      </nav>
    </header>
  );
}