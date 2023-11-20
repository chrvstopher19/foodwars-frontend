import React from 'react'
import {useEffect, useState} from 'react'
import {getCharacters} from '../../src/services/characters.js'
import Character from '../components/Character.jsx'

function Characters({setShowNav}) {
  setShowNav(true)
    const [characters , setCharacters] = useState([])

    useEffect(()=>{
      fetchCharacters()
    }, []) //only fire this function one time 
  
    async function fetchCharacters () {
      const allCharacters = await getCharacters()
      setCharacters(allCharacters)
    }
  
    return (
      <div>
        <h1>All the characters!</h1>
        <div className="characters-container">
          {
            characters.map((character)=>(
              <Character character={character} />
            ))
          }
        </div>
      </div>
    )
  }
export default Characters