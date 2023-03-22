import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import  "./mealdet.css"

const MealDetailsPage = () => {

    const { id } = useParams();

    const [meal, setMeal] = useState({});

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data.meals[0]);
          setMeal(data.meals[0])
        })
       
      },[]);


        
        return (


            <div className='div'>
            <h1 className='h1'>{meal.strMeal}</h1>
            <div className="product-image">
              <img  className='img' src={meal.strMealThumb} />
            </div>
            <div className='div'>
              <h3 className='h3'>{meal.strCategory}</h3>
              <p className='p2'>{meal.strArea} </p>
              <p className='p3'>{meal.strInstructions}</p>
              <a href={meal.strYoutube}>Youtube Video</a>        

            </div>
          </div>

        //     <div className="home-div">
        //     <div className="product-list">
              
        //     <h3>{meal.idMeal}</h3>
        //     <h3>{meal.strMeal}</h3>

            
 
             
        //     </div>
        //   </div>
    
    
        )


};

export default MealDetailsPage;