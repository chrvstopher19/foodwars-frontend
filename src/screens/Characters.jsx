import React from 'react'
import {useEffect, useState} from 'react'
import {getCharacters} from '../../src/services/characters.js'
import Characters from '../components/Characters.jsx'

function Characters() {
    const [characters , setCharacter] = useState([])

    useEffect(()=>{
      fetchCharacters()
    },[]) //only fire this function one time 
  
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
             <Characters character={character} />
            ))
          }
        </div>
      </div>
    )
  }
export default Characters