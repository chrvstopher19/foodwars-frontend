import React from "react";
import { NavLink } from 'react-router-dom';
import logo from "../Logo_image/nobackground food logo.png";
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <img className="background-image" src="https://raw.githubusercontent.com/chrvstopher19/foodwars-frontend/develop/src/Food-Wars-Background.png" alt="background"/> 
      <div className="overlay-container">
        <NavLink to="/" exact>
      <img className="logo" src={logo} alt="overlay logo"/>
      </NavLink>
      <div className="button-container">
          <NavLink to="/characters" className="nav-button">
            Characters!
          </NavLink>
          <NavLink to="/recipes" className="nav-button">
            Recipes!
          </NavLink>
        </div>
      </div>
      <div className="red-rectangle"></div>
    </div>
   
  )
}

export default Home

