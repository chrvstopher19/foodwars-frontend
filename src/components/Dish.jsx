import React from 'react'
import {Link} from 'react-router-dom'

function Dish({dish}) {
  return (
    <Link to={`/dishes/${dish._id}`}>
        <div>
            <h1>{dish.dish_name}</h1>
            <img src={dish.img_link} alt={dish.dish_name}/>
        </div>
    </Link>
  )
}

export default Dish