import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'

function Home({setShowNav}) {
  setShowNav(false)
  return (
    <div>
    <div className='red-container'>
        <ul className='home-list'>
        <li className='home-list-item'><Link to="/characters">CHARACTERS</Link></li>
        <li className='home-list-item'><Link to="/dishes">RECIPES</Link></li>
        </ul>
    </div>
  </div>
  )
}

export default Home