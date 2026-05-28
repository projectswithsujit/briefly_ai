import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ title }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function about() {
    navigate("/about");
    setMenuOpen(false);
  }

  function goHome() {
    navigate("/");
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  return (
    <nav className="navbar">

      <div className="logo">
        {title}
      </div>


      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a onClick={goHome}>Home</a>
        <a onClick={about}>About</a>
      </div>

    </nav>
  );
}
