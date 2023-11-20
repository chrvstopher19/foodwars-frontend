import React from 'react'
import {Link} from 'react-router-dom'
import "../css/Dishes.css"

function Dish({dish}) {
  return (
    <Link to={`/dishes/${dish._id}`}>
        <div className="dish-img-container">
            <h1 className="dish-name">{dish.dish_name}</h1>
            <img className="dish-img" src={dish.img_link} alt={dish.dish_name}/>
        </div>
    </Link>
  )
}

export default Dish