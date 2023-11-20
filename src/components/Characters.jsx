import React from 'react'
import {Link} from 'react-router-dom'

function Character({char}) { //destructuring props
  return (
    <div> 
    <Link to ={`/characters/${char._id}`}>
      <img className="char-images" src={char.image_Link} alt={char.name}></img>
      </Link> 
  </div>
  )
}

export default Character