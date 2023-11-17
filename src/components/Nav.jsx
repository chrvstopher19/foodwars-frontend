// Nav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <NavLink to="/" className="nav-button" exact>
        Home
      </NavLink>
      <NavLink to="/characters" className="button-container">
        
      </NavLink>
      <NavLink to="/recipes" className="button-container">
      
      </NavLink>
    </nav>
  );
}

export default Nav;
