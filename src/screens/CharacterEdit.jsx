// import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { getCharacter, updateCharacter } from '../services/characters.js'

// const characterEdit = (props) => {

//   let navigate = useNavigate()

//   const [character, setCharacter] = useState({
//     name: "",
//     age: "",
//     Gender: "",
//     Cuisine_Style: "",
//     Affiliation: "",
//     Food_Forte: "",
//     Elite_10_Member: "",
//     Generation: "",
//     School: "",
//     image_Link: "",
//   })

//   let { id } = useParams()

//   useEffect(() => {
//     const fetchCharacter = async () => {
//       const character = await getCharacter(id)
//       setCharacter(character)
//     }
//     fetchCharacter()
//   }, [id])

//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setCharacter({
//       ...character,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     await updateCharacter(id, character)
//     navigate(`/characters/${id}`)
//   }

//   return (
//     <div>
//     <h1>Edit your Character in our Database!</h1>
//         <form className='edit-form' onSubmit={handleSubmit}>
//           <input
//             className='input-name'
//             placeholder='Name'
//             value={character.name}
//             name='name'
//             required
//             autoFocus
//             onChange={handleChange}
//           />
//           <input
//             className='input-age'
//             placeholder='age'
//             value={character.age}
//             name='age'
//             required
//             onChange={handleChange}
//           />
//           <textarea
//             className='input-Gender'
//             placeholder='Gender'
//             value={character.Gender}
//             name='Gender'
//             required
//             onChange={handleChange}
//           />
//            <input
//             className='input-Cuisine_Style'
//             placeholder='Cuisine_Style'
//             value={character.Cuisine_Style}
//             name='Cuisine_Style'
//             required
//             onChange={handleChange}
//           />
//            <input
//             className='input-Affiliation'
//             placeholder='Affiliation'
//             value={character.Affiliation}
//             name='Affiliation'
//             required
//             onChange={handleChange}
//           />
//            <input
//             className='input-Food_Forte'
//             placeholder='Food_Forte'
//             value={character.Food_Forte}
//             name='Food_Forte'
//             required
//             onChange={handleChange}
//           />
//            <input
//             className='input-Elite_10_Member'
//             placeholder='Elite_10_Member'
//             value={character.Elite_10_Member}
//             name='Elite_10_Member'
//             required
//             onChange={handleChange}
//           />
//            <input
//             className='input-Generation'
//             placeholder='Generation'
//             value={character.Generation}
//             name='Generation'
//             required
//             onChange={handleChange}
//           />
//            <input
//             className='input-School'
//             placeholder='School'
//             value={character.School}
//             name='School'
//             required
//             onChange={handleChange}
//           />
//            <input
//             className='input-image_Link'
//             placeholder='image-Link'
//             value={character.image_Link}
//             name='image_Link'
//             required
//             onChange={handleChange}
//           />
//           <button type='submit' className='save-button'>
//             Save
//           </button>
//         </form>
//       </div>
//   )
// }

// export default characterEdit
