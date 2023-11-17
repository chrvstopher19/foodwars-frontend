import React from "react";
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <img className="background-image" src="https://raw.githubusercontent.com/chrvstopher19/foodwars-frontend/develop/src/Food-Wars-Background.png" alt="background"/> 
      <div className="overlay-container">
      <img className="logo" src="/src/Logo_image/logo.png" alt="overlay logo"/>
      <div className="button-container">
          <NavLink to="/characters" className="nav-button">
            Characters!
          </NavLink>
          <NavLink to="/recipes" className="nav-button">
            Recipes!
          </NavLink>
        </div>
      </div>
    </div>
   
  )
}

export default Home

