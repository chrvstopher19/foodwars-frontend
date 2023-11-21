import { useState, useEffect } from 'react';
import { getCharacter, editCharacter } from '../services/characters.js';
import { Link, useParams, useNavigate } from 'react-router-dom';
import "../css/DetailPage.css"


function CharacterInfo({setShowNav}) {
  setShowNav(true)
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
          <img className="detail-page-image" src={character.image_Link} alt={character.name} />
          <div>
            <h3>Age: {character.age}</h3>
            <h3>Gender: {character.Gender}</h3>
            <h3>Cuisine Style: {character.Cusine_Style}</h3>
            <h3>Affiliation: {character.Affiliation}</h3>
            <h3>Food Forté: {character.Food_Forte}</h3>
            <h3>Elite 10 Member?: {character.Elite_10_Member}</h3>
            <h3>Generation: {character.Generation}</h3>
            <h3>School: {character.School}</h3>
          </div>

      <div>
          <Link to={`/characters/${characterId}/edit`}>
          <button className=' bg-red-500'>Edit</button>
        </Link>
         {/* <button onClick={handleEdit}>Edit</button> */}
      </div>
    </div>
  )
}

export default CharacterInfo