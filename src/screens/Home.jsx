import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <div className='red-container'>
        <ul>
        <li><Link to="/characters">CHARACTERS</Link></li>
        <li><Link to="/recipes">RECIPES</Link></li>
        </ul>
    </div>
  </div>
  )
}

export default Home