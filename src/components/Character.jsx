import React from 'react'
import {Link} from 'react-router-dom'

function Character({character}) {
  return (
    <Link to={`/characters/${character._id}`}>
        <div>
            <h1>{character.name}</h1>
            <img src={character.image_Link} alt={character.name}/>
        </div>
    </Link>
  )
}

export default Character