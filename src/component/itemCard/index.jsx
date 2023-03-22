import React from 'react';
import { Link } from 'react-router-dom';
import  "./productCard.css"


const ItemCard = (props) => {

    const {item} = props;

    return (
      <Link to={`/meal/${item.strMeal}`}>
        <div className="product-card">
          <div className="product-image">
            <img src={item.strMealThumb} />
          </div>
          <div>
            <h3>{item.strMeal}</h3>
          </div>
        </div>
        </Link>

      );


};
export default ItemCard;
