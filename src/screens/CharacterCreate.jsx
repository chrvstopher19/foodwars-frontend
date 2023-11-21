import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createCharacter } from '../services/characters.js'
import "../css/CharacterCreate.css"

function CharacterCreate({setShowNav}) {
  // setShowNav(true)
  const[character, setCharacter] = useState({
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

  let navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()

    await createCharacter(character)
    navigate('/characters')
  }
  const handleChange = (e)=>{
    const {name, value} = e.target
    setCharacter((prevcharacter)=>({ //previous state
      ...prevcharacter, //spread out the old content
      [name]:value //overwrite the previous one
    }))

  }

  return (
    <div>
      <h1>Add a character to our database</h1>
      <form className='create-form' onSubmit={handleSubmit}> 
      {/* Only add event listener to the form ^ */}
      <input
      type="text"
      placeholder="name"
      name="name"
      // Needs value 
      value={character.name}
      onChange={handleChange}
      className="input"
      />
       <input
      type="text"
      placeholder="age"
      name="age"
      // Needs value 
      value={character.age}
      onChange={handleChange}
      className="input"
      />
       <input
      type="text"
      placeholder="Gender"
      name="Gender"
      // Needs value 
      value={character.Gender}
      onChange={handleChange}
      className="input"
      />
       <input
      type="text"
      placeholder="Cuisine_Style"
      name="Cuisine_Style"
      // Needs value 
      value={character.Cuisine_Style}
      onChange={handleChange}
      className="input"
      />
       <input
      type="text"
      placeholder="Affiliation"
      name="Affiliation"
      // Needs value 
      value={character.Affiliation}
      onChange={handleChange}
      className="input"
      />
       <input
      type="text"
      placeholder="Food_Forte"
      name="Food_Forte"
      // Needs value 
      value={character.Food_Forte}
      onChange={handleChange}
      className="input"
      />
        <input
      type="text"
      placeholder="Elite_10_Member"
      name="Elite_10_Member"
      // Needs value 
      value={character.Elite_10_Member}
      onChange={handleChange}
      className="input"
      />
        <input
      type="text"
      placeholder="Generation"
      name="Generation"
      // Needs value 
      value={character.Generation}
      onChange={handleChange}
      className="input"
      />
        <input
      type="text"
      placeholder="School"
      name="School"
      // Needs value 
      value={character.School}
      onChange={handleChange}
      className="input"
      />
        <input
      type="text"
      placeholder="image_Link"
      name="image_Link"
      // Needs value 
      value={character.image_Link}
      onChange={handleChange}
      className="input"
      />
      <button className="bg-red-500" type="submit">submit</button>
      </form>
    </div>
  )
}

export default CharacterCreate