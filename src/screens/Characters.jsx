import React from 'react'
import {useEffect, useState} from 'react'
import {getCharacters} from '../../src/services/characters.js'
import Character from '../components/Character.jsx'

function Characters() {
    const [characters , setCharacters] = useState([]);
    const [loading, setLoading]= useState(true);
    const[error,setError]=useState(null);

    useEffect(() => {
      const fetchCharacters = async () => {
        try {
      const allCharacters = await getCharacters();
      setCharacters(allCharacters);
        } catch (error) {
          setError(error);
        }  finally {
          setLoading(false);
        }
      };
        fetchCharacters(); 
      }, []); // empty dependency array only fire once
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error</p>;
      }

      return (
        <div>
          <h1>All the characters!</h1>
          <div className="characters-container">
          {characters.map((character) => (
            <Character key={character._id} character={character} />
          ))}
          </div>
        </div>
        );
      }
     
export default Characters;