import { useState, useEffect } from 'react'
import { getCharacters } from '../services/characters.js'
import Character from '../components/Character.jsx';

function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
  }, [])

  async function fetchCharacters() {
    const allCharacters = await getCharacters()
    setCharacters(allCharacters)
  }

  return (
    <div className='pageContainer'>
      <h1>All the Characters!</h1>
      <div className="characters-container">
        {characters?.map((character, idx) => (
          <Character character={character} key={idx}/>
        ))}
      </div>
    </div>
  )
}

export default Characters

