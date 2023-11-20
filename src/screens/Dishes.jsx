import React from 'react'
import {useEffect, useState} from 'react'
import {getDishes} from '../services/dishes.js'
import Dish from '../components/Dish.jsx'

function Dishes() {
    const [dishes , setDishes] = useState([])

    useEffect(()=>{
      fetchDishes()
    }, []) //only fire this function one time 
  
    async function fetchDishes () {
      const allDishes = await getDishes()
      setDishes(allDishes)
    }
  
    return (
      <div>
        <h1>All the Dishes!</h1>
        <div className="dishes-container">
          {
            dishes.map((dish)=>(
              <Dish dish={dish} />
            ))
          }
        </div>
      </div>
    )
  }
export default Dishes