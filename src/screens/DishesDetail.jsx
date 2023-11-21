import { useState, useEffect } from 'react';
import { getDish, editDish } from '../services/dishes.js';
import { Link, useParams, useNavigate } from 'react-router-dom';
import "../css/DetailPage.css"


function DishInfo({setShowNav}) {
  setShowNav(true)
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
          <img className="detail-page-image" src={dish.img_link} alt={dish.dish_name} />
          <div className="table-container">
            {/* <h3>{dish.chef}</h3>
            <h3>{dish.description}</h3>
            <h3>{dish.ingredients}</h3>
            <h3>{dish.recipe}</h3> */}

            <table>
        <tr>
          <td className="left">CHEF NAME</td>
          <td className="right">{dish.chef}</td>
        </tr>
        <tr>
          <td className="left">DESCRIPTION</td>
          <td className="right">{dish.description}</td>
        </tr>
        <tr>
          <td className="left">INGREDIENTS</td>
          <td className="right">{dish.ingredients}</td>
        </tr>
        <tr>
          <td className="left">RECIPE</td>
          <td className="right">{dish.recipe}</td>
        </tr>
      </table>
          </div>

      <div>
          {/* <Link to={`/dishes/${dishesId}/edit`}>
          <button className="bg-red-500">Edit</button>
        </Link> */}
        <Link to = "/dishes">
        <button className="bg-red-500">View All Dishes</button>
        </Link>
         {/* <button onClick={handleEdit}>Edit</button> */}
      </div>
    </div>
  )
}

export default DishInfo