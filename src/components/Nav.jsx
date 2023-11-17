// Nav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="nav-container">
      <NavLink to="/" className="nav-button" style={{ display: 'none' }} exact> Home
      </NavLink>
  
    </nav>
  );
}

export default Nav;
