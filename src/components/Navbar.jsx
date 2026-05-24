import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Navbar({ title }){
    return(
      <BrowserRouter>
      <nav class="navbar">

    <div class="logo">
      { title }
    </div>

    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/about.html">About</a>

      <button class="nav-btn">
        Try AI
      </button>
    </div>

  </nav>
  </BrowserRouter> )
}