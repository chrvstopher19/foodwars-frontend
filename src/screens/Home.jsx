import React from 'react'
import { Link } from 'react-router-dom'

function Home({setShowNav}) {
  setShowNav(false)
  return (
    <div>
    <div className='red-container'>
        <ul>
        <li><Link to="/characters">CHARACTERS</Link></li>
        <li><Link to="/dishes">RECIPES</Link></li>
        </ul>
    </div>
  </div>
  )
}

export default Home