import React from 'react'
import {Link} from 'react-router-dom'


function Character({character}) { //destructuring props
  return (
    <div className='imgContainer'> 
    <Link to = {`/characters/${character._id}`}>
      <img className="char-images" src={character.image_Link} alt={character.name}></img>
      </Link> 
  </div>
  )
}

export default Character