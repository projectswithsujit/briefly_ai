import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export default function Navbar({ title }){
        const navigate = useNavigate();
    function about(){

navigate("/dashboard");

    }
    return(
      <BrowserRouter>
      <nav class="navbar">

    <div class="logo">
      { title }
    </div>

    <div class="nav-links">
      <a href="/">Home</a>
      <a onClick={about}>About</a>

      <button class="nav-btn">
        Try AI
      </button>
    </div>

  </nav>
  </BrowserRouter> )
}
