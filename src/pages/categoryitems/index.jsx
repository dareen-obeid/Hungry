import React from 'react';
import { useParams } from 'react-router';
import ItemCard from '../../component/itemCard';
import { useState, useEffect } from 'react';

const Categoryitems = () => {

    const [items, setitem] = useState([]);
    const { categoryName } = useParams();

       useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          setitem(data.meals)
        })
       
      },[]);
      

      return (

        <div className="home-div">
        <div className="product-list">
          {
            items.map((item)=> {
              return <ItemCard item={item} key ={item.idCategory}></ItemCard>
            })
          }
        </div>
      </div>


    )

}
export default Categoryitems;