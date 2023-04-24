import React from 'react';
//import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {
  //const navigate =useNavigate();
  return (
    <header>
      <h1 id="nav-title">MyMoviesApp</h1>
    <nav >
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Movies</a></li>
        
      </ul>
    </nav>
    </header>
  );
}

export default Navbar;