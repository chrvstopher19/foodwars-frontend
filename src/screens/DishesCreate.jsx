import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createDish } from '../services/dishes.js'

function DishCreate() {
  const[dish, setDish] = useState({
    chef:"",
    dish_name:"",
    img_link:"",
    description:"",
    ingredients:"",
    recipe:"",
  })

  let navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()

    await createDish(dish)
    navigate('/dishes')
  }
  const handleChange = (e)=>{
    const {name, value} = e.target
    setDish((prevDish)=>({ //previous state
      ...prevDish, //spread out the old content
      [name]:value //overwrite the previous one
    }))

  }

  return (
    <div>
      <h1>Add a dish to our database</h1>
      <form className='create-form' onSubmit={handleSubmit}> 
      {/* Only add event listener to the form ^ */}
      <input
      type="text"
      placeholder="Chef(s)"
      name="chef"
      // Needs value 
      value={dish.chef}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="dish_name"
      name="dish_name"
      // Needs value 
      value={dish.dish_name}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="img_link"
      name="img_link"
      // Needs value 
      value={dish.img_link}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="description"
      name="description"
      // Needs value 
      value={dish.description}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="ingredients"
      name="ingredients"
      // Needs value 
      value={dish.ingredients}
      onChange={handleChange}
      />
       <input
      type="text"
      placeholder="recipe"
      name="recipe"
      // Needs value 
      value={dish.recipe}
      onChange={handleChange}
      />
      <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default DishCreate