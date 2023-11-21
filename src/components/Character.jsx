import React from 'react'
import {Link} from 'react-router-dom'
import "../css/Characters.css"

function Character({character}) {
  return (
    <Link to={`/characters/${character._id}`}>
        <div className="character-img-container">
            <h1 className="character-name">{character.name}</h1>
            <img className="character-img" src={character.image_Link} alt={character.name}/>
        </div>
    </Link>
  )
}

export default Character