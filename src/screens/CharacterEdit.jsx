import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCharacter, getCharacter } from '../services/characters.js';

function CharacterEdit() {
  const [character, setCharacter] = useState({
    name: "",
    age: "",
    Gender: "",
    Cuisine_Style: "",
    Affiliation: "",
    Food_Forte: "",
    Elite_10_Member: "",
    Generation: "",
    School: "",
    image_Link: "",
  })

  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchCharacter()
  }, [])

  async function fetchCharacter() {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await editCharacter(id, character)
    navigate(`/characters/${id}`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Edit the character in our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
      <input
            className='input-name'
            placeholder='Name'
            value={character.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
        <input
            className='input-age'
            placeholder='age'
            value={character.age}
            name='age'
            required
            onChange={handleChange}
          />
          <textarea
            className='input-Gender'
            placeholder='Gender'
            value={character.Gender}
            name='Gender'
            required
            onChange={handleChange}
          />
           <input
            className='input-Cuisine_Style'
            placeholder='Cuisine_Style'
            value={character.Cuisine_Style}
            name='Cuisine_Style'
            required
            onChange={handleChange}
          />
           <input
            className='input-Affiliation'
            placeholder='Affiliation'
            value={character.Affiliation}
            name='Affiliation'
            required
            onChange={handleChange}
          />
           <input
            className='input-Food_Forte'
            placeholder='Food_Forte'
            value={character.Food_Forte}
            name='Food_Forte'
            required
            onChange={handleChange}
          />
           <input
            className='input-Elite_10_Member'
            placeholder='Elite_10_Member'
            value={character.Elite_10_Member}
            name='Elite_10_Member'
            required
            onChange={handleChange}
          />
           <input
            className='input-Generation'
            placeholder='Generation'
            value={character.Generation}
            name='Generation'
            required
            onChange={handleChange}
          />
           <input
            className='input-School'
            placeholder='School'
            value={character.School}
            name='School'
            required
            onChange={handleChange}
          />
           <input
            className='input-image_Link'
            placeholder='image-Link'
            value={character.image_Link}
            name='image_Link'
            required
            onChange={handleChange}
          />
        <button type="submit">Edit Your Character!</button>
      </form>
    </div>
  )
}

export default CharacterEdit