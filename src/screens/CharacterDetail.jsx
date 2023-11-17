import { useState, useEffect } from 'react';
import { getCharacter, editCharacter } from '../services/characters.js';
import { Link, useParams, useNavigate } from 'react-router-dom';


function CharacterInfo() {
  const [character, setCharacter] = useState({})

  let { characterId } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
   fetchCharacter() 
  }, [])

  async function fetchCharacter() {
    const oneCharacter = await getCharacter(characterId)
    setCharacter(oneCharacter)
  }

  async function handleEdit() {
    await editCharacter(characterId)
    navigate("/characters")
  }

  return (
    <div>

          <h1> {character.name}</h1> 
          <img src={character.image_Link} alt={character.name} />
          <div>
            <h3>{character.age}</h3>
            <h3>{character.Gender}</h3>
            <h3>{character.Cusine_Style}</h3>
            <h3>{character.Affiliation}</h3>
            <h3>{character.Food_Forte}</h3>
            <h3>{character.Elite_10_Member}</h3>
            <h3>{character.Generation}</h3>
            <h3>{character.School}</h3>
          </div>

      <div>
          <Link to={`/characters/${characterId}/edit`}>
          {/* <button className=' bg-red-500'>Edit</button> */}
        </Link>
         <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default CharacterInfo