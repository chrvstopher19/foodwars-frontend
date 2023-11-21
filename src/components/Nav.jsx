import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Nav.css"

function Nav({user}) { 
// either use {user} i.e destructuring or props as is
  return (
    <div className='nav'>
        <NavLink id="link"to ="/"><img src="https://www.themoviedb.org/t/p/original/rO11TGG5ZG1LlmSJX0Q1j1AWGZJ.png" id="nav-img" /></NavLink>
        
        {user? <div><NavLink to="/add-character">Add Character</NavLink></div>
        :<div><NavLink to="/sign-up">Sign Up</NavLink></div>}

    </div>
  )
}

export default Nav