import React from 'react';
import { NavLink } from 'react-router-dom';

function Dish({dish}) {
  return (
    <nav>
    <NavLink to={`/dishes/${dish._id}`}>
        <div>
            <h1>{dish.dish_name}</h1>
            <img src={dish.img_link} alt={dish.dish_name}/>
        </div>
    </NavLink>
    </nav>
  )
}

export default Dish