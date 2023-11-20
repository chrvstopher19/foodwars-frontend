import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Nav.css"

function Nav({user}) { 
// either use {user} i.e destructuring or props as is
  return (
    <div className='nav'>
        <NavLink to ="/">Home</NavLink>
        {user? <div>Logged In</div>
        :<div>Logged Out</div>}

    </div>
  )
}

export default Nav