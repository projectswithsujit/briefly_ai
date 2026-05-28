import { useState } from "react";

export default function Navbar({ title }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">

      <div className="logo">
        {title}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <a href="/">Home</a>

        <a href="https://www.sujitmishra.com.np/project-details?id=eRYpYeftOxxcw3DJIf6R">
          About
        </a>

      </div>

    </nav>
  );
}
