import React from 'react';
import Category from '../../component/category';
import {useState,useEffect} from 'react';
import  "./home.css"


const Home = () => {

    const [products, setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setProduct(data.categories))
       
      },[]);


    return (

        <div className="home-div">
                <div className="filter-div">

        <div className="product-list">
          {
            products.map((category)=> {
              return  <Category category={category} key ={category.idCategory}></Category>
            })
          }
        </div>
        </div>
      </div>


    );
};

export default Home;
