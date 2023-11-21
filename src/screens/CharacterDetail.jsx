import { useState, useEffect } from "react";
import { getCharacter, editCharacter, deleteCharacter } from "../services/characters.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/DetailPage.css";

function CharacterInfo({ setShowNav }) {
  setShowNav(true);
  const [character, setCharacter] = useState({});

  let { characterId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchCharacter();
  }, []);

  async function fetchCharacter() {
    const oneCharacter = await getCharacter(characterId);
    setCharacter(oneCharacter);
  }

  async function handleEdit() {
    await editCharacter(characterId);
    navigate("/characters");
  }
  async function handleDelete(){
    await deleteCharacter(characterId)
    navigate("/characters")
  }

  return (
    <div>
      <h1> {character.name}</h1>
      <img
        className="detail-page-image"
        src={character.image_Link}
        alt={character.name} 
      />
      <div className="table-container">
      <table>
        <tr>
          <td className="left">AGE</td>
          <td className="right">{character.age}</td>
        </tr>
        <tr>
          <td className="left">GENDER</td>
          <td className="right">{character.Gender}</td>
        </tr>
        <tr>
          <td className="left">CUISINE STYLE</td>
          <td className="right">{character.Cuisine_Style}</td>
        </tr>
        <tr>
          <td className="left">AFFILIATION</td>
          <td className="right">{character.Affiliation}</td>
        </tr>
        <tr>
          <td className="left">FOOD FORTÉ</td>
          <td className="right">{character.Food_Forte}</td>
        </tr>
        <tr>
          <td className="left">GENERATION</td>
          <td className="right">{character.Generation}</td>
        </tr>
        <tr>
          <td className="left">SCHOOL</td>
          <td className="right">{character.School}</td>
        </tr>
      </table>
      </div>

      <div>
        <Link to={`/characters/${characterId}/edit`}>
          <button className="bg-red-500">EDIT</button>
        </Link>
        <button className="bg-red-500" onClick={handleDelete}>Delete</button>
        
      </div>
    </div>
  );
}

export default CharacterInfo;

{/* <h3>Age: {character.age}</h3>
<h3>Gender: {character.Gender}</h3>
<h3>Cuisine Style: {character.Cusine_Style}</h3>
<h3>Affiliation: {character.Affiliation}</h3>
<h3>Food Forté: {character.Food_Forte}</h3>
<h3>Elite 10 Member?: {character.Elite_10_Member}</h3>
<h3>Generation: {character.Generation}</h3>
<h3>School: {character.School}</h3> */}