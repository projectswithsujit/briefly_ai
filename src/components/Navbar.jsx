import { useState } from "react";

export default function Navbar({ title }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  return (
    <nav className="navbar">

      <div className="logo">
        {title}
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="/">Home</a>

        <a
          href="https://www.sujitmishra.com.np/project-details?id=eRYpYeftOxxcw3DJIf6R"
        >
          About
        </a>

      </div>

    </nav>
  );
}
