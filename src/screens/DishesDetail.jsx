import { useState, useEffect } from 'react';
import { getDish, editDish } from '../services/dishes.js';
import { Link, useParams, useNavigate } from 'react-router-dom';


function DishInfo() {
  const [dish, setDish] = useState({})

  let { dishesId } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchDish() 
  }, [])

  async function fetchDish() {
    const oneDish = await getDish(dishesId)
    setDish(oneDish)
  }

  async function handleEdit() {
    await editDish(dishesId)
    navigate("/dishes")
  }

  return (
    <div>

          <h1> {dish.dish_name}</h1> 
          <img src={dish.image_Link} alt={dish.dish_name} />
          <div>
            <h3>{dish.chef}</h3>
            <h3>{dish.description}</h3>
            <h3>{dish.ingredients}</h3>
            <h3>{dish.recipe}</h3>
          </div>

      <div>
          <Link to={`/dishes/${dishesId}/edit`}>
          {/* <button className=' bg-red-500'>Edit</button> */}
        </Link>
         <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default DishInfo