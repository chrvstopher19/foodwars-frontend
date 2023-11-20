import React from 'react';
import { NavLink } from 'react-router-dom';


function Character({ character }) {
  return (
    <nav>
    <NavLink to={`/characters/${character._id}`}>
        <div className="character-img-container">
            <h1 className="character-name">{character.name}</h1>

            <img className="character-img" src={character.image_Link} alt={character.name}/>
        </div>
    </NavLink >
    </nav>
  );
}

export default Character